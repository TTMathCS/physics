---
title: "Projectiles"
---

# Projectiles

*Gravity and orbits · level 5, lesson 3 of 6*

## A question to start

On Mars, a geologist throws a rock sample to a colleague 40 m away at 45°. How fast must they throw it? Would the same
throw on Earth reach?

## The idea

Split the throw into two motions that do not affect each other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 180" role="img" aria-label="A throw at speed v and angle theta, split into a horizontal part v cos theta that stays the same, and a vertical part v sin theta that slows, stops at the top and reverses.">
  <line x1="20" y1="160" x2="350" y2="160" stroke="currentColor"/>
  <path d="M40 160 Q180 0 320 160" fill="none" stroke="#eea66f" stroke-width="2.2"/>
  <g stroke="currentColor" stroke-width="2"><line x1="40" y1="160" x2="100" y2="100"/><line x1="40" y1="160" x2="100" y2="160" stroke="#5aa0d8"/><line x1="40" y1="160" x2="40" y2="100" stroke="#7aa363"/></g>
  <g font-size="12" fill="currentColor"><text x="80" y="92">v</text><text x="62" y="176">v cos θ</text><text x="-2" y="128">v sin θ</text><text x="54" y="150">θ</text><text x="170" y="70">top: only across</text><text x="290" y="176">range R</text></g>
</svg>
</div>

- **Across:** speed $v\cos\theta$, steady (no force across, ignoring air).
- **Up and down:** starts at $v\sin\theta$ and loses $g$ every second, exactly like a ball thrown straight up.

**Time in the air.** The up-and-down part comes back to zero height after $T = \dfrac{2v\sin\theta}{g}$.

**Highest point.** From $v^2 = 2gs$ on the vertical part: $H = \dfrac{v^2\sin^2\theta}{2g}$.

**Range.** Across speed times time: $R = v\cos\theta \cdot \dfrac{2v\sin\theta}{g} = \dfrac{v^2 \sin 2\theta}{g}$,
using $2\sin\theta\cos\theta = \sin 2\theta$.

$\sin 2\theta$ is largest (1) when $2\theta = 90°$, so **45° gives the longest range**, $R = v^2/g$. Angles that add up
to 90° (30° and 60°) give the same range.

Every one of these has $g$ on the bottom. On Mars, **time, height and range are all 2.64 times bigger** for the same
throw.

## Worked examples

**1. The sample.** For $R = 40$ m at 45° on Mars: $v^2 = R g = 40 \times 3.71 = 148$, so $v = 12.2$ m/s, a gentle
throw. On Earth that throw would go $148 / 9.81 = 15$ m.

**2. A kicked ball.** Kicked at 20 m/s at 30° on Mars: $T = 2 \times 20 \times 0.5 / 3.71 = 5.4$ s;
$H = 400 \times 0.25 / 7.42 = 13.5$ m; $R = 400 \times \sin 60° / 3.71 = 400 \times 0.866 / 3.71 = 93$ m.

**3. Thrown flat from a cliff.** A rock thrown horizontally at 10 m/s from a 20 m ledge on Mars. Fall time
$t = \sqrt{2 \times 20/3.71} = 3.28$ s, so it lands $10 \times 3.28 = 33$ m out.

## Try it

1. A ball is thrown at 15 m/s at 45° on Earth. Find its range. Then on Mars.
2. For the throw in question 1, find the time in the air on Mars.
3. A rock is thrown horizontally at 6 m/s from a 5 m wall on Mars. How far out does it land?
4. Show that throws at 30° and 60° at the same speed have the same range.
5. Real throws on Earth fall short of the formula. Would the formula work better or worse on Mars? Why?

??? note "Answers"
    1. Earth: $225 / 9.81 = 22.9$ m. Mars: $225 / 3.71 = 60.6$ m.
    2. $T = 2 \times 15 \times 0.707 / 3.71 = 5.7$ s.
    3. $t = \sqrt{10/3.71} = 1.64$ s, so $6 \times 1.64 = 9.8$ m.
    4. $\sin 60° = \sin 120°$, both $\approx 0.866$.
    5. Better: the air on Mars is about 60 times thinner, so drag is much smaller.

## Common mistake

**Using $g$ for the across motion.** Gravity pulls only down. The across speed stays the same the whole way; only the
up-and-down part changes.

## Where it leads

- Back: [The speed of a fall](02-speed-of-a-fall.md) · Next: [The Mars jump, worked out](04-the-mars-jump.md)
- [Level 5 page](index.md) · [Gravity and orbits topic page](../index.md)
- The sine and cosine used here: [Math site, Geometry](https://math.akadian.ca/topics/geometry/index.html).
