---
title: "A city energy budget"
---

# A city energy budget

*Energy and power · level 8, lesson 5 of 6*

## A question to start

How much power would a city of 1,000 people on Mars need? Nobody knows exactly, but you can still make a good estimate.

## The idea

An **energy budget** lists every use, puts an average power on each, and adds them up. Even rough guesses are useful:
they show which uses matter most and how big the power plant must be.

On Mars, people need power for things Earth gives free: air to breathe, water, warmth, and light for crops. Here is one
set of guesses, per person, for working with:

| Use, per person | Average power, assumed |
| --- | --- |
| Air, water and waste recycling | 1 kW |
| Heat and light in the habitat | 1.5 kW |
| Growing food under lamps | 5 kW |
| Making oxygen, water, fuel and materials | 3 kW |
| Homes, computers and transport | 1.5 kW |
| **Total** | **12 kW** |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 110" role="img" aria-label="A bar split into five parts for the uses in the table. Growing food is the biggest part, about two fifths of the bar; making things is next.">
  <rect x="15" y="25" width="25" height="35" fill="#5aa0d8"/><rect x="40" y="25" width="37.5" height="35" fill="#cfc8bf"/>
  <rect x="77.5" y="25" width="125" height="35" fill="#eea66f"/><rect x="202.5" y="25" width="75" height="35" fill="#d86a3a"/>
  <rect x="277.5" y="25" width="37.5" height="35" fill="#5aa0d8" opacity=".5"/>
  <g font-size="11" fill="currentColor"><text x="15" y="80">air</text><text x="45" y="80">heat</text><text x="105" y="80">food: 5 kW</text>
  <text x="205" y="80">making 3 kW</text><text x="280" y="80">homes</text><text x="110" y="15">12 kW per person</text></g>
</svg>
</div>

For comparison, a home in the United States used 10,791 kWh of electricity in 2022:

| Average electrical power | Mars | Earth |
| --- | --- | --- |
| Need, as worked out here | 12 kW per person (assumed) | 1.23 kW per US home (2022) |

## Worked examples

**1. The city.** $1000 \times 12 = 12{,}000$ kW, or 12 MW. In a sol of 24.66 h, that is about 296 MWh.

**2. The US home.** $10{,}791 \text{ kWh} \div 8{,}760 \text{ h} = 1.23$ kW on average.

**3. On solar.** From the level 6 table, a flat panel near the equator gives about 33 W per m² on average.
$12\times10^6/33 \approx 360{,}000$ m², more than a third of a square kilometre, before nights and storms.

**4. On reactors.** In 10 kW units like Kilopower: $12{,}000/10 = 1{,}200$ of them. A city would want much bigger
reactors.

## Try it

1. If the lamps for food used half as much power, what would the total per person be?
2. What share of the budget is food?
3. How many US homes use as much electricity as the city's 12 MW?
4. Name two uses in the Mars budget that a city on Earth gets free.

??? note "Answers"
    1. $12 - 2.5 = 9.5$ kW.
    2. $5/12 \approx 42\%$.
    3. $12{,}000/1.23 \approx 9{,}800$ homes.
    4. Air to breathe, and sunlight for crops (also water, and protection from the cold).

## Common mistake

**Adding kW and kWh.** Keep the whole budget in one kind of unit: all average powers in kW, or all energies in kWh per
sol. Then convert at the end.

## Where it leads

- Back: [Heat engines](04-heat-engines.md) · Next: [Choosing power](06-choosing-power.md)
- [Level 8 page](index.md) · [Energy and power topic page](../index.md)
- The panel figure: [Solar panels](../level-6/04-solar-panels.md). The US home: the
  [EIA](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3).
