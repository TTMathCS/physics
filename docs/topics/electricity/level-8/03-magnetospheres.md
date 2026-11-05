---
title: "Magnetospheres"
---

# Magnetospheres

*Electricity and magnetism · level 8, lesson 3 of 6*

## A question to start

The solar wind pushes on Earth's magnetic field, and the field pushes back. How far out do they balance?

## The idea

A magnetic field has its own pressure, $B^2/(2\mu_0)$. A planet's field holds off the solar wind out to where the two
pressures balance:

$$\frac{B^2}{2\mu_0} = \rho v^2.$$

The bubble inside is the planet's **magnetosphere**, and its edge is the **magnetopause**. For a field like a bar
magnet's (a **dipole**), $B$ falls with the cube of the distance: $B = B_0 (R/r)^3$, where $B_0$ is the field at the
equator on the surface. Putting that in:

$$\frac{r}{R} = \left(\frac{B_0^2}{2\mu_0\,\rho v^2}\right)^{1/6}.$$

| Holding off the solar wind | Mars | Earth |
| --- | --- | --- |
| Planet-wide field at the equator | none | 30.6 µT |
| What meets the solar wind | the upper air, with patches of crustal field | the magnetopause, about 10 Earth radii out |

Mars has no global field to push back. So the solar wind runs almost into its upper air. There, the wind's own field
drapes round the planet, and in places the magnetized crust makes small bubbles of its own.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Left: the solar wind arrives from the left at Earth, whose field makes a large bubble with a long tail. Right: at Mars, the solar wind flows almost onto the planet, with only a thin boundary close above it.">
  <g stroke="#eea66f"><line x1="0" y1="25" x2="30" y2="25"/><line x1="0" y1="75" x2="30" y2="75"/><line x1="0" y1="125" x2="30" y2="125"/></g>
  <path d="M175 20 L95 25 Q45 75 95 125 L175 130" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="90" cy="75" r="12" fill="#5aa0d8" stroke="currentColor"/>
  <circle cx="265" cy="75" r="20" fill="#d86a3a" stroke="currentColor"/><path d="M320 45 L268 49 Q232 75 268 101 L320 105" fill="none" stroke="currentColor" stroke-width="2"/>
  <g stroke="#eea66f"><line x1="195" y1="40" x2="230" y2="50"/><line x1="195" y1="75" x2="232" y2="75"/><line x1="195" y1="110" x2="230" y2="100"/></g>
  <g font-size="11" fill="currentColor"><text x="5" y="15">solar wind</text><text x="70" y="145">Earth: a big bubble</text><text x="325" y="145" text-anchor="end">Mars: wind near the air</text></g>
</svg>
</div>

## Worked examples

**1. Earth's field pressure.** $B_0 = 30.6$ µT: $B_0^2/(2\mu_0) = (3.06\times10^{-5})^2/(2 \times 4\pi\times10^{-7}) =
3.7\times10^{-4}$ Pa.

**2. The balance.** With the wind at 1.34 nPa: $r/R = (3.7\times10^{-4}/1.34\times10^{-9})^{1/6} = (2.8\times10^5)^{1/6} = 8.1$.

**3. The real value.** At the magnetopause the squeezed field is about twice the plain dipole value, which pushes the
balance out by $2^{1/3} = 1.26$: $8.1 \times 1.26 \approx 10$ Earth radii, about 64,000 km.

## Try it

1. What sets the size of a magnetosphere?
2. A solar storm raises the wind's pressure 8 times. How far in is the magnetopause pushed?
3. Why does the distance depend so weakly on the wind's pressure?
4. Why can the solar wind come so close to Mars?

??? note "Answers"
    1. The balance between the planet's field pressure and the solar wind's pressure.
    2. $8^{1/6} = 1.41$, so to about $10/1.41 = 7$ Earth radii.
    3. The dipole field falls as $1/r^3$, so its pressure falls as $1/r^6$: a big change in pressure moves the balance only a little.
    4. It has no global field to push back, only the upper air and patches of crustal field.

## Common mistake

**"A magnetosphere is a hard wall."** Most particles are turned aside, but some leak in, especially when the Sun's field
lines join up with the planet's. That is how auroras get their particles.

## Where it leads

- Back: [The solar wind](02-the-solar-wind.md) · Next: [Planetary dynamos](04-planetary-dynamos.md)
- [Level 8 page](index.md) · [Electricity and magnetism topic page](../index.md)
- The figures: NASA's [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) and the
  [InSight magnetometer paper](https://www.nature.com/articles/s41561-020-0537-x).
