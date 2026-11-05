---
title: "Cornering on flat ground"
---

# Cornering on flat ground

*Forces and motion · level 7, lesson 3 of 6*

## A question to start

A crew drives a pressurised buggy between two Mars habitats. On a flat bend of radius 20 m, how fast can they go before
the tyres skid? Is it the same speed as on Earth?

## The idea

On flat ground, the only sideways force on a turning vehicle is **friction** from the ground on the tyres. It can be at
most $\mu_s N$, and on flat ground $N = mg$. For the turn,

$$\frac{mv^2}{r} \le \mu_s m g \qquad\Rightarrow\qquad v_\text{max} = \sqrt{\mu_s g r}.$$

The mass cancels, but $g$ does **not**. On Mars, $g$ is 0.378 of Earth's, so the top speed for a bend is
$\sqrt{0.378} = 0.62$ times what it would be on Earth with the same tyres and ground.

| A bend of radius 20 m, $\mu_s = 0.8$ | Mars | Earth |
| --- | --- | --- |
| Most sideways friction per kg | 2.97 N | 7.85 N |
| Top speed $\sqrt{\mu_s g r}$ | 7.7 m/s, 28 km/h | 12.5 m/s, 45 km/h |
| Braking distance from that speed, $v^2/(2\mu_s g)$ | 10 m | 10 m |

Notice the last row: from each planet's own top cornering speed, the braking distance is the same, $r/2$. But from the
**same** speed, a vehicle on Mars needs 2.6 times as far to stop. Mars traffic must be slower.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 190" role="img" aria-label="A buggy seen from behind on flat ground, turning to the left. Weight points down, the normal force up, and friction from the ground points to the left, towards the centre of the turn.">
  <rect x="20" y="150" width="280" height="10" fill="#d86a3a" opacity=".5" stroke="currentColor"/>
  <rect x="115" y="85" width="90" height="50" rx="10" fill="#cfc8bf" stroke="currentColor"/>
  <rect x="110" y="132" width="20" height="18" fill="#555"/><rect x="190" y="132" width="20" height="18" fill="#555"/>
  <line x1="160" y1="110" x2="160" y2="180" stroke="#5aa0d8" stroke-width="3"/><path d="M154 177 l6 12 l6 -12 z" fill="#5aa0d8"/>
  <line x1="160" y1="85" x2="160" y2="35" stroke="#eea66f" stroke-width="3"/><path d="M154 40 l6 -12 l6 12 z" fill="#eea66f"/>
  <line x1="150" y1="165" x2="70" y2="165" stroke="#d86a3a" stroke-width="3"/><path d="M74 159 l-12 6 l12 6 z" fill="#d86a3a"/>
  <g font-size="12" fill="currentColor"><text x="168" y="185">mg</text><text x="168" y="40">N</text><text x="40" y="182">friction, inwards</text><text x="10" y="80">centre of turn ←</text></g>
</svg>
</div>

## Worked examples

**1. The buggy.** $v_\text{max} = \sqrt{0.8 \times 3.71 \times 20} = \sqrt{59.4} = 7.7$ m/s.

**2. On dust.** On loose dust, $\mu_s$ might fall to 0.4: $v_\text{max} = \sqrt{0.4 \times 3.71 \times 20} = 5.4$ m/s,
about 20 km/h.

**3. The Moon's buggy.** Apollo astronauts drove a rover on the Moon at up to about 18 km/h (5 m/s). With
$g = 1.62$ m/s² and $\mu_s = 0.6$, a 20 m bend allows $\sqrt{0.6 \times 1.62 \times 20} = 4.4$ m/s. Sharp turns at
top speed made the wheels skid, as the crews found.

## Try it

1. Derive $v_\text{max} = \sqrt{\mu_s g r}$.
2. Find the top speed on Mars for a bend of radius 50 m with $\mu_s = 0.7$.
3. How much faster could the same buggy take the same bend on Earth?
4. A road on Mars has a speed limit set so that buggies can always stop within 30 m with $\mu_s = 0.6$. What is it?

??? note "Answers"
    1. Friction supplies $mv^2/r$ and can be at most $\mu_s mg$. Set equal and solve: $v^2 = \mu_s g r$.
    2. $\sqrt{0.7 \times 3.71 \times 50} = \sqrt{129.9} = 11.4$ m/s.
    3. $\sqrt{9.81/3.71} = 1.63$ times faster.
    4. $v = \sqrt{2 \mu_s g d} = \sqrt{2 \times 0.6 \times 3.71 \times 30} = 11.6$ m/s, about 42 km/h.

## Common mistake

**"The mass cancels, so gravity cancels too."** Mass cancels; $g$ stays. Weaker gravity presses the tyres down less
hard, so they grip less, and the turn must be slower.

## Where it leads

- Back: [Centripetal force](02-centripetal-force.md) · Next: [Banked tracks](04-banked-tracks.md)
- [Level 7 page](index.md) · [Forces and motion topic page](../index.md)
- The coefficient of friction: [The coefficient of friction](../level-6/02-coefficient-of-friction.md). The lunar
  rover: NASA's [Apollo 15 mission page](https://www.nasa.gov/mission/apollo-15/).
