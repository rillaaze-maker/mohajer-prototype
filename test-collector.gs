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

   بعد از هر تغییر در این کد، باید دوباره Deploy کنید
   (Deploy → Manage deployments → ✎ → New version).
   ──────────────────────────────────────────────────────────────────────
   چه چیزی ذخیره می‌شود: بازهٔ سنی، سه پاسخ رفتاری، مسیر صفحه‌ها، ضربه‌ها و
   متن‌هایی که خود شرکت‌کننده نوشته است. نام، شماره و اطلاعات بانکی هرگز
   پرسیده نمی‌شود، پس اینجا هم چیزی از آن‌ها نیست.
   ══════════════════════════════════════════════════════════════════════ */

var SHEET = 'sessions';
var MAX_CELL = 45000;          /* سقف امن یک خانهٔ شیت */

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(['at', 'id', 'round', 'version', 'channel', 'age', 'done', 'seconds', 'json']);
    sh.setFrozenRows(1);
  }
  return sh;
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
      s.ev = (s.ev || []).slice(0, 500); s.trimmed = 1;
      json = JSON.stringify(s).slice(0, MAX_CELL);
    }
    sheet_().appendRow([
      new Date(), String(s.id), String(s.r || ''), String(s.ver || ''), String(s.c || ''),
      String((s.seg && s.seg.age) || ''), s.done ? 1 : 0, Math.round((s.ms || 0) / 1000), json
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

  var rows = sheet_().getDataRange().getValues();

  /* «آیا این جلسه واقعاً رسید؟» — صفحهٔ شرکت‌کننده تا این را نپرسد و جواب
     نگیرد، نمی‌نویسد «ارسال شد». یک POST بی‌پاسخ، دلیلِ رسیدن نیست. */
  if (p.has) {
    for (var h = rows.length - 1; h > 0; h--) {
      if (String(rows[h][1]) === String(p.has)) return out_({ ok: true, found: true }, p.callback);
    }
    return out_({ ok: true, found: false }, p.callback);
  }

  var byId = {};
  for (var i = 1; i < rows.length; i++) {
    var r = rows[i];
    if (!r[1]) continue;
    byId[String(r[1])] = r;                             /* آخرین سطرِ هر id برنده است */
  }
  var keys = Object.keys(byId), list = [];
  for (var k = 0; k < keys.length; k++) {
    var r2 = byId[keys[k]];
    if (p.full) {
      try { list.push(JSON.parse(r2[8])); } catch (err) {}
    } else {
      list.push({
        id: r2[1], r: r2[2], ver: r2[3], c: r2[4], age: r2[5],
        done: r2[6], ms: (r2[7] || 0) * 1000, at: r2[0]
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
