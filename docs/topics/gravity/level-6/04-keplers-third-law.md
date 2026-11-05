---
title: "Kepler's third law"
---

# Kepler's third law

*Gravity and orbits · level 6, lesson 4 of 6*

## A question to start

In 1619 Johannes Kepler, working from years of careful naked-eye observations of Mars by Tycho Brahe, found a strange
rule: for every planet, the square of its year is proportional to the cube of its distance from the Sun. Why squares
and cubes?

## The idea

Take the two results from lesson 3, $v = \sqrt{GM/r}$ and $T = 2\pi r/v$. Square the second and put in the first:

$$T^2 = \frac{4\pi^2 r^2}{v^2} = \frac{4\pi^2 r^2}{GM/r} = \frac{4\pi^2}{GM}\, r^3.$$

That is **Kepler's third law**: $T^2 \propto r^3$, with the same constant $4\pi^2/GM$ for everything orbiting the
same body. Newton showed that it holds for ellipses too, with $r$ replaced by the semi-major axis $a$, half the
longest width of the ellipse.

**In handy units.** For planets round the Sun, measure $T$ in years and $a$ in astronomical units (1 AU is the Earth's
mean distance). The Earth gives $1^2 = 1^3$, so the constant is 1, and

$$T^2 = a^3 \qquad (T \text{ in years, } a \text{ in AU}).$$

| Planet | $a$ (AU) | $a^3$ | $T = \sqrt{a^3}$ (years) | Measured |
| --- | --- | --- | --- | --- |
| Venus | 0.723 | 0.378 | 0.615 | 0.615 |
| Earth | 1.000 | 1.000 | 1.000 | 1.000 |
| Mars | 1.524 | 3.537 | 1.881 | 1.881 (687 days) |
| Jupiter | 5.203 | 140.8 | 11.87 | 11.86 |

**Round Mars.** Phobos at 9,376 km and Deimos at 23,463 km. The distances are in the ratio 2.502, so the periods
should be in the ratio $2.502^{1.5} = 3.96$. Measured: $30.31 / 7.65 = 3.96$. ✓

## Worked examples

**1. Mars's year.** $T = \sqrt{1.524^3} = \sqrt{3.537} = 1.881$ years $= 687$ days.

**2. An asteroid.** An asteroid takes 4.6 years to go round the Sun. Its distance: $a = T^{2/3} = 4.6^{2/3} =
\sqrt[3]{21.2} = 2.77$ AU, in the asteroid belt between Mars and Jupiter. (That is Ceres.)

**3. Deimos from Phobos.** $T_D = 7.65 \times (23463/9376)^{1.5} = 7.65 \times 3.96 = 30.3$ h. ✓

## Try it

1. Saturn is 9.54 AU from the Sun. Find its year.
2. A comet has a year of 76 years (Halley's). Find its semi-major axis.
3. A satellite round Mars has a period of 12 hours. Use Phobos's orbit (9,376 km, 7.65 h) to find its distance.
4. Derive $T^2 = 4\pi^2 r^3 / GM$ from $v = \sqrt{GM/r}$.
5. The ship to Mars follows an ellipse with $a = 1.262$ AU. How long would a full lap take? (You will use half of it in
   level 7.)

??? note "Answers"
    1. $T = \sqrt{9.54^3} = \sqrt{868} = 29.5$ years.
    2. $a = 76^{2/3} = \sqrt[3]{5776} = 17.9$ AU.
    3. $r = 9376 \times (12/7.65)^{2/3} = 9376 \times 1.350 = 12{,}660$ km.
    4. $T = 2\pi r/v$, so $T^2 = 4\pi^2 r^2 / v^2 = 4\pi^2 r^2 \cdot r / GM$.
    5. $T = \sqrt{1.262^3} = \sqrt{2.010} = 1.418$ years $= 518$ days. Half is 259 days.

## Common mistake

**Using the constant from one centre for another.** $T^2 = a^3$ in years and AU is only for things going round the
Sun. Round Mars, the constant is $4\pi^2/GM_\text{Mars}$, or compare with a known moon of Mars.

## Where it leads

- Back: [Orbital speed](03-orbital-speed.md) · Next: [Areostationary orbit](05-areostationary-orbit.md)
- [Level 6 page](index.md) · [Gravity and orbits topic page](../index.md)
- Kepler used Mars's orbit to discover that orbits are ellipses: [Ellipses](../level-7/03-ellipses.md). The 259-day
  trip: [Hohmann transfer](../level-7/05-hohmann-transfer.md).
