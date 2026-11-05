---
title: "Ellipses"
---

# Ellipses

*Gravity and orbits · level 7, lesson 3 of 6*

## A question to start

For two thousand years astronomers assumed planets moved in circles, and Mars never quite fitted: its position in the
sky was off by up to 8 minutes of arc, a quarter of the Moon's width. In 1609 Kepler gave up circles altogether. What
did he find?

## The idea

**Kepler's first law:** each planet moves on an **ellipse**, with the Sun at one **focus**.

An ellipse is a stretched circle. Two numbers describe it:

- the **semi-major axis** $a$: half its longest width (the "average" distance);
- the **eccentricity** $e$: how stretched it is, from 0 (a circle) to nearly 1 (very long and thin).

The closest point to the Sun, **perihelion**, is at $r_p = a(1-e)$; the farthest, **aphelion**, at $r_a = a(1+e)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 200" role="img" aria-label="An ellipse with the Sun at one focus, offset from the centre. Perihelion is the near end, aphelion the far end, and the semi-major axis a is half the long width.">
  <ellipse cx="180" cy="100" rx="150" ry="80" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="180" cy="100" r="2" fill="currentColor"/>
  <circle cx="303" cy="100" r="9" fill="#f2c14e"/><circle cx="57" cy="100" r="2.5" fill="currentColor" opacity=".5"/>
  <line x1="30" y1="100" x2="330" y2="100" stroke="currentColor" stroke-dasharray="3 4" opacity=".6"/>
  <g font-size="11" fill="currentColor"><text x="290" y="125">Sun (focus)</text><text x="320" y="90">perihelion</text><text x="2" y="90">aphelion</text><text x="100" y="94">a</text><text x="168" y="118">centre</text><text x="40" y="118">empty focus</text></g>
</svg>
</div>

(This ellipse is drawn much more stretched than any planet's.)

**Kepler's second law:** a line from the Sun to the planet sweeps out **equal areas in equal times**. Near the Sun the
line is short, so the planet must move fast to sweep the same area; far away it moves slowly. Physically, it is
conservation of angular momentum: $r \times v_\perp$ stays the same, so at the two ends $r_p v_p = r_a v_a$.

**The orbit of Mars.**

| | Mars | Earth |
| --- | --- | --- |
| Semi-major axis $a$ | 1.524 AU (227.9 million km) | 1.000 AU (149.6 million km) |
| Eccentricity $e$ | 0.093 | 0.017 |
| Perihelion | 1.381 AU (206.6 million km) | 0.983 AU |
| Aphelion | 1.666 AU (249.3 million km) | 1.017 AU |
| Speed at perihelion / aphelion | 26.5 / 22.0 km/s | 30.3 / 29.3 km/s |
| Sunlight, perihelion against aphelion | 45% more | 7% more |

Mars's orbit is more than five times as stretched as Earth's. Its sunlight changes by 45% over the year, so its
southern summer, which comes near perihelion, is warmer and shorter than its northern one, and the great dust storms
usually start then.

## Worked examples

**1. Perihelion and aphelion.** $r_p = 1.524 \times (1 - 0.0934) = 1.382$ AU; $r_a = 1.524 \times 1.0934 = 1.666$ AU.

**2. Speeds from the second law.** $v_p / v_a = r_a / r_p = 1.666 / 1.381 = 1.206$. Measured: $26.50/21.97 = 1.206$. ✓

**3. Sunlight.** Sunlight falls off as $1/r^2$: $(1.666/1.381)^2 = 1.455$, about 45% more at perihelion.

## Try it

1. An orbit has $a = 2$ AU and $e = 0.5$. Find its perihelion and aphelion.
2. A comet's perihelion is 0.6 AU and aphelion 35 AU. Find $a$ and $e$. (That is close to Halley's comet.)
3. Using the second law, how much faster does that comet move at perihelion than at aphelion?
4. Why are the Mars seasons not all the same length?
5. Why did Kepler's discovery come from Mars and not from Venus, whose orbit he also studied?

??? note "Answers"
    1. $r_p = 2 \times 0.5 = 1$ AU, $r_a = 2 \times 1.5 = 3$ AU.
    2. $a = (0.6 + 35)/2 = 17.8$ AU; $e = (35 - 0.6)/(35 + 0.6) = 0.966$.
    3. $35 / 0.6 \approx 58$ times faster.
    4. Mars moves faster near perihelion, so the seasons around then pass more quickly.
    5. Venus's orbit is almost a circle ($e = 0.007$), so a circle fitted it well; Mars's larger $e$ made the error
       visible in Tycho Brahe's data.

## Common mistake

**Putting the Sun at the centre of the ellipse.** It is at a focus, off to one side. For Mars, the Sun is $ae = 0.14$
AU, about 21 million km, from the centre.

## Where it leads

- Back: [Escape speed](02-escape-speed.md) · Next: [Vis-viva](04-vis-viva.md), speeds anywhere on the ellipse.
- [Level 7 page](index.md) · [Gravity and orbits topic page](../index.md)
- Ellipses on the math site: [Geometry](https://math.akadian.ca/topics/geometry/index.html). Numbers from NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
