---
title: "Moment of inertia"
---

# Moment of inertia

*Forces and motion · level 8, lesson 2 of 6*

## A question to start

Race a hoop, a solid disc and a solid ball down the same slope, all from rest. Which wins? Would the order change on
Mars?

## The idea

In a straight line, mass is the measure of inertia. In rotation, inertia depends on the mass **and on how far it is from
the axis**. The **moment of inertia** is

$$I = \sum m_i r_i^2,$$

the sum over every bit of mass of the mass times the square of its distance from the axis. Mass far out counts much
more than mass near the middle.

| Shape, mass $M$, radius $R$, about its centre | $I$ |
| --- | --- |
| Thin hoop or ring | $MR^2$ |
| Solid disc or cylinder | $\tfrac12 MR^2$ |
| Solid ball | $\tfrac25 MR^2$ |
| Thin rod of length $L$, about its middle | $\tfrac1{12} ML^2$ |

A rolling object has two kinds of kinetic energy: moving along, $\tfrac12 mv^2$, and spinning, $\tfrac12 I\omega^2$.
Rolling without slipping, $v = \omega R$. Write $I = kmR^2$. Energy from a drop $h$:
$mgh = \tfrac12 mv^2(1 + k)$, so $v^2 = 2gh/(1+k)$, and the acceleration along a slope of angle $\theta$ is

$$a = \frac{g\sin\theta}{1 + k}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 180" role="img" aria-label="A hoop, a disc and a ball rolling down a slope. The ball is farthest ahead, then the disc, then the hoop.">
  <path d="M20 160 L310 160 L20 40 Z" fill="#cfc8bf" opacity=".5" stroke="currentColor"/>
  <circle cx="230" cy="114" r="13" fill="#d86a3a" stroke="currentColor"/>
  <circle cx="170" cy="88" r="13" fill="#eea66f" stroke="currentColor"/><circle cx="170" cy="88" r="2" fill="currentColor"/>
  <circle cx="110" cy="63" r="13" fill="none" stroke="#5aa0d8" stroke-width="4"/>
  <g font-size="12" fill="currentColor"><text x="240" y="100">ball: k = 2/5</text><text x="180" y="70">disc: 1/2</text><text x="100" y="40">hoop: 1</text></g>
</svg>
</div>

So the ball wins, then the disc, then the hoop. The **mass and the radius cancel**: any solid ball beats any hoop. And
on Mars, every acceleration is 0.38 of Earth's, but **the order is the same**, because $g$ scales them all together.

| Rolling down 2 m of a 20° slope from rest | Mars | Earth |
| --- | --- | --- |
| Ball, $a = g\sin\theta / 1.4$ | 0.91 m/s², 2.1 s | 2.40 m/s², 1.3 s |
| Disc, $/1.5$ | 0.85 m/s², 2.2 s | 2.24 m/s², 1.3 s |
| Hoop, $/2$ | 0.63 m/s², 2.5 s | 1.68 m/s², 1.5 s |

## Worked examples

**1. A disc on Mars.** $a = 3.71 \times 0.342 / 1.5 = 0.85$ m/s². Time for 2 m: $\sqrt{4/0.85} = 2.2$ s.

**2. A flywheel.** A steel disc of 50 kg and radius 0.3 m: $I = \tfrac12 \times 50 \times 0.09 = 2.25$ kg m².

**3. Two masses on a rod.** Two 1 kg masses at 0.5 m from the middle of a light rod: $I = 2 \times 1 \times 0.25 = 0.5$
kg m². Move them in to 0.25 m: $I = 0.125$ kg m², a quarter.

## Try it

1. Find $I$ for a 2 kg hoop of radius 0.4 m.
2. Find $I$ for a 10 kg solid cylinder of radius 0.2 m.
3. Find the acceleration of a solid ball rolling down a 30° slope on Mars.
4. Why does a hoop roll down more slowly than a disc?

??? note "Answers"
    1. $2 \times 0.16 = 0.32$ kg m².
    2. $\tfrac12 \times 10 \times 0.04 = 0.2$ kg m².
    3. $3.71 \times 0.5 / 1.4 = 1.33$ m/s².
    4. All its mass is far from the axis, so more of its energy goes into spinning and less into moving along.

## Common mistake

**"A heavier ball rolls down faster."** Mass and radius cancel: all solid balls roll down at the same rate (without air).
Only the shape, the value of $k$, matters.

## Where it leads

- Back: [Torque](01-torque.md) · Next: [Turning faster: τ = Iα](03-angular-acceleration.md)
- [Level 8 page](index.md) · [Forces and motion topic page](../index.md)
- Kinetic energy, and flywheels that store it: [Energy and power](../../energy/index.md).
