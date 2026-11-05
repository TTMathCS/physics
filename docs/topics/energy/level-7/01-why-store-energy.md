---
title: "Why store energy?"
---

# Why store energy?

*Energy and power · level 7, lesson 1 of 6*

## A question to start

Solar panels give power only by day. A Mars base needs power at three in the morning too, for air, heat and light. How
much energy must it keep for the night, and what could it keep it in?

## The idea

Supply and demand rarely match. Panels make most at noon; people want light after dark. An **energy store** fills up
when there is spare power and empties when there is not. Its size is

$$\text{energy stored} = \text{average power needed} \times \text{time it must last}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="Power through one sol. A solar hump rises above a flat line of the base's demand in the middle of the day, which charges the store. At night the solar power is zero and the shaded area under the demand line must come from the store.">
  <rect x="30" y="95" width="90" height="35" fill="#5aa0d8" opacity=".45"/><rect x="220" y="95" width="90" height="35" fill="#5aa0d8" opacity=".45"/>
  <path d="M30 130 H100 C130 130 140 20 170 20 C200 20 210 130 240 130 H310" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="30" y1="95" x2="310" y2="95" stroke="#d86a3a" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="30" y1="130" x2="310" y2="130" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="40" y="118">from the store</text><text x="232" y="118">from the store</text>
  <text x="140" y="70">charging</text><text x="250" y="88">demand</text><text x="182" y="22">solar</text><text x="155" y="145">noon</text></g>
</svg>
</div>

There are many ways to keep energy:

| Store | Energy kept as | Example |
| --- | --- | --- |
| Battery | Chemical | Phones, cars, every rover |
| Fuel and oxygen | Chemical | Hydrogen in tanks, used in a fuel cell |
| Raised water or weights | Gravitational | Pumped storage power stations |
| Spinning wheel | Kinetic | Flywheels |
| Hot material | Thermal | Tanks of hot water, molten salt or hot sand |

Engineers compare stores by **energy per kilogram** (specific energy), by how much of the energy comes back out
(round-trip efficiency), and by how long they can hold it. Some numbers that matter on Mars:

| Storing energy | Mars | Earth |
| --- | --- | --- |
| Night at the equator, about | 12 h 20 min (half a sol) | 12 h |
| 1 kg raised 100 m stores | 371 J | 981 J |
| Oxygen in the air, to burn a fuel | 0.16% | 20.95% |

That last row matters: on Earth, a fuel cell or engine takes its oxygen from the air for free. On Mars the oxygen must be
made and stored too.

## Worked examples

**1. A night's store.** A base uses 10 kW on average. Through a 12 h 20 min Mars night it needs
$10 \times 12.33 = 123$ kWh. On Earth, through a 12 h night, 120 kWh.

**2. In batteries.** Lithium-ion cells store about 200 Wh per kg. 123,000 Wh ÷ 200 $\approx 620$ kg of cells.

**3. In raised water.** 123 kWh $= 4.4\times10^8$ J. Raised 100 m on Mars, that needs
$m = \dfrac{4.4\times10^8}{3.71 \times 100} = 1.2\times10^6$ kg: 1,200 tonnes of water. Gravity storage is bulky.

## Try it

1. Why does a solar-powered base need an energy store?
2. A base uses 4 kW through a 12 h 20 min Mars night. How many kWh must it store?
3. How many kilograms of 200 Wh/kg cells is that?
4. Why do energy-per-kilogram figures for hydrogen flatter it on Mars?

??? note "Answers"
    1. Its panels give nothing at night, and little in a dust storm, but it needs power all the time.
    2. $4 \times 12.33 \approx 49$ kWh.
    3. $49{,}000/200 \approx 250$ kg.
    4. They count only the hydrogen. On Mars the oxygen it needs must be stored as well, and there is eight times as much
       oxygen as hydrogen by mass.

## Common mistake

**Mixing up kW and kWh.** The power (kW) says how fast energy is used; the store must hold energy (kWh). A 10 kW base
needs a 10 kW supply *and* a store of 123 kWh for the night.

## Where it leads

- Back: [Dust storms](../level-6/06-dust-storms.md) · Next: [Batteries](02-batteries.md)
- [Level 7 page](index.md) · [Energy and power topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
