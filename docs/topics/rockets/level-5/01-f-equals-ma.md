---
title: "F = ma"
---

# F = ma

*Rockets and landing · level 5, lesson 1 of 6*

## A question to start

A lander of mass 1,000 kg is descending on Mars. Its engines give 5,000 N of thrust upwards. Is it speeding up or
slowing down, and by how much each second?

## The idea

Newton's three laws of motion (1687):

1. **First law.** A body stays at rest, or moves at a steady speed in a straight line, unless a net force acts on it.
   (Things do not slow down "naturally"; friction and drag slow them.)
2. **Second law.** The net force on a body equals its mass times its acceleration:
   $$F_\text{net} = m a.$$
   Force in newtons, mass in kg, acceleration in m/s². One newton is the force that gives 1 kg an acceleration of
   1 m/s².
3. **Third law.** When A pushes on B, B pushes on A with an equal force in the opposite direction.

**Free-body diagrams.** Draw the body as a dot, and every force on it as an arrow. Add them (taking one direction as
positive) to get $F_\text{net}$, then $a = F_\text{net}/m$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 200" role="img" aria-label="A free-body diagram of a lander: a dot with an arrow up labelled thrust 5,000 newtons and a shorter arrow down labelled weight 3,710 newtons.">
  <circle cx="130" cy="100" r="6" fill="currentColor"/>
  <line x1="130" y1="94" x2="130" y2="20" stroke="#7aa363" stroke-width="3"/><path d="M123 26 l7 -14 l7 14 z" fill="#7aa363"/>
  <line x1="130" y1="106" x2="130" y2="160" stroke="#d8513a" stroke-width="3"/><path d="M123 154 l7 14 l7 -14 z" fill="#d8513a"/>
  <g font-size="12" fill="currentColor"><text x="140" y="40">thrust 5,000 N</text><text x="140" y="160">weight mg = 3,710 N</text></g>
</svg>
</div>

**The lander.** Weight on Mars: $mg = 1000 \times 3.71 = 3{,}710$ N down. Thrust 5,000 N up. Taking up as positive:
$F_\text{net} = 5000 - 3710 = 1{,}290$ N up, so $a = 1290/1000 = 1.29$ m/s² **upwards**. The lander is moving down, so
an upward acceleration means it is **slowing down**, by 1.29 m/s every second.

**Weight is a force like any other**, $W = mg$. Mass is the same everywhere; $g$ changes.

## Worked examples

**1. The lander on Earth.** The same 1,000 kg lander, the same 5,000 N, but on Earth: weight 9,810 N. $F_\text{net} =
5000 - 9810 = -4{,}810$ N, $a = -4.81$ m/s²: it speeds up downwards. Those engines cannot land it on Earth.

**2. Pushing a crate in orbit.** An astronaut pushes a 200 kg crate with 50 N. $a = 50/200 = 0.25$ m/s². After 4 s
the crate moves at 1 m/s, and it keeps going (first law) until something stops it. Stopping it takes the same push the
other way: mass resists changes of motion even where nothing weighs anything.

**3. A rover on a slope.** A 1,025 kg rover's wheels push it forward with 800 N on flat ground; the soil's drag on the
wheels is 600 N. $a = 200/1025 = 0.2$ m/s².

## Try it

1. A 2,000 kg lander on Mars has 10,000 N of thrust. Find its acceleration and say whether a descending lander is
   slowing.
2. What thrust lets that lander hover on Mars?
3. A 50 kg box sits on the floor of a lift accelerating upwards at 2 m/s² on Earth. How hard does the floor push on it?
4. Use the third law: what does a rocket push on, and what pushes the rocket?
5. A ball floats in the space station. Why does it keep drifting after you let go?

??? note "Answers"
    1. Weight $= 7{,}420$ N. $F_\text{net} = 2{,}580$ N up, $a = 1.29$ m/s² up. Yes, slowing.
    2. $2000 \times 3.71 = 7{,}420$ N.
    3. $N - mg = ma$, so $N = 50 \times (9.81 + 2) = 590$ N.
    4. It pushes its exhaust backwards; the exhaust pushes it forwards.
    5. No net force acts on it (first law), so it keeps the velocity it had.

## Common mistake

**Using thrust as the net force.** Weight, drag and other forces act at the same time. $F = ma$ needs the **net**
(total) force.

## Where it leads

- Next: [Thrust-to-weight ratio](02-thrust-to-weight.md).
- [Level 5 page](index.md) · [Rockets and landing topic page](../index.md)
- Forces in general, with friction and slopes: the [Forces and motion](../../forces/index.md) topic.
