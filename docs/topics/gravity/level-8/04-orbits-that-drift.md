---
title: "Orbits that drift"
---

# Orbits that drift

*Gravity and orbits · level 8, lesson 4 of 6*

## A question to start

NASA's Mars Reconnaissance Orbiter photographs the surface every day at about 3 pm local time, so shadows always
fall the same way and pictures taken years apart can be compared. But a plain orbit stays fixed in space while Mars
goes round the Sun, so the local time under it should drift through the whole day over a Mars year. How does MRO stay
at 3 pm?

## The idea

Mars is not a perfect ball. It spins, and it bulges at the equator: its equatorial radius is 3,396 km and its polar
radius 3,376 km, and the huge volcanic Tharsis region adds more. In the gravity field this shows up as the $J_2$ term,
the main correction to $GM/r$. For Mars $J_2 = 1.96 \times 10^{-3}$, nearly twice the Earth's $1.08 \times 10^{-3}$.

The extra mass at the equator tugs on a tilted orbit, trying to pull it into the equator's plane. Like a spinning top
pushed sideways, the orbit does not flatten; it **precesses**: the line where the orbit crosses the equator (the
**node**) swings slowly round. The rate is

$$\dot\Omega = -\frac32\, n\, J_2 \left(\frac{R}{a}\right)^2 \frac{\cos i}{(1-e^2)^2},$$

where $n = \sqrt{GM/a^3}$ is the mean motion and $i$ the inclination. For a prograde orbit ($i < 90°$) the node drifts
west; for a retrograde one ($i > 90°$) east; for a polar orbit ($i = 90°$) not at all.

**Sun-synchronous.** Choose $i$ so the node drifts east by exactly 360° per Mars year, keeping pace with the Sun:

$$\dot\Omega = \frac{360°}{687 \text{ days}} = 0.524° \text{ per day}.$$

Then the orbit always crosses the equator at the same local time. For a circular orbit 300 km above Mars, the sum gives
$i = 92.6°$: nearly polar, a little retrograde. MRO's orbit is just like this.

| | Mars, 300 km | Earth, 700 km |
| --- | --- | --- |
| $J_2$ | $1.96 \times 10^{-3}$ | $1.08 \times 10^{-3}$ |
| Required drift | 0.524° per day | 0.986° per day |
| Sun-synchronous inclination | 92.6° | 98.2° |

Mars's larger $J_2$ and slower year mean its sun-synchronous orbits are closer to polar than Earth's.

## Worked examples

**1. The Mars sum.** $a = 3{,}689.5$ km. $n = \sqrt{42828/3689.5^3} = 9.23\times10^{-4}$ rad/s. $(R/a)^2 =
(3396.2/3689.5)^2 = 0.847$. So $\tfrac32 n J_2 (R/a)^2 = 1.5 \times 9.23\times10^{-4} \times 1.96\times10^{-3} \times 0.847
= 2.30\times10^{-6}$ rad/s. The required rate is $2\pi/(686.98 \times 86400) = 1.059\times10^{-7}$ rad/s. So
$\cos i = -1.059\times10^{-7}/2.30\times10^{-6} = -0.046$ and $i = 92.6°$.

**2. An equatorial orbit's drift.** At $i = 0$ the node is not defined, but the same term makes the periapsis of an
elliptical equatorial orbit swing round. For a polar orbit, $\cos i = 0$: no nodal drift, so the local time under it
cycles once per Mars year.

**3. A low inclined orbit.** At $i = 45°$, 300 km up: $\dot\Omega = -2.30\times10^{-6} \times 0.707 = -1.63\times10^{-6}$
rad/s $= -8.0°$ per day. The node goes round in 45 days.

## Try it

1. Why does $\cos i$ have to be negative for a sun-synchronous orbit?
2. Find $\dot\Omega$ for a circular orbit 300 km up at $i = 60°$.
3. Would a sun-synchronous orbit 1,000 km above Mars need more or less inclination than one at 300 km? Why?
4. What would happen to MRO's afternoon pictures if its orbit were exactly polar?
5. Why does a satellite designer want $J_2$ known precisely?

??? note "Answers"
    1. The node must drift eastwards, with the Sun, and the formula gives eastward drift only for $\cos i < 0$.
    2. $-2.30\times10^{-6} \times 0.5 = -1.15 \times 10^{-6}$ rad/s $\approx -5.7°$ per day.
    3. More: farther out $n$ and $(R/a)^2$ are smaller, so $|\cos i|$ must be larger, meaning $i$ farther from 90°.
    4. The local time under it would drift through all hours over a Mars year, so shadows would change from picture to
       picture.
    5. Its drift sets where the orbit will be months later; an error in $J_2$ becomes an error in the local time.

## Common mistake

**Thinking the orbit's plane is fixed.** For a point mass it is. Round a real, flattened planet it turns, and
mission designers use that turning on purpose.

## Where it leads

- Back: [Lagrange points](03-lagrange-points.md) · Next: [The fate of Phobos](05-the-fate-of-phobos.md)
- [Level 8 page](index.md) · [Gravity and orbits topic page](../index.md)
- MRO: [NASA, Mars Reconnaissance Orbiter](https://science.nasa.gov/mission/mars-reconnaissance-orbiter/). $J_2$ from
  NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
