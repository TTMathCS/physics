---
title: "Heat pumps"
---

# Heat pumps

*Heat and matter · level 8, lesson 3 of 6*

## A question to start

On Earth, a heat pump can give a house three or four joules of heat for every joule of electricity it uses. Could one
heat a Mars home as cheaply, pulling heat from air at −59 °C?

## The idea

A **heat pump** is a fridge turned round: it uses work $W$ to take heat $Q_c$ from a cold place and deliver heat
$Q_h = Q_c + W$ to a warm one. Its **coefficient of performance** for heating is

$$\text{COP} = \frac{Q_h}{W}.$$

The second law sets the best possible value, for a perfect pump between $T_h$ and $T_c$ in kelvin:

$$\text{COP}_\text{max} = \frac{T_h}{T_h - T_c}.$$

The bigger the temperature gap, the lower the COP. Real heat pumps reach only part of this, often a quarter to a half.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="A heat pump between cold outside air at the bottom and a warm room at the top. Heat Q_c comes up from the cold side, work W comes in from the side, and the larger heat Q_h goes into the room.">
  <rect x="80" y="10" width="160" height="30" fill="#d86a3a" opacity=".8"/><rect x="80" y="120" width="160" height="30" fill="#5aa0d8" opacity=".7"/>
  <circle cx="160" cy="80" r="22" fill="#cfc8bf" stroke="currentColor"/>
  <g stroke="currentColor" stroke-width="3"><line x1="160" y1="120" x2="160" y2="102"/><line x1="160" y1="58" x2="160" y2="40"/><line x1="250" y1="80" x2="182" y2="80"/></g>
  <g font-size="12" fill="currentColor"><text x="95" y="30">warm room</text><text x="95" y="140">cold outside</text><text x="142" y="84">pump</text>
  <text x="168" y="54">heat out</text><text x="168" y="116">heat in</text><text x="255" y="84">work W</text></g>
</svg>
</div>

| Best possible COP, room at 20 °C (293 K) | Mars | Earth |
| --- | --- | --- |
| Outside | −59 °C (214 K), the average | suppose 0 °C (273 K) in winter |
| $T_h - T_c$ | 79 K | 20 K |
| $\text{COP}_\text{max}$ | 3.7 | 14.7 |

## Worked examples

**1. On Mars.** $293/(293 - 214) = 293/79 = 3.7$. Even a perfect pump gives under 4 J of heat per joule of work.

**2. A better cold side.** Suppose the pump draws heat from a reactor's warm radiator loop at 330 K instead, to heat
water to 340 K: $\text{COP}_\text{max} = 340/10 = 34$. Waste heat makes a far better source than Mars air.

**3. The heater it replaces.** An electric heater has a COP of exactly 1: each joule of electricity gives one joule of
heat. Suppose a real Mars heat pump reaches half the best possible, a COP of
about 1.8. It would need $1/1.8 = 56\%$ of the electricity a heater needs.

## Try it

1. Find $\text{COP}_\text{max}$ for heating a room at 293 K from air at 253 K.
2. A heat pump with COP 3 uses 1 kW of electricity. How much heat does it give? How much does it take from outside?
3. Why does a heat pump struggle more on Mars than on Earth?
4. Why can a heat pump's COP be more than 1 without breaking the first law?

??? note "Answers"
    1. $293/40 = 7.3$.
    2. 3 kW of heat, of which 2 kW is taken from outside.
    3. The temperature gap is far bigger, which lowers the best possible COP.
    4. It does not make the heat; it moves heat from outside and adds the work. Energy out = heat taken + work.

## Common mistake

**Using °C.** $20/(20 - (-59)) = 0.25$ is nonsense. In kelvin: $293/79 = 3.7$.

## Where it leads

- Back: [The second law](02-the-second-law.md) · Next: [Engines and cycles](04-engines-and-cycles.md)
- [Level 8 page](index.md) · [Heat and matter topic page](../index.md)
- The temperatures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
