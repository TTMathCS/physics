---
title: "Heat engines"
---

# Heat engines

*Energy and power · level 8, lesson 4 of 6*

## A question to start

Kilopower turns reactor heat into electricity with Stirling engines; power stations on Earth use steam turbines. Is
there a limit to how much of the heat any engine can turn into work?

## The idea

A **heat engine** takes heat $Q_h$ from a hot place, turns part of it into work $W$, and passes the rest, $Q_c$, to a
cold place. By the conservation of energy, $Q_h = W + Q_c$. Its efficiency is $W/Q_h$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 170" role="img" aria-label="A hot reservoir at the top, a heat engine in the middle and a cold reservoir at the bottom. A wide arrow of heat goes down from hot to the engine; a narrower arrow of work comes out to the side; an arrow of leftover heat goes down to the cold reservoir.">
  <rect x="80" y="10" width="140" height="30" fill="#d86a3a" opacity=".8"/><rect x="80" y="130" width="140" height="30" fill="#5aa0d8" opacity=".7"/>
  <circle cx="150" cy="85" r="22" fill="#cfc8bf" stroke="currentColor"/>
  <g stroke="currentColor" stroke-width="3"><line x1="150" y1="40" x2="150" y2="63"/><line x1="150" y1="107" x2="150" y2="130"/><line x1="172" y1="85" x2="240" y2="85"/></g>
  <path d="M240 78 l14 7 l-14 7 z" fill="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="95" y="30">hot side</text><text x="95" y="150">cold side</text><text x="135" y="89">engine</text>
  <text x="158" y="56">heat in</text><text x="158" y="122">heat out</text><text x="258" y="89">work W</text></g>
</svg>
</div>

No engine can turn all the heat into work. The best possible, the **Carnot limit**, depends only on the two temperatures
in kelvin:

$$\eta_\text{max} = 1 - \frac{T_c}{T_h}.$$

Real engines reach perhaps half to two-thirds of it. A colder cold side gives a higher limit, which seems to favour
Mars:

| Carnot limit, hot side at 1,100 K | Mars | Earth |
| --- | --- | --- |
| Average surface temperature | 214 K | 288 K |
| Limit with the cold side at that temperature | 81% | 74% |

But in a real reactor the cold side is the radiator, not the ground. A radiator must be warmer than its surroundings to
shed heat, and the cooler it runs, the bigger it must be. Designers trade a higher efficiency against a bigger radiator.

## Worked examples

**1. A steam power station.** Steam at 800 K, cooling water at 300 K: $1 - 300/800 = 62.5\%$ at best. Real stations
reach about 35 to 40%.

**2. Mars against Earth.** With $T_h = 1100$ K: on Mars, $1 - 214/1100 = 0.81$; on Earth, $1 - 288/1100 = 0.74$.

**3. The radiator trade.** A Stirling engine with a 1,050 K hot side and a 400 K radiator has a limit of
$1 - 400/1050 = 62\%$. Run the radiator at 500 K and the limit drops to 52%, but each m² of radiator sheds
$(500/400)^4 = 2.4$ times as much heat, so the radiator can be much smaller.

## Try it

1. Find the Carnot limit for $T_h = 600$ K and $T_c = 300$ K.
2. Why must the temperatures be in kelvin?
3. An engine takes in 1,000 J of heat and does 300 J of work. How much heat goes to the cold side?
4. Find the Carnot limit with a 900 K hot side and Mars's average surface temperature as the cold side.

??? note "Answers"
    1. $1 - 300/600 = 50\%$.
    2. The formula uses the ratio of temperatures, which only makes sense measured from absolute zero. 0 °C is not zero
       heat.
    3. $1000 - 300 = 700$ J.
    4. $1 - 214/900 = 76\%$.

## Common mistake

**Using °C.** With a hot side of 527 °C and a cold side of 27 °C, $1 - 27/527$ gives 95%, far too high. In kelvin it is
$1 - 300/800 = 62.5\%$.

## Where it leads

- Back: [A reactor for Mars](03-a-reactor-for-mars.md) · Next: [A city energy budget](05-a-city-energy-budget.md)
- [Level 8 page](index.md) · [Energy and power topic page](../index.md)
- Temperature and heat: [Heat](../../heat/index.md). The temperatures: NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
