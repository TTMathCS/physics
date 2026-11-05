---
title: "Electric motors"
---

# Electric motors

*Electricity and magnetism · level 7, lesson 3 of 6*

## A question to start

The motor effect pushes a wire sideways. How do we turn that sideways push into something that spins round and round?

## The idea

Put a rectangular **coil** in a magnetic field. Current flows one way along one side and back the other way along the
other side. So the two sides are pushed in **opposite** directions, and the coil turns.

The turning effect, the **torque**, is greatest when the coil's plane lies along the field:

$$\tau = NBIA,$$

for $N$ turns of area $A$. As the coil turns, the torque falls, and after half a turn it would push back. So the
current must be **reversed every half turn**:

- In a simple DC motor, a **split-ring commutator** with brushes does this.
- In a **brushless** motor, electronics switch the currents in fixed coils, and the magnet spins instead. These last
  longer, as there are no brushes to wear out.

The power a motor delivers is $P = \tau\omega$, where $\omega$ is its spin rate in radians per second.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A rectangular coil between north and south poles. On one side of the coil the force points up, on the other side down, so the coil turns.">
  <rect x="15" y="35" width="50" height="70" fill="#d86a3a" stroke="currentColor"/><rect x="265" y="35" width="50" height="70" fill="#5aa0d8" stroke="currentColor"/>
  <g font-size="14" fill="#fff" font-weight="bold"><text x="33" y="75">N</text><text x="283" y="75">S</text></g>
  <path d="M100 60 L230 60 L230 80 L100 80 Z" fill="none" stroke="#eea66f" stroke-width="4"/>
  <line x1="100" y1="58" x2="100" y2="20" stroke="#d86a3a" stroke-width="3"/><path d="M94 22 l6 -10 l6 10 z" fill="#d86a3a"/>
  <line x1="230" y1="82" x2="230" y2="120" stroke="#d86a3a" stroke-width="3"/><path d="M224 118 l6 10 l6 -10 z" fill="#d86a3a"/>
  <path d="M150 115 A30 12 0 0 0 190 115" fill="none" stroke="currentColor" stroke-width="2"/><path d="M188 110 l6 6 l-8 2 z" fill="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="108" y="25">force up</text><text x="170" y="134">force down</text><text x="130" y="100">the coil turns</text></g>
</svg>
</div>

## Worked examples

**1. Torque.** 100 turns, $B = 0.5$ T, $I = 2$ A, $A = 4$ cm² $= 4\times10^{-4}$ m²:
$\tau = 100 \times 0.5 \times 2 \times 4\times10^{-4} = 0.04$ N m.

**2. Power.** At 3,000 turns a minute, $\omega = 3000 \times 2\pi/60 = 314$ rad/s: $P = 0.04 \times 314 = 12.6$ W.

**3. More torque.** Double the current and the torque doubles: 0.08 N m.

## Try it

1. Find the torque on a 50-turn coil of area 0.01 m² carrying 3 A in a 0.2 T field.
2. Why must the current in the coil reverse every half turn?
3. A motor gives 0.5 N m at 251 rad/s. What is its power?
4. Why do brushless motors last longer?

??? note "Answers"
    1. $50 \times 0.2 \times 3 \times 0.01 = 0.3$ N m.
    2. Otherwise, after half a turn, the forces would turn the coil back the other way.
    3. $0.5 \times 251 = 126$ W.
    4. They have no brushes rubbing on a commutator to wear out.

## Common mistake

**"The torque is always $NBIA$."** That is the largest value, when the coil lies along the field. When the coil faces
the field squarely, the forces pull straight outwards and the torque is zero.

## Where it leads

- Back: [The motor effect](02-the-motor-effect.md) · Next: [Electromagnetic induction](04-electromagnetic-induction.md)
- [Level 7 page](index.md) · [Electricity and magnetism topic page](../index.md)
- Torque and spin: [Torque](../../forces/level-8/01-torque.md).
