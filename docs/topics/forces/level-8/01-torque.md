---
title: "Torque"
---

# Torque

*Forces and motion · level 8, lesson 1 of 6*

## A question to start

An astronaut on Mars needs to undo a stiff bolt that needs 60 N m of torque. The spanner does not care about gravity.
Yet the job is harder than on Earth. Why?

## The idea

A force can make something **turn**. Its turning effect about a pivot is the **torque** (or moment):

$$\tau = r F \sin\theta,$$

where $r$ is the distance from the pivot to where the force acts, and $\theta$ the angle between the force and the line
from the pivot. Torque is in newton metres, N m. Only the part of the force at right angles to $r$ turns; a push straight
along a spanner, towards the bolt, turns nothing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="A spanner on a bolt. A force pushes down at the end of the handle, at an angle theta to the handle, at a distance r from the bolt.">
  <circle cx="60" cy="80" r="16" fill="#cfc8bf" stroke="currentColor"/><circle cx="60" cy="80" r="5" fill="currentColor"/>
  <rect x="70" y="72" width="200" height="16" rx="6" fill="#eea66f" stroke="currentColor"/>
  <line x1="255" y1="80" x2="285" y2="140" stroke="#5aa0d8" stroke-width="3"/><path d="M278 136 l10 10 l1 -14 z" fill="#5aa0d8"/>
  <path d="M275 80 a20 20 0 0 1 -11 18" fill="none" stroke="currentColor"/>
  <line x1="60" y1="110" x2="255" y2="110" stroke="currentColor" stroke-dasharray="4 3"/>
  <g font-size="12" fill="currentColor"><text x="150" y="125">r</text><text x="280" y="98">θ</text><text x="292" y="140">F</text><text x="30" y="40">pivot: the bolt</text></g>
</svg>
</div>

Two things balance in rotation as forces do in a line. An object is in **rotational equilibrium** when the clockwise
torques about any point equal the anticlockwise ones. That is the law of the lever: a small force far from the pivot
balances a big one close to it.

Now the bolt. The spanner needs 60 N m, the same on any planet. But by the third law, as the astronaut pushes the
spanner one way, the spanner pushes the astronaut the other way, and their feet must grip the ground to hold them in
place. On Mars they weigh only 0.38 as much, so their feet grip 0.38 as hard. Pushing hard on a spanner, they are more
likely to slide or twist round instead. Tools for Mars, as for spacewalks, need footholds, handholds or a way to
brace against the work.

## Worked examples

**1. The spanner.** A 0.4 m spanner: force needed at right angles $= 60 / 0.4 = 150$ N. At 60° to the handle:
$60 / (0.4 \sin 60°) = 173$ N.

**2. Can they hold their footing?** Astronaut plus suit 150 kg, on Mars: weight $= 557$ N. With $\mu_s = 0.6$, their
boots can resist at most $0.6 \times 557 = 334$ N sideways. Pushing with 150 N is fine; with a short spanner needing
400 N, they would slide.

**3. A balanced beam.** A 4 m beam pivots at its middle. A 30 kg load hangs 1.5 m from the pivot. Where must a 20 kg load
hang to balance? $30 \times 1.5 = 20 \times d$, $d = 2.25$ m. The same on Mars or Earth: $g$ cancels.

## Try it

1. Find the torque of a 50 N force at right angles, 0.3 m from a pivot.
2. A 25 N force acts at 30° to a 0.2 m spanner. Find the torque.
3. Why does a lever balance at the same place on Mars as on Earth?
4. Why is bracing more important on Mars than on Earth when using a big spanner?

??? note "Answers"
    1. $0.3 \times 50 = 15$ N m.
    2. $0.2 \times 25 \times \sin 30° = 2.5$ N m.
    3. Both sides' torques scale with $g$, which cancels from the balance.
    4. The spanner pushes back on the worker, and their feet grip less, because they weigh less.

## Common mistake

**Measuring $r$ to the wrong place.** $r$ goes from the pivot to the point where the force acts. Or, equivalently, use
the full force times its perpendicular distance from the pivot to the force's line.

## Where it leads

- Back: [Spinning for gravity](../level-7/06-spinning-for-gravity.md) · Next: [Moment of inertia](02-moment-of-inertia.md)
- [Level 8 page](index.md) · [Forces and motion topic page](../index.md)
- Grip and weight: [The coefficient of friction](../level-6/02-coefficient-of-friction.md).
