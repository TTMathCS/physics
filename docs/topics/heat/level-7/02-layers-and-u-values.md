---
title: "Layers and U-values"
---

# Layers and U-values

*Heat and matter · level 7, lesson 2 of 6*

## A question to start

A real habitat wall is a sandwich: a steel skin to hold the air in, a thick layer of foam, and a wooden panel inside.
How do you find the heat loss through all three at once?

## The idea

Each layer resists heat flow. For a square metre of a layer of thickness $d$, its **thermal resistance** is

$$R = \frac{d}{k}, \quad \text{in m}^2\text{ K/W}.$$

Layers that heat must pass through one after another simply add, like resistors in series:
$R_\text{total} = R_1 + R_2 + R_3$. The **U-value** is the heat flow per square metre for each kelvin of difference:

$$U = \frac{1}{R_\text{total}}, \qquad P = UA\,\Delta T.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A wall in three layers: a thin steel skin outside, a thick foam layer in the middle and a wooden panel inside. Under each is its thermal resistance, and they add up.">
  <rect x="100" y="15" width="6" height="90" fill="#cfc8bf" stroke="currentColor"/><rect x="106" y="15" width="120" height="90" fill="#eea66f" opacity=".6" stroke="currentColor"/>
  <rect x="226" y="15" width="16" height="90" fill="#d86a3a" opacity=".7" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="30" y="60">outside</text><text x="252" y="60">inside</text><text x="70" y="122">steel 5 mm</text><text x="135" y="60">foam 15 cm</text><text x="215" y="122">wood 2 cm</text></g>
</svg>
</div>

| Layer | $d$ | $k$ | $R = d/k$ |
| --- | --- | --- | --- |
| Steel skin | 0.005 m | 50 | 0.0001 |
| Foam | 0.15 m | 0.022 | 6.82 |
| Wood panel | 0.02 m | 0.13 | 0.15 |
| **Total** | | | **6.97** |

So $U = 1/6.97 = 0.14$ W/(m² K). The foam does almost all the work; the steel hardly counts.

| 100 m² of this wall | Mars | Earth |
| --- | --- | --- |
| $\Delta T$, inside 20 °C | 79 K | 5 K |
| Heat lost, $UA\Delta T$ | about 1,130 W | about 70 W |

## Worked examples

**1. The wall above.** $P = 0.14 \times 100 \times 79 = 1{,}130$ W.

**2. Doubling the foam.** $R = 0.0001 + 13.64 + 0.15 = 13.8$, $U = 0.072$: the loss roughly halves, to about 570 W.

**3. A thermal bridge.** Suppose a steel bolt runs straight through the foam. It lets heat bypass the foam. Engineers
avoid such **thermal bridges**, because a small area of metal can leak as much as a large area of wall.

## Try it

1. Find $R$ for 0.1 m of mineral wool ($k = 0.04$).
2. A wall has layers with $R$ = 0.2, 3.0 and 0.3. Find its U-value.
3. Find the heat lost through 50 m² of that wall with 60 K across it.
4. Why does the steel skin add so little resistance?

??? note "Answers"
    1. $0.1/0.04 = 2.5$ m² K/W.
    2. $R = 3.5$, so $U = 1/3.5 = 0.29$ W/(m² K).
    3. $0.29 \times 50 \times 60 = 860$ W.
    4. Steel conducts heat very well and the skin is thin, so $d/k$ is tiny.

## Common mistake

**Adding the U-values.** For layers one after another, add the *resistances*, then take $1/R$. Adding U-values would
make a thicker wall seem to lose more heat.

## Where it leads

- Back: [Heat loss through a wall](01-heat-loss-through-a-wall.md) · Next: [Radiation from surfaces](03-radiation-from-surfaces.md)
- [Level 7 page](index.md) · [Heat and matter topic page](../index.md)
- Resistances in series in circuits: [Electricity and magnetism](../../electricity/index.md).
