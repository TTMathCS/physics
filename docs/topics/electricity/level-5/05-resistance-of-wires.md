---
title: "Resistance of wires"
---

# Resistance of wires

*Electricity and magnetism · level 5, lesson 5 of 6*

## A question to start

Power cables that carry electricity across a country are thick, and the cable to an electric stove is thicker than
the one to a lamp. Why does thickness matter?

## The idea

The resistance of a wire depends on its length $L$, its cross-section area $A$ and what it is made of:

$$R = \frac{\rho L}{A},$$

where $\rho$ (rho) is the **resistivity** of the material, in ohm metres ($\Omega$ m).

| Material | Resistivity at 20 °C |
| --- | --- |
| Silver | $1.59 \times 10^{-8}\ \Omega$ m |
| Copper | $1.68 \times 10^{-8}\ \Omega$ m |
| Aluminium | $2.65 \times 10^{-8}\ \Omega$ m |
| Nichrome (heater wire) | about $1.1 \times 10^{-6}\ \Omega$ m |

Double the length, double the resistance. Double the area, half the resistance.

A wire carrying current $I$ turns energy into heat at a rate $P = I^2R$. So a thick wire, with a small $R$, wastes
less and stays cooler.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="A length of wire drawn as a cylinder, with its length L along it and its cross-section area A shown at one end.">
  <rect x="60" y="45" width="210" height="30" fill="#eea66f" stroke="currentColor"/>
  <ellipse cx="270" cy="60" rx="8" ry="15" fill="#d86a3a" stroke="currentColor"/><ellipse cx="60" cy="60" rx="8" ry="15" fill="#eea66f" stroke="currentColor"/>
  <path d="M60 95 L270 95" stroke="currentColor"/><path d="M60 90 L60 100 M270 90 L270 100" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="160" y="112">L</text><text x="282" y="64">A</text><text x="120" y="35">resistivity ρ</text></g>
</svg>
</div>

## Worked examples

**1. A house wire.** 10 m of copper with $A = 1.5$ mm² $= 1.5 \times 10^{-6}$ m²:
$R = 1.68\times10^{-8} \times 10/1.5\times10^{-6} = 0.11\ \Omega$.

**2. Heat in the wire.** At 15 A: $P = 15^2 \times 0.11 = 25$ W, spread along 10 m.

**3. Nichrome.** 1 m of nichrome with $A = 0.1$ mm²: $R = 1.1\times10^{-6} \times 1/10^{-7} = 11\ \Omega$. Good for a
heater, bad for a cable.

## Try it

1. Find the resistance of 100 m of copper wire with $A = 2.5$ mm².
2. An aluminium wire has the same size. Is its resistance larger or smaller?
3. A wire is cut in half. What happens to the resistance of each half?
4. Why does a thin extension cord get warm when it runs a heater?

??? note "Answers"
    1. $1.68\times10^{-8} \times 100/2.5\times10^{-6} = 0.67\ \Omega$.
    2. Larger, by $2.65/1.68 = 1.6$ times: $1.06\ \Omega$.
    3. It halves.
    4. Its resistance is high, and a heater draws a big current, so $I^2R$ heats the cord.

## Common mistake

**Forgetting to change mm² to m².** 1 mm² is $10^{-6}$ m², not $10^{-3}$.

## Where it leads

- Back: [Parallel circuits](04-parallel-circuits.md) · Next: [Cold wires on Mars](06-cold-wires-on-mars.md)
- [Level 5 page](index.md) · [Electricity and magnetism topic page](../index.md)
