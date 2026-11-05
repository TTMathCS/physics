---
title: "Vis-viva"
---

# Vis-viva

*Gravity and orbits · level 7, lesson 4 of 6*

## A question to start

A ship is on an ellipse round the Sun, from Earth's orbit out to Mars's. How fast is it going at each end? You know
the shape of the orbit, but not yet a formula for the speed at a given point.

## The idea

For a circle, the total energy is $E = -GMm/2r$ (lesson 1). For an ellipse, the same holds with $r$ replaced by the
semi-major axis $a$:

$$E = -\frac{GMm}{2a}.$$

(You can check it at the two ends with $r_p v_p = r_a v_a$ and energy conservation; worked example 3 does this.)

Energy is the same everywhere on the orbit, so at any distance $r$:

$$\tfrac12 mv^2 - \frac{GMm}{r} = -\frac{GMm}{2a} \qquad\Rightarrow\qquad v^2 = GM\left(\frac2r - \frac1a\right).$$

This is the **vis-viva equation** ("living force", an old name for kinetic energy). It is the most used equation in
mission design. Special cases:

- **Circle** ($r = a$): $v^2 = GM/r$. ✓
- **Escape** ($a \to \infty$): $v^2 = 2GM/r$. ✓
- **The orbit's size depends only on the speed at a given $r$**, not on the direction. Direction sets the shape ($e$).

## Worked examples

**1. Mars at perihelion.** $GM_\odot = 1.32712 \times 10^{11}$ km³/s², $r_p = 2.0665\times10^8$ km,
$a = 2.2794\times10^8$ km:

$v^2 = 1.32712\times10^{11} \times (9.678 - 4.387)\times10^{-9} = 702.2$, so $v = 26.50$ km/s. ✓

**2. The transfer ellipse.** From Earth's orbit (1 AU) to Mars's (1.524 AU), $a = 1.262$ AU $= 1.8877\times10^8$ km.
At 1 AU ($1.496\times10^8$ km):

$v^2 = 1.32712\times10^{11} \times (13.369 - 5.297)\times10^{-9} = 1071.3$, so $v = 32.73$ km/s.

At 1.524 AU ($2.2794\times10^8$ km): $v^2 = 1.32712\times10^{11} \times (8.774 - 5.297)\times10^{-9} = 461.4$, so
$v = 21.48$ km/s.

**3. Checking with angular momentum.** $r_p v_p = 1.496 \times 32.73 = 48.97$ and $r_a v_a = 2.2794 \times 21.48 = 48.96$
(in $10^8$ km·km/s). ✓

## Try it

1. Find the speed of Mars at aphelion ($r_a = 2.4926\times10^8$ km).
2. A ship round Mars is on an ellipse with periapsis 3,690 km and apoapsis 20,430 km from the centre. Find its speed
   at each end ($GM = 42{,}828$ km³/s²).
3. Show that vis-viva gives escape speed when $a$ is very large.
4. A satellite in a circle round Mars at $r$ fires its engine forward, briefly, to speed up. Is $a$ now bigger or
   smaller? Where on the new orbit is the satellite?
5. Using vis-viva, a probe at 1 AU going 35 km/s round the Sun: is it bound to the Sun?

??? note "Answers"
    1. $v^2 = 1.32712\times10^{11} \times (8.024 - 4.387)\times10^{-9} = 482.7$, so $v = 21.97$ km/s.
    2. $a = 12{,}060$ km. Periapsis: $v^2 = 42828 \times (2/3690 - 1/12060) = 42828 \times (5.420 - 0.829)\times10^{-4}
       = 19.66$, $v = 4.43$ km/s. Apoapsis: $v^2 = 42828 \times (0.979 - 0.829)\times10^{-4} = 0.642$, $v = 0.80$ km/s.
    3. $1/a \to 0$, so $v^2 \to 2GM/r$.
    4. Bigger, since a larger $v$ at the same $r$ means a larger $a$. It is now at the periapsis (lowest point) of the
       new ellipse.
    5. Escape speed from the Sun at 1 AU is $\sqrt2 \times 29.78 = 42.1$ km/s; 35 km/s is less, so it is bound.

## Common mistake

**Using $r$ for both terms.** In $v^2 = GM(2/r - 1/a)$, $r$ is where the ship is now and $a$ is the size of the
whole orbit. They are the same only for a circle.

## Where it leads

- Back: [Ellipses](03-ellipses.md) · Next: [Hohmann transfer](05-hohmann-transfer.md)
- [Level 7 page](index.md) · [Gravity and orbits topic page](../index.md)
