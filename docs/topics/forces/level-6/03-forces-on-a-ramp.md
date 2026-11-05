---
title: "Forces on a ramp"
---

# Forces on a ramp

*Forces and motion · level 6, lesson 3 of 6*

## A question to start

A cart of rock samples sits on a ramp sloping at 20° into a Mars habitat. How hard does gravity pull it down the ramp?
How hard does it press into the ramp?

## The idea

Weight $mg$ points straight down. On a slope, it is useful to split it into two parts at right angles:

- **Along the slope** (down it): $mg \sin\theta$.
- **Into the slope** (perpendicular to it): $mg \cos\theta$.

Here $\theta$ is the angle of the slope. These two parts together make up the whole weight.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 210" role="img" aria-label="A block on a slope of angle theta. Its weight arrow points straight down. Two dashed arrows split it into a part down the slope, mg sin theta, and a part into the slope, mg cos theta. The normal force N points out of the slope.">
  <path d="M20 190 L310 190 L310 60 Z" fill="#d86a3a" opacity=".35" stroke="currentColor"/>
  <g transform="rotate(-24.1 170 128)"><rect x="150" y="108" width="40" height="22" fill="#eea66f" stroke="currentColor"/></g>
  <line x1="172" y1="122" x2="172" y2="195" stroke="#5aa0d8" stroke-width="3"/><path d="M166 192 l6 12 l6 -12 z" fill="#5aa0d8"/>
  <line x1="172" y1="122" x2="142" y2="135" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><path d="M146 129 l-12 9 l14 2 z" fill="currentColor"/>
  <line x1="172" y1="122" x2="200" y2="185" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><path d="M194 182 l9 11 l2 -14 z" fill="currentColor"/>
  <line x1="172" y1="122" x2="148" y2="68" stroke="#eea66f" stroke-width="3"/><path d="M143 74 l1 -14 l10 9 z" fill="#eea66f"/>
  <path d="M60 190 a40 40 0 0 0 -4 -16" fill="none" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="64" y="184">θ</text><text x="180" y="205">mg</text><text x="60" y="145">mg sin θ</text><text x="210" y="170">mg cos θ</text><text x="120" y="60">N</text></g>
</svg>
</div>

Into the slope, nothing moves, so the ramp pushes back with the **normal force**

$$N = mg\cos\theta.$$

That is less than $mg$: on a slope, an object presses less hard on the surface than on flat ground. So the friction
limit $\mu_s N$ is smaller too.

Check the extremes: on flat ground ($\theta = 0$), $\sin 0 = 0$ and $\cos 0 = 1$, so no pull along it and $N = mg$. On
a vertical wall ($\theta = 90°$), all of the weight pulls along the "slope", and $N = 0$.

## Worked examples

**1. The sample cart on Mars.** $m = 150$ kg, $\theta = 20°$. Weight $= 150 \times 3.71 = 557$ N.
Along the slope: $557 \times \sin 20° = 557 \times 0.342 = 190$ N. Into it: $557 \times 0.940 = 523$ N.

**2. The same cart on Earth.** Weight $1{,}472$ N. Along: $503$ N. Into: $1{,}383$ N. Both parts are 2.6 times bigger,
the ratio of the two $g$ values.

**3. Holding it still.** With no friction, a rope up the slope must pull with 190 N on Mars to hold the cart in place.

## Try it

1. Write the part of the weight along a slope of angle $\theta$.
2. A 40 kg box rests on a 30° slope on Mars. Find the part of its weight down the slope.
3. Find the normal force on it.
4. What happens to $N$ as the slope gets steeper?

??? note "Answers"
    1. $mg\sin\theta$.
    2. $40 \times 3.71 \times 0.5 = 74.2$ N.
    3. $40 \times 3.71 \times 0.866 = 128.5$ N.
    4. It gets smaller, as $\cos\theta$ falls.

## Common mistake

**Swapping sine and cosine.** A quick check: on a gentle slope, the part along it should be small. $\sin\theta$ is small
for small $\theta$, so it belongs to the part along the slope.

## Where it leads

- Back: [The coefficient of friction](02-coefficient-of-friction.md) · Next: [Sliding down a ramp](04-sliding-down.md)
- [Level 6 page](index.md) · [Forces and motion topic page](../index.md)
- The simple picture: [Up and down slopes](../level-2/04-slopes.md).
