---
title: "The Coriolis effect"
---

# The Coriolis effect

*Air and fluids · level 8, lesson 4 of 6*

## A question to start

On a weather map, the wind does not blow straight from high to low pressure. It swirls round the lows instead. What turns
it?

## The idea

A planet spins. Seen from the spinning ground, anything moving across it seems to be pushed sideways: to the **right**
in the northern hemisphere, to the **left** in the southern. This is the **Coriolis effect**. Its size is set by the
**Coriolis parameter**

$$f = 2\Omega \sin\varphi,$$

where $\Omega$ is the planet's spin rate in radians per second and $\varphi$ the latitude. A wind of speed $v$ feels a
sideways acceleration $f v$.

Away from the ground, the wind settles where the Coriolis push balances the pressure push. Then it blows **along** the
lines of equal pressure, at the **geostrophic** speed:

$$v_g = \frac{1}{\rho f}\,\frac{\Delta p}{\Delta x}.$$

| Spin | Mars | Earth |
| --- | --- | --- |
| Sidereal day | 24.6229 h | 23.9345 h |
| $\Omega = 2\pi/\text{day}$ | $7.09\times10^{-5}$ rad/s | $7.29\times10^{-5}$ rad/s |
| $f$ at 45° | $1.00\times10^{-4}$ s⁻¹ | $1.03\times10^{-4}$ s⁻¹ |

Mars and Earth spin at almost the same rate, so the Coriolis effect is almost the same on both.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Wind around a low pressure centre in the northern hemisphere. Arrows from outside point in towards the low but bend to the right, so the air circles the low anticlockwise.">
  <g fill="none" stroke="currentColor" stroke-dasharray="4 3"><circle cx="165" cy="70" r="25"/><circle cx="165" cy="70" r="50"/></g>
  <g fill="none" stroke="#5aa0d8" stroke-width="2"><path d="M165 5 Q120 15 118 50"/><path d="M230 70 Q220 25 182 22"/><path d="M165 135 Q210 125 212 90"/><path d="M100 70 Q110 115 148 118"/></g>
  <g fill="#5aa0d8"><path d="M113 48 l5 9 l5 -9 z"/><path d="M184 17 l-9 5 l9 5 z"/><path d="M207 92 l5 -9 l5 9 z"/><path d="M146 113 l9 5 l-9 5 z"/></g>
  <g font-size="12" fill="currentColor"><text x="155" y="75">low</text></g><g font-size="11" fill="currentColor"><text x="240" y="125">northern</text><text x="240" y="138">hemisphere</text></g>
</svg>
</div>

## Worked examples

**1. Mars's spin.** $\Omega = 2\pi/(24.6229 \times 3600) = 7.09\times10^{-5}$ rad/s. At 45°:
$f = 2 \times 7.09\times10^{-5} \times 0.707 = 1.00\times10^{-4}$ s⁻¹.

**2. A Mars geostrophic wind.** A 1% pressure difference over 1,000 km gives $\frac{1}{\rho}\frac{\Delta p}{\Delta x} =
4.0\times10^{-4}$ m/s². So $v_g = 4.0\times10^{-4}/1.00\times10^{-4} = 4.0$ m/s.

**3. On Earth**, the same 1% over 1,000 km: $8.3\times10^{-4}/1.03\times10^{-4} = 8.1$ m/s.

## Try it

1. Which way does the Coriolis effect turn a wind in the southern hemisphere?
2. Find $f$ on Mars at 20° latitude.
3. Why is the Coriolis effect almost the same on Mars as on Earth?
4. Why is there no geostrophic wind at the equator?

??? note "Answers"
    1. To the left.
    2. $2 \times 7.09\times10^{-5} \times \sin 20° = 4.85\times10^{-5}$ s⁻¹.
    3. Both planets spin once in about 24 hours.
    4. $\sin 0° = 0$, so $f = 0$ and there is no sideways push to balance the pressure push.

## Common mistake

**"The Coriolis effect makes bathwater swirl one way."** In a bath, it is far too weak to matter. It matters for
winds that travel hundreds of kilometres over many hours.

## Where it leads

- Back: [Pressure gradients](03-pressure-gradients.md) · Next: [Global winds](05-global-winds.md)
- [Level 8 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). Rotating frames:
  [Forces and motion](../../forces/index.md).
