---
title: "Propellant from Mars"
---

# Propellant from Mars

*Rockets and landing · level 8, lesson 2 of 6*

## A question to start

A crew's ascent rocket needs about 100 t of methane and oxygen to reach orbit from Mars. Mars's air is 95% carbon
dioxide, and there is ice under the ground in many places, including Arcadia Planitia. Can the propellant be made there,
and what would it take?

## The idea

**In-situ resource utilisation** (ISRU) means making what you need from what is there. For methane-oxygen propellant,
two reactions are enough.

**Electrolysis** of water, with electricity:

$$2\,\text{H}_2\text{O} \rightarrow 2\,\text{H}_2 + \text{O}_2$$

**The Sabatier reaction**, over a nickel or ruthenium catalyst at about 300 to 400 °C, giving out heat:

$$\text{CO}_2 + 4\,\text{H}_2 \rightarrow \text{CH}_4 + 2\,\text{H}_2\text{O}$$

The water it makes goes back to electrolysis. Run both together and the net reaction is

$$\text{CO}_2 + 2\,\text{H}_2\text{O} \rightarrow \text{CH}_4 + 2\,\text{O}_2.$$

**By mass:** 44 kg of CO₂ and 36 kg of water give 16 kg of methane and 64 kg of oxygen. That is 4 kg of oxygen per kg of
methane; engines burn them at about 3.6 to 1, so there is oxygen to spare for breathing.

**For 100 t of propellant** at 3.6 to 1: 21.7 t of methane and 78.3 t of oxygen. Making 21.7 t of methane takes 48.9 t of
water and 59.8 t of CO₂, and yields 86.9 t of oxygen, more than enough.

**The energy.** Splitting water takes at least 286 kJ per mole. Each kg of methane (62.5 mol) needs 125 mol of water
split: $125 \times 286$ kJ $= 35.8$ MJ $\approx 10$ kWh, in theory. Real electrolysers, plus digging and melting ice,
compressing CO₂ out of thin air, and liquefying the products at −162 °C and −183 °C, may need 2 to 3 times that.

At 2.5 times: $21{,}700 \text{ kg} \times 10 \times 2.5 = 540$ MWh. A 100 kW power plant running all the time would take
5,400 hours, about 225 days, inside the roughly 450 days a crew waits at Mars for the window home, and the plant could start
work on a cargo flight before the crew arrives.

**Already done, a little.** MOXIE, an experiment on Perseverance, made oxygen from Mars's CO₂ by a different route (solid
oxide electrolysis, $2\,\text{CO}_2 \rightarrow 2\,\text{CO} + \text{O}_2$) on 16 runs between 2021 and 2023, 122 g in
all, at up to about 12 g an hour.

## Worked examples

**1. Mass balance.** 1 kg of methane: $44/16 = 2.75$ kg of CO₂ and $36/16 = 2.25$ kg of water in; $64/16 = 4$ kg of oxygen out.

**2. The saving.** From lesson 1, every tonne carried to Mars's surface costs about 5 t in low Earth orbit. Making 100 t
of propellant on Mars saves about 500 t in Earth orbit, for a plant of perhaps a few tens of tonnes plus its power.

**3. Without water.** Carrying hydrogen from Earth instead of mining ice: hydrogen is only 1/9 of water's mass, so for 21.7
t of methane, $48.9/9 = 5.4$ t of hydrogen from Earth, the rest from Mars's air. Bulky, but about an 18-fold leverage on 100 t of propellant.

## Try it

1. Check that the net reaction balances in atoms and in mass.
2. How much water and CO₂ are needed for 10 t of methane?
3. At 25 kWh per kg of methane in practice, how long does a 40 kW plant take to make 5 t of methane?
4. Why is methane, rather than hydrogen, the usual choice for Mars?
5. Why does the Sabatier reaction produce more oxygen than the engines need?

??? note "Answers"
    1. Left: 1 C, 4 H, 4 O; right: 1 C, 4 H, 4 O. Mass: $44 + 36 = 80 = 16 + 64$.
    2. 22.5 t of water and 27.5 t of CO₂.
    3. $5{,}000 \times 25 = 125{,}000$ kWh; $125{,}000/40 = 3{,}125$ h, about 130 days.
    4. Methane can be made from Mars's air and ice, is denser, and stays liquid at a much warmer temperature, so it is
       far easier to store.
    5. The net reaction gives O₂ and CH₄ in a mass ratio of 4, while engines burn at about 3.6; the rest can be breathed.

## Common mistake

**Thinking the CO₂ is the hard part.** CO₂ is all around, in the air. The water (or hydrogen) and the energy are the hard
parts: finding and mining ice, and building a big enough power plant.

## Where it leads

- Back: [Delta-v to the surface](01-delta-v-to-the-surface.md) · Next: [Gravity losses](03-gravity-losses.md)
- [Level 8 page](index.md) · [Rockets and landing topic page](../index.md)
- Power for the plant: the [Energy and power](../../energy/index.md) topic. MOXIE:
  [NASA, Mars 2020 Perseverance](https://science.nasa.gov/mission/mars-2020-perseverance/).
