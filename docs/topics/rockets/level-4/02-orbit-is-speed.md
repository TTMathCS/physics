---
title: "Orbit is speed"
---

# Orbit is speed

*Rockets and landing · level 4, lesson 2 of 6*

## A question to start

Some rockets carry tourists past the Kármán line, 100 km up, for a few minutes of floating, then fall back. Others
put satellites into orbit at 200 or 400 km. The orbital rockets are enormous by comparison. Why is orbit so much
harder than just reaching space?

## The idea

Reaching space is about **height**. Staying there is about **speed**.

- To go straight up to 100 km and fall back, a rocket needs to reach about **1.4 km/s**.
- To **orbit** at 200 km, it must go sideways at about **7.8 km/s**, so fast that as it falls, the curved Earth drops away
  beneath it (Newton's cannon, from [Gravity, level 2](../../gravity/level-2/05-newtons-cannon.md)).

Speed costs much more than height, because the energy of motion grows with the **square** of the speed. Per kilogram,
climbing to 200 km takes about 2 MJ of energy, while going 7.8 km/s takes about 30 MJ: fifteen times as much.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="A curved Earth. One rocket path goes straight up to 100 kilometres and falls back to almost the same spot. Another climbs and then turns sideways into a circle around the Earth.">
  <path d="M10 190 Q170 130 330 190" fill="#5aa0d8" opacity=".45" stroke="currentColor"/>
  <path d="M90 165 Q95 60 100 163" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M200 156 Q205 90 260 70 Q300 60 330 62" fill="none" stroke="#7aa363" stroke-width="2.5"/>
  <path d="M10 70 Q170 10 330 70" fill="none" stroke="currentColor" stroke-dasharray="4 4" opacity=".5"/>
  <g font-size="11" fill="currentColor"><text x="40" y="60">up to space and back:</text><text x="40" y="74">about 1.4 km/s</text><text x="210" y="98">into orbit: 7.8 km/s sideways</text></g>
</svg>
</div>

That is why orbital rockets turn over, soon after lift-off, and spend most of their burn speeding up **sideways**. A
rocket going to orbit climbs to its height in the first few minutes and then mostly builds speed along the horizon.

| Low orbit | Mars | Earth |
| --- | --- | --- |
| Speed for a low orbit | about 3.4 km/s | about 7.8 km/s |
| Time for one lap | about 1 h 50 min | about 1 h 30 min |
| Total speed a rocket must add from the ground (with losses) | about 4 km/s | about 9.4 km/s |

**On Mars**, orbital speed is less than half of Earth's. Because the fuel a rocket needs grows very steeply with the
speed it must reach, a rocket from the surface of Mars to orbit can be much smaller for the same payload.

## Worked examples

**1. Straight up.** From $v^2 = 2gh$ (ignoring air and the small fall in $g$): $v = \sqrt{2 \times 9.8 \times 100{,}000}
= 1{,}400$ m/s.

**2. Energy per kilogram.** Moving at 7,800 m/s: $\tfrac12 \times 7800^2 = 30{,}400{,}000$ J, about 30 MJ. Lifting to
200 km: about $9.5 \times 200{,}000 = 1.9$ MJ (using an average $g$ of 9.5).

## Try it

1. About how fast must something go to orbit the Earth just above the air? To orbit Mars?
2. Why do rockets going to orbit tip over soon after lift-off?
3. Is it harder to reach 100 km, or to orbit at 200 km? Why?
4. How much more energy per kilogram does orbit at 7.8 km/s take than a speed of 3.4 km/s?

??? note "Answers"
    1. About 7.8 km/s; about 3.4 km/s.
    2. To spend most of the burn speeding up sideways, which is what orbit needs.
    3. Orbiting: it needs far more speed, and energy grows with speed squared.
    4. $(7.8/3.4)^2 = 5.3$ times as much.

## Common mistake

**"Orbit is a place you go up to."** Orbit is a speed you reach. A rocket that climbed to 400 km and stopped would fall
straight back down.

## Where it leads

- Back: [Where space begins](01-where-space-begins.md) · Next: [The trip to Mars](03-the-trip-to-mars.md)
- [Level 4 page](index.md) · [Rockets and landing topic page](../index.md)
- Orbital speed worked out: [Orbital speed](../../gravity/level-6/03-orbital-speed.md).
