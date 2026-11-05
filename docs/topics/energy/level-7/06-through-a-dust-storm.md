---
title: "Through a dust storm"
---

# Through a dust storm

*Energy and power · level 7, lesson 6 of 6*

## A question to start

The 2018 dust storm covered all of Mars for months. Suppose a solar-powered base sat under it. What would it take to
keep the air, heat and lights going?

## The idea

A night is short and comes every sol, so a store can be sized for it. A storm is different: it is long and deep, and
it comes only every few Mars years. The rovers show how hard it is:

- In the 2007 storms, Opportunity's panels fell to 128 Wh a sol. All science was stopped to save power, and it survived.
- At the end of 2008, Spirit's panels made about 89 Wh a sol, against a normal 700 Wh.
- In June 2018, with $\tau$ about 10.8, Opportunity went silent. It never woke again.

A base has four choices, and real plans mix them:

1. **Store** enough energy for the whole storm.
2. **Oversize** the panels, so that even dim light gives enough.
3. **Cut back**: pause what can wait, keep only what keeps people alive.
4. **Add a source that ignores the sky**, such as a nuclear reactor.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="Solar power over many sols. It sits above a dashed demand line, falls to almost nothing when a storm arrives, stays low for weeks, then slowly recovers. The shaded gap between the demand line and the low solar power is the energy the store must give.">
  <path d="M60 70 L90 125 H170 L250 60" fill="none" stroke="#eea66f" stroke-width="3"/><path d="M30 60 H60 V70" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M65 80 L90 125 H170 L225 80 Z" fill="#5aa0d8" opacity=".5"/>
  <line x1="30" y1="80" x2="310" y2="80" stroke="#d86a3a" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="30" y1="130" x2="310" y2="130" stroke="currentColor"/><path d="M250 60 H310" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="260" y="75">demand</text><text x="95" y="112">from the store</text><text x="80" y="148">storm: weeks to months</text><text x="30" y="52">solar</text></g>
</svg>
</div>

Here is the store alone, sized for a base that needs 10 kW, against a long spell of bad weather on Earth:

| Suppose | Mars | Earth |
| --- | --- | --- |
| Dark spell | 60 sols at 5% of usual sunlight | 7 days of thick cloud at 20% |
| Energy the base needs a day | 247 kWh | 240 kWh |
| Shortfall over the spell | about 14,000 kWh | about 1,340 kWh |
| Lithium-ion cells at 200 Wh/kg | about 70 tonnes | about 6.7 tonnes |

## Worked examples

**1. The Mars shortfall.** A sol is 24.66 h, so the base needs $10 \times 24.66 = 247$ kWh a sol. The panels give 5% of
that, so the store gives $0.95 \times 247 \times 60 \approx 14{,}000$ kWh.

**2. In hydrogen.** With a 50% fuel cell, the hydrogen must hold 28,000 kWh: $28{,}000/39 \approx 720$ kg of hydrogen and
5.7 tonnes of oxygen. Lighter than 70 tonnes of cells, though tanks add mass.

**3. Cutting back.** If the base drops to 4 kW for life support only, the shortfall becomes
$0.95 \times 4 \times 24.66 \times 60 = 5{,}600$ kWh: still 28 tonnes of cells.

## Try it

1. A base uses 6 kW. A storm lasts 40 sols, with solar power at 10% of usual. Find the shortfall.
2. What mass of 250 Wh/kg cells would cover it?
3. Why would twenty times as many panels be a poor answer?
4. What did Opportunity's team do to get through the 2007 storms?

??? note "Answers"
    1. $6 \times 24.66 = 148$ kWh a sol; $0.9 \times 148 \times 40 \approx 5{,}300$ kWh.
    2. $5{,}300{,}000/250 \approx 21{,}000$ kg, 21 tonnes.
    3. They would sit mostly idle in clear weather, they would need cleaning, and a deeper storm would still beat them.
    4. They stopped all science and used as little power as they could.

## Common mistake

**Sizing the store for a night.** A store for one night is a few hundred kilograms of cells; a store for a storm is tens
of tonnes. A plan that works every sol of the year can still fail in the one month that matters.

## Where it leads

- Back: [Pumped storage](05-pumped-storage.md) · Next level: [Power for a city](../level-8/index.md)
- [Level 7 page](index.md) · [Energy and power topic page](../index.md)
- How dark storms get: [Dust storms](../level-6/06-dust-storms.md). The rovers: NASA's
  [Opportunity mission page](https://science.nasa.gov/mission/mer-opportunity/),
  [Spirit mission page](https://science.nasa.gov/mission/mer-spirit/) and
  [Opportunity's last images](https://science.nasa.gov/photojournal/last-images-opportunity-took/).
