---
title: "The work-energy theorem"
---

# The work-energy theorem

*Energy and power · level 5, lesson 6 of 6*

## A question to start

A loaded cart rolls at 3 m/s when its brakes lock. How far does it skid before it stops, on Mars and on Earth?

## The idea

The **work-energy theorem**: the **net work** done on an object, by all the forces on it, equals the **change in its
kinetic energy**:

$$W_\text{net} = \Delta E_k = \tfrac12 m v^2 - \tfrac12 m u^2,$$

with $u$ the starting speed and $v$ the final speed.

For the skidding cart, the only force along the motion is kinetic friction, $\mu mg$, acting backwards over the
skidding distance $d$. It does negative work $-\mu mgd$, which removes all the kinetic energy:

$$-\mu m g d = 0 - \tfrac12 m u^2 \qquad\Rightarrow\qquad d = \frac{u^2}{2\mu g}.$$

The mass cancels, but $g$ stays. On Mars, with weaker friction, skids are **2.6 times longer**.

| A cart skidding from 3 m/s, $\mu = 0.5$ | Mars | Earth |
| --- | --- | --- |
| Friction per kg, $\mu g$ | 1.86 N | 4.91 N |
| Skid distance, $u^2/(2\mu g)$ | 2.4 m | 0.92 m |
| Time to stop, $u/(\mu g)$ | 1.6 s | 0.61 s |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="Two skid marks from the same starting point. The Earth skid is short, under one metre. The Mars skid is 2.6 times longer.">
  <line x1="20" y1="45" x2="70" y2="45" stroke="#5aa0d8" stroke-width="6"/><rect x="70" y="32" width="30" height="20" fill="#eea66f" stroke="currentColor"/>
  <line x1="20" y1="95" x2="152" y2="95" stroke="#d86a3a" stroke-width="6"/><rect x="152" y="82" width="30" height="20" fill="#eea66f" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="120" y="48">Earth: 0.92 m</text><text x="197" y="98">Mars: 2.4 m</text></g>
</svg>
</div>

The theorem is often quicker than forces and accelerations, because it needs only the start and the end.

## Worked examples

**1. The Mars skid.** $d = 3^2/(2 \times 0.5 \times 3.71) = 9/3.71 = 2.4$ m.

**2. Pushing to a speed.** A 200 kg cart is pushed with 120 N for 10 m on Mars, against 50 N of friction. Net work
$= (120 - 50) \times 10 = 700$ J. From rest: $\tfrac12 \times 200 \times v^2 = 700$, so $v = 2.6$ m/s.

**3. Stopping a buggy.** A 600 kg buggy at 8 m/s on Mars brakes with $\mu = 0.7$: $d = 64/(2 \times 0.7 \times 3.71)
= 12.3$ m. On Earth, 4.7 m.

## Try it

1. State the work-energy theorem.
2. A 5 kg box at 4 m/s slides to a stop. How much work did friction do?
3. With $\mu = 0.4$ on Mars, how far does it slide?
4. Why are Mars stopping distances longer, if the mass cancels?

??? note "Answers"
    1. The net work done on an object equals its change in kinetic energy.
    2. $-\tfrac12 \times 5 \times 16 = -40$ J.
    3. $d = 16/(2 \times 0.4 \times 3.71) = 5.4$ m.
    4. The friction force is $\mu mg$, and $g$ is smaller, so friction removes the energy over a longer distance.

## Common mistake

**Using one force instead of all of them.** The theorem uses the **net** work, of every force. A push that only balances
friction does no net work, and the speed stays the same.

## Where it leads

- Back: [A dropped tool](05-a-dropped-tool.md) · Next level: [Efficiency and the Sun](../level-6/index.md)
- [Level 5 page](index.md) · [Energy and power topic page](../index.md)
- The same result with forces: [Cornering on flat ground](../../forces/level-7/03-cornering.md).
