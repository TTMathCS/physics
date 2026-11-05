---
title: "The Reynolds number"
---

# The Reynolds number

*Air and fluids · level 8, lesson 1 of 6*

## A question to start

A bee and an airliner both fly, but the air feels very different to each: to the bee it is thick and sticky, to the
airliner thin and slippery. On Mars, even a helicopter rotor feels the air as sticky. How can we put a number on that?

## The idea

A moving fluid has two kinds of force inside it. **Inertia** keeps each bit of fluid moving; **viscosity**, the fluid's
internal friction, drags neighbouring bits together. Their ratio is the **Reynolds number**:

$$Re = \frac{\rho v L}{\mu} = \frac{v L}{\nu},$$

where $L$ is a size (a wing's width, a pipe's diameter), $\mu$ the **viscosity** in Pa s, and $\nu = \mu/\rho$ the
**kinematic viscosity**.

- **Small $Re$:** viscosity wins. The flow is smooth and syrupy; drag is relatively large.
- **Large $Re$:** inertia wins. Flow tends to break into eddies; wings work well.

| Air at the ground | Mars | Earth |
| --- | --- | --- |
| Density $\rho$ | 0.016 kg/m³ | 1.217 kg/m³ |
| Viscosity $\mu$ | $1.1\times10^{-5}$ Pa s (carbon dioxide, 217 K) | about $1.8\times10^{-5}$ Pa s |
| Kinematic viscosity $\nu$ | $6.8\times10^{-4}$ m²/s | $1.5\times10^{-5}$ m²/s |

Mars air has about the same viscosity as Earth air, but 75 times less density. So its kinematic viscosity is about **46
times** bigger, and every Reynolds number is about 46 times smaller for the same speed and size.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A Reynolds number scale, squeezed so that each step is ten times the last. Ingenuity's blade on Mars sits at about twenty thousand, below a pigeon's wing at about a hundred thousand. The same blade on Earth would sit at about a million.">
  <line x1="20" y1="70" x2="310" y2="70" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="40" y1="65" x2="40" y2="75"/><line x1="105" y1="65" x2="105" y2="75"/><line x1="170" y1="65" x2="170" y2="75"/><line x1="235" y1="65" x2="235" y2="75"/><line x1="300" y1="65" x2="300" y2="75"/></g>
  <g fill="#d86a3a"><circle cx="192" cy="70" r="5"/></g><circle cx="235" cy="70" r="5" fill="#cfc8bf" stroke="currentColor"/><circle cx="300" cy="70" r="5" fill="#5aa0d8"/>
  <g font-size="10" fill="currentColor" text-anchor="middle"><text x="40" y="90">100</text><text x="105" y="90">1,000</text><text x="170" y="90">10,000</text><text x="235" y="90">100,000</text><text x="300" y="90">1 million</text>
  <text x="185" y="50">blade on Mars</text><text x="235" y="106">pigeon</text><text x="268" y="30">same blade on Earth</text></g>
</svg>
</div>

## Worked examples

**1. Ingenuity's blade tip.** Speed 151 m/s; suppose the blade is 0.1 m wide.
Mars: $Re = 0.016 \times 151 \times 0.1/(1.1\times10^{-5}) = 22{,}000$.
Earth: $1.217 \times 151 \times 0.1/(1.8\times10^{-5}) = 1.0\times10^6$.

**2. A pigeon's wing.** 15 m/s, 0.1 m wide, on Earth: $Re = 1.217 \times 15 \times 0.1/(1.8\times10^{-5}) = 100{,}000$.
Ingenuity's blades, moving ten times faster, worked at a fifth of a pigeon's Reynolds number.

**3. A dust grain** 3 µm across falling at 1 cm/s on Mars: $Re = 0.01 \times 3\times10^{-6}/(6.8\times10^{-4}) \approx
4\times10^{-5}$. Pure syrup.

## Try it

1. What does a small Reynolds number tell you about a flow?
2. Find $Re$ for a 2 m wide car at 30 m/s on Earth.
3. Find $Re$ for a 0.5 m wide rover mast in a 10 m/s Mars wind.
4. Why did Ingenuity's blades work at such a low Reynolds number, though they moved so fast?

??? note "Answers"
    1. Viscosity matters a lot: the flow is smooth and drag is relatively large.
    2. $1.217 \times 30 \times 2/(1.8\times10^{-5}) \approx 4\times10^6$.
    3. $0.016 \times 10 \times 0.5/(1.1\times10^{-5}) \approx 7{,}300$.
    4. Mars air's density is so low that its kinematic viscosity is about 46 times Earth air's.

## Common mistake

**"Thin air has low viscosity."** Viscosity hardly depends on density. Mars air is as viscous as Earth air; it is the
low density, and so the low inertia, that makes viscosity matter more.

## Where it leads

- Back: [Dust devils](../level-7/06-dust-devils.md) · Next: [Laminar and turbulent](02-laminar-and-turbulent.md)
- [Level 8 page](index.md) · [Air and fluids topic page](../index.md)
- The viscosities: the [NIST fluid properties](https://webbook.nist.gov/chemistry/fluid/). The densities: NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
