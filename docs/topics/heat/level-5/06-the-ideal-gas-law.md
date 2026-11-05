---
title: "The ideal gas law"
---

# The ideal gas law

*Heat and matter · level 5, lesson 6 of 6*

## A question to start

NASA gives Mars's surface pressure as 636 Pa and its average temperature as 214 K. From just those two numbers, and
what the air is made of, can you work out how much a cubic metre of Mars air weighs?

## The idea

Boyle's law, Charles's law and the pressure law are all parts of one law:

$$pV = nRT.$$

Here $p$ is the pressure in Pa, $V$ the volume in m³, $T$ the temperature in K, $n$ the amount of gas in **moles**,
and $R = 8.31$ J per mole per K, the same for every gas. One mole of a gas has a mass $M$, its molar mass: 0.029 kg
for Earth's air, 0.0435 kg for Mars's, which is mostly heavy carbon dioxide.

The mass of gas in volume $V$ is $nM$, so the **density** is

$$\rho = \frac{nM}{V} = \frac{pM}{RT}.$$

| Working out the density of the air | Mars | Earth |
| --- | --- | --- |
| Pressure $p$ | 636 Pa | 101,400 Pa |
| Temperature $T$ | 214 K | 288 K |
| Molar mass $M$ | 0.0435 kg/mol | 0.0290 kg/mol |
| Density, $pM/RT$ | 0.0156 kg/m³ | 1.23 kg/m³ |
| NASA's measured value | about 0.016 kg/m³ | 1.217 kg/m³ |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="Two cubes of one cubic metre each. The Earth cube holds 1.2 kilograms of air, drawn as many dots. The Mars cube holds 0.016 kilograms, drawn as two dots.">
  <rect x="50" y="15" width="80" height="80" fill="#5aa0d8" opacity=".25" stroke="currentColor"/><rect x="200" y="15" width="80" height="80" fill="#d86a3a" opacity=".1" stroke="currentColor"/>
  <g fill="#5aa0d8"><circle cx="60" cy="25" r="3"/><circle cx="75" cy="40" r="3"/><circle cx="90" cy="28" r="3"/><circle cx="105" cy="45" r="3"/><circle cx="120" cy="30" r="3"/><circle cx="65" cy="60" r="3"/><circle cx="85" cy="70" r="3"/><circle cx="100" cy="62" r="3"/><circle cx="118" cy="78" r="3"/><circle cx="70" cy="85" r="3"/><circle cx="95" cy="88" r="3"/><circle cx="112" cy="55" r="3"/></g>
  <g fill="#d86a3a"><circle cx="225" cy="45" r="3"/><circle cx="260" cy="70" r="3"/></g>
  <g font-size="12" fill="currentColor"><text x="45" y="112">Earth: 1.2 kg</text><text x="190" y="112">Mars: 0.016 kg</text></g>
</svg>
</div>

The law, from three numbers, gets very close to what NASA measures.

## Worked examples

**1. Mars air.** $\rho = \dfrac{636 \times 0.0435}{8.31 \times 214} = \dfrac{27.7}{1778} = 0.0156$ kg/m³.

**2. Earth air.** $\rho = \dfrac{101{,}400 \times 0.029}{8.31 \times 288} = \dfrac{2941}{2393} = 1.23$ kg/m³.

**3. Air in a habitat.** A habitat of 200 m³ at 70 kPa and 293 K holds $n = pV/RT = 70{,}000 \times 200/(8.31 \times 293)
= 5{,}750$ moles of Earth-like air, a mass of $5{,}750 \times 0.029 \approx 167$ kg.

## Try it

1. How many moles of gas are in 1 m³ at 100 kPa and 300 K?
2. Find the density of Mars air in a deep basin where the pressure is 1,200 Pa and the temperature 230 K.
3. Why is Mars air at the same pressure and temperature denser than Earth air would be?
4. How many times denser is Earth's air than Mars's at their surfaces?

??? note "Answers"
    1. $n = 100{,}000 \times 1/(8.31 \times 300) \approx 40$ moles.
    2. $1200 \times 0.0435/(8.31 \times 230) = 0.027$ kg/m³.
    3. Carbon dioxide molecules are heavier: 0.044 kg per mole against 0.029 for Earth's air.
    4. $1.217/0.016 \approx 76$ times.

## Common mistake

**Mixing units.** $pV = nRT$ needs pressure in Pa (not kPa), volume in m³ (not litres) and temperature in K. Mixing in
kPa or °C gives answers wrong by factors of a thousand or more.

## Where it leads

- Back: [Gases and temperature](05-gases-and-temperature.md) · Next level: [Phase changes](../level-6/index.md)
- [Level 5 page](index.md) · [Heat and matter topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html), which give the molar masses as
  "mean molecular weight".
