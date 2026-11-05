---
title: "Terminal velocity"
---

# Terminal velocity

*Gravity and orbits · level 5, lesson 5 of 6*

## A question to start

A skydiver on Earth falls at about 55 m/s once they stop speeding up. Mars has 38% of the gravity but much thinner air.
Would a skydiver there fall faster or slower, and by how much?

## The idea

Two forces act on a falling body: its weight $mg$ down, and drag up. Drag grows with the square of the speed:

$$F_\text{drag} = \tfrac12 \rho v^2 C_d A,$$

where $\rho$ is the density of the air, $A$ the area facing the flow and $C_d$ a number for the shape (about 1 for a
skydiver spread flat, 0.5 for a ball, about 1.3 for a round parachute). The rockets topic explains where this formula comes from in
[level 7](../../rockets/level-7/01-the-drag-equation.md); here we use it.

At first drag is small and the body speeds up. As $v$ grows, drag catches up. When drag equals weight, the net force is
zero and the speed stops changing:

$$\tfrac12 \rho v_t^2 C_d A = mg \qquad\Rightarrow\qquad v_t = \sqrt{\frac{2mg}{\rho C_d A}}.$$

**Earth and Mars.** Everything else equal, $v_t \propto \sqrt{g/\rho}$.

| | Mars | Earth |
| --- | --- | --- |
| $g$ | 3.71 m/s² | 9.81 m/s² |
| Air density at the ground, $\rho$ | about 0.020 kg/m³ | 1.225 kg/m³ |
| $\sqrt{g/\rho}$ | 13.6 | 2.83 |

So $v_t$ on Mars is about $13.6 / 2.83 = 4.8$ times as big. The skydiver's 55 m/s becomes about **265 m/s**, faster than
the speed of sound in Mars air (about 240 m/s). A parachute that would land you gently at home would still hit the
ground on Mars at the speed of a fast car.

## Worked examples

**1. The skydiver.** Mass 80 kg, $C_d A = 0.43$ m². Earth: $v_t = \sqrt{2 \times 80 \times 9.81 / (1.225 \times 0.43)}
= \sqrt{2980} = 55$ m/s. Mars: $\sqrt{2 \times 80 \times 3.71 / (0.020 \times 0.43)} = \sqrt{69\,000} = 263$ m/s.

**2. A dust grain.** For tiny dust the drag formula changes (the air flows smoothly round it), but the idea holds:
light, small things have tiny terminal speeds, which is why fine dust can stay up in Mars storms for weeks.

**3. Doubling the area.** If a skydiver could double their area, $v_t$ drops by $\sqrt2$: from 55 to 39 m/s.

## Try it

1. Write down the balance of forces at terminal velocity.
2. A 2 kg ball with $C_d A = 0.02$ m² falls through Earth air. Find its terminal velocity.
3. The same ball on Mars?
4. How much bigger must a parachute's area be on Mars than on Earth to land the same load at the same speed?
5. Why does a heavier skydiver fall faster?

??? note "Answers"
    1. $\tfrac12 \rho v_t^2 C_d A = mg$.
    2. $\sqrt{2 \times 2 \times 9.81 / (1.225 \times 0.02)} = \sqrt{1602} = 40$ m/s.
    3. $\sqrt{2 \times 2 \times 3.71 / (0.020 \times 0.02)} = \sqrt{37\,100} = 193$ m/s.
    4. $A \propto g/\rho$ for the same $v_t$: $(3.71/0.020)/(9.81/1.225) = 185.5/8.0 \approx 23$ times the area.
    5. $v_t \propto \sqrt{m}$: more weight needs more drag to balance, which needs more speed.

## Common mistake

**Thinking terminal velocity is only about the air.** Gravity matters too: $v_t$ depends on $g/\rho$. On Mars both
are lower, but $\rho$ is far lower, so the fall is faster.

## Where it leads

- Back: [The Mars jump, worked out](04-the-mars-jump.md) · Next: [Gravity with height](06-gravity-with-height.md)
- [Level 5 page](index.md) · [Gravity and orbits topic page](../index.md)
- Parachutes on Mars: [Parachutes and terminal speed](../../rockets/level-7/03-parachute-terminal-speed.md) and the
  [parachute simulator](../../../sims.md#a-parachute-in-thin-air). Air density from NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
