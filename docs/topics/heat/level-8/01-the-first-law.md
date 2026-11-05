---
title: "The first law"
---

# The first law

*Heat and matter · level 8, lesson 1 of 6*

## A question to start

When the air in a Mars airlock is pumped out quickly, the air left behind gets colder, and frost can form on the walls.
Nobody took heat out. Where did its energy go?

## The idea

A gas has **internal energy** $U$: the energy of all its moving particles. It can change in two ways: heat $Q$ flowing
in, and work $W$ the gas does as it pushes outwards. Energy is conserved, so

$$\Delta U = Q - W.$$

This is the **first law of thermodynamics**. At a steady pressure $p$, a gas that expands by $\Delta V$ does work

$$W = p\,\Delta V.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A gas in a cylinder with a piston. Heat Q flows in from below. The gas pushes the piston up by a distance, doing work W. The rest of the heat raises the gas's internal energy.">
  <rect x="110" y="20" width="100" height="100" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="110" y="55" width="100" height="65" fill="#eea66f" opacity=".5"/>
  <rect x="110" y="47" width="100" height="8" fill="#cfc8bf" stroke="currentColor"/>
  <line x1="160" y1="47" x2="160" y2="15" stroke="currentColor" stroke-width="3"/><path d="M153 20 l7 -12 l7 12 z" fill="currentColor"/>
  <path d="M160 140 V125" stroke="#d86a3a" stroke-width="3"/>
  <g font-size="12" fill="currentColor"><text x="175" y="15">work W out</text><text x="175" y="137">heat Q in</text><text x="125" y="95">gas: U rises</text></g>
</svg>
</div>

For an ideal gas, $U$ depends only on its temperature. So:

- if a gas expands **without heat getting in** ($Q = 0$), it does work at the cost of its own internal energy, and it
  **cools**. That is the airlock;
- if a gas is squeezed fast, work is done on it and it **warms**: a bicycle pump gets hot.

## Worked examples

**1. Heating at constant pressure.** 500 J of heat goes into a gas, which expands by $2\times10^{-3}$ m³ at 100 kPa.
$W = 100{,}000 \times 0.002 = 200$ J. $\Delta U = 500 - 200 = 300$ J: the rest warms the gas.

**2. At constant volume.** In a sealed rigid can, $\Delta V = 0$ so $W = 0$. All the heat goes into $U$, and the
temperature rises more for the same heat.

**3. The airlock.** As air rushes out, the air still inside expands to fill the space and pushes it out, doing work.
With little time for heat to flow in, $Q \approx 0$, so $\Delta U = -W$: its internal energy, and its temperature,
fall.

## Try it

1. A gas takes in 800 J of heat and does 300 J of work. Find $\Delta U$.
2. A gas expands by 0.01 m³ at a steady 50 kPa. How much work does it do?
3. Why does a bicycle pump get warm?
4. Why does gas cool as it escapes quickly from an airlock?

??? note "Answers"
    1. $800 - 300 = 500$ J.
    2. $50{,}000 \times 0.01 = 500$ J.
    3. Squeezing the air does work on it; with little time for heat to escape, its internal energy and temperature rise.
    4. It expands and does work pushing on the gas around it, with almost no heat flowing in, so its internal energy
       falls.

## Common mistake

**Sign muddles.** In $\Delta U = Q - W$, $W$ is work done *by* the gas. Work done *on* the gas (squeezing it) counts as
negative $W$ and raises $U$.

## Where it leads

- Back: [A heating budget](../level-7/06-a-heating-budget.md) · Next: [The second law](02-the-second-law.md)
- [Level 8 page](index.md) · [Heat and matter topic page](../index.md)
- The energy idea behind it: [Nothing is lost](../../energy/level-3/01-nothing-is-lost.md).
