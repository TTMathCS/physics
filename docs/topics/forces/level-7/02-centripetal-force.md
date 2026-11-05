---
title: "Centripetal force"
---

# Centripetal force

*Forces and motion · level 7, lesson 2 of 6*

## A question to start

Swing a bucket of water in a vertical circle and the water stays in. Tie a 0.5 kg ball to a 1 m string and whirl it at
4 m/s. How hard does the string pull? Is there a special "centripetal force" acting?

## The idea

By the second law, an object of mass $m$ moving in a circle needs a net force towards the centre:

$$F = m\frac{v^2}{r} = m\omega^2 r.$$

This is called the **centripetal force**, but it is not a new kind of force. It is whatever real forces add up to an
inward pull: a tension, a friction, a normal force, gravity, or a mix.

| Circular motion | What supplies the inward force |
| --- | --- |
| A ball on a string | The string's tension |
| A car turning on a flat road | Friction between tyres and road |
| A train on a curved track | The rails pushing sideways on the wheels |
| A satellite in orbit | Gravity |
| A person in a spinning space station | The floor pushing on their feet |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 200" role="img" aria-label="A free-body diagram of a ball on a string moving in a horizontal circle seen from above. The only horizontal force is the tension pointing to the centre.">
  <circle cx="140" cy="100" r="75" fill="none" stroke="currentColor" stroke-dasharray="4 5" opacity=".6"/>
  <circle cx="140" cy="100" r="4" fill="currentColor"/>
  <line x1="140" y1="100" x2="215" y2="100" stroke="currentColor"/>
  <circle cx="215" cy="100" r="9" fill="#eea66f" stroke="currentColor"/>
  <line x1="205" y1="100" x2="170" y2="100" stroke="#d86a3a" stroke-width="3"/><path d="M174 94 l-12 6 l12 6 z" fill="#d86a3a"/>
  <line x1="215" y1="90" x2="215" y2="40" stroke="#5aa0d8" stroke-width="2.5"/><path d="M209 44 l6 -12 l6 12 z" fill="#5aa0d8"/>
  <g font-size="12" fill="currentColor"><text x="160" y="90">tension T</text><text x="222" y="50">v</text><text x="60" y="190">seen from above</text></g>
</svg>
</div>

Forces are unchanged by Mars gravity unless gravity or friction is the one doing the job. A string pulls just as hard
on Mars as on Earth for the same ball, speed and radius. But for anything that relies on friction or weight, Mars
gives less.

## Worked examples

**1. The ball.** $F = 0.5 \times 4^2 / 1 = 8$ N of tension, on Mars or Earth (ignoring the small downward pull).

**2. A wheel's rim.** A 2 kg segment of a flywheel rim at 0.5 m from the axle, spinning at 100 rad/s:
$F = 2 \times 100^2 \times 0.5 = 10{,}000$ N. The rim must hold together against forces this big.

**3. The bucket at the top.** At the top of a vertical circle of radius 1 m, the water needs an inward (downward)
acceleration of at least $g$, or it falls out. The slowest safe speed is $v = \sqrt{gr}$: 1.9 m/s on Mars,
3.1 m/s on Earth.

## Try it

1. Is centripetal force a separate kind of force?
2. What supplies the inward force for the Moon going round the Earth?
3. A 1,000 kg car takes a bend of radius 50 m at 15 m/s. How big is the inward force?
4. A 70 kg astronaut stands in a spinning station, 20 m from the axis, turning once every 9 s. How hard does the floor
   push?

??? note "Answers"
    1. No: it is whatever real forces add up to an inward pull.
    2. Gravity.
    3. $1000 \times 225 / 50 = 4{,}500$ N.
    4. $\omega = 2\pi/9 = 0.698$ rad/s. $F = 70 \times 0.698^2 \times 20 = 682$ N, close to their weight on Earth.

## Common mistake

**Drawing "centripetal force" as an extra arrow.** In a free-body diagram, draw only real forces. Their sum points to
the centre and equals $mv^2/r$.

## Where it leads

- Back: [Centripetal acceleration](01-centripetal-acceleration.md) · Next: [Cornering on flat ground](03-cornering.md)
- [Level 7 page](index.md) · [Forces and motion topic page](../index.md)
- The forces in a spinning rim, and what holds it together: [Stress and strain](../level-8/05-stress-and-strain.md).
