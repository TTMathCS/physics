---
title: "Distance fallen"
---

# Distance fallen

*Gravity and orbits · level 5, lesson 1 of 6*

## A question to start

A climber on Mars drops a carabiner from a cliff, and it takes 4 seconds to hit the ground. How high is the cliff?
The carabiner did not move at one speed: it started at zero and kept speeding up. How do you get a distance from that?

## The idea

A dropped thing starts at rest and gains speed steadily: $g$ metres per second, every second. After $t$ seconds, its
speed is

$$v = g t.$$

Because the speed grows **steadily**, its average over the fall is halfway between the start (0) and the end ($gt$):

$$\text{average speed} = \frac{0 + gt}{2} = \tfrac12 g t.$$

Distance is average speed times time, so

$$s = \tfrac12 g t^2.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 190" role="img" aria-label="A speed-time graph for a fall. The speed rises in a straight line from zero. The area under the line is a triangle, half of the rectangle that would be drawn at the final speed.">
  <line x1="40" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="40" width="220" height="120" fill="#eea66f" opacity=".12" stroke="currentColor" stroke-dasharray="4 4"/>
  <path d="M40 160 L260 40 L260 160 z" fill="#eea66f" opacity=".45"/>
  <line x1="40" y1="160" x2="260" y2="40" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="12" fill="currentColor"><text x="265" y="44">gt</text><text x="252" y="176">t</text><text x="150" y="130">distance = ½ · t · gt</text><text x="8" y="30">speed</text><text x="270" y="176">time</text></g>
</svg>
</div>

The same answer shows as a picture: on a speed-time graph, distance is the area under the line. Here it is a
triangle with base $t$ and height $gt$, area $\tfrac12 \cdot t \cdot gt$.

| Time $t$ | 1 s | 2 s | 3 s | 4 s | 5 s |
| --- | --- | --- | --- | --- | --- |
| Fallen on Mars ($g$ = 3.71) | 1.86 m | 7.42 m | 16.7 m | 29.7 m | 46.4 m |
| Fallen on Earth ($g$ = 9.81) | 4.91 m | 19.6 m | 44.1 m | 78.5 m | 123 m |

**Time for a given drop.** Turn the formula round:

$$t = \sqrt{\frac{2s}{g}}.$$

For the same drop on two planets, the times are in the ratio $\sqrt{g_E/g_M} = \sqrt{9.81/3.71} \approx 1.63$. Every
fall on Mars takes about **1.6 times** as long as the same fall on Earth: not 2.6 times, because of the square root.

These formulas ignore air. On Mars the air is so thin that they work well for heavy things over quite large drops.

## Worked examples

**1. The cliff.** $s = \tfrac12 \times 3.71 \times 4^2 = 1.855 \times 16 = 29.7$ m.

**2. A dropped tool from a habitat roof, 6 m high.** Mars: $t = \sqrt{2 \times 6 / 3.71} = \sqrt{3.23} = 1.80$ s.
Earth: $t = \sqrt{12 / 9.81} = \sqrt{1.22} = 1.11$ s. Ratio $1.80 / 1.11 = 1.62$. ✓

**3. Finding $g$ from a drop.** On an unknown world, a stone falls 10 m in 2.0 s. Then $10 = \tfrac12 g \times 4$, so
$g = 5$ m/s².

## Try it

1. How far does a stone fall in 3 s on Mars?
2. How long does a stone take to fall 50 m on Earth? On Mars?
3. A stone falls 20 m in 3.3 s on some moon. Find $g$ there.
4. Show from the formula that doubling the time makes the distance four times as large.
5. In the 5th second alone, how far does a stone fall on Mars?

??? note "Answers"
    1. $1.855 \times 9 = 16.7$ m.
    2. Earth: $\sqrt{100/9.81} = \sqrt{10.19} = 3.19$ s. Mars: $\sqrt{100/3.71} = \sqrt{26.95} = 5.19$ s.
    3. $g = 2s/t^2 = 40 / 10.89 \approx 3.7$ m/s². (That moon has about the gravity of Mars.)
    4. $\tfrac12 g (2t)^2 = \tfrac12 g \cdot 4t^2 = 4 \times \tfrac12 g t^2$.
    5. $46.4 - 29.7 = 16.7$ m.

## Common mistake

**Using the final speed for the whole fall.** A stone that lands at 14.8 m/s after 4 s on Mars did not fall
$14.8 \times 4 = 59$ m. It was slower earlier; its average speed was half that, so it fell 29.7 m.

## Where it leads

- Next: [The speed of a fall](02-speed-of-a-fall.md).
- [Level 5 page](index.md) · [Gravity and orbits topic page](../index.md)
- The same idea on the math site: [Falling, on Earth and on Mars](https://math.akadian.ca/topics/change/level-5/05-falling-bodies.html).
