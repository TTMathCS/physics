---
title: "Aerobraking and aerocapture"
---

# Aerobraking and aerocapture

*Rockets and landing · level 8, lesson 4 of 6*

## A question to start

In March 2006, the Mars Reconnaissance Orbiter fired its engines to be captured by Mars into a long orbit taking 35
hours. Five months later it was in a 112-minute orbit close to the planet, and it had hardly used its engines to get
there. How?

## The idea

**Aerobraking.** A craft in a long ellipse lowers its periapsis (closest point) into the very top of the atmosphere,
around 100 km up. On each pass the thin air drags it a little, so it leaves periapsis slightly slower. By vis-viva, a
lower speed at periapsis means a smaller orbit: the **apoapsis falls** a bit each pass. After hundreds of passes over months,
the orbit is small. A final small burn lifts the periapsis back out of the air.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 180" role="img" aria-label="Mars with a thin ring of atmosphere. A long elliptical orbit dips into the atmosphere at its near end. Smaller and smaller ellipses show the orbit shrinking with each pass.">
  <circle cx="70" cy="90" r="34" fill="#d86a3a" opacity=".75" stroke="currentColor"/>
  <circle cx="70" cy="90" r="40" fill="none" stroke="#eea66f" stroke-dasharray="2 3"/>
  <ellipse cx="190" cy="90" rx="150" ry="55" fill="none" stroke="currentColor" opacity=".8"/>
  <ellipse cx="150" cy="90" rx="110" ry="42" fill="none" stroke="currentColor" opacity=".6"/>
  <ellipse cx="110" cy="90" rx="70" ry="30" fill="none" stroke="currentColor" opacity=".45"/>
  <circle cx="70" cy="90" r="46" fill="none" stroke="#7aa363" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="250" y="30">the first long orbit</text><text x="8" y="160">each pass dips into the air</text><text x="102" y="150">final circle</text></g>
</svg>
</div>

**What it saves.** From [Delta-v budgets](../../gravity/level-8/01-delta-v-budgets.md): arriving at
$v_\infty = 2.65$ km/s, capture straight into a 300 km circle takes 2.09 km/s. Capture into a 300 km by 45,000 km ellipse
(a 35-hour orbit) takes only 0.85 km/s; shrinking that to the circle by engine would take another 1.24 km/s. Aerobraking
does the 1.24 km/s with air. With $v_e = 3.1$ km/s (a typical orbiter's engines), that is 33% of the orbiter's mass that
need not be propellant.

**The cost** is time, months of careful work, and risk. Each pass must go deep enough to brake but not so deep that it
overheats the solar panels or the craft. Mars's upper atmosphere swells and shrinks from day to day with dust and
sunlight, so the team adjusts the periapsis with small burns.

| Orbiter | Aerobraking at Mars |
| --- | --- |
| Mars Global Surveyor | 1997 to 1999 |
| Mars Odyssey | 2001 to 2002 |
| Mars Reconnaissance Orbiter | 2006, more than 400 passes over about five months |
| ExoMars Trace Gas Orbiter | 2017 to 2018 |

**Aerocapture** goes further: no capture burn at all. The craft dives into the atmosphere once, behind a heat shield, and
uses drag to lose enough speed to be captured, then climbs out and makes a small burn at apoapsis. It could save most of
the 0.85 km/s too, and the months of aerobraking. The danger: the corridor is narrow. Too shallow and the craft skips out
uncaptured; too deep and it burns up or crashes. Aerocapture has been studied for decades but not yet flown anywhere.

## Worked examples

**1. Propellant saved.** 1.24 km/s at $v_e = 3.1$ km/s: $R = e^{0.40} = 1.49$; propellant fraction $1 - 1/1.49 = 33\%$.

**2. Per pass.** If MRO lost 1.24 km/s over about 430 passes, each pass took off about 3 m/s at periapsis.

**3. Apoapsis drop from one pass.** In the first ellipse ($r_p = 3{,}690$, $r_a = 48{,}390$ km), a 3 m/s cut at periapsis
changes $a$ by $\Delta a \approx 2a^2 v_p \Delta v/GM$. With $a = 26{,}040$ km and $v_p = 4.65$ km/s: $\Delta a \approx 2
\times 6.78\times10^8 \times 4.65 \times 0.003/42828 \approx 440$ km, so the apoapsis drops about 880 km on that pass.

## Try it

1. Why does slowing at periapsis lower the apoapsis?
2. Find the propellant fraction saved by aerobraking 1.0 km/s with $v_e = 3.0$ km/s.
3. Why does aerobraking take months?
4. What are the two ways an aerocapture can fail?
5. Why does it help that Mars's upper atmosphere is watched closely during aerobraking?

??? note "Answers"
    1. By vis-viva, a lower speed at the same $r$ means a smaller $a$; periapsis stays nearly fixed, so apoapsis falls.
    2. $1 - e^{-1/3} = 28\%$.
    3. Each pass can only remove a few m/s safely, so hundreds of passes are needed.
    4. Too shallow, skipping out uncaptured; too deep, overheating or crashing.
    5. Its density changes from day to day; the team must adjust the periapsis height so each pass brakes enough but not
       too much.

## Common mistake

**Thinking aerobraking slows the craft at apoapsis.** All the braking happens in the brief dip at periapsis. Its effect
shows up half an orbit later, as a lower apoapsis.

## Where it leads

- Back: [Gravity losses](03-gravity-losses.md) · Next: [Nuclear and electric propulsion](05-nuclear-and-electric.md)
- [Level 8 page](index.md) · [Rockets and landing topic page](../index.md)
- Vis-viva: [Vis-viva](../../gravity/level-7/04-vis-viva.md). MRO's aerobraking:
  [NASA, Mars Reconnaissance Orbiter](https://science.nasa.gov/mission/mars-reconnaissance-orbiter/).
