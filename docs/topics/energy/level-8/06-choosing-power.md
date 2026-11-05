---
title: "Choosing power"
---

# Choosing power

*Energy and power · level 8, lesson 6 of 6*

## A question to start

Solar panels, nuclear reactors, or both? Choose the power supply for the city in the last lesson, and argue for your
choice with numbers.

## The idea

No single number decides. Engineers weigh several things:

- **Mass from Earth.** Everything that cannot be made on Mars has to be launched and landed.
- **Reliability.** Air and heat must never stop, through every night and every storm.
- **Safety.** Radiation, fire, pressure, and what happens when something breaks.
- **Made on Mars.** Things built from Martian materials do not need to be shipped.
- **Spare heat.** Waste heat can keep buildings and greenhouses warm.

| Option | Strengths | Weaknesses |
| --- | --- | --- |
| Solar with batteries | Simple; rovers have used it on Mars for decades | Weak sunlight, dust, nights; storms need a huge store |
| Solar with hydrogen | Keeps for months; also gives water, oxygen and fuel | Only about 35 to 40% comes back |
| Fission reactors | Day and night, any storm, any latitude; spare heat | Must be shipped; needs shielding and radiators |
| Radioisotope generators | Proven and simple | Far too little plutonium for a city |
| A mix | Each covers the others' weak spots | Two systems to build and run |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="Power through one sol for a mix. A flat band from reactors runs all day and night. On top of it, a solar hump adds power in the middle of the day.">
  <rect x="30" y="95" width="280" height="35" fill="#5aa0d8" opacity=".6"/>
  <path d="M100 95 C130 95 140 25 170 25 C200 25 210 95 240 95 Z" fill="#eea66f" opacity=".7"/>
  <line x1="30" y1="130" x2="310" y2="130" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="40" y="117">reactors: day and night</text><text x="140" y="70">solar by day</text>
  <text x="155" y="146">noon</text><text x="40" y="146">midnight</text><text x="265" y="146">midnight</text></g>
</svg>
</div>

## Worked examples

**One possible answer** for the city of lesson 5, using 12 kW per person.

1. **Split the budget.** Air, water, heat and light in the habitat must never stop: $1 + 1.5 = 2.5$ kW per person, or
   2.5 MW for the city. Food lamps, factories and homes, 9.5 MW, can be cut back for a while.
2. **Never-stop power from reactors.** 2.5 MW of electricity, with a few spare units in case one fails. Their waste heat
   warms the habitat.
3. **The rest from solar.** $9.5\times10^6/33 \approx 290{,}000$ m² of panels, with batteries for the night.
4. **In a storm.** Factories pause. Crops get the reactors' spare power and dimmer light, and the city lives on stored
   food for a few weeks.

Others would argue for more reactors, so that crops never dim, or for solar first and reactors later, as the city grows.

## Try it

1. Which uses in the lesson 5 budget could pause in a dust storm, and which never could?
2. Why might a city start with solar and add reactors later? Why might it do the opposite?
3. How would the choice change if solar panels could be made on Mars from local materials?
4. Write a short paragraph for your chosen mix, using at least three numbers from this topic.

??? note "Answers"
    1. Making things, transport and some lamps could pause. Air, water, heat and the habitat's light never could.
    2. Solar first: it is simple and proven on Mars. Reactors first: they cover nights and storms from day one and need
       no huge store.
    3. Solar would get cheaper as the city grows, since panels would not need shipping from Earth; storage would still
       be needed for storms.
    4. Answers vary. Good ones use figures such as 586 W/m² of sunlight, a 60-sol storm needing 14,000 kWh for 10 kW,
       and 10 kW Kilopower units.

## Common mistake

**Choosing on one number.** The most efficient option is not always the best. A reactor turns only about a quarter of
its heat into electricity, but it works in the dark; solar panels are light, but useless in the worst storm.

## Where it leads

- Back: [A city energy budget](05-a-city-energy-budget.md) · [Level 8 page](index.md) ·
  [Energy and power topic page](../index.md)
- Fuel made on Mars: [Propellant from Mars](../../rockets/level-8/02-propellant-from-mars.md). Storms:
  [Through a dust storm](../level-7/06-through-a-dust-storm.md).
