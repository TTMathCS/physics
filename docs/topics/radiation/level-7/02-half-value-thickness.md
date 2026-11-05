---
title: "Half-value thickness"
---

# Half-value thickness

*Radiation and the atom · level 7, lesson 2 of 6*

## A question to start

A gamma source in a lab needs a lead wall that lets through only a thousandth of its rays. How thick must the wall be?

## The idea

Each layer of the same thickness lets through the same share of a gamma beam. The thickness that lets through half is
the **half-value thickness**, $x_{1/2}$. After a thickness $x$, the share left is

$$\frac{I}{I_0} = \left(\tfrac12\right)^{x / x_{1/2}}.$$

The same law can be written with the **attenuation coefficient** $\mu$: $I = I_0 e^{-\mu x}$, where
$\mu = 0.693 / x_{1/2}$ (0.693 is $\ln 2$).

NIST lists the **mass attenuation coefficient** $\mu/\rho$ for every material. Multiply by the density $\rho$ to get
$\mu$. At 1 MeV:

| Material | $\mu/\rho$ (cm²/g) | Density (g/cm³) | $\mu$ (per cm) | Half-value thickness |
| --- | --- | --- | --- | --- |
| Lead | 0.0710 | 11.35 | 0.806 | 0.86 cm |
| Concrete | 0.0650 | 2.3 | 0.149 | 4.6 cm |
| Water | 0.0707 | 1.00 | 0.0707 | 9.8 cm |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A curve falling from 1 to near 0 as the thickness of lead grows. It drops to a half at 0.86 centimetres and a quarter at 1.72.">
  <line x1="40" y1="130" x2="320" y2="130" stroke="currentColor"/><line x1="40" y1="130" x2="40" y2="10" stroke="currentColor"/>
  <path d="M40 20.0 L60 41.4 L80 58.7 L100 72.6 L120 83.8 L140 92.8 L160 100.0 L180 105.9 L200 110.6 L220 114.3 L240 117.4 L260 119.9 L280 121.8 L300 123.4 L320 124.7" fill="none" stroke="#8e44ad" stroke-width="3"/>
  <g stroke="currentColor" stroke-dasharray="3 3"><line x1="40" y1="75" x2="104" y2="75"/><line x1="104" y1="75" x2="104" y2="130"/><line x1="40" y1="102.5" x2="168" y2="102.5"/><line x1="168" y1="102.5" x2="168" y2="130"/></g>
  <g font-size="10" fill="currentColor"><text x="20" y="24">1</text><text x="12" y="79">1/2</text><text x="12" y="106">1/4</text><text x="88" y="143">0.86 cm</text><text x="152" y="143">1.72 cm</text><text x="240" y="143">lead thickness</text></g>
</svg>
</div>

## Worked examples

**1. Lead's half-value thickness.** $\mu = 0.0710 \times 11.35 = 0.806$ per cm. $x_{1/2} = 0.693 / 0.806 = 0.86$ cm.

**2. A thousandth.** $2^{10} = 1{,}024$, so 10 half-value thicknesses: $10 \times 0.86 = 8.6$ cm of lead, or
$10 \times 4.6 = 46$ cm of concrete.

**3. Five centimetres of lead.** $5 / 0.86 = 5.8$ half-value thicknesses. $(\tfrac12)^{5.8} = 0.018$: about 1.8% gets
through.

## Try it

1. What is the half-value thickness?
2. What share of 1 MeV gamma rays gets through 29.4 cm of water?
3. Find the half-value thickness of a material with $\mu = 0.35$ per cm.
4. How thick a concrete wall cuts 1 MeV gamma rays to a millionth? ($2^{20} \approx 10^6$.)

??? note "Answers"
    1. The thickness that lets through half the radiation.
    2. $29.4 / 9.8 = 3$ halvings: $\tfrac18$.
    3. $0.693 / 0.35 \approx 2.0$ cm.
    4. $20 \times 4.6 = 92$ cm.

## Common mistake

**"Two half-value thicknesses stop it all."** Half plus half is not the whole: each layer halves what is left. Two
layers let through a quarter.

## Where it leads

- Back: [How shields work](01-how-shields-work.md) · Next: [Mass per area](03-mass-per-area.md)
- [Level 7 page](index.md) · [Radiation and the atom topic page](../index.md)
- Sources: NIST's tables for [lead](https://physics.nist.gov/PhysRefData/XrayMassCoef/ElemTab/z82.html),
  [concrete](https://physics.nist.gov/PhysRefData/XrayMassCoef/ComTab/concrete.html) and
  [water](https://physics.nist.gov/PhysRefData/XrayMassCoef/ComTab/water.html). The same halving law for decay:
  [The decay law](../level-8/04-the-decay-law.md).
