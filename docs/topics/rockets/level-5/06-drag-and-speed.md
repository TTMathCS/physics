---
title: "Drag and speed"
---

# Drag and speed

*Rockets and landing · level 5, lesson 6 of 6*

## A question to start

In level 3 you saw that drag on a rocket is greatest at "max Q", about a minute after launch. What is Q, and how big
does it get?

## The idea

The drag force on a body moving through air is

$$F_D = \tfrac12 \rho v^2 C_d A,$$

with $\rho$ the air's density (kg/m³), $v$ the speed, $A$ the area facing the flow, and $C_d$ the **drag coefficient**,
a number that depends on the shape (level 7 shows where the formula comes from).

The part $q = \tfrac12 \rho v^2$ is called the **dynamic pressure**. It has units of pressure (pascals): it is the push of
the oncoming air per square metre, before the shape is taken into account. So $F_D = q\,C_d A$.

For a rocket climbing out of the Earth's air, $v$ grows fast while $\rho$ falls fast. Their product has a peak: **max Q**.

| Time after launch (a typical rocket) | Height | $\rho$ (kg/m³) | Speed | $q$ |
| --- | --- | --- | --- | --- |
| 30 s | 3 km | 0.91 | 150 m/s | 10 kPa |
| 60 s | 11 km | 0.36 | 400 m/s | 29 kPa |
| 90 s | 25 km | 0.040 | 900 m/s | 16 kPa |
| 150 s | 60 km | 0.0003 | 2,000 m/s | 0.6 kPa |

Max Q is around 30 to 35 kPa for most big rockets: about a third of the pressure of the air around you, pushing on the
nose of the rocket. Rockets often throttle down through max Q to keep the stress within the limits of the structure.

**Leaving Mars.** At Mars's surface $\rho$ is about 0.020 kg/m³, fifty to sixty times less than at Earth's. A rocket
leaving Mars reaches max Q at only about 1 to 2 kPa. Drag hardly matters on the way up from Mars.

## Worked examples

**1. Max Q.** At 11 km and 400 m/s: $q = 0.5 \times 0.36 \times 400^2 = 28{,}800$ Pa, about 29 kPa.

**2. Drag force at max Q.** A rocket 3.7 m across ($A = 10.8$ m²) with $C_d = 0.5$: $F_D = 28{,}800 \times 0.5 \times 10.8
= 155{,}000$ N, about 155 kN. Compare with its thrust, several thousand kN: drag is a few per cent.

**3. A rocket leaving Mars.** At 2 km up, $\rho \approx 0.017$ kg/m³, at 300 m/s: $q = 0.5 \times 0.017 \times 90{,}000 =
765$ Pa.

## Try it

1. Find $q$ for a car at 30 m/s at sea level ($\rho = 1.225$).
2. Find the drag on a car with $C_d A = 0.7$ m² at that speed.
3. At what speed would a body in Mars's ground-level air ($\rho = 0.020$) feel the same $q$ as the car?
4. Why does max Q happen, rather than drag just growing as the rocket gets faster?
5. Would a rocket leaving Mars need to throttle down for max Q? Why?

??? note "Answers"
    1. $0.5 \times 1.225 \times 900 = 551$ Pa.
    2. $551 \times 0.7 = 386$ N.
    3. $v = \sqrt{2 \times 551 / 0.020} = 235$ m/s.
    4. As it climbs, the air thins much faster than $v^2$ grows, so $q$ rises then falls.
    5. Very unlikely: Mars's air is so thin that $q$ stays a few per cent of Earth's max Q.

## Common mistake

**Thinking drag grows in proportion to speed.** It grows with the **square** of the speed: twice as fast, four times the
drag (in air of the same density).

## Where it leads

- Back: [Exhaust speed](05-exhaust-speed.md) · Next level: [The rocket equation](../level-6/index.md)
- [Level 5 page](index.md) · [Rockets and landing topic page](../index.md)
- The formula from first principles: [The drag equation](../level-7/01-the-drag-equation.md). Falling with drag:
  [Terminal velocity](../../gravity/level-5/05-terminal-velocity.md).
