---
title: "Weighing planets"
---

# Weighing planets

*Gravity and orbits · level 6, lesson 6 of 6*

## A question to start

Nobody has put Mars on a scale. Yet NASA's fact sheet says its mass is $6.417 \times 10^{23}$ kg. How could anyone know
that?

## The idea

Turn Kepler's third law round:

$$T^2 = \frac{4\pi^2 r^3}{GM} \qquad\Rightarrow\qquad GM = \frac{4\pi^2 r^3}{T^2}.$$

Measure the size and period of **any** orbit round a planet, and you have its $GM$. Divide by $G$ and you have its mass.

**Mars from Phobos.** When Asaph Hall found the moons of Mars in 1877, he also gave astronomers a way to weigh Mars
accurately for the first time. With modern values, $r = 9.376 \times 10^6$ m and $T = 7.654$ h $= 27{,}554$ s:

$$GM = \frac{39.478 \times (9.376\times10^6)^3}{27554^2} = \frac{39.478 \times 8.242\times10^{20}}{7.592\times10^8} = 4.286 \times 10^{13}\ \text{m}^3/\text{s}^2.$$

The precise value, from spacecraft tracking, is $4.2828 \times 10^{13}$: within 0.1%. (Phobos's orbit is slightly
stretched and pulled by the bulge of Mars, which accounts for the small gap.) Then

$$M = \frac{GM}{G} = \frac{4.2828\times10^{13}}{6.674\times10^{-11}} = 6.42 \times 10^{23}\ \text{kg}.$$

**Mars without a moon.** For a planet with no moons (Venus, Mercury), astronomers waited for spacecraft. A probe's
orbit, or its path as it flies past, works exactly like a moon's. Today, orbiters round Mars have measured its $GM$ to
better than one part in a million, and mapped how its gravity changes from place to place.

**Why $GM$ is better known than $M$.** Orbits give $GM$ directly. To get $M$ you must divide by $G$, which is only known
to about 1 part in 50,000. So spacecraft engineers work with $GM$.

## Worked examples

**1. The Sun from the Earth.** $r = 1.496 \times 10^{11}$ m, $T = 3.156 \times 10^7$ s.
$GM_\odot = 39.478 \times 3.348\times10^{33} / 9.960\times10^{14} = 1.327 \times 10^{20}$ m³/s², and
$M_\odot = 1.99 \times 10^{30}$ kg.

**2. Earth from the Moon.** $r = 3.844 \times 10^8$ m, $T = 27.32$ days $= 2.360 \times 10^6$ s.
$GM = 39.478 \times 5.680\times10^{25} / 5.570\times10^{12} = 4.03 \times 10^{14}$ m³/s². The true value is
$3.986 \times 10^{14}$; the 1% gap is because the Moon is heavy enough that the Earth and Moon both orbit their shared
centre of mass (the formula then gives $G(M + m)$).

**3. Mars from Deimos.** $r = 2.3463 \times 10^7$ m, $T = 1.091 \times 10^5$ s.
$GM = 39.478 \times 1.2917\times10^{22} / 1.190\times10^{10} = 4.285 \times 10^{13}$. ✓

## Try it

1. Jupiter's moon Io orbits at 421,700 km in 1.769 days. Find Jupiter's $GM$ and mass.
2. A probe orbits an asteroid at 20 km in 10 hours. Find the asteroid's mass.
3. Why does the Moon give a slightly wrong mass for the Earth, while Phobos gives a good mass for Mars?
4. Why do engineers use $GM$ rather than $M$?

??? note "Answers"
    1. $T = 152{,}840$ s. $GM = 39.478 \times (4.217\times10^8)^3 / 152840^2 = 39.478 \times 7.499\times10^{25} / 2.336\times10^{10} = 1.267 \times 10^{17}$ m³/s²; $M = 1.90 \times 10^{27}$ kg.
    2. $GM = 39.478 \times (2\times10^4)^3 / 36000^2 = 3.158\times10^{14}/1.296\times10^9 = 2.44 \times 10^5$ m³/s²;
       $M = 3.7 \times 10^{15}$ kg.
    3. The formula gives $G(M+m)$. The Moon is 1.2% of the Earth's mass, which matters; Phobos is about $10^{-8}$ of
       Mars's, which does not.
    4. Orbits measure $GM$ directly and very precisely; $G$ is known far less precisely, so dividing by it adds error.

## Common mistake

**Using the period in hours with $G$ in SI units.** Convert $T$ to seconds and $r$ to metres before using the formula.

## Where it leads

- Back: [Areostationary orbit](05-areostationary-orbit.md) · Next level: [Energy and orbits](../level-7/index.md)
- [Level 6 page](index.md) · [Gravity and orbits topic page](../index.md)
- Numbers from NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and the
  [Mars satellite parameters at JPL](https://ssd.jpl.nasa.gov/sats/elem/).
