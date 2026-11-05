---
title: "Gravity with height"
---

# Gravity with height

*Gravity and orbits · level 5, lesson 6 of 6*

## A question to start

Olympus Mons on Mars rises about 22 km above the plains around it. At the top, is gravity noticeably weaker? And
how weak is it out at the space station, or up at the orbit of Phobos?

## The idea

From the inverse square rule ([level 4](../level-4/02-weaker-with-distance.md)), at a height $h$ above a planet of
radius $R$ and surface gravity $g_0$:

$$g(h) = g_0 \left(\frac{R}{R+h}\right)^2.$$

**Small heights.** When $h$ is much smaller than $R$, there is a short form. Write $\left(\frac{R}{R+h}\right)^2 =
\left(1 + \frac hR\right)^{-2}$. For a small number $x$, $(1+x)^{-2} \approx 1 - 2x$. So

$$g(h) \approx g_0\left(1 - \frac{2h}{R}\right).$$

Gravity drops by about **twice the fraction of the radius you climb**.

| Place | Height | $R + h$ | $g$ | Share of the surface value |
| --- | --- | --- | --- | --- |
| Top of Olympus Mons | 22 km | 3,412 km | 3.66 m/s² | 98.7% |
| Low Mars orbit | 300 km | 3,690 km | 3.13 m/s² | 84% |
| Orbit of Phobos | 5,986 km | 9,376 km | 0.48 m/s² | 13% |
| Areostationary orbit | 17,000 km | 20,430 km | 0.10 m/s² | 2.8% |
| Space station (Earth) | 400 km | 6,771 km | 8.69 m/s² | 89% |

(Mars: $R$ = 3,389.5 km, $g_0$ = 3.71 m/s². Earth: $R$ = 6,371 km, $g_0$ = 9.81 m/s².)

So on Olympus Mons, the tallest volcano in the solar system, you would weigh about 1.3% less, too little to feel.
Gravity on Mars also varies a little from place to place, because the planet is not a perfect ball and its rock is
not the same everywhere; orbiters map those changes to see what lies underground.

## Worked examples

**1. Olympus Mons, the short way.** $2h/R = 2 \times 22 / 3389.5 = 0.013$, so $g \approx 3.71 \times 0.987 = 3.66$ m/s². ✓

**2. Low Mars orbit, the long way.** $(3389.5/3689.5)^2 = 0.9187^2 = 0.844$, so $g = 3.71 \times 0.844 = 3.13$ m/s². The
short form would give $1 - 2 \times 300/3389.5 = 0.823$: close, but the error grows as $h$ grows.

**3. Where is $g$ half?** $(R/(R+h))^2 = 0.5$ means $R + h = R\sqrt2$, so $h = 0.414R$: about 1,400 km above Mars.

## Try it

1. Find $g$ 1,000 km above Mars.
2. Use the short form to estimate how much less you would weigh on Mount Everest (8.8 km) than at sea level.
3. At what height above the Earth is $g$ a quarter of its surface value?
4. Why does the short form fail for the orbit of Phobos?

??? note "Answers"
    1. $(3389.5/4389.5)^2 = 0.596$, so $g = 2.21$ m/s².
    2. $2 \times 8.8 / 6371 = 0.0028$: about 0.28% less.
    3. $R + h = 2R$, so $h = R = 6{,}371$ km.
    4. There $h$ is bigger than $R$, so $h/R$ is not small and $(1+x)^{-2} \approx 1 - 2x$ is a poor guess.

## Common mistake

**Measuring from the surface.** In $g_0 (R/(R+h))^2$, the distance on the bottom is from the planet's **middle**. Using
$h$ alone gives nonsense (at $h = 0$ it would divide by zero).

## Where it leads

- Back: [Terminal velocity](05-terminal-velocity.md) · Next level: [Newton's law of gravity](../level-6/index.md)
- [Level 5 page](index.md) · [Gravity and orbits topic page](../index.md)
- The approximation $(1+x)^n \approx 1 + nx$ on the math site: [Algebra](https://math.akadian.ca/topics/algebra/index.html).
