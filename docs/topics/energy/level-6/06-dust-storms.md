---
title: "Dust storms"
---

# Dust storms

*Energy and power · level 6, lesson 6 of 6*

## A question to start

In June 2018, a dust storm spread across the whole of Mars. Opportunity, on solar power for 14 years, went silent and
never spoke again. How dark does a dust storm make the sky?

## The idea

Scientists measure how dusty the sky is by its **optical depth**, $\tau$ (tau). Sunlight coming straight through the air
is cut down by a factor

$$\frac{I_\text{direct}}{I_\text{above}} = e^{-\tau}$$

for the Sun overhead. Each 1 of optical depth cuts the direct beam to $e^{-1} = 37\%$.

| Sky | $\tau$, about | Direct sunlight getting through |
| --- | --- | --- |
| Clear Mars sky | 0.3 to 0.5 | 61 to 74% |
| A dusty day | 1 | 37% |
| A big regional storm | 3 | 5% |
| The 2018 storm over Opportunity | about 11 | 0.002% |

Not all the light is lost: dust also **scatters** light sideways, and some of that reaches the ground as dim, diffuse
daylight. Even so, in the thickest part of the 2018 storm, only a tiny share of the usual sunlight reached Opportunity's
panels. It could not charge its batteries, and its heaters could not keep it warm.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Two skies over a rover. On the left, a clear sky with the Sun's rays reaching the rover. On the right, a thick layer of dust blocking almost all the rays.">
  <circle cx="60" cy="25" r="12" fill="#eea66f" stroke="currentColor"/><g stroke="#eea66f" stroke-width="2"><line x1="60" y1="40" x2="60" y2="110"/><line x1="50" y1="40" x2="40" y2="110"/><line x1="70" y1="40" x2="80" y2="110"/></g>
  <rect x="35" y="112" width="50" height="14" fill="#cfc8bf" stroke="currentColor"/>
  <circle cx="240" cy="25" r="12" fill="#eea66f" stroke="currentColor" opacity=".5"/>
  <rect x="180" y="45" width="130" height="45" fill="#d86a3a" opacity=".7"/>
  <g stroke="#eea66f" stroke-width="1" opacity=".4"><line x1="240" y1="90" x2="240" y2="110"/></g>
  <rect x="215" y="112" width="50" height="14" fill="#cfc8bf" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="20" y="145">clear: τ about 0.5</text><text x="195" y="145">2018 storm: τ about 11</text></g>
</svg>
</div>

Planet-wide storms like 2018's come every few Mars years, usually in the dusty season (southern spring and summer),
and can last for months. A city on solar power alone would need to store enough energy, or keep a second source, to get
through one.

## Worked examples

**1. A dusty day.** At $\tau = 1$, with 586 W/m² above the air and the Sun overhead, the direct beam is
$586 \times 0.37 = 216$ W/m².

**2. A regional storm.** At $\tau = 3$: $586 \times e^{-3} = 586 \times 0.050 = 29$ W/m² direct.

**3. The 2018 storm.** $e^{-10.8} = 2\times10^{-5}$. Of 586 W/m², about 0.01 W/m² came straight through. Diffuse light
added more, but still only a few percent of a clear day.

## Try it

1. What does optical depth measure?
2. Find the share of direct sunlight getting through at $\tau = 2$.
3. A panel gives 1,000 Wh a sol in a clear sky at $\tau = 0.5$. Roughly what might it give at $\tau = 2.5$, counting only
   the direct beam?
4. Why could a nuclear power unit keep a city going through a storm?

??? note "Answers"
    1. How much the dust in the sky blocks the direct sunlight.
    2. $e^{-2} = 0.135$, about 14%.
    3. $1000 \times e^{-2.5}/e^{-0.5} = 1000 \times e^{-2} = 135$ Wh (in reality diffuse light adds some).
    4. It does not need sunlight: its heat comes from atomic nuclei.

## Common mistake

**"Twice the dust, half the light."** Optical depth works by multiplying: doubling $\tau$ from 2 to 4 cuts the direct light
from 14% to 2%, not from 14% to 7%.

## Where it leads

- Back: [Dust on the panels](05-dust-on-the-panels.md) · Next level: [Storing energy](../level-7/index.md)
- [Level 6 page](index.md) · [Energy and power topic page](../index.md)
- Getting through a storm: [Through a dust storm](../level-7/06-through-a-dust-storm.md). How dust storms grow:
  [Air and fluids](../../air/index.md). The figures: NASA's
  [Opportunity mission page](https://science.nasa.gov/mission/mer-opportunity/) and
  [Opportunity's last images](https://science.nasa.gov/photojournal/last-images-opportunity-took/), used to measure the
  tau of 10.8.
