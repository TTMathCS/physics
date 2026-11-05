---
title: "Turning faster: τ = Iα"
---

# Turning faster: τ = Iα

*Forces and motion · level 8, lesson 3 of 6*

## A question to start

A rover's wheel motor gives a torque through a gearbox. How quickly does the wheel spin up, and how hard can it push
the rover forward before the wheel slips on Mars?

## The idea

The rotational form of Newton's second law is

$$\tau_\text{net} = I\alpha,$$

where $\alpha$ is the **angular acceleration**, in rad/s², the rate of change of $\omega$. The table shows how closely
rotation copies straight-line motion:

| Straight line | Rotation |
| --- | --- |
| Position $x$ | Angle $\theta$ |
| Velocity $v$ | Angular velocity $\omega$ |
| Acceleration $a$ | Angular acceleration $\alpha$ |
| Mass $m$ | Moment of inertia $I$ |
| Force $F$ | Torque $\tau$ |
| $F = ma$ | $\tau = I\alpha$ |
| $\tfrac12 mv^2$ | $\tfrac12 I\omega^2$ |

A driven wheel on the ground: the motor applies a torque $\tau$ to the wheel. Friction from the ground acts at the rim,
pushing the wheel (and so the rover) forward with $F$, and twisting the wheel back with $FR$. For the wheel,
$\tau - FR = I\alpha$; for the rover, $F = Ma$. If the wheel's own inertia is small, $F \approx \tau/R$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 180" role="img" aria-label="A wheel on the ground. A curved arrow shows the motor's torque turning it. At the contact point friction from the ground pushes forward.">
  <rect x="10" y="150" width="280" height="10" fill="#d86a3a" opacity=".5" stroke="currentColor"/>
  <circle cx="150" cy="95" r="55" fill="#cfc8bf" stroke="currentColor"/><circle cx="150" cy="95" r="5" fill="currentColor"/>
  <path d="M150 60 a35 35 0 0 1 33 25" fill="none" stroke="#5aa0d8" stroke-width="3"/><path d="M177 82 l8 12 l4 -14 z" fill="#5aa0d8"/>
  <line x1="150" y1="155" x2="210" y2="155" stroke="#eea66f" stroke-width="3"/><path d="M208 149 l12 6 l-12 6 z" fill="#eea66f"/>
  <line x1="150" y1="95" x2="150" y2="150" stroke="currentColor" stroke-dasharray="4 3"/>
  <g font-size="12" fill="currentColor"><text x="185" y="62">τ from the motor</text><text x="215" y="148">F, friction</text><text x="155" y="125">R</text></g>
</svg>
</div>

How big can $F$ be? No bigger than static friction, $\mu_s N$. On Mars, the wheel presses down with only 0.38 of its Earth
load, so for the same motor, **wheels slip at 0.38 of the torque** they could use on Earth. A rover motor geared for Earth
would spin its wheels on Mars; the torque must be limited to what the ground can take.

## Worked examples

**1. Spinning up a flywheel.** $I = 2.25$ kg m², torque 9 N m. $\alpha = 9/2.25 = 4$ rad/s². From rest to 300 rad/s:
$300/4 = 75$ s.

**2. The torque limit.** A 1,000 kg rover has six wheels of radius 0.26 m, each carrying a sixth of the weight. Each
wheel's load on Mars: $1000 \times 3.71 / 6 = 618$ N. With $\mu_s = 0.5$, the most grip per wheel is 309 N, and the
torque at which a wheel starts to slip is $309 \times 0.26 = 80$ N m. On Earth it would be 2.6 times more.

**3. A rolling race, again.** For a disc rolling down a slope, $\tau = FR$ about its centre and $I = \tfrac12 MR^2$
give $F = \tfrac12 Ma$; with $Mg\sin\theta - F = Ma$, $a = \tfrac23 g\sin\theta$, as in the last lesson.

## Try it

1. A torque of 12 N m acts on a wheel with $I = 0.6$ kg m². Find $\alpha$.
2. How long does it take to reach 50 rad/s from rest?
3. A wheel of radius 0.5 m carries 400 N on Mars with $\mu_s = 0.6$. What is the most torque it can use without slipping?
4. Why does the same motor slip on Mars when it would not on Earth?

??? note "Answers"
    1. $12/0.6 = 20$ rad/s².
    2. $50/20 = 2.5$ s.
    3. $0.6 \times 400 \times 0.5 = 120$ N m.
    4. The wheel presses down less, so the ground's grip, $\mu_s N$, is smaller.

## Common mistake

**Mixing revolutions and radians.** $\tau = I\alpha$ needs $\alpha$ in rad/s². One revolution is $2\pi$ rad, and 1 rpm
is $2\pi/60 = 0.105$ rad/s.

## Where it leads

- Back: [Moment of inertia](02-moment-of-inertia.md) · Next: [Angular momentum](04-angular-momentum.md)
- [Level 8 page](index.md) · [Forces and motion topic page](../index.md)
- The motors themselves: [Electricity and magnetism](../../electricity/index.md).
