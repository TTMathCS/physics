---
title: "Impulse"
---

# Impulse

*Rockets and landing · level 5, lesson 4 of 6*

## A question to start

The airbags of the Spirit rover hit Mars at about 13 m/s, the speed of a fast bicycle, and the rover inside was fine.
The same rover dropped onto bare rock at that speed would have smashed. Both had to lose the same momentum. What was
different?

## The idea

From $F = \Delta p / \Delta t$:

$$F\,\Delta t = \Delta p.$$

Force times time is the **impulse**, and it equals the change of momentum. To stop a body you must give it an impulse
equal to its momentum. You can do it with a **big force for a short time** or a **small force for a long time**.

- On bare rock, the stop takes perhaps a thousandth of a second: a huge force.
- In airbags, or on squashing legs, or with bent knees, the stop takes much longer: a much smaller force.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 170" role="img" aria-label="Two graphs of force against time with the same area. One is a tall narrow spike for a hard landing; the other is a low wide hump for a soft landing.">
  <line x1="30" y1="140" x2="160" y2="140" stroke="currentColor"/><line x1="30" y1="140" x2="30" y2="20" stroke="currentColor"/>
  <path d="M60 140 L70 25 L80 140 Z" fill="#d8513a" opacity=".6" stroke="currentColor"/>
  <line x1="190" y1="140" x2="330" y2="140" stroke="currentColor"/><line x1="190" y1="140" x2="190" y2="20" stroke="currentColor"/>
  <path d="M200 140 Q260 100 320 140 Z" fill="#7aa363" opacity=".6" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="40" y="160">hard: short and big</text><text x="210" y="160">soft: long and small</text><text x="36" y="16">force</text><text x="196" y="16">force</text><text x="100" y="80">same area</text></g>
</svg>
</div>

On a force-time graph, the impulse is the **area** under the curve. A soft landing spreads the same area over a longer time.

**Over a distance.** If a lander's legs squash by a distance $d$ while it stops from speed $v$ at a steady deceleration,
then $v^2 = 2ad$, so $a = v^2/2d$, and the force (besides holding up its weight) is $ma$. Longer legs, softer landing.

## Worked examples

**1. Perseverance touching down.** 1,025 kg at 0.75 m/s: momentum 769 kg·m/s. If its wheels and suspension stop it in
0.2 s, the average extra force is $769/0.2 = 3{,}800$ N, about its own weight on Mars. A firm but gentle bump.

**2. Airbags.** A 540 kg airbag ball at 13 m/s: momentum 7,020 kg·m/s. If the airbags squash and stop it in 0.1 s, the
force is 70,000 N, about 13 g. On bare rock, stopped in 0.002 s, it would be 3.5 MN, over 600 g.

**3. Lander legs.** A 1,000 kg lander touches at 2 m/s and its legs squash 0.3 m. $a = 4/0.6 = 6.7$ m/s²; force from the
legs $= m(a + g) = 1000 \times (6.7 + 3.71) = 10{,}400$ N.

## Try it

1. A 0.06 kg egg falls at 5 m/s and stops in 0.002 s on a hard floor. Find the force.
2. On a cushion it stops in 0.05 s. Find the force now.
3. What impulse stops a 2,000 kg lander moving at 3 m/s?
4. A lander's legs squash 0.5 m to stop it from 3 m/s on Mars. Find the deceleration.
5. Why do crumple zones in cars save lives?

??? note "Answers"
    1. $\Delta p = 0.3$ kg·m/s; $F = 0.3/0.002 = 150$ N.
    2. $0.3/0.05 = 6$ N.
    3. 6,000 N·s.
    4. $a = 9/1.0 = 9$ m/s².
    5. They make the car stop over a longer time and distance, so the force on the people is smaller.

## Common mistake

**Thinking a soft landing removes less momentum.** The momentum lost is the same; only the time it takes changes.
Softness is about spreading out the force.

## Where it leads

- Back: [Momentum](03-momentum.md) · Next: [Exhaust speed](05-exhaust-speed.md)
- [Level 5 page](index.md) · [Rockets and landing topic page](../index.md)
- The first steps, without numbers: [Coming down gently](../level-1/05-coming-down-gently.md).
