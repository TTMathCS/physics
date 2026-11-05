---
title: "Fission and fusion"
---

# Fission and fusion

*Radiation and the atom · level 8, lesson 3 of 6*

## A question to start

A reactor gets energy by splitting uranium nuclei. The Sun gets energy by joining hydrogen nuclei. How can splitting
and joining both release energy?

## The idea

Look at the binding energy curve. Any change that moves nuclei **towards iron**, where they are most tightly bound,
releases energy.

- **Fission.** A heavy nucleus like uranium-235 (7.59 MeV per nucleon) splits into two middle-sized pieces, which are
  more tightly bound, around 8.5 MeV per nucleon. The difference is released: about 200 MeV per fission.
- **Fusion.** Light nuclei join into a heavier one. In the Sun, four hydrogen nuclei end up as one helium-4 nucleus.
  Helium-4 is far more tightly bound than hydrogen, which has no binding energy at all.

Both release energy because the products sit higher up the curve. Nothing past iron gains energy by fusing, and
nothing lighter than iron gains energy by splitting.

| Energy from 1 kg of fuel | Mass turned into energy | Energy |
| --- | --- | --- |
| Fission of uranium-235 | about 0.09% | about $8 \times 10^{13}$ J |
| Fusion of hydrogen into helium | about 0.7% | about $6 \times 10^{14}$ J |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="The binding energy curve again, with two arrows pointing up the curve towards iron: fusion from the light end on the left, fission from the heavy end on the right.">
  <line x1="40" y1="140" x2="320" y2="140" stroke="currentColor"/><line x1="40" y1="140" x2="40" y2="10" stroke="currentColor"/>
  <path d="M41 140 L44 43 C50 34 60 27 80 22 C92 20 98 19 103 19 C170 22 240 30 306 36" fill="none" stroke="#cfc8bf" stroke-width="3"/>
  <g stroke="#d86a3a" stroke-width="3" fill="none"><path d="M52 100 Q60 60 88 40"/><path d="M290 55 Q220 50 170 40"/></g>
  <g fill="#d86a3a"><path d="M84 36 l10 0 l-6 9 z"/><path d="M172 34 l-9 7 l10 3 z"/></g>
  <circle cx="103" cy="19" r="4" fill="#5aa0d8" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="62" y="110">fusion</text><text x="240" y="75">fission</text><text x="112" y="14">iron: most tightly bound</text><text x="240" y="155">mass number</text></g>
</svg>
</div>

## Worked examples

**1. One fission.** Suppose uranium-235 and a neutron (236 nucleons) split into pieces averaging 8.5 MeV per nucleon.
Energy released $\approx 236 \times (8.5 - 7.59) \approx 215$ MeV, close to the measured 200 MeV.

**2. Fusion in the Sun.** Four hydrogen atoms: $4 \times 1.007825 = 4.031300$ u. One helium-4 atom: 4.002603 u.
Defect: 0.028697 u, $\times 931.5 = 26.7$ MeV. That is $0.028697 / 4.0313 = 0.71\%$ of the mass.

**3. Per kilogram.** Fusion: $0.0071 \times 9.0\times10^{16} = 6.4\times10^{14}$ J. Fission:
$200 \text{ MeV} / 235 \text{ u}$, which is 0.09% of the mass, $8.2\times10^{13}$ J. Kilogram for kilogram, fusion gives
about eight times as much.

## Try it

1. Why does fusing helium into heavier nuclei release energy, but fusing iron does not?
2. Find the energy from one fusion releasing 0.0189 u.
3. Why do fission pieces have more binding energy per nucleon than uranium?
4. What share of its mass does a kilogram of uranium-235 lose in fission?

??? note "Answers"
    1. Below iron, heavier nuclei are more tightly bound, so fusing moves up the curve. Beyond iron, they are less
       tightly bound.
    2. $0.0189 \times 931.5 \approx 17.6$ MeV.
    3. They are nearer iron on the binding energy curve.
    4. About 0.09%.

## Common mistake

**"Fission and fusion are opposites, so one must take in energy."** Both release energy, from opposite ends of the
curve, because both make nuclei more tightly bound.

## Where it leads

- Back: [Binding energy](02-binding-energy.md) · Next: [The decay law](04-the-decay-law.md)
- [Level 8 page](index.md) · [Radiation and the atom topic page](../index.md)
- Fission at work: [Fission](../../energy/level-8/02-fission.md) and
  [A reactor for Mars](../../energy/level-8/03-a-reactor-for-mars.md). The masses: NIST's isotope tables for
  [hydrogen](https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=H),
  [helium](https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=He) and
  [uranium](https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=U).
