---
title: "Balloons on Mars"
---

# Balloons on Mars

*Air and fluids · level 5, lesson 6 of 6*

## A question to start

A helium balloon 2.6 m across can lift 10 kg on Earth. How big would one need to be to lift the same 10 kg on Mars?

## The idea

A balloon floats in air by Archimedes' principle. With volume $V$, the air pushed aside has mass $\rho_\text{air}V$, and
the gas inside has mass $\rho_\text{gas}V$. The **mass it can lift** (the envelope plus the load) is

$$m = (\rho_\text{air} - \rho_\text{gas})\,V.$$

Weight and upthrust both scale with $g$, so $g$ cancels here too. What matters is the density of the air, and Mars air
is very thin.

At the same pressure and temperature, a gas's density is in proportion to the mass of its particles (its molar mass).
Helium is 4.00 g/mol; Earth air 28.97; Mars air 43.49.

| Lifting with helium | Mars | Earth |
| --- | --- | --- |
| Air density | 0.016 kg/m³ | 1.217 kg/m³ |
| Helium at the same pressure and temperature | 0.0015 kg/m³ | 0.17 kg/m³ |
| Mass lifted per m³ | 0.0145 kg | 1.05 kg |
| Volume to lift 10 kg | 690 m³ | 9.5 m³ |
| Width of a round balloon | 11 m | 2.6 m |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Two helium balloons drawn to scale, each lifting a 10 kilogram box. Earth's is small, 2.6 metres across. Mars's is huge, 11 metres across.">
  <circle cx="60" cy="100" r="13" fill="#5aa0d8" stroke="currentColor"/><line x1="60" y1="113" x2="60" y2="125" stroke="currentColor"/><rect x="52" y="125" width="16" height="12" fill="#cfc8bf" stroke="currentColor"/>
  <circle cx="220" cy="62" r="55" fill="#d86a3a" opacity=".7" stroke="currentColor"/><line x1="220" y1="117" x2="220" y2="125" stroke="currentColor"/><rect x="212" y="125" width="16" height="12" fill="#cfc8bf" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="20" y="75">Earth: 2.6 m</text><text x="190" y="66">Mars: 11 m</text><text x="75" y="135">10 kg</text><text x="235" y="135">10 kg</text></g>
</svg>
</div>

## Worked examples

**1. Helium on Mars.** $0.016 \times 4.00/43.49 = 0.00147$ kg/m³. Lift per m³: $0.016 - 0.0015 = 0.0145$ kg.

**2. The volume.** $10/0.0145 = 690$ m³. A sphere: $V = \tfrac{4}{3}\pi r^3$, so $r = (3 \times 690/4\pi)^{1/3} = 5.5$ m,
11 m across.

**3. Earth.** Helium: $1.217 \times 4.00/28.97 = 0.168$ kg/m³. Lift per m³: 1.05 kg. Volume $10/1.05 = 9.5$ m³, $r = 1.3$
m.

## Try it

1. Why does $g$ cancel when you work out the mass a balloon can lift?
2. How many times more volume does a Mars balloon need than an Earth one, for the same load?
3. Hydrogen is 2.02 g/mol. Find its density at Mars's surface, and the lift per m³. Is it much better than helium?
4. A Mars balloon must lift a 2 kg envelope and a 3 kg instrument. What volume of helium does it need?

??? note "Answers"
    1. Both the weight and the upthrust are mass times $g$.
    2. $690/9.5 \approx 73$ times.
    3. $0.016 \times 2.02/43.49 = 0.00074$ kg/m³; lift $0.0153$ kg per m³. Only about 5% better.
    4. $5/0.0145 \approx 345$ m³.

## Common mistake

**"Lighter gravity makes ballooning easy."** The balloon weighs less, but the air's push is smaller in the same
proportion. The thin air is what makes Mars ballooning hard.

## Where it leads

- Back: [What floats](05-what-floats.md) · Next level: [Level 6: Flowing fluids](../level-6/index.md)
- [Level 5 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). Gas density and molar mass:
  [The ideal gas law](../../heat/level-5/06-the-ideal-gas-law.md).
