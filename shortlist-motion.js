// Shortlist page: content rises gently into place as it scrolls into view, once per element.
(function () {
  var root = document.documentElement;
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('motion'); // only now is anything hidden, so the page still reads without JavaScript

  document.addEventListener('DOMContentLoaded', function () {
    var mark = function (els, step) {
      Array.prototype.forEach.call(els, function (el, i) { el.classList.add('reveal'); el.style.setProperty('--d', (i * (step || 0)) + 'ms'); });
    };
    var all = function (sel) { return document.querySelectorAll(sel); };

    // Hero: in sequence on load.
    var hero = all('.hero > *');
    mark(hero, 90);
    requestAnimationFrame(function () { requestAnimationFrame(function () { Array.prototype.forEach.call(hero, function (el) { el.classList.add('in'); }); }); });

    // Everything below: as it comes into view.
    mark(all('.preview .frame, .preview .caption, .how h2, .privacy h2, .privacy .paras, .faq h2, .faq-list,.download > :not(.reqs)'), 0);
    mark(all('.step'), 120);
    mark(all('.reqs > div'), 80);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    Array.prototype.forEach.call(all('.reveal:not(.in)'), function (el) { if (!el.closest('.hero')) io.observe(el); });
  });
})();

// Back to top: appears after scrolling about one screen, glides up (or jumps, with reduced motion).
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('to-top');
  if (!btn) return;
  var update = function () { btn.classList.toggle('show', window.scrollY > window.innerHeight * 0.9); };
  window.addEventListener('scroll', update, { passive: true });
  update();
  btn.addEventListener('click', function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    var brand = document.querySelector('.brand');
    if (brand) brand.focus({ preventScroll: true });
  });
});
