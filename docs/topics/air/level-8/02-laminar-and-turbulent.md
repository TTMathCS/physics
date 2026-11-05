---
title: "Laminar and turbulent"
---

# Laminar and turbulent

*Air and fluids · level 8, lesson 2 of 6*

## A question to start

Smoke from a candle rises in a smooth thread, then suddenly breaks into swirls. Why does a flow change from smooth to
chaotic?

## The idea

At low Reynolds number, a flow is **laminar**: the fluid slides in smooth layers, and a disturbance dies away. At high
Reynolds number, small disturbances grow into eddies, and the flow becomes **turbulent**: chaotic and full of mixing.

For flow in a round pipe, with $L$ the diameter:

| $Re$ in a pipe | Flow |
| --- | --- |
| below about 2,000 | laminar |
| about 2,000 to 4,000 | in between |
| above about 4,000 | turbulent |

Turbulence **mixes** things fast: heat, dust, gases. It also raises drag in pipes, because the eddies waste energy.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Two pipes. In the top one, laminar flow runs in straight, parallel lines. In the bottom one, turbulent flow is a tangle of swirls and eddies.">
  <g fill="none" stroke="currentColor"><rect x="20" y="15" width="290" height="45"/><rect x="20" y="80" width="290" height="45"/></g>
  <g stroke="#5aa0d8" stroke-width="2"><line x1="25" y1="25" x2="305" y2="25"/><line x1="25" y1="37" x2="305" y2="37"/><line x1="25" y1="49" x2="305" y2="49"/></g>
  <path d="M25 102 C45 85 60 120 80 100 S115 85 120 108 S150 120 165 95 S200 88 210 110 S245 120 255 96 S290 92 305 104" fill="none" stroke="#d86a3a" stroke-width="2"/>
  <g fill="none" stroke="#d86a3a"><circle cx="100" cy="112" r="6"/><circle cx="190" cy="92" r="5"/><circle cx="270" cy="113" r="6"/></g>
  <g font-size="11" fill="currentColor"><text x="25" y="10">laminar: low Re</text><text x="25" y="138">turbulent: high Re</text></g>
</svg>
</div>

On a planet, the sizes are huge, so the Reynolds number of the wind is huge too, even on Mars.

| Wind of 5 m/s | Mars | Earth |
| --- | --- | --- |
| Past a 1 m rock | $Re \approx 7{,}300$ | $Re \approx 340{,}000$ |
| Over a 100 m hill | $Re \approx 730{,}000$ | $Re \approx 3.4\times10^7$ |

So Mars's winds are turbulent at the scale of hills and craters, just like Earth's. Mars's thin air only feels syrupy at
small scales: dust grains, rotor blades, small sensors.

## Worked examples

**1. A water pipe in a base.** Diameter 0.02 m, water at 1 m/s, $\mu = 1.0\times10^{-3}$ Pa s:
$Re = 1000 \times 1 \times 0.02/0.001 = 20{,}000$. Turbulent.

**2. Honey** in the same pipe, with $\mu \approx 10$ Pa s and $\rho = 1400$ kg/m³: $Re = 1400 \times 1 \times 0.02/10 = 2.8$.
Laminar.

**3. The fastest laminar water.** For $Re = 2000$ in the 0.02 m pipe: $v = 2000 \times 0.001/(1000 \times 0.02) = 0.1$ m/s.

## Try it

1. What is the difference between laminar and turbulent flow?
2. Air in a habitat duct 0.2 m wide moves at 2 m/s, with $\rho = 1.0$ kg/m³ and $\mu = 1.8\times10^{-5}$ Pa s. Laminar or
   turbulent?
3. Why is Mars's wind turbulent over hills, even though its air is so thin?
4. Why does turbulence matter for how fast dust and heat spread in a planet's air?

??? note "Answers"
    1. Laminar flow moves in smooth layers; turbulent flow is chaotic, with eddies.
    2. $Re = 1.0 \times 2 \times 0.2/(1.8\times10^{-5}) \approx 22{,}000$: turbulent.
    3. The sizes are so large that $Re$ is still very high.
    4. Eddies mix the air much faster than smooth flow can.

## Common mistake

**"Thin air flows smoothly."** Whether a flow is turbulent depends on $Re$, which also grows with speed and size. Over
hills and plains, Mars winds are fully turbulent.

## Where it leads

- Back: [The Reynolds number](01-the-reynolds-number.md) · Next: [Pressure gradients](03-pressure-gradients.md)
- [Level 8 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: [The Reynolds number](01-the-reynolds-number.md), the
  [NIST fluid properties](https://webbook.nist.gov/chemistry/fluid/), and NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
