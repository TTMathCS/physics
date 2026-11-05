---
title: "Batteries"
---

# Batteries

*Energy and power · level 7, lesson 2 of 6*

## A question to start

A phone battery says 3.85 V and 4,000 mAh. Perseverance carries two lithium-ion batteries. How much energy is in a
battery, and why does a rover keep its batteries warm?

## The idea

A battery keeps energy as **chemical energy**. When it runs a circuit, a reaction inside pushes charge round, and the
energy comes out as electrical energy. The energy it gives is

$$E = QV,$$

the charge $Q$ that flows times the voltage $V$. Battery makers give $Q$ in **amp-hours** (Ah): 1 Ah is a current of
1 A for an hour, 3,600 C. So in watt-hours,

$$E\ (\text{Wh}) = V \times Q\ (\text{Ah}).$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A rectangle with height 3.85 volts and width 4 amp-hours. Its area, 15.4 watt-hours, is the battery's energy.">
  <rect x="60" y="30" width="200" height="80" fill="#5aa0d8" opacity=".6" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="10" y="74">3.85 V</text><text x="130" y="128">4.0 Ah</text>
  <text x="105" y="75">E = 15.4 Wh</text></g>
</svg>
</div>

Three things matter beyond the energy:

- **Energy per kilogram.** Lithium-ion cells store about 150 to 270 Wh/kg; old lead-acid batteries 30 to 40.
- **Round trip.** Charging then discharging a lithium-ion battery gives back about 90% of the energy put in. The rest
  becomes heat.
- **Temperature.** Cold slows the reactions. A cold battery gives less energy, and charging one below freezing can harm
  it.

Mars is cold:

| Temperature | Mars | Earth |
| --- | --- | --- |
| Average at the surface | about −59 °C (214 K) | about 15 °C (288 K) |

So rovers keep their batteries warm. Perseverance's two batteries cover the peaks when the rover needs more than its
MMRTG's steady output, and the MMRTG's spare heat keeps the rover's systems at the right temperature.

## Worked examples

**1. The phone.** $3.85 \times 4.0 = 15.4$ Wh, which is $15.4 \times 3600 = 55{,}000$ J.

**2. A car.** Suppose a 75 kWh pack has a mass of 450 kg: $75{,}000/450 = 167$ Wh/kg.

**3. Charging for the night.** A base needs 123 kWh out of its batteries at night. At 90% round trip, its panels must put
in $123/0.9 = 137$ kWh by day.

## Try it

1. A 12 V battery holds 50 Ah. Find its energy in Wh and in J.
2. A power bank says 20,000 mAh at 3.7 V. How many Wh is that?
3. A pack must give 2 kWh, and its cells store 200 Wh/kg. What is the mass of the cells?
4. Why does a Mars rover keep its batteries warm?

??? note "Answers"
    1. $12 \times 50 = 600$ Wh, or $600 \times 3600 = 2.16\times10^6$ J.
    2. $3.7 \times 20 = 74$ Wh.
    3. $2000/200 = 10$ kg.
    4. Cold slows the reactions inside, so a cold battery gives less energy, and charging it below freezing can damage it.

## Common mistake

**"mAh is energy."** It is charge. Two batteries of 10,000 mAh hold different energies if their voltages differ:
at 3.7 V it is 37 Wh, at 12 V it is 120 Wh.

## Where it leads

- Back: [Why store energy?](01-why-store-energy.md) · Next: [Hydrogen](03-hydrogen.md)
- [Level 7 page](index.md) · [Energy and power topic page](../index.md)
- Charge and voltage: [Electricity](../../electricity/index.md). Perseverance's batteries: NASA's
  [rover components page](https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/). Temperatures:
  NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
