---
title: "Power from a solar panel"
---

# Power from a solar panel

*Electricity and magnetism · level 4, lesson 5 of 6*

## A question to start

A solar panel's label says "18 V, 5.5 A". What power does it give, and what changes when a cloud passes over?

## The idea

A solar panel is made of many **solar cells**. Each silicon cell gives only about half a volt, so cells are joined
in a line (in series) to add their voltages. A panel of 36 cells gives about 18 V.

The **current** depends on how much sunlight falls on the panel. Halve the sunlight and the current roughly halves,
while the voltage stays almost the same. The power is

$$P = VI.$$

To get more current, panels are joined side by side (in parallel). To get more voltage, they are joined in a line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A solar panel made of a grid of cells. Below it, two bars: in full sunlight the current is 5.5 amps; in half the sunlight it is about 2.75 amps, while the voltage stays near 18 volts.">
  <rect x="20" y="15" width="130" height="80" fill="#5aa0d8" stroke="currentColor"/>
  <g stroke="#fff" stroke-width="1"><line x1="52" y1="15" x2="52" y2="95"/><line x1="85" y1="15" x2="85" y2="95"/><line x1="118" y1="15" x2="118" y2="95"/><line x1="20" y1="42" x2="150" y2="42"/><line x1="20" y1="68" x2="150" y2="68"/></g>
  <rect x="180" y="30" width="132" height="18" fill="#eea66f"/><rect x="180" y="70" width="66" height="18" fill="#eea66f"/>
  <g font-size="11" fill="currentColor"><text x="180" y="24">full sunlight: 5.5 A</text><text x="180" y="64">half the sunlight: about 2.75 A</text><text x="180" y="110">voltage stays near 18 V</text><text x="20" y="115">36 cells in a line</text></g>
</svg>
</div>

## Worked examples

**1. The label.** $P = 18 \times 5.5 = 99$ W in full sunlight.

**2. Under a thin cloud.** Half the sunlight: $I \approx 2.75$ A, so $P \approx 18 \times 2.75 = 50$ W.

**3. Two panels.** Two such panels in parallel give 18 V and 11 A, 198 W. In series, 36 V and 5.5 A: the same 198 W.

## Try it

1. How many half-volt cells in series give 12 V?
2. A panel gives 20 V and 4 A. What is its power?
3. Dust blocks a quarter of the light on that panel. Roughly what power does it give now?
4. You need 36 V from 18 V panels. How do you join them?

??? note "Answers"
    1. $12/0.5 = 24$ cells.
    2. $20 \times 4 = 80$ W.
    3. Current about $0.75 \times 4 = 3$ A, so about $20 \times 3 = 60$ W.
    4. Two in series.

## Common mistake

**"Weaker sunlight lowers the voltage."** It mostly lowers the **current**. A panel in dim light still shows nearly its
full voltage on a meter, but it can deliver far less power.

## Where it leads

- Back: [Measuring a circuit](04-measuring-a-circuit.md) · Next: [Charging on Mars](06-charging-on-mars.md)
- [Level 4 page](index.md) · [Electricity and magnetism topic page](../index.md)
- How efficient panels are, and the sunlight at Mars: [Solar panels](../../energy/level-6/04-solar-panels.md).
