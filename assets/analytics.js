/* miri B2B — Amplitude tracking
   Event names match the taxonomy already in use:
   Landing Viewed · Recipe Viewed · B2B Inquiry Started ·
   B2B Question Answered · B2B Inquiry Submitted            */
(function () {
  var amp = window.amplitude;
  if (!amp) return;

  var path = location.pathname.replace(/^\//, '') || 'index.html';
  var page = path.replace(/\.html$/, '');

  function pageType() {
    if (page === 'index' || page === '') return 'home';
    if (page === 'products') return 'product_list';
    if (page === 'vegetable-dumpling' || page.indexOf('product-') === 0) return 'product_detail';
    if (page === 'recipes' || page.indexOf('recipe-') === 0) return 'recipe';
    if (page === 'contact') return 'contact';
    return page;
  }

  // Where the visit came from. Search engines stopped passing the query itself
  // years ago, so this is as granular as it gets client-side — Search Console
  // is the only place the actual keywords show up.
  function referrerType() {
    var p = new URLSearchParams(location.search);
    if (p.get('utm_source')) return 'campaign:' + p.get('utm_source');
    var r = document.referrer;
    if (!r) return 'direct';
    try {
      var h = new URL(r).hostname.replace(/^www\./, '');
      if (h === location.hostname) return 'internal';
      if (/chatgpt|openai|perplexity|claude\.ai|copilot|gemini\.google|bard\.google|you\.com|phind|grok\.com|x\.ai|poe\.com|mistral|deepseek|kagi/.test(h)) return 'ai_assistant';
      if (/google\./.test(h)) return 'organic:google';
      if (/bing\./.test(h)) return 'organic:bing';
      if (/duckduckgo|yahoo|naver|daum/.test(h)) return 'organic:other';
      if (/facebook|instagram|linkedin|t\.co|twitter/.test(h)) return 'social';
      return 'referral:' + h;
    } catch (e) { return 'referral'; }
  }

  var base = { site: 'miri-b2b', page: page, page_type: pageType() };

  function track(name, props) {
    var merged = Object.assign({}, base, props || {});
    return amp.track(name, merged);
  }

  /* ---- page-level ---- */
  if (pageType() === 'home') {
    track('Landing Viewed', { referrer_type: referrerType() });
  }

  if (pageType() === 'recipe') {
    // Hub page: which of the three dishes actually got read.
    var recipe = document.querySelector('h1');
    track('Recipe Viewed', {
      recipe_name: recipe ? recipe.textContent.trim().replace(/\s+/g, ' ') : page,
      recipe_page: page
    });

    var blocks = document.querySelectorAll('.recipe-block');
    if (blocks.length && 'IntersectionObserver' in window) {
      var seen = {};
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var h = e.target.querySelector('h3');
          var nm = h ? h.textContent.trim() : 'unknown';
          if (seen[nm]) return;
          seen[nm] = 1;
          track('Recipe Viewed', { recipe_name: nm, recipe_page: page, scrolled_to: true });
        });
      }, { threshold: 0.5 });
      blocks.forEach(function (b) { io.observe(b); });
    }
  }

  /* ---- inquiry form ---- */
  var form = document.querySelector('form.inquiry-form');
  if (!form) return;

  var started = false;
  var answered = {};

  form.addEventListener('focusin', function () {
    if (started) return;
    started = true;
    track('B2B Inquiry Started', { referrer_type: referrerType() });
  });

  // One event per field completed — this is what shows where buyers give up.
  form.addEventListener('change', function (e) {
    var el = e.target;
    if (!el.name || el.type === 'hidden') return;
    if (answered[el.name]) return;
    var val = (el.value || '').trim();
    if (!val) return;
    answered[el.name] = 1;

    var props = { field: el.name, fields_completed: Object.keys(answered).length };
    // Only the low-cardinality choices are worth storing as values;
    // names, emails and free text stay out of the event payload.
    if (el.name === 'buyer_type' || el.name === 'product' || el.name === 'country') {
      props.value = val;
    }
    track('B2B Question Answered', props);
  });

  // inquiry.js owns the submit: it posts by fetch and the page never navigates,
  // so there is nothing to hold the event open for here.
  form.addEventListener('submit', function () {
    if (form.dataset.ampSent) return;
    form.dataset.ampSent = '1';

    var g = function (n) { var f = form.elements[n]; return f ? (f.value || '').trim() : ''; };
    track('B2B Inquiry Submitted', {
      buyer_type: g('buyer_type') || 'not_specified',
      product: g('product') || 'not_specified',
      country: g('country') || 'not_specified',
      has_message: g('message').length > 0,
      message_length: g('message').length,
      referrer_type: referrerType()
    });
  });

  /* ---- catalog / spec-sheet downloads ---- */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href$=".pdf"]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var name = href.split('/').pop().replace(/\.pdf$/i, '');
    var label = a.querySelector('h4');
    track('Catalog Downloaded', {
      file_name: name,
      file_url: href,
      link_text: label ? label.textContent.trim() : (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
      referrer_type: referrerType()
    });
  }, true);

  // A buyer may correct an error and submit again; let that count too.
  form.addEventListener('reset', function () { delete form.dataset.ampSent; });
})();
