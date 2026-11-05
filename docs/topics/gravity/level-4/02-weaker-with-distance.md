---
title: "Weaker with distance"
---

# Weaker with distance

*Gravity and orbits · level 4, lesson 2 of 6*

## A question to start

A torch shines on a wall 1 m away and makes a bright small patch. Move the torch to 2 m away. The patch gets bigger
and dimmer. How much dimmer?

## The idea

The light from the torch spreads out. At twice the distance it is spread over a patch twice as wide **and** twice as
tall: **four** times the area. The same light on four times the area means each bit is **a quarter** as bright.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 160" role="img" aria-label="Lines spreading out from a point. At distance 1 they cover one square; at distance 2 they cover a 2 by 2 block of four squares; at distance 3 a 3 by 3 block of nine squares.">
  <circle cx="20" cy="80" r="4" fill="#f2c14e"/>
  <g stroke="currentColor" opacity=".4"><line x1="20" y1="80" x2="320" y2="20"/><line x1="20" y1="80" x2="320" y2="140"/></g>
  <rect x="115" y="68" width="5" height="24" fill="#eea66f" stroke="currentColor"/>
  <rect x="215" y="56" width="5" height="48" fill="#eea66f" stroke="currentColor"/>
  <rect x="315" y="44" width="5" height="72" fill="#eea66f" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="90" y="110">1: 1 square</text><text x="185" y="122">2: 4 squares</text><text x="270" y="134">3: 9 squares</text></g>
</svg>
</div>

Gravity works the same way. It spreads out in every direction from a planet, and gets weaker with the square of the
distance from the planet's **middle**. This is the **inverse square rule**:

| Distance from the middle (in planet radii) | 1 | 2 | 3 | 4 | 10 | 60 |
| --- | --- | --- | --- | --- | --- | --- |
| Pull, compared with the surface | 1 | 1/4 | 1/9 | 1/16 | 1/100 | 1/3600 |

The distance that counts is from the **middle** of the planet, not from its surface. Standing on the surface, you
are already one radius away.

**Near the surface, the pull hardly changes.** A tall mountain is only 9 km high; the Earth's radius is 6,371 km.
Climbing it changes your distance from the middle by about 0.1%, and your weight by about 0.3%. That is why we can
treat $g$ as fixed for everyday falls.

**High up, it does change.** At the space station, 400 km up, you are $6771 \div 6371 \approx 1.06$ radii from the
middle, so the pull is $1 \div 1.06^2 \approx 0.89$: still 89% of the pull on the ground.

## Worked examples

**1. Twice as far from Mars.** A satellite 3,390 km above the surface of Mars is 2 Mars radii from the middle. The pull
there is $3.71 \div 4 \approx 0.93$ m/s².

**2. At Phobos's distance.** Phobos orbits 9,376 km from the middle of Mars, about 2.77 Mars radii. The pull of Mars
there is $3.71 \div 2.77^2 \approx 3.71 \div 7.7 \approx 0.48$ m/s².

## Try it

1. How much weaker is gravity at 3 planet radii from the middle than on the surface?
2. At 5 radii?
3. Something is moved from 2 radii to 4 radii from a planet's middle. By how much does its weight change?
4. The Moon is 60 Earth radii away. What fraction of $g$ pulls on it?
5. Why do we say "from the middle", not "from the surface"?

??? note "Answers"
    1. 9 times weaker (1/9).
    2. 25 times weaker (1/25).
    3. It becomes a quarter of what it was (twice the distance).
    4. $1/3600$ of $g$, about 0.0027 m/s².
    5. A planet pulls as though all its mass were at its middle, so distances count from there. On the surface you are
       already one radius away.

## Common mistake

**"Twice as far, half the pull."** It is a quarter, because the pull spreads over an area that grows with the square of
the distance.

## Where it leads

- Back: [The apple and the Moon](01-the-apple-and-the-moon.md) · Next: [Slower farther out](03-slower-farther-out.md)
- [Level 4 page](index.md) · [Gravity and orbits topic page](../index.md)
- The rule as a formula: [Gravity with height](../level-5/06-gravity-with-height.md) and
  [The law of gravity](../level-6/01-the-law-of-gravity.md).
