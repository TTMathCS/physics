---
title: "Parked on a Mars slope"
---

# Parked on a Mars slope

*Forces and motion · level 6, lesson 5 of 6*

## A question to start

A rover parks on a 30° slope with its brakes on. Mars gravity is weak, so you might guess it is less likely to slide
than on Earth. Is that right?

## The idea

With the wheels locked, the rover stays put as long as static friction can hold it. It needs

$$mg\sin\theta \le \mu_s mg\cos\theta.$$

Now $mg$ is on both sides and **cancels**:

$$\tan\theta \le \mu_s.$$

So **whether it slips does not depend on gravity at all**. Weaker gravity pulls it down the slope less, but it also
presses it into the ground less, so friction is weaker by exactly the same factor. The steepest slope it can park on,
$\theta_\text{max} = \arctan\mu_s$, is the **same on Mars as on Earth**.

| Steepest slope a parked vehicle holds | Mars | Earth |
| --- | --- | --- |
| $\mu_s = 0.4$ | 21.8° | 21.8° |
| $\mu_s = 0.58$ | 30.1° | 30.1° |
| $\mu_s = 0.8$ | 38.7° | 38.7° |

For a 30° slope, the rover needs $\mu_s \ge \tan 30° = 0.577$, on any planet.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 200" role="img" aria-label="A rover on a 30 degree slope. Arrows show the pull down the slope and the friction up the slope. Below: mg cancels, leaving tan theta less than or equal to mu.">
  <path d="M20 170 L310 170 L310 2 Z" fill="#d86a3a" opacity=".35" stroke="currentColor"/>
  <g transform="rotate(-30 175 85)"><rect x="140" y="72" width="70" height="16" rx="3" fill="#cfc8bf" stroke="currentColor"/>
  <circle cx="150" cy="94" r="6" fill="#555" stroke="currentColor"/><circle cx="175" cy="94" r="6" fill="#555" stroke="currentColor"/><circle cx="200" cy="94" r="6" fill="#555" stroke="currentColor"/></g>
  <line x1="160" y1="110" x2="115" y2="136" stroke="#5aa0d8" stroke-width="3"/><path d="M119 130 l-14 12 l16 1 z" fill="#5aa0d8"/>
  <line x1="200" y1="90" x2="245" y2="64" stroke="#eea66f" stroke-width="3"/><path d="M240 59 l15 -1 l-8 13 z" fill="#eea66f"/>
  <g font-size="12" fill="currentColor"><text x="40" y="130">mg sin θ</text><text x="230" y="95">μs mg cos θ</text><text x="40" y="190">mg cancels: holds if tan θ ≤ μs</text></g>
</svg>
</div>

What **does** depend on Mars is the ground. Loose sand and dust give wheels much less grip than firm rock, so a slope
that is safe on rock can be unsafe on sand. Rover drivers check the ground, not only the angle. And driving uphill on
loose ground, the wheels slip more and more as the slope steepens.

Tipping over is a separate risk: the rover tips if the line straight down from its centre of mass falls outside its
wheels. That does not depend on $g$ either. Curiosity was designed to survive a tilt of 45° without tipping, but its
drivers avoid tilts of more than 30°.

## Worked examples

**1. Will it hold?** A rover's wheels have $\mu_s = 0.7$ on bedrock. $\tan\theta_\text{max} = 0.7$, so
$\theta_\text{max} = 35°$. A 30° slope is safe; a 37° slope is not.

**2. The same rover on sand.** On loose sand, $\mu_s$ might drop to 0.45: $\theta_\text{max} = 24°$. The same 30° slope
would now be too steep.

## Try it

1. Show that the slipping angle does not depend on $g$.
2. A crate on a ramp just starts to slip at 25°. What is $\mu_s$?
3. Would that crate slip at the same angle on the Moon?
4. A habitat floor tilts 5°. Will a box with $\mu_s = 0.2$ slide?

??? note "Answers"
    1. Slipping starts when $mg\sin\theta = \mu_s mg\cos\theta$; dividing by $mg\cos\theta$ gives $\tan\theta = \mu_s$.
    2. $\tan 25° = 0.47$.
    3. Yes: the angle depends only on $\mu_s$.
    4. No: $\tan 5° = 0.087 < 0.2$.

## Common mistake

**"Weaker gravity means less sliding."** It means a smaller pull down the slope and a smaller friction force, in the same
proportion. Weak gravity does not help a parked rover at all.

## Where it leads

- Back: [Sliding down a ramp](04-sliding-down.md) · Next: [Sand piles and dunes](06-sand-piles-and-dunes.md)
- [Level 6 page](index.md) · [Forces and motion topic page](../index.md)
- Curiosity's design limits: NASA's [Curiosity rover page](https://science.nasa.gov/mission/msl-curiosity/).
