// Mumtaz General Store API — Cloudflare Pages Function backed by a D1 database bound as `DB`.
//
// Customer routes (Authorization: Bearer <token>):
//   GET  /api/catalog                      products, categories, store wallet
//   POST /api/register {name, phone, address, pin}
//   POST /api/login    {phone, pin}
//   GET  /api/me                           profile, balance, orders, ledger, payments
//   POST /api/orders   {items:[[id,qty]], pay:'khata'|'cash'|'ep', method?, tid?, note?}
//   POST /api/payments {amount, method:'ep'|'jc', tid}
//
// Shop routes (header X-Shop-Pin: <SHOP_PIN env var>):
//   GET  /api/shop/summary
//   GET  /api/shop/customers/:id
//   POST /api/shop/orders/:id   {status:'packing'|'delivered'|'cancelled'}
//   POST /api/shop/payments/:id {action:'ok'|'rej'}
//   POST /api/shop/ledger       {customer_id, type:'u'|'w', amount, note}

import { PRODUCTS, CATEGORIES, STORE } from '../_lib/catalog.js';

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone TEXT NOT NULL UNIQUE, address TEXT, pin_hash TEXT NOT NULL, token TEXT NOT NULL UNIQUE, credit_limit INTEGER NOT NULL DEFAULT 25000, created_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, items TEXT NOT NULL, total INTEGER NOT NULL, pay TEXT NOT NULL, delivery TEXT NOT NULL DEFAULT 'home', note TEXT, status TEXT NOT NULL DEFAULT 'new', paid INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS ledger (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, type TEXT NOT NULL, amount INTEGER NOT NULL, note TEXT, order_id INTEGER, created_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS payments (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, amount INTEGER NOT NULL, method TEXT NOT NULL, tid TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending', order_id INTEGER, created_at TEXT NOT NULL)`,
  `CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id)`,
  `CREATE INDEX IF NOT EXISTS idx_ledger_customer ON ledger(customer_id)`,
  `CREATE INDEX IF NOT EXISTS idx_payments_customer ON payments(customer_id)`,
];

let schemaReady = false;
const now = () => new Date().toISOString();
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});
const fail = (code, status = 400) => json({ error: code }, status);
const digits = (s) => String(s || '').replace(/\D/g, '');
const clean = (s, max = 200) => String(s || '').trim().slice(0, max);

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function newToken() {
  const a = new Uint8Array(24);
  crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function pinOk(pin) { return /^\d{4,6}$/.test(String(pin || '')); }

async function ensureSchema(db) {
  if (schemaReady) return;
  await db.batch(SCHEMA.map((s) => db.prepare(s)));
  schemaReady = true;
}

async function balanceOf(db, customerId) {
  const r = await db.prepare(`SELECT COALESCE(SUM(CASE WHEN type='u' THEN amount ELSE -amount END),0) AS bal FROM ledger WHERE customer_id=?`).bind(customerId).first();
  return r ? r.bal : 0;
}

function publicCustomer(c) {
  return { id: c.id, name: c.name, phone: c.phone, address: c.address, credit_limit: c.credit_limit, created_at: c.created_at };
}

function parseOrder(o) {
  return Object.assign({}, o, { items: JSON.parse(o.items) });
}

async function customerFromRequest(db, request) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!token) return null;
  return db.prepare('SELECT * FROM customers WHERE token=?').bind(token).first();
}

async function customerBundle(db, c) {
  const [orders, ledger, payments, bal] = await Promise.all([
    db.prepare('SELECT * FROM orders WHERE customer_id=? ORDER BY id DESC LIMIT 100').bind(c.id).all(),
    db.prepare('SELECT * FROM ledger WHERE customer_id=? ORDER BY id DESC LIMIT 200').bind(c.id).all(),
    db.prepare('SELECT * FROM payments WHERE customer_id=? ORDER BY id DESC LIMIT 50').bind(c.id).all(),
    balanceOf(db, c.id),
  ]);
  return { customer: publicCustomer(c), balance: bal, orders: orders.results.map(parseOrder), ledger: ledger.results, payments: payments.results };
}

export async function onRequest(context) {
  const { request, env, params } = context;
  if (!env.DB) return fail('database_not_configured', 500);
  const db = env.DB;
  try {
    await ensureSchema(db);
  } catch (e) {
    return fail('database_error', 500);
  }
  const path = (params.path || []).join('/');
  const method = request.method;
  let body = {};
  if (method === 'POST') {
    try { body = await request.json(); } catch (e) { return fail('bad_json'); }
  }

  try {
    // ---------- public ----------
    if (path === 'catalog' && method === 'GET') {
      return json({ products: PRODUCTS, categories: CATEGORIES, store: STORE });
    }

    if (path === 'register' && method === 'POST') {
      const name = clean(body.name, 80), phone = digits(body.phone), address = clean(body.address, 200), pin = String(body.pin || '');
      if (!name) return fail('name_required');
      if (phone.length < 10 || phone.length > 13) return fail('phone_invalid');
      if (!pinOk(pin)) return fail('pin_invalid');
      const exists = await db.prepare('SELECT id FROM customers WHERE phone=?').bind(phone).first();
      if (exists) return fail('phone_exists', 409);
      const token = newToken();
      await db.prepare('INSERT INTO customers (name, phone, address, pin_hash, token, created_at) VALUES (?,?,?,?,?,?)')
        .bind(name, phone, address, await sha256(phone + ':' + pin), token, now()).run();
      return json({ token });
    }

    if (path === 'login' && method === 'POST') {
      const phone = digits(body.phone), pin = String(body.pin || '');
      const c = await db.prepare('SELECT * FROM customers WHERE phone=?').bind(phone).first();
      if (!c || c.pin_hash !== await sha256(phone + ':' + pin)) return fail('login_failed', 401);
      return json({ token: c.token });
    }

    // ---------- customer ----------
    if (path === 'me' || path === 'orders' || path === 'payments') {
      const c = await customerFromRequest(db, request);
      if (!c) return fail('unauthorized', 401);

      if (path === 'me' && method === 'GET') return json(await customerBundle(db, c));

      if (path === 'orders' && method === 'POST') {
        const pay = ['khata', 'cash', 'ep'].includes(body.pay) ? body.pay : null;
        if (!pay) return fail('pay_invalid');
        const delivery = body.delivery === 'pickup' ? 'pickup' : 'home';
        const items = [];
        let total = 0;
        for (const row of Array.isArray(body.items) ? body.items.slice(0, 60) : []) {
          const p = PRODUCTS.find((x) => x.id === Number(row[0]));
          const q = Math.floor(Number(row[1]));
          if (!p || !(q > 0 && q <= 99)) continue;
          items.push({ id: p.id, name: p.n, unit: p.u, img: p.img, price: p.p, qty: q });
          total += p.p * q;
        }
        if (!items.length) return fail('cart_empty');
        const tid = clean(body.tid, 40);
        if (pay === 'ep' && !tid) return fail('tid_required');
        const t = now();
        const res = await db.prepare('INSERT INTO orders (customer_id, items, total, pay, delivery, note, status, paid, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)')
          .bind(c.id, JSON.stringify(items), total, pay, delivery, clean(body.note, 300), 'new', 0, t, t).run();
        const orderId = res.meta.last_row_id;
        if (pay === 'ep') {
          const m = body.method === 'jc' ? 'jc' : 'ep';
          await db.prepare('INSERT INTO payments (customer_id, amount, method, tid, status, order_id, created_at) VALUES (?,?,?,?,?,?,?)')
            .bind(c.id, total, m, tid, 'pending', orderId, t).run();
        }
        return json({ ok: true, order_id: orderId });
      }

      if (path === 'payments' && method === 'POST') {
        const amount = Math.floor(Number(body.amount));
        const tid = clean(body.tid, 40);
        if (!(amount > 0 && amount <= 10000000)) return fail('amount_invalid');
        if (!tid) return fail('tid_required');
        await db.prepare('INSERT INTO payments (customer_id, amount, method, tid, status, order_id, created_at) VALUES (?,?,?,?,?,?,?)')
          .bind(c.id, amount, body.method === 'jc' ? 'jc' : 'ep', tid, 'pending', null, now()).run();
        return json({ ok: true });
      }
      return fail('not_found', 404);
    }

    // ---------- shop ----------
    if (path.startsWith('shop/')) {
      const expected = String(env.SHOP_PIN || '1234');
      if ((request.headers.get('x-shop-pin') || '') !== expected) return fail('shop_unauthorized', 401);
      const parts = path.split('/');

      if (parts[1] === 'summary' && method === 'GET') {
        const [orders, customers, payments] = await Promise.all([
          db.prepare(`SELECT o.*, c.name AS c_name, c.phone AS c_phone, c.address AS c_address FROM orders o JOIN customers c ON c.id=o.customer_id ORDER BY o.id DESC LIMIT 200`).all(),
          db.prepare(`SELECT c.id, c.name, c.phone, c.address, c.credit_limit, c.created_at,
                        COALESCE((SELECT SUM(CASE WHEN type='u' THEN amount ELSE -amount END) FROM ledger l WHERE l.customer_id=c.id),0) AS balance,
                        (SELECT COUNT(*) FROM orders o WHERE o.customer_id=c.id) AS order_count
                      FROM customers c ORDER BY balance DESC, c.id DESC`).all(),
          db.prepare(`SELECT p.*, c.name AS c_name, c.phone AS c_phone FROM payments p JOIN customers c ON c.id=p.customer_id ORDER BY p.id DESC LIMIT 100`).all(),
        ]);
        return json({ orders: orders.results.map(parseOrder), customers: customers.results, payments: payments.results, server_time: now() });
      }

      if (parts[1] === 'customers' && parts[2] && method === 'GET') {
        const c = await db.prepare('SELECT * FROM customers WHERE id=?').bind(Number(parts[2])).first();
        if (!c) return fail('not_found', 404);
        return json(await customerBundle(db, c));
      }

      if (parts[1] === 'orders' && parts[2] && method === 'POST') {
        const id = Number(parts[2]);
        const o = await db.prepare('SELECT * FROM orders WHERE id=?').bind(id).first();
        if (!o) return fail('not_found', 404);
        const status = body.status;
        if (!['packing', 'delivered', 'cancelled'].includes(status)) return fail('status_invalid');
        if (o.status === 'delivered' || o.status === 'cancelled') return fail('order_closed', 409);
        const stmts = [db.prepare('UPDATE orders SET status=?, updated_at=? WHERE id=?').bind(status, now(), id)];
        if (status === 'delivered' && o.pay === 'khata') {
          stmts.push(db.prepare('INSERT INTO ledger (customer_id, type, amount, note, order_id, created_at) VALUES (?,?,?,?,?,?)')
            .bind(o.customer_id, 'u', o.total, 'Order #' + id, id, now()));
        }
        if (status === 'cancelled') {
          stmts.push(db.prepare(`UPDATE payments SET status='rej' WHERE order_id=? AND status='pending'`).bind(id));
        }
        await db.batch(stmts);
        return json({ ok: true });
      }

      if (parts[1] === 'payments' && parts[2] && method === 'POST') {
        const id = Number(parts[2]);
        const p = await db.prepare('SELECT * FROM payments WHERE id=?').bind(id).first();
        if (!p) return fail('not_found', 404);
        if (p.status !== 'pending') return fail('payment_closed', 409);
        if (body.action === 'rej') {
          await db.prepare(`UPDATE payments SET status='rej' WHERE id=?`).bind(id).run();
          return json({ ok: true });
        }
        if (body.action !== 'ok') return fail('action_invalid');
        const stmts = [db.prepare(`UPDATE payments SET status='ok' WHERE id=?`).bind(id)];
        if (p.order_id) {
          stmts.push(db.prepare('UPDATE orders SET paid=1, updated_at=? WHERE id=?').bind(now(), p.order_id));
        } else {
          stmts.push(db.prepare('INSERT INTO ledger (customer_id, type, amount, note, order_id, created_at) VALUES (?,?,?,?,?,?)')
            .bind(p.customer_id, 'w', p.amount, (p.method === 'jc' ? 'JazzCash' : 'Easypaisa') + ' · TID ' + p.tid, null, now()));
        }
        await db.batch(stmts);
        return json({ ok: true });
      }

      if (parts[1] === 'ledger' && method === 'POST') {
        const cid = Number(body.customer_id), amount = Math.floor(Number(body.amount));
        const type = body.type === 'w' ? 'w' : body.type === 'u' ? 'u' : null;
        if (!type) return fail('type_invalid');
        if (!(amount > 0 && amount <= 10000000)) return fail('amount_invalid');
        const c = await db.prepare('SELECT id FROM customers WHERE id=?').bind(cid).first();
        if (!c) return fail('not_found', 404);
        await db.prepare('INSERT INTO ledger (customer_id, type, amount, note, order_id, created_at) VALUES (?,?,?,?,?,?)')
          .bind(cid, type, amount, clean(body.note, 200), null, now()).run();
        return json({ ok: true });
      }

      if (parts[1] === 'limit' && method === 'POST') {
        const cid = Number(body.customer_id), lim = Math.floor(Number(body.credit_limit));
        if (!(lim >= 0 && lim <= 10000000)) return fail('amount_invalid');
        await db.prepare('UPDATE customers SET credit_limit=? WHERE id=?').bind(lim, cid).run();
        return json({ ok: true });
      }
      return fail('not_found', 404);
    }

    return fail('not_found', 404);
  } catch (e) {
    return fail('server_error', 500);
  }
}
