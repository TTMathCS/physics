---
title: "Free-body diagrams"
---

# Free-body diagrams

*Forces and motion · level 5, lesson 6 of 6*

## A question to start

An astronaut stands on a bathroom scale in a lift on Mars. The lift starts moving up. Does the scale read more, less,
or the same? Guessing is hard. Is there a sure way to work it out?

## The idea

A **free-body diagram** shows **one object** on its own, with an arrow for **every force on it**, and nothing else. It
turns a force problem into arithmetic. The steps:

1. Pick one object. Draw it as a box or a dot.
2. Draw every force acting **on** it: weight, normal force, friction, tension, thrust, drag. Not the forces it exerts on
   other things.
3. Choose a positive direction, usually the way it accelerates.
4. Write $F_\text{net} = ma$ along that direction and solve.

For the astronaut in the lift: weight $mg$ down, and the scale's push $N$ up. The scale reads $N$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 170" role="img" aria-label="A free-body diagram of an astronaut in a lift: a box with an upward arrow N, longer, and a downward arrow mg, shorter. Beside it the acceleration a points up.">
  <rect x="110" y="65" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <line x1="130" y1="65" x2="130" y2="15" stroke="#5aa0d8" stroke-width="3"/><path d="M124 20 l6 -12 l6 12 z" fill="#5aa0d8"/>
  <line x1="130" y1="105" x2="130" y2="145" stroke="#d86a3a" stroke-width="3"/><path d="M124 142 l6 12 l6 -12 z" fill="#d86a3a"/>
  <line x1="220" y1="110" x2="220" y2="70" stroke="currentColor" stroke-width="2"/><path d="M215 74 l5 -10 l5 10 z" fill="currentColor"/>
  <g font-size="13" fill="currentColor"><text x="140" y="30">N</text><text x="140" y="150">mg</text><text x="230" y="95">a</text></g>
</svg>
</div>

With up as positive: $N - mg = ma$, so

$$N = m(g + a).$$

Going up and speeding up, the scale reads **more** than usual. Slowing down on the way up ($a$ negative), it reads less.

## Worked examples

**1. The lift on Mars.** Astronaut and suit, 100 kg. The lift accelerates upward at 1.0 m/s².
$N = 100 \times (3.71 + 1.0) = 471$ N, compared with 371 N standing still.

**2. A crate dragged by a rope.** A 40 kg crate on a flat Mars floor is pulled with 60 N; friction is 25 N.
Horizontal: $60 - 25 = 40a$, so $a = 0.875$ m/s². Vertical: $N = mg = 40 \times 3.71 = 148$ N (no vertical
acceleration).

**3. A lander slowing down.** A 1,000 kg lander falls while its engines push up with 5,000 N. Down is the way it moves;
take up as positive: $5000 - 1000 \times 3.71 = 1000 a$, so $a = +1.29$ m/s², upward. It is slowing its fall.

## Try it

1. What goes into a free-body diagram, and what is left out?
2. A 70 kg person in a lift on Earth accelerating up at 2 m/s²: what does the scale read in newtons?
3. The same lift on Mars: what does it read?
4. A 1,000 kg lander on Mars with a thrust of 3,000 N. Is it speeding up or slowing down as it falls?

??? note "Answers"
    1. In: every force acting on the one chosen object. Out: other objects, and forces the object exerts on them.
    2. $70 \times (9.81 + 2) = 827$ N.
    3. $70 \times (3.71 + 2) = 400$ N.
    4. $3000 - 3710 = -710$ N, a net force downward: it is still speeding up as it falls.

## Common mistake

**Drawing forces the object exerts.** The astronaut pushes down on the scale, but that force acts on the scale, not the
astronaut. Only forces **on** the chosen object go in its diagram.

## Where it leads

- Back: [The third law](05-third-law.md) · Next level: [Friction and slopes](../level-6/index.md)
- [Level 5 page](index.md) · [Forces and motion topic page](../index.md)
- Diagrams for a rocket: [Thrust-to-weight ratio](../../rockets/level-5/02-thrust-to-weight.md).
