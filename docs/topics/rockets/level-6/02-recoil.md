---
title: "Recoil"
---

# Recoil

*Rockets and landing · level 6, lesson 2 of 6*

## A question to start

You sit on a 10 kg trolley, with a total mass of 60 kg, holding ten 1 kg bricks. You throw them backwards, one at a time,
each at 10 m/s relative to you. Does each brick give you the same boost?

## The idea

**One throw.** Throwing a mass $\Delta m$ backwards at speed $v_e$ relative to you, from a total mass $M$ at rest:
$0 = \Delta m(-v_e) + (M - \Delta m)\Delta v$, so

$$\Delta v = \frac{\Delta m}{M - \Delta m}\,v_e.$$

The heavier you are, the less each throw gains.

**Many throws.** With the trolley (and you) starting at 70 kg including the bricks:

| Throw | Mass before the throw | Speed gained | Total speed |
| --- | --- | --- | --- |
| 1 | 70 kg | $10/69 = 0.145$ m/s | 0.145 m/s |
| 2 | 69 kg | $10/68 = 0.147$ m/s | 0.292 m/s |
| 5 | 66 kg | $10/65 = 0.154$ m/s | 0.746 m/s |
| 10 | 61 kg | $10/60 = 0.167$ m/s | 1.54 m/s |

Each throw gains a little **more** than the last, because there is less mass left to push. The total, 1.54 m/s, is the
sum $10\left(\frac1{69} + \frac1{68} + \dots + \frac1{60}\right)$.

**Throwing in smaller and smaller pieces**, the sum turns into the rocket equation (lesson 5):

$$\Delta v = v_e \ln\frac{70}{60} = 10 \times 0.154 = 1.54 \text{ m/s}.$$

The answer hardly depends on how the bricks are split up, only on the starting and ending masses and the throwing speed.

**Why it matters.** A rocket is the trolley with millions of tiny "bricks" of exhaust. To gain more speed, it can throw
faster (bigger $v_e$) or carry more to throw (bigger $m_0/m_1$). The second option has a nasty catch: the first bricks
thrown have to push all the others along.

## Worked examples

**1. One big throw.** All ten bricks at once at 10 m/s: $\Delta v = 10 \times 10/60 = 1.67$ m/s. A bit more than throwing
them one by one: in one throw, each brick leaves at 10 m/s relative to the trolley **at rest**; thrown one by one, later
bricks leave at 10 m/s relative to a trolley already moving, so they move backwards more slowly relative to the ground
and carry away less momentum. (Rockets cannot throw all their propellant at once, so the rocket equation is the
right model.)

**2. A gun's recoil.** A 4 kg rifle fires a 0.01 kg bullet at 900 m/s: $\Delta v = 0.01 \times 900/4 = 2.25$ m/s backwards.

**3. Astronaut and tool.** A 120 kg astronaut in a suit throws a 2 kg tool at 5 m/s: $\Delta v = 2 \times 5/118 = 0.085$
m/s. They drift away from the station at 8.5 cm/s.

## Try it

1. A 50 kg skateboarder holds a 5 kg ball and throws it at 8 m/s relative to themselves. Find their recoil speed.
2. In the trolley table, find the speed gained on the 6th throw.
3. Use $v_e \ln(m_0/m_1)$ to find the final speed if the trolley carried 20 bricks (80 kg at the start).
4. Why does each throw give a slightly bigger boost than the last?
5. A cannon of 1,500 kg fires a 10 kg ball at 400 m/s. Find its recoil speed.

??? note "Answers"
    1. $5 \times 8 / 50 = 0.8$ m/s.
    2. Mass before: 65 kg; $10/64 = 0.156$ m/s.
    3. $10 \ln(80/60) = 10 \times 0.288 = 2.88$ m/s.
    4. There is less mass left to push, so the same throw gives a bigger change of speed.
    5. $10 \times 400/1500 = 2.67$ m/s.

## Common mistake

**Using the starting mass for every throw.** The mass falls with each throw. Treating it as fixed gives
$10 \times 10/70 = 1.43$ m/s, too small.

## Where it leads

- Back: [Conservation of momentum](01-conservation-of-momentum.md) · Next: [Specific impulse](03-specific-impulse.md)
- [Level 6 page](index.md) · [Rockets and landing topic page](../index.md)
- The first idea, without numbers: [The skateboard and the ball](../level-2/02-skateboard-and-ball.md).
