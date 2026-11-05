---
title: "Tsiolkovsky's rocket equation"
---

# Tsiolkovsky's rocket equation

*Rockets and landing · level 6, lesson 5 of 6*

## A question to start

A rocket leaving the surface of Mars must gain about 4.1 km/s to reach orbit. Its methane engine has an exhaust speed of
3.7 km/s. What fraction of the rocket must be propellant? And what about leaving Earth?

## The idea

**Derivation.** In space, far from any planet, a rocket of mass $m$ moving at $v$ throws out a small mass $dm$ of exhaust
at speed $v_e$ backwards, relative to itself. In the frame moving with the rocket at that instant, momentum before is 0;
after, the rocket of mass $m - dm$ moves at $dv$ and the exhaust at $-v_e$:

$$0 = (m - dm)\,dv - dm\,v_e \quad\Rightarrow\quad m\,dv = v_e\,dm$$

(dropping the tiny $dm\,dv$). Here $dm$ is the mass thrown out, so the rocket's mass falls by $dm$. Writing the change
in the rocket's mass as $dM = -dm$: $dv = -v_e\,dM/M$. Integrate from the full mass $m_0$ to the empty mass $m_1$:

$$\Delta v = v_e \ln\frac{m_0}{m_1}.$$

This is **Tsiolkovsky's rocket equation**, published by Konstantin Tsiolkovsky in 1903. It says:

- The speed gained depends only on the exhaust speed and the mass ratio, not on how fast the propellant is burned.
- It grows only as the **logarithm** of the mass ratio. Doubling $R$ adds a fixed $v_e \ln 2 = 0.69\,v_e$.
- Turned round, $m_0/m_1 = e^{\Delta v / v_e}$: the mass ratio grows **exponentially** with the speed needed.

| $\Delta v$ needed ($v_e$ = 3.7 km/s) | Mass ratio $e^{\Delta v/v_e}$ | Propellant fraction |
| --- | --- | --- |
| 2.0 km/s | 1.72 | 42% |
| 3.7 km/s | 2.72 | 63% |
| 4.1 km/s (Mars surface to orbit) | 3.03 | 67% |
| 7.4 km/s | 7.39 | 86% |
| 9.4 km/s (Earth surface to orbit) | 12.7 | 92% |
| 11.1 km/s | 20.1 | 95% |

**The answer to the question.** From Mars: a mass ratio of about 3, two thirds propellant. From Earth with the same
engines: about 12.7, so 92% propellant, which leaves almost nothing for tanks, engines and payload in one stage. That is
the "tyranny of the rocket equation", and why Earth launchers are staged (lesson 6) while a single stage can get off
Mars.

**With gravity.** Near a planet, the rocket also fights gravity while it burns. The 9.4 and 4.1 km/s above already
include those **gravity losses** (and drag). Level 8 shows how to estimate them.

## Worked examples

**1. Mars ascent.** $R = e^{4.1/3.7} = e^{1.108} = 3.03$. A 30 t rocket (fuelled) ends at 9.9 t.

**2. A lander's last burn.** A lander must remove 600 m/s with engines of $v_e = 2{,}200$ m/s. $R = e^{0.273} = 1.31$:
24% of its mass at the start of the burn is propellant.

**3. Leaving Earth orbit for Mars.** 3.6 km/s with hydrogen engines ($v_e = 4.4$ km/s): $R = e^{0.818} = 2.27$. With
methane ($3.7$): $R = e^{0.973} = 2.65$.

## Try it

1. A rocket with $v_e = 3$ km/s has $R = 5$. Find $\Delta v$.
2. What mass ratio gives $\Delta v = 6$ km/s with $v_e = 4.5$ km/s?
3. Use the [rocket equation simulator](../../../sims.md#the-rocket-equation): with $v_e$ = 3.7 km/s and an empty mass of
   100 t, how much propellant reaches 4.1 km/s?
4. Why does doubling the mass ratio not double $\Delta v$?
5. Show that a rocket can go faster than its own exhaust speed. What mass ratio does it need to reach $2v_e$?

??? note "Answers"
    1. $3 \ln 5 = 3 \times 1.609 = 4.83$ km/s.
    2. $e^{6/4.5} = e^{1.333} = 3.79$.
    3. $R = 3.03$, so $m_0 = 303$ t: about 203 t of propellant.
    4. $\Delta v$ grows with $\ln R$, and $\ln 2R = \ln R + \ln 2$: it only adds $0.69\,v_e$.
    5. $\Delta v > v_e$ when $R > e = 2.72$. For $2v_e$, $R = e^2 = 7.39$.

## Common mistake

**Using common logarithms.** The equation uses the natural logarithm, $\ln$. Using $\log_{10}$ gives answers 2.3 times too
small.

## Where it leads

- Back: [Mass ratio](04-mass-ratio.md) · Next: [Staging, worked out](06-staging.md)
- [Level 6 page](index.md) · [Rockets and landing topic page](../index.md)
- Natural logarithms on the math site: [Algebra, level 8](https://math.akadian.ca/topics/algebra/level-8/04-logarithms.html).
  The whole trip's budget: [Delta-v budgets](../../gravity/level-8/01-delta-v-budgets.md).
