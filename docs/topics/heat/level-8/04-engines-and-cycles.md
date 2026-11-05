---
title: "Engines and cycles"
---

# Engines and cycles

*Heat and matter · level 8, lesson 4 of 6*

## A question to start

A Stirling engine on a Mars reactor takes the same gas round the same loop, again and again. How much work does it get
from each trip round the loop?

## The idea

An engine takes a gas through a **cycle**: it heats, expands, cools and is squeezed, and ends where it started. Drawn
on a graph of pressure $p$ against volume $V$, the cycle is a closed loop.

The work the gas does as it expands is the area under the curve; the work done on it as it is squeezed back is the
area under the return path. So the **net work per cycle is the area inside the loop**. Going round clockwise, it is
work out: an engine.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="A rectangle cycle on a pressure against volume graph, from 100 to 300 kilopascals and from 1 to 2 litres. Arrows run clockwise. The shaded area inside is the work done each cycle.">
  <line x1="40" y1="140" x2="310" y2="140" stroke="currentColor"/><line x1="40" y1="140" x2="40" y2="10" stroke="currentColor"/>
  <rect x="100" y="30" width="140" height="80" fill="#eea66f" opacity=".5" stroke="#d86a3a" stroke-width="2"/>
  <g fill="#d86a3a"><path d="M170 24 l10 6 l-10 6 z"/><path d="M164 104 l-10 6 l10 6 z"/><path d="M234 70 l6 10 l6 -10 z"/><path d="M94 70 l6 -10 l6 10 z"/></g>
  <g font-size="11" fill="currentColor"><text x="0" y="34" font-size="10">300 kPa</text><text x="0" y="114" font-size="10">100 kPa</text><text x="92" y="155">1 L</text><text x="232" y="155">2 L</text>
  <text x="130" y="75">work per cycle</text><text x="260" y="145">V</text><text x="45" y="15">p</text></g>
</svg>
</div>

Real engines use smooth curves rather than a rectangle, and the efficiency is the net work divided by the heat taken
in. The Carnot limit, $1 - T_c/T_h$, caps it for any cycle.

## Worked examples

**1. The rectangle.** Height $300 - 100 = 200$ kPa, width $2 - 1 = 1$ L $= 0.001$ m³.
$W = 200{,}000 \times 0.001 = 200$ J per cycle.

**2. Power.** At 30 cycles a second: $200 \times 30 = 6{,}000$ W, 6 kW.

**3. Efficiency.** Suppose the gas takes in 800 J of heat per cycle. Efficiency $= 200/800 = 25\%$, the figure the
energy topic assumed for a reactor's engines.

## Try it

1. What does the area inside a cycle on a $p$–$V$ diagram tell you?
2. A rectangular cycle runs between 50 and 250 kPa and between 2 and 5 litres. Find the work per cycle.
3. What is the work if the gas goes round the loop anticlockwise?
4. An engine does 150 J per cycle from 600 J of heat. Find its efficiency and the heat it rejects.

??? note "Answers"
    1. The net work done by the gas in one cycle.
    2. $200{,}000 \times 0.003 = 600$ J.
    3. The same size, but done *on* the gas: it is then a fridge or heat pump, not an engine.
    4. $150/600 = 25\%$; it rejects $600 - 150 = 450$ J.

## Common mistake

**Using litres or kPa in $W = p\Delta V$.** 1 litre is $10^{-3}$ m³ and 1 kPa is 1,000 Pa. In SI units the answer
comes out in joules.

## Where it leads

- Back: [Heat pumps](03-heat-pumps.md) · Next: [The greenhouse effect on Mars](05-the-greenhouse-effect-on-mars.md)
- [Level 8 page](index.md) · [Heat and matter topic page](../index.md)
- The Carnot limit: [Heat engines](../../energy/level-8/04-heat-engines.md). The reactor:
  [A reactor for Mars](../../energy/level-8/03-a-reactor-for-mars.md).
