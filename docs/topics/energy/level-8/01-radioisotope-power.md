---
title: "Radioisotope power"
---

# Radioisotope power

*Energy and power · level 8, lesson 1 of 6*

## A question to start

Perseverance's power source has no moving parts and needs no sunlight, and it is built to work for 14 years. Where does
its power come from, and why does it fade?

## The idea

The **MMRTG** holds 4.8 kg of plutonium dioxide. Its plutonium-238 nuclei decay one by one, each giving out an alpha
particle, and that energy ends up as heat: about 2,000 W at the start.

The heat is turned into electricity by **thermocouples**. In 1821 Thomas Seebeck found that two different conducting
materials, joined in a loop with their two junctions at different temperatures, make a voltage. The MMRTG has 768 of
them, with the hot junctions against the fuel and the cold ones against the fins.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="A thermocouple. A hot block heated by the fuel sits on top of two legs of different materials. Their bottom ends are joined to cold fins. A wire from the legs runs a lamp.">
  <rect x="90" y="15" width="150" height="30" fill="#d86a3a" opacity=".8"/><rect x="105" y="45" width="30" height="60" fill="#5aa0d8"/>
  <rect x="195" y="45" width="30" height="60" fill="#eea66f"/>
  <rect x="80" y="105" width="70" height="12" fill="#cfc8bf" stroke="currentColor"/><rect x="180" y="105" width="70" height="12" fill="#cfc8bf" stroke="currentColor"/>
  <path d="M115 117 V145 H215 V117" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="165" cy="145" r="8" fill="#eea66f" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="110" y="35">hot: heat from the fuel</text><text x="20" y="80">material A</text><text x="235" y="80">material B</text>
  <text x="255" y="115">cold fins</text><text x="185" y="158">lamp</text></g>
</svg>
</div>

| NASA's MMRTG | Figure |
| --- | --- |
| Heat at the start | about 2,000 W |
| Electricity at launch | about 110 W |
| Efficiency | about 6% |
| Mass | about 45 kg |
| Expected electricity after 17 years | 72 W |
| Half-life of plutonium-238 | 88 years |

The heat fades as the plutonium decays. After a time $t$, the share left is

$$\left(\tfrac12\right)^{t/88\ \text{years}}.$$

The electricity fades faster than that, because the thermocouples slowly wear too.

On Mars the spare 1,890 W of heat is no waste: it keeps the rover warm through the night.

## Worked examples

**1. Heat after 14 years.** $2000 \times 0.5^{14/88} = 2000 \times 0.90 = 1{,}790$ W.

**2. Where does the rest go?** Decay alone would leave $110 \times 0.5^{17/88} = 96$ W after 17 years. NASA expects 72 W.
The gap of 24 W is the thermocouples wearing out.

**3. Power for a city?** A city needing 1 MW would need $10^6/110 \approx 9{,}100$ MMRTGs and 44 tonnes of plutonium
dioxide. Plutonium-238 is made only in small amounts. Radioisotope power suits rovers, not cities.

## Try it

1. What is a half-life?
2. What fraction of plutonium-238 is left after 176 years?
3. An RTG makes 2,000 W of heat at 6% efficiency. What is its electrical power?
4. Why is an MMRTG's low efficiency less of a problem on Mars than it sounds?

??? note "Answers"
    1. The time for half the nuclei in a sample to decay.
    2. 176 years is two half-lives: a quarter.
    3. $0.06 \times 2000 = 120$ W.
    4. The heat that is not turned into electricity keeps the rover warm in the cold.

## Common mistake

**"After two half-lives it is all gone."** After 88 years half is left; after 176 years, a quarter; it never quite
reaches zero. Each half-life takes half of what is *left*.

## Where it leads

- Back: [Through a dust storm](../level-7/06-through-a-dust-storm.md) · Next: [Fission](02-fission.md)
- [Level 8 page](index.md) · [Energy and power topic page](../index.md)
- Why nuclei decay: [Radiation](../../radiation/index.md). The figures: NASA's
  [MMRTG fact sheet](https://science.nasa.gov/wp-content/uploads/2024/02/mmrtg-factsheet-updated-5-18-20-1.pdf),
  [plutonium-238 page](https://science.nasa.gov/planetary-science/programs/radioisotope-power-systems/about-plutonium-238/)
  and [rover components page](https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/).
