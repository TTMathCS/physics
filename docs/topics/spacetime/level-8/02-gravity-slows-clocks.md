---
title: "Gravity slows clocks"
---

# Gravity slows clocks

*Space and time · level 8, lesson 2 of 6*

## A question to start

Two identical atomic clocks sit on a table, one 33 cm higher than the other. Do they keep the same time?

## The idea

Use the equivalence principle. Picture a rocket accelerating upwards, with a light source on the floor and a detector
on the ceiling. While the light travels up, the ceiling speeds up away from it, so the light arrives at a slightly lower
frequency. By the equivalence principle, the same must happen in gravity: light climbing up loses frequency.

Clocks are counters of frequency. So a **lower clock runs slow** compared with a higher one. Near a surface with gravity
$g$, a height difference $h$ changes the rate by

$$\frac{\Delta f}{f} \approx \frac{g\,h}{c^2}.$$

In 1960 Robert Pound and Glen Rebka sent gamma rays down, and up, a 74-foot (22.6 m) tower at Harvard and found the
shift Einstein predicted, about $2.5 \times 10^{-15}$. In 2010, NIST compared two aluminium-ion clocks just **33 cm** apart in height, and saw the
higher one run fast.

| A clock 1 km higher gains, each day | Mars | Earth |
| --- | --- | --- |
| Using $g h / c^2$ | about 3.6 ns | about 9.4 ns |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A tower with a clock at the top and one at the bottom. Light climbing the tower is stretched to a longer wavelength. The top clock runs a little faster.">
  <rect x="140" y="20" width="50" height="110" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="165" cy="35" r="10" fill="none" stroke="#5aa0d8" stroke-width="2"/><circle cx="165" cy="115" r="10" fill="none" stroke="#5aa0d8" stroke-width="2"/>
  <path d="M70 120 q5 -6 10 0 q5 6 10 0 q5 -6 10 0 q5 6 10 0" fill="none" stroke="#1f77b4" stroke-width="2"/>
  <path d="M70 40 q9 -8 18 0 q9 8 18 0 q9 -8 18 0" fill="none" stroke="#d62728" stroke-width="2"/>
  <line x1="95" y1="105" x2="95" y2="55" stroke="currentColor"/><path d="M90 58 l5 -10 l5 10 z" fill="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="200" y="39">runs a little faster</text><text x="200" y="119">runs a little slower</text><text x="10" y="85">light climbing:</text><text x="10" y="99">stretched</text></g>
</svg>
</div>

## Worked examples

**1. Pound and Rebka.** $\frac{9.8 \times 22.6}{(3 \times 10^8)^2} \approx 2.5 \times 10^{-15}$.

**2. The 33 cm clocks.** $\frac{9.8 \times 0.33}{9 \times 10^{16}} \approx 3.6 \times 10^{-17}$. Over a 79-year life,
about $2.5 \times 10^9$ s, that adds up to about 90 billionths of a second.

**3. On Mars.** 1 km higher: $\frac{3.73 \times 1{,}000}{8.99 \times 10^{16}} \approx 4.1 \times 10^{-14}$. Times 86,400 s:
about 3.6 ns a day.

## Try it

1. Which runs faster: a clock in the attic or one in the cellar?
2. Why does light climbing out of gravity lose frequency?
3. Find the daily gain of a clock 2 km higher on Earth.
4. Why is the effect smaller on Mars for the same height?

??? note "Answers"
    1. The one in the attic.
    2. By the equivalence principle it acts like a detector speeding away from the light, so the light arrives at a
       lower frequency.
    3. $2 \times 9.4 \approx 19$ ns a day.
    4. Mars's surface gravity is weaker, so $g h$ is smaller.

## Common mistake

**"The clock's mechanism is affected by weight."** Every clock, of any kind, runs slower lower down. It is time itself
that passes at a different rate.

## Where it leads

- Back: [The equivalence principle](01-the-equivalence-principle.md) · Next: [GPS and relativity](03-gps-and-relativity.md)
- [Level 8 page](index.md) · [Space and time topic page](../index.md)
- Sources: APS Physics on [the Pound and Rebka experiment](https://physics.aps.org/story/v16/st1), NIST on
  [clocks 33 cm apart](https://www.nist.gov/news-events/news/2010/09/nist-pair-aluminum-atomic-clocks-reveal-einsteins-relativity-personal-scale),
  and NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
