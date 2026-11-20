var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _lib/catalog.js
var CATEGORIES = [
  { k: "veg", l: ["\u0633\u0628\u0632\u06CC\u0627\u06BA", "Vegetables"], img: "tomatoes" },
  { k: "dairy", l: ["\u062F\u0648\u062F\u06BE \u0648 \u0627\u0646\u0688\u06D2", "Milk & Eggs"], img: "eggs" },
  { k: "grain", l: ["\u0622\u0679\u0627 \u0648 \u0686\u0627\u0648\u0644", "Atta & Rice"], img: "flour" },
  { k: "oil", l: ["\u06AF\u06BE\u06CC \u0648 \u062A\u06CC\u0644", "Ghee & Oil"], img: "oil" },
  { k: "dal", l: ["\u062F\u0627\u0644\u06CC\u06BA", "Daal"], img: "masoor-dal" },
  { k: "tea", l: ["\u0686\u0627\u0626\u06D2 \u0648 \u0686\u06CC\u0646\u06CC", "Tea & Sugar"], img: "tea" },
  { k: "spice", l: ["\u0645\u0635\u0627\u0644\u062D\u06D2", "Spices"], img: "chili" },
  { k: "clean", l: ["\u0635\u0641\u0627\u0626\u06CC", "Cleaning"], img: "washing-powder" },
  { k: "kids", l: ["\u0628\u06CC\u06A9\u0631\u06CC \u0648 \u0628\u0686\u06D2", "Bakery & Kids"], img: "biscuits" }
];
var PRODUCTS = [
  { id: 1, c: "grain", img: "flour", n: ["\u0686\u06A9\u06CC \u0622\u0679\u0627", "Chakki Atta"], u: ["10 \u06A9\u0644\u0648", "10 kg"], p: 1150, o: 1250 },
  { id: 2, c: "grain", img: "rice", n: ["\u0633\u06CC\u0644\u0627 \u0686\u0627\u0648\u0644", "Sella Rice"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 340 },
  { id: 3, c: "oil", img: "ghee", n: ["\u06AF\u06BE\u06CC", "Cooking Ghee"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 560, o: 620 },
  { id: 4, c: "oil", img: "oil", n: ["\u06A9\u0648\u06A9\u0646\u06AF \u0622\u0626\u0644", "Cooking Oil"], u: ["1 \u0644\u06CC\u0679\u0631", "1 litre"], p: 590, o: 650 },
  { id: 5, c: "dal", img: "chana-dal", n: ["\u062F\u0627\u0644 \u0686\u0646\u0627", "Chana Dal"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 290 },
  { id: 6, c: "dal", img: "masoor-dal", n: ["\u062F\u0627\u0644 \u0645\u0633\u0648\u0631", "Masoor Dal"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 320 },
  { id: 7, c: "tea", img: "sugar", n: ["\u0686\u06CC\u0646\u06CC", "Sugar"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 165 },
  { id: 8, c: "tea", img: "tea", n: ["\u0686\u0627\u0626\u06D2 \u067E\u062A\u06CC", "Tea Leaves"], u: ["475 \u06AF\u0631\u0627\u0645", "475 g"], p: 850, o: 950 },
  { id: 9, c: "clean", img: "washing-powder", n: ["\u0633\u0631\u0641", "Washing Powder"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 420, o: 480 },
  { id: 10, c: "clean", img: "soap", n: ["\u0646\u06C1\u0627\u0646\u06D2 \u06A9\u0627 \u0635\u0627\u0628\u0646", "Bath Soap"], u: ["2 \u0639\u062F\u062F", "2 bars"], p: 220 },
  { id: 11, c: "kids", img: "baby-milk", n: ["\u0628\u0686\u0648\u06BA \u06A9\u0627 \u062F\u0648\u062F\u06BE", "Baby Milk"], u: ["400 \u06AF\u0631\u0627\u0645", "400 g"], p: 1450 },
  { id: 12, c: "kids", img: "biscuits", n: ["\u0628\u0633\u06A9\u0679", "Biscuits"], u: ["\u0641\u06CC\u0645\u0644\u06CC \u067E\u06CC\u06A9", "Family pack"], p: 150 },
  { id: 13, c: "dairy", img: "milk", n: ["\u062F\u0648\u062F\u06BE", "Milk"], u: ["1 \u0644\u06CC\u0679\u0631", "1 litre"], p: 230 },
  { id: 14, c: "dairy", img: "eggs", n: ["\u0627\u0646\u0688\u06D2", "Eggs"], u: ["1 \u062F\u0631\u062C\u0646", "1 dozen"], p: 380, o: 420 },
  { id: 15, c: "kids", img: "bread", n: ["\u0688\u0628\u0644 \u0631\u0648\u0679\u06CC", "Bread"], u: ["\u0628\u0691\u06CC", "Large"], p: 180 },
  { id: 16, c: "veg", img: "potatoes", n: ["\u0622\u0644\u0648", "Potatoes"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 90 },
  { id: 17, c: "veg", img: "onions", n: ["\u067E\u06CC\u0627\u0632", "Onions"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 140 },
  { id: 18, c: "veg", img: "tomatoes", n: ["\u0679\u0645\u0627\u0679\u0631", "Tomatoes"], u: ["1 \u06A9\u0644\u0648", "1 kg"], p: 160 },
  { id: 19, c: "spice", img: "chili", n: ["\u0644\u0627\u0644 \u0645\u0631\u0686", "Red Chili"], u: ["200 \u06AF\u0631\u0627\u0645", "200 g"], p: 260 }
];
var STORE = {
  name: ["\u0645\u0645\u062A\u0627\u0632 \u062C\u0646\u0631\u0644 \u0627\u0633\u0679\u0648\u0631", "Mumtaz General Store"],
  wallet: "0300 0000000",
  walletName: "Mumtaz General Store"
};

// api/[[path]].js
var SCHEMA = [
  `CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone TEXT NOT NULL UNIQUE, address TEXT, pin_hash TEXT NOT NULL, token TEXT NOT NULL UNIQUE, credit_limit INTEGER NOT NULL DEFAULT 25000, created_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, items TEXT NOT NULL, total INTEGER NOT NULL, pay TEXT NOT NULL, delivery TEXT NOT NULL DEFAULT 'home', note TEXT, status TEXT NOT NULL DEFAULT 'new', paid INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS ledger (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, type TEXT NOT NULL, amount INTEGER NOT NULL, note TEXT, order_id INTEGER, created_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS payments (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, amount INTEGER NOT NULL, method TEXT NOT NULL, tid TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending', order_id INTEGER, created_at TEXT NOT NULL)`,
  `CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id)`,
  `CREATE INDEX IF NOT EXISTS idx_ledger_customer ON ledger(customer_id)`,
  `CREATE INDEX IF NOT EXISTS idx_payments_customer ON payments(customer_id)`
];
var schemaReady = false;
var now = /* @__PURE__ */ __name(() => (/* @__PURE__ */ new Date()).toISOString(), "now");
var json = /* @__PURE__ */ __name((data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
}), "json");
var fail = /* @__PURE__ */ __name((code, status = 400) => json({ error: code }, status), "fail");
var digits = /* @__PURE__ */ __name((s) => String(s || "").replace(/\D/g, ""), "digits");
var clean = /* @__PURE__ */ __name((s, max = 200) => String(s || "").trim().slice(0, max), "clean");
async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(sha256, "sha256");
function newToken() {
  const a = new Uint8Array(24);
  crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(newToken, "newToken");
function pinOk(pin) {
  return /^\d{4,6}$/.test(String(pin || ""));
}
__name(pinOk, "pinOk");
async function ensureSchema(db) {
  if (schemaReady) return;
  await db.batch(SCHEMA.map((s) => db.prepare(s)));
  schemaReady = true;
}
__name(ensureSchema, "ensureSchema");
async function balanceOf(db, customerId) {
  const r = await db.prepare(`SELECT COALESCE(SUM(CASE WHEN type='u' THEN amount ELSE -amount END),0) AS bal FROM ledger WHERE customer_id=?`).bind(customerId).first();
  return r ? r.bal : 0;
}
__name(balanceOf, "balanceOf");
function publicCustomer(c) {
  return { id: c.id, name: c.name, phone: c.phone, address: c.address, credit_limit: c.credit_limit, created_at: c.created_at };
}
__name(publicCustomer, "publicCustomer");
function parseOrder(o) {
  return Object.assign({}, o, { items: JSON.parse(o.items) });
}
__name(parseOrder, "parseOrder");
async function customerFromRequest(db, request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!token) return null;
  return db.prepare("SELECT * FROM customers WHERE token=?").bind(token).first();
}
__name(customerFromRequest, "customerFromRequest");
async function customerBundle(db, c) {
  const [orders, ledger, payments, bal] = await Promise.all([
    db.prepare("SELECT * FROM orders WHERE customer_id=? ORDER BY id DESC LIMIT 100").bind(c.id).all(),
    db.prepare("SELECT * FROM ledger WHERE customer_id=? ORDER BY id DESC LIMIT 200").bind(c.id).all(),
    db.prepare("SELECT * FROM payments WHERE customer_id=? ORDER BY id DESC LIMIT 50").bind(c.id).all(),
    balanceOf(db, c.id)
  ]);
  return { customer: publicCustomer(c), balance: bal, orders: orders.results.map(parseOrder), ledger: ledger.results, payments: payments.results };
}
__name(customerBundle, "customerBundle");
async function onRequest(context) {
  const { request, env, params } = context;
  if (!env.DB) return fail("database_not_configured", 500);
  const db = env.DB;
  try {
    await ensureSchema(db);
  } catch (e) {
    return fail("database_error", 500);
  }
  const path = (params.path || []).join("/");
  const method = request.method;
  let body = {};
  if (method === "POST") {
    try {
      body = await request.json();
    } catch (e) {
      return fail("bad_json");
    }
  }
  try {
    if (path === "catalog" && method === "GET") {
      return json({ products: PRODUCTS, categories: CATEGORIES, store: STORE });
    }
    if (path === "register" && method === "POST") {
      const name = clean(body.name, 80), phone = digits(body.phone), address = clean(body.address, 200), pin = String(body.pin || "");
      if (!name) return fail("name_required");
      if (phone.length < 10 || phone.length > 13) return fail("phone_invalid");
      if (!pinOk(pin)) return fail("pin_invalid");
      const exists = await db.prepare("SELECT id FROM customers WHERE phone=?").bind(phone).first();
      if (exists) return fail("phone_exists", 409);
      const token = newToken();
      await db.prepare("INSERT INTO customers (name, phone, address, pin_hash, token, created_at) VALUES (?,?,?,?,?,?)").bind(name, phone, address, await sha256(phone + ":" + pin), token, now()).run();
      return json({ token });
    }
    if (path === "login" && method === "POST") {
      const phone = digits(body.phone), pin = String(body.pin || "");
      const c = await db.prepare("SELECT * FROM customers WHERE phone=?").bind(phone).first();
      if (!c || c.pin_hash !== await sha256(phone + ":" + pin)) return fail("login_failed", 401);
      return json({ token: c.token });
    }
    if (path === "me" || path === "orders" || path === "payments") {
      const c = await customerFromRequest(db, request);
      if (!c) return fail("unauthorized", 401);
      if (path === "me" && method === "GET") return json(await customerBundle(db, c));
      if (path === "orders" && method === "POST") {
        const pay = ["khata", "cash", "ep"].includes(body.pay) ? body.pay : null;
        if (!pay) return fail("pay_invalid");
        const delivery = body.delivery === "pickup" ? "pickup" : "home";
        const items = [];
        let total = 0;
        for (const row of Array.isArray(body.items) ? body.items.slice(0, 60) : []) {
          const p = PRODUCTS.find((x) => x.id === Number(row[0]));
          const q = Math.floor(Number(row[1]));
          if (!p || !(q > 0 && q <= 99)) continue;
          items.push({ id: p.id, name: p.n, unit: p.u, img: p.img, price: p.p, qty: q });
          total += p.p * q;
        }
        if (!items.length) return fail("cart_empty");
        const tid = clean(body.tid, 40);
        if (pay === "ep" && !tid) return fail("tid_required");
        const t = now();
        const res = await db.prepare("INSERT INTO orders (customer_id, items, total, pay, delivery, note, status, paid, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)").bind(c.id, JSON.stringify(items), total, pay, delivery, clean(body.note, 300), "new", 0, t, t).run();
        const orderId = res.meta.last_row_id;
        if (pay === "ep") {
          const m = body.method === "jc" ? "jc" : "ep";
          await db.prepare("INSERT INTO payments (customer_id, amount, method, tid, status, order_id, created_at) VALUES (?,?,?,?,?,?,?)").bind(c.id, total, m, tid, "pending", orderId, t).run();
        }
        return json({ ok: true, order_id: orderId });
      }
      if (path === "payments" && method === "POST") {
        const amount = Math.floor(Number(body.amount));
        const tid = clean(body.tid, 40);
        if (!(amount > 0 && amount <= 1e7)) return fail("amount_invalid");
        if (!tid) return fail("tid_required");
        await db.prepare("INSERT INTO payments (customer_id, amount, method, tid, status, order_id, created_at) VALUES (?,?,?,?,?,?,?)").bind(c.id, amount, body.method === "jc" ? "jc" : "ep", tid, "pending", null, now()).run();
        return json({ ok: true });
      }
      return fail("not_found", 404);
    }
    if (path.startsWith("shop/")) {
      const expected = String(env.SHOP_PIN || "1234");
      if ((request.headers.get("x-shop-pin") || "") !== expected) return fail("shop_unauthorized", 401);
      const parts = path.split("/");
      if (parts[1] === "summary" && method === "GET") {
        const [orders, customers, payments] = await Promise.all([
          db.prepare(`SELECT o.*, c.name AS c_name, c.phone AS c_phone, c.address AS c_address FROM orders o JOIN customers c ON c.id=o.customer_id ORDER BY o.id DESC LIMIT 200`).all(),
          db.prepare(`SELECT c.id, c.name, c.phone, c.address, c.credit_limit, c.created_at,
                        COALESCE((SELECT SUM(CASE WHEN type='u' THEN amount ELSE -amount END) FROM ledger l WHERE l.customer_id=c.id),0) AS balance,
                        (SELECT COUNT(*) FROM orders o WHERE o.customer_id=c.id) AS order_count
                      FROM customers c ORDER BY balance DESC, c.id DESC`).all(),
          db.prepare(`SELECT p.*, c.name AS c_name, c.phone AS c_phone FROM payments p JOIN customers c ON c.id=p.customer_id ORDER BY p.id DESC LIMIT 100`).all()
        ]);
        return json({ orders: orders.results.map(parseOrder), customers: customers.results, payments: payments.results, server_time: now() });
      }
      if (parts[1] === "customers" && parts[2] && method === "GET") {
        const c = await db.prepare("SELECT * FROM customers WHERE id=?").bind(Number(parts[2])).first();
        if (!c) return fail("not_found", 404);
        return json(await customerBundle(db, c));
      }
      if (parts[1] === "orders" && parts[2] && method === "POST") {
        const id = Number(parts[2]);
        const o = await db.prepare("SELECT * FROM orders WHERE id=?").bind(id).first();
        if (!o) return fail("not_found", 404);
        const status = body.status;
        if (!["packing", "delivered", "cancelled"].includes(status)) return fail("status_invalid");
        if (o.status === "delivered" || o.status === "cancelled") return fail("order_closed", 409);
        const stmts = [db.prepare("UPDATE orders SET status=?, updated_at=? WHERE id=?").bind(status, now(), id)];
        if (status === "delivered" && o.pay === "khata") {
          stmts.push(db.prepare("INSERT INTO ledger (customer_id, type, amount, note, order_id, created_at) VALUES (?,?,?,?,?,?)").bind(o.customer_id, "u", o.total, "Order #" + id, id, now()));
        }
        if (status === "cancelled") {
          stmts.push(db.prepare(`UPDATE payments SET status='rej' WHERE order_id=? AND status='pending'`).bind(id));
        }
        await db.batch(stmts);
        return json({ ok: true });
      }
      if (parts[1] === "payments" && parts[2] && method === "POST") {
        const id = Number(parts[2]);
        const p = await db.prepare("SELECT * FROM payments WHERE id=?").bind(id).first();
        if (!p) return fail("not_found", 404);
        if (p.status !== "pending") return fail("payment_closed", 409);
        if (body.action === "rej") {
          await db.prepare(`UPDATE payments SET status='rej' WHERE id=?`).bind(id).run();
          return json({ ok: true });
        }
        if (body.action !== "ok") return fail("action_invalid");
        const stmts = [db.prepare(`UPDATE payments SET status='ok' WHERE id=?`).bind(id)];
        if (p.order_id) {
          stmts.push(db.prepare("UPDATE orders SET paid=1, updated_at=? WHERE id=?").bind(now(), p.order_id));
        } else {
          stmts.push(db.prepare("INSERT INTO ledger (customer_id, type, amount, note, order_id, created_at) VALUES (?,?,?,?,?,?)").bind(p.customer_id, "w", p.amount, (p.method === "jc" ? "JazzCash" : "Easypaisa") + " \xB7 TID " + p.tid, null, now()));
        }
        await db.batch(stmts);
        return json({ ok: true });
      }
      if (parts[1] === "ledger" && method === "POST") {
        const cid = Number(body.customer_id), amount = Math.floor(Number(body.amount));
        const type = body.type === "w" ? "w" : body.type === "u" ? "u" : null;
        if (!type) return fail("type_invalid");
        if (!(amount > 0 && amount <= 1e7)) return fail("amount_invalid");
        const c = await db.prepare("SELECT id FROM customers WHERE id=?").bind(cid).first();
        if (!c) return fail("not_found", 404);
        await db.prepare("INSERT INTO ledger (customer_id, type, amount, note, order_id, created_at) VALUES (?,?,?,?,?,?)").bind(cid, type, amount, clean(body.note, 200), null, now()).run();
        return json({ ok: true });
      }
      if (parts[1] === "limit" && method === "POST") {
        const cid = Number(body.customer_id), lim = Math.floor(Number(body.credit_limit));
        if (!(lim >= 0 && lim <= 1e7)) return fail("amount_invalid");
        await db.prepare("UPDATE customers SET credit_limit=? WHERE id=?").bind(lim, cid).run();
        return json({ ok: true });
      }
      return fail("not_found", 404);
    }
    return fail("not_found", 404);
  } catch (e) {
    return fail("server_error", 500);
  }
}
__name(onRequest, "onRequest");

// ../.wrangler/tmp/pages-6e2VWY/functionsRoutes-0.6740917433616649.mjs
var routes = [
  {
    routePath: "/api/:path*",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  }
];

// ../../wr/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../wr/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function getOriginalPathPrefix(requestPath, normalizedPrefix) {
  let end = 0;
  for (let index = 0; index < normalizedPrefix.length; index++) {
    end++;
    if (normalizedPrefix[index] === "/") {
      while (requestPath[end] === "/") {
        end++;
      }
    }
  }
  return requestPath.slice(0, end);
}
__name(getOriginalPathPrefix, "getOriginalPathPrefix");
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  const normalizedRequestPath = requestPath.replace(/\/+/g, "/");
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath) || routeMatcher(normalizedRequestPath);
    const originalMountMatch = mountMatcher(requestPath);
    const mountMatchResult = originalMountMatch || mountMatcher(normalizedRequestPath);
    if (matchResult && mountMatchResult) {
      const path = originalMountMatch ? originalMountMatch.path : getOriginalPathPrefix(requestPath, mountMatchResult.path);
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// ../../wr/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../wr/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-D4PwFr/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// ../../wr/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-D4PwFr/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.40296758882704653.mjs.map
