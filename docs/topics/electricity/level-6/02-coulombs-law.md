---
title: "Coulomb's law"
---

# Coulomb's law

*Electricity and magnetism · level 6, lesson 2 of 6*

## A question to start

Gravity pulls you down to the ground, yet a tiny balloon's charge can lift a hair against it. How strong is the force
between charges?

## The idea

Two point charges $q_1$ and $q_2$ a distance $r$ apart push or pull with a force

$$F = \frac{k\,q_1 q_2}{r^2}, \qquad k = 8.99 \times 10^9 \text{ N m}^2/\text{C}^2.$$

This is **Coulomb's law**. Like charges repel, unlike attract. Like gravity, it is an **inverse square law**: double
the distance and the force falls to a quarter.

The field of a single point charge follows from it: $E = kq/r^2$.

Electric forces are enormous compared with gravity. Between a proton and an electron, the electric pull is about
$10^{39}$ times their gravitational pull.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A graph of force against distance falling steeply: at distance 1 the force is F, at 2 it is a quarter, at 3 it is a ninth.">
  <line x1="40" y1="125" x2="310" y2="125" stroke="currentColor"/><line x1="40" y1="125" x2="40" y2="10" stroke="currentColor"/>
  <path d="M70 15 Q100 95 130 97 Q200 112 300 120" fill="none" stroke="#5aa0d8" stroke-width="3"/>
  <g fill="#d86a3a"><circle cx="70" cy="15" r="4"/><circle cx="130" cy="97" r="4"/><circle cx="190" cy="113" r="4"/></g>
  <g font-size="11" fill="currentColor"><text x="78" y="20">F at r</text><text x="138" y="90">F/4 at 2r</text><text x="198" y="106">F/9 at 3r</text><text x="260" y="140">distance</text></g>
</svg>
</div>

## Worked examples

**1. Two small charges.** $q_1 = q_2 = 1 \times 10^{-6}$ C, 10 cm apart:
$F = 8.99\times10^9 \times 10^{-12}/0.01 = 0.90$ N.

**2. Inside hydrogen.** A proton and an electron, $1.60\times10^{-19}$ C each, $5.29\times10^{-11}$ m apart:
$F = 8.99\times10^9 \times (1.60\times10^{-19})^2/(5.29\times10^{-11})^2 = 8.2\times10^{-8}$ N.

**3. Further away.** Move the two small charges to 30 cm: three times as far, so a ninth of the force, 0.10 N.

## Try it

1. Find the force between charges of $3\times10^{-6}$ C and $-2\times10^{-6}$ C, 0.2 m apart. Is it a push or a pull?
2. What happens to the force if the distance is halved?
3. Find the field 0.5 m from a charge of $1\times10^{-6}$ C.
4. Why do we notice gravity in everyday life far more than electric forces, if electric forces are so strong?

??? note "Answers"
    1. $8.99\times10^9 \times 6\times10^{-12}/0.04 = 1.35$ N; a pull, since the charges are unlike.
    2. It becomes four times as big.
    3. $8.99\times10^9 \times 10^{-6}/0.25 = 36{,}000$ N/C.
    4. Most things have equal positive and negative charge, so their electric forces cancel. Gravity only adds up.

## Common mistake

**Forgetting to square the distance.** $r$ is squared: 0.1 m gives $r^2 = 0.01$ m², not 0.1.

## Where it leads

- Back: [Electric fields](01-electric-fields.md) · Next: [Magnetic fields](03-magnetic-fields.md)
- [Level 6 page](index.md) · [Electricity and magnetism topic page](../index.md)
- The other inverse square law: [Gravity and orbits](../../gravity/index.md).
