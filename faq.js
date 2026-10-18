// FAQ: each answer glides open (height eases, the text fades in and rises a few pixels) and closes the same way,
// a little faster. Uses the Web Animations API on the native <details>, so it still works as plain HTML without
// JavaScript. Instant for visitors who ask their system for reduced motion.
(function () {
  var EASE = 'cubic-bezier(.22, 1, .36, 1)';
  var reduce = function () { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; };

  function setup(details) {
    var summary = details.querySelector('summary');
    var answer = details.querySelector('p');
    if (!summary || !answer) return;
    var running = null;

    summary.addEventListener('click', function (e) {
      if (reduce() || !details.animate) return; // native toggle
      e.preventDefault();
      if (running) running.cancel();
      var closed = summary.offsetHeight;
      var start = details.offsetHeight;
      details.style.overflow = 'hidden';

      if (!details.open || details.classList.contains('closing')) {
        details.classList.remove('closing');
        details.open = true;
        var end = closed + answer.offsetHeight + parseFloat(getComputedStyle(answer).marginTop) + parseFloat(getComputedStyle(answer).marginBottom);
        running = details.animate({ height: [start + 'px', end + 'px'] }, { duration: 420, easing: EASE });
        answer.animate({ opacity: [0, 1], transform: ['translateY(-6px)', 'none'] }, { duration: 380, delay: 60, easing: EASE, fill: 'backwards' });
      } else {
        details.classList.add('closing');
        running = details.animate({ height: [start + 'px', closed + 'px'] }, { duration: 320, easing: EASE });
        answer.animate({ opacity: [1, 0], transform: ['none', 'translateY(-4px)'] }, { duration: 200, easing: 'ease-out', fill: 'forwards' });
      }
      running.onfinish = function () {
        if (details.classList.contains('closing')) { details.open = false; details.classList.remove('closing'); }
        answer.getAnimations().forEach(function (a) { a.cancel(); });
        details.style.overflow = '';
        running = null;
      };
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.faq details'), setup);
  });
})();
