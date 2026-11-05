---
title: "Escape speed"
---

# Escape speed

*Gravity and orbits · level 7, lesson 2 of 6*

## A question to start

In level 4 you read that escape speed is 11.2 km/s for Earth and 5.0 km/s for Mars. Where do those numbers come from,
and how much more must a ship already in orbit round Mars add to leave it?

## The idea

A ship leaving with speed $v$ from distance $r$ has total energy $\tfrac12 mv^2 - GMm/r$. Coasting, it slows as it climbs,
but its energy stays the same. To reach "infinity" with nothing to spare, it must arrive with zero kinetic energy
where $U$ is also zero: total energy zero. So

$$\tfrac12 m v_\text{esc}^2 = \frac{GMm}{r} \qquad\Rightarrow\qquad v_\text{esc} = \sqrt{\frac{2GM}{r}}.$$

Comparing with $v_\text{circ} = \sqrt{GM/r}$:

$$v_\text{esc} = \sqrt2\, v_\text{circ}.$$

Escaping takes only 41% more speed than orbiting at the same distance.

| | Mars | Earth | Moon | Phobos |
| --- | --- | --- | --- | --- |
| $GM$ (km³/s²) | 42,828 | 398,600 | 4,905 | 0.00071 |
| Radius (km) | 3,389.5 | 6,371 | 1,737 | 11.1 |
| Escape speed from the surface | 5.03 km/s | 11.19 km/s | 2.38 km/s | 11 m/s |
| Low orbit speed | 3.55 km/s | 7.91 km/s | 1.68 km/s | 8 m/s |

(The low-orbit speeds are for an orbit skimming the surface, $r = R$.)

**From orbit.** A ship in a 300 km circle round Mars is already going 3.41 km/s. Escape speed there is
$\sqrt2 \times 3.41 = 4.82$ km/s. So it needs to add only **1.41 km/s**, fired along its direction of motion.

**Leaving with speed to spare.** If a ship leaves faster than escape speed, it keeps some speed when it is far away,
called the **hyperbolic excess speed** $v_\infty$. Energy gives

$$v^2 = v_\text{esc}^2 + v_\infty^2.$$

Lesson 5 uses this for leaving the Earth on the way to Mars.

The direction does not matter for escaping (ignoring air and the ground in the way): energy has no direction. But for
going somewhere particular afterwards, it matters a lot.

## Worked examples

**1. Mars from the surface.** $\sqrt{2 \times 42828 / 3389.5} = \sqrt{25.27} = 5.03$ km/s.

**2. Leaving Earth for Mars.** A ship needs $v_\infty = 2.94$ km/s. From a 300 km orbit ($v_\text{esc} = 10.93$ km/s,
$v_\text{circ} = 7.73$ km/s) it must reach $\sqrt{10.93^2 + 2.94^2} = 11.32$ km/s: a burn of $11.32 - 7.73 = 3.59$ km/s.

**3. A rock knocked off Mars.** Meteorites from Mars have been found on Earth. They were thrown off by big impacts at
more than 5 km/s. Escaping Earth's gravity would take more than twice that, which is one reason we have Mars
meteorites but Mars probably has few from Earth.

## Try it

1. Find the escape speed from the surface of Venus ($GM = 324{,}860$ km³/s², $R = 6{,}052$ km).
2. A ship is in a circle 1,000 km above Mars. How much must it add to escape?
3. Show that $v_\text{esc} = \sqrt2\,v_\text{circ}$.
4. A probe leaves Mars at 6 km/s from the surface. What is its speed when far away?
5. Phobos's escape speed is 11 m/s. Could an astronaut jump off it?

??? note "Answers"
    1. $\sqrt{2 \times 324860 / 6052} = \sqrt{107.4} = 10.4$ km/s.
    2. $v_\text{circ} = 3.12$ km/s; $v_\text{esc} = 4.42$ km/s; add 1.29 km/s.
    3. $\sqrt{2GM/r} = \sqrt2\sqrt{GM/r}$.
    4. $v_\infty = \sqrt{36 - 25.3} = 3.27$ km/s.
    5. A standing jump on Earth leaves at about 2.5 to 3 m/s, so not from a standing jump; a running jump at 11 m/s
       would be beyond an athlete. But a hard throw of a ball (25 m/s) would leave Phobos.

## Common mistake

**Thinking escape needs the speed all the way.** Escape speed is the speed at the start, for a ship coasting with no
more push. A rocket that keeps firing can leave slowly; it just uses more fuel.

## Where it leads

- Back: [Gravitational energy](01-gravitational-energy.md) · Next: [Ellipses](03-ellipses.md)
- [Level 7 page](index.md) · [Gravity and orbits topic page](../index.md)
- What a rocket needs to reach these speeds: [The rocket equation](../../rockets/level-6/05-the-rocket-equation.md).
