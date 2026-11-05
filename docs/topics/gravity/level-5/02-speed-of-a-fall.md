---
title: "The speed of a fall"
---

# The speed of a fall

*Gravity and orbits · level 5, lesson 2 of 6*

## A question to start

A worker on a Mars building site slips off a 3 m platform. How fast do they hit the ground? Is it a lot gentler than
the same slip on Earth, or only a little?

## The idea

There are two ways to get the speed.

**From the time:** $v = gt$.

**From the height**, without the time. From lesson 1, $t = \sqrt{2s/g}$. Put that into $v = gt$:

$$v = g\sqrt{\frac{2s}{g}} = \sqrt{2gs}, \qquad\text{or}\qquad v^2 = 2gs.$$

This is one of the most useful equations in mechanics. Speed grows with the **square root** of the height: four times
the height gives only twice the landing speed.

**Matching falls between planets.** A fall from height $s_M$ on Mars ends at the same speed as a fall from $s_E$ on Earth
when $2g_M s_M = 2g_E s_E$, that is

$$s_E = s_M \times \frac{g_M}{g_E} = 0.38\, s_M.$$

A fall on Mars lands like a fall from **0.38 times the height** on Earth.

| Fall height | Landing speed on Mars | Landing speed on Earth |
| --- | --- | --- |
| 1 m | 2.7 m/s | 4.4 m/s |
| 3 m | 4.7 m/s | 7.7 m/s |
| 10 m | 8.6 m/s | 14.0 m/s |

## Worked examples

**1. The platform.** $v = \sqrt{2 \times 3.71 \times 3} = \sqrt{22.3} = 4.7$ m/s. On Earth the same fall lands at
$\sqrt{2 \times 9.81 \times 3} = 7.7$ m/s. The Mars fall is like falling $3 \times 0.38 = 1.1$ m on Earth: it can still
hurt, but much less.

**2. A ball thrown up.** Thrown straight up at 12 m/s on Mars, how high does it go? At the top $v = 0$, so run the
equation backwards: $12^2 = 2 \times 3.71 \times s$, so $s = 144 / 7.42 = 19.4$ m. On Earth: $144 / 19.62 = 7.3$ m.

**3. Time to the top.** $t = v/g = 12 / 3.71 = 3.2$ s on Mars, and as long again to come back down.

## Try it

1. Find the landing speed after a 5 m fall on Mars.
2. A rock lands at 10 m/s on Mars. From what height did it fall?
3. What height on Earth gives the same landing speed as a 6 m fall on Mars?
4. A ball is thrown up at 8 m/s on Earth. How high does it go? How long until it comes back?
5. Show that a fall from four times the height gives twice the landing speed.

??? note "Answers"
    1. $\sqrt{2 \times 3.71 \times 5} = \sqrt{37.1} = 6.1$ m/s.
    2. $s = v^2 / 2g = 100 / 7.42 = 13.5$ m.
    3. $6 \times 0.378 = 2.3$ m.
    4. $s = 64 / 19.62 = 3.3$ m; $t = 2 \times 8 / 9.81 = 1.6$ s.
    5. $\sqrt{2g \cdot 4s} = 2\sqrt{2gs}$.

## Common mistake

**Thinking the speed is proportional to height.** Twice the height gives $\sqrt2 \approx 1.41$ times the speed, not
twice. It is the **square** of the speed that is proportional to the height.

## Where it leads

- Back: [Distance fallen](01-distance-fallen.md) · Next: [Projectiles](03-projectiles.md)
- [Level 5 page](index.md) · [Gravity and orbits topic page](../index.md)
- Where $v^2 = 2gs$ comes from, seen as energy: [Gravitational energy](../level-7/01-gravitational-energy.md).
