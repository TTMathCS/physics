---
title: "Sankey diagrams"
---

# Sankey diagrams

*Energy and power · level 6, lesson 2 of 6*

## A question to start

How could you show, in one picture, where every watt of a rover's power goes, so that the big losses jump out at you?

## The idea

A **Sankey diagram** draws energy as arrows whose **width** is proportional to the amount. The arrow comes in from the
left at full width and splits:

- the **useful** output carries on to the right;
- **wasted** energy bends off, usually downwards.

Because energy is conserved, the widths of the arrows going out always add up to the width coming in.

Here is one for Perseverance's MMRTG at launch: about 2,000 W of heat from its plutonium, turned into about 110 W of
electricity.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 180" role="img" aria-label="A Sankey diagram. A wide band of 2,000 watts of heat comes in from the left. A very thin band of 110 watts of electricity goes on to the right. A very wide band of 1,890 watts of heat bends downwards; some of it keeps the rover warm.">
  <rect x="10" y="20" width="90" height="100" fill="#d86a3a" opacity=".8"/>
  <rect x="100" y="20" width="180" height="6" fill="#5aa0d8"/><path d="M280 14 l14 9 l-14 9 z" fill="#5aa0d8"/>
  <path d="M100 26 A104 104 0 0 1 204 130 V150 H110 V130 A10 10 0 0 0 100 120 Z" fill="#d86a3a" opacity=".55"/>
  <path d="M104 150 H210 L157 170 Z" fill="#d86a3a" opacity=".55"/>
  <g font-size="12" fill="currentColor"><text x="15" y="75">heat in</text><text x="15" y="92">2,000 W</text><text x="140" y="14">electricity 110 W</text>
  <text x="214" y="90">heat 1,890 W,</text><text x="214" y="106">some piped round</text><text x="214" y="122">to keep the</text><text x="214" y="138">rover warm</text></g>
</svg>
</div>

The diagram shows at a glance that the MMRTG is mainly a heater. That is fine on Mars: the rover needs warmth at night,
and pipes of fluid carry some of the heat to its insides.

## Worked examples

**1. A house's heating boiler.** 10 kW of gas in; 9 kW warms the water; 1 kW goes up the flue. Draw a 10 mm arrow
splitting into 9 mm on and 1 mm off.

**2. A solar-powered rover's day.** 1,000 Wh of sunlight on the panels → 280 Wh electricity (720 Wh heat in the panels).
Of the 280 Wh: 250 Wh through the battery (25 Wh lost charging and discharging) and 30 Wh used straight away.

**3. Reading one.** A Sankey arrow 60 mm wide in has 15 mm going on as light. The efficiency is $15/60 = 25\%$.

## Try it

1. What does the width of a Sankey arrow show?
2. A motor takes in 400 W: 340 W motion, 50 W heat, 10 W sound. Sketch its Sankey diagram.
3. What is the motor's efficiency?
4. Why do the outgoing arrows add up to the incoming one?

??? note "Answers"
    1. The amount of energy (or power).
    2. A 400-wide arrow splitting into 340 on, and 50 and 10 bending off.
    3. $340/400 = 85\%$.
    4. Energy is conserved: all of it goes somewhere.

## Common mistake

**Arrows that do not add up.** If the outputs are narrower than the input, some energy has been left out, often heat.
Find it before you finish.

## Where it leads

- Back: [Efficiency](01-efficiency.md) · Next: [Sunlight at Mars](03-sunlight-at-mars.md)
- [Level 6 page](index.md) · [Energy and power topic page](../index.md)
- The MMRTG's figures: NASA's
  [MMRTG fact sheet](https://science.nasa.gov/wp-content/uploads/2024/02/mmrtg-factsheet-updated-5-18-20-1.pdf).
