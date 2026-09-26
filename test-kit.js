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
    const merge = (arr) => (arr || []).forEach(s => {
      if (!s || !s.id) return;
      if (String(s.id).indexOf('TEST-') === 0) return;   /* ردیف‌های آزمایشِ اتصال، داده نیستند */
      const cur = map.get(s.id);
      if (!cur || (!cur.done && s.done)) map.set(s.id, s);
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
      try { rows = (await read(u, params, 30000)).sessions; }
      catch (e) {
        /* اولین تماس بعد از بی‌کاری کند است: گرمش کن و یک بار دیگر */
        try { await read(u, { ping: 1 }, 30000); rows = (await read(u, params, 40000)).sessions; }
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
    /* تست فرضیه‌ها: پرسش، پاسخ، تخصیص سناریو، و نتیجهٔ هر مأموریت */
    q: 'q', ans: 'a', scen: 'x', p_done: 'P', p_left: 'L', s_start: 'B', s_done: 'D', s_none: 'N' };

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
      ms: end
    };
  }

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
    explain:'صفحهٔ توضیح', nest:'لانه', 'n-detail':'جزئیات لانه', call:'تماس با پشتیبانی'
  };
  const screenFa = (id) => SCREEN_FA[id] || id || '—';

  g.TK = {
    $, $$, esc, fa, qs, mmss, secs, clamp, store, json, config, versions, uid, device,
    LAYERS, AGES, CHANNELS, EV, eps, post, postAll, verify, readAll, keepMine,
    queue, flush, read, pack, unpack,
    copy, download, csv, derive, screenFa, SCREEN_FA, warm
  };
})(window);
