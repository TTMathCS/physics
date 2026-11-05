---
title: "Hydrogen"
---

# Hydrogen

*Energy and power · level 7, lesson 3 of 6*

## A question to start

Mars has ice, and it has sunlight. Could a base use spare sunlight to turn water into hydrogen, and get the energy back
weeks later?

## The idea

Electricity can split water into hydrogen and oxygen. This is **electrolysis**:

$$2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2.$$

The two gases go into tanks. Later, a **fuel cell** joins them back into water, and the chemical energy comes out as
electricity and heat. Nothing is burned, and the only product is water.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 150" role="img" aria-label="A loop. Spare electricity goes into an electrolyser, which splits water into hydrogen and oxygen held in tanks. A fuel cell later joins them into water again and gives out electricity. The water goes back round.">
  <g fill="none" stroke="currentColor"><rect x="10" y="50" width="80" height="40" rx="6"/><rect x="130" y="20" width="80" height="30" rx="6"/>
  <rect x="130" y="90" width="80" height="30" rx="6"/><rect x="250" y="50" width="80" height="40" rx="6"/></g>
  <g stroke="#5aa0d8" stroke-width="2" fill="none"><path d="M90 62 L130 38"/><path d="M90 78 L130 102"/><path d="M210 38 L250 62"/><path d="M210 102 L250 78"/></g>
  <path d="M290 90 V140 H50 V90" fill="none" stroke="#5aa0d8" stroke-width="2" stroke-dasharray="5 4"/>
  <g font-size="12" fill="currentColor"><text x="18" y="74">electrolyser</text><text x="140" y="40">hydrogen</text><text x="145" y="110">oxygen</text>
  <text x="262" y="74">fuel cell</text><text x="140" y="136">water goes round</text><text x="8" y="40">electricity in</text><text x="250" y="40">electricity out</text></g>
</svg>
</div>

Hydrogen holds a lot of energy for its mass: about 142 MJ per kg, or 39 kWh. But:

- **Losses.** An electrolyser keeps about 70% of the energy put in; a fuel cell turns about 50 to 60% of the hydrogen's
  energy back into electricity. The round trip is only about 35 to 40%, against about 90% for a battery.
- **Oxygen.** Water is 16 parts oxygen to 2 parts hydrogen by mass, so each kilogram of hydrogen needs 8 kg of oxygen.

| The fuel cell's oxygen | Mars | Earth |
| --- | --- | --- |
| Oxygen in the air | 0.16% | 20.95% |
| Where a fuel cell gets it | Stored in tanks with the hydrogen | Taken from the air |

Its strength is time. A tank of gas can sit for months, and a bigger store needs only bigger tanks, not more cells.
Oxygen can be made on Mars from its carbon dioxide air too: Perseverance's MOXIE experiment made 122 g of oxygen in all,
at up to 12 g an hour.

## Worked examples

**1. Energy in a kilogram.** $142 \times 10^6$ J ÷ $3.6\times10^6$ J/kWh $= 39$ kWh.

**2. Storing a night.** A base needs 123 kWh of electricity. With a 55% fuel cell, the hydrogen must hold
$123/0.55 = 224$ kWh: $224/39 = 5.7$ kg of hydrogen and $8 \times 5.7 = 46$ kg of oxygen, split from 52 kg of water.

**3. The round trip.** $0.70 \times 0.55 = 0.385$, about 39%. To get 123 kWh back, the panels must put in
$123/0.385 \approx 320$ kWh, more than twice what a battery needs.

## Try it

1. Write the word equation for what a fuel cell does.
2. A fuel cell uses 2 kg of hydrogen. What mass of water does it make?
3. An electrolyser is 70% efficient and a fuel cell 50%. What is the round-trip efficiency?
4. Why might a Mars base still pick hydrogen to get through a storm lasting months?

??? note "Answers"
    1. Hydrogen + oxygen → water (plus electricity and heat).
    2. 2 kg of hydrogen joins 16 kg of oxygen: 18 kg of water.
    3. $0.7 \times 0.5 = 35\%$.
    4. It keeps for months, a bigger store needs only bigger tanks, and the same gases give water, oxygen to breathe and
       rocket fuel.

## Common mistake

**"Hydrogen is a source of energy."** There is almost no free hydrogen to dig up, on Earth or on Mars. Making it takes
more energy than it gives back. It is a store, like a battery.

## Where it leads

- Back: [Batteries](02-batteries.md) · Next: [Flywheels](04-flywheels.md)
- [Level 7 page](index.md) · [Energy and power topic page](../index.md)
- Rocket fuel from the same gases: [Propellant from Mars](../../rockets/level-8/02-propellant-from-mars.md). MOXIE:
  NASA's [MOXIE results](https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/).
  The air: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
