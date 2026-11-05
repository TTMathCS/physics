---
title: "Parallel circuits"
---

# Parallel circuits

*Electricity and magnetism · level 5, lesson 4 of 6*

## A question to start

In your home, you can switch off the kitchen light and the fridge keeps running. Why do the lights and plugs not all
go off together, like fairy lights in a single loop?

## The idea

Parts in **parallel** are on separate branches, each connected straight across the supply.

- Every branch has the **same voltage**, the full supply voltage.
- The branch currents **add**: $I = I_1 + I_2 + \dots$
- The combined resistance is **less** than any single branch:

$$\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$$

Each branch works on its own. Homes are wired in parallel, so each light and socket gets the full 120 V and can be
switched separately.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A 12 volt battery with two branches in parallel: a 6 ohm resistor carrying 2 amps and a 3 ohm resistor carrying 4 amps. The total current is 6 amps.">
  <g fill="none" stroke="currentColor" stroke-width="2"><path d="M60 62 L60 20 L280 20 L280 120 L60 120 L60 78"/><path d="M140 20 L140 50"/><path d="M140 90 L140 120"/><path d="M220 20 L220 50"/><path d="M220 90 L220 120"/></g>
  <g fill="#cfc8bf" stroke="currentColor" stroke-width="2"><rect x="130" y="50" width="20" height="40"/><rect x="210" y="50" width="20" height="40"/></g>
  <g stroke="currentColor"><line x1="45" y1="62" x2="75" y2="62" stroke-width="2"/><line x1="52" y1="78" x2="68" y2="78" stroke-width="4"/></g>
  <g font-size="11" fill="currentColor"><text x="155" y="74">6 Ω: 2 A</text><text x="235" y="74">3 Ω: 4 A</text><text x="20" y="100">12 V</text><text x="85" y="14">total 6 A</text></g>
</svg>
</div>

## Worked examples

**1. The diagram.** $I_1 = 12/6 = 2$ A, $I_2 = 12/3 = 4$ A, total 6 A. Combined: $1/R = 1/6 + 1/3 = 1/2$, so
$R = 2\ \Omega$, and $12/2 = 6$ A.

**2. Two equal branches.** Two 10 $\Omega$ resistors in parallel: $R = 5\ \Omega$, half of one.

**3. A kitchen.** A 1,500 W kettle (12.5 A) and a 1,200 W toaster (10 A) on the same 120 V circuit draw 22.5 A
together, enough to trip a 15 A breaker.

## Try it

1. Find the combined resistance of 4 $\Omega$ and 12 $\Omega$ in parallel.
2. They are put across 24 V. Find each branch current and the total.
3. Why is a house wired in parallel?
4. A third branch is added. Does the total current go up or down?

??? note "Answers"
    1. $1/R = 1/4 + 1/12 = 1/3$: $R = 3\ \Omega$.
    2. 6 A and 2 A, total 8 A (and $24/3 = 8$ A).
    3. Each appliance gets the full voltage and can be switched on and off on its own.
    4. Up: each branch adds its own current.

## Common mistake

**"More branches means more resistance."** Each new branch is another path for the current, so the combined resistance
goes **down** and the total current goes up.

## Where it leads

- Back: [Series circuits](03-series-circuits.md) · Next: [Resistance of wires](05-resistance-of-wires.md)
- [Level 5 page](index.md) · [Electricity and magnetism topic page](../index.md)
