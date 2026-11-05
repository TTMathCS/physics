---
title: "Heat loss through a wall"
---

# Heat loss through a wall

*Heat and matter · level 7, lesson 1 of 6*

## A question to start

A Mars habitat is kept at 20 °C inside, with about −60 °C outside. How much heat leaks through its walls each second,
and how thick must the insulation be?

## The idea

Heat conducts through a slab at a rate

$$P = \frac{kA\,\Delta T}{d},$$

where $A$ is the area, $d$ the thickness, $\Delta T$ the temperature difference across it, and $k$ the material's
**thermal conductivity**, in watts per metre per kelvin.

| Material | $k$, W/(m K) |
| --- | --- |
| Copper | 400 |
| Steel | 50 |
| Concrete | about 1.4 |
| Glass | about 1.0 |
| Brick | about 0.7 |
| Wood | about 0.13 |
| Mineral wool | about 0.04 |
| Mars soil at InSight's site | 0.039 |
| Still air | 0.026 |
| Insulating foam board | about 0.022 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A slab of wall of thickness d and area A. The inside face is warm at 20 degrees; the outside is cold at minus 60. Heat flows through from warm to cold.">
  <rect x="130" y="15" width="60" height="100" fill="#cfc8bf" stroke="currentColor"/>
  <path d="M60 65 H125" stroke="#d86a3a" stroke-width="3"/><path d="M195 65 H260" stroke="#5aa0d8" stroke-width="3"/><path d="M260 58 l12 7 l-12 7 z" fill="#5aa0d8"/>
  <line x1="130" y1="122" x2="190" y2="122" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="20" y="40">inside 20 °C</text><text x="225" y="40">outside −60 °C</text><text x="155" y="118">d</text><text x="100" y="90">heat</text></g>
</svg>
</div>

| 100 m² of wall with 10 cm of foam | Mars | Earth |
| --- | --- | --- |
| Inside | 20 °C | 20 °C |
| Outside, on average | −59 °C | 15 °C |
| $\Delta T$ | 79 K | 5 K |
| Heat lost, $kA\Delta T/d$ | about 1,740 W | about 110 W |

## Worked examples

**1. The Mars wall.** $P = 0.022 \times 100 \times 79/0.10 = 1{,}740$ W.

**2. Bare concrete instead.** 20 cm of concrete: $P = 1.4 \times 100 \times 79/0.20 = 55{,}000$ W, over 30 times as much.

**3. How thick for 500 W?** $d = kA\Delta T/P = 0.022 \times 100 \times 79/500 = 0.35$ m of foam.

## Try it

1. Find the heat lost through 10 m² of brick 0.2 m thick, with 15 K across it.
2. If the insulation is made twice as thick, what happens to the heat loss?
3. Why are thin metal walls a poor choice on their own?
4. Why is the heat loss on Mars so much bigger than on Earth for the same wall?

??? note "Answers"
    1. $0.7 \times 10 \times 15/0.2 = 525$ W.
    2. It halves.
    3. Metal conducts heat very well, so heat pours through.
    4. The temperature difference is about 16 times bigger, so the loss is about 16 times bigger.

## Common mistake

**Using the inside temperature for $\Delta T$.** It is the *difference* across the wall: 20 − (−59) = 79 K, not 20.

## Where it leads

- Back: [Water on Mars](../level-6/06-water-on-mars.md) · Next: [Layers and U-values](02-layers-and-u-values.md)
- [Level 7 page](index.md) · [Heat and matter topic page](../index.md)
- The idea, without numbers: [Conduction](../level-3/02-conduction.md). The Mars soil figure:
  [InSight's results](https://pmc.ncbi.nlm.nih.gov/articles/PMC9734249/). The temperatures: NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
