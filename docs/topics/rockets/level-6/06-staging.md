---
title: "Staging, worked out"
---

# Staging, worked out

*Rockets and landing · level 6, lesson 6 of 6*

## A question to start

Lesson 5 showed that reaching Earth orbit needs a mass ratio of nearly 13 with methane engines, and higher with kerosene.
If tanks and engines are 8% of each stage's mass, can one stage do it? How much payload can two stages carry? Three?

## The idea

Take a launcher with kerosene engines, $v_e = 3.3$ km/s (an average over the climb), needing 9.4 km/s. For each stage,
let the **structural fraction** $\varepsilon$ be its tanks and engines divided by its tanks, engines and propellant:
here $\varepsilon = 0.08$.

**One stage.** With no payload at all, the best mass ratio is $1/\varepsilon = 12.5$, giving
$\Delta v = 3.3 \ln 12.5 = 8.33$ km/s. Not enough to reach orbit, even carrying nothing.

**Two stages**, each giving half, 4.7 km/s. Each needs $R = e^{4.7/3.3} = 4.15$. For a stage of propellant-plus-structure
mass $x$ carrying a load $P$ (everything above it):

$$\frac{P + x}{P + \varepsilon x} = R \quad\Rightarrow\quad x = P\,\frac{R-1}{1 - R\varepsilon} = 4.73\,P.$$

So each stage, with its load, is $5.73$ times its load. Two stages: $5.73^2 = 32.8$, so the payload is $1/32.8 =
3.0\%$ of the launch mass.

**Three stages**, 3.13 km/s each: $R = 2.58$, stage factor $3.00$, and the payload is $1/3.00^3 = 3.7\%$.

| Stages ($v_e$ = 3.3 km/s, $\varepsilon$ = 0.08, $\Delta v$ = 9.4 km/s) | Payload, share of launch mass |
| --- | --- |
| 1 | cannot reach orbit |
| 2 | 3.0% |
| 3 | 3.7% |

The big gain is from one to two stages; three gives a little more, with more engines, separations and things to go
wrong. Most launchers have two stages, sometimes with boosters strapped on.

**Better $v_e$ helps everything.** Upper stages often use hydrogen ($v_e$ about 4.4 km/s), where it matters most,
because every kilogram they save is a kilogram the first stage does not have to lift.

**Leaving Mars** needs only 4.1 km/s: a single stage with $\varepsilon = 0.08$ and methane ($R = 3.03$) carries
$x = P \times 2.03/0.758 = 2.68P$, so a payload of $1/3.68 = 27\%$. One stage is plenty.

## Worked examples

**1. A launcher of 500 t, two stages as above.** Payload: $500 \times 0.030 = 15$ t. The second stage with payload:
$500/5.73 = 87$ t; the second stage alone is $87 - 15 = 72$ t.

**2. The Saturn V.** About 2,970 t at launch, three stages, and about 140 t to low Earth orbit (including its third stage,
partly fuelled for the trip to the Moon): about 4.7%, helped by hydrogen in its upper stages.

**3. The Mars ascent vehicle for a crew.** A 30 t crew capsule needs a fuelled single-stage rocket of $30 \times 3.68 =
110$ t, with about 74 t of propellant, which could be made on Mars.

## Try it

1. Repeat the two-stage sum with $\varepsilon = 0.10$. What payload fraction do you get?
2. With $\varepsilon = 0.08$ and $v_e = 3.3$, what is the most $\Delta v$ a single stage can give with no payload?
3. Why does using hydrogen in the upper stage help the whole rocket?
4. Why is one stage enough to leave Mars?

??? note "Answers"
    1. $R = 4.15$: $x = P \times 3.15/(1 - 0.415) = 5.39P$, factor 6.39, payload $1/6.39^2 = 2.4\%$.
    2. $3.3 \ln 12.5 = 8.3$ km/s.
    3. The upper stage needs less propellant for its share, so it is lighter, and the first stage has less to lift.
    4. It needs only 4.1 km/s, a mass ratio of about 3, well within what one stage can reach.

## Common mistake

**Thinking more stages are always better.** The gain shrinks quickly after two, and each stage adds engines, separation
systems and risk. Engineers choose the fewest stages that do the job.

## Where it leads

- Back: [Tsiolkovsky's rocket equation](05-the-rocket-equation.md) · Next level: [Landing on Mars](../level-7/index.md)
- [Level 6 page](index.md) · [Rockets and landing topic page](../index.md)
- The first idea: [Stages](../level-3/05-stages.md). Making the ascent propellant on Mars:
  [Propellant from Mars](../level-8/02-propellant-from-mars.md).
