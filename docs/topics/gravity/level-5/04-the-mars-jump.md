---
title: "The Mars jump, worked out"
---

# The Mars jump, worked out

*Gravity and orbits · level 5, lesson 4 of 6*

## A question to start

Do a standing jump at home and measure how high you rise (mark the wall at your fingertips standing, then jumping).
From that one number, can you work out exactly how high you would go on Mars and how long you would stay up?

## The idea

A jump has two parts: the push and the flight.

**The push** happens while your feet are on the ground. Your legs straighten and you leave the ground at a take-off
speed $v_0$. That speed depends on your legs, so assume it is about the same on Mars. (It would be a little more on
Mars, since your legs push less weight up during the push, so this is a cautious estimate.)

**The flight** is a ball thrown straight up at $v_0$. From $v^2 = 2gs$:

$$v_0 = \sqrt{2 g_E h_E} \qquad\text{and then}\qquad h_M = \frac{v_0^2}{2 g_M} = h_E \cdot \frac{g_E}{g_M} = 2.64\, h_E.$$

Time in the air: up and down, $t = \dfrac{2v_0}{g}$, also 2.64 times longer on Mars.

| A 40 cm jump at home | Mars | Earth | Moon |
| --- | --- | --- | --- |
| Take-off speed | 2.8 m/s | 2.8 m/s | 2.8 m/s |
| Height | 1.06 m | 0.40 m | 2.42 m |
| Time in the air | 1.51 s | 0.57 s | 3.46 s |

**In a suit.** No one will jump on Mars in shorts. A pressure suit and backpack might add as much mass as the person.
The legs then have to push twice the mass up, so the take-off speed drops a lot, and the height with it. Apollo
astronauts on the Moon, in heavy suits, rose only some tens of centimetres. Inside a pressurised habitat, though, you
could jump like the table says.

## Worked examples

**1. From your jump.** You rise 30 cm at home. $v_0 = \sqrt{2 \times 9.81 \times 0.30} = 2.43$ m/s. On Mars:
$h = 2.43^2 / 7.42 = 0.80$ m, and $t = 2 \times 2.43 / 3.71 = 1.31$ s.

**2. Over a wall.** To clear a 1.5 m wall on Mars (raising your centre of mass 1.5 m, which is generous), you need
$v_0 = \sqrt{2 \times 3.71 \times 1.5} = 3.3$ m/s. That would be a 56 cm jump on Earth: hard, but athletes do it.

**3. A long jump.** A long jumper takes off at about 9.5 m/s at about 20°. The projectile formula gives
$R = v^2 \sin 40° / g = 90.25 \times 0.643 / 9.81 = 5.9$ m on Earth and $58.0 / 3.71 = 15.6$ m on Mars. Real jumpers
land about 8 m away on Earth, because their centre of mass starts high and their feet reach far forward at the
landing; those extra metres stay about the same on Mars, so a Mars long jump would be around 18 m.

## Try it

1. You jump 25 cm high on Earth. Find your take-off speed.
2. Find the height and time in the air for that jump on Mars.
3. A basketball player jumps 70 cm. How high on Mars? How long in the air?
4. Why does a suit make the Mars jump much lower?
5. Use the [jump simulator](../../../sims.md#jump-on-mars) to check one of your answers.

??? note "Answers"
    1. $v_0 = \sqrt{2 \times 9.81 \times 0.25} = 2.21$ m/s.
    2. $h = 2.21^2 / 7.42 = 0.66$ m; $t = 2 \times 2.21 / 3.71 = 1.19$ s.
    3. $h = 0.70 \times 2.64 = 1.85$ m; $v_0 = \sqrt{2 \times 9.81 \times 0.7} = 3.71$ m/s, so $t = 2 \times 3.71/3.71 = 2.0$ s.
    4. The legs push the same, but now have far more mass to move, so the take-off speed is much smaller.
    5. Set the slider to your take-off speed; the Mars bar should match your height.

## Common mistake

**Scaling the time by 2.64 squared, or the height by the square root.** Both height and time grow by the same 2.64
here, because the take-off speed stays the same: $h = v_0^2/2g$ and $t = 2v_0/g$ both have $g$ on the bottom once.

## Where it leads

- Back: [Projectiles](03-projectiles.md) · Next: [Terminal velocity](05-terminal-velocity.md)
- [Level 5 page](index.md) · [Gravity and orbits topic page](../index.md)
- The simple version: [Jumping on Mars](../level-1/05-jumping-on-mars.md). The [jump simulator](../../../sims.md#jump-on-mars).
