---
title: "The sievert"
---

# The sievert

*Radiation and the atom · level 6, lesson 2 of 6*

## A question to start

One milligray of alpha radiation and one milligray of gamma rays put the same energy into the body. Do they do the same
harm?

## The idea

No. Alpha particles pack their energy into a short, dense track and damage cells far more. So the absorbed dose is
multiplied by a **radiation weighting factor** for each kind of radiation. The result is the **equivalent dose**, in
**sieverts** (Sv):

$$\text{equivalent dose (Sv)} = \text{absorbed dose (Gy)} \times \text{weighting factor}.$$

Canada's radiation rules use these factors:

| Radiation | Weighting factor |
| --- | --- |
| Gamma rays and X-rays | 1 |
| Electrons (beta) | 1 |
| Protons | 2 |
| Alpha particles and heavy nuclei | 20 |
| Neutrons | depends on their energy |

A second step weights each organ by how sensitive it is, giving the **effective dose**, also in sieverts. That is the
number usually quoted. Everyday doses are given in millisieverts (mSv).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="Bars showing the dose in millisieverts from 1 milligray of each kind of radiation: gamma 1, protons 2, alpha 20.">
  <g fill="#5aa0d8"><rect x="70" y="20" width="12" height="20"/><rect x="70" y="55" width="25" height="20" fill="#eea66f"/><rect x="70" y="90" width="250" height="20" fill="#d86a3a"/></g>
  <g font-size="11" fill="currentColor"><text x="5" y="34">gamma</text><text x="5" y="69">protons</text><text x="5" y="104">alpha</text><text x="90" y="34">1 mSv</text><text x="103" y="69">2 mSv</text><text x="250" y="125">20 mSv</text></g>
</svg>
</div>

Each bar is the dose from 1 mGy of that radiation.

## Worked examples

**1. Gamma.** 3 mGy of gamma rays: $3 \times 1 = 3$ mSv.

**2. Alpha.** 3 mGy of alpha: $3 \times 20 = 60$ mSv, twenty times the harm.

**3. A mix in space.** Suppose a crew member absorbs 0.4 mGy a day from protons and 0.05 mGy a day from heavy nuclei.
$0.4 \times 2 + 0.05 \times 20 = 0.8 + 1.0 = 1.8$ mSv a day. The heavy nuclei give only a small share of the energy but
more than half of the harm.

## Try it

1. What is the unit of equivalent dose?
2. Find the equivalent dose from 5 mGy of beta.
3. Find the equivalent dose from 0.2 mGy of alpha.
4. Why does alpha have a weighting factor of 20?

??? note "Answers"
    1. The sievert, Sv.
    2. $5 \times 1 = 5$ mSv.
    3. $0.2 \times 20 = 4$ mSv.
    4. It puts its energy into a short, dense track, so it damages cells far more than the same energy of gamma rays.

## Common mistake

**Mixing up gray and sievert.** The gray measures energy per kilogram. The sievert measures the harm that energy is
likely to do. For gamma rays they come out the same number; for alpha, not at all.

## Where it leads

- Back: [Absorbed dose](01-absorbed-dose.md) · Next: [Everyday doses](03-everyday-doses.md)
- [Level 6 page](index.md) · [Radiation and the atom topic page](../index.md)
- The factors: Canada's [Radiation Protection Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/FullText.html),
  Schedule 2. The idea: the CNSC on [radiation doses](https://www.cnsc-ccsn.gc.ca/eng/nuclear-safety-security/educational-resources/radiation/radiation-doses/).
