---
title: "Exhaust speed"
---

# Exhaust speed

*Rockets and landing · level 5, lesson 5 of 6*

## A question to start

One engine burns 300 kg of propellant a second and gives 850 kN of thrust. Another burns only 25 kg a second and gives
110 kN. Which is the better engine for getting to Mars?

## The idea

Each second, an engine throws out a mass $\dot m$ (said "m-dot", the **mass flow rate**, in kg/s) at the **exhaust speed**
$v_e$ relative to the rocket. The momentum it gives the exhaust each second is $\dot m v_e$, and by Newton's second and
third laws, that is the thrust:

$$T = \dot m\, v_e.$$

(There is a small extra term from the pressure of the exhaust at the nozzle's exit, which this lesson leaves out. It is
why engines give more thrust in a vacuum than at sea level.)

So thrust can come from **a lot of mass thrown slowly** or **a little mass thrown fast**. For lifting off the ground,
you need a big thrust, so a big flow. But for going far on a fixed load of propellant, what matters is $v_e$: each
kilogram of propellant gives more push for longer when it is thrown faster.

| Engine | Thrust | Mass flow | Exhaust speed $v_e = T/\dot m$ |
| --- | --- | --- | --- |
| Merlin 1D, sea level (kerosene and oxygen) | about 845 kN | about 300 kg/s | about 2.8 km/s |
| F-1, Saturn V first stage, sea level | about 6,770 kN | about 2,580 kg/s | about 2.6 km/s |
| RL10 (hydrogen and oxygen, in vacuum) | about 110 kN | about 24 kg/s | about 4.5 km/s |
| Ion thruster (Dawn spacecraft) | 0.09 N | about 3 mg/s | about 30 km/s |

The RL10 burns a twelfth of the Merlin's flow, but each kilogram does 60% more work. The ion thruster's push is about
the weight of a sheet of paper, but its exhaust is ten times faster again: tiny thrust, enormous efficiency.

**The best engine for Mars?** For leaving Earth's surface, a high-thrust engine. For the trip, the higher the $v_e$, the
less propellant is needed. Level 6 makes this exact with the rocket equation.

## Worked examples

**1. The engines in the question.** First: $v_e = 850{,}000/300 = 2{,}830$ m/s. Second: $110{,}000/25 = 4{,}400$ m/s.
The second is better for the trip; the first for lift-off.

**2. Propellant for a minute.** An RL10 firing for 60 s uses $24 \times 60 = 1{,}440$ kg.

**3. A Mars lander's engines.** To hover, a 1,000 kg lander needs 3,710 N. With $v_e = 2{,}200$ m/s (a simple hydrazine
engine), $\dot m = 3710/2200 = 1.7$ kg/s.

## Try it

1. An engine gives 200 kN with a mass flow of 70 kg/s. Find $v_e$.
2. What mass flow gives 1,000 kN at $v_e = 3{,}300$ m/s?
3. How much propellant does the lander in example 3 use if it hovers for 20 s?
4. Why do engines give more thrust in a vacuum than at sea level?
5. Why can't an ion thruster launch a rocket from Earth?

??? note "Answers"
    1. $200{,}000/70 = 2{,}860$ m/s.
    2. $\dot m = 1{,}000{,}000/3300 = 303$ kg/s.
    3. $1.7 \times 20 = 34$ kg.
    4. The air outside presses back on the exhaust at the nozzle's exit; with no air, there is nothing pushing back.
    5. Its thrust is tiny, far less than its own weight: TWR is about $10^{-5}$.

## Common mistake

**Judging an engine by thrust alone.** Thrust says how hard it pushes now; exhaust speed says how much push you get from
each kilogram of propellant. For long trips, exhaust speed matters more.

## Where it leads

- Back: [Impulse](04-impulse.md) · Next: [Drag and speed](06-drag-and-speed.md)
- [Level 5 page](index.md) · [Rockets and landing topic page](../index.md)
- Exhaust speed measured in seconds: [Specific impulse](../level-6/03-specific-impulse.md). Ion engines:
  [Nuclear and electric propulsion](../level-8/05-nuclear-and-electric.md).
