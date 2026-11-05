---
title: "How deep to build"
---

# How deep to build

*Radiation and the atom · level 7, lesson 6 of 6*

## A question to start

A crew will live on Mars for 500 days. They must go outside to work, but they will sleep and eat indoors. How should
their home be built to keep the dose down?

## The idea

Put the pieces together.

1. **The surface dose.** Curiosity measured about 0.67 mSv a day, about 245 mSv a year.
2. **A regolith roof.** The 2022 study found that 1 to 1.6 m of regolith keeps the dose under 100 mSv a year. Thinner
   than about a metre is not worth it, because of the peak near 30 cm.
3. **A storm shelter.** For solar outbursts, a small room with extra water or regolith around it.
4. **Hydrogen.** Water tanks, food and plastic placed in the walls add more shielding. Ground with ice in it would
   shield better than dry soil, since ice is rich in hydrogen.
5. **Natural roofs.** The study's authors point to caves and lava tubes, whose rock roofs could be many metres thick.

Deeper is safer, but every extra metre of roof means more digging and moving. The engineering choice is a balance.

| Home on Mars for 500 days | Mars, under 1.5 m of regolith | Earth, at home in Canada |
| --- | --- | --- |
| Dose indoors | under about 0.27 mSv a day | about 0.005 mSv a day |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A cross-section of a Mars home: a rounded habitat dug into the ground with about one and a half metres of regolith piled over it. Inside, a small storm shelter is ringed by water tanks.">
  <rect x="0" y="120" width="330" height="30" fill="#d86a3a" opacity=".5"/>
  <path d="M60 120 Q60 40 165 40 Q270 40 270 120 Z" fill="#d86a3a" opacity=".5" stroke="currentColor"/>
  <path d="M95 120 Q95 75 165 75 Q235 75 235 120 Z" fill="#cfc8bf" stroke="currentColor"/>
  <rect x="175" y="95" width="40" height="25" fill="#fff" stroke="currentColor"/><rect x="170" y="90" width="50" height="5" fill="#5aa0d8"/><rect x="170" y="95" width="5" height="25" fill="#5aa0d8"/><rect x="215" y="95" width="5" height="25" fill="#5aa0d8"/>
  <g font-size="11" fill="currentColor"><text x="120" y="35">1.5 m of regolith</text><text x="108" y="104">living space</text><text x="236" y="86">storm shelter,</text><text x="236" y="100">water walls</text><text x="10" y="140">ground</text></g>
</svg>
</div>

## Worked examples

**1. Indoors.** Under 100 mSv a year means under $100 / 365 \approx 0.27$ mSv a day.

**2. A 500-day stay.** Suppose the crew spends 80% of the time indoors and 20% outside.
Indoors: $0.8 \times 500 \times 0.27 = 108$ mSv. Outside: $0.2 \times 500 \times 0.67 = 67$ mSv. Total about 175 mSv,
against 335 mSv for the whole stay out on the surface.

**3. More time outside.** If they spend 40% outside, indoors gives $0.6 \times 500 \times 0.27 = 81$ mSv and
outside $0.4 \times 500 \times 0.67 = 134$ mSv: 215 mSv in all. Time outdoors costs the most dose.

## Try it

1. Why is a 30 cm roof of regolith a poor choice?
2. Find the dose for 500 days spent all indoors under the shield, at 0.27 mSv a day.
3. Why would ice-rich ground make a good place to build?
4. Name two ways to cut the crew's dose besides a thicker roof.

??? note "Answers"
    1. The dose peaks about 30 cm down, because of secondary neutrons.
    2. $500 \times 0.27 = 135$ mSv.
    3. Ice is rich in hydrogen, which shields best.
    4. Any two of: less time outside, a storm shelter, water and supplies in the walls, a cave or lava tube.

## Common mistake

**Planning only the roof.** A crew's dose depends on where they spend their hours. Time outside, at the full surface
dose, can add as much as the hours indoors.

## Where it leads

- Back: [Regolith shields](05-regolith-shields.md) · Next level: [Level 8: Nuclear physics](../level-8/index.md)
- [Level 7 page](index.md) · [Radiation and the atom topic page](../index.md)
- Sources: Space.com on the 2022 study of
  [radiation under the surface of Mars](https://www.space.com/mars-radiation-protection-astronauts-underground), NASA on
  [Curiosity's radiation measurements on Mars](https://www.nasa.gov/news-release/nasa-rover-results-include-first-age-measurement-on-mars-and-help-for-human-exploration/)
  and on [protecting astronauts on Mars](https://www.nasa.gov/science-research/heliophysics/real-martians-how-to-protect-astronauts-from-space-radiation-on-mars/),
  and the CNSC on [radiation doses](https://www.cnsc-ccsn.gc.ca/eng/nuclear-safety-security/educational-resources/radiation/radiation-doses/).
