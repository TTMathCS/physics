---
title: "Generators and transformers"
---

# Generators and transformers

*Electricity and magnetism · level 7, lesson 5 of 6*

## A question to start

Almost all the electricity in the world's power grids is made by spinning something: a turbine turned by steam, water
or wind. What does the spinning do?

## The idea

**A generator** is a motor run backwards. A coil spins in a magnetic field, so the flux through it keeps changing, and
an alternating voltage is induced. For $N$ turns of area $A$ spinning at $\omega$ radians per second in a field $B$,
the peak voltage is

$$\varepsilon_0 = NBA\omega.$$

**A transformer** changes the size of an alternating voltage. An alternating current in the primary coil makes a
changing flux in an iron core, which induces a voltage in the secondary coil:

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}.$$

An ideal transformer wastes no energy, so $V_p I_p = V_s I_s$: step the voltage up and the current goes down.

Power lines run at very high voltage for that reason. A smaller current wastes less energy as heat, since the loss is
$I^2R$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A transformer: a square iron core with a primary coil of few turns on the left and a secondary coil of many turns on the right.">
  <path d="M90 20 L240 20 L240 120 L90 120 Z M115 45 L215 45 L215 95 L115 95 Z" fill="#cfc8bf" fill-rule="evenodd" stroke="currentColor"/>
  <g fill="none" stroke="#d86a3a" stroke-width="3"><path d="M85 50 L120 50 M85 70 L120 70 M85 90 L120 90"/></g>
  <g fill="none" stroke="#5aa0d8" stroke-width="2"><path d="M210 40 L245 40 M210 50 L245 50 M210 60 L245 60 M210 70 L245 70 M210 80 L245 80 M210 90 L245 90 M210 100 L245 100"/></g>
  <g font-size="11" fill="currentColor"><text x="5" y="60">primary:</text><text x="5" y="74">few turns</text><text x="255" y="60">secondary:</text><text x="255" y="74">many turns</text><text x="125" y="135">iron core</text></g>
</svg>
</div>

## Worked examples

**1. A generator.** 500 turns, $B = 0.2$ T, $A = 0.01$ m², spinning 60 times a second ($\omega = 377$ rad/s):
$\varepsilon_0 = 500 \times 0.2 \times 0.01 \times 377 = 377$ V.

**2. A transformer.** 120 V to 12 V needs a turns ratio of 10:1. With 1,000 primary turns, the secondary has 100.

**3. Why high voltage.** Sending 1 MW at 10,000 V needs 100 A. At 100,000 V, only 10 A: a tenth of the current and a
hundredth of the $I^2R$ loss.

## Try it

1. Find the peak voltage of a 200-turn coil of area 0.05 m² spinning at 100 rad/s in a 0.1 T field.
2. A transformer has 400 primary turns and 20 secondary turns. What does it give from 240 V?
3. That transformer delivers 2 A from its secondary. What current does the primary draw?
4. Why does a transformer not work on a steady current from a battery?

??? note "Answers"
    1. $200 \times 0.1 \times 0.05 \times 100 = 100$ V.
    2. $240 \times 20/400 = 12$ V.
    3. Power in = power out: $12 \times 2 = 24$ W, so $24/240 = 0.1$ A.
    4. A steady current makes a steady flux, which induces nothing in the secondary.

## Common mistake

**"A step-up transformer makes extra energy."** It raises the voltage but lowers the current by the same factor. The
power out is never more than the power in.

## Where it leads

- Back: [Electromagnetic induction](04-electromagnetic-induction.md) · Next: [Motors on Mars](06-motors-on-mars.md)
- [Level 7 page](index.md) · [Electricity and magnetism topic page](../index.md)
- Turbines and power stations: [Energy and power](../../energy/index.md).
