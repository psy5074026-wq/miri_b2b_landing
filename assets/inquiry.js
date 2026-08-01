/* miri B2B — inquiry form submission
   Posts to a Google Apps Script web app that appends a row to the
   inquiry spreadsheet. Replace ENDPOINT with the /exec URL after deploying. */
(function () {
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbxY174SJRagMCefUjTURhGBU0HzBra2jCOecaeJsFAuDqAAerpAf6ZSMsBdhv9wpI-7EQ/exec';

  var form = document.querySelector('form.inquiry-form');
  if (!form) return;

  var btn = form.querySelector('button[type="submit"]');
  var note = form.querySelector('.form-note');
  var noteText = note ? note.innerHTML : '';

  function setNote(msg, tone) {
    if (!note) return;
    note.innerHTML = msg;
    note.style.color = tone === 'error' ? '#B23B3B' : (tone === 'ok' ? 'var(--red)' : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.dataset.sending) return;

    if (ENDPOINT.indexOf('http') !== 0) {
      setNote('Form is not connected yet. Please email us directly.', 'error');
      return;
    }
    if (!form.reportValidity()) return;

    form.dataset.sending = '1';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    setNote('Sending your inquiry…');

    var body = new URLSearchParams();
    ['name', 'company', 'email', 'country', 'buyer_type', 'product', 'message']
      .forEach(function (n) {
        var f = form.elements[n];
        body.append(n, f ? f.value : '');
      });
    body.append('source_page', location.pathname);
    body.append('referrer', document.referrer || 'direct');

    // Apps Script does not return CORS headers, so the response is opaque —
    // a resolved promise means it was delivered, not that the row was written.
    fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    }).then(function () {
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = 'Send inquiry'; }
      delete form.dataset.sending;
      setNote('<b>Thank you — your inquiry has been received.</b><br/>Our team typically replies within 1–2 business days.', 'ok');
    }).catch(function () {
      if (btn) { btn.disabled = false; btn.textContent = 'Send inquiry'; }
      delete form.dataset.sending;
      setNote('Something went wrong. Please email us at <b>pnj9780@naver.com</b>.', 'error');
    });
  });

  // Restore the original helper text once the buyer starts a new inquiry.
  form.addEventListener('focusin', function () {
    if (note && note.innerHTML !== noteText && !form.dataset.sending) {
      setNote(noteText);
    }
  });
})();
