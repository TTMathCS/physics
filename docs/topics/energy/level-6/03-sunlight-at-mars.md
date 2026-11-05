---
title: "Sunlight at Mars"
---

# Sunlight at Mars

*Energy and power · level 6, lesson 3 of 6*

## A question to start

Mars is about one and a half times as far from the Sun as Earth is. Does it get two-thirds of Earth's sunlight? Less?
More?

## The idea

The Sun sends out its light in all directions. At a distance $r$, that light is spread over a sphere of area $4\pi r^2$.
So the power falling on each square metre, the **irradiance**, is

$$I = \frac{L}{4\pi r^2},$$

where $L$ is the Sun's total power output. Double the distance, and the same light is spread over four times the area:
a quarter of the irradiance. This is the **inverse square law**.

Above Earth's air, at 1 AU (149.6 million km), the irradiance is measured at about **1,361 W/m²**, the solar constant.
At Mars, on average 1.524 AU:

$$I_\text{Mars} = \frac{1361}{1.524^2} = \frac{1361}{2.32} = 586 \text{ W/m}^2.$$

That is **43%** of Earth's, less than half, not two-thirds.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="Sunlight spreading out from the Sun. The light that falls on a square at Earth's distance spreads over a square 2.3 times the area at Mars, which is 1.5 times as far away.">
  <path d="M25 80 L215 34 L215 126 Z" fill="#eea66f" opacity=".2"/>
  <circle cx="25" cy="80" r="14" fill="#eea66f" stroke="currentColor"/>
  <rect x="146" y="50" width="8" height="60" fill="#5aa0d8"/><rect x="211" y="34" width="8" height="92" fill="#d86a3a"/>
  <g font-size="12" fill="currentColor"><text x="130" y="130">Earth:</text><text x="120" y="146">1,361 W/m²</text>
  <text x="228" y="70">Mars:</text><text x="228" y="86">586 W/m²,</text><text x="228" y="102">2.3 times</text><text x="228" y="118">the area</text></g>
</svg>
</div>

Mars's orbit is quite oval, so its sunlight changes a lot through its year:

| Sunlight above the air | Mars | Earth |
| --- | --- | --- |
| Average distance from the Sun | 1.524 AU | 1.000 AU |
| Average irradiance | 586 W/m² | 1,361 W/m² |
| At the closest point (perihelion) | 714 W/m², at 1.381 AU | 1,408 W/m², at 0.983 AU |
| At the farthest point (aphelion) | 490 W/m², at 1.666 AU | 1,316 W/m², at 1.017 AU |
| Closest point compared with farthest | about 46% more | about 7% more |

On the ground, both planets' air takes some of it away, Mars's mostly through dust.

## Worked examples

**1. Mars at perihelion.** $1361/1.381^2 = 1361/1.907 = 714$ W/m².

**2. Jupiter.** At 5.2 AU: $1361/27 = 50$ W/m², under 4% of Earth's. The Juno probe's solar panels there are huge.

**3. The 2.3 times.** A solar panel that must give a set power needs $1.524^2 = 2.32$ times the area at Mars, everything
else being equal.

## Try it

1. Why does doubling the distance quarter the irradiance?
2. Find the irradiance at Mars's aphelion, 1.666 AU.
3. How many times stronger is sunlight at Mars's perihelion than at its aphelion?
4. Venus is at 0.723 AU. Find its irradiance.

??? note "Answers"
    1. The same light spreads over a sphere of four times the area.
    2. $1361/2.776 = 490$ W/m².
    3. $714/490 = 1.46$ times.
    4. $1361/0.523 = 2{,}600$ W/m².

## Common mistake

**Dividing by the distance, not its square.** 1.524 times farther gives $1/1.524^2$, not $1/1.524$, of the light: 43%,
not 66%.

## Where it leads

- Back: [Sankey diagrams](02-sankey-diagrams.md) · Next: [Solar panels](04-solar-panels.md)
- [Level 6 page](index.md) · [Energy and power topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). The same law for gravity:
  [Weaker with distance](../../gravity/level-4/02-weaker-with-distance.md).
