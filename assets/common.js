// Shared helpers for the customer page and the shop page.
window.M = (function () {
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
  };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n) => 'Rs ' + Math.round(Number(n) || 0).toLocaleString('en-US');
  const img = (name) => '/images/' + name + '.webp';

  function when(iso, lang) {
    if (!iso) return '';
    const d = new Date(iso);
    const diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 60) return lang === 'ur' ? 'ابھی' : 'just now';
    if (diff < 3600) { const m = Math.floor(diff / 60); return lang === 'ur' ? m + ' منٹ پہلے' : m + ' min ago'; }
    const sameDay = new Date().toDateString() === d.toDateString();
    const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    if (sameDay) return (lang === 'ur' ? 'آج ' : 'Today ') + time;
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) + ' · ' + time;
  }

  async function api(path, opts) {
    opts = opts || {};
    const headers = { 'content-type': 'application/json' };
    if (opts.token) headers.authorization = 'Bearer ' + opts.token;
    if (opts.pin) headers['x-shop-pin'] = opts.pin;
    let res;
    try {
      res = await fetch('/api/' + path, { method: opts.body ? 'POST' : 'GET', headers, body: opts.body ? JSON.stringify(opts.body) : undefined });
    } catch (e) {
      return { error: 'network' };
    }
    let data = {};
    try { data = await res.json(); } catch (e) { data = { error: 'server_error' }; }
    if (!res.ok && !data.error) data.error = 'server_error';
    return data;
  }

  let toastTimer;
  function toast(msg) {
    let el = document.getElementById('toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function waNumber(phone) {
    const d = String(phone || '').replace(/\D/g, '');
    if (d.startsWith('92')) return d;
    if (d.startsWith('0')) return '92' + d.slice(1);
    return d;
  }

  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>',
    cart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L20.5 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z"/><path d="M5 17a3 3 0 0 1 3-3h11"/></svg>',
    box: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M21.5 20a6.5 6.5 0 0 0-4-6"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 18.5h4"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19L4 20z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/></svg>',
    out: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4h4v16h-4"/><path d="M10 8l-4 4 4 4"/><path d="M6 12h10"/></svg>',
  };

  return { store, esc, fmt, img, when, api, toast, waNumber, icons };
})();
