---
title: "Centripetal acceleration"
---

# Centripetal acceleration

*Forces and motion · level 7, lesson 1 of 6*

## A question to start

You stand on the equator of Mars. The planet's spin carries you round a circle 21,000 km long every day. Your speed is
steady, but your direction keeps changing. Are you accelerating? By how much?

## The idea

Velocity has a direction, so moving in a circle at a steady speed means a changing velocity: an acceleration. It
points to the **centre** of the circle, and it is called **centripetal** ("centre-seeking") acceleration.

Its size: in a short time $\Delta t$, an object at speed $v$ moves through a small angle $\Delta\theta = v\Delta t/r$.
Its velocity arrow, always at right angles to the radius, turns through the same angle. The change in velocity is
a short arrow of length $v\,\Delta\theta$, pointing inwards. So

$$a = \frac{\Delta v}{\Delta t} = \frac{v\,\Delta\theta}{\Delta t} = v \cdot \frac{v}{r} = \frac{v^2}{r}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 200" role="img" aria-label="An object on a circle at two nearby moments, each with a velocity arrow along the circle. Beside it, the two velocity arrows drawn tail to tail, with a short arrow between their tips pointing towards the centre: the change in velocity.">
  <circle cx="110" cy="105" r="75" fill="none" stroke="currentColor" stroke-dasharray="4 5" opacity=".6"/>
  <circle cx="110" cy="105" r="3" fill="currentColor"/>
  <circle cx="185" cy="105" r="5" fill="#eea66f" stroke="currentColor"/><circle cx="175" cy="68" r="5" fill="#eea66f" stroke="currentColor"/>
  <line x1="110" y1="105" x2="185" y2="105" stroke="currentColor" opacity=".5"/><line x1="110" y1="105" x2="175" y2="68" stroke="currentColor" opacity=".5"/>
  <line x1="185" y1="105" x2="185" y2="55" stroke="#5aa0d8" stroke-width="2.5"/><line x1="175" y1="68" x2="150" y2="25" stroke="#5aa0d8" stroke-width="2.5"/>
  <line x1="260" y1="170" x2="260" y2="80" stroke="#5aa0d8" stroke-width="2.5"/><line x1="260" y1="170" x2="215" y2="92" stroke="#5aa0d8" stroke-width="2.5"/>
  <line x1="258" y1="82" x2="222" y2="91" stroke="#d86a3a" stroke-width="3"/><path d="M226 85 l-10 8 l13 3 z" fill="#d86a3a"/>
  <g font-size="12" fill="currentColor"><text x="125" y="122">r</text><text x="190" y="60">v</text><text x="265" y="125">v</text><text x="215" y="125">v</text><text x="230" y="70">Δv, inwards</text></g>
</svg>
</div>

It is often easier to use the **angular speed** $\omega$, the angle turned per second, in radians per second. One turn
is $2\pi$ radians, so $\omega = 2\pi/T$ for a period $T$. With $v = \omega r$:

$$a = \frac{v^2}{r} = \omega^2 r.$$

| Standing on the equator | Mars | Earth |
| --- | --- | --- |
| Radius | 3,396 km | 6,378 km |
| Time for one turn (sidereal day) | 24.62 h | 23.93 h |
| $\omega$ | $7.09 \times 10^{-5}$ rad/s | $7.29 \times 10^{-5}$ rad/s |
| Centripetal acceleration $\omega^2 r$ | 0.017 m/s² | 0.034 m/s² |
| As a share of $g$ | 0.46% | 0.35% |

So the spin makes you a tiny bit lighter on the equator: part of gravity is used to keep you going round.

## Worked examples

**1. Mars's equator.** $\omega = 2\pi / 88{,}640 \text{ s} = 7.09 \times 10^{-5}$ rad/s.
$a = (7.09 \times 10^{-5})^2 \times 3.396 \times 10^6 = 0.0171$ m/s².

**2. A car on a roundabout.** $v = 10$ m/s, $r = 25$ m. $a = 100/25 = 4$ m/s².

**3. A centrifuge.** Spinning at 3,000 turns a minute, radius 0.1 m: $\omega = 2\pi \times 50 = 314$ rad/s,
$a = 314^2 \times 0.1 = 9{,}870$ m/s², about 1,000 g.

## Try it

1. Which way does centripetal acceleration point?
2. A runner goes round a bend of radius 40 m at 8 m/s. Find her acceleration.
3. Phobos orbits Mars at 9,376 km from the centre in 7 h 39 min. Find its centripetal acceleration.
4. If you double the speed on the same circle, what happens to $a$?

??? note "Answers"
    1. To the centre of the circle.
    2. $64 / 40 = 1.6$ m/s².
    3. $T = 27{,}540$ s, $\omega = 2.28 \times 10^{-4}$ rad/s, $a = \omega^2 r = 0.49$ m/s². (This is the pull of Mars's
       gravity at that distance.)
    4. It goes up four times.

## Common mistake

**Using degrees for $\omega$.** $v = \omega r$ and $a = \omega^2 r$ work only with $\omega$ in radians per second.

## Where it leads

- Back: [Sand piles and dunes](../level-6/06-sand-piles-and-dunes.md) · Next: [Centripetal force](02-centripetal-force.md)
- [Level 7 page](index.md) · [Forces and motion topic page](../index.md)
- Orbits as circular motion: [Orbital speed](../../gravity/level-6/03-orbital-speed.md).
