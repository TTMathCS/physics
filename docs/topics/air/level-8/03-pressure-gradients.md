---
title: "Pressure gradients"
---

# Pressure gradients

*Air and fluids · level 8, lesson 3 of 6*

## A question to start

Wind blows from high pressure towards low pressure. Mars's air pressure is tiny, so its pressure differences are tiny
too. Does that mean Mars's winds are weak?

## The idea

Take a slab of air of area $A$ and thickness $\Delta x$, with pressure $\Delta p$ higher on one side. The net force is
$A\,\Delta p$, and the mass is $\rho A\,\Delta x$. So the air speeds up at

$$a = \frac{1}{\rho}\,\frac{\Delta p}{\Delta x},$$

towards the low pressure. The small $\rho$ on Mars makes up for the small $\Delta p$. In fact, writing $\Delta p$ as a
fraction of the pressure $p$:

$$a = \frac{p}{\rho} \times \frac{\Delta p/p}{\Delta x}, \qquad \frac{p}{\rho} = \frac{RT}{M}.$$

So what matters is the **fractional** pressure difference, and $RT/M$, which is similar on the two planets.

| A 1% pressure difference over 1,000 km | Mars | Earth |
| --- | --- | --- |
| $p/\rho$ | 39,800 J/kg | 83,300 J/kg |
| $\Delta p$ | 6.4 Pa | 1,014 Pa |
| Acceleration of the air | $4.0\times10^{-4}$ m/s² | $8.3\times10^{-4}$ m/s² |
| Wind after an hour, if nothing else acts | 1.4 m/s | 3.0 m/s |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A slab of air between high pressure on the left and low pressure on the right. The pressure pushes harder on the left face, so the net force, and the wind, points to the right, from high to low.">
  <rect x="120" y="30" width="90" height="70" fill="#5aa0d8" opacity=".4" stroke="currentColor"/>
  <g stroke="#d86a3a" stroke-width="4"><line x1="70" y1="65" x2="115" y2="65"/></g><path d="M115 58 l12 7 l-12 7 z" fill="#d86a3a"/>
  <g stroke="#d86a3a" stroke-width="2"><line x1="260" y1="65" x2="222" y2="65"/></g><path d="M222 60 l-9 5 l9 5 z" fill="#d86a3a"/>
  <g font-size="11" fill="currentColor"><text x="20" y="50">high p</text><text x="265" y="50">low p</text><text x="135" y="120">slab of air</text><text x="100" y="20">net push: towards low p</text></g>
</svg>
</div>

Mars also has big **fractional** pressure differences: sunlight heats its thin air strongly, and its whole surface
pressure swings from about 4.0 to 8.7 mbar through the seasons.

## Worked examples

**1. Mars.** $\Delta p = 0.01 \times 636 = 6.4$ Pa; $a = 6.4/(0.016 \times 10^6) = 4.0\times10^{-4}$ m/s². After an hour:
$4.0\times10^{-4} \times 3600 = 1.4$ m/s.

**2. Earth.** $\Delta p = 1014$ Pa; $a = 1014/(1.217 \times 10^6) = 8.3\times10^{-4}$ m/s².

**3. $RT/M$.** Mars: $8.314 \times 214/0.04349 = 40{,}900$ J/kg, close to $636/0.016 = 39{,}800$.

## Try it

1. Why does the air speed up towards low pressure?
2. A 2% pressure difference over 500 km on Mars: find the acceleration.
3. Why do Mars's tiny pressure differences still make real winds?
4. In practice, a wind does not keep speeding up for hours. Give one thing that stops it.

??? note "Answers"
    1. The pressure pushes harder on the high-pressure side, so the net force points towards the low.
    2. $\Delta p = 12.7$ Pa over $5\times10^5$ m: $a = 12.7/(0.016 \times 5\times10^5) = 1.6\times10^{-3}$ m/s².
    3. Mars air is so light that a small force gives it a large acceleration.
    4. Friction with the ground, or the Coriolis effect turning the wind sideways.

## Common mistake

**"Low pressure means weak winds."** Winds are set by the pressure *difference* compared with the air's density. On Mars
both are small, and their ratio is similar to Earth's.

## Where it leads

- Back: [Laminar and turbulent](02-laminar-and-turbulent.md) · Next: [The Coriolis effect](04-the-coriolis-effect.md)
- [Level 8 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). $p/\rho = RT/M$:
  [The ideal gas law](../../heat/level-5/06-the-ideal-gas-law.md).
