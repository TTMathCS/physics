---
title: "Gravitational energy"
---

# Gravitational energy

*Gravity and orbits · level 7, lesson 1 of 6*

## A question to start

Lifting a 1 kg bag by 1 m takes $mgh = 9.81$ J on Earth. Lifting it from the ground to the space station takes more
than $9.81 \times 400{,}000$ J? Less? And how much energy does it take to lift a kilogram off Mars altogether?

## The idea

$mgh$ assumes $g$ is the same at every height. Over large distances it is not: $g$ falls as $1/r^2$. The energy to move
a mass $m$ from $r_1$ out to $r_2$ is the force times distance, added up over small steps, which calculus does exactly:

$$W = \int_{r_1}^{r_2} \frac{GMm}{r^2}\,dr = GMm\left(\frac{1}{r_1} - \frac{1}{r_2}\right).$$

That suggests a **potential energy** for gravity:

$$U(r) = -\frac{GMm}{r}.$$

It is negative, and rises towards zero as $r$ grows. The zero is "infinitely far away". A mass on the surface sits at
the bottom of a **gravity well**, and the depth of the well per kilogram is $GM/R$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 180" role="img" aria-label="Two curves of potential energy per kilogram against distance. The Earth's well is deep, starting at minus 62.6 megajoules per kilogram at its surface; Mars's is shallower, starting at minus 12.6. Both rise towards zero far away.">
  <line x1="40" y1="20" x2="340" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="20" x2="40" y2="170" stroke="currentColor" stroke-width="1"/>
  <path d="M70 161 C90 80 140 40 340 26" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M55 48 C80 30 140 24 340 21" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <g font-size="11" fill="currentColor"><text x="44" y="14">0</text><text x="78" y="160">Earth's surface: −62.6 MJ/kg</text><text x="62" y="60">Mars: −12.6 MJ/kg</text><text x="280" y="40">distance →</text></g>
</svg>
</div>

| Depth of the gravity well, $GM/R$ | Mars | Earth |
| --- | --- | --- |
| Per kilogram | 12.6 MJ | 62.6 MJ |
| In electricity, per kilogram | 3.5 kWh | 17.4 kWh |

Climbing out of Mars takes a fifth of the energy of climbing out of Earth.

**Near the surface** this becomes $mgh$ again. $U(R+h) - U(R) = GMm\left(\frac1R - \frac1{R+h}\right) =
\frac{GMm\,h}{R(R+h)} \approx \frac{GMm}{R^2}h = mgh$ when $h \ll R$.

**Energy of an orbit.** In a circle, $v^2 = GM/r$, so the kinetic energy is $\tfrac12 mv^2 = \frac{GMm}{2r}$, exactly
half the size of $U$. The total is

$$E = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r}.$$

A lower orbit has a more negative total: to drop to a lower orbit, a ship must lose energy; to rise, it must gain it.
And yet the lower orbit is faster. Lose energy, speed up: one of the odd facts of orbits.

## Worked examples

**1. Up to the space station.** $GMm(1/R - 1/(R+h))$ per kg with $R = 6.371\times10^6$, $h = 4\times10^5$:
$3.986\times10^{14} \times (1.5696 - 1.4769)\times10^{-7} = 3.70 \times 10^6$ J $= 3.7$ MJ. $mgh$ would give
$9.81 \times 4\times10^5 = 3.9$ MJ, a 6% overestimate.

**2. Orbit energy round Mars, 300 km up, per kg.** $-GM/2r = -4.2828\times10^{13}/(2 \times 3.6895\times10^6) = -5.80$ MJ/kg.
On the surface (standing still, ignoring the spin), $-12.6$ MJ/kg. So reaching low Mars orbit needs at least 6.8 MJ per kg
of ship.

## Try it

1. Find the depth of the Moon's gravity well per kg ($GM = 4.905\times10^{12}$ m³/s², $R = 1737$ km).
2. Show that $U(R+h) - U(R) \approx mgh$ for small $h$.
3. Find the total energy per kg of a satellite in areostationary orbit ($r = 20{,}430$ km).
4. A satellite drops from a high orbit to a lower circle. Does its speed go up or down? Its total energy?
5. How much energy per kg does it take to go from the surface of Mars to areostationary orbit, at least?

??? note "Answers"
    1. $4.905\times10^{12} / 1.737\times10^6 = 2.82$ MJ/kg.
    2. $GMm\,h/(R(R+h)) \approx GMm\,h/R^2 = mgh$, since $g = GM/R^2$.
    3. $-4.2828\times10^{13}/(2 \times 2.043\times10^7) = -1.05$ MJ/kg.
    4. Speed goes up; total energy goes down (more negative).
    5. $-1.05 - (-12.6) = 11.6$ MJ/kg.

## Common mistake

**Being puzzled by negative energy.** Only changes in potential energy matter, so the zero can be put anywhere.
Putting it at infinity makes $U = -GMm/r$ neat, and every bound orbit then has negative total energy.

## Where it leads

- Next: [Escape speed](02-escape-speed.md), the speed whose kinetic energy fills the well.
- [Level 7 page](index.md) · [Gravity and orbits topic page](../index.md)
- The integral on the math site: [Change and motion](https://math.akadian.ca/topics/change/index.html).
