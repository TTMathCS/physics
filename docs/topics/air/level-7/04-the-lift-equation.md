---
title: "The lift equation"
---

# The lift equation

*Air and fluids · level 7, lesson 4 of 6*

## A question to start

A small aircraft on Earth takes off at about 30 m/s. How fast would the same aircraft need to go to take off on Mars?

## The idea

Lift follows an equation just like drag:

$$L = \tfrac12 \rho v^2 C_L A,$$

where $A$ is the wing area and $C_L$ the **lift coefficient**, which grows with the angle of attack, up to about 1.5 for
a plain wing before it stalls.

To take off, lift must at least equal the weight, $mg$:

$$v = \sqrt{\frac{2mg}{\rho C_L A}}.$$

This is the same form as the terminal velocity. So the same factor, about 5.4, applies: an aircraft needs about 5.4 times
the speed to fly on Mars.

| A 1,000 kg aircraft, wing 16 m², $C_L = 1.0$ | Mars | Earth |
| --- | --- | --- |
| Weight | 3,710 N | 9,810 N |
| Air density | 0.016 kg/m³ | 1.217 kg/m³ |
| Take-off speed | 170 m/s | 32 m/s |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Two runways. On Earth, a small plane lifts off after a short run. On Mars, the same plane is still on a much longer runway, needing over five times the speed.">
  <line x1="20" y1="50" x2="310" y2="50" stroke="currentColor"/><line x1="20" y1="120" x2="310" y2="120" stroke="currentColor"/>
  <path d="M70 40 l30 -10 l4 4 l-30 12 z" fill="#5aa0d8" stroke="currentColor"/>
  <path d="M260 115 l35 0 l3 4 l-38 0 z" fill="#d86a3a" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="20" y="20">Earth: off the ground at 32 m/s</text><text x="20" y="100">Mars: needs 170 m/s and a much longer run</text></g>
</svg>
</div>

## Worked examples

**1. Earth.** $v = \sqrt{2 \times 9810/(1.217 \times 1.0 \times 16)} = \sqrt{1008} = 32$ m/s.

**2. Mars.** $v = \sqrt{2 \times 3710/(0.016 \times 1.0 \times 16)} = \sqrt{29{,}000} = 170$ m/s. That is 73% of the speed
of sound in Mars air, where new problems begin.

**3. A better design for Mars.** Cut the mass to 100 kg and double the wing to 32 m²: $v = \sqrt{2 \times 371/(0.016 \times 32)} = 38$ m/s.

## Try it

1. How does lift change if the speed doubles?
2. A glider of 300 kg with a 15 m² wing and $C_L = 1.2$: find its stall speed on Earth.
3. Find the same glider's stall speed on Mars.
4. Give two ways to make an aircraft that can fly slowly on Mars.

??? note "Answers"
    1. It becomes four times bigger.
    2. $\sqrt{2 \times 2943/(1.217 \times 1.2 \times 15)} = \sqrt{269} = 16$ m/s.
    3. $\sqrt{2 \times 1113/(0.016 \times 1.2 \times 15)} = \sqrt{7730} = 88$ m/s.
    4. Any two: make it very light; give it a very large wing; use a wing with a high lift coefficient.

## Common mistake

**"Lower gravity makes flying easy on Mars."** Weaker gravity helps, but the air is 75 times thinner. Overall, wings need
over five times the speed.

## Where it leads

- Back: [Landing on Mars](03-landing-on-mars.md) · Next: [How Ingenuity flew](05-how-ingenuity-flew.md)
- [Level 7 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). How a wing lifts, without the
  equation: [How a wing lifts](../level-6/05-how-a-wing-lifts.md).
