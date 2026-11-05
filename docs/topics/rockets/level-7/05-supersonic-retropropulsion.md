---
title: "Supersonic retropropulsion"
---

# Supersonic retropropulsion

*Rockets and landing · level 7, lesson 5 of 6*

## A question to start

Every Mars lander so far has weighed a tonne or less on the ground. A lander for people, with their habitat or their
ascent rocket, would be tens of tonnes. Why can't it just use a bigger heat shield and bigger parachutes?

## The idea

**The ballistic coefficient again.** For bodies of the same shape and density, mass grows with size cubed but area with
size squared, so $\beta = m/(C_d A)$ grows with size. A body's terminal speed, if it had all the height it wanted, is
$v_t = \sqrt{2\beta g/\rho}$. At Mars's ground density:

| | $\beta$ (kg/m²) | Terminal speed at the ground | Mach number |
| --- | --- | --- | --- |
| Perseverance's capsule | about 130 | about 220 m/s | about 0.9 |
| A 40 t crew lander, 10 m across | about 340 | about 355 m/s | about 1.5 |

Even falling through the whole atmosphere, the heavy lander would still hit the ground faster than sound. In practice
it is worse: it slows so low down that there is no time for anything else. A parachute that could help it would be so big
that it could not be opened at the speeds involved.

**The answer: engines, early.** Fire the landing engines **forwards into the oncoming supersonic flow**, high up, at Mach 2
to 3, and keep firing to the ground. This is **supersonic retropropulsion**. The jets push out ahead of the vehicle into the
shock layer, which makes the aerodynamics complicated and hard to model.

**Tested at Earth.** Since 2014, SpaceX's Falcon 9 first stages have fired their engines on the way down, at about 35 to 70
km up where Earth's air is about as thin as Mars's, and at supersonic speeds. NASA and SpaceX studied those burns together,
with infrared images from aircraft, as real data for Mars.

**The cost.** Landing on engines costs propellant. The burn must remove the remaining speed **and** hold the lander up
against gravity while it does: the rocket equation with gravity losses. Every kilogram of propellant must have been
carried all the way from Earth, or, for the trip home, made on Mars.

## Worked examples

**1. The crew lander's $\beta$.** $A = \pi \times 5^2 = 78.5$ m²; $\beta = 40{,}000/(1.5 \times 78.5) = 340$ kg/m².
$v_t = \sqrt{2 \times 340 \times 3.71/0.020} = \sqrt{126{,}000} = 355$ m/s.

**2. The burn.** Suppose the engines must remove 700 m/s, and gravity losses add another 200 m/s (lesson in level 8). With
$v_e = 3.7$ km/s: $R = e^{0.9/3.7} = e^{0.243} = 1.28$. For a 40 t lander, $40 - 40/1.28 = 8.7$ t of propellant.

**3. A thrust check.** To slow a 40 t lander at 2 g (about 20 m/s²) on Mars: $T = m(g + a) = 40{,}000 \times (3.71 + 20) =
950$ kN, a few large engines.

## Try it

1. Find $\beta$ for a 10 t lander, 5 m across, $C_d = 1.5$.
2. Find its terminal speed at Mars's ground density. Is it supersonic?
3. Why does $\beta$ grow with size for bodies of the same shape and density?
4. What propellant fraction removes 1 km/s with $v_e = 3.7$ km/s?
5. Why did Falcon 9 re-entry burns help Mars engineers?

??? note "Answers"
    1. $A = 19.6$ m²: $\beta = 10{,}000/(1.5 \times 19.6) = 340$ kg/m².
    2. About 355 m/s, Mach 1.5: yes.
    3. Mass grows as size cubed, area as size squared, so $m/A$ grows with size.
    4. $1 - e^{-1/3.7} = 1 - 0.763 = 24\%$.
    5. They were real flights of rocket engines firing into supersonic, thin air like Mars's, giving data no wind tunnel could.

## Common mistake

**"A big enough parachute solves everything."** For heavy landers the parachute would have to open supersonically, be huge,
and still leave the lander too fast near the ground. Engines are the only known way to land tens of tonnes on Mars.

## Where it leads

- Back: [Entry heating](04-entry-heating.md) · Next: [Flying on Mars](06-flying-on-mars.md)
- [Level 7 page](index.md) · [Rockets and landing topic page](../index.md)
- The propellant: [Gravity losses](../level-8/03-gravity-losses.md) and [Propellant from Mars](../level-8/02-propellant-from-mars.md).
