---
title: "Could a magnet shield astronauts?"
---

# Could a magnet shield astronauts?

*Electricity and magnetism · level 8, lesson 6 of 6*

## A question to start

Earth's field turns aside most charged particles from space. On the way to Mars, astronauts have no such shield. Could a
spacecraft carry its own magnet?

## The idea

A magnet turns a particle only if the particle's circle is **smaller** than the region of field it crosses. The radius is
$r = p/(qB)$, and the fast particles from space move close to the speed of light, so we need the **relativistic**
momentum. For a proton with kinetic energy $K$, in MeV:

$$pc = \sqrt{K^2 + 2Kmc^2}, \qquad mc^2 = 938 \text{ MeV}.$$

A handy form of the radius, for a proton: $r = \dfrac{p \text{ (in GeV/}c)}{0.3\,B \text{ (in T)}}$ metres.

| Proton | Momentum | Radius in a 1 T field |
| --- | --- | --- |
| 100 MeV, from a solar storm | 0.44 GeV/$c$ | about 1.5 m |
| 1 GeV, a typical cosmic ray | 1.70 GeV/$c$ | about 5.7 m |
| 10 GeV, a fast cosmic ray | 10.9 GeV/$c$ | about 36 m |

So a 1 T field filling a few metres around a crew cabin could turn aside many solar storm protons, but not the faster
cosmic rays. Making a 1 T field over metres needs huge superconducting coils, kept very cold, with a large mass of their
own.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A crew cabin in the middle of a shaded field region. A slow proton curves sharply and is turned away. A fast proton curves only slightly and passes through to the cabin.">
  <circle cx="180" cy="70" r="60" fill="#5aa0d8" opacity=".2" stroke="#5aa0d8"/>
  <rect x="165" y="55" width="30" height="30" fill="#cfc8bf" stroke="currentColor"/>
  <path d="M10 40 L120 40 Q150 40 145 15 L140 0" fill="none" stroke="#2ca02c" stroke-width="2"/>
  <path d="M10 95 L120 95 Q150 92 168 80" fill="none" stroke="#d86a3a" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="10" y="32">slower proton: turned away</text><text x="10" y="112">fast cosmic ray: gets through</text><text x="215" y="135">field region</text></g>
</svg>
</div>

## Worked examples

**1. A solar storm proton.** $K = 100$ MeV: $pc = \sqrt{100^2 + 2 \times 100 \times 938} = \sqrt{197{,}600} = 445$ MeV.
$r = 0.445/(0.3 \times 1) = 1.5$ m.

**2. A cosmic ray.** $K = 1{,}000$ MeV: $pc = \sqrt{10^6 + 1.876\times10^6} = 1{,}696$ MeV, so $r = 1.696/0.3 = 5.7$ m.

**3. Earth's shield.** The same 1 GeV proton in a 30 µT field: $r = 1.696/(0.3 \times 3\times10^{-5}) = 1.9\times10^5$ m,
190 km. Small next to Earth's field, which reaches tens of thousands of kilometres out.

## Try it

1. Why must we use relativistic momentum for cosmic rays?
2. Find the radius of a 100 MeV proton in a 3 T field.
3. What field would bend a 1 GeV proton in a 2 m circle?
4. Why do most plans for protecting crews use thick material, like water, instead of magnets?

??? note "Answers"
    1. They move close to the speed of light, where $p = mv$ is far too small.
    2. $0.445/(0.3 \times 3) = 0.49$ m.
    3. $B = 1.696/(0.3 \times 2) = 2.8$ T.
    4. A field strong and wide enough is very hard to build and power; material shielding is simpler, and also stops
       neutral radiation that a magnet cannot turn.

## Common mistake

**"A magnet stops all radiation."** It turns only **charged** particles. Gamma rays and neutrons pass straight through
any magnetic field.

## Where it leads

- Back: [How Mars lost its air](05-how-mars-lost-its-air.md) · [Level 8 page](index.md) ·
  [Electricity and magnetism topic page](../index.md)
- Radiation and how to stop it: [Radiation and the atom](../../radiation/index.md). Momentum near the speed of light:
  [Space and time](../../spacetime/index.md).
