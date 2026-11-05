---
title: "Ohm's law"
---

# Ohm's law

*Electricity and magnetism · level 5, lesson 2 of 6*

## A question to start

Double the voltage across a resistor. Does the current double too, or does something else happen?

## The idea

For a metal wire or a resistor kept at the same temperature, the current is **proportional** to the voltage. Double the
voltage and the current doubles. This is **Ohm's law**:

$$V = IR,$$

with $R$ staying the same. A part that obeys it is called **ohmic**. Its graph of current against voltage is a straight
line through the origin, and a steeper line means a smaller resistance.

A **bulb** is not ohmic. As the current grows, its filament heats up, its resistance rises, and the graph curves over.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Current against voltage. A resistor gives a straight line through the origin. A bulb gives a curve that bends over as its filament heats up.">
  <line x1="40" y1="130" x2="310" y2="130" stroke="currentColor"/><line x1="40" y1="130" x2="40" y2="10" stroke="currentColor"/>
  <line x1="40" y1="130" x2="280" y2="20" stroke="#5aa0d8" stroke-width="3"/>
  <path d="M40 130 Q90 60 280 55" fill="none" stroke="#d86a3a" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="200" y="30">resistor: straight</text><text x="220" y="75">bulb: curves</text><text x="260" y="145">voltage</text><text x="45" y="15">current</text></g>
</svg>
</div>

## Worked examples

**1. Find the current.** 9 V across 180 $\Omega$: $I = 9/180 = 0.05$ A.

**2. Find the voltage.** 0.2 A through 60 $\Omega$: $V = 0.2 \times 60 = 12$ V.

**3. Double it.** 9 V gave 0.05 A, so 18 V gives 0.10 A: the same $R = 180\ \Omega$.

## Try it

1. Find the current when 24 V is across 8 $\Omega$.
2. What voltage drives 1.5 A through 4 $\Omega$?
3. A resistor carries 0.3 A at 6 V. What current at 15 V?
4. Why is a bulb's graph of current against voltage not a straight line?

??? note "Answers"
    1. $24/8 = 3$ A.
    2. $1.5 \times 4 = 6$ V.
    3. $R = 20\ \Omega$, so $15/20 = 0.75$ A.
    4. Its filament gets hotter as the current rises, so its resistance rises.

## Common mistake

**"$V = IR$ is true for everything."** $R = V/I$ always defines resistance. But only an ohmic part keeps the same $R$ as
the voltage changes.

## Where it leads

- Back: [Resistance](01-resistance.md) · Next: [Series circuits](03-series-circuits.md)
- [Level 5 page](index.md) · [Electricity and magnetism topic page](../index.md)
