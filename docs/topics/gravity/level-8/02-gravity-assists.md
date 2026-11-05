---
title: "Gravity assists"
---

# Gravity assists

*Gravity and orbits · level 8, lesson 2 of 6*

## A question to start

In February 2009, NASA's Dawn spacecraft, bound for the asteroid Vesta, flew past Mars at about 550 km and came away on
a different path round the Sun, with no fuel used. How can a planet give a spacecraft speed for free?

## The idea

**In the planet's frame**, a flyby is a hyperbola. The ship comes in at $v_\infty$, swings round, and leaves at the
**same** $v_\infty$: energy is conserved relative to the planet. Only the **direction** changes, by the turn angle
$\delta$:

$$\sin\frac{\delta}{2} = \frac{1}{1 + r_p v_\infty^2 / GM},$$

where $r_p$ is the closest distance to the planet's centre. A close, slow flyby past a heavy planet turns most.

**In the Sun's frame**, add the planet's velocity $\mathbf{V}$ to both. The ship's velocity is $\mathbf V + \mathbf
v_\infty^\text{in}$ before and $\mathbf V + \mathbf v_\infty^\text{out}$ after. These have different lengths: the ship
gains or loses speed round the Sun. The change in velocity is

$$|\Delta \mathbf v| = 2 v_\infty \sin\frac{\delta}{2}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="Vector picture of a flyby. The planet's velocity V points right. The incoming excess velocity points down-right and the outgoing one up-right, the same length but turned. Added to V, the outgoing heliocentric velocity is longer than the incoming one.">
  <line x1="40" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="2.5"/><path d="M164 104 l12 6 l-12 6 z" fill="currentColor"/>
  <line x1="170" y1="110" x2="250" y2="160" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="170" y1="110" x2="260" y2="70" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="40" y1="110" x2="250" y2="160" stroke="#9cc9ea" stroke-dasharray="5 4"/>
  <line x1="40" y1="110" x2="260" y2="70" stroke="#eea66f" stroke-dasharray="5 4"/>
  <g font-size="11" fill="currentColor"><text x="90" y="128">V (planet)</text><text x="220" y="178">v∞ in</text><text x="250" y="62">v∞ out</text><text x="20" y="40">heliocentric speed: in (blue dashes) and out (orange dashes)</text></g>
</svg>
</div>

The planet pays for it: its own orbit changes by an amount far too small to measure, since it is so much heavier.

**Mars as a stepping stone.** Mars is light, so its turns are modest, but it sits on the way to the asteroid belt.
Rosetta flew past Mars in 2007 on its way to a comet, Dawn in 2009 on its way to Vesta, and ESA's Hera in March 2025,
on its way to the asteroid Didymos, photographing Deimos as it went.

## Worked examples

**1. A Mars flyby.** $v_\infty = 3$ km/s, $r_p = 3{,}690$ km (300 km up). $r_p v_\infty^2/GM = 3690 \times 9 / 42828 =
0.775$, so $\sin(\delta/2) = 1/1.775 = 0.563$, $\delta = 68.6°$, and $|\Delta v| = 2 \times 3 \times 0.563 = 3.38$ km/s.
That is about what a ship's engine would give with a mass ratio of 2.5.

**2. Jupiter.** $GM = 1.267\times10^8$ km³/s², flyby at $r_p = 500{,}000$ km with $v_\infty = 6$ km/s:
$r_p v_\infty^2/GM = 0.142$, $\sin(\delta/2) = 0.876$, $\delta = 122°$, $|\Delta v| = 10.5$ km/s. Jupiter can fling a
probe out of the solar system.

**3. Maximum gain.** If $\mathbf v_\infty$ turns from pointing against $\mathbf V$ to along it, the heliocentric speed
changes from $V - v_\infty$ to $V + v_\infty$: up to $2v_\infty$.

## Try it

1. Find the turn angle for a Mars flyby at $v_\infty = 5$ km/s and $r_p = 3{,}600$ km.
2. Why does the ship's speed relative to Mars not change during the flyby?
3. How does the turn angle change if the flyby is closer? If $v_\infty$ is larger?
4. Can a gravity assist slow a ship down (relative to the Sun)? When is that useful?
5. A probe is to fly past Mars at 200 km. Its $v_\infty$ is 4 km/s. Find $|\Delta v|$.

??? note "Answers"
    1. $3600 \times 25 / 42828 = 2.10$; $\sin(\delta/2) = 0.322$; $\delta = 37.6°$.
    2. Relative to Mars, gravity is conservative: the ship climbs out of the same well it fell into.
    3. Closer: more turn. Larger $v_\infty$: less turn.
    4. Yes, by passing in front of the planet so $\mathbf v_\infty$ turns against $\mathbf V$. It is used to fall inwards
       towards the Sun, to Venus or Mercury.
    5. $r_p = 3{,}590$ km: $3590 \times 16 / 42828 = 1.341$; $\sin(\delta/2) = 0.427$; $|\Delta v| = 2 \times 4 \times 0.427 = 3.42$ km/s.

## Common mistake

**Thinking the ship "falls in and gains speed".** Relative to the planet it gains on the way in and loses the same on
the way out. The gain is only in the Sun's frame, and it comes from the planet's motion.

## Where it leads

- Back: [Delta-v budgets](01-delta-v-budgets.md) · Next: [Lagrange points](03-lagrange-points.md)
- [Level 8 page](index.md) · [Gravity and orbits topic page](../index.md)
- Dawn's Mars flyby: [NASA, Dawn](https://science.nasa.gov/mission/dawn/). Hera's: [ESA, Hera](https://www.esa.int/Space_Safety/Hera).
