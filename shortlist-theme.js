// Shortlist page: light by default; the visitor can switch to dark, and the choice is remembered.
(function () {
  var KEY = 'shortlist-theme';
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* storage blocked: stay light */ }
  root.dataset.theme = saved === 'dark' ? 'dark' : 'light';

  document.addEventListener('DOMContentLoaded', function () {
    // The sticky header's height changes with the window width; keep --header-h in step so menu links never land under it.
    var header = document.querySelector('header.top');
    if (header) {
      var setH = function () { root.style.setProperty('--header-h', header.offsetHeight + 'px'); };
      setH();
      if ('ResizeObserver' in window) new ResizeObserver(setH).observe(header); else addEventListener('resize', setH);
    }
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var sync = function () {
      var dark = root.dataset.theme === 'dark';
      btn.setAttribute('aria-checked', String(dark));
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    };
    sync();
    btn.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, root.dataset.theme); } catch (e) { /* not remembered, still switched */ }
      sync();
    });
  });
})();
