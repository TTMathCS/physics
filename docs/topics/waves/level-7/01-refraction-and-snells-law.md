---
title: "Refraction and Snell's law"
---

# Refraction and Snell's law

*Waves, sound and light · level 7, lesson 1 of 6*

## A question to start

An optical fibre carries light round corners, for kilometres, with almost no loss. How can light be trapped inside a
thin strand of glass?

## The idea

When light crosses from a medium of refractive index $n_1$ into one of index $n_2$, the angles to the normal obey
**Snell's law**:

$$n_1 \sin\theta_1 = n_2 \sin\theta_2.$$

Going from a **slower** medium (bigger $n$) to a faster one, the ray bends away from the normal. At one angle, the
**critical angle** $\theta_c$, the refracted ray runs along the surface:

$$\sin\theta_c = \frac{n_2}{n_1}.$$

Beyond the critical angle, no light gets out: it is all reflected. This is **total internal reflection**, and it traps
light inside an optical fibre.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Three rays inside glass hitting the surface with air. A small angle ray refracts out. A ray at the critical angle runs along the surface. A ray beyond the critical angle is totally reflected back into the glass.">
  <rect x="10" y="70" width="310" height="65" fill="#5aa0d8" opacity=".35"/><line x1="10" y1="70" x2="320" y2="70" stroke="currentColor"/>
  <g stroke-width="2"><line x1="60" y1="130" x2="80" y2="70" stroke="#eea66f"/><line x1="80" y1="70" x2="110" y2="15" stroke="#eea66f"/>
  <line x1="126" y1="130" x2="180" y2="70" stroke="#d86a3a"/><line x1="180" y1="70" x2="240" y2="70" stroke="#d86a3a"/>
  <line x1="215" y1="130" x2="280" y2="70" stroke="currentColor"/><line x1="280" y1="70" x2="320" y2="107" stroke="currentColor"/></g>
  <g font-size="10" fill="currentColor"><text x="20" y="30">air</text><text x="20" y="100">glass</text><text x="95" y="40">refracted out</text><text x="150" y="60">critical angle</text><text x="235" y="60">totally reflected</text></g>
</svg>
</div>

## Worked examples

**1. Air into water.** A ray hits water at 40° to the normal: $\sin\theta_2 = \sin 40°/1.33 = 0.483$, so $\theta_2 = 28.9°$.

**2. Critical angle of glass** ($n = 1.5$) into air: $\sin\theta_c = 1/1.5 = 0.667$, so $\theta_c = 41.8°$.

**3. Water into air:** $\sin\theta_c = 1/1.33$, so $\theta_c = 48.8°$. A fish looking up sees the outside world squeezed
into a circle overhead.

## Try it

1. State Snell's law.
2. Light goes from air into glass ($n = 1.5$) at 60° to the normal. Find the angle in the glass.
3. Find the critical angle for diamond, $n = 2.42$.
4. Why can total internal reflection only happen going from a slower medium into a faster one?

??? note "Answers"
    1. $n_1 \sin\theta_1 = n_2 \sin\theta_2$.
    2. $\sin\theta_2 = 0.866/1.5 = 0.577$: $\theta_2 = 35.3°$.
    3. $\sin\theta_c = 1/2.42 = 0.413$: $\theta_c = 24.4°$.
    4. Only then does the ray bend away from the normal, so it can reach 90° and beyond.

## Common mistake

**Using the angle to the surface.** Snell's law uses angles to the **normal**. A ray 30° above the surface is at 60° to
the normal.

## Where it leads

- Back: [Colour cameras on Mars](../level-6/06-colour-cameras-on-mars.md) · Next: [Converging lenses](02-converging-lenses.md)
- [Level 7 page](index.md) · [Waves, sound and light topic page](../index.md)
- Refraction without the maths: [Refraction](../level-5/05-refraction.md).
