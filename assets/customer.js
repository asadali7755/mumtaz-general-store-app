// Customer page: shop, cart & order, my account (khata, orders, payments).
(function () {
  const { store, esc, fmt, img, when, api, toast, icons } = window.M;

  const T = {
    ur: {
      store: 'ممتاز جنرل اسٹور', place: 'منصر کیمپ · گھر تک ڈیلیوری', lang: 'EN', logo: 'م',
      home: 'ہوم', cart: 'ٹوکری', account: 'میرا حساب', search: 'آٹا، دودھ، انڈے تلاش کریں…',
      b1t: 'گھر بیٹھے راشن منگوائیں', b1s: 'آرڈر کریں — دکان سے پیک ہو کر آپ کے دروازے تک', b1b: 'سبزیاں دیکھیں',
      b2t: 'کھاتہ اب موبائل پر', b2s: 'ہر خریداری کا حساب آپ کے سامنے، Easypaisa / JazzCash سے ادائیگی', b2b: 'میرا حساب',
      cats: 'کیٹیگریز', all: 'سب دیکھیں', deals: 'آج کی بچت', items: 'سب سامان', none: 'کچھ نہیں ملا', add: 'شامل کریں',
      viewCart: 'ٹوکری دیکھیں', pcs: 'چیزیں', emptyCart: 'ٹوکری خالی ہے', emptyCartSub: 'ہوم سے سامان شامل کریں', shopNow: 'خریداری شروع کریں',
      yourCart: 'آپ کی ٹوکری', payHow: 'ادائیگی کا طریقہ', pKhata: 'کھاتے میں لکھیں', pKhataS: 'مہینے کے آخر میں حساب',
      pCash: 'ڈیلیوری پر نقد', pCashS: 'سامان ملنے پر رقم دیں', pEp: 'Easypaisa / JazzCash', pEpS: 'ابھی موبائل سے ادائیگی',
      delivery: 'ڈیلیوری', dHome: 'گھر پہنچائیں', dPick: 'خود لے لوں گا', note: 'کوئی ہدایت (اختیاری)', notePh: 'مثلاً گلی نمبر، وقت…',
      total: 'کل رقم', order: 'آرڈر بھیجیں', orderPay: 'آرڈر کریں اور ادا کریں', sending: 'بھیجا جا رہا ہے…',
      sendTo: 'اس نمبر پر رقم بھیجیں', step1: 'اپنی Easypaisa یا JazzCash ایپ میں "Send Money" کھولیں', step2: 'اوپر والے نمبر پر رقم بھیجیں',
      step3: 'ملنے والا ٹرانزیکشن آئی ڈی (TID) نیچے لکھیں', tid: 'ٹرانزیکشن آئی ڈی (TID)',
      loginFirst: 'آرڈر کرنے کے لیے پہلے اپنا کھاتہ بنائیں یا لاگ ان کریں',
      regT: 'اپنا کھاتہ بنائیں', regS: 'ایک بار اپنا نام اور نمبر درج کریں — پھر ہر آرڈر اور حساب آپ کے موبائل پر۔',
      loginT: 'لاگ ان کریں', loginS: 'اپنا موبائل نمبر اور PIN لکھیں۔',
      name: 'پورا نام', phone: 'موبائل نمبر', address: 'گھر کا پتہ / محلہ', pin: '4 ہندسوں کا PIN (یاد رکھیں)',
      register: 'کھاتہ بنائیں', login: 'لاگ ان', haveAcc: 'پہلے سے کھاتہ ہے؟ لاگ ان کریں', newAcc: 'نیا کھاتہ بنائیں',
      hello: 'السلام علیکم', balance: 'آپ کا بقایا', limit: 'حد', payKhata: 'Easypaisa / JazzCash سے ادا کریں',
      myOrders: 'میرے آرڈر', ledger: 'کھاتے کی تفصیل', myPays: 'میری ادائیگیاں', noOrders: 'ابھی کوئی آرڈر نہیں', noLedger: 'ابھی کوئی انٹری نہیں',
      logout: 'لاگ آؤٹ', amount: 'رقم', sendPay: 'تصدیق کے لیے بھیجیں', cancel: 'بند کریں',
      payNote: 'دکاندار اپنے اکاؤنٹ میں رقم دیکھ کر تصدیق کرے گا، پھر آپ کا کھاتہ خود اپڈیٹ ہو جائے گا۔',
      st: { new: 'نیا', packing: 'پیک ہو رہا ہے', delivered: 'پہنچ گیا', cancelled: 'منسوخ', pending: 'تصدیق باقی', ok: 'تصدیق ہو گئی', rej: 'رد' },
      payL: { khata: 'کھاتے میں', cash: 'نقد', ep: 'موبائل ادائیگی' }, paid: 'ادا شدہ',
      orderNo: 'آرڈر', goods: 'سامان', received: 'وصولی',
      okOrder: 'آرڈر دکان پر پہنچ گیا ✓', okPay: 'ادائیگی بھیج دی — دکاندار تصدیق کرے گا', okReg: 'خوش آمدید! آپ کا کھاتہ بن گیا',
      e: { network: 'انٹرنیٹ کا مسئلہ — دوبارہ کوشش کریں', name_required: 'نام لکھیں', phone_invalid: 'درست موبائل نمبر لکھیں', pin_invalid: 'PIN صرف 4 سے 6 ہندسے',
        phone_exists: 'یہ نمبر پہلے سے رجسٹر ہے — لاگ ان کریں', login_failed: 'نمبر یا PIN غلط ہے', cart_empty: 'ٹوکری خالی ہے', tid_required: 'TID لکھیں',
        amount_invalid: 'درست رقم لکھیں', unauthorized: 'دوبارہ لاگ ان کریں', database_not_configured: 'سسٹم ابھی تیار نہیں — دکان سے رابطہ کریں', server_error: 'کچھ غلط ہو گیا — دوبارہ کوشش کریں' },
    },
    en: {
      store: 'Mumtaz General Store', place: 'Mansar Camp · Home delivery', lang: 'اردو', logo: 'M',
      home: 'Home', cart: 'Cart', account: 'My account', search: 'Search atta, milk, eggs…',
      b1t: 'Groceries to your door', b1s: 'Order now — packed at the store and brought to your home', b1b: 'Shop vegetables',
      b2t: 'Your khata, on your phone', b2s: 'Every purchase recorded; pay with Easypaisa / JazzCash', b2b: 'My account',
      cats: 'Shop by category', all: 'See all', deals: 'Today’s savings', items: 'All items', none: 'Nothing found', add: 'Add',
      viewCart: 'View cart', pcs: 'items', emptyCart: 'Your cart is empty', emptyCartSub: 'Add items from Home', shopNow: 'Start shopping',
      yourCart: 'Your cart', payHow: 'Payment method', pKhata: 'Add to khata', pKhataS: 'Settle at month end',
      pCash: 'Cash on delivery', pCashS: 'Pay when the goods arrive', pEp: 'Easypaisa / JazzCash', pEpS: 'Pay now from your phone',
      delivery: 'Delivery', dHome: 'Home delivery', dPick: 'I will pick up', note: 'Instructions (optional)', notePh: 'e.g. street number, time…',
      total: 'Total', order: 'Place order', orderPay: 'Order & pay', sending: 'Sending…',
      sendTo: 'Send the money to this number', step1: 'Open "Send Money" in your Easypaisa or JazzCash app', step2: 'Send the amount to the number above',
      step3: 'Type the Transaction ID (TID) you receive below', tid: 'Transaction ID (TID)',
      loginFirst: 'Create your account or log in to place an order',
      regT: 'Create your account', regS: 'Enter your name and number once — every order and balance is then on your phone.',
      loginT: 'Log in', loginS: 'Enter your mobile number and PIN.',
      name: 'Full name', phone: 'Mobile number', address: 'Home address / area', pin: '4-digit PIN (remember it)',
      register: 'Create account', login: 'Log in', haveAcc: 'Already have an account? Log in', newAcc: 'Create a new account',
      hello: 'Assalam-o-Alaikum', balance: 'Your balance', limit: 'Limit', payKhata: 'Pay with Easypaisa / JazzCash',
      myOrders: 'My orders', ledger: 'Khata history', myPays: 'My payments', noOrders: 'No orders yet', noLedger: 'No entries yet',
      logout: 'Log out', amount: 'Amount', sendPay: 'Send for verification', cancel: 'Close',
      payNote: 'The shopkeeper checks the money in their account and confirms; your khata then updates automatically.',
      st: { new: 'New', packing: 'Packing', delivered: 'Delivered', cancelled: 'Cancelled', pending: 'Awaiting check', ok: 'Confirmed', rej: 'Rejected' },
      payL: { khata: 'On khata', cash: 'Cash', ep: 'Mobile payment' }, paid: 'paid',
      orderNo: 'Order', goods: 'Goods', received: 'Payment',
      okOrder: 'Order sent to the store ✓', okPay: 'Payment sent — the shopkeeper will verify it', okReg: 'Welcome! Your account is ready',
      e: { network: 'Connection problem — please try again', name_required: 'Enter your name', phone_invalid: 'Enter a valid mobile number', pin_invalid: 'PIN must be 4–6 digits',
        phone_exists: 'This number is already registered — log in', login_failed: 'Wrong number or PIN', cart_empty: 'Your cart is empty', tid_required: 'Enter the TID',
        amount_invalid: 'Enter a valid amount', unauthorized: 'Please log in again', database_not_configured: 'System not ready yet — contact the store', server_error: 'Something went wrong — please try again' },
    },
  };

  let cartSaved = {};
  try { cartSaved = JSON.parse(store.get('mgs_cart') || '{}') || {}; } catch (e) { cartSaved = {}; }

  const S = {
    lang: store.get('mgs_lang') || 'ur', token: store.get('mgs_token') || '', catalog: null, me: null,
    view: 'shop', authMode: 'register', after: null, cat: 'all', sq: '', cart: cartSaved,
    pay: 'khata', method: 'ep', tid: '', del: 'home', note: '', payOpen: false, payAmt: '', payTid: '', payMethod: 'ep', busy: false, err: '',
  };
  const t = () => T[S.lang];
  const L = (arr) => (Array.isArray(arr) ? arr[S.lang === 'ur' ? 0 : 1] : arr);
  const app = document.getElementById('app');

  function saveCart() { store.set('mgs_cart', JSON.stringify(S.cart)); }
  function prod(id) { return S.catalog.products.find((p) => p.id === Number(id)); }
  function cartInfo() {
    let count = 0, total = 0;
    const rows = Object.keys(S.cart).map((id) => { const p = prod(id); const q = S.cart[id]; if (!p) return null; count += q; total += p.p * q; return { p, q }; }).filter(Boolean);
    return { rows, count, total };
  }
  function errMsg(code) { return t().e[code] || t().e.server_error; }

  // ---------- views ----------
  function header() {
    const c = cartInfo();
    return `<div class="top">
      <div class="row between">
        <div class="brand"><div class="logo">${t().logo}</div><div><b>${t().store}</b><small>${icons.pin}<span>${t().place}</span></small></div></div>
        <div class="row" style="gap:6px">
          <button class="pillbtn" data-act="lang" aria-label="Language">${t().lang}</button>
          <button class="iconbtn" data-act="go" data-v="cart" aria-label="${t().cart}">${icons.cart}${c.count ? `<span class="badge">${c.count}</span>` : ''}</button>
        </div>
      </div>
      ${S.view === 'shop' ? `<label class="search">${icons.search}<input id="sq" value="${esc(S.sq)}" placeholder="${t().search}" aria-label="${t().search}" autocomplete="off"></label>` : ''}
    </div>`;
  }

  function productCard(p) {
    const q = S.cart[p.id] || 0;
    const off = p.o ? `<span class="off">-${Math.round((1 - p.p / p.o) * 100)}%</span>` : '';
    const ctl = q
      ? `<div class="step"><button data-act="dec" data-id="${p.id}" aria-label="-">−</button><b>${q}</b><button data-act="inc" data-id="${p.id}" aria-label="+">+</button></div>`
      : `<button class="add" data-act="inc" data-id="${p.id}" aria-label="${t().add} ${esc(L(p.n))}">${icons.plus}</button>`;
    return `<div class="card"><div class="ph"><img src="${img(p.img)}" alt="${esc(L(p.n))}" loading="lazy">${off}${ctl}</div>
      <div class="price"><b>${fmt(p.p)}</b>${p.o ? `<s>${fmt(p.o)}</s>` : ''}</div>
      <div class="nm">${esc(L(p.n))}</div><div class="un">${esc(L(p.u))}</div></div>`;
  }

  function productList() {
    const q = S.sq.trim().toLowerCase();
    const list = S.catalog.products.filter((p) => (S.cat === 'all' || p.c === S.cat) && (!q || p.n[0].includes(q) || p.n[1].toLowerCase().includes(q)));
    const cat = S.catalog.categories.find((c) => c.k === S.cat);
    return `<div class="sec"><h2>${cat ? esc(L(cat.l)) : t().items}</h2>
      ${list.length ? `<div class="grid">${list.map(productCard).join('')}</div>` : `<div class="empty">${t().none}</div>`}</div>`;
  }

  function shopView() {
    const showDeals = S.cat === 'all' && !S.sq.trim();
    return `
      ${showDeals ? `<div class="sec"><div class="hscroll noscroll">
        <div class="banner" style="background:#0B6B43;color:#fff"><div class="txt"><div><h3>${t().b1t}</h3><p style="color:#CFE9DA">${t().b1s}</p></div><button data-act="cat" data-k="veg" style="background:#fff;color:#0B6B43">${t().b1b}</button></div><img src="${img('banner-basket')}" alt=""></div>
        <div class="banner" style="background:#FFE9CF;color:#3D2300"><div class="txt"><div><h3>${t().b2t}</h3><p style="color:#6B4A1C">${t().b2s}</p></div><button data-act="go" data-v="account" style="background:#121A15;color:#fff">${t().b2b}</button></div><img src="${img('banner-delivery')}" alt=""></div>
      </div></div>` : ''}
      <div class="sec"><div class="row between"><h2>${t().cats}</h2>${S.cat !== 'all' ? `<button class="pillbtn" data-act="cat" data-k="all">${t().all}</button>` : ''}</div>
        <div class="hscroll noscroll">${S.catalog.categories.map((c) => `<button class="cat ${c.k === S.cat ? 'on' : ''}" data-act="cat" data-k="${c.k === S.cat ? 'all' : c.k}"><span class="c"><img src="${img(c.img)}" alt=""></span><em>${esc(L(c.l))}</em></button>`).join('')}</div>
      </div>
      ${showDeals ? `<div class="sec"><h2>${t().deals}</h2><div class="hscroll noscroll">${S.catalog.products.filter((p) => p.o).map(productCard).join('')}</div></div>` : ''}
      <div id="plist">${productList()}</div>`;
  }

  function payBlock(amount, tidId, tidVal) {
    return `<div class="wallet"><div class="muted" style="color:#B8C4BC">${t().sendTo}</div><div style="font-weight:800">${esc(S.catalog.store.walletName)}</div><div class="num">${esc(S.catalog.store.wallet)}</div>${amount ? `<div class="n" style="margin-top:4px;color:#FFC37A;font-weight:800;text-align:start">${fmt(amount)}</div>` : ''}</div>
      <div class="steps"><div><i>1</i><span>${t().step1}</span></div><div><i>2</i><span>${t().step2}</span></div><div><i>3</i><span>${t().step3}</span></div></div>
      <div class="field"><label for="${tidId}">${t().tid}</label><input class="input n" id="${tidId}" inputmode="numeric" value="${esc(tidVal)}" placeholder="e.g. 41820593"></div>`;
  }

  function cartView() {
    const c = cartInfo();
    if (!c.count) return `<div class="empty"><div class="iconbtn" style="width:84px;height:84px;margin:0 auto 12px">${icons.cart}</div><div style="font-weight:800;font-size:18px;color:var(--ink)">${t().emptyCart}</div><p>${t().emptyCartSub}</p><button class="btn dark sm" data-act="go" data-v="shop">${t().shopNow}</button></div>`;
    const opts = [['khata', t().pKhata, t().pKhataS, 'Rs', 'background:#E6F2EB;color:#0B6B43'], ['cash', t().pCash, t().pCashS, '₨', 'background:#F3F4F1'], ['ep', t().pEp, t().pEpS, 'EP', 'background:#FFF1E3;color:#A84E00']];
    return `<div class="sec"><h2>${t().yourCart}</h2>
      <div>${c.rows.map(({ p, q }) => `<div class="li"><div class="row" style="min-width:0"><img src="${img(p.img)}" alt="" style="width:58px;height:58px;border-radius:14px;object-fit:cover;background:var(--tile)"><div style="min-width:0"><div style="font-weight:700;font-size:14px">${esc(L(p.n))}</div><div class="muted">${esc(L(p.u))}</div><div class="n" style="font-weight:800;font-size:14px;text-align:start">${fmt(p.p * q)}</div></div></div>
        <div class="row" style="gap:2px;border:1px solid var(--line2);border-radius:99px;padding:2px"><button class="iconbtn" style="width:34px;height:34px;font-size:18px" data-act="dec" data-id="${p.id}" aria-label="-">−</button><b class="n" style="min-width:24px;text-align:center">${q}</b><button class="iconbtn" style="width:34px;height:34px;font-size:18px;background:var(--green);color:#fff" data-act="inc" data-id="${p.id}" aria-label="+">+</button></div></div>`).join('')}</div></div>
      <div class="sec"><h2 style="font-size:16px">${t().payHow}</h2><div>${opts.map((o) => `<button class="opt ${S.pay === o[0] ? 'on' : ''}" data-act="pay" data-v="${o[0]}"><span class="ic" style="${o[4]}">${o[3]}</span><span class="t"><b>${o[1]}</b><small>${o[2]}</small></span><span class="rd"></span></button>`).join('')}</div>
        ${S.pay === 'ep' ? `<div class="seg" style="margin-bottom:12px"><button class="${S.method === 'ep' ? 'on' : ''}" data-act="method" data-v="ep">Easypaisa</button><button class="${S.method === 'jc' ? 'on' : ''}" data-act="method" data-v="jc">JazzCash</button></div>${payBlock(c.total, 'ctid', S.tid)}` : ''}
      </div>
      <div class="sec"><h2 style="font-size:16px">${t().delivery}</h2><div class="seg"><button class="${S.del === 'home' ? 'on' : ''}" data-act="del" data-v="home">${t().dHome}</button><button class="${S.del === 'pickup' ? 'on' : ''}" data-act="del" data-v="pickup">${t().dPick}</button></div>
        <div class="field" style="margin-top:12px"><label for="cnote">${t().note}</label><textarea class="input" id="cnote" placeholder="${t().notePh}">${esc(S.note)}</textarea></div></div>
      <div class="box soft"><div class="row between" style="font-weight:800;font-size:17px"><span>${t().total}</span><span class="n">${fmt(c.total)}</span></div></div>
      ${!S.token ? `<div class="notice">${t().loginFirst}</div>` : ''}
      <div class="err">${esc(S.err)}</div>
      <button class="btn" data-act="order" ${S.busy ? 'disabled' : ''}>${S.busy ? t().sending : (S.pay === 'ep' ? t().orderPay : t().order)} <span class="n">· ${fmt(c.total)}</span></button>`;
  }

  function authView() {
    const reg = S.authMode === 'register';
    return `<div class="center" style="min-height:auto;padding-top:10px">
      <div class="logo" style="width:60px;height:60px;border-radius:18px;font-size:26px;margin-bottom:12px">${t().logo}</div>
      <h2 style="margin:0 0 4px;font-size:22px">${reg ? t().regT : t().loginT}</h2><p class="muted" style="font-size:14px;line-height:1.8;margin:0 0 16px">${reg ? t().regS : t().loginS}</p>
      ${reg ? `<div class="field"><label for="fname">${t().name}</label><input class="input" id="fname" autocomplete="name"></div>` : ''}
      <div class="field"><label for="fphone">${t().phone}</label><input class="input n" id="fphone" inputmode="tel" autocomplete="tel" placeholder="03XX XXXXXXX"></div>
      ${reg ? `<div class="field"><label for="faddr">${t().address}</label><input class="input" id="faddr" autocomplete="street-address"></div>` : ''}
      <div class="field"><label for="fpin">${t().pin}</label><input class="input n" id="fpin" inputmode="numeric" type="password" maxlength="6" autocomplete="${reg ? 'new-password' : 'current-password'}"></div>
      <div class="err">${esc(S.err)}</div>
      <button class="btn" data-act="${reg ? 'register' : 'login'}" ${S.busy ? 'disabled' : ''}>${S.busy ? t().sending : (reg ? t().register : t().login)}</button>
      <button class="btn ghost" style="margin-top:10px" data-act="authmode">${reg ? t().haveAcc : t().newAcc}</button></div>`;
  }

  function accountView() {
    if (!S.token) return authView();
    if (!S.me) return '<div class="spin"></div>';
    const m = S.me, c = m.customer, bal = m.balance;
    const pct = Math.min(100, Math.max(0, (bal / (c.credit_limit || 1)) * 100));
    return `<div class="hero"><div class="row between"><div class="row"><div class="av" style="background:#fff">${esc(c.name.charAt(0))}</div><div><div style="font-weight:800">${esc(c.name)}</div><small class="n">${esc(c.phone)}</small></div></div>
        <button class="pillbtn" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.4)" data-act="logout">${t().logout}</button></div>
      <div style="margin-top:14px"><small>${t().balance}</small><div class="big">${fmt(bal)}</div></div>
      <div class="bar"><i style="width:${pct.toFixed(0)}%"></i></div><small>${t().limit}: <span class="n">${fmt(c.credit_limit)}</span></small>
      <button class="btn" style="background:#fff;color:#0B6B43;margin-top:14px" data-act="payopen">${icons.wallet}<span>${t().payKhata}</span></button></div>
      ${S.payOpen ? `<div class="box"><div class="seg" style="margin-bottom:12px"><button class="${S.payMethod === 'ep' ? 'on' : ''}" data-act="pmethod" data-v="ep">Easypaisa</button><button class="${S.payMethod === 'jc' ? 'on' : ''}" data-act="pmethod" data-v="jc">JazzCash</button></div>
        <div class="field"><label for="pamt">${t().amount}</label><input class="input n" id="pamt" inputmode="numeric" value="${esc(S.payAmt)}"></div>
        ${payBlock(0, 'ptid', S.payTid)}<p class="muted" style="line-height:1.7">${t().payNote}</p><div class="err">${esc(S.err)}</div>
        <div class="row"><button class="btn" data-act="paysend" ${S.busy ? 'disabled' : ''}>${S.busy ? t().sending : t().sendPay}</button><button class="btn ghost sm" data-act="payclose">${t().cancel}</button></div></div>` : ''}
      ${m.payments.length ? `<div class="h3">${t().myPays}</div><div class="box">${m.payments.map((p) => `<div class="li"><div><div style="font-weight:700;font-size:14px">${p.method === 'jc' ? 'JazzCash' : 'Easypaisa'}${p.order_id ? ` · ${t().orderNo} #${p.order_id}` : ''}</div><div class="muted n" style="text-align:start">TID ${esc(p.tid)} · ${when(p.created_at, S.lang)}</div></div><div style="text-align:end"><div class="n" style="font-weight:800">${fmt(p.amount)}</div><span class="chip ${p.status}">${t().st[p.status]}</span></div></div>`).join('')}</div>` : ''}
      <div class="h3">${t().myOrders}</div>
      ${m.orders.length ? m.orders.map((o) => `<div class="box"><div class="row between"><div><b>${t().orderNo} <span class="n">#${o.id}</span></b><div class="muted">${when(o.created_at, S.lang)} · ${t().payL[o.pay]}${o.pay === 'ep' && o.paid ? ' · ' + t().paid : ''}</div></div><span class="chip ${o.status}">${t().st[o.status]}</span></div>
        <div class="thumbs noscroll" style="margin:10px 0">${o.items.map((it) => `<div class="thumb"><img src="${img(it.img)}" alt="${esc(L(it.name))}"><b>${it.qty}</b></div>`).join('')}</div>
        <div class="muted" style="line-height:1.7">${o.items.map((it) => esc(L(it.name)) + ' × ' + it.qty).join(S.lang === 'ur' ? '، ' : ', ')}</div>
        <div class="row between" style="margin-top:6px"><span class="muted">${t().total}</span><b class="n">${fmt(o.total)}</b></div></div>`).join('') : `<div class="box empty">${t().noOrders}</div>`}
      <div class="h3">${t().ledger}</div>
      <div class="box">${m.ledger.length ? m.ledger.map((e) => `<div class="li"><div class="row" style="min-width:0"><span class="sign ${e.type}">${e.type === 'u' ? '+' : '−'}</span><div><div style="font-size:14px">${esc(e.order_id ? t().orderNo + ' #' + e.order_id : (e.note || (e.type === 'u' ? t().goods : t().received)))}</div><div class="muted">${when(e.created_at, S.lang)}</div></div></div><span class="n amt-${e.type}">${e.type === 'u' ? '+ ' : '− '}${fmt(e.amount)}</span></div>`).join('') : `<div class="empty" style="padding:16px">${t().noLedger}</div>`}</div>`;
  }

  function render() {
    document.documentElement.lang = S.lang;
    document.body.dir = S.lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.dir = document.body.dir;
    if (!S.catalog) { app.innerHTML = '<div class="spin"></div>'; return; }
    const y = window.scrollY;
    const c = cartInfo();
    let body = '';
    if (S.view === 'shop') body = shopView();
    else if (S.view === 'cart') body = cartView();
    else if (S.view === 'auth') body = authView();
    else body = accountView();
    const nav = [['shop', icons.home, t().home], ['cart', icons.cart, t().cart, c.count], ['account', icons.book, t().account]];
    app.innerHTML = header() + `<main>${body}</main>` +
      (S.view === 'shop' && c.count ? `<button class="cartbar" data-act="go" data-v="cart"><span>${t().viewCart} · <span class="n">${c.count}</span> ${t().pcs}</span><span class="n">${fmt(c.total)}</span></button>` : '') +
      `<nav class="nav">${nav.map((n) => `<button class="${S.view === n[0] || (n[0] === 'account' && S.view === 'auth') ? 'on' : ''}" data-act="go" data-v="${n[0]}">${n[1]}<span>${n[2]}</span>${n[3] ? `<span class="badge">${n[3]}</span>` : ''}</button>`).join('')}</nav>`;
    window.scrollTo(0, y);
  }

  function go(v) {
    S.err = '';
    if (v === 'account' && !S.token) { S.view = 'auth'; }
    else S.view = v;
    if (S.view === 'account') loadMe();
    render();
    window.scrollTo(0, 0);
  }

  async function loadMe() {
    if (!S.token) return;
    const r = await api('me', { token: S.token });
    if (r.error === 'unauthorized') { S.token = ''; store.del('mgs_token'); S.me = null; if (S.view === 'account') S.view = 'auth'; render(); return; }
    if (!r.error) { S.me = r; if (S.view === 'account') render(); }
  }

  async function doAuth(kind) {
    const val = (id) => (document.getElementById(id) || {}).value || '';
    const body = kind === 'register'
      ? { name: val('fname'), phone: val('fphone'), address: val('faddr'), pin: val('fpin') }
      : { phone: val('fphone'), pin: val('fpin') };
    S.busy = true; S.err = ''; render();
    const r = await api(kind, { body });
    S.busy = false;
    if (r.error) { S.err = errMsg(r.error); render(); restore(body); return; }
    S.token = r.token; store.set('mgs_token', r.token);
    toast(kind === 'register' ? t().okReg : '✓');
    S.view = S.after || 'account'; S.after = null;
    if (S.view === 'account') loadMe();
    render();
  }
  function restore(b) {
    const set = (id, v) => { const el = document.getElementById(id); if (el && v != null) el.value = v; };
    set('fname', b.name); set('fphone', b.phone); set('faddr', b.address);
  }

  async function placeOrder() {
    const c = cartInfo();
    if (!c.count) return;
    if (!S.token) { S.after = 'cart'; S.authMode = 'register'; S.view = 'auth'; render(); window.scrollTo(0, 0); return; }
    if (S.pay === 'ep' && !S.tid.trim()) { S.err = t().e.tid_required; render(); return; }
    S.busy = true; S.err = ''; render();
    const r = await api('orders', { token: S.token, body: { items: c.rows.map(({ p, q }) => [p.id, q]), pay: S.pay, method: S.method, tid: S.tid, delivery: S.del, note: S.note } });
    S.busy = false;
    if (r.error) { S.err = errMsg(r.error); render(); return; }
    S.cart = {}; saveCart(); S.tid = ''; S.note = '';
    toast(t().okOrder);
    S.view = 'account'; S.me = null; render(); loadMe(); window.scrollTo(0, 0);
  }

  async function sendPayment() {
    S.payAmt = (document.getElementById('pamt') || {}).value || S.payAmt;
    S.payTid = (document.getElementById('ptid') || {}).value || S.payTid;
    S.busy = true; S.err = ''; render();
    const r = await api('payments', { token: S.token, body: { amount: S.payAmt, tid: S.payTid, method: S.payMethod } });
    S.busy = false;
    if (r.error) { S.err = errMsg(r.error); render(); return; }
    S.payOpen = false; S.payTid = ''; toast(t().okPay); loadMe(); render();
  }

  // ---------- events ----------
  document.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-act]');
    if (!el) return;
    const a = el.dataset.act, v = el.dataset.v;
    if (a === 'lang') { S.lang = S.lang === 'ur' ? 'en' : 'ur'; store.set('mgs_lang', S.lang); render(); }
    else if (a === 'go') go(v);
    else if (a === 'cat') { S.cat = el.dataset.k; S.sq = ''; render(); }
    else if (a === 'inc' || a === 'dec') { const id = el.dataset.id; S.cart[id] = (S.cart[id] || 0) + (a === 'inc' ? 1 : -1); if (S.cart[id] <= 0) delete S.cart[id]; saveCart(); render(); }
    else if (a === 'pay') { S.pay = v; S.err = ''; render(); }
    else if (a === 'method') { S.method = v; render(); }
    else if (a === 'del') { S.del = v; render(); }
    else if (a === 'order') placeOrder();
    else if (a === 'register' || a === 'login') doAuth(a);
    else if (a === 'authmode') { S.authMode = S.authMode === 'register' ? 'login' : 'register'; S.err = ''; render(); }
    else if (a === 'logout') { S.token = ''; S.me = null; store.del('mgs_token'); S.view = 'shop'; render(); }
    else if (a === 'payopen') { S.payOpen = true; S.err = ''; S.payAmt = S.me && S.me.balance > 0 ? String(S.me.balance) : ''; render(); }
    else if (a === 'payclose') { S.payOpen = false; S.err = ''; render(); }
    else if (a === 'pmethod') { S.payAmt = (document.getElementById('pamt') || {}).value || S.payAmt; S.payTid = (document.getElementById('ptid') || {}).value || S.payTid; S.payMethod = v; render(); }
    else if (a === 'paysend') sendPayment();
  });
  document.addEventListener('input', (ev) => {
    const id = ev.target.id;
    if (id === 'sq') { S.sq = ev.target.value; const pl = document.getElementById('plist'); if (pl) pl.innerHTML = productList(); }
    else if (id === 'ctid') S.tid = ev.target.value;
    else if (id === 'cnote') S.note = ev.target.value;
    else if (id === 'pamt') S.payAmt = ev.target.value;
    else if (id === 'ptid') S.payTid = ev.target.value;
  });

  setInterval(() => { if (S.view === 'account' && S.token && !S.payOpen && !document.hidden) loadMe(); }, 20000);

  (async function init() {
    render();
    const r = await api('catalog');
    if (r.error) { app.innerHTML = `<div class="empty">${t().e[r.error] || t().e.server_error}</div>`; return; }
    S.catalog = r;
    Object.keys(S.cart).forEach((id) => { if (!prod(id)) delete S.cart[id]; });
    render();
    if (S.token) loadMe();
  })();
})();
