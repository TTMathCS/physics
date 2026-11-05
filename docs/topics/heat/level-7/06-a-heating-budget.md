---
title: "A heating budget"
---

# A heating budget

*Heat and matter · level 7, lesson 6 of 6*

## A question to start

Four people live in a habitat on Mars. How big a heater do they need? The answer may surprise you.

## The idea

A **heating budget** adds up every way heat leaves the habitat, and every source of heat inside. The heater makes up
the difference:

$$P_\text{heater} = P_\text{lost} - P_\text{gained inside}.$$

Heat is gained from:

- **people**, each giving out about 100 W at rest;
- **every electrical device**: lights, computers, pumps, cookers. Almost all the electricity they use ends up as heat
  in the room.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="Two bars. The heat lost bar is about 2.2 kilowatts. The heat gained bar is made of people, 0.4 kilowatts, and electrical devices, 1.5 kilowatts. The small gap left is what the heater must supply.">
  <rect x="100" y="25" width="220" height="25" fill="#5aa0d8" stroke="currentColor"/>
  <rect x="100" y="70" width="40" height="25" fill="#eea66f" stroke="currentColor"/><rect x="140" y="70" width="150" height="25" fill="#cfc8bf" stroke="currentColor"/>
  <rect x="290" y="70" width="30" height="25" fill="#d86a3a" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="5" y="42">lost: 2.2 kW</text><text x="5" y="87">gained:</text><text x="103" y="112">people</text><text x="180" y="112">devices 1.5 kW</text><text x="285" y="112">heater</text></g>
</svg>
</div>

## Worked examples

**1. The heat lost.** A habitat is a cylinder 10 m long and 5 m across: its walls and ends have area
$\pi \times 5 \times 10 + 2 \times \pi \times 2.5^2 = 157 + 39 = 196$ m². With the wall of lesson 2, $U = 0.14$, and
79 K across it: $P = 0.14 \times 196 \times 79 \approx 2{,}200$ W.

**2. Heat gained inside.** Four people: 400 W. Suppose lights, computers and life support use 1.5 kW of electricity:
1,500 W of heat. Total 1,900 W.

**3. The heater.** $2{,}200 - 1{,}900 = 300$ W. A small heater is enough.

| Same habitat, same wall | Mars | Earth |
| --- | --- | --- |
| $\Delta T$, inside 20 °C | 79 K | 5 K |
| Heat lost | about 2,200 W | about 140 W |
| Heat gained inside | 1,900 W | 1,900 W |
| Needs | a 300 W heater | about 1,760 W of cooling |

On Earth, this well-insulated home would overheat. On Mars, its own electricity almost heats it, and a dust storm
that cut the power would also cut the heat.

## Try it

1. Find the heat lost through 300 m² of wall with $U = 0.1$ and 79 K across it.
2. Six people and 2 kW of electrical devices are inside. What heat do they give?
3. What heater does that habitat need?
4. Why does nearly all the electricity used inside a habitat end up as heat?

??? note "Answers"
    1. $0.1 \times 300 \times 79 = 2{,}370$ W.
    2. $600 + 2000 = 2{,}600$ W.
    3. None: it gains 230 W more than it loses, so it needs a little cooling.
    4. Light is absorbed by walls, motors and computers warm up, and sound fades: the energy ends as heat in the room.

## Common mistake

**Forgetting the heat from inside.** People and machines are heaters too. Leaving them out can size a heater many
times too big, and miss that the habitat may need cooling.

## Where it leads

- Back: [Windows and greenhouses](05-windows-and-greenhouses.md) · Next level: [Thermodynamics](../level-8/index.md)
- [Level 7 page](index.md) · [Heat and matter topic page](../index.md)
- The energy side: [A city energy budget](../../energy/level-8/05-a-city-energy-budget.md).
