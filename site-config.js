// Download settings for the Shortlist website: change these values for each release.
window.SHORTLIST_SITE = {
  downloadUrl: 'https://github.com/ahmed3819350-bot/shortlist/releases/latest/download/Shortlist-Setup-0.2.1.exe',
  version: '0.2.1',
  size: '129 MB'
};
document.addEventListener('DOMContentLoaded', function () {
  var c = window.SHORTLIST_SITE;
  Array.prototype.forEach.call(document.querySelectorAll('[data-download]'), function (a) { a.href = c.downloadUrl; });
  Array.prototype.forEach.call(document.querySelectorAll('[data-version]'), function (n) { n.textContent = 'Version ' + c.version + ' · ' + c.size; });
});
