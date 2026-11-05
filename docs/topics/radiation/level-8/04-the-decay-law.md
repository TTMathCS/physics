---
title: "The decay law"
---

# The decay law

*Radiation and the atom · level 8, lesson 4 of 6*

## A question to start

Nobody can say when one particular radioactive nucleus will decay. Yet a gram of plutonium-238 gives out heat so
steadily that a rover can run on it for years. How can random events be so predictable?

## The idea

Each unstable nucleus has the same chance of decaying in each second, whatever its age. With huge numbers of nuclei,
the same **share** decays in each equal stretch of time. The time for half of them to decay is the **half-life** $T$:

$$N = N_0 \left(\tfrac12\right)^{t/T} = N_0\, e^{-\lambda t}, \qquad \lambda = \frac{\ln 2}{T} = \frac{0.693}{T}.$$

$\lambda$ is the **decay constant**: the chance that one nucleus decays in a second. The **activity** $A$, the number
of decays each second, is

$$A = \lambda N.$$

Activity is measured in **becquerels** (Bq): one decay a second.

| Isotope | Decays to | Half-life |
| --- | --- | --- |
| Carbon-14 | nitrogen-14 | 5,730 years |
| Plutonium-238 | uranium-234 | 88 years |
| Uranium-235 | lead-207 (in steps) | 704 million years |
| Potassium-40 | calcium-40 or argon-40 | 1.25 billion years |
| Uranium-238 | lead-206 (in steps) | 4.5 billion years |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Bars for the nuclei left after 0, 1, 2, 3 and 4 half-lives: 1, a half, a quarter, an eighth and a sixteenth.">
  <line x1="30" y1="125" x2="320" y2="125" stroke="currentColor"/>
  <g fill="#d86a3a"><rect x="45" y="15" width="40" height="110"/><rect x="100" y="70" width="40" height="55"/><rect x="155" y="97.5" width="40" height="27.5"/><rect x="210" y="111.25" width="40" height="13.75"/><rect x="265" y="118.1" width="40" height="6.9"/></g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="65" y="140">0</text><text x="120" y="140">1</text><text x="175" y="140">2</text><text x="230" y="140">3</text><text x="285" y="140">4</text>
  <text x="120" y="64">1/2</text><text x="175" y="91">1/4</text><text x="230" y="105">1/8</text><text x="285" y="112">1/16</text><text x="230" y="25">half-lives gone by</text></g>
</svg>
</div>

## Worked examples

**1. A rover's heat.** Plutonium-238 after 14 years: $(\tfrac12)^{14/88} = 0.90$. The heat is still 90% of the start.

**2. Activity of a gram.** $N = 6.02\times10^{23} / 238 = 2.53\times10^{21}$ nuclei.
$T = 88 \times 3.156\times10^7 = 2.78\times10^9$ s, so $\lambda = 0.693 / 2.78\times10^9 = 2.5\times10^{-10}$ per s.
$A = 2.5\times10^{-10} \times 2.53\times10^{21} = 6.3\times10^{11}$ Bq.

**3. Its power.** Suppose each decay releases about 5.6 MeV, $9.0\times10^{-13}$ J. Power
$= 6.3\times10^{11} \times 9.0\times10^{-13} \approx 0.57$ W per gram.

## Try it

1. What share of carbon-14 is left after 11,460 years?
2. Find the decay constant of carbon-14, per year.
3. How long until plutonium-238 gives out a quarter of its starting heat?
4. Why does a sample with a short half-life have a high activity?

??? note "Answers"
    1. Two half-lives: a quarter.
    2. $0.693 / 5{,}730 = 1.21\times10^{-4}$ per year.
    3. Two half-lives: 176 years.
    4. $\lambda = 0.693/T$ is large, so $A = \lambda N$ is large for the same number of nuclei.

## Common mistake

**"After two half-lives, it is all gone."** After one half-life, half is left; after two, a quarter; after ten, about a
thousandth. It never quite reaches zero.

## Where it leads

- Back: [Fission and fusion](03-fission-and-fusion.md) · Next: [Dating Mars rocks](05-dating-mars-rocks.md)
- [Level 8 page](index.md) · [Radiation and the atom topic page](../index.md)
- The half-lives: the USGS on [radiometric dating](https://pubs.usgs.gov/gip/geotime/radiometric.html). Plutonium:
  [Radioisotope power](../../energy/level-8/01-radioisotope-power.md). The same law for shields:
  [Half-value thickness](../level-7/02-half-value-thickness.md).
