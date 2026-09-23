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

   بعد از هر تغییر در این کد، باید دوباره Deploy کنید:
   Deploy → Manage deployments → ✎ (ویرایش) → Version: New version → Deploy.
   آدرس عوض نمی‌شود.
   ──────────────────────────────────────────────────────────────────────
   شیت خودش خواندنی است: سن، اعتماد، «ادامه می‌دادم»، لایهٔ توقف و متن‌هایی
   که نوشته‌اند هر کدام ستون خودشان را دارند. ستون json نسخهٔ کامل است و
   صفحهٔ نتیجه‌ها از همان می‌خواند.

   چه چیزی ذخیره می‌شود: بازهٔ سنی، سه پاسخ رفتاری، مسیر صفحه‌ها، ضربه‌ها و
   متن‌هایی که خود شرکت‌کننده نوشته است. اطلاعات بانکی هرگز پرسیده نمی‌شود.
   دو ستون آخر (name و tel) فقط وقتی پر است که خودِ شرکت‌کننده در پایان
   خواسته باشد با او تماس بگیرید — یعنی هر شماره‌ای که اینجاست، با رضایت
   صریح صاحبش اینجاست. همان‌طور با آن رفتار کنید.
   ══════════════════════════════════════════════════════════════════════ */

var SHEET = 'sessions';
var MAX_CELL = 45000;          /* سقف امن یک خانهٔ شیت */

/* ستون json عمداً نهم مانده است: شیت‌هایی که با نسخهٔ قبلی این کد پر شده‌اند
   بدون دست‌خوردن خوانده می‌شوند و ستون‌های تازه بعد از آن اضافه می‌شوند. */
var HEAD = ['at', 'id', 'round', 'version', 'channel', 'age', 'done', 'seconds', 'json',
            'trust', 'go', 'stop', 'confuse', 'change', 'notes', 'screens', 'taps', 'rage', 'dead',
            'name', 'tel'];

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

    var json = JSON.stringify(s);
    if (json.length > MAX_CELL) {                       /* رویدادها را کوتاه کن، نه پاسخ‌ها را */
      var t = JSON.parse(json);
      t.ev = (t.ev || []).slice(0, 500); t.trimmed = 1;
      json = JSON.stringify(t).slice(0, MAX_CELL);
    }

    var seg = s.seg || {}, end = s.end || {}, ev = s.ev || [];
    var screens = {}, taps = 0, rage = 0, dead = 0;
    for (var i = 0; i < ev.length; i++) {
      var k = ev[i][0];
      if (k === 's') screens[ev[i][2]] = 1;
      else if (k === 't') taps++;
      else if (k === 'r') rage++;
      else if (k === 'd') dead++;
    }
    var notes = (s.fb || []).map(function (f) {
      return (f.mood || '') + (f.s ? '@' + f.s : '') + (f.text ? ': ' + f.text : '');
    }).join(' | ');

    sheet_().appendRow([
      new Date(), txt_(s.id), txt_(s.r), txt_(s.ver), txt_(s.c),
      seg.age || '', s.done ? 1 : 0, Math.round((s.ms || 0) / 1000), json,
      end.trust || '', end.go || '', end.stop || '',
      end.confuse || '', end.change || '', notes,
      Object.keys(screens).length, taps, rage, dead,
      (s.contact && s.contact.name) || '', txt_((s.contact && s.contact.tel) || '')
    ]);
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* ── خواندن ────────────────────────────────────────────────────────
   JSONP، چون یک وب‌اپِ Apps Script درخواست را به دامنهٔ دیگری هدایت
   می‌کند و fetchِ بین‌دامنه‌ای همیشه با آن کنار نمی‌آید؛ یک script tag
   هیچ‌وقت این مشکل را ندارد.                                        */
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.ping) return out_({ ok: true, pong: 1 }, p.callback);

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
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][iId]) continue;
    byId[String(rows[i][iId])] = rows[i];               /* آخرین سطرِ هر id برنده است */
  }
  var keys = Object.keys(byId), list = [];
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
        at: r[0]
      });
    }
  }
  return out_({ ok: true, n: list.length, sessions: list }, p.callback);
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
