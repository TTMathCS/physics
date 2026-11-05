---
title: "Solar panels"
---

# Solar panels

*Energy and power · level 6, lesson 4 of 6*

## A question to start

A Mars habitat needs an average of 10 kW of electricity, day and night. How many square metres of solar panels would
that take, and how does that compare with the same habitat on Earth?

## The idea

A solar panel's power is

$$P = I \times A \times \eta,$$

where $I$ is the sunlight falling on it, in W/m², $A$ its area and $\eta$ its efficiency. But $I$ changes all the time:

- **At night**, it is zero.
- **The Sun's angle**: a flat panel catches less when the Sun is low. With the Sun at angle $\theta$ from overhead, it
  gets $I\cos\theta$.
- **The air**: dust (on Mars) or clouds (on Earth) take some of it away.

So engineers use the **average** sunlight over a whole day. For a flat panel near the equator on a clear day, the
average over a day and night is roughly $1/\pi$ of the noon sunlight above the air, less whatever the air takes. A
rough guide, assumed here:

| A flat panel near the equator, clear sky | Mars | Earth |
| --- | --- | --- |
| Sunlight above the air, noon | 586 W/m² | 1,361 W/m² |
| Share reaching the ground | about 70% (dust) | about 75% |
| Average over a whole day, about | 130 W/m² | 325 W/m² |
| Panel efficiency assumed | 25% | 25% |
| Average power per m² of panel | about 33 W | about 81 W |

These are estimates for clear skies; real places vary with latitude, season and weather.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="Sunlight on a flat panel through a day: zero at night, rising after sunrise to a peak at noon, falling to zero at sunset. A dashed line shows the average over the whole day, about a third of the peak.">
  <line x1="30" y1="130" x2="310" y2="130" stroke="currentColor"/><line x1="30" y1="130" x2="30" y2="15" stroke="currentColor"/>
  <path d="M30 130 H100 C130 130 140 30 170 30 C200 30 210 130 240 130 H310" fill="#eea66f" opacity=".5" stroke="#eea66f" stroke-width="2"/>
  <line x1="30" y1="97" x2="310" y2="97" stroke="#5aa0d8" stroke-width="2" stroke-dasharray="6 4"/>
  <g font-size="11" fill="currentColor"><text x="45" y="145">night</text><text x="155" y="145">noon</text><text x="265" y="145">night</text><text x="245" y="92">average</text><text x="175" y="25">peak</text></g>
</svg>
</div>

## Worked examples

**1. The habitat on Mars.** 10,000 W ÷ 33 W/m² $\approx 300$ m² of panels, a little more than a tennis court.
Plus batteries for the night, and more panels for the storms.

**2. The same habitat on Earth.** 10,000 ÷ 81 $\approx 125$ m². Mars needs about 2.5 times the area.

**3. Tilting the panel.** A panel tilted to face the noon Sun catches more. At a latitude of 40°, with the Sun 40° from
overhead at noon, a flat panel gets $\cos 40° = 0.77$ of what a tilted one does at noon.

## Try it

1. A 2 m² panel, 25% efficient, has 500 W/m² falling on it. Find its power.
2. Why is the average over a day much less than the noon value?
3. Using the table, how much panel area gives an average of 1 kW on Mars?
4. A Mars greenhouse needs 50 kW of lamps on average. Using the table, how much panel area is that?

??? note "Answers"
    1. $500 \times 2 \times 0.25 = 250$ W.
    2. There is no sunlight at night, and in the morning and evening the Sun is low.
    3. $1000/33 \approx 30$ m².
    4. $50{,}000/33 \approx 1{,}500$ m², which is why lamps for food are one of the biggest energy costs.

## Common mistake

**Using the noon value for a whole day.** A panel that gives 150 W at noon gives far less on average, about a third of
that on a clear day, and nothing at night.

## Where it leads

- Back: [Sunlight at Mars](03-sunlight-at-mars.md) · Next: [Dust on the panels](05-dust-on-the-panels.md)
- [Level 6 page](index.md) · [Energy and power topic page](../index.md)
- Storing it for the night: [Why store energy?](../level-7/01-why-store-energy.md).
