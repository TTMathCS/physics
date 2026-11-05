---
title: "Work at an angle"
---

# Work at an angle

*Energy and power · level 5, lesson 2 of 6*

## A question to start

An astronaut pulls a sample sled by a rope that slopes up at 30°. Does all of the pull go into moving the sled forward?

## The idea

When a force acts at an angle $\theta$ to the direction of motion, only the part of the force **along** the motion does
work. That part is $F\cos\theta$, so

$$W = F d \cos\theta.$$

- $\theta = 0$: the force is along the motion. $\cos 0 = 1$, so $W = Fd$.
- $\theta = 90°$: the force is at right angles. $\cos 90° = 0$, so **no work**.
- $\theta > 90°$: the force is partly against the motion, and the work is **negative**: the force takes energy away.
  Friction always does negative work.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A sled pulled by a rope at angle theta above the ground. The pull F is split into a part along the ground, F cos theta, and a part upwards, F sin theta.">
  <line x1="10" y1="120" x2="320" y2="120" stroke="currentColor" opacity=".6"/>
  <rect x="60" y="95" width="70" height="25" fill="#eea66f" stroke="currentColor"/>
  <line x1="130" y1="105" x2="250" y2="36" stroke="#5aa0d8" stroke-width="3"/><path d="M243 33 l13 0 l-6 11 z" fill="#5aa0d8"/>
  <line x1="130" y1="105" x2="235" y2="105" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><path d="M233 99 l12 6 l-12 6 z" fill="currentColor"/>
  <line x1="245" y1="105" x2="245" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <path d="M170 105 a40 40 0 0 0 -5 -20" fill="none" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="175" y="95">θ</text><text x="200" y="50">F</text><text x="170" y="138">F cos θ: does work</text><text x="252" y="80">F sin θ: none</text></g>
</svg>
</div>

The upward part, $F\sin\theta$, does no work on the sled, but it lifts a little of its weight off the ground, which
reduces friction.

A beautiful example of zero work: a satellite in a **circular orbit**. Gravity pulls it towards the planet's centre,
always at right angles to its motion. So gravity does no work on it, and its speed stays the same, lap after lap.

## Worked examples

**1. The sled.** Pull 100 N at 30°, for 40 m: $W = 100 \times 40 \times \cos 30° = 100 \times 40 \times 0.866 = 3{,}460$ J.

**2. Carrying a box across a room.** You hold it up with a force straight up while walking level: $\theta = 90°$, so
your holding force does no work on the box. (Starting and stopping do a little.)

**3. Friction.** A crate slides 3 m while friction of 50 N acts backwards: $W = 50 \times 3 \times \cos 180° = -150$ J.
Friction took 150 J from the crate, as heat.

## Try it

1. A force of 60 N at 60° to the motion moves a cart 10 m. Find the work done.
2. Why does gravity do no work on a satellite in a circular orbit?
3. Friction of 20 N acts on a box sliding 5 m. What work does friction do?
4. Pulling at an angle does less work for the same pull. Why might you still choose to pull at an angle?

??? note "Answers"
    1. $60 \times 10 \times 0.5 = 300$ J.
    2. It always acts at right angles to the satellite's motion.
    3. $-100$ J.
    4. The upward part lifts some weight off the ground, cutting friction, so a smaller pull may be enough overall.

## Common mistake

**Using the angle to the vertical.** $\theta$ is the angle between the force and the direction of motion. For a rope at
30° above level ground, use 30°, not 60°.

## Where it leads

- Back: [Work, W = Fd](01-work.md) · Next: [Kinetic energy](03-kinetic-energy.md)
- [Level 5 page](index.md) · [Energy and power topic page](../index.md)
- Orbits: [Orbital speed](../../gravity/level-6/03-orbital-speed.md).
