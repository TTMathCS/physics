---
title: "Heating water"
---

# Heating water

*Heat and matter · level 4, lesson 4 of 6*

## A question to start

A 2,000 W kettle holds 1.5 kg of water. How long does it take to boil? And could a tank of hot water keep a Mars home
warm through the night?

## The idea

A heater of power $P$ (in watts, joules per second) running for a time $t$ gives energy

$$Q = Pt.$$

Put that together with $Q = mc\Delta T$, and you can find how long heating takes:

$$t = \frac{mc\,\Delta T}{P}.$$

Real heaters lose some heat to their surroundings, so the real time is a little longer.

Water is also a good **store of heat**, because its $c$ is so large. Warm a big tank by day, and it gives the heat back
as it cools at night.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A graph of a water tank's temperature through a sol. It is heated up to 60 degrees by day and slowly falls to 30 degrees through the night as it warms the home.">
  <line x1="30" y1="110" x2="310" y2="110" stroke="currentColor"/><line x1="30" y1="110" x2="30" y2="10" stroke="currentColor"/>
  <polyline points="30,70 120,25 300,70" fill="none" stroke="#d86a3a" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="60" y="125">day: heated</text><text x="180" y="125">night: gives heat out</text><text x="125" y="20">60 °C</text><text x="270" y="62">30 °C</text></g>
</svg>
</div>

## Worked examples

**1. The kettle.** From 20 °C to 100 °C: $Q = 1.5 \times 4180 \times 80 = 501{,}600$ J.
$t = 501{,}600/2000 = 251$ s, a little over 4 minutes.

**2. A shower.** 50 kg of water warmed from 10 °C to 40 °C: $50 \times 4180 \times 30 = 6.3\times10^6$ J, about 1.7 kWh.

**3. A tank for the night.** A Mars home needs 3 kW of heat through a 12 h 20 min night: $3000 \times 44{,}400 = 1.3\times10^8$ J.
A tank cooling from 60 °C to 30 °C gives $4180 \times 30 = 125{,}000$ J per kg, so it needs
$1.3\times10^8 / 125{,}000 \approx 1{,}070$ kg: about a cubic metre of water.

| A night's heat store | Mars | Earth |
| --- | --- | --- |
| Night at the equator | 12 h 20 min | 12 h |
| Water tank for 3 kW, 60 °C to 30 °C | about 1,070 kg | about 1,040 kg |

## Try it

1. How much energy does a 1,500 W heater give in 10 minutes?
2. How long does a 2,000 W kettle take to warm 1 kg of water from 20 °C to 100 °C?
3. Why does the real kettle take a little longer?
4. Why is water better than the same mass of steel for storing heat?

??? note "Answers"
    1. $1500 \times 600 = 900{,}000$ J.
    2. $1 \times 4180 \times 80/2000 = 167$ s, nearly 3 minutes.
    3. Some heat warms the kettle itself and escapes to the air.
    4. Its specific heat capacity is about nine times bigger, so it holds far more heat for each degree.

## Common mistake

**Forgetting to change minutes to seconds.** Watts are joules per *second*. 10 minutes is 600 s.

## Where it leads

- Back: [Specific heat capacity](03-specific-heat-capacity.md) · Next: [Thermal expansion](05-thermal-expansion.md)
- [Level 4 page](index.md) · [Heat and matter topic page](../index.md)
- Other ways to store energy: [Why store energy?](../../energy/level-7/01-why-store-energy.md).
