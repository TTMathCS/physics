---
title: "Charging on Mars"
---

# Charging on Mars

*Electricity and magnetism · level 4, lesson 6 of 6*

## A question to start

You take a solar charger to Mars. On Earth, it fills a battery in 2 hours of bright sunshine. How long would it take
on Mars?

## The idea

A battery's **capacity** is often given in **amp-hours** (Ah): the charge it holds. A 10 Ah battery could give 1 A for
10 hours, or 2 A for 5 hours. So the time to charge it is about

$$t = \frac{Q}{I},$$

with $Q$ in amp-hours and $I$ in amps.

A solar panel's current depends on the sunlight. Mars is about 1.5 times as far from the Sun as Earth, so the sunlight
there is much weaker. Above the air, at noon, it is:

| The same panel at noon, above the air | Mars | Earth |
| --- | --- | --- |
| Sunlight | 586 W/m² | 1,361 W/m² |
| Current from the panel | about 2.15 A | 5 A |
| Time to charge a 10 Ah battery | about 4.7 hours | 2 hours |

The current falls in proportion to the sunlight: $586/1361 = 0.43$, so the panel gives only 43% of the current.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="Two bars for the time to charge the same battery. Earth: 2 hours. Mars: about 4.7 hours, more than twice as long.">
  <rect x="80" y="25" width="80" height="25" fill="#5aa0d8"/><rect x="80" y="75" width="188" height="25" fill="#d86a3a"/>
  <line x1="80" y1="15" x2="80" y2="110" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="20" y="42">Earth</text><text x="20" y="92">Mars</text><text x="168" y="42">2 hours</text><text x="272" y="92">4.7 h</text></g>
</svg>
</div>

## Worked examples

**1. On Earth.** $t = 10/5 = 2$ hours.

**2. On Mars.** $I = 5 \times 0.43 = 2.15$ A, so $t = 10/2.15 = 4.7$ hours.

**3. Real days.** These are noon values above the air. Air, dust and the Sun's angle all cut the current further, so a
real charge takes longer on both planets, and on Mars even a whole day of sunshine might not be enough.

## Try it

1. How long does a 20 Ah battery take to charge at 4 A?
2. Why does a panel give less current on Mars?
3. A panel gives 3 A at noon on Earth, above the air. What would it give on Mars?
4. On Mars, how long would that panel take to fill a 6.5 Ah battery?

??? note "Answers"
    1. $20/4 = 5$ hours.
    2. Mars is farther from the Sun, so the sunlight is weaker.
    3. $3 \times 0.43 = 1.29$ A, about 1.3 A.
    4. $6.5/1.29 = 5.0$ hours.

## Common mistake

**"A 10 Ah battery holds 10 hours of energy."** It holds 10 amp-hours of charge. How long it lasts depends on the
current you draw: 10 hours at 1 A, but only 1 hour at 10 A.

## Where it leads

- Back: [Power from a solar panel](05-power-from-a-solar-panel.md) · Next level: [Level 5: Ohm's law](../level-5/index.md)
- [Level 4 page](index.md) · [Electricity and magnetism topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). Amp-hours and energy:
  [Batteries](../../energy/level-7/02-batteries.md). Sunlight through a Mars day: [Sunlight at Mars](../../energy/level-6/03-sunlight-at-mars.md).
