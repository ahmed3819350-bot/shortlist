// Promo video: loops muted under the headline. The corner button pauses and plays it. Visitors who ask their
// system for reduced motion get it paused, with the button showing Play.
(function () {
  var video = document.getElementById('promo-video');
  var btn = document.getElementById('promo-toggle');
  if (!video || !btn) return;
  var PAUSE = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4.5v11 M13 4.5v11"/></svg>';
  var PLAY = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 4.5v11l9-5.5z"/></svg>';
  function paint() {
    var paused = video.paused;
    btn.innerHTML = paused ? PLAY : PAUSE;
    btn.setAttribute('aria-label', paused ? 'Play the video' : 'Pause the video');
    btn.title = paused ? 'Play' : 'Pause';
  }
  btn.addEventListener('click', function () {
    if (video.paused) { var p = video.play(); if (p && p.catch) p.catch(function () {}); } else video.pause();
  });
  video.addEventListener('play', paint);
  video.addEventListener('pause', paint);
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
  paint();
})();
