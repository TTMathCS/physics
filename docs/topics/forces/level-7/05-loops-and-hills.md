---
title: "Loops and hills"
---

# Loops and hills

*Forces and motion · level 7, lesson 5 of 6*

## A question to start

A buggy drives over the crest of a rounded hill. Go fast enough, and its wheels leave the ground. At what speed does
that happen on Mars, and on Earth?

## The idea

At the top of a crest of radius $r$, the buggy is moving on a circle whose centre is **below** it. To follow the curve,
it needs a downward (inward) net force $mv^2/r$. The forces are its weight $mg$ down and the ground's push $N$ up:

$$mg - N = \frac{mv^2}{r} \qquad\Rightarrow\qquad N = m\left(g - \frac{v^2}{r}\right).$$

As $v$ grows, $N$ falls. When $v^2/r = g$, the ground has stopped pushing, $N = 0$: the wheels are about to leave the
ground. So the buggy stays on the road only if

$$v < \sqrt{gr}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 170" role="img" aria-label="A buggy at the top of a rounded hill. Weight points down; a shorter normal force points up. The centre of the hill's curve is below.">
  <path d="M10 150 Q165 20 320 150 Z" fill="#d86a3a" opacity=".45" stroke="currentColor"/>
  <rect x="140" y="55" width="50" height="22" rx="5" fill="#cfc8bf" stroke="currentColor"/>
  <line x1="165" y1="77" x2="165" y2="130" stroke="#5aa0d8" stroke-width="3"/><path d="M159 127 l6 12 l6 -12 z" fill="#5aa0d8"/>
  <line x1="165" y1="55" x2="165" y2="35" stroke="#eea66f" stroke-width="3"/><path d="M159 39 l6 -12 l6 12 z" fill="#eea66f"/>
  <circle cx="165" cy="250" r="2" fill="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="172" y="125">mg</text><text x="172" y="38">N, smaller</text><text x="20" y="165">centre of the curve is far below</text></g>
</svg>
</div>

The same rule $\sqrt{gr}$ gives the slowest speed for the **top of a vertical loop**: there the track pushes down and
gravity pulls down, and the car needs at least $v^2/r = g$ to keep in contact.

| Crest of radius 10 m | Mars | Earth |
| --- | --- | --- |
| Speed at which wheels lift, $\sqrt{gr}$ | 6.1 m/s, 22 km/h | 9.9 m/s, 36 km/h |
| Ground's push at 5 m/s, as a share of weight | 33% | 75% |

On Mars a vehicle goes light over bumps at much lower speeds. Even before it leaves the ground, the ground pushes less,
so grip for steering and braking is less on every crest. Mars roads would need gentle crests or low speeds.

## Worked examples

**1. Liftoff on Mars.** $\sqrt{3.71 \times 10} = 6.09$ m/s.

**2. Grip at 5 m/s on Mars.** $N/(mg) = 1 - v^2/(gr) = 1 - 25/37.1 = 0.33$. Only a third of the usual grip.

**3. The bottom of a dip.** In a dip, the centre is above: $N - mg = mv^2/r$, so $N = m(g + v^2/r)$. The ground pushes
harder: passengers feel heavier.

## Try it

1. Derive the speed at which a vehicle leaves the top of a crest.
2. A crest has radius 25 m. Find the liftoff speed on Mars.
3. At the bottom of a dip of radius 10 m on Mars, at 6 m/s, what is $N$ for a 400 kg buggy?
4. Why is a crest more dangerous on Mars than on Earth at the same speed?

??? note "Answers"
    1. At the top, $mg - N = mv^2/r$; $N = 0$ when $v = \sqrt{gr}$.
    2. $\sqrt{3.71 \times 25} = 9.6$ m/s.
    3. $400 \times (3.71 + 3.6) = 2{,}924$ N.
    4. Weaker gravity means the ground's push, and the grip, drop to zero at a lower speed.

## Common mistake

**"There is a force throwing the car up off the hill."** Nothing throws it up. Gravity is not strong enough to bend its
path as tightly as the hill curves, so the hill falls away beneath it.

## Where it leads

- Back: [Banked tracks](04-banked-tracks.md) · Next: [Spinning for gravity](06-spinning-for-gravity.md)
- [Level 7 page](index.md) · [Forces and motion topic page](../index.md)
- The same idea, on the scale of a planet: [Newton's cannon](../../gravity/level-2/05-newtons-cannon.md).
