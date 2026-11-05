---
title: "Radiation from surfaces"
---

# Radiation from surfaces

*Heat and matter · level 7, lesson 3 of 6*

## A question to start

Spacecraft are often wrapped in shiny gold or silver blankets. Why shiny? And how much heat would bare skin lose by
radiation on a Mars night?

## The idea

Every surface radiates infrared. The power it gives out is

$$P = \varepsilon\sigma A T^4,$$

with $T$ in kelvin, $\sigma = 5.67\times10^{-8}$ W m⁻² K⁻⁴, and $\varepsilon$ the **emissivity**, between 0 and 1. A
surface also absorbs radiation from its surroundings at temperature $T_s$, so the **net** loss is

$$P = \varepsilon\sigma A\left(T^4 - T_s^4\right).$$

| Surface | Emissivity $\varepsilon$, about |
| --- | --- |
| Polished gold | 0.02 |
| Polished aluminium | 0.05 |
| White paint | 0.9 |
| Black paint | 0.95 |
| Human skin | 0.98 |

A shiny surface has a low $\varepsilon$: it radiates little, and reflects most of what falls on it. Spacecraft
blankets are many thin shiny layers, each one cutting the radiation that gets through.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="A warm surface giving out many arrows of infrared to cold surroundings, and receiving fewer arrows back. The net loss is the difference.">
  <rect x="20" y="20" width="60" height="80" fill="#d86a3a" opacity=".7" stroke="currentColor"/>
  <g stroke="#d86a3a" stroke-width="2"><line x1="85" y1="35" x2="200" y2="35"/><line x1="85" y1="55" x2="200" y2="55"/><line x1="85" y1="75" x2="200" y2="75"/></g>
  <line x1="200" y1="95" x2="90" y2="95" stroke="#5aa0d8" stroke-width="2"/>
  <g font-size="12" fill="currentColor"><text x="210" y="58">out: εσAT⁴</text><text x="210" y="99">back: εσATₛ⁴</text><text x="22" y="115">warm surface</text></g>
</svg>
</div>

## Worked examples

**1. Skin in a room.** 1.8 m² of skin at 306 K (33 °C), in a room at 293 K:
$0.98 \times 5.67\times10^{-8} \times 1.8 \times (306^4 - 293^4) = 1.0\times10^{-7} \times 1.40\times10^9 \approx 140$ W.

**2. Bare skin on a Mars night.** Suppose the surroundings radiate like a surface at 184 K, the Viking 1 night:
$1.0\times10^{-7} \times (306^4 - 184^4) = 1.0\times10^{-7} \times 7.6\times10^9 \approx 760$ W.

| Net radiation from 1.8 m² of skin at 33 °C | Mars night | Earth room |
| --- | --- | --- |
| Surroundings at | 184 K | 293 K |
| Heat lost | about 760 W | about 140 W |

**3. A shiny wrap.** The same 1.8 m² at 306 K, covered in polished aluminium ($\varepsilon = 0.05$): the loss to the
Mars night falls to about 40 W.

## Try it

1. Find the power radiated by 1 m² of black paint at 300 K, ignoring what comes back.
2. Why does doubling the kelvin temperature multiply the radiated power by 16?
3. Why are spacecraft blankets shiny?
4. Why is the net loss much bigger on a Mars night than in a room?

??? note "Answers"
    1. $0.95 \times 5.67\times10^{-8} \times 300^4 = 436$ W.
    2. Power goes as $T^4$, and $2^4 = 16$.
    3. Shiny surfaces have a low emissivity, so they radiate little heat and reflect most of what reaches them.
    4. The surroundings are far colder, so much less radiation comes back to make up for what is lost.

## Common mistake

**Using °C in $T^4$.** 33 °C is 306 K. Putting 33 into $T^4$ gives an answer about 7,400 times too small.

## Where it leads

- Back: [Layers and U-values](02-layers-and-u-values.md) · Next: [Regolith as insulation](04-regolith-as-insulation.md)
- [Level 7 page](index.md) · [Heat and matter topic page](../index.md)
- Radiators for a reactor: [A reactor for Mars](../../energy/level-8/03-a-reactor-for-mars.md). The Viking 1
  temperature: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
