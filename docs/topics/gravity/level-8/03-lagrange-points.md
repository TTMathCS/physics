---
title: "Lagrange points"
---

# Lagrange points

*Gravity and orbits · level 8, lesson 3 of 6*

## A question to start

The James Webb telescope orbits the Sun 1.5 million km beyond the Earth, yet it keeps pace with the Earth all year,
although Kepler's third law says something farther out should go round more slowly. Is there a point like that near
Mars, and what could we put there?

## The idea

In the frame that turns with a planet round the Sun, there are five points where the pulls of the Sun and planet and
the "centrifugal" effect of the turning frame all balance: the **Lagrange points**, found by Euler (L1 to L3) and
Lagrange (L4, L5) in the 1760s and 1770s.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 240" role="img" aria-label="The Sun in the middle and a planet on a circle to the right. L1 is just inside the planet, L2 just outside, L3 on the opposite side of the Sun, and L4 and L5 sixty degrees ahead of and behind the planet on its orbit.">
  <circle cx="140" cy="120" r="100" fill="none" stroke="currentColor" stroke-dasharray="4 5" opacity=".5"/>
  <circle cx="140" cy="120" r="9" fill="#f2c14e"/><circle cx="240" cy="120" r="6" fill="#d86a3a" stroke="currentColor"/>
  <g fill="currentColor"><circle cx="222" cy="120" r="3"/><circle cx="258" cy="120" r="3"/><circle cx="40" cy="120" r="3"/><circle cx="190" cy="33.4" r="3"/><circle cx="190" cy="206.6" r="3"/></g>
  <g font-size="11" fill="currentColor"><text x="208" y="110">L1</text><text x="262" y="110">L2</text><text x="22" y="110">L3</text><text x="196" y="30">L4 (ahead)</text><text x="196" y="218">L5 (behind)</text><text x="230" y="140">Mars</text></g>
</svg>
</div>

**L1 and L2** lie on the Sun–planet line, at a distance from the planet of about

$$r \approx a\left(\frac{m}{3M}\right)^{1/3}.$$

At L1 the planet's pull partly cancels the Sun's, so a slower orbit than Kepler's law would predict balances; at L2 the
planet's pull adds to the Sun's, so a faster one does. Both are unstable: like a ball on a hilltop, a craft there must
make small burns to stay.

**L4 and L5**, 60° ahead of and behind the planet, form equilateral triangles with the Sun and planet. When the planet
is less than about 1/25 of the Sun's mass, these are **stable**: things that drift away circle back. Asteroids
collect there and are called **trojans**.

| | Sun–Mars | Sun–Earth |
| --- | --- | --- |
| $m/M$ | $3.23 \times 10^{-7}$ | $3.04 \times 10^{-6}$ (Earth with the Moon) |
| L1 and L2: distance from the planet | about 1.08 million km | about 1.5 million km |
| Trojans known | about a dozen, most at L5, including 5261 Eureka | two small ones at L4 |

**The Hill sphere.** The same distance, $a(m/3M)^{1/3}$, is roughly the edge of a planet's gravitational "territory":
inside it, a moon can orbit the planet stably; outside, the Sun takes over. For Mars, about 1.08 million km. Phobos
(9,376 km) and Deimos (23,463 km) are deep inside.

**Uses at Mars.** A craft at Sun–Mars L1 would see solar storms coming towards Mars and could give the city from tens
of minutes to about an hour of warning; one at L2 could relay signals for the far side. Small asteroids at the trojan points could one day be
studied, or mined.

## Worked examples

**1. Sun–Mars L1.** $m/3M = 3.23\times10^{-7}/3 = 1.076\times10^{-7}$; cube root $= 4.76\times10^{-3}$; times
$2.279\times10^8$ km $= 1.08\times10^6$ km.

**2. Sun–Earth L2.** $m/3M = 1.01\times10^{-6}$; cube root $= 1.00\times10^{-2}$; times $1.496\times10^8$ km $=
1.50\times10^6$ km. ✓ (Webb.)

**3. Mars–Phobos L1.** $m/M = 1.65\times10^{-8}$; $(m/3M)^{1/3} = 1.77\times10^{-3}$; times 9,376 km $= 16.6$ km from
Phobos's centre: only about 3 km above its surface at the ends of its long axis. Phobos almost fills its own Hill sphere,
a sign of how close it is to being pulled apart.

## Try it

1. Find the distance of Sun–Jupiter L1 from Jupiter ($m/M = 9.55 \times 10^{-4}$, $a = 778$ million km).
2. Why are L4 and L5 stable for Mars but L1 and L2 not?
3. Estimate the Hill sphere of the Earth in the Sun's field. Is the Moon (384,400 km) inside?
4. Why is Phobos's small Hill sphere a hint that it is in danger?

??? note "Answers"
    1. $(9.55\times10^{-4}/3)^{1/3} = 0.0683$; times 778 = 53 million km.
    2. Near L4 and L5, the Coriolis effect in the turning frame turns a drifting craft back round the point; near L1 and
       L2, small displacements along the Sun–planet line grow.
    3. About 1.5 million km. Yes, the Moon is well inside.
    4. Loose material on its surface is barely bound to Phobos; as it spirals inwards its Hill sphere shrinks below its
       own size, and it will be pulled apart.

## Common mistake

**Thinking the Lagrange points are places of zero gravity.** Gravity is strong there. They are places where a craft
can **keep the same position** relative to the planet, because the pulls and the turning of the frame balance.

## Where it leads

- Back: [Gravity assists](02-gravity-assists.md) · Next: [Orbits that drift](04-orbits-that-drift.md)
- [Level 8 page](index.md) · [Gravity and orbits topic page](../index.md)
- Solar storms and radiation: the [Radiation and the atom](../../radiation/index.md) topic. Phobos's end:
  [The fate of Phobos](05-the-fate-of-phobos.md).
