---
title: "Series circuits"
---

# Series circuits

*Electricity and magnetism · level 5, lesson 3 of 6*

## A question to start

Two bulbs in one loop are dimmer than one on its own. Can you work out exactly how much current flows?

## The idea

Parts in **series** are in one single loop, one after another.

- The **current** is the same through every part.
- The resistances **add**: $R = R_1 + R_2 + \dots$
- The battery's voltage is **shared** between the parts, in proportion to their resistances: $V_1 = IR_1$, and so on.

So adding a part in series always increases the total resistance and lowers the current.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A 12 volt battery with a 2 ohm and a 4 ohm resistor in series. The current is 2 amps. The voltages across them are 4 volts and 8 volts.">
  <g fill="none" stroke="currentColor" stroke-width="2"><path d="M60 30 L100 30"/><path d="M150 30 L190 30"/><path d="M240 30 L280 30 L280 110 L60 110 L60 78"/><path d="M60 62 L60 30"/></g>
  <g fill="#cfc8bf" stroke="currentColor" stroke-width="2"><rect x="100" y="20" width="50" height="20"/><rect x="190" y="20" width="50" height="20"/></g>
  <g stroke="currentColor"><line x1="45" y1="62" x2="75" y2="62" stroke-width="2"/><line x1="52" y1="78" x2="68" y2="78" stroke-width="4"/></g>
  <g font-size="11" fill="currentColor"><text x="113" y="34">2 Ω</text><text x="203" y="34">4 Ω</text><text x="105" y="58">4 V</text><text x="200" y="58">8 V</text><text x="85" y="74">12 V</text><text x="150" y="98">I = 2 A</text></g>
</svg>
</div>

## Worked examples

**1. The diagram.** $R = 2 + 4 = 6\ \Omega$. $I = 12/6 = 2$ A. $V_1 = 2 \times 2 = 4$ V and $V_2 = 2 \times 4 = 8$ V;
$4 + 8 = 12$ V.

**2. Two bulbs.** Each bulb is about 12 $\Omega$, on 3 V. One bulb: $I = 0.25$ A. Two in series: $I = 3/24 = 0.125$ A,
half as much, so both are dimmer.

**3. Limiting an LED.** An LED needs 2 V and 0.02 A, from a 9 V battery. The resistor must take $9 - 2 = 7$ V:
$R = 7/0.02 = 350\ \Omega$.

## Try it

1. Find the total resistance of 5 $\Omega$, 10 $\Omega$ and 15 $\Omega$ in series.
2. Those three are put across 60 V. Find the current and the voltage across each.
3. Why does adding a bulb in series make the others dimmer?
4. An LED needs 3 V and 0.02 A from a 5 V supply. What resistor is needed?

??? note "Answers"
    1. $30\ \Omega$.
    2. $I = 60/30 = 2$ A; 10 V, 20 V and 30 V.
    3. The total resistance goes up, so the current through all of them goes down.
    4. $(5 - 3)/0.02 = 100\ \Omega$.

## Common mistake

**"The current is used up along a series loop."** It is the same all the way round. The **voltage** is what is shared
out.

## Where it leads

- Back: [Ohm's law](02-ohms-law.md) · Next: [Parallel circuits](04-parallel-circuits.md)
- [Level 5 page](index.md) · [Electricity and magnetism topic page](../index.md)
