// The four simulators on sims.html. Each <div class="sim" data-sim="..."> gets its sliders and its answer here;
// the formulas are the ones the lessons explain. Runs in the browser only.
(function () {
  var G = { Earth: 9.81, Mars: 3.71, Moon: 1.62 }, RHO = { Earth: 1.225, Mars: 0.020 };
  var f1 = function (x) { return x.toFixed(1); }, f2 = function (x) { return x.toFixed(2); };

  // a slider row: label, min, max, step, start, unit
  function slider(box, id, label, min, max, step, val, unit) {
    box.insertAdjacentHTML("beforeend", '<label class="sim-row"><span>' + label + '</span><input type="range" data-k="' + id +
      '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"><output></output><small>' + unit + "</small></label>");
  }
  function vals(box) {
    var v = {};
    box.querySelectorAll("input[data-k]").forEach(function (i) { v[i.dataset.k] = +i.value; i.nextElementSibling.textContent = i.value; });
    return v;
  }
  function bars(rows, max, unit, fmt) {
    return '<div class="sim-bars">' + rows.map(function (r) {
      return '<div><span>' + r[0] + '</span><i style="width:' + Math.min(100, 100 * r[1] / max) + '%" class="' + r[0].toLowerCase() + '"></i><b>' + fmt(r[1]) + " " + unit + "</b></div>";
    }).join("") + "</div>";
  }

  var SIMS = {
    jump: function (box, out) {
      slider(box, "v", "Take-off speed", 1, 5, 0.1, 2.7, "m/s");
      return function (v) {
        var rows = ["Earth", "Mars", "Moon"].map(function (p) { return [p, v.v * v.v / (2 * G[p])]; });
        out.innerHTML = bars(rows, rows[2][1], "m", f2) + "<p>Time in the air: " + ["Earth", "Mars", "Moon"].map(function (p) {
          return p + " " + f2(2 * v.v / G[p]) + " s"; }).join(" · ") + "</p><p>A good standing jump on Earth leaves the ground at about 2.7 m/s.</p>";
      };
    },

    window: function (box, out) {
      box.insertAdjacentHTML("beforeend", '<label class="sim-row"><span>Date</span><input type="date" data-d value="' + new Date().toISOString().slice(0, 10) + '"></label>');
      box.querySelector("[data-d]").addEventListener("input", function () { box.dispatchEvent(new Event("input")); });
      // mean longitudes on circular orbits, degrees, d days from 1 Jan 2000 12:00 UT
      var LE = function (d) { return 100.464 + 0.98560910 * d; }, LM = function (d) { return 355.433 + 0.52403840 * d; };
      var NEED = 180 - 259 * 0.52403840;   // Mars must lead Earth by this at launch: about 44.3 degrees
      var mod = function (x) { return (x % 360 + 360) % 360; };
      return function () {
        var t = Date.parse(box.querySelector("[data-d]").value) || Date.now(), d = (t - Date.UTC(2000, 0, 1, 12)) / 864e5;
        var lead = mod(LM(d) - LE(d)), wait = mod(lead - NEED) / (0.98560910 - 0.52403840);
        var day = new Date(t + wait * 864e5).toISOString().slice(0, 10);
        var pos = function (L, r) { var a = L * Math.PI / 180; return [100 + r * Math.cos(a), 100 - r * Math.sin(a)]; };
        var e = pos(LE(d), 52), m = pos(LM(d), 80);
        out.innerHTML = '<svg viewBox="0 0 200 200" class="sim-orbits" role="img" aria-label="Earth and Mars on their orbits around the Sun on the chosen date">' +
          '<circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" opacity=".35"/><circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" opacity=".35"/>' +
          '<circle cx="100" cy="100" r="7" fill="#f2c14e"/><circle cx="' + e[0] + '" cy="' + e[1] + '" r="5" fill="#5aa0d8"/><circle cx="' + m[0] + '" cy="' + m[1] + '" r="4.5" fill="#d86a3a"/></svg>' +
          "<p>Mars is " + f1(lead) + "° ahead of Earth (a launch needs about " + f1(NEED) + "°).</p><p>" +
          (wait < 8 ? "<b>The window is open now.</b>" : "Next window: about <b>" + day + "</b>, in " + Math.round(wait) + " days.") +
          " Windows come every 780 days, about 26 months.</p>";
      };
    },

    rocket: function (box, out) {
      slider(box, "ve", "Exhaust speed", 2, 4.6, 0.1, 3.7, "km/s");
      slider(box, "dry", "Empty mass", 10, 200, 5, 100, "t");
      slider(box, "fuel", "Propellant", 0, 2000, 25, 225, "t");
      return function (v) {
        var dv = v.ve * Math.log((v.dry + v.fuel) / v.dry);
        var need = [["Earth's surface to low orbit", 9.4], ["Low Earth orbit to the way to Mars", 3.6], ["Mars's surface to low Mars orbit", 4.1]];
        out.innerHTML = "<p class='sim-big'>Δv = " + f2(dv) + " km/s</p><p>Mass ratio " + f1((v.dry + v.fuel) / v.dry) + "</p><ul>" + need.map(function (n) {
          return "<li>" + n[0] + ": " + n[1] + " km/s " + (dv >= n[1] ? "✓" : "✗") + "</li>"; }).join("") + "</ul>" +
          "<p>The empty mass is everything left after the burn: tanks, engines and payload. Methane and oxygen engines reach about 3.7 km/s; hydrogen and oxygen about 4.4 km/s.</p>";
      };
    },

    chute: function (box, out) {
      slider(box, "m", "Mass", 100, 3000, 50, 1000, "kg");
      slider(box, "D", "Parachute width", 5, 40, 0.5, 21.5, "m");
      slider(box, "cd", "Drag coefficient", 0.3, 1.0, 0.05, 0.6, "");
      return function (v) {
        var A = Math.PI * v.D * v.D / 4;
        var rows = ["Earth", "Mars"].map(function (p) { return [p, Math.sqrt(2 * v.m * G[p] / (RHO[p] * v.cd * A))]; });
        out.innerHTML = bars(rows, Math.max(rows[1][1], 1), "m/s", f1) + "<p>On Mars that is like hitting the ground after a fall of " +
          f1(rows[1][1] * rows[1][1] / (2 * 9.81)) + " m on Earth, which is why landers need rockets or airbags as well.</p>" +
          "<p>Perseverance's parachute was 21.5 m wide, and under it the lander still came down at about 90 m/s (320 km/h).</p>";
      };
    }
  };

  function init() {
    document.querySelectorAll(".sim[data-sim]").forEach(function (box) {
      if (box.dataset.ready || !SIMS[box.dataset.sim]) return;
      box.dataset.ready = "1";
      var ctl = document.createElement("div"), out = document.createElement("div");
      ctl.className = "sim-ctl"; out.className = "sim-out";
      box.append(ctl, out);
      var draw = SIMS[box.dataset.sim](ctl, out), go = function () { draw(vals(ctl)); };
      ctl.addEventListener("input", go);
      box.addEventListener("input", go);
      go();
    });
  }
  if (window.document$ && document$.subscribe) document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
