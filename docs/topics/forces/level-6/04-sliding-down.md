---
title: "Sliding down a ramp"
---

# Sliding down a ramp

*Forces and motion · level 6, lesson 4 of 6*

## A question to start

A child on Mars rides a sledge down a 25° dune. The same child, same sledge and same slope on Earth. Which reaches the
bottom faster, and by how much?

## The idea

Take the direction down the slope as positive. Once the object slides, two forces act along the slope:

- the part of the weight down the slope, $mg\sin\theta$;
- kinetic friction up the slope, $\mu_k N = \mu_k mg\cos\theta$.

The normal force and the part of the weight into the slope cancel. So the second law gives

$$ma = mg\sin\theta - \mu_k mg\cos\theta \qquad\Rightarrow\qquad a = g(\sin\theta - \mu_k\cos\theta).$$

The mass cancels. And the whole answer is **proportional to $g$**: on Mars, anything sliding down a slope accelerates at
0.38 times its Earth rate, for the same slope and surfaces.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 190" role="img" aria-label="A sledge on a slope. An arrow down the slope shows mg sin theta; a shorter arrow up the slope shows friction. The difference gives the acceleration down the slope.">
  <path d="M20 170 L310 170 L310 40 Z" fill="#eea66f" opacity=".45" stroke="currentColor"/>
  <g transform="rotate(-24.1 175 105)"><rect x="155" y="92" width="44" height="14" rx="5" fill="#5aa0d8" stroke="currentColor"/></g>
  <line x1="165" y1="112" x2="110" y2="136" stroke="#d86a3a" stroke-width="3"/><path d="M114 130 l-14 10 l16 2 z" fill="#d86a3a"/>
  <line x1="190" y1="92" x2="222" y2="78" stroke="currentColor" stroke-width="3"/><path d="M218 72 l14 2 l-10 10 z" fill="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="45" y="125">mg sin θ</text><text x="200" y="65">friction μk mg cos θ</text><text x="100" y="185">a = g(sin θ − μk cos θ)</text></g>
</svg>
</div>

| A sledge on a 25° slope, $\mu_k = 0.15$, 30 m long | Mars | Earth |
| --- | --- | --- |
| Acceleration $a$ | 1.06 m/s² | 2.81 m/s² |
| Time to the bottom, from rest | 7.5 s | 4.6 s |
| Speed at the bottom | 8.0 m/s | 13.0 m/s |

The time comes from $s = \tfrac{1}{2}at^2$, so $t = \sqrt{2s/a}$, and the speed from $v = at$.

If $\sin\theta < \mu_k\cos\theta$, the formula gives a negative $a$: friction wins, and a sliding object slows down and
stops.

## Worked examples

**1. The Mars sledge.** $\sin 25° = 0.423$, $\cos 25° = 0.906$. $a = 3.71 \times (0.423 - 0.15 \times 0.906) =
3.71 \times 0.287 = 1.06$ m/s². $t = \sqrt{2 \times 30 / 1.06} = 7.5$ s. $v = 1.06 \times 7.5 = 8.0$ m/s.

**2. A crate slid down a ramp.** $\theta = 15°$, $\mu_k = 0.35$. $\sin 15° - 0.35\cos 15° = 0.259 - 0.338 < 0$. It
slows down and stops: the ramp is too gentle for it to keep sliding.

## Try it

1. Find the acceleration down a 30° frictionless slope on Mars.
2. Find it on a 30° slope with $\mu_k = 0.2$ on Mars.
3. On that slope, how long does it take to slide 20 m from rest?
4. Why does the mass not matter?

??? note "Answers"
    1. $3.71 \times 0.5 = 1.86$ m/s².
    2. $3.71 \times (0.5 - 0.2 \times 0.866) = 3.71 \times 0.327 = 1.21$ m/s².
    3. $t = \sqrt{40 / 1.21} = 5.7$ s.
    4. Both the pull down the slope and the friction are proportional to $m$, and so is the inertia.

## Common mistake

**Using $N = mg$ on a slope.** On a slope, $N = mg\cos\theta$. Using $mg$ makes the friction too big.

## Where it leads

- Back: [Forces on a ramp](03-forces-on-a-ramp.md) · Next: [Parked on a Mars slope](05-parked-on-a-slope.md)
- [Level 6 page](index.md) · [Forces and motion topic page](../index.md)
- $s = \tfrac12 at^2$ explained: [Distance fallen](../../gravity/level-5/01-distance-fallen.md).
