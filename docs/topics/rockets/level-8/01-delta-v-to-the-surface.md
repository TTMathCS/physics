---
title: "Delta-v to the surface"
---

# Delta-v to the surface

*Rockets and landing · level 8, lesson 1 of 6*

## A question to start

To land 10 t on Mars, how many tonnes must be put into low Earth orbit first? And how much must leave the launch pad?

## The idea

Work **backwards** from the payload, one step at a time. Each step multiplies the mass by a "gear ratio". The steps for
a cargo lander, with typical numbers:

**1. Powered descent.** About 0.9 km/s of engine braking (including gravity losses) with methane-oxygen engines,
$v_e = 3.7$ km/s: $R = e^{0.9/3.7} = 1.28$. The 10 t on the ground (lander, engines, empty tanks and cargo) needs
$10 \times 0.28 = 2.8$ t of propellant. Mass at the start of the burn: 12.8 t.

**2. Entry.** The heat shield and backshell, dropped on the way down: say 20% of the mass that enters. Entry mass:
$12.8/0.8 = 15.9$ t.

**3. The departure burn from low Earth orbit.** 3.6 km/s, $R = e^{3.6/3.7} = 2.65$. A stage with structural fraction 0.1
carrying 15.9 t needs a propellant-plus-structure mass of $15.9 \times (R-1)/(1 - 0.1R) = 15.9 \times 1.65/0.735 = 35.6$ t.

**Total in low Earth orbit: about 51 t** for 10 t landed, about **5 tonnes in orbit per tonne on Mars**.

**4. Getting it to orbit.** A launcher putting 3 to 4% of its launch mass into orbit needs 1,300 to 1,700 t at lift-off
for those 51 t: well over a hundred tonnes at the launch pad for every tonne landed.

| Step | Mass after the step (t) | Gear ratio |
| --- | --- | --- |
| On the surface | 10 | |
| Start of powered descent | 12.8 | 1.28 |
| Entering the air of Mars | 15.9 | 1.25 |
| In low Earth orbit | 51 | 3.2 |
| On the launch pad (about 3.5% to orbit) | about 1,500 | about 29 |

**Ways to do better.** Each ratio can be attacked:

- **Refuelling in Earth orbit.** If the departure stage is filled up in orbit by tanker flights, the 35.6 t of the
  departure stage need not all fly on one launcher.
- **Better $v_e$** at departure (hydrogen, or nuclear thermal engines, lesson 5) cuts the biggest ratio.
- **Aerocapture** (lesson 4) replaces engine burns at Mars with the air.
- **Propellant made on Mars** (lesson 2) means the fuel for the trip home need not be carried from Earth at all.

## Worked examples

**1. With hydrogen for departure.** $v_e = 4.4$ km/s, $R = e^{0.818} = 2.27$, structure 0.12 (hydrogen tanks are bulky):
$15.9 \times 1.27/(1 - 0.272) = 27.7$ t; total in orbit 43.6 t.

**2. Gear ratio of the descent.** If powered descent needed 1.5 km/s instead: $R = e^{0.405} = 1.50$, so 15 t at the start
of the burn, 18.8 t entering, and about 60 t in orbit.

**3. A crewed mission's return.** Bringing 30 t of ascent propellant from Earth instead of making it on Mars, at 5 t in
orbit per tonne landed, adds about 150 t in low Earth orbit.

## Try it

1. Redo step 3 for an entry mass of 30 t.
2. If entry systems were only 15% of the entry mass, what would the entry mass be for step 2?
3. Why is the departure burn the biggest gear ratio?
4. Using the table, about how many tonnes on the launch pad are needed for 1 t on Mars?
5. Explain how making propellant on Mars changes the mass needed in Earth orbit for a crewed trip.

??? note "Answers"
    1. $30 \times 1.65/0.735 = 67.3$ t; total in orbit 97.3 t.
    2. $12.8/0.85 = 15.1$ t.
    3. It is the largest delta-v done by engines (3.6 km/s), and it has to push everything else.
    4. About 150 t.
    5. The ascent propellant, often the largest mass a crewed lander needs, no longer has to be carried from Earth, so its
       multiplied mass (5 t in orbit per tonne) disappears from the budget.

## Common mistake

**Adding masses instead of multiplying ratios.** Each stage must carry everything after it, so the factors multiply. A
small saving late in the chain (on the surface) saves the most at the start.

## Where it leads

- Next: [Propellant from Mars](02-propellant-from-mars.md).
- [Level 8 page](index.md) · [Rockets and landing topic page](../index.md)
- The delta-v side: [Delta-v budgets](../../gravity/level-8/01-delta-v-budgets.md). Stages: [Staging, worked out](../level-6/06-staging.md).
