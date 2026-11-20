// Shop page (/dukan): orders with customer details, customers & khata, mobile payments.
(function () {
  const { store, esc, fmt, img, when, api, toast, waNumber, icons } = window.M;

  const T = {
    ur: {
      title: 'دکاندار پینل', sub: 'ممتاز جنرل اسٹور', lang: 'EN', logo: 'م',
      pinT: 'دکاندار لاگ ان', pinS: 'دکان کا PIN لکھیں', pinL: 'PIN', enter: 'کھولیں', wrongPin: 'PIN غلط ہے',
      orders: 'آرڈرز', customers: 'گاہک', payments: 'ادائیگیاں', logout: 'باہر',
      sNew: 'نئے آرڈر', sPay: 'تصدیق باقی', sOut: 'کل اُدھار', sCust: 'گاہک',
      fActive: 'جاری', fNew: 'نئے', fDone: 'مکمل', fAll: 'سب', noOrders: 'اس فہرست میں کوئی آرڈر نہیں',
      newAlert: (n) => n + ' نیا آرڈر آیا ہے!', see: 'دیکھیں',
      orderNo: 'آرڈر', call: 'کال', whatsapp: 'WhatsApp', home: 'گھر پہنچانا ہے', pickup: 'خود لے جائے گا', noteL: 'ہدایت',
      total: 'کل', accept: 'قبول کریں — پیکنگ شروع', deliver: 'ڈیلیور ہو گیا', deliverK: 'ڈیلیور ہو گیا — کھاتے میں لکھیں', cancel: 'منسوخ', sure: 'پکا منسوخ کریں؟',
      st: { new: 'نیا', packing: 'پیک ہو رہا ہے', delivered: 'پہنچ گیا', cancelled: 'منسوخ', pending: 'تصدیق باقی', ok: 'تصدیق ہو گئی', rej: 'رد' },
      payL: { khata: 'کھاتے میں', cash: 'ڈیلیوری پر نقد', ep: 'موبائل ادائیگی' }, paid: 'ادا شدہ', payWait: 'TID چیک کریں',
      searchC: 'نام یا نمبر تلاش کریں', noCust: 'ابھی کوئی گاہک رجسٹر نہیں ہوا — گاہک کا لنک شیئر کریں', ordersN: 'آرڈر', near: 'حد کے قریب',
      back: 'تمام گاہک', balance: 'بقایا', limit: 'حد', saveLimit: 'حد محفوظ کریں', addr: 'پتہ',
      newEntry: 'نئی انٹری', credit: 'اُدھار سامان', payment: 'وصولی', amount: 'رقم', note: 'تفصیل', notePh: 'مثلاً آٹا، چینی',
      saveCredit: 'اُدھار لکھیں', savePay: 'وصولی لکھیں', bill: 'WhatsApp پر بل بھیجیں', ledger: 'کھاتے کی تفصیل', noLedger: 'ابھی کوئی انٹری نہیں',
      goods: 'سامان', received: 'وصولی', pendingP: 'تصدیق کے لیے', history: 'پچھلی ادائیگیاں', noPend: 'کوئی ادائیگی تصدیق کے لیے باقی نہیں',
      confirm: 'رقم مل گئی — تصدیق', reject: 'رد', forOrder: 'آرڈر', forKhata: 'کھاتے کی ادائیگی',
      updated: 'اپڈیٹ', shareT: 'گاہکوں کو یہ لنک بھیجیں:',
      billHi: 'السلام علیکم', billHead: 'ممتاز جنرل اسٹور — آپ کا حساب', billTotal: 'کل بقایا', billEnd: 'اپنا پورا کھاتہ یہاں دیکھیں:',
      ok: { packing: 'آرڈر قبول — پیکنگ شروع', delivered: 'آرڈر مکمل ✓', cancelled: 'آرڈر منسوخ', pay: 'تصدیق ہو گئی ✓', rej: 'ادائیگی رد', entry: 'انٹری محفوظ ✓', limit: 'حد محفوظ ✓' },
      e: { network: 'انٹرنیٹ کا مسئلہ', amount_invalid: 'درست رقم لکھیں', database_not_configured: 'ڈیٹا بیس ابھی جڑا نہیں (D1 binding)', server_error: 'کچھ غلط ہو گیا', order_closed: 'یہ آرڈر پہلے ہی بند ہے', payment_closed: 'یہ ادائیگی پہلے ہی چیک ہو چکی' },
    },
    en: {
      title: 'Shopkeeper panel', sub: 'Mumtaz General Store', lang: 'اردو', logo: 'M',
      pinT: 'Shopkeeper login', pinS: 'Enter the store PIN', pinL: 'PIN', enter: 'Open', wrongPin: 'Wrong PIN',
      orders: 'Orders', customers: 'Customers', payments: 'Payments', logout: 'Log out',
      sNew: 'New orders', sPay: 'To verify', sOut: 'Credit outstanding', sCust: 'Customers',
      fActive: 'Active', fNew: 'New', fDone: 'Completed', fAll: 'All', noOrders: 'No orders in this list',
      newAlert: (n) => n + ' new order' + (n > 1 ? 's' : '') + '!', see: 'View',
      orderNo: 'Order', call: 'Call', whatsapp: 'WhatsApp', home: 'Home delivery', pickup: 'Customer will pick up', noteL: 'Note',
      total: 'Total', accept: 'Accept — start packing', deliver: 'Mark delivered', deliverK: 'Delivered — add to khata', cancel: 'Cancel', sure: 'Really cancel?',
      st: { new: 'New', packing: 'Packing', delivered: 'Delivered', cancelled: 'Cancelled', pending: 'Awaiting check', ok: 'Confirmed', rej: 'Rejected' },
      payL: { khata: 'On khata', cash: 'Cash on delivery', ep: 'Mobile payment' }, paid: 'paid', payWait: 'check TID',
      searchC: 'Search name or number', noCust: 'No customers registered yet — share the customer link', ordersN: 'orders', near: 'Near limit',
      back: 'All customers', balance: 'Balance', limit: 'Limit', saveLimit: 'Save limit', addr: 'Address',
      newEntry: 'New entry', credit: 'Credit sale', payment: 'Payment', amount: 'Amount', note: 'Details', notePh: 'e.g. flour, sugar',
      saveCredit: 'Add credit', savePay: 'Record payment', bill: 'Send bill on WhatsApp', ledger: 'Khata history', noLedger: 'No entries yet',
      goods: 'Goods', received: 'Payment', pendingP: 'To verify', history: 'Earlier payments', noPend: 'No payments waiting for verification',
      confirm: 'Money received — confirm', reject: 'Reject', forOrder: 'Order', forKhata: 'Khata payment',
      updated: 'Updated', shareT: 'Send customers this link:',
      billHi: 'Assalam-o-Alaikum', billHead: 'Mumtaz General Store — your statement', billTotal: 'Total balance', billEnd: 'See your full khata here:',
      ok: { packing: 'Order accepted — packing', delivered: 'Order completed ✓', cancelled: 'Order cancelled', pay: 'Confirmed ✓', rej: 'Payment rejected', entry: 'Entry saved ✓', limit: 'Limit saved ✓' },
      e: { network: 'Connection problem', amount_invalid: 'Enter a valid amount', database_not_configured: 'Database not connected yet (D1 binding)', server_error: 'Something went wrong', order_closed: 'This order is already closed', payment_closed: 'This payment was already checked' },
    },
  };

  const S = {
    lang: store.get('mgs_lang') || 'ur', pin: store.get('mgs_pin') || '', data: null, tab: 'orders', of: 'active',
    openCust: null, detail: null, cq: '', eType: 'u', eAmt: '', eNote: '', sureCancel: null, busy: false, err: '', updatedAt: null,
    seen: Number(store.get('mgs_seen_order') || 0),
  };
  const t = () => T[S.lang];
  const L = (arr) => (Array.isArray(arr) ? arr[S.lang === 'ur' ? 0 : 1] : arr);
  const app = document.getElementById('app');
  const errMsg = (c) => t().e[c] || t().e.server_error;
  const customerLink = () => location.origin + '/';

  function pinView() {
    return `<main class="center"><div class="logo" style="width:60px;height:60px;border-radius:18px;font-size:26px;margin-bottom:12px;background:#121A15">${t().logo}</div>
      <h2 style="margin:0 0 4px;font-size:22px">${t().pinT}</h2><p class="muted" style="font-size:14px;margin:0 0 16px">${t().pinS}</p>
      <div class="field"><label for="spin">${t().pinL}</label><input class="input n" id="spin" type="password" inputmode="numeric" autocomplete="current-password"></div>
      <div class="err">${esc(S.err)}</div><button class="btn dark" data-act="pin">${t().enter}</button>
      <button class="pillbtn" style="margin:16px auto 0" data-act="lang">${t().lang}</button></main>`;
  }

  function header() {
    return `<div class="top"><div class="row between"><div class="brand"><div class="logo" style="background:#121A15">${t().logo}</div><div><b>${t().title}</b><small>${t().sub}${S.updatedAt ? ' · ' + t().updated + ' ' + S.updatedAt : ''}</small></div></div>
      <div class="row" style="gap:6px"><button class="iconbtn" data-act="refresh" aria-label="Refresh">${icons.refresh}</button><button class="pillbtn" data-act="lang">${t().lang}</button><button class="iconbtn" data-act="logout" aria-label="${t().logout}">${icons.out}</button></div></div></div>`;
  }

  function newCount() { return S.data ? S.data.orders.filter((o) => o.status === 'new').length : 0; }
  function pendCount() { return S.data ? S.data.payments.filter((p) => p.status === 'pending').length : 0; }

  function stats() {
    const out = S.data.customers.reduce((x, c) => x + Math.max(0, c.balance), 0);
    return `<div class="stats"><div class="stat o"><small>${t().sNew}</small><b>${newCount()}</b></div><div class="stat"><small>${t().sPay}</small><b>${pendCount()}</b></div>
      <div class="stat g"><small>${t().sOut}</small><b>${fmt(out)}</b></div><div class="stat"><small>${t().sCust}</small><b>${S.data.customers.length}</b></div></div>`;
  }

  function orderCard(o) {
    const pay = S.data.payments.find((p) => p.order_id === o.id);
    const payLine = t().payL[o.pay] + (o.pay === 'ep' ? (o.paid ? ' · ' + t().paid : pay ? ` · TID <span class="n">${esc(pay.tid)}</span> (${t().payWait})` : '') : '');
    const acts = [];
    if (o.status === 'new') acts.push(`<button class="btn" data-act="ost" data-id="${o.id}" data-v="packing">${t().accept}</button>`);
    if (o.status === 'packing') acts.push(`<button class="btn dark" data-act="ost" data-id="${o.id}" data-v="delivered">${o.pay === 'khata' ? t().deliverK : t().deliver}</button>`);
    if (o.status === 'new' || o.status === 'packing') acts.push(`<button class="btn red sm" data-act="ost" data-id="${o.id}" data-v="cancelled">${S.sureCancel === o.id ? t().sure : t().cancel}</button>`);
    return `<div class="box" style="${o.status === 'new' ? 'border:2px solid var(--orange)' : ''}">
      <div class="row between"><div><b>${t().orderNo} <span class="n">#${o.id}</span></b><div class="muted">${when(o.created_at, S.lang)}</div></div><span class="chip ${o.status}">${t().st[o.status]}</span></div>
      <div class="cust"><div class="row between"><b style="font-size:15px">${esc(o.c_name)}</b><span class="n muted">${esc(o.c_phone)}</span></div>
        ${o.c_address ? `<div>${icons.pin} ${esc(o.c_address)}</div>` : ''}
        <div>${o.delivery === 'pickup' ? t().pickup : t().home}</div>
        ${o.note ? `<div><b>${t().noteL}:</b> ${esc(o.note)}</div>` : ''}
        <div class="linkrow"><a href="tel:${esc(o.c_phone)}">${icons.phone}${t().call}</a><a href="https://wa.me/${waNumber(o.c_phone)}" target="_blank" rel="noopener">${icons.chat}${t().whatsapp}</a></div></div>
      <div>${o.items.map((it) => `<div class="li" style="padding:8px 0"><div class="row"><img src="${img(it.img)}" alt="" style="width:44px;height:44px;border-radius:12px;object-fit:cover;background:var(--tile)"><div><div style="font-size:14px;font-weight:700">${esc(L(it.name))}</div><div class="muted">${esc(L(it.unit))} × <span class="n">${it.qty}</span></div></div></div><span class="n" style="font-weight:700">${fmt(it.price * it.qty)}</span></div>`).join('')}</div>
      <div class="row between" style="margin-top:8px"><span class="muted">${payLine}</span><b class="n" style="font-size:18px">${fmt(o.total)}</b></div>
      ${acts.length ? `<div class="actions">${acts.join('')}</div>` : ''}</div>`;
  }

  function ordersView() {
    const f = { active: (o) => o.status === 'new' || o.status === 'packing', new: (o) => o.status === 'new', done: (o) => o.status === 'delivered' || o.status === 'cancelled', all: () => true }[S.of];
    const list = S.data.orders.filter(f);
    return stats() + `<div class="tabs noscroll">${[['active', t().fActive], ['new', t().fNew], ['done', t().fDone], ['all', t().fAll]].map((x) => `<button class="${S.of === x[0] ? 'on' : ''}" data-act="of" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>` +
      (list.length ? list.map(orderCard).join('') : `<div class="box empty">${t().noOrders}</div>`) +
      `<div class="notice" style="margin-top:16px">${t().shareT} <b class="n">${esc(customerLink())}</b></div>`;
  }

  function customersView() {
    if (S.openCust) return customerDetail();
    const q = S.cq.trim().toLowerCase();
    const list = S.data.customers.filter((c) => !q || c.name.toLowerCase().includes(q) || c.phone.includes(q));
    return `<label class="search" style="margin-bottom:12px">${icons.search}<input id="cq" value="${esc(S.cq)}" placeholder="${t().searchC}" aria-label="${t().searchC}"></label>` +
      (S.data.customers.length ? list.map((c) => `<button class="box" style="width:100%;text-align:start;display:flex;justify-content:space-between;align-items:center;gap:10px" data-act="cust" data-id="${c.id}">
        <div class="row" style="min-width:0"><div class="av">${esc(c.name.charAt(0))}</div><div style="min-width:0"><b>${esc(c.name)}</b><div class="muted"><span class="n">${esc(c.phone)}</span> · ${c.order_count} ${t().ordersN}</div>${c.balance > c.credit_limit * 0.7 ? `<div class="muted" style="color:var(--red)">${t().near}</div>` : ''}</div></div>
        <span class="n ${c.balance > 0 ? 'amt-u' : 'amt-w'}">${fmt(c.balance)}</span></button>`).join('') : `<div class="box empty">${t().noCust}<div class="n" style="margin-top:8px;font-weight:700;color:var(--ink)">${esc(customerLink())}</div></div>`);
  }

  function billText(d) {
    const lines = d.ledger.slice(0, 15).reverse().map((e) => `${new Date(e.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}  ${e.type === 'u' ? t().goods : t().received}  ${fmt(e.amount)}${e.order_id ? '  (' + t().orderNo + ' #' + e.order_id + ')' : e.note ? '  (' + e.note + ')' : ''}`);
    return `${t().billHi} ${d.customer.name}\n${t().billHead}\n\n${lines.join('\n')}\n\n${t().billTotal}: ${fmt(d.balance)}\n${t().billEnd} ${customerLink()}`;
  }

  function customerDetail() {
    const d = S.detail;
    if (!d) return '<div class="spin"></div>';
    const c = d.customer;
    return `<button class="pillbtn" style="margin-bottom:12px" data-act="custback">${S.lang === 'ur' ? '→' : '←'} ${t().back}</button>
      <div class="box"><div class="row between"><div class="row"><div class="av">${esc(c.name.charAt(0))}</div><div><b style="font-size:16px">${esc(c.name)}</b><div class="muted n" style="text-align:start">${esc(c.phone)}</div></div></div>
        <div style="text-align:end"><div class="muted">${t().balance}</div><b class="n ${d.balance > 0 ? 'amt-u' : 'amt-w'}" style="font-size:20px">${fmt(d.balance)}</b></div></div>
        ${c.address ? `<div class="muted" style="margin-top:8px">${t().addr}: ${esc(c.address)}</div>` : ''}
        <div class="linkrow"><a href="tel:${esc(c.phone)}">${icons.phone}${t().call}</a><a href="https://wa.me/${waNumber(c.phone)}?text=${encodeURIComponent(billText(d))}" target="_blank" rel="noopener">${icons.chat}${t().bill}</a></div>
        <div class="row" style="margin-top:10px"><div class="field" style="flex:1;margin:0"><label for="lim">${t().limit}</label><input class="input n" id="lim" inputmode="numeric" value="${c.credit_limit}"></div><button class="btn ghost sm" style="align-self:flex-end" data-act="savelimit">${t().saveLimit}</button></div></div>
      <div class="box soft"><div class="h3" style="margin-top:0">${t().newEntry}</div>
        <div class="seg" style="margin-bottom:12px;background:#fff"><button class="${S.eType === 'u' ? 'on' : ''}" data-act="etype" data-v="u">${t().credit}</button><button class="${S.eType === 'w' ? 'on' : ''}" data-act="etype" data-v="w">${t().payment}</button></div>
        <div class="field"><label for="eamt">${t().amount}</label><input class="input n" id="eamt" inputmode="numeric" value="${esc(S.eAmt)}"></div>
        <div class="field"><label for="enote">${t().note}</label><input class="input" id="enote" value="${esc(S.eNote)}" placeholder="${t().notePh}"></div>
        <div class="err">${esc(S.err)}</div>
        <button class="btn" style="${S.eType === 'u' ? 'background:var(--red)' : ''}" data-act="entry" ${S.busy ? 'disabled' : ''}>${S.eType === 'u' ? t().saveCredit : t().savePay}</button></div>
      <div class="h3">${t().ledger}</div>
      <div class="box">${d.ledger.length ? d.ledger.map((e) => `<div class="li"><div class="row" style="min-width:0"><span class="sign ${e.type}">${e.type === 'u' ? '+' : '−'}</span><div><div style="font-size:14px">${esc(e.order_id ? t().orderNo + ' #' + e.order_id : (e.note || (e.type === 'u' ? t().goods : t().received)))}</div><div class="muted">${when(e.created_at, S.lang)}</div></div></div><span class="n amt-${e.type}">${e.type === 'u' ? '+ ' : '− '}${fmt(e.amount)}</span></div>`).join('') : `<div class="empty" style="padding:16px">${t().noLedger}</div>`}</div>`;
  }

  function paymentsView() {
    const pend = S.data.payments.filter((p) => p.status === 'pending');
    const done = S.data.payments.filter((p) => p.status !== 'pending');
    const card = (p, actions) => `<div class="box"><div class="row between"><div class="row"><div class="av">${esc(p.c_name.charAt(0))}</div><div><b>${esc(p.c_name)}</b><div class="muted">${p.method === 'jc' ? 'JazzCash' : 'Easypaisa'} · ${p.order_id ? t().forOrder + ' #' + p.order_id : t().forKhata}</div></div></div><div style="text-align:end"><b class="n" style="font-size:17px">${fmt(p.amount)}</b>${actions ? '' : `<div><span class="chip ${p.status}">${t().st[p.status]}</span></div>`}</div></div>
      <div class="cust n" style="text-align:start">TID: ${esc(p.tid)} · ${esc(p.c_phone)} · ${when(p.created_at, S.lang)}</div>
      ${actions ? `<div class="actions"><button class="btn" data-act="pay" data-id="${p.id}" data-v="ok">${t().confirm}</button><button class="btn red sm" data-act="pay" data-id="${p.id}" data-v="rej">${t().reject}</button></div>` : ''}</div>`;
    return `<div class="h3" style="margin-top:0">${t().pendingP}</div>` + (pend.length ? pend.map((p) => card(p, true)).join('') : `<div class="box empty">${t().noPend}</div>`) +
      (done.length ? `<div class="h3">${t().history}</div>` + done.map((p) => card(p, false)).join('') : '');
  }

  function render() {
    document.documentElement.lang = S.lang;
    document.body.dir = S.lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.dir = document.body.dir;
    const n = newCount();
    document.title = (n ? '(' + n + ') ' : '') + t().title + ' — ' + t().sub;
    if (!S.pin || (!S.data && S.err)) { app.innerHTML = pinView(); return; }
    if (!S.data) { app.innerHTML = '<div class="spin"></div>'; return; }
    const y = window.scrollY;
    const unseen = S.data.orders.filter((o) => o.id > S.seen && o.status === 'new').length;
    let body = '';
    if (unseen && !(S.tab === 'orders')) body += `<div class="alert"><span>${t().newAlert(unseen)}</span><button class="pillbtn" data-act="tab" data-v="orders">${t().see}</button></div>`;
    body += S.tab === 'orders' ? ordersView() : S.tab === 'customers' ? customersView() : paymentsView();
    const nav = [['orders', icons.box, t().orders, n], ['customers', icons.users, t().customers], ['payments', icons.wallet, t().payments, pendCount()]];
    app.innerHTML = header() + `<main>${body}</main><nav class="nav wide">${nav.map((x) => `<button class="${S.tab === x[0] ? 'on' : ''}" data-act="tab" data-v="${x[0]}">${x[1]}<span>${x[2]}</span>${x[3] ? `<span class="badge">${x[3]}</span>` : ''}</button>`).join('')}</nav>`;
    window.scrollTo(0, y);
    if (S.tab === 'orders') markSeen();
  }

  function markSeen() {
    const max = S.data.orders.reduce((m, o) => Math.max(m, o.id), 0);
    if (max > S.seen) { S.seen = max; store.set('mgs_seen_order', String(max)); }
  }

  async function load(silent) {
    const r = await api('shop/summary', { pin: S.pin });
    if (r.error === 'shop_unauthorized') { S.pin = ''; store.del('mgs_pin'); S.data = null; S.err = t().wrongPin; render(); return false; }
    if (r.error) { if (!silent) toast(errMsg(r.error)); if (!S.data) { S.err = errMsg(r.error); render(); } return false; }
    S.data = r; S.err = '';
    S.updatedAt = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    if (S.openCust) await loadDetail();
    const active = document.activeElement && document.activeElement.tagName === 'INPUT';
    if (!(silent && active)) render();
    return true;
  }
  async function loadDetail() {
    const r = await api('shop/customers/' + S.openCust, { pin: S.pin });
    if (!r.error) S.detail = r;
  }

  async function post(path, body, okKey) {
    S.busy = true; S.err = '';
    const r = await api(path, { pin: S.pin, body });
    S.busy = false;
    if (r.error) { S.err = errMsg(r.error); toast(S.err); render(); return false; }
    if (okKey) toast(t().ok[okKey]);
    await load(true); render();
    return true;
  }

  document.addEventListener('click', async (ev) => {
    const el = ev.target.closest('[data-act]');
    if (!el) return;
    const a = el.dataset.act, v = el.dataset.v, id = el.dataset.id;
    if (a === 'lang') { S.lang = S.lang === 'ur' ? 'en' : 'ur'; store.set('mgs_lang', S.lang); render(); }
    else if (a === 'pin') {
      S.pin = (document.getElementById('spin') || {}).value || ''; S.err = ''; S.data = null;
      app.innerHTML = '<div class="spin"></div>';
      if (await load()) store.set('mgs_pin', S.pin);
    }
    else if (a === 'logout') { S.pin = ''; S.data = null; store.del('mgs_pin'); render(); }
    else if (a === 'refresh') { await load(); toast('✓'); }
    else if (a === 'tab') { S.tab = v; S.openCust = null; S.detail = null; S.err = ''; render(); window.scrollTo(0, 0); }
    else if (a === 'of') { S.of = v; render(); }
    else if (a === 'ost') {
      if (v === 'cancelled' && S.sureCancel !== Number(id)) { S.sureCancel = Number(id); render(); return; }
      S.sureCancel = null;
      await post('shop/orders/' + id, { status: v }, v);
    }
    else if (a === 'pay') await post('shop/payments/' + id, { action: v }, v === 'ok' ? 'pay' : 'rej');
    else if (a === 'cust') { S.openCust = Number(id); S.detail = null; S.eAmt = ''; S.eNote = ''; S.eType = 'u'; S.err = ''; render(); window.scrollTo(0, 0); await loadDetail(); render(); }
    else if (a === 'custback') { S.openCust = null; S.detail = null; render(); }
    else if (a === 'etype') { S.eType = v; render(); }
    else if (a === 'entry') {
      if (await post('shop/ledger', { customer_id: S.openCust, type: S.eType, amount: S.eAmt, note: S.eNote }, 'entry')) { S.eAmt = ''; S.eNote = ''; render(); }
    }
    else if (a === 'savelimit') await post('shop/limit', { customer_id: S.openCust, credit_limit: (document.getElementById('lim') || {}).value }, 'limit');
  });
  document.addEventListener('input', (ev) => {
    const id = ev.target.id;
    if (id === 'cq') { S.cq = ev.target.value; const y = window.scrollY; render(); const el = document.getElementById('cq'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } window.scrollTo(0, y); }
    else if (id === 'eamt') S.eAmt = ev.target.value;
    else if (id === 'enote') S.eNote = ev.target.value;
  });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' && ev.target.id === 'spin') { const b = document.querySelector('[data-act="pin"]'); if (b) b.click(); } });

  setInterval(() => { if (S.pin && S.data && !document.hidden) load(true); }, 10000);

  render();
  if (S.pin) load();
})();
