---
title: "Mass ratio"
---

# Mass ratio

*Rockets and landing · level 6, lesson 4 of 6*

## A question to start

A drinks can is about 95% drink and 5% can by mass. A good rocket stage is about the same: 95% propellant, 5% tanks and
engines. Why do rockets need to be built that thin?

## The idea

The **mass ratio** of a rocket is

$$R = \frac{m_0}{m_1} = \frac{\text{full mass}}{\text{empty mass}},$$

where $m_0$ is the mass with all its propellant and $m_1$ the mass after burning it. The **propellant fraction** is

$$f = \frac{m_0 - m_1}{m_0} = 1 - \frac{1}{R}.$$

| Propellant fraction $f$ | Mass ratio $R$ |
| --- | --- |
| 50% | 2 |
| 67% | 3 |
| 80% | 5 |
| 90% | 10 |
| 95% | 20 |

The empty mass $m_1$ includes everything that is not propellant: tanks, engines, pipes, computers, and the payload. The
mass ratio says how much of the rocket can be "thrown away" as exhaust.

**What limits it.** Tanks must hold the propellant (often under pressure and at very low temperature), and the engines
must push the whole stack. Even the best stages manage about 5% of their full mass in structure. Add a payload, and $R$
falls further. As lesson 5 shows, the speed a rocket can reach grows only as the **logarithm** of $R$, so each extra
km/s needs a much bigger $R$.

## Worked examples

**1. A stage.** Full: 400 t. Empty (with payload): 40 t. $R = 10$, $f = 90\%$.

**2. Adding payload.** The same stage carries an extra 10 t of payload, so full is 410 t and empty is 50 t:
$R = 8.2$. The payload is only 2.4% of the full mass, but it cuts $R$ by almost a fifth.

**3. A Mars ascent rocket.** It needs $R = 3$ (lesson 5). If its tanks and engines are 10% of its full mass and the
crew capsule is $m_p$: $m_1 = 0.1\,m_0 + m_p$ and $m_0/m_1 = 3$, so $m_1 = m_0/3$, $m_p = m_0/3 - 0.1\,m_0 = 0.233\,m_0$.
Nearly a quarter of the rocket can be the crew capsule.

## Try it

1. A rocket is 85% propellant. Find its mass ratio.
2. A stage has $R = 12$. What is its propellant fraction?
3. A rocket of 100 t full has 70 t of propellant. Find $R$ and $f$.
4. Why can't a rocket be 99% propellant?
5. In example 3, what if the tanks and engines were 15% of the full mass?

??? note "Answers"
    1. $R = 1/(1 - 0.85) = 6.7$.
    2. $f = 1 - 1/12 = 91.7\%$.
    3. $R = 100/30 = 3.33$; $f = 70\%$.
    4. The tanks, engines and structure needed to hold and burn the propellant weigh more than 1% of it.
    5. $m_p = m_0/3 - 0.15\,m_0 = 0.183\,m_0$.

## Common mistake

**Leaving the payload out of $m_1$.** The empty mass is everything still there after the burn, payload included.

## Where it leads

- Back: [Specific impulse](03-specific-impulse.md) · Next: [Tsiolkovsky's rocket equation](05-the-rocket-equation.md)
- [Level 6 page](index.md) · [Rockets and landing topic page](../index.md)
