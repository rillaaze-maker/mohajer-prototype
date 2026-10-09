/* ══════════════════════════════════════════════════════════════════════
   مهاجر · کیت تست میدانی
   shared by  t.html (شرکت‌کننده)  ·  test.html (کنسول)  ·  test-insights.html

   HOW THE WHOLE THING HANGS TOGETHER — read this before extending.

   A test is a LINK, not a document:   t.html?v=4.5&r=2&c=tg
       v = which build to run   (test-versions.json)
       r = which round it is    (just a label, for grouping)
       c = which channel it came from (telegram, instagram, friends…)
   Nothing else has to be created, saved or synced. Add a version to
   test-versions.json and it is immediately testable.

   Because t.html and wallet-*.html sit on the SAME ORIGIN, the runner can
   read inside the prototype's iframe: every screen change, every tap, every
   dead tap. That is the whole reason the test system lives in this repo and
   not in the platform repo — cross-origin, none of it would be readable.

   A session is never entrusted to one pipe. It is POSTed to every endpoint
   in test-config.json (endpoint + endpoint2), kept on the participant's own
   device, offered to them as a code and as a file, and — once the operator
   commits the backup — archived in test-sessions.json inside this repo.
   "ارسال شد" is only shown after the server confirms it holds the id.
   ══════════════════════════════════════════════════════════════════════ */
(function (g) {

  /* ── tiny helpers ───────────────────────────────────────────────── */
  const $  = (id) => document.getElementById(id);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const FA = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  const fa = (v) => String(v).replace(/\d/g, d => FA[+d]);
  const qs = (k, dflt) => new URLSearchParams(location.search).get(k) || dflt || '';
  const pad = (n) => String(n).padStart(2, '0');
  const mmss = (ms) => fa(pad(Math.floor(ms / 60000)) + ':' + pad(Math.round(ms % 60000 / 1000)));
  const secs = (ms) => fa(Math.round(ms / 1000)) + ' ثانیه';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ── storage ────────────────────────────────────────────────────── */
  const NS = 'mhj.test.';
  const store = {
    get(k, d) { try { const v = localStorage.getItem(NS + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k)    { try { localStorage.removeItem(NS + k); } catch (e) {} }
  };

  /* ── config & versions ──────────────────────────────────────────── */
  async function json(path, dflt) {
    try { const r = await fetch(path + '?_=' + Date.now(), { cache: 'no-store' }); if (r.ok) return await r.json(); }
    catch (e) {}
    return dflt;
  }
  async function config()   { const c = await json('./test-config.json', {}); return c || {}; }
  async function versions() {
    const v = await json('./test-versions.json', null);
    return (v && v.versions) || [];
  }

  /* ── ids ────────────────────────────────────────────────────────── */
  const uid = () => Math.random().toString(36).slice(2, 7) + Date.now().toString(36).slice(-4);

  /* ── device, read once ──────────────────────────────────────────── */
  function device() {
    const ua = navigator.userAgent || '';
    const os = /iPhone|iPad|iPod/i.test(ua) ? 'iOS'
             : /Android/i.test(ua) ? 'Android'
             : /Windows/i.test(ua) ? 'Windows'
             : /Mac OS/i.test(ua) ? 'macOS' : 'other';
    const br = /CriOS/i.test(ua) ? 'Chrome'
             : /FxiOS|Firefox/i.test(ua) ? 'Firefox'
             : /Edg\//i.test(ua) ? 'Edge'
             : /Chrome/i.test(ua) ? 'Chrome'
             : /Safari/i.test(ua) ? 'Safari' : 'other';
    return {
      w: innerWidth, h: innerHeight, dpr: Math.round((devicePixelRatio || 1) * 10) / 10,
      os, br, touch: matchMedia('(pointer:coarse)').matches ? 1 : 0,
      lang: navigator.language || '', tz: (new Date()).getTimezoneOffset()
    };
  }

  /* ── the four layers (same model as سنجه, so rounds stay comparable) ── */
  const LAYERS = {
    value:      { label: 'ارزش',        color: '#8B6FD4', fix: 'پیام و جایگاه محصول' },
    usability:  { label: 'کاربردپذیری', color: '#4A9BE8', fix: 'جریان و رابط کاربری' },
    trust:      { label: 'اعتماد',      color: '#D5A45C', fix: 'اثبات، کنترل و پشتوانه' },
    motivation: { label: 'انگیزه',      color: '#8A8F98', fix: 'انتخاب سگمنت یا wedge' }
  };

  /* Age is the axis the team actually slices by, so it is one required
     question and it comes first. Bands, not a number: people answer a band
     honestly and instantly. */
  const AGES = ['۱۸ تا ۲۴', '۲۵ تا ۳۴', '۳۵ تا ۴۴', '۴۵ تا ۵۴', '۵۵ به بالا'];

  const CHANNELS = {
    tg: 'تلگرام', wa: 'واتساپ', ig: 'اینستاگرام',
    fr: 'آشنایان', lk: 'لینکدین', qr: 'کیوآر', x: 'سایر'
  };

  /* ── where sessions go ──────────────────────────────────────────────
     Never one pipe. A session is written to every configured endpoint, kept
     on the participant's own device, and — when the operator commits the
     backup file — to test-sessions.json inside the repo. Three places that
     fail for different reasons: a Google outage, a blocked connection and a
     lost browser do not fail together. */
  const eps = (cfg) => [(cfg || {}).endpoint, (cfg || {}).endpoint2]
    .concat(((cfg || {}).endpoints) || [])
    .map(x => String(x || '').trim())
    .filter((x, i, a) => x && a.indexOf(x) === i);

  /* ── sending ────────────────────────────────────────────────────────
     text/plain on purpose: it is a "simple request", so the browser sends
     it with no CORS preflight — which is what lets a Google Apps Script
     receive it at all. We never read the response; the local copy and the
     retry queue are the record. */
  function post(endpoint, payload, beacon) {
    if (!endpoint) return Promise.resolve(false);
    const body = JSON.stringify(payload);
    if (beacon && navigator.sendBeacon) {
      try { return Promise.resolve(navigator.sendBeacon(endpoint, new Blob([body], { type: 'text/plain;charset=utf-8' }))); }
      catch (e) {}
    }
    return fetch(endpoint, {
      method: 'POST', mode: 'no-cors', keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body
    }).then(() => true).catch(() => false);
  }

  /* فایلِ بزرگ (ویس): همان مقصدها، ولی بدون keepalive — که سقفِ ۶۴
     کیلوبایتیِ بدنه را برمی‌دارد. پاسخ خوانده نمی‌شود؛ رسیدنش را جداگانه
     می‌پرسیم. */
  function postBig(cfg, payload) {
    const body = JSON.stringify(payload);
    return Promise.all(eps(cfg).map(u =>
      fetch(u, { method: 'POST', mode: 'no-cors',
                 headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body })
        .then(() => true).catch(() => false)
    )).then(r => r.filter(Boolean).length);
  }

  /* «ویسِ این جلسه رسید؟» — مثل verify، ولی روی برگهٔ ویس‌ها. */
  function verifyVoice(cfg, id, timeout) {
    const list = eps(cfg);
    if (!list.length) return Promise.resolve(null);
    return new Promise(resolve => {
      let left = list.length, settled = false;
      const miss = () => { if (!--left && !settled) { settled = true; resolve(null); } };
      list.forEach(u => {
        read(u, { voice: id }, timeout || 20000).then(r => {
          if (!settled && r && r.found === true) { settled = true; resolve(u); } else miss();
        }).catch(miss);
      });
    });
  }

  async function postAll(cfg, payload, beacon) {
    const r = await Promise.all(eps(cfg).map(u => post(u, payload, beacon)));
    return r.filter(Boolean).length;
  }

  /* A no-cors POST resolves even when the server never wrote the row, so
     "sent" is a claim we are not entitled to make from the POST alone. We
     ask the server whether it actually has the id. Older collectors that do
     not know `has` answer with the full list instead — which answers the
     same question, so both shapes count. */
  function verify(cfg, id, timeout) {
    const list = eps(cfg);
    if (!list.length) return Promise.resolve(null);
    return new Promise(resolve => {
      let left = list.length, settled = false;
      const miss = () => { if (!--left && !settled) { settled = true; resolve(null); } };
      list.forEach(u => {
        read(u, { has: id }, timeout || 7000).then(r => {
          if (!settled && r && (r.found === true || (r.sessions || []).some(x => x && x.id === id))) {
            settled = true; resolve(u);
          } else miss();
        }).catch(miss);
      });
    });
  }

  /* The participant's own copy, on their device. Costs nothing and has
     saved a session more than once: it is the only record that exists
     before anything reaches the network. */
  function keepMine(session) {
    const mine = store.get('mine', []).filter(s => s.id !== session.id);
    mine.push(session);
    store.set('mine', mine.slice(-10));
  }

  /* Everything, from every source, deduplicated by id. A finished copy of a
     session always beats a half-finished one, whichever source it came from. */
  /* آخرین پاسخ موفق سرور. صفحه با همین فوری بالا می‌آید و بعد تازه می‌شود. */
  function cacheKey(params) { return 'cache.' + ((params && params.full) ? 'full' : 'sum'); }

  /* Apps Script بعد از بی‌کاری سرد است؛ این را همان اول و بدون انتظار
     می‌فرستیم تا وقتی درخواست اصلی می‌رسد، بیدار باشد. */
  function warm(cfg) {
    eps(cfg).forEach(u => { try { read(u, { ping: 1 }, 30000).catch(() => {}); } catch (e) {} });
  }

  async function readAll(cfg, params, opts) {
    opts = opts || {};
    const map = new Map();
    /* یک جلسه چند بار می‌رسد: نیمه‌کاره‌ها در راه، و نسخهٔ نهایی در پایان.
       همه یک `id` دارند، پس دو نفر شمرده نمی‌شوند. برنده به ترتیب:
       revision بالاتر → done → تأییدشده → به‌روزتر → بیشتر پاسخ‌داده. */
    const rank = (x) => [ +(x.revision || 0), x.done ? 1 : 0, x.delivery_confirmed ? 1 : 0,
                          Date.parse(x.updated_at || x.t1 || x.t0 || 0) || 0,
                          ((x.score || {}).answered || 0) ];
    const better = (a, b) => { const A = rank(a), B = rank(b);
      for (let i = 0; i < A.length; i++) { if (A[i] !== B[i]) return A[i] > B[i]; } return false; };
    const merge = (arr) => (arr || []).forEach(s => {
      if (!s || !s.id) return;
      if (String(s.id).indexOf('TEST-') === 0) return;   /* ردیف‌های آزمایشِ اتصال، داده نیستند */
      const cur = map.get(s.id);
      if (!cur || better(s, cur)) map.set(s.id, s);
    });

    const cached = store.get(cacheKey(params), null);
    if (cached && cached.rows) merge(cached.rows);

    const repo = await json('./test-sessions.json', null);       /* آرشیو دستیِ داخل مخزن */
    const repoList = Array.isArray(repo) ? repo : (repo && repo.sessions) || [];
    merge(repoList);
    merge(store.get('local', []));                               /* کدهایی که دستی وارد شده */
    merge(store.get('mine', []));                                /* جلسه‌های همین دستگاه */

    /* دورِ اول: بدون شبکه، تا صفحه همین حالا چیزی داشته باشد */
    if (opts.localOnly) {
      return { sessions: [...map.values()], status: [], repo: repoList.length,
               cachedAt: cached && cached.at, live: false };
    }

    const status = [];
    let got = null;
    for (const u of eps(cfg)) {
      let rows = null;
      const pull = (params && params.full) ? (t) => readPaged(u, params, t) : (t) => read(u, params, t).then(r => r.sessions);
      try { rows = await pull(30000); }
      catch (e) {
        /* اولین تماس بعد از بی‌کاری کند است: گرمش کن و یک بار دیگر */
        try { await read(u, { ping: 1 }, 30000); rows = await pull(40000); }
        catch (e2) { status.push({ url: u, ok: false, error: String(e2.message || e2) }); continue; }
      }
      merge(rows); got = (got || []).concat(rows || []);
      status.push({ url: u, ok: true, n: (rows || []).length });
    }
    if (got) {
      const payload = JSON.stringify({ at: Date.now(), rows: got });
      if (payload.length < 2000000) { try { localStorage.setItem(NS + cacheKey(params), payload); } catch (e) {} }
    }
    return { sessions: [...map.values()], status, repo: repoList.length,
             cachedAt: got ? Date.now() : (cached && cached.at), live: !!got };
  }

  /* خروجیِ کامل، صفحه‌صفحه. یک‌جا دیگر برنمی‌گشت: با ۸۸ جلسه، پاسخ از
     سقفی که Apps Script از راهِ googleusercontent برمی‌گرداند بزرگ‌تر شد
     و صفحهٔ نتیجه‌ها بی‌صدا به نسخهٔ ذخیره‌شدهٔ قبلی برمی‌گشت.
     سرورِ قدیمی که limit را نمی‌شناسد، `next` نمی‌دهد و همان یک پاسخ
     کافی است. */
  async function readPaged(u, params, timeout) {
    let off = 0, all = [], guard = 0;
    while (guard++ < 80) {
      /* یک صفحهٔ ناموفق نباید کلِ خواندن را بخواباند: همان صفحه را کوچک‌تر
         دوباره می‌خواهیم. در راند اول یک صفحهٔ هشت‌تایی یک بار شکست خورد و
         با چهارتا رسید. */
      let r = null, lim = 0;
      for (const L of [12, 4, 1]) {
        try { r = await read(u, Object.assign({}, params, { offset: off, limit: L }), timeout); lim = L; break; }
        catch (e) { if (L === 1) throw e; }
      }
      all = all.concat((r && r.sessions) || []);
      if (!r || r.next === null || r.next === undefined) break;
      off = r.next;
    }
    return all;
  }

  /* Anything that failed to send is kept and retried the next time any
     page of the test system is opened on that device. */
  function queue(payload) {
    const q = store.get('queue', []); q.push(payload);
    store.set('queue', q.slice(-30));
  }
  async function flush(cfg) {
    const q = store.get('queue', []);
    if (!eps(cfg).length || !q.length) return 0;
    let n = 0;
    for (const p of q) { if (await postAll(cfg, p)) n++; }
    store.set('queue', []);
    return n;
  }

  /* ── reading back ───────────────────────────────────────────────────
     JSONP, deliberately. A Google Apps Script redirects /exec to another
     host, and a cross-origin GET then depends on how the browser treats
     that redirect; a script tag never has that problem. */
  let jsonpN = 0;
  function read(endpoint, params, timeout) {
    return new Promise((resolve, reject) => {
      if (!endpoint) return reject(new Error('no-endpoint'));
      const cb = '__mhjcb' + (++jsonpN) + '_' + Date.now();
      const s = document.createElement('script');
      const u = endpoint + (endpoint.indexOf('?') >= 0 ? '&' : '?') +
        new URLSearchParams(Object.assign({ callback: cb, _: Date.now() }, params || {}));
      const done = (fn) => { try { delete g[cb]; } catch (e) { g[cb] = undefined; } s.remove(); clearTimeout(tm); fn(); };
      const tm = setTimeout(() => done(() => reject(new Error('timeout'))), timeout || 25000);
      g[cb] = (data) => done(() => resolve(data));
      s.onerror = () => done(() => reject(new Error('network')));
      s.src = u; document.head.appendChild(s);
    });
  }

  /* ── the manual path, for when there is no endpoint ─────────────────
     The blob is the session, base64url — what a person can paste back into
     a chat. Long, but it survives copy/paste and never loses a session. */
  function pack(o) {
    const b = new TextEncoder().encode(JSON.stringify(o));
    let s = ''; b.forEach(x => s += String.fromCharCode(x));
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function unpack(t) {
    try {
      let b = String(t).trim().replace(/-/g, '+').replace(/_/g, '/');
      while (b.length % 4) b += '=';
      return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(b), c => c.charCodeAt(0))));
    } catch (e) { return null; }
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      const t = document.createElement('textarea');
      t.value = text; t.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(t); t.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (e2) {}
      t.remove(); return ok;
    }
  }
  function download(name, text, type) {
    const b = new Blob([text], { type: (type || 'application/json') + ';charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function csv(rows) {
    if (!rows.length) return '';
    const cols = [...rows.reduce((s, r) => (Object.keys(r).forEach(k => s.add(k)), s), new Set())];
    const cell = (v) => {
      const s = v == null ? '' : (typeof v === 'object' ? JSON.stringify(v) : String(v));
      return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    return '﻿' + [cols.join(','), ...rows.map(r => cols.map(c => cell(r[c])).join(','))].join('\n');
  }

  /* ── the event stream ───────────────────────────────────────────────
     Events are arrays, not objects, because a 200-tap session has to fit
     in one spreadsheet cell:
       ['s', t, screen]                 screen became visible
       ['t', t, x, y, screen, label]    tap (x,y normalised to 0…1000 of the device box)
       ['d', t, x, y, screen]           dead tap — nothing there to press
       ['r', t, x, y, screen]           rage — three fast taps in one spot
       ['b', t, screen]                 back
       ['f', t, screen, mood, text]     the participant said something, mid-use
       ['e', t, message]                the prototype threw
       ['h', t, ms]                     came back after being away ms          */
  const EV = { screen: 's', tap: 't', dead: 'd', rage: 'r', back: 'b', fb: 'f', err: 'e', away: 'h',
    /* پرسش، پاسخ، نتیجهٔ مأموریت، و کمکِ تسهیل‌گر */
    q: 'q', ans: 'a', p_done: 'P', p_left: 'L', help: 'H',
    /* پروتکل ۱.۰ این‌ها را داشت؛ فقط برای خواندنِ جلسه‌های قدیمی می‌مانند */
    scen: 'x', s_start: 'B', s_done: 'D', s_none: 'N' };

  /* Per-session derived facts. Everything the dashboard shows is built from
     these, so the rules live in exactly one place. */
  function derive(s) {
    const ev = (s && s.ev) || [];
    const path = [], time = {}, taps = [], rages = [], deads = [];
    let errs = 0, away = 0, last = null, lastT = 0;
    ev.forEach(e => {
      const k = e[0], t = e[1];
      if (k === EV.screen) {
        if (last) time[last] = (time[last] || 0) + Math.max(0, t - lastT);
        if (path[path.length - 1] !== e[2]) path.push(e[2]);
        last = e[2]; lastT = t;
      }
      else if (k === EV.tap)  taps.push({ t, x: e[2], y: e[3], s: e[4], l: e[5] || '' });
      else if (k === EV.rage) rages.push({ t, x: e[2], y: e[3], s: e[4] });
      else if (k === EV.dead) deads.push({ t, x: e[2], y: e[3], s: e[4] });
      else if (k === EV.err)  errs++;
      else if (k === EV.away) away += e[2] || 0;
    });
    const end = (s && s.ms) || (ev.length ? ev[ev.length - 1][1] : 0);
    if (last) time[last] = (time[last] || 0) + Math.max(0, end - lastT);
    return {
      path, time, taps, rages, deads, errs, away,
      rage: rages.length, dead: deads.length,
      screens: Object.keys(time).length,
      deepest: path[path.length - 1] || '',
      ms: end,
      /* زمانِ فعال، نه زمانِ باز بودنِ تب: هر ثانیه‌ای که صفحه پنهان بوده
         کسر می‌شود، وگرنه یک تماس تلفنی وسطِ تست شبیه «گیر کردن» می‌شود. */
      activeMs: Math.max(0, end - away),
      help: ev.some(e => e[0] === EV.help)
    };
  }

  /* ── مسیرها ─────────────────────────────────────────────────────────
     کدام خدمت را باز کرد، و تا کجا رفت. یک جا نوشته می‌شود تا هم t.html
     و هم داشبورد یک تعریف داشته باشند. */
  /* `screens` یعنی «وارد این مسیر شد»؛ `done` یعنی «تا جایی رفت که واقعاً
     تصمیم می‌گیرد» — مبلغ، تأیید یا نتیجه. رسیدن به صفحهٔ آموزش، رفتن
     نیست. شناسه‌ها عیناً از data-screen خودِ پروتوتایپ‌اند. */
  const ROUTES = [
    { id: 'withdraw',        screens: ['w-amt', 'w-quote', 'w-status'], done: ['w-quote', 'w-status'] },
    { id: 'personal_wallet', screens: ['pw-tut', 'pw-mode', 'pw-ready', 'pw-words', 'pw-check', 'pw-wallet',
                                       'pw-amt', 'pw-quote', 'pw-sign', 'pw-status',
                                       'pw-back-amt', 'pw-back-quote', 'pw-back-status',
                                       'k-intro', 'k-order', 'k-status'],
                             done: ['pw-amt', 'pw-quote', 'pw-sign', 'pw-status', 'k-order', 'k-status'] },
    { id: 'gold',            screens: ['p-tut', 'p-map', 'p-shop', 'p-amt', 'p-status'], done: ['p-amt', 'p-status'] },
    { id: 'transfer',        screens: ['t-who', 't-amt', 't-confirm', 't-invite', 't-status'], done: ['t-amt', 't-confirm', 't-status'] },
    { id: 'invest',          screens: ['invest', 'n-detail', 'n-amt', 'n-status'], done: ['n-amt', 'n-status'] }
  ];
  /* مسیرهایی که نشان می‌دهند کاربر برای رسیدن به پولش وابسته به مهاجر نیست */
  const CONTROL_ROUTES = ['withdraw', 'personal_wallet', 'gold'];

  /* «باز کردنِ صفحهٔ آموزش» مسیر رفتن نیست: ورود به مسیر یعنی رسیدن به
     صفحه‌ای که در آن انتخاب یا مبلغ مطرح است. آموزش جدا شمرده می‌شود. */
  const TUTS = ['pw-tut', 'p-tut', 'p-map', 'k-intro'];

  function routesOf(path) {
    const seen = [], deep = {};
    let first = null;
    (path || []).forEach(scr => {
      const r = ROUTES.find(x => x.screens.indexOf(scr) >= 0);
      if (!r) return;
      if (seen.indexOf(r.id) < 0) seen.push(r.id);
      if (!first && TUTS.indexOf(scr) < 0) first = r.id;
      if (r.done.indexOf(scr) >= 0) deep[r.id] = 1;
    });
    return { seen, first: first || null, completed: Object.keys(deep), depth: seen.length };
  }

  /* ── امتیازدهی، یک جا و نسخه‌دار ───────────────────────────────────
     قاعده‌ها نباید یک بار در runner و یک بار در داشبورد نوشته شوند؛ آن‌وقت
     دو عددِ متفاوت از یک جلسه بیرون می‌آید و هیچ‌کس نمی‌فهمد کدام درست است.

     یک قاعدهٔ سخت: پاسخِ نداده صفر نیست. اگر کسی سؤالی را ندیده، کلیدش
     ساخته نمی‌شود و آن جلسه در مخرجِ آن شاخص نمی‌آید. */
  const SCORING_VERSION = 2;
  /* سؤال‌هایی که واقعاً پرسیده می‌شوند. `answered` از روی همین شمرده
     می‌شود، پس «۳ از ۴» یعنی همان چیزی که روی صفحه دیده شده — نه کسری
     از هفت سؤالی که دیگر پرسیده نمی‌شوند. */
  const CORE_Q = ['positioning_main', 'custody_understanding', 'trust', 'commitment_step'];
  /* سؤال‌های نسخه‌های قبل. امتیازشان همچنان حساب می‌شود تا جلسه‌های قدیمی
     خوانا بمانند، ولی در مخرجِ «چند سؤال جواب داد» نمی‌آیند. */
  const PAST_Q = ['distinct_value', 'asset_understanding', 'feature_top2'];
  /* «تمایز نسبت به صرافی» فقط چیزهایی است که صرافی ندارد. تبدیل و کیف پول
     شخصی در توزیع دیده می‌شوند، ولی خودشان تمایز نیستند. */
  const DISTINCT_OK = ['custody', 'gold', 'invest', 'p2p', 'support'];

  function scoreSession(s) {
    const e = (s && s.end) || {}, sc = { scoring_version: SCORING_VERSION };
    const has = (k) => { const v = e[k]; return !(v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length)); };
    sc.answered = CORE_Q.filter(has).length;

    if (has('positioning_main')) sc.positioning_correct = e.positioning_main === 'value_control' ? 1 : 0;

    if (has('distinct_value')) {
      const dv = [].concat(e.distinct_value);
      sc.distinct_value_recognized = dv.some(v => DISTINCT_OK.indexOf(v) >= 0) ? 1 : 0;
      sc.no_distinct_value = dv.indexOf('none') >= 0 ? 1 : 0;
    }
    if (has('asset_understanding'))   sc.asset_correct   = e.asset_understanding === 'usdt_share' ? 1 : 0;
    if (has('custody_understanding')) sc.custody_correct = e.custody_understanding === 'bitvana' ? 1 : 0;

    sc.misconceptions = [];
    if (e.asset_understanding === 'bank_usd')      sc.misconceptions.push('bank_deposit');
    if (e.asset_understanding === 'issuer')        sc.misconceptions.push('mohajer_issuer');
    if (e.custody_understanding === 'mohajer_bank')  sc.misconceptions.push('mohajer_direct_custodian');
    if (e.custody_understanding === 'central_bank') sc.misconceptions.push('central_bank');

    if (has('trust')) { const t = +e.trust; sc.trust_high = t >= 4 ? 1 : 0; sc.trust_low = (t > 0 && t <= 2) ? 1 : 0; }

    if (has('commitment_step')) {
      const c = e.commitment_step;
      sc.practical_action = ['talk', 'signup', 'try_small', 'serious'].indexOf(c) >= 0 ? 1 : 0;
      sc.money_intent     = ['try_small', 'serious'].indexOf(c) >= 0 ? 1 : 0;
      sc.high_intent      = c === 'serious' ? 1 : 0;
      sc.no_action        = c === 'nothing' ? 1 : 0;
      sc.explore          = c === 'read' ? 1 : 0;      /* کاوش بیشتر: نه اقدام، نه بی‌اقدامی */
    }
    return sc;
  }

  /* رفتار، از رویدادها — بی‌نیاز از حضورِ iframe، پس داشبورد هم می‌تواند
     همین را روی جلسه‌های ذخیره‌شده اجرا کند. */
  function behaviorOf(s) {
    const d = derive(s), r = routesOf(d.path);
    const oc = (s && s.outcomes) || {};
    return {
      completed: !!oc.primary_completed,
      independent: oc.primary_completed ? !d.help : false,
      direct: !!oc.primary_direct,
      activeMs: oc.primary_active_ms || d.activeMs,
      routes: r.seen, first_route: r.first, routes_completed: r.completed,
      control_route: r.completed.some(x => CONTROL_ROUTES.indexOf(x) >= 0),
      help: d.help, rage: d.rage, dead: d.dead, deepest: d.deepest
    };
  }

  /* پروتکلِ یک جلسه. جلسه‌های قبلِ ۱.۱ برچسب ندارند، پس ۱.۰ حساب می‌شوند —
     و داشبورد شاخص‌های تغییرتعریف‌یافته را با هم جمع نمی‌زند. */
  const protoOf = (s) => String((s && (s.protocol_version || s.p)) || '1.0');

  /* Screen ids are what the prototype calls them; these are what a person
     calls them. An unknown id falls back to itself — a screen added in a
     future version still shows up, it just shows up unnamed. */
  const SCREEN_FA = {
    splash:'اسپلش', intro:'معرفی', home:'خانه', activity:'فعالیت', invest:'سرمایه‌گذاری',
    use:'استفاده', transfer:'انتقال', custody:'پول شما کجاست', settings:'تنظیمات',
    'c-amt':'مبلغ تبدیل', 'c-quote':'نرخ تبدیل', convert:'تأیید تبدیل', 'c-status':'نتیجهٔ تبدیل',
    'w-amt':'مبلغ برداشت', 'w-quote':'نرخ برداشت', 'w-status':'نتیجهٔ برداشت',
    't-who':'گیرنده', 't-amt':'مبلغ انتقال', 't-conf':'تأیید انتقال', 't-status':'نتیجهٔ انتقال',
    'p-tut':'آموزش طلا', 'p-amt':'مبلغ طلا', 'p-conf':'تأیید طلا', 'p-status':'نتیجهٔ طلا',
    'k-tut':'آموزش کلید', 'k-order':'سفارش کلید', 'k-status':'نتیجهٔ سفارش',
    'pw-tut':'آموزش کیف پول شخصی', 'pw-mode':'گوشی یا دستگاه', 'pw-ready':'کیف پول آماده',
    'pw-words':'۱۲ کلمه', 'pw-check':'آزمون کلمه‌ها', 'pw-wallet':'کیف پول شخصی',
    'pw-amt':'مبلغ انتقال به کیف شخصی', 'pw-quote':'نرخ انتقال', 'pw-sign':'امضا',
    'pw-status':'نتیجهٔ انتقال به کیف شخصی', 'pw-back-amt':'مبلغ بازگشت',
    'pw-back-quote':'نرخ بازگشت', 'pw-back-sign':'امضای بازگشت', 'pw-back-status':'نتیجهٔ بازگشت',
    explain:'صفحهٔ توضیح', nest:'سبد', 'n-detail':'جزئیات سبد', 'n-amt':'مبلغ سرمایه‌گذاری',
    'n-status':'نتیجهٔ سرمایه‌گذاری', call:'تماس با پشتیبانی',
    'p-map':'انتخاب صرافی', 'p-shop':'انتخاب شمش', 't-confirm':'تأیید انتقال', 't-invite':'دعوت از دوست',
    'k-intro':'آموزش کلید مهاجر', receipt:'رسید',
    'cu-basic':'نگهداری نزد مهاجر', 'cu-self':'کیف پول شخصی', 'cu-gold':'طلای فیزیکی',
    dist:'توزیع دارایی', fees:'کارمزدها'
  };
  const screenFa = (id) => SCREEN_FA[id] || id || '—';

  g.TK = {
    $, $$, esc, fa, qs, mmss, secs, clamp, store, json, config, versions, uid, device,
    LAYERS, AGES, CHANNELS, EV, eps, post, postAll, postBig, verify, verifyVoice, readAll, keepMine,
    queue, flush, read, pack, unpack,
    copy, download, csv, derive, screenFa, SCREEN_FA, warm,
    /* پروتکل ۱.۱ */
    SCORING_VERSION, PROTOCOL: '1.1', QUESTION_SET: 'core4_v1', HYPOTHESIS_SET: 'validation_v1_1',
    CORE_Q, PAST_Q, DISTINCT_OK, ROUTES, CONTROL_ROUTES, routesOf, scoreSession, behaviorOf, protoOf
  };
})(window);
