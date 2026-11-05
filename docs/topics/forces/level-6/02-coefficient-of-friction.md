---
title: "The coefficient of friction"
---

# The coefficient of friction

*Forces and motion · level 6, lesson 2 of 6*

## A question to start

On Mars, a crate presses on the floor with only 0.38 of its Earth weight. Is it easier to slide? By how much?

## The idea

Friction depends on two things: how grippy the two surfaces are, and how hard they press together. The pressing force
is the **normal force** $N$, at right angles to the surfaces. Experiments show that, roughly:

$$F_\text{static} \le \mu_s N, \qquad F_\text{kinetic} = \mu_k N.$$

$\mu$ (the Greek letter mu) is the **coefficient of friction**, a number with no units. It depends on the pair of
surfaces, not on how big the contact area is.

| Surfaces | $\mu_s$ static | $\mu_k$ kinetic |
| --- | --- | --- |
| Rubber on dry concrete | about 1.0 | about 0.8 |
| Wood on wood | 0.25 to 0.5 | about 0.2 |
| Steel on steel, dry | about 0.7 | about 0.5 |
| Ice on ice | about 0.1 | about 0.03 |

(Typical textbook values; real ones vary with dirt, wetness and wear.)

On flat ground, $N = mg$. So on Mars, where $g$ is smaller, $N$ is smaller and **friction is smaller** in the same
proportion:

| A 100 kg crate, $\mu_s = 0.5$, on a flat floor | Mars | Earth |
| --- | --- | --- |
| Normal force $N = mg$ | 371 N | 981 N |
| Push needed to start it sliding, $\mu_s N$ | 186 N | 491 N |
| Acceleration with a 300 N push, $\mu_k = 0.4$ | 1.52 m/s² | sliding needs over 491 N: it stays put |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="The same crate on Earth and on Mars. On Earth, a long normal force arrow and a long friction arrow. On Mars, both arrows are shorter by the same factor.">
  <rect x="20" y="95" width="130" height="8" fill="#cfc8bf" stroke="currentColor"/><rect x="180" y="95" width="130" height="8" fill="#d86a3a" opacity=".6" stroke="currentColor"/>
  <rect x="60" y="65" width="45" height="30" fill="#eea66f" stroke="currentColor"/><rect x="220" y="65" width="45" height="30" fill="#eea66f" stroke="currentColor"/>
  <line x1="82" y1="65" x2="82" y2="15" stroke="#5aa0d8" stroke-width="3"/><path d="M76 20 l6 -12 l6 12 z" fill="#5aa0d8"/>
  <line x1="242" y1="65" x2="242" y2="46" stroke="#5aa0d8" stroke-width="3"/><path d="M236 50 l6 -12 l6 12 z" fill="#5aa0d8"/>
  <line x1="58" y1="88" x2="25" y2="88" stroke="#d86a3a" stroke-width="3"/><path d="M28 82 l-12 6 l12 6 z" fill="#d86a3a"/>
  <line x1="218" y1="88" x2="205" y2="88" stroke="#d86a3a" stroke-width="3"/><path d="M208 82 l-12 6 l12 6 z" fill="#d86a3a"/>
  <g font-size="12" fill="currentColor"><text x="60" y="125">Earth</text><text x="225" y="125">Mars</text><text x="90" y="30">N</text><text x="250" y="45">N</text></g>
</svg>
</div>

That is good news for moving cargo on Mars, but bad news for grip. A vehicle's tyres can push it forward, brake it or
turn it with only about 0.38 of the force they could on Earth.

## Worked examples

**1. The crate on Mars with a 300 N push.** It slides, since $300 > 186$. Kinetic friction $= 0.4 \times 371 = 148$ N.
Net force $300 - 148 = 152$ N. $a = 152 \div 100 = 1.52$ m/s².

**2. Braking a truck on Mars.** A 2,000 kg truck with $\mu_s = 0.8$ between tyres and rock: the most braking force is
$0.8 \times 2000 \times 3.71 = 5{,}900$ N, giving at most $5900 \div 2000 = 3.0$ m/s². On Earth, 7.8 m/s².

## Try it

1. A 50 kg box sits on a floor with $\mu_s = 0.6$. What push starts it sliding on Earth? On Mars?
2. Why does friction on Mars come out smaller for the same object and surfaces?
3. A crate slides with $\mu_k = 0.3$. Find the kinetic friction on a 200 kg crate on Mars.
4. What is the greatest deceleration a car with $\mu_s = 0.9$ can brake at, on Mars?

??? note "Answers"
    1. Earth $0.6 \times 50 \times 9.81 = 294$ N; Mars $0.6 \times 50 \times 3.71 = 111$ N.
    2. The normal force $mg$ is smaller, and friction is $\mu$ times the normal force.
    3. $0.3 \times 200 \times 3.71 = 223$ N.
    4. $a = \mu_s g = 0.9 \times 3.71 = 3.3$ m/s². The mass cancels.

## Common mistake

**"A wider tyre has more friction because more of it touches."** In the simple model, friction does not depend on area:
the same normal force spread over more area presses less at each point. Wide tyres help for other reasons, such as not
sinking into soft ground.

## Where it leads

- Back: [Static and kinetic friction](01-static-and-kinetic.md) · Next: [Forces on a ramp](03-forces-on-a-ramp.md)
- [Level 6 page](index.md) · [Forces and motion topic page](../index.md)
- Grip in a turn: [Cornering on flat ground](../level-7/03-cornering.md).
