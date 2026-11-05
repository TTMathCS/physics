---
title: "Flying on Mars"
---

# Flying on Mars

*Rockets and landing · level 7, lesson 6 of 6*

## A question to start

On 19 April 2021, a 1.8 kg helicopter called Ingenuity rose 3 m above Jezero crater, hovered for about 40 seconds and
landed: the first powered, controlled flight on another planet. In air only a sixtieth as dense as ours, how?

## The idea

**Lift.** A wing or rotor blade gets lift from the air it turns downwards. Lift has the same form as drag:

$$L = \tfrac12 \rho v^2 C_L A,$$

with $C_L$ the lift coefficient (up to about 1 to 1.5 for a good blade) and $v$ the speed of the blade through the air.
With $\rho$ sixty times smaller, a blade must move much faster, or be much bigger, or both. Ingenuity did all three:

| | Ingenuity on Mars | A typical helicopter on Earth |
| --- | --- | --- |
| Mass | 1.8 kg | thousands of kg |
| Rotors | two, counter-rotating, 1.2 m across | one, about 10 to 15 m |
| Rotor speed | about 2,400 to 2,700 rpm | about 300 to 500 rpm |
| Blade tip speed | about 160 m/s, Mach 0.7 in Mars air | about 200 m/s, Mach 0.6 |
| Weight it lifts, per kg of mass | 3.71 N | 9.81 N |

The weaker gravity helps: each kilogram weighs only 3.71 N. The thin air hurts much more.

**Power to hover.** A rotor holds itself up by pushing air down. By momentum (actuator disc theory), the least power needed
to hover with thrust $T$ through a disc of area $A$ is

$$P = \sqrt{\frac{T^3}{2\rho A}}.$$

For Ingenuity: $T = 1.8 \times 3.71 = 6.7$ N, $A = \pi \times 0.6^2 = 1.13$ m², $\rho \approx 0.017$ kg/m³:
$P = \sqrt{6.7^3/(2 \times 0.017 \times 1.13)} = 88$ W at least. Real rotors waste a good deal, and Ingenuity drew about
350 W in flight. On Earth, the same machine would need only about 45 W in theory, despite weighing 2.6 times as much:
the air matters more than the gravity.

**What it did.** Planned for 5 test flights in 30 sols, Ingenuity flew **72 times** over nearly three years, scouting ahead
of Perseverance, before a damaged blade ended its flying in January 2024. It covered about 17 km in about two hours in
the air.

## Worked examples

**1. Tip speed.** At 2,537 rpm, a 0.6 m blade tip moves $2\pi \times 0.6 \times 2537/60 = 159$ m/s, Mach $159/240 = 0.66$.
Faster would approach the speed of sound, where blades lose lift and shake.

**2. Hover power on Earth.** $T = 17.7$ N, $\rho = 1.225$: $P = \sqrt{17.7^3/(2 \times 1.225 \times 1.13)} = 45$ W.

**3. Lift needed.** Hovering, $L = T = 6.7$ N from two rotors: each must give 3.3 N.

## Try it

1. Show that the hover power scales as $1/\sqrt\rho$ for the same thrust and rotor.
2. A 5 kg helicopter for Mars with rotors 2 m across: find the least hover power ($\rho = 0.017$).
3. Why can't Ingenuity's blades just spin twice as fast?
4. Why did Ingenuity need about four times the theoretical minimum power?
5. Ingenuity weighed 2.6 times less on Mars than on Earth. Why did it still need more power to hover there?

??? note "Answers"
    1. $P = \sqrt{T^3/(2\rho A)} \propto \rho^{-1/2}$.
    2. $T = 18.6$ N, $A = 3.14$ m²: $P = \sqrt{6{,}430/0.107} = 245$ W.
    3. The tips would go supersonic, where lift falls and drag and vibration rise sharply.
    4. Real blades have drag, the airflow is not perfectly even, and power is lost in motors and gears.
    5. Power goes as $\sqrt{T^3/\rho}$: thrust down by 2.6 cuts $T^{3/2}$ by 4.3, but $\rho$ down by 70 raises $1/\sqrt\rho$
       by 8.4, so the power roughly doubles.

## Common mistake

**"Lower gravity makes flying on Mars easy."** It helps, but the thin air hurts more. Flying on Mars is harder than on Earth;
that is why it took until 2021.

## Where it leads

- Back: [Supersonic retropropulsion](05-supersonic-retropropulsion.md) · Next level: [Mission design](../level-8/index.md)
- [Level 7 page](index.md) · [Rockets and landing topic page](../index.md)
- Lift and wings in detail: the [Air and fluids](../../air/index.md) topic. Flight facts:
  [NASA, Ingenuity Mars Helicopter](https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/).
