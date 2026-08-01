/**
 * miri B2B — inquiry form receiver
 *
 * Deploy this as a Web App bound to the spreadsheet that should collect
 * inquiries, then put the resulting /exec URL into assets/inquiry.js.
 *
 * Deploy settings that matter:
 *   Execute as:        Me
 *   Who has access:    Anyone            <- required; the browser posts anonymously
 *
 * Re-deploy as a NEW version after any edit, or the old code keeps running.
 */

var SHEET_NAME = 'Inquiries';

var FIELDS = [
  'name',
  'company',
  'email',
  'country',
  'buyer_type',
  'product',
  'message'
];

var HEADERS = [
  'Received (KST)',
  'Name',
  'Company',
  'Email',
  'Country',
  'Buyer type',
  'Product of interest',
  'Message',
  'Source page',
  'Referrer',
  'Status'          // left blank for the team to fill in: contacted / quoted / closed
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);                      // two submissions at once must not share a row
  try {
    var data = parseBody_(e);
    var sheet = getSheet_();

    var row = [
      Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss')
    ];
    FIELDS.forEach(function (f) {
      row.push(sanitize_(data[f]));
    });
    row.push(sanitize_(data.source_page));
    row.push(sanitize_(data.referrer));
    row.push('');                            // Status

    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  // Visiting the URL in a browser should say something, not throw.
  return ContentService
    .createTextOutput('miri inquiry endpoint is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function parseBody_(e) {
  if (!e) return {};
  if (e.parameter && Object.keys(e.parameter).length) return e.parameter;
  if (e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (ignore) {}
  }
  return {};
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * A value starting with = + - @ is executed as a formula when the sheet opens.
 * Anyone can type one into a public web form, so prefix it out.
 */
function sanitize_(v) {
  if (v === null || v === undefined) return '';
  var s = String(v).slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
