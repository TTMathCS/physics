---
title: "Launch windows"
---

# Launch windows

*Gravity and orbits · level 7, lesson 6 of 6*

## A question to start

Three missions left for Mars within two weeks of each other in July 2020, from the USA, China and the United Arab
Emirates. Missions always leave in bunches like that, about two years apart. Why can't they go whenever they are ready?

## The idea

A Hohmann transfer takes 259 days to swing half way round the Sun. When the ship gets to the far side, **Mars must be
there**. So at launch, Mars must be ahead of Earth by just the right angle.

**The phase angle.** In 259 days Mars moves $259 \times 360 / 687 = 135.7°$ along its orbit. The ship goes 180°. So at
launch Mars must be $180 - 135.7 = 44.3°$ ahead of Earth.

**How often.** Earth gains on Mars by $360/365.26 - 360/686.98 = 0.4616°$ a day. To get back to the same angle, Earth
must gain a whole 360°, which takes

$$\frac{1}{1/365.26 - 1/686.98} = 780 \text{ days},$$

the **synodic period**, about 26 months. That is how often launch windows open, and also how often Mars is at its
closest and brightest (at **opposition**, a few months after each window).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 240" role="img" aria-label="At launch, Earth on the right of the Sun and Mars 44 degrees ahead of it, up and to the right. The transfer path curves round the top to meet Mars 259 days later on the far side.">
  <circle cx="140" cy="120" r="60" fill="none" stroke="#5aa0d8"/><circle cx="140" cy="120" r="92" fill="none" stroke="#d86a3a"/>
  <circle cx="140" cy="120" r="7" fill="#f2c14e"/>
  <circle cx="200" cy="120" r="6" fill="#5aa0d8" stroke="currentColor"/>
  <circle cx="205.8" cy="55.7" r="5.5" fill="#d86a3a" stroke="currentColor"/>
  <line x1="140" y1="120" x2="200" y2="120" stroke="currentColor" opacity=".5"/><line x1="140" y1="120" x2="205.8" y2="55.7" stroke="currentColor" opacity=".5"/>
  <path d="M200 120 A76 73 0 0 0 48 120" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
  <circle cx="48" cy="120" r="4" fill="none" stroke="#d86a3a" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="166" y="112">44°</text><text x="212" y="52">Mars at launch</text><text x="208" y="138">Earth at launch</text><text x="4" y="146">Mars on arrival</text></g>
</svg>
</div>

**The windows**, from the circular-orbit sums and from the real missions:

| Window | Example missions |
| --- | --- |
| July–August 2020 | Perseverance, Tianwen-1, Hope |
| Late 2022 | (no Mars launches) |
| Late 2024 | ESCAPADE was due but slipped |
| November–December 2026 | the window open now |
| December 2028 – January 2029 | |
| February–March 2031 | |

(Real windows wander by a few weeks to a couple of months from the simple sums, because Mars's orbit is an ellipse and
the two orbits are slightly tilted.)

**Coming home.** On arrival, Earth is about 75° **ahead** of Mars (it has gone 255° while Mars went 136°). For the trip
back, Earth must be 75° **behind** Mars. Waiting for that takes about **454 days**. So the shortest round trip on Hohmann
orbits is $259 + 454 + 259 = 972$ days, about 2 years 8 months. A crew to Mars would stay over a year.

## Worked examples

**1. The phase angle.** $180 - 259 \times 0.5240 = 180 - 135.7 = 44.3°$.

**2. Earth's lead on arrival.** Earth moves $259 \times 0.9856 = 255.3°$. The ship arrives 180° from the launch point.
So Earth is $255.3 - 180 = 75.3°$ beyond Mars.

**3. The wait.** Earth must move from 75.3° ahead to 75.3° behind, a change of $360 - 150.6 = 209.4°$ at 0.4616° a day:
454 days.

## Try it

1. Find the synodic period of Earth and Venus (Venus's year is 224.7 days).
2. Find the launch phase angle for a Hohmann transfer to Venus (146 days; Venus moves 1.602° a day). Is Venus ahead or
   behind?
3. If a window opened on 15 November 2026, when would the next two be?
4. Why must a crew wait at Mars before coming home?
5. Use the [launch window simulator](../../../sims.md#launch-window) to find the window after 2031.

??? note "Answers"
    1. $1/(1/224.7 - 1/365.26) = 584$ days.
    2. Venus moves $146 \times 1.602 = 234°$ while the ship goes 180°, so at launch Venus must be $234 - 180 = 54°$
       **behind** Earth.
    3. Add 780 days: about 4 January 2029 and 23 February 2031.
    4. When they arrive, Earth is in the wrong place for a Hohmann trip back; it takes about 454 days for the planets to
       line up for the return.
    5. About April 2033.

## Common mistake

**Thinking windows are about distance.** The window is not when Mars is closest; it is when Mars is 44° ahead, a few
months **before** it is closest. The ship then travels its half-ellipse and meets Mars after closest approach.

## Where it leads

- Back: [Hohmann transfer](05-hohmann-transfer.md) · Next level: [Orbits for mission design](../level-8/index.md)
- [Level 7 page](index.md) · [Gravity and orbits topic page](../index.md)
- The [launch window simulator](../../../sims.md#launch-window). Mission dates from NASA:
  [Mars 2020 Perseverance](https://science.nasa.gov/mission/mars-2020-perseverance/).
