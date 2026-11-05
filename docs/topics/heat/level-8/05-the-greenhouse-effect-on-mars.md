---
title: "The greenhouse effect on Mars"
---

# The greenhouse effect on Mars

*Heat and matter · level 8, lesson 5 of 6*

## A question to start

Mars's air is 95% carbon dioxide, the gas that warms Earth. Above each square metre of Mars there is about 25 times
as much carbon dioxide as above Earth. So why does Mars's air warm it by only a few degrees?

## The idea

A planet absorbs sunlight and radiates infrared. With no air at all, it would settle where the two balance. It absorbs
over its cross-section $\pi R^2$ a share $1 - A$ of the sunlight $S$ ($A$ is its **albedo**, the share reflected), and
radiates from its whole surface $4\pi R^2$:

$$S(1 - A)\,\pi R^2 = \sigma T^4 \times 4\pi R^2 \quad\Rightarrow\quad T = \left(\frac{S(1 - A)}{4\sigma}\right)^{1/4}.$$

This is the **black-body temperature**. A **greenhouse effect** is anything that makes the real average warmer: gases
that absorb the surface's infrared and send some back.

| Black-body temperature against the real average | Mars | Earth |
| --- | --- | --- |
| Sunlight $S$ | 586 W/m² | 1,361 W/m² |
| Albedo $A$ | 0.250 | 0.294 |
| Black-body temperature | 210 K | 254 K |
| Real average | 214 K | 288 K |
| Warming from the air | about 4 K | about 34 K |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Two pairs of bars. For Mars, the black-body temperature of 210 kelvin and the real 214 kelvin are almost the same height. For Earth, the real 288 kelvin is clearly taller than the black-body 254 kelvin.">
  <g fill="#cfc8bf"><rect x="50" y="35" width="30" height="84"/><rect x="190" y="18" width="30" height="101"/></g>
  <g fill="#d86a3a"><rect x="85" y="33" width="30" height="86"/></g><g fill="#5aa0d8"><rect x="225" y="4" width="30" height="115"/></g>
  <line x1="30" y1="119" x2="300" y2="119" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="55" y="134">Mars: 210 and 214 K</text><text x="185" y="134">Earth: 254 and 288 K</text></g>
</svg>
</div>

Why so little on Mars, with so much carbon dioxide?

- **Thin air.** At low pressure, each carbon dioxide molecule absorbs infrared over a narrower band of wavelengths, so
  much of the surface's infrared slips out between the bands.
- **No water vapour.** On Earth, water vapour is the biggest greenhouse gas, and its warming boosts the carbon
  dioxide's. Mars's air is almost dry.

## Worked examples

**1. Mars.** $T = \left(\dfrac{586 \times 0.75}{4 \times 5.67\times10^{-8}}\right)^{1/4} = (1.94\times10^9)^{1/4} = 210$ K.

**2. Earth.** $T = \left(\dfrac{1361 \times 0.706}{4 \times 5.67\times10^{-8}}\right)^{1/4} = (4.24\times10^9)^{1/4} = 255$ K,
close to NASA's 254 K.

**3. The carbon dioxide.** Mars: 171 kg of air over each m², about 96% carbon dioxide by mass: 165 kg. Earth: 10,300
kg of air with 426 parts per million of carbon dioxide by volume, about 0.065% by mass: 6.7 kg. Mars has about 25 times
as much.

## Try it

1. What is a planet's albedo?
2. Why does the formula divide by 4?
3. If Mars's albedo were 0.15, what would its black-body temperature be?
4. Give two reasons Mars's greenhouse warming is so small.

??? note "Answers"
    1. The share of sunlight it reflects back to space.
    2. It catches sunlight over a disc of area $\pi R^2$ but radiates from a sphere of area $4\pi R^2$.
    3. $(586 \times 0.85/2.268\times10^{-7})^{1/4} = (2.20\times10^9)^{1/4} \approx 216$ K.
    4. Its thin air lets carbon dioxide absorb only narrow bands of infrared, and it has almost no water vapour.

## Common mistake

**"More carbon dioxide always means more warming, whatever the air."** How much a gas warms a planet depends on the
pressure, the other gases, and water vapour too. Mars has more carbon dioxide per square metre than Earth, but far less
greenhouse warming.

## Where it leads

- Back: [Engines and cycles](04-engines-and-cycles.md) · Next: [The climate of Mars](06-the-climate-of-mars.md)
- [Level 8 page](index.md) · [Heat and matter topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html),
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html), and NOAA's
  [carbon dioxide record](https://gml.noaa.gov/ccgg/trends/global.html). Infrared and spectra:
  [Waves, sound and light](../../waves/index.md).
