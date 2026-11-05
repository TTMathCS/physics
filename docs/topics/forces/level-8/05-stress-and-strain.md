---
title: "Stress and strain"
---

# Stress and strain

*Forces and motion · level 8, lesson 5 of 6*

## A question to start

A crane on Mars lifts a 2,000 kg module on a steel cable. How thick must the cable be? And how much will it stretch?

## The idea

A force on a solid squashes or stretches it. To compare materials and sizes fairly, engineers use:

- **Stress**, force per unit area: $\sigma = F/A$, in pascals (Pa), or MPa (a million pascals).
- **Strain**, the fractional change in length: $\varepsilon = \Delta L / L$, with no units.
- **Young's modulus**, the stiffness of the material: $E = \sigma/\varepsilon$, in Pa. It is Hooke's law for a
  material, not just one spring.

Below a material's **yield strength**, it springs back when unloaded. Above it, it deforms for good; at the
**ultimate strength**, it breaks. Engineers keep working stresses well below the yield strength, dividing it by a
**safety factor**.

| Material (typical values) | Young's modulus $E$ | Yield strength |
| --- | --- | --- |
| Structural steel | 200 GPa | 250 to 350 MPa |
| Aluminium alloy (6061-T6) | 69 GPa | about 275 MPa |
| Concrete (in compression) | about 30 GPa | 20 to 40 MPa (crushing) |
| Nylon (solid) | 2 to 4 GPa | 50 to 80 MPa |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 190" role="img" aria-label="A stress-strain graph. A straight line rises steeply from zero, the elastic region, whose slope is Young's modulus, to the yield point, then curves over to a peak, the ultimate strength, and ends where the material breaks.">
  <line x1="50" y1="165" x2="310" y2="165" stroke="currentColor"/><line x1="50" y1="165" x2="50" y2="15" stroke="currentColor"/>
  <path d="M50 165 L95 60 Q140 40 200 32 Q250 30 280 55" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="95" cy="60" r="4" fill="#5aa0d8"/><circle cx="220" cy="31" r="4" fill="#d86a3a"/><path d="M280 55 l6 -4 l-2 8 z" fill="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="150" y="182">strain ε</text><text x="5" y="90">stress σ</text>
  <text x="58" y="125">slope E</text><text x="98" y="78">yield</text><text x="205" y="22">ultimate</text><text x="270" y="72">breaks</text></g>
</svg>
</div>

Mars changes the loads, not the materials. A cable holding a mass $m$ still needs to carry $mg$, but $g$ is 0.38 of
Earth's, so the same cable can hold 2.6 times as much.

## Worked examples

**1. The crane cable.** Load on Mars: $2000 \times 3.71 = 7{,}420$ N. Steel with yield 300 MPa and a safety factor of
5: allowed stress 60 MPa. Area $= 7420 / 60\times10^6 = 1.24\times10^{-4}$ m², a diameter of 12.6 mm. On Earth it
would need $19{,}600$ N, area $3.27\times10^{-4}$ m², diameter 20.4 mm.

**2. How much it stretches.** 30 m of that cable on Mars: $\varepsilon = \sigma / E = 60\times10^6 / 200\times10^9 =
3\times10^{-4}$. $\Delta L = 30 \times 3\times10^{-4} = 9$ mm.

**3. A column.** A concrete column of 0.04 m² carries 400 kN. Stress $= 10$ MPa, safe for concrete of 30 MPa with a
safety factor of 3.

## Try it

1. A 5 mm-diameter steel rod carries 2,000 N. Find the stress.
2. Find its strain, with $E = 200$ GPa.
3. If the rod is 2 m long, how much does it stretch?
4. An aluminium strut has a working stress limit of 90 MPa. What area does it need to carry 18 kN?

??? note "Answers"
    1. $A = \pi \times 0.0025^2 = 1.96\times10^{-5}$ m². $\sigma = 2000 / 1.96\times10^{-5} = 102$ MPa.
    2. $102\times10^6 / 200\times10^9 = 5.1\times10^{-4}$.
    3. $2 \times 5.1\times10^{-4} = 1.0$ mm.
    4. $18{,}000 / 90\times10^6 = 2\times10^{-4}$ m², which is 2 cm².

## Common mistake

**Confusing stiffness and strength.** Young's modulus says how much a material stretches under a stress; the yield
strength says how much stress it can take. Glass is stiff but brittle; nylon is weak and stretchy.

## Where it leads

- Back: [Angular momentum](04-angular-momentum.md) · Next: [Building under 0.38 g](06-building-under-0-38-g.md)
- [Level 8 page](index.md) · [Forces and motion topic page](../index.md)
- Springs, the simple case: [Springs that measure force](../level-3/05-springs.md).
