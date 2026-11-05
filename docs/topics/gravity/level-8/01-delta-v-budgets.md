---
title: "Delta-v budgets"
---

# Delta-v budgets

*Gravity and orbits · level 8, lesson 1 of 6*

## A question to start

A mission planner does not ask "how far is Mars?" but "how much delta-v does it take?" Why is that the right question,
and what is the answer, step by step, from the launch pad on Earth to the ground on Mars?

## The idea

**Delta-v** ($\Delta v$) is the total change of speed a ship must make with its engines. It is the right currency because
the rocket equation ([Rockets, level 6](../../rockets/level-6/05-the-rocket-equation.md)) turns it straight into fuel:
$m_0/m_1 = e^{\Delta v / v_e}$. Distance is almost free in space; changes of speed are not.

A **budget** adds the burns of a mission in order. For Earth to Mars, with figures typical of mission studies:

| Step | $\Delta v$ (km/s) | How it is worked out |
| --- | --- | --- |
| Earth's surface to low Earth orbit | 9.3 to 9.5 | 7.8 for orbital speed, plus about 1.5 lost to gravity and drag on the way up |
| Low Earth orbit to the transfer to Mars | 3.6 | $\sqrt{v_\text{esc}^2 + v_\infty^2} - v_\text{circ}$, with $v_\infty = 2.94$ |
| Capture into low Mars orbit | 2.1 by engine, or almost 0 using the air | $\sqrt{v_\text{esc}^2 + v_\infty^2} - v_\text{circ}$ at Mars, with $v_\infty = 2.65$ |
| Low Mars orbit to the surface | about 0.7 to 1 by engine | most of the 3.4 to 5.6 km/s removed by the air; engines for the last part |
| Mars's surface to low Mars orbit | 4.1 | 3.4 for orbital speed, plus losses (about 0.4 for gravity, small for drag, less for spin) |
| Low Mars orbit to the transfer home | 2.1 | the same sum, with $v_\infty = 2.65$ |
| Earth arrival | almost 0 | the air of Earth brakes the capsule |

Two things stand out. First, **getting off Earth is the biggest step**; once in low Earth orbit, the surface of Mars is
a little over 4 km/s away with the air of Mars doing the braking. Second, **leaving Mars costs 4.1 km/s**, far less
than leaving Earth, which is why people plan to make return fuel on Mars.

**The Oberth effect.** Why is leaving Earth from low orbit only 3.6 km/s when the excess speed needed is 2.94 km/s and
escape from low orbit alone needs another 3.2 km/s? Because a burn deep in a gravity well, where the ship is already
fast, adds more kinetic energy per km/s: $\Delta(\tfrac12 v^2) = v\,\Delta v$. Energy needed: $\tfrac12(v_\text{esc}^2 +
v_\infty^2) - \tfrac12 v_\text{circ}^2$; at 7.7 km/s each km/s of $\Delta v$ buys a lot of it. Burning at the lowest,
fastest point is always best.

## Worked examples

**1. The departure burn, without Oberth.** If a ship first escaped (3.20 km/s, from 7.73 to 10.93 km/s) and then, far
away, added 2.94 km/s, the total would be 6.14 km/s. Doing it in one burn at the bottom: 3.59 km/s. The difference,
2.5 km/s, is the Oberth effect.

**2. Capture at Mars.** At 300 km, $v_\text{esc} = 4.82$, $v_\text{circ} = 3.41$ km/s. $\sqrt{4.82^2 + 2.65^2} = 5.50$, so
capture takes $5.50 - 3.41 = 2.09$ km/s. Capturing into a long ellipse instead (periapsis 300 km, apoapsis near the
Hill sphere) takes only $5.50 - 4.82 \approx 0.7$ km/s; the orbit can then be lowered with aerobraking.

**3. The Moon against Mars.** From low Earth orbit to the Moon's surface: about 3.1 (to the Moon) + 0.8 (into lunar
orbit) + 1.7 (landing) $\approx$ 5.6 km/s, all by engine, since the Moon has no air. To Mars's surface: about 3.6 +
0.7 to 1 $\approx$ 4.5 km/s by engine. In delta-v, Mars's surface is closer than the Moon's.

## Try it

1. Add up the budget for a one-way trip from low Earth orbit to Mars's surface, with the air doing the capture and most
   of the braking.
2. Find the capture burn into a 500 km circular orbit round Mars ($v_\infty = 2.65$ km/s).
3. A ship with $v_e = 3.7$ km/s must make the Mars ascent of 4.1 km/s. What mass ratio does it need?
4. Explain in one sentence why burning at periapsis saves fuel.
5. Why is a delta-v budget more useful than a distance for planning a trip?

??? note "Answers"
    1. About $3.6 + 0 + (0.7 \text{ to } 1) \approx 4.3$ to 4.6 km/s.
    2. $r = 3889.5$ km: $v_\text{circ} = 3.32$, $v_\text{esc} = 4.69$ km/s. $\sqrt{4.69^2 + 2.65^2} = 5.39$, so 2.07 km/s.
    3. $e^{4.1/3.7} = e^{1.108} = 3.03$.
    4. The gain in kinetic energy is $v\,\Delta v$, so the same $\Delta v$ gives the most energy where $v$ is largest.
    5. Fuel depends on changes of speed, not on distance, and coasting is free.

## Common mistake

**Adding $v_\text{esc}$ and $v_\infty$.** Speeds combine through energy: $v^2 = v_\text{esc}^2 + v_\infty^2$, not
$v = v_\text{esc} + v_\infty$. Adding them overestimates the burn by kilometres per second.

## Where it leads

- Next: [Gravity assists](02-gravity-assists.md), free delta-v from a planet.
- [Level 8 page](index.md) · [Gravity and orbits topic page](../index.md)
- The fuel side: [Delta-v to the surface](../../rockets/level-8/01-delta-v-to-the-surface.md) and
  [Propellant from Mars](../../rockets/level-8/02-propellant-from-mars.md).
