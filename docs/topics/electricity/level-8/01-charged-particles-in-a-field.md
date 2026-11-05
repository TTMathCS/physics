---
title: "Charged particles in a field"
---

# Charged particles in a field

*Electricity and magnetism · level 8, lesson 1 of 6*

## A question to start

A proton from the Sun reaches Earth's magnetic field. It is not stopped, yet it cannot fly straight on either. What path
does it follow?

## The idea

A charge $q$ moving at speed $v$ at right angles to a field $B$ feels a force

$$F = qvB,$$

at right angles to both its motion and the field. The force never speeds the particle up or slows it down; it only
turns it. So the particle moves in a **circle**, with the magnetic force as the centripetal force:

$$qvB = \frac{mv^2}{r} \quad\Rightarrow\quad r = \frac{mv}{qB}.$$

This is the **gyroradius**. One trip round takes $T = 2\pi m/(qB)$, whatever the speed.

If the particle also moves **along** the field, that part of its motion is not affected, so it **spirals** along the
field lines. That is how auroral particles are guided down to the poles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Left: a positive particle moving in a circle in a field pointing out of the page, with the force always pointing to the centre. Right: a particle spiralling along a field line.">
  <g fill="currentColor"><circle cx="30" cy="20" r="2"/><circle cx="60" cy="20" r="2"/><circle cx="90" cy="20" r="2"/><circle cx="120" cy="20" r="2"/><circle cx="30" cy="120" r="2"/><circle cx="60" cy="120" r="2"/><circle cx="90" cy="120" r="2"/><circle cx="120" cy="120" r="2"/><circle cx="20" cy="70" r="2"/><circle cx="130" cy="70" r="2"/></g>
  <circle cx="75" cy="70" r="40" fill="none" stroke="#5aa0d8" stroke-width="2"/>
  <circle cx="115" cy="70" r="6" fill="#d86a3a"/><line x1="108" y1="70" x2="88" y2="70" stroke="#d86a3a" stroke-width="2"/><path d="M90 66 l-8 4 l8 4 z" fill="#d86a3a"/>
  <line x1="180" y1="70" x2="320" y2="70" stroke="currentColor" stroke-dasharray="4 3"/>
  <path d="M180 70 C190 40 200 40 205 70 S220 100 230 70 S245 40 255 70 S270 100 280 70 S295 40 305 70" fill="none" stroke="#eea66f" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="20" y="137">field out of the page: a circle</text><text x="190" y="120">spiral along a field line</text></g>
</svg>
</div>

## Worked examples

**1. In the solar wind.** A proton ($m = 1.67\times10^{-27}$ kg, $q = 1.60\times10^{-19}$ C) at 400 km/s in a 5 nT
field: $r = 1.67\times10^{-27} \times 4\times10^5/(1.60\times10^{-19} \times 5\times10^{-9}) = 835$ km.

**2. Near the ground on Earth.** The same proton in a 30 µT field: $r = 6.68\times10^{-22}/(4.8\times10^{-24}) = 139$ m.

**3. An electron.** It has the same charge but $9.11\times10^{-31}$ kg, 1,836 times less mass, so at the same speed its
circle is 1,836 times smaller.

## Try it

1. Why does a magnetic field not change a particle's speed?
2. Find the radius for a proton at $1\times10^6$ m/s in a 0.1 T field.
3. Find the time for one trip round for a proton in a 30 µT field.
4. A particle moves straight along a field line. What force does it feel?

??? note "Answers"
    1. The force is always at right angles to the motion, so it does no work.
    2. $1.67\times10^{-27} \times 10^6/(1.6\times10^{-19} \times 0.1) = 0.10$ m, about 10 cm.
    3. $2\pi \times 1.67\times10^{-27}/(1.6\times10^{-19} \times 3\times10^{-5}) = 2.2\times10^{-3}$ s.
    4. None: $v$ is along $B$, so there is no part of the motion at right angles to the field.

## Common mistake

**"A stronger field makes the particle go faster."** A stronger field makes a **tighter** circle, at the same speed.

## Where it leads

- Back: [Motors on Mars](../level-7/06-motors-on-mars.md) · Next: [The solar wind](02-the-solar-wind.md)
- [Level 8 page](index.md) · [Electricity and magnetism topic page](../index.md)
- Circular motion: [Centripetal force](../../forces/level-7/02-centripetal-force.md).
