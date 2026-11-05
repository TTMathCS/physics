---
title: "Efficiency"
---

# Efficiency

*Energy and power · level 6, lesson 1 of 6*

## A question to start

Perseverance's power source makes about 2,000 W of heat but only about 110 W of electricity. A good electric motor
turns 90% of its electricity into motion. How do we compare machines fairly?

## The idea

The **efficiency** of a machine is the fraction of the energy put in that comes out as useful energy:

$$\text{efficiency} = \frac{\text{useful energy out}}{\text{total energy in}} = \frac{\text{useful power out}}{\text{total power in}}.$$

It is a number between 0 and 1, often written as a percentage. By the conservation of energy, it can never be more
than 100%: nothing makes energy out of nothing.

| Machine | Typical efficiency |
| --- | --- |
| Large electric motor | 90 to 95% |
| Battery, charge then discharge | 85 to 95% |
| Solar panel, best on spacecraft | about 30% |
| Solar panel on a house roof | about 20% |
| Car petrol engine | 20 to 35% |
| Human muscles | about 20 to 25% |
| Old filament light bulb (as light) | about 2 to 5% |
| Perseverance's MMRTG (heat to electricity) | about 6% |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 100" role="img" aria-label="Two bars of energy in. For the motor, most of the bar is useful output. For the MMRTG, only a thin slice is electricity and the rest heat.">
  <rect x="100" y="20" width="200" height="22" fill="#d86a3a" opacity=".5"/><rect x="100" y="20" width="182" height="22" fill="#5aa0d8"/>
  <rect x="100" y="60" width="200" height="22" fill="#d86a3a" opacity=".5"/><rect x="100" y="60" width="12" height="22" fill="#5aa0d8"/>
  <g font-size="12" fill="currentColor"><text x="5" y="36">motor 91%</text><text x="5" y="76">MMRTG 6%</text><text x="120" y="76">heat</text><text x="150" y="36" fill="#fff">useful</text></g>
</svg>
</div>

Low efficiency is not always bad. The MMRTG's "waste" heat keeps the rover warm through freezing Martian nights; on
Mars, that heat is half the point.

## Worked examples

**1. A motor.** 500 W in, 455 W of motion out: efficiency $= 455/500 = 0.91$, or 91%.

**2. Finding the input.** A solar panel 28% efficient gives 280 W. The sunlight falling on it was $280/0.28 = 1{,}000$ W.

**3. Chains multiply.** Sunlight → panel (28%) → battery (90%) → motor (90%): overall $0.28 \times 0.9 \times 0.9 = 0.23$.
Of every 100 J of sunlight, 23 J ends up moving the wheels.

## Try it

1. A lamp uses 40 W and gives out 14 W of light. What is its efficiency?
2. A motor is 85% efficient and must deliver 170 W. What power does it take in?
3. Why can no machine be more than 100% efficient?
4. Find the overall efficiency of a panel (25%), battery (92%) and heater (100%).

??? note "Answers"
    1. $14/40 = 35\%$.
    2. $170/0.85 = 200$ W.
    3. It would have to give out more energy than it takes in, which would break the conservation of energy.
    4. $0.25 \times 0.92 \times 1 = 23\%$.

## Common mistake

**"An efficient machine uses little energy."** Efficiency is a ratio. A very efficient 3,000 W motor still uses far more
energy than an inefficient 10 W one.

## Where it leads

- Back: [The work-energy theorem](../level-5/06-work-energy-theorem.md) · Next: [Sankey diagrams](02-sankey-diagrams.md)
- [Level 6 page](index.md) · [Energy and power topic page](../index.md)
- The power source: [Radioisotope power](../level-8/01-radioisotope-power.md). Its figures: NASA's
  [MMRTG fact sheet](https://science.nasa.gov/wp-content/uploads/2024/02/mmrtg-factsheet-updated-5-18-20-1.pdf).
