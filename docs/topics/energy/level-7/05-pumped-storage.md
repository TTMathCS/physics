---
title: "Pumped storage"
---

# Pumped storage

*Energy and power · level 7, lesson 5 of 6*

## A question to start

On Earth, some power stations pump water up to a high lake when there is spare power, and let it run back down through
turbines when power is needed. Could a Mars base do the same?

## The idea

Raising a mass $m$ by a height $h$ stores

$$E = mgh.$$

Letting it fall turns that back into electricity through a turbine. Pumped water stores on Earth give back about 70 to
80% of the energy put in, and can hold it for days. They are one of the oldest and biggest kinds of grid storage.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="Two tanks, one high and one low, joined by a pipe with a pump and turbine. Water is pumped up when there is spare power and runs down through the turbine when power is needed. The height between them is h.">
  <rect x="210" y="15" width="90" height="35" fill="#5aa0d8" opacity=".6" stroke="currentColor"/>
  <rect x="20" y="115" width="90" height="35" fill="#5aa0d8" opacity=".6" stroke="currentColor"/>
  <path d="M110 130 H160 V40 H210" fill="none" stroke="currentColor" stroke-width="3"/>
  <circle cx="160" cy="110" r="10" fill="#eea66f" stroke="currentColor"/>
  <line x1="315" y1="32" x2="315" y2="132" stroke="currentColor"/><line x1="308" y1="132" x2="322" y2="132" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="300" y="150">h</text><text x="175" y="105">pump and</text><text x="175" y="119">turbine</text>
  <text x="170" y="70">up: spare power</text><text x="170" y="86">down: power out</text></g>
</svg>
</div>

On Mars, two things go against it:

- **Weaker gravity.** The same water raised the same height stores only 38% as much.
- **No open water.** The air is so thin and cold that open water would freeze or evaporate fast. Water would have to sit
  in sealed, warmed tanks and pipes.

| Pumped storage | Mars | Earth |
| --- | --- | --- |
| $g$ | 3.71 N/kg | 9.81 N/kg |
| 1 tonne raised 100 m stores | 371 kJ (0.10 kWh) | 981 kJ (0.27 kWh) |
| Air pressure at the surface | about 0.6 kPa | about 101 kPa |
| An open lake | freezes or evaporates fast | stays liquid |

A Mars base could raise solid weights instead, such as blocks of rock or bins of sand, which do not freeze. The physics
is the same; the store is still large for the energy it holds.

## Worked examples

**1. A tank on a cliff.** 1,000 tonnes of water raised 200 m on Mars: $10^6 \times 3.71 \times 200 = 7.4\times10^8$ J,
about 206 kWh. On Earth the same tank stores 545 kWh.

**2. A night's store.** A base needs 123 kWh at night, and gets back 80%. It must store $123/0.8 = 154$ kWh
$= 5.5\times10^8$ J. At $h = 100$ m on Mars: $m = 5.5\times10^8/371 = 1.5\times10^6$ kg, 1,500 tonnes, against about
700 kg of lithium-ion cells.

**3. How high for 1 kWh?** For 1 tonne on Mars: $h = 3.6\times10^6/(1000 \times 3.71) = 970$ m.

## Try it

1. Find the energy stored by raising 500 kg by 20 m on Mars.
2. Find it for the same mass and height on Earth.
3. How many times more mass does Mars need than Earth to store the same energy at the same height?
4. Why could a Mars base not use an open lake?

??? note "Answers"
    1. $500 \times 3.71 \times 20 = 37{,}100$ J.
    2. $500 \times 9.81 \times 20 = 98{,}100$ J.
    3. $9.81/3.71 = 2.6$ times.
    4. In the thin, cold air the water would freeze or evaporate.

## Common mistake

**Forgetting the losses.** A pumped store gives back only 70 to 80% of what went in. Size it for what must come out,
then divide by the efficiency.

## Where it leads

- Back: [Flywheels](04-flywheels.md) · Next: [Through a dust storm](06-through-a-dust-storm.md)
- [Level 7 page](index.md) · [Energy and power topic page](../index.md)
- The formula: [Gravitational potential energy](../level-5/04-potential-energy.md). The air: [Air and fluids](../../air/index.md),
  and NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
