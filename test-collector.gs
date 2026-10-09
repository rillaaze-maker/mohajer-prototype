/* ══════════════════════════════════════════════════════════════════════
   مهاجر · جمع‌کنندهٔ جلسه‌های تست  —  Google Apps Script
   ──────────────────────────────────────────────────────────────────────
   راه‌اندازی، یک‌بار، حدود پنج دقیقه:

     ۱. در Google Sheets یک صفحهٔ خالی بسازید.
     ۲. منو:  Extensions → Apps Script
     ۳. همهٔ کد ویرایشگر را پاک کنید و این فایل را بچسبانید. Save.
     ۴. Deploy → New deployment → نوع: Web app
            Execute as:      Me
            Who has access:  Anyone
     ۵. آدرسی که می‌دهد (به /exec ختم می‌شود) را کپی کنید.
     ۶. در گیت‌هاب، در prototype/test-config.json جلوی "endpoint"
        همان آدرس را بگذارید و Commit کنید.
     ۷. همین کار را با یک شیت دوم تکرار کنید و آدرسش را جلوی "endpoint2"
        بگذارید — هر جلسه به هر دو فرستاده می‌شود.

   ⚠ بعد از چسباندن این کد، یک‌بار تابع setup را از ویرایشگر Run کنید.
   اجازهٔ Drive فقط همان‌جا پرسیده می‌شود.

   ویس‌ها: شرکت‌کننده داخل خودِ صفحه ضبط می‌کند و فایل همین‌جا می‌رسد.
   هر فایل در پوشه‌ای به نام «mohajer-voices» در Drive همین حساب ذخیره
   می‌شود و نشانی‌اش در برگهٔ «voices» می‌آید. چون این کد به Drive دست
   می‌زند، بار اولِ انتشار گوگل یک اجازهٔ تازه می‌خواهد — قبول کنید.

   بعد از هر تغییر در این کد، باید دوباره Deploy کنید:
   Deploy → Manage deployments → ✎ (ویرایش) → Version: New version → Deploy.
   آدرس عوض نمی‌شود.
   ──────────────────────────────────────────────────────────────────────
   شیت خودش خواندنی است: سن، اعتماد، قدم بعدی، جایگاه، فهم دارایی و فهم
   جای نگهداری، پیشرفتِ پاسخ‌ها (از هفت)، نتیجهٔ مأموریت و اقدام‌های پایان
   هر کدام ستون خودشان را دارند. ستون json نسخهٔ کامل جلسه است و صفحهٔ
   نتیجه‌ها از همان می‌خواند.

   یک جلسه ممکن است چند سطر داشته باشد: نیمه‌کاره‌ها در راه و نسخهٔ نهایی
   در پایان، همه با یک id. خواندن آخرین سطرِ هر id را برمی‌دارد، پس هیچ‌کس
   دو بار شمرده نمی‌شود و هیچ نیمه‌کاره‌ای هم گم نمی‌شود.

   چه چیزی ذخیره می‌شود: بازهٔ سنی، سه پاسخ رفتاری، مسیر صفحه‌ها، ضربه‌ها و
   متن‌هایی که خود شرکت‌کننده نوشته است. اطلاعات بانکی هرگز پرسیده نمی‌شود.
   دو ستون آخر (name و tel) فقط وقتی پر است که خودِ شرکت‌کننده در پایان
   خواسته باشد با او تماس بگیرید — یعنی هر شماره‌ای که اینجاست، با رضایت
   صریح صاحبش اینجاست. همان‌طور با آن رفتار کنید.
   ══════════════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════════
   یک‌بار، بعد از چسباندن این کد: از فهرستِ بالای ویرایشگر «setup» را
   انتخاب کنید و Run بزنید. گوگل اجازهٔ Drive را می‌پرسد — قبول کنید.
   بدون این یک کار، ویس‌ها هیچ‌وقت نمی‌رسند؛ چون تابع‌هایی که با _ تمام
   می‌شوند در فهرستِ Run دیده نمی‌شوند و اجازه هیچ‌وقت پرسیده نمی‌شود.
   ════════════════════════════════════════════════════════════════ */
function setup() {
  var f = voiceFolder_();            /* همین خط، اجازهٔ Drive را می‌طلبد */
  voiceSheet_();
  sheet_();
  var msg = 'آماده است.\nپوشهٔ ویس‌ها: ' + f.getUrl();
  Logger.log(msg);
  try { SpreadsheetApp.getActiveSpreadsheet().toast('ویس‌ها آماده‌اند', 'مهاجر', 8); } catch (e) {}
  return msg;
}

var SHEET = 'sessions';
var VOICE_SHEET = 'voices';
var VOICE_FOLDER = 'mohajer-voices';   /* داخل Drive خودتان ساخته می‌شود */
var MAX_CELL = 45000;          /* سقف امن یک خانهٔ شیت */

/* ستون json عمداً نهم مانده است: شیت‌هایی که با نسخهٔ قبلی این کد پر شده‌اند
   بدون دست‌خوردن خوانده می‌شوند و ستون‌های تازه بعد از آن اضافه می‌شوند. */
var HEAD = ['at', 'id', 'round', 'version', 'channel', 'age', 'done', 'seconds', 'json',
            'trust', 'next_step', 'positioning', 'asset', 'custody', 'notes', 'screens', 'taps', 'rage', 'dead',
            'name', 'tel',
            /* ستون‌های پروتکل ۱.۱ — بعد از ستون‌های قبلی، تا شیت‌های پرشده دست‌نخورده بمانند */
            'protocol', 'answered', 'confirmed', 'revision', 'updated',
            'mission', 'independent', 'first_route', 'post_actions'];

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(HEAD);
    sh.setFrozenRows(1);
    return sh;
  }
  /* شیتِ قدیمی: ستون‌های تازه به انتها اضافه می‌شوند، ردیف‌های قبلی دست‌نخورده */
  var w = sh.getLastColumn();
  if (w < HEAD.length) {
    sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]);
    sh.setFrozenRows(1);
  }
  /* ستون ۱۰ تا ۱۴ در نسخهٔ قبل go/stop/confuse/change بود و آن سؤال‌ها حذف
     شده‌اند. سرسطر عوض می‌شود ولی ردیف‌های قدیمی سرِ جای خودشان می‌مانند:
     برای خواندنِ آن‌ها ستون json هست، که همیشه کاملِ جلسه است. */
  return sh;
}

/* اعدادی که عدد نیستند: «4.5» را شیت به 4.5 تبدیل می‌کند و «5.0» را به 5،
   و آن‌وقت فیلترِ نسخه دیگر جور درنمی‌آید. آپستروف یعنی «این متن است». */
function txt_(v) {
  v = (v === null || v === undefined) ? '' : String(v);
  return v === '' ? '' : "'" + v;
}

/* ── نوشتن ─────────────────────────────────────────────────────────
   هر ارسال یک سطر تازه است، حتی اگر همان جلسه قبلاً نیمه‌کاره فرستاده
   شده باشد. خواندن، آخرین سطرِ هر id را برمی‌دارد — این ساده‌ترین راهی
   است که هم نیمه‌کاره‌ها را نگه می‌دارد و هم هیچ‌وقت چیزی را گم نمی‌کند. */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(25000); } catch (err) { return out_({ ok: false, error: 'busy' }); }
  try {
    var raw = (e && e.postData && e.postData.contents) || '{}';
    var s = JSON.parse(raw);
    if (!s || !s.id) return out_({ ok: false, error: 'no-id' });
    if (s.kind === 'voice') return voiceSave_(s);

    var json = JSON.stringify(s);
    if (json.length > MAX_CELL) {                       /* رویدادها را کوتاه کن، نه پاسخ‌ها را */
      var t = JSON.parse(json);
      t.ev = (t.ev || []).slice(0, 500); t.trimmed = 1;
      json = JSON.stringify(t).slice(0, MAX_CELL);
    }

    var seg = s.seg || {}, end = s.end || {}, ev = s.ev || [];
    var oc = s.outcomes || {}, sc = s.score || {};
    var screens = {}, taps = 0, rage = 0, dead = 0;
    for (var i = 0; i < ev.length; i++) {
      var k = ev[i][0];
      if (k === 's') screens[ev[i][2]] = 1;
      else if (k === 't') taps++;
      else if (k === 'r') rage++;
      else if (k === 'd') dead++;
    }
    /* «چند تا از هفت سؤال» — اگر runner حسابش نکرده باشد، همین‌جا شمرده
       می‌شود تا ستون هیچ‌وقت خالی نماند. */
    var CORE = ['positioning_main','distinct_value','asset_understanding','custody_understanding',
                'feature_top2','trust','commitment_step'];
    var answered = sc.answered;
    if (answered === undefined) {
      answered = 0;
      for (var a = 0; a < CORE.length; a++) {
        var v = end[CORE[a]];
        if (v !== undefined && v !== null && v !== '' && !(v.length === 0)) answered++;
      }
    }
    var notes = (s.fb || []).map(function (f) {
      return (f.mood || '') + (f.s ? '@' + f.s : '') + (f.text ? ': ' + f.text : '');
    }).join(' | ');

    sheet_().appendRow([
      new Date(), txt_(s.id), txt_(s.r), txt_(s.ver), txt_(s.c),
      seg.age || '', s.done ? 1 : 0, Math.round((s.ms || 0) / 1000), json,
      end.trust || '', end.commitment_step || '', end.positioning_main || '',
      end.asset_understanding || '', end.custody_understanding || '', notes,
      Object.keys(screens).length, taps, rage, dead,
      (s.contact && s.contact.name) || '', txt_((s.contact && s.contact.tel) || ''),
      txt_(s.protocol_version || '1.0'), answered, s.delivery_confirmed ? 1 : 0,
      s.revision || 0, s.updated_at || '',
      oc.primary_completed ? 1 : 0, oc.primary_independent ? 1 : 0, oc.first_route || '',
      (s.post_actions || []).join('+')
    ]);
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* ── ویس ───────────────────────────────────────────────────────────
   شرکت‌کننده داخل خودِ صفحه ضبط می‌کند؛ فایل base64 می‌شود و همین‌جا
   می‌رسد. اینجا به یک فایل واقعی در Drive تبدیل می‌شود، با نامی که
   جلسه‌اش را لو می‌دهد: v4.5__r3__ab12cd.webm

   نکتهٔ استقرار: این تابع به Drive دست می‌زند، پس بار اولی که منتشر
   می‌کنید گوگل اجازهٔ تازه می‌خواهد. قبول کنید، وگرنه ویس‌ها نمی‌آیند. */
function voiceFolder_() {
  var it = DriveApp.getFoldersByName(VOICE_FOLDER);
  return it.hasNext() ? it.next() : DriveApp.createFolder(VOICE_FOLDER);
}
function voiceSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(VOICE_SHEET);
  if (!sh) {
    sh = ss.insertSheet(VOICE_SHEET);
    sh.appendRow(['at', 'id', 'round', 'version', 'channel', 'age', 'seconds', 'kb', 'file', 'url', 'fileId']);
    sh.setFrozenRows(1);
  }
  return sh;
}
function voiceExt_(mime) {
  mime = String(mime || '');
  if (mime.indexOf('mp4') >= 0 || mime.indexOf('m4a') >= 0 || mime.indexOf('aac') >= 0) return 'm4a';
  if (mime.indexOf('ogg') >= 0) return 'ogg';
  if (mime.indexOf('mpeg') >= 0 || mime.indexOf('mp3') >= 0) return 'mp3';
  if (mime.indexOf('wav') >= 0) return 'wav';
  return 'webm';
}
function voiceSave_(s) {
  try {
    if (!s.b64) return out_({ ok: false, error: 'no-audio' });
    /* همان ویس دو بار نوشته نمی‌شود. صفحه وقتی جوابِ «رسید؟» دیر بیاید
       دوباره می‌فرستد؛ اینجا همان شناسه با همان اندازه یعنی همان فایل. */
    var kb = Math.round((s.bytes || (s.b64.length * 3 / 4)) / 1024);
    var vs = voiceSheet_(), vv = vs.getDataRange().getValues();
    for (var d = vv.length - 1; d > 0; d--) {
      if (String(vv[d][1]) === String(s.id) && Math.abs((+vv[d][7] || 0) - kb) <= 1) {
        return out_({ ok: true, dup: true, url: vv[d][9] });
      }
    }
    var name = 'v' + (s.ver || '?') + '__r' + (s.r || '?') + '__' + s.id + '.' + voiceExt_(s.mime);
    var bytes = Utilities.base64Decode(s.b64);
    var blob = Utilities.newBlob(bytes, s.mime || 'audio/webm', name);
    var file = voiceFolder_().createFile(blob);
    voiceSheet_().appendRow([
      new Date(), txt_(s.id), txt_(s.r), txt_(s.ver), txt_(s.c), s.age || '',
      s.secs || '', Math.round((s.bytes || bytes.length) / 1024), name, file.getUrl(), txt_(file.getId())
    ]);
    return out_({ ok: true, url: file.getUrl() });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

/* ── خواندن ────────────────────────────────────────────────────────
   JSONP، چون یک وب‌اپِ Apps Script درخواست را به دامنهٔ دیگری هدایت
   می‌کند و fetchِ بین‌دامنه‌ای همیشه با آن کنار نمی‌آید؛ یک script tag
   هیچ‌وقت این مشکل را ندارد.                                        */
function doGet(e) {
  var p = (e && e.parameter) || {};
  /* عمداً سبک: نه شیت باز می‌کند، نه Drive. تنها کارش بیدارکردن سرور است. */
  if (p.ping) return out_({ ok: true, pong: 1, voice: 1 }, p.callback);

  /* «ویسِ این جلسه رسید؟» — صفحهٔ شرکت‌کننده تا این را نپرسد، نمی‌نویسد
     «ویس شما رسید». */
  if (p.voice) {
    var vs = null;
    try { vs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(VOICE_SHEET); } catch (err) {}
    if (!vs) return out_({ ok: true, found: false }, p.callback);
    var vr = vs.getDataRange().getValues();
    for (var q = vr.length - 1; q > 0; q--) {
      if (String(vr[q][1]) === String(p.voice)) {
        return out_({ ok: true, found: true, url: vr[q][9] }, p.callback);
      }
    }
    return out_({ ok: true, found: false }, p.callback);
  }

  /* خودِ صدا، برای پخش در کنسول. base64 برمی‌گردد تا بدون باز کردن Drive
     همان‌جا شنیده شود. */
  if (p.voiceget) {
    try {
      var g = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(VOICE_SHEET);
      if (!g) return out_({ ok: false, error: 'no-voices' }, p.callback);
      var gr = g.getDataRange().getValues(), fid = '', nm = '';
      for (var y = gr.length - 1; y > 0; y--) {
        if (String(gr[y][1]) === String(p.voiceget)) { fid = String(gr[y][10] || ''); nm = String(gr[y][8] || ''); break; }
      }
      if (!fid) return out_({ ok: false, error: 'not-found' }, p.callback);
      var bl = DriveApp.getFileById(fid).getBlob();
      return out_({ ok: true, name: nm, mime: bl.getContentType(),
                    b64: Utilities.base64Encode(bl.getBytes()) }, p.callback);
    } catch (err) {
      return out_({ ok: false, error: String(err) }, p.callback);
    }
  }

  /* فهرست ویس‌ها، برای کنسول */
  if (p.voices) {
    var vsh = null;
    try { vsh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(VOICE_SHEET); } catch (err) {}
    var list = [];
    if (vsh) {
      var rows2 = vsh.getDataRange().getValues();
      for (var w = 1; w < rows2.length; w++) {
        list.push({ at: rows2[w][0], id: String(rows2[w][1]), r: String(rows2[w][2]),
                    ver: String(rows2[w][3]), c: String(rows2[w][4] || ''), age: rows2[w][5] || '',
                    secs: rows2[w][6], kb: rows2[w][7], url: rows2[w][9] });
      }
    }
    var fu2 = '';
    try { fu2 = voiceFolder_().getUrl(); } catch (err) {}
    return out_({ ok: true, n: list.length, folder: fu2, voices: list }, p.callback);
  }

  var sh = sheet_();
  var rows = sh.getDataRange().getValues();
  var head = rows.length ? rows[0] : HEAD;
  var col = {};
  for (var h = 0; h < head.length; h++) col[String(head[h])] = h;
  var iId = col.id === undefined ? 1 : col.id;
  var iJson = col.json === undefined ? 8 : col.json;

  /* «آیا این جلسه واقعاً رسید؟» — صفحهٔ شرکت‌کننده تا این را نپرسد و جواب
     نگیرد، نمی‌نویسد «ارسال شد». یک POST بی‌پاسخ، دلیلِ رسیدن نیست. */
  if (p.has) {
    for (var v = rows.length - 1; v > 0; v--) {
      if (String(rows[v][iId]) === String(p.has)) return out_({ ok: true, found: true }, p.callback);
    }
    return out_({ ok: true, found: false }, p.callback);
  }

  var byId = {};
  /* فیلترِ راند: صفحهٔ نتیجه‌ها معمولاً فقط یک راند را لازم دارد */
  var iRound = col.round === undefined ? 2 : col.round;
  var onlyR = p.r ? String(p.r) : null;
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][iId]) continue;
    if (onlyR && String(rows[i][iRound]) !== onlyR) continue;
    byId[String(rows[i][iId])] = rows[i];               /* آخرین سطرِ هر id برنده است */
  }
  var keys = Object.keys(byId), list = [];

  /* صفحه‌صفحه. خروجیِ کامل از سقفِ پاسخِ Apps Script گذشت و دیگر
     برنمی‌گشت. هر کس limit بفرستد صفحه‌ای می‌گیرد و `next` می‌گوید از
     کجا ادامه دهد؛ هر کس نفرستد، همان رفتارِ قبلی را دارد. */
  var total = keys.length, next = null;
  if (p.limit) {
    var off = Math.max(0, parseInt(p.offset, 10) || 0);
    var lim = Math.max(1, Math.min(40, parseInt(p.limit, 10) || 15));
    keys = keys.slice(off, off + lim);
    next = (off + lim < total) ? off + lim : null;
  }
  for (var k = 0; k < keys.length; k++) {
    var r = byId[keys[k]];
    if (p.full) {
      try { list.push(JSON.parse(r[iJson])); } catch (err) {}
    } else {
      list.push({
        id: String(r[iId]),
        r: String(r[col.round === undefined ? 2 : col.round]),
        ver: String(r[col.version === undefined ? 3 : col.version]),
        c: String(r[col.channel === undefined ? 4 : col.channel]),
        age: r[col.age === undefined ? 5 : col.age],
        done: r[col.done === undefined ? 6 : col.done],
        ms: (r[col.seconds === undefined ? 7 : col.seconds] || 0) * 1000,
        /* کنسول از همین خلاصه شمارش می‌کند، پس پروتکل و پیشرفتِ پاسخ‌ها و
           تأییدِ تحویل باید در خودِ خلاصه باشند، نه فقط داخل json. */
        p: col.protocol === undefined ? '1.0' : String(r[col.protocol] || '1.0'),
        answered: col.answered === undefined ? '' : r[col.answered],
        confirmed: col.confirmed === undefined ? '' : r[col.confirmed],
        at: r[0]
      });
    }
  }
  return out_({ ok: true, n: list.length, total: total, next: next, sessions: list }, p.callback);
}

function out_(obj, callback) {
  var body = JSON.stringify(obj);
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + body + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JSON);
}
