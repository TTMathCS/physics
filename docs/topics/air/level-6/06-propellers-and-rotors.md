---
title: "Propellers and rotors"
---

# Propellers and rotors

*Air and fluids · level 6, lesson 6 of 6*

## A question to start

Ingenuity, the helicopter that flew on Mars, spun its rotor blades at about 2,400 turns a minute. How fast were the tips
of its blades moving through the air?

## The idea

A propeller or helicopter rotor is a set of **spinning wings**. Each blade is tilted so that, as it sweeps round, it
turns air downwards (or backwards, for a propeller), and the air pushes the blade up (or forwards). This push is the
**thrust**.

Each point on a blade moves in a circle. In one turn, a point at radius $r$ travels $2\pi r$. At $n$ turns each second,
its speed is

$$v = 2\pi r n.$$

The tips move fastest, and the tips do most of the work. But a tip must not get too close to the **speed of sound**, or
shock waves form and the blade loses lift and shakes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A helicopter seen from below with two blades spinning. Arrows along a blade grow longer towards the tip, showing that the tip moves fastest.">
  <circle cx="165" cy="75" r="65" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <rect x="100" y="71" width="130" height="8" fill="#cfc8bf" stroke="currentColor"/><circle cx="165" cy="75" r="8" fill="#d86a3a"/>
  <g stroke="#5aa0d8" stroke-width="2"><line x1="190" y1="70" x2="190" y2="58"/><line x1="210" y1="70" x2="210" y2="45"/><line x1="228" y1="70" x2="228" y2="32"/></g>
  <g font-size="11" fill="currentColor"><text x="240" y="40">tip: fastest</text><text x="5" y="15">blade speed grows with radius</text></g>
</svg>
</div>

Ingenuity had a mass of 1.8 kg and two rotors, each 1.2 m from tip to tip, spinning in opposite directions at about
2,400 turns a minute.

| Blade tips at 151 m/s | Mars | Earth |
| --- | --- | --- |
| Speed of sound | 234 m/s (carbon dioxide, 217 K) | about 340 m/s (air, 15 °C) |
| Tip speed as a share of it | 65% | 44% |

The two rotors spin in **opposite directions**. A single rotor would push the air round one way, and by Newton's third
law the body would spin the other way. Two rotors cancel this out.

## Worked examples

**1. Turns each second.** $2400/60 = 40$ turns a second.

**2. Tip speed.** $r = 0.6$ m: $v = 2\pi \times 0.6 \times 40 = 151$ m/s, about 540 km/h.

**3. Compared with sound.** $151/234 = 0.65$: the tips moved at about 65% of the speed of sound in Mars air.

## Try it

1. Why do a rotor's tips move faster than the parts near the middle?
2. A fan blade 0.2 m long spins at 1,200 turns a minute. Find its tip speed.
3. At what spin rate would Ingenuity's tips reach the speed of sound in Mars air?
4. Why did Ingenuity have two rotors spinning in opposite directions?

??? note "Answers"
    1. They go round a bigger circle in the same time.
    2. $2\pi \times 0.2 \times 20 = 25$ m/s.
    3. $n = 234/(2\pi \times 0.6) = 62$ turns a second, about 3,700 turns a minute.
    4. So the body would not spin the opposite way to a single rotor.

## Common mistake

**Using the diameter as the radius.** Ingenuity's rotors are 1.2 m across, so the radius is 0.6 m.

## Where it leads

- Back: [How a wing lifts](05-how-a-wing-lifts.md) · Next level: [Level 7: Lift and drag](../level-7/index.md)
- [Level 6 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Ingenuity page](https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/),
  [Mastcam-Z video of the blades spinning](https://science.nasa.gov/photojournal/mastcam-z-captures-ingenuitys-blades-spinning)
  and the [NIST fluid properties](https://webbook.nist.gov/chemistry/fluid/) for the speed of sound. Speed of sound:
  [Waves, sound and light](../../waves/index.md).
