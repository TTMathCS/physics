// Where each page of physics.akadian.ca sits on the shared ladder Beginner, Intermediate, Expert.
// reader.js (the same on cs, math, cryptography and physics) draws the badge; only this file differs per site.
window.akadianLevel = function (path) {
  if (/\/start\.html$/.test(path)) return "Beginner";                     // the first-lessons page
  var lv = path.match(/\/topics\/[^\/]+\/level-(\d)\//);
  if (lv) return +lv[1] <= 4 ? "Beginner" : +lv[1] <= 7 ? "Intermediate" : "Expert";   // 1-4: about 5-11; 5-7: 12-16; 8: 17 on
  return null;
};
