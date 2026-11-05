---
title: "Dust devils"
---

# Dust devils

*Air and fluids · level 7, lesson 6 of 6*

## A question to start

On 27 September 2021, a dust devil passed right over Perseverance, and its microphone recorded the wind and the patter
of dust grains. What makes a dust devil spin, and what is it like inside?

## The idea

On a sunny day, the ground heats the air just above it. The warm air rises (convection), and air rushes in along the
ground to replace it. If that air has even a little spin, it **spins faster as it moves inward**, like a skater pulling in
their arms. For a ring of air with no twisting forces on it, speed times radius stays fixed:

$$v r = \text{constant}.$$

Spinning air needs a force towards the centre to keep it going round, and the only force available is a pressure
difference. So the core of a dust devil has **low pressure**. A simple model gives a drop of about

$$\Delta p \approx \rho v_\text{max}^2,$$

where $v_\text{max}$ is the fastest wind in the vortex.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A dust devil seen from the side. Warm air rises in the centre. Air flows in along the ground from both sides, spinning faster as it gets closer. The core is marked low pressure.">
  <line x1="10" y1="135" x2="320" y2="135" stroke="currentColor"/>
  <path d="M155 133 C150 100 130 60 115 15 L215 15 C200 60 180 100 175 133 Z" fill="#d86a3a" opacity=".35"/>
  <g fill="none" stroke="#d86a3a" stroke-width="2"><ellipse cx="165" cy="35" rx="42" ry="7"/><ellipse cx="165" cy="75" rx="25" ry="5"/><ellipse cx="165" cy="110" rx="13" ry="3"/></g>
  <g stroke="#5aa0d8" stroke-width="2"><line x1="30" y1="128" x2="140" y2="128"/><line x1="300" y1="128" x2="190" y2="128"/><line x1="165" y1="100" x2="165" y2="50"/></g>
  <g fill="#5aa0d8"><path d="M140 123 l10 5 l-10 5 z"/><path d="M190 123 l-10 5 l10 5 z"/><path d="M159 50 l6 -10 l6 10 z"/></g>
  <g font-size="11" fill="currentColor"><text x="20" y="118">air flows in</text><text x="225" y="118">and spins faster</text><text x="215" y="75">low-pressure core</text><text x="60" y="60">warm air rises</text></g>
</svg>
</div>

| A dust devil with a 10.7 m/s top wind | Mars | Earth |
| --- | --- | --- |
| Air density | 0.016 kg/m³ | 1.217 kg/m³ |
| Pressure drop in the core, about $\rho v^2$ | 1.8 Pa | 139 Pa |
| As a share of the air pressure | 0.3% | 0.14% |

The dust devil over Perseverance was about 25 m wide, at least 118 m tall, and moved at about 5 m/s. The rover's
weather station measured a top wind of 10.7 m/s. On Mars, dust devils usually show up as pressure dips of 0.3 Pa to a
few pascals. Perseverance spotted 91 of them in its first 216 sols.

## Worked examples

**1. Spinning up.** Air 50 m from the centre circles at 1 m/s. At 5 m from the centre: $v = 1 \times 50/5 = 10$ m/s.

**2. The core pressure on Mars.** $0.016 \times 10.7^2 = 1.8$ Pa, inside the measured range of a few pascals.

**3. Share of the pressure.** $1.8/636 = 0.3\%$. Small in pascals, but a bigger share of Mars's air pressure than the
same storm would be on Earth.

## Try it

1. Why does air spin faster as it moves towards the centre of a dust devil?
2. Air circling at 2 m/s, 30 m from the centre, moves in to 6 m. How fast does it go now?
3. Why must the core of a dust devil have low pressure?
4. Find the core pressure drop for a 20 m/s Mars dust devil.

??? note "Answers"
    1. Speed times radius stays fixed, so a smaller radius means a higher speed.
    2. $2 \times 30/6 = 10$ m/s.
    3. The spinning air needs a force towards the centre, which only a pressure difference can give.
    4. $0.016 \times 400 = 6.4$ Pa.

## Common mistake

**"Dust devils are tornadoes."** Tornadoes hang from storm clouds. Dust devils grow from the ground up, on sunny days,
from air heated by the ground.

## Where it leads

- Back: [How Ingenuity flew](05-how-ingenuity-flew.md) · Next level: [Level 8: Winds of a planet](../level-8/index.md)
- [Level 7 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: the [sound of a Martian dust devil](https://www.nature.com/articles/s41467-022-35100-z) and NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html). Rising warm air:
  [Convection](../../heat/level-3/04-convection.md).
