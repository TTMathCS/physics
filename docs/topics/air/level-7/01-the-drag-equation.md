---
title: "The drag equation"
---

# The drag equation

*Air and fluids · level 7, lesson 1 of 6*

## A question to start

Cycling into a headwind is hard work, and it gets much harder the faster you go. How does air resistance grow with
speed?

## The idea

An object moving through a fluid has to shove the fluid aside, and the fluid pushes back. This force is **drag**. For
most everyday speeds it follows the **drag equation**:

$$F_D = \tfrac12 \rho v^2 C_D A,$$

where $\rho$ is the fluid's density, $v$ the speed, $A$ the front-on area, and $C_D$ the **drag coefficient**, a number
that depends on the shape.

| Shape | $C_D$, about |
| --- | --- |
| Flat plate, face on | 1.2 |
| Sphere | 0.5 |
| Modern car | 0.3 |
| Streamlined teardrop | 0.04 |

The power needed to push against drag is force times speed: $P = F_D v = \tfrac12 \rho v^3 C_D A$. Double your speed and
you need **eight times** the power.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A graph of drag force against speed. The curve rises slowly at first and then steeply, like a parabola: double the speed gives four times the drag.">
  <line x1="40" y1="120" x2="310" y2="120" stroke="currentColor"/><line x1="40" y1="120" x2="40" y2="10" stroke="currentColor"/>
  <polyline points="40,120 70,119 100,115 130,108 160,99 190,87 220,73 250,56 280,36 300,21" fill="none" stroke="#d86a3a" stroke-width="3"/>
  <g stroke="currentColor" stroke-dasharray="3 3"><line x1="160" y1="120" x2="160" y2="99"/><line x1="280" y1="120" x2="280" y2="36"/></g>
  <g font-size="11" fill="currentColor"><text x="140" y="135">v</text><text x="270" y="135">2v</text><text x="200" y="110">drag F</text><text x="210" y="30">4 times F</text><text x="45" y="15">drag</text></g>
</svg>
</div>

| A cyclist at 10 m/s, $C_D A = 0.3$ m² | Mars | Earth |
| --- | --- | --- |
| Air density | 0.016 kg/m³ | 1.217 kg/m³ |
| Drag | 0.24 N | 18 N |
| Power against drag | 2.4 W | 180 W |

## Worked examples

**1. The cyclist on Earth.** $\tfrac12 \times 1.217 \times 10^2 \times 0.3 = 18$ N; power $18 \times 10 = 180$ W.

**2. A car at 30 m/s.** $C_D = 0.3$, $A = 2.2$ m²: $F_D = \tfrac12 \times 1.217 \times 900 \times 0.66 = 361$ N. Power
against drag: $361 \times 30 \approx 10.8$ kW.

**3. A rover on Mars,** crawling at 0.04 m/s with $C_D A = 3$ m²: $\tfrac12 \times 0.016 \times 0.0016 \times 3 = 3.8\times10^{-5}$
N. Drag does not matter to a rover; the ground does.

## Try it

1. How does drag change if the speed triples?
2. Find the drag on a sphere 0.5 m across moving at 20 m/s through Earth air.
3. The car above speeds up from 30 to 36 m/s. By what factor does the power against drag rise?
4. Why does a Mars rover not need to be streamlined?

??? note "Answers"
    1. It becomes $3^2 = 9$ times bigger.
    2. $A = \pi \times 0.25^2 = 0.196$ m²; $F_D = \tfrac12 \times 1.217 \times 400 \times 0.5 \times 0.196 = 24$ N.
    3. $(36/30)^3 = 1.73$.
    4. It moves very slowly, and Mars air is thin, so its drag is tiny.

## Common mistake

**"Drag is in proportion to speed."** At everyday speeds it goes with speed *squared*, and the power against it with speed
*cubed*.

## Where it leads

- Back: [Propellers and rotors](../level-6/06-propellers-and-rotors.md) · Next: [Terminal velocity](02-terminal-velocity.md)
- [Level 7 page](index.md) · [Air and fluids topic page](../index.md)
- The air densities: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
