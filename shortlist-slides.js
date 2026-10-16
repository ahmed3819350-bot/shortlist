// Shortlist page: the preview frame steps through four screens. The tabs pick one; it moves on
// by itself every few seconds, pauses while the pointer or focus is on it, and stays put with reduced motion.
document.addEventListener('DOMContentLoaded', function () {
  var frame = document.getElementById('slides');
  if (!frame) return;
  var slides = frame.querySelectorAll('.slide');
  var tabs = document.querySelectorAll('.tabs button');
  var bar = document.querySelector('.tabs');
  var caption = document.getElementById('slide-caption');
  var MS = 6000, i = 0, timer = null, paused = false;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  bar.style.setProperty('--slide-ms', MS + 'ms');
  if (still) bar.classList.add('paused');

  function go(n) {
    i = (n + slides.length) % slides.length;
    Array.prototype.forEach.call(slides, function (s, k) { s.classList.toggle('on', k === i); s.setAttribute('aria-hidden', String(k !== i)); });
    Array.prototype.forEach.call(tabs, function (t, k) {
      t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1;
      // Restart the progress line on the chosen tab.
      if (k === i) { t.style.animation = 'none'; void t.offsetWidth; t.style.animation = ''; }
    });
    caption.textContent = slides[i].getAttribute('data-caption');
    schedule();
  }
  function schedule() {
    clearTimeout(timer);
    if (!still && !paused) timer = setTimeout(function () { go(i + 1); }, MS);
  }
  function pause(p) { paused = p; bar.classList.toggle('paused', p || still); if (p) clearTimeout(timer); else schedule(); }

  Array.prototype.forEach.call(tabs, function (t, k) {
    t.addEventListener('click', function () { go(k); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault(); go(i + (e.key === 'ArrowRight' ? 1 : -1)); tabs[i].focus();
    });
  });
  [frame, bar].forEach(function (el) {
    el.addEventListener('mouseenter', function () { pause(true); });
    el.addEventListener('mouseleave', function () { pause(false); });
    el.addEventListener('focusin', function () { pause(true); });
    el.addEventListener('focusout', function () { pause(false); });
  });
  document.addEventListener('visibilitychange', function () { pause(document.hidden); });
  go(0);
});
