---
title: "How Ingenuity flew"
---

# How Ingenuity flew

*Air and fluids · level 7, lesson 5 of 6*

## A question to start

Ingenuity was built to make up to five test flights in 30 days. It made 72 flights over almost three years. How much
power does a helicopter need just to hang in Mars's thin air?

## The idea

A hovering rotor pushes air down. Picture the rotor as a disc of area $A$ that speeds air up to $v_i$ as it passes
through. **Momentum theory** gives the thrust and the least possible power:

$$T = 2\rho A v_i^2, \qquad P = T v_i.$$

To hover, the thrust equals the weight, $T = mg$. Solve for the air speed through the disc:

$$v_i = \sqrt{\frac{mg}{2\rho A}}, \qquad P = mg\,v_i.$$

Thin air means the rotor must throw the air down much faster to make the same thrust, and that costs power.

| Ingenuity hovering: 1.8 kg, rotor disc 1.2 m across | Mars | Earth |
| --- | --- | --- |
| Weight | 6.7 N | 17.7 N |
| Air speed through the disc, $v_i$ | 13.6 m/s | 2.5 m/s |
| Least possible power | 91 W | 45 W |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A helicopter rotor disc seen from the side. Air above is drawn in slowly and pushed down through the disc in a narrowing stream. An arrow shows the thrust pushing up on the rotor.">
  <rect x="115" y="60" width="100" height="4" fill="currentColor"/><rect x="155" y="64" width="20" height="22" fill="#cfc8bf" stroke="currentColor"/>
  <g fill="none" stroke="#5aa0d8" stroke-width="2"><path d="M100 10 Q115 50 125 70 Q135 100 140 140"/><path d="M230 10 Q215 50 205 70 Q195 100 190 140"/></g>
  <g stroke="#5aa0d8" stroke-width="2"><line x1="165" y1="95" x2="165" y2="130"/></g><path d="M159 130 l6 10 l6 -10 z" fill="#5aa0d8"/>
  <line x1="250" y1="62" x2="250" y2="25" stroke="#d86a3a" stroke-width="4"/><path d="M242 27 l8 -12 l8 12 z" fill="#d86a3a"/>
  <g font-size="11" fill="currentColor"><text x="262" y="40">thrust</text><text x="20" y="70">rotor disc</text><text x="205" y="120">air pushed down</text></g>
</svg>
</div>

The real helicopter used about **350 W** on average in flight, from batteries charged by a solar panel, enough for about
a 90-second flight each Mars day. The ideal 91 W leaves out losses: drag on the blades, the motors and the electronics.

## Worked examples

**1. Disc area.** The two rotors share one disc: $A = \pi \times 0.6^2 = 1.13$ m².

**2. Mars.** $v_i = \sqrt{6.68/(2 \times 0.016 \times 1.13)} = \sqrt{185} = 13.6$ m/s; $P = 6.68 \times 13.6 = 91$ W.

**3. One flight's energy.** $350 \times 90 = 31{,}500$ J, about 8.8 Wh: what a 9 W LED bulb uses in an hour.

## Try it

1. Why does a helicopter need more power to hover in thinner air?
2. Ingenuity's ideal power on Earth is 45 W. Why is it lower than on Mars, even though Ingenuity weighs more on Earth?
3. What share of the 350 W real power is the ideal 91 W?
4. NASA says Ingenuity flew a total of 128.8 minutes and 17.0 km. Find its average speed in flight.

??? note "Answers"
    1. It must push the air down faster for the same thrust, and power is thrust times that speed.
    2. Earth air is 75 times denser, so the rotor can make thrust by pushing a lot of air down slowly.
    3. $91/350 = 26\%$.
    4. $17{,}000/(128.8 \times 60) = 2.2$ m/s.

## Common mistake

**"Less weight on Mars, so less power."** Power to hover goes with $\sqrt{(mg)^3/\rho}$. Mars's thin air outweighs its
weaker gravity, so hovering costs about twice as much power as it would on Earth.

## Where it leads

- Back: [The lift equation](04-the-lift-equation.md) · Next: [Dust devils](06-dust-devils.md)
- [Level 7 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Ingenuity page](https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/)
  and [end of Ingenuity's mission](https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/).
  Rotor speeds: [Propellers and rotors](../level-6/06-propellers-and-rotors.md).
