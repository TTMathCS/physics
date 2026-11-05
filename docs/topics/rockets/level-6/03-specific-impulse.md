---
title: "Specific impulse"
---

# Specific impulse

*Rockets and landing · level 6, lesson 3 of 6*

## A question to start

Engine makers rate their engines in **seconds**. A kerosene engine is "about 300 seconds", a hydrogen engine "about 450
seconds". What can an engine's efficiency have to do with time?

## The idea

**Specific impulse** $I_{sp}$ is the impulse an engine gets from each unit of propellant, measured, by an old
convention, per unit of propellant **weight** on Earth. Since impulse per kilogram is just the exhaust speed,

$$v_e = I_{sp}\, g_0, \qquad g_0 = 9.80665 \text{ m/s}^2.$$

$g_0$ is a fixed standard number, the same everywhere, even for an engine on Mars. The seconds have a picture behind
them: $I_{sp}$ is how long 1 kg of propellant could hold up a thrust equal to the weight of 1 kg on Earth. The longer,
the better the engine.

| Propellant | $I_{sp}$ at sea level | $I_{sp}$ in vacuum | $v_e$ in vacuum |
| --- | --- | --- | --- |
| Solid boosters | about 240 to 270 s | about 270 to 290 s | about 2.7 km/s |
| Kerosene and oxygen | about 280 to 310 s | about 310 to 350 s | about 3.2 km/s |
| Methane and oxygen | about 320 to 330 s | about 360 to 380 s | about 3.7 km/s |
| Hydrogen and oxygen | about 360 to 390 s | about 450 to 465 s | about 4.5 km/s |
| Nuclear thermal (tested, never flown) | | about 850 to 900 s | about 8.5 km/s |
| Ion (electric) | | about 1,500 to 4,000 s | 15 to 40 km/s |

**Why hydrogen?** Exhaust speed is highest when the exhaust is hot and its molecules are light. Burning hydrogen gives
light water molecules (and extra hydrogen); kerosene gives heavier water and carbon dioxide. But liquid hydrogen is
very bulky and must be kept at −253 °C.

**Why methane for Mars?** Methane is a little worse than hydrogen in $I_{sp}$, but it is denser, easier to keep cold, and
can be **made on Mars** from the carbon dioxide in its air and water from its ice (level 8).

**Why vacuum is better.** At sea level, the air pressing on the nozzle's exit pushes back on the exhaust. Vacuum
engines also use bigger nozzles that let the gas expand more and leave faster.

## Worked examples

**1. From seconds to speed.** $I_{sp} = 380$ s: $v_e = 380 \times 9.80665 = 3{,}730$ m/s.

**2. From speed to seconds.** An ion thruster with $v_e = 30$ km/s: $I_{sp} = 30{,}000/9.807 = 3{,}060$ s.

**3. Mass flow.** An engine of $I_{sp} = 350$ s giving 2 MN: $\dot m = T/(I_{sp} g_0) = 2\times10^6/3{,}432 = 583$ kg/s.

## Try it

1. Convert $I_{sp} = 311$ s into an exhaust speed.
2. An engine has $v_e = 4.4$ km/s. Find its $I_{sp}$.
3. Why is $g_0$ used even for an engine firing at Mars?
4. Why do vacuum engines have higher $I_{sp}$ than the same engines at sea level?
5. Give two reasons a Mars mission might choose methane over hydrogen.

??? note "Answers"
    1. $311 \times 9.807 = 3{,}050$ m/s.
    2. $4{,}400/9.807 = 449$ s.
    3. It is only a fixed conversion number, used so that everyone's seconds mean the same thing.
    4. No air pushes back at the nozzle exit, and the bigger vacuum nozzles let the exhaust expand and speed up more.
    5. Methane can be made on Mars, and it is denser and easier to store than liquid hydrogen.

## Common mistake

**Using the local $g$.** $I_{sp}$ always uses the standard $g_0 = 9.80665$ m/s². Using 3.71 for an engine at Mars would
make its seconds 2.6 times bigger without the engine changing at all.

## Where it leads

- Back: [Recoil](02-recoil.md) · Next: [Mass ratio](04-mass-ratio.md)
- [Level 6 page](index.md) · [Rockets and landing topic page](../index.md)
- Making methane on Mars: [Propellant from Mars](../level-8/02-propellant-from-mars.md). Nuclear and ion engines:
  [Nuclear and electric propulsion](../level-8/05-nuclear-and-electric.md).
