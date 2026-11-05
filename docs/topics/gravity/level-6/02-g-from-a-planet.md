---
title: "g from a planet's size and mass"
---

# g from a planet's size and mass

*Gravity and orbits · level 6, lesson 2 of 6*

## A question to start

Mars has about a tenth of the Earth's mass. So why is its gravity not a tenth of ours, but 38%?

## The idea

On the surface of a planet of mass $M$ and radius $R$, the pull on a mass $m$ is $GMm/R^2$. That pull is the weight
$mg$. So

$$mg = \frac{GMm}{R^2} \qquad\Rightarrow\qquad g = \frac{GM}{R^2}.$$

The $m$ cancels: every mass falls with the same $g$ (level 1's heavy and light balls, now proved).

**Mars.** $GM = 4.2828 \times 10^{13}$ m³/s² (measured from spacecraft orbits, more precisely than $G$ or $M$ alone).
With the mean radius 3,389.5 km:

$$g = \frac{4.2828\times10^{13}}{(3.3895\times10^6)^2} = \frac{4.2828\times10^{13}}{1.1489\times10^{13}} = 3.73\ \text{m/s}^2.$$

At the equator, where the radius is 3,396.2 km, it is 3.71 m/s², the figure NASA gives. (The spin of Mars takes off
another 0.017 m/s² there, which a scale would also feel.)

**Comparing by ratios.** For Mars against Earth,

$$\frac{g_M}{g_E} = \frac{M_M/M_E}{(R_M/R_E)^2} = \frac{0.107}{0.532^2} = \frac{0.107}{0.283} = 0.38.$$

So a tenth of the mass, but standing about half as far from the middle, which on its own would make gravity four times
stronger. A tenth times about three and a half gives 0.38.

**With density.** Write $M = \tfrac43\pi R^3 \rho$, where $\rho$ is the mean density. Then $g = \tfrac43 \pi G \rho R$:
gravity grows with size and with density. Mars's rock is less dense (3,930 kg/m³ against 5,510 for Earth), partly because
its iron core is smaller.

| | Mars | Earth |
| --- | --- | --- |
| Mass | $6.42 \times 10^{23}$ kg | $5.97 \times 10^{24}$ kg |
| Mean radius | 3,389.5 km | 6,371 km |
| $GM$ | 42,828 km³/s² | 398,600 km³/s² |
| Mean density | 3,930 kg/m³ | 5,510 kg/m³ |
| Surface gravity $g$ | 3.71 m/s² | 9.81 m/s² |

## Worked examples

**1. The Moon.** $GM = 4.905 \times 10^{12}$ m³/s², $R = 1{,}737$ km. $g = 4.905\times10^{12} / (1.737\times10^6)^2 =
1.63$ m/s². ✓

**2. Phobos.** $GM \approx 7.1 \times 10^5$ m³/s², mean radius about 11.1 km. $g = 7.1\times10^5 / (1.11\times10^4)^2
\approx 0.0058$ m/s², about 1/1700 of Earth's.

**3. A planet twice as big, same rock.** $g \propto \rho R$, so its gravity would be twice as strong.

## Try it

1. Venus has $GM = 3.249 \times 10^{14}$ m³/s² and $R = 6{,}052$ km. Find $g$ on Venus.
2. A planet has the Earth's mass but twice its radius. What is its $g$?
3. Show that $g = \tfrac43\pi G\rho R$.
4. Use the formula in question 3 to find $g$ for Mars from its density and radius.
5. Why does $m$ cancel, and what does that mean?

??? note "Answers"
    1. $3.249\times10^{14} / (6.052\times10^6)^2 = 3.249\times10^{14} / 3.663\times10^{13} = 8.87$ m/s².
    2. $9.81 / 4 = 2.45$ m/s².
    3. $g = GM/R^2 = G \cdot \tfrac43\pi R^3\rho / R^2 = \tfrac43\pi G\rho R$.
    4. $\tfrac43 \pi \times 6.674\times10^{-11} \times 3930 \times 3.3895\times10^6 = 3.72$ m/s².
    5. Both the pull and the resistance to speeding up grow with $m$. So every mass falls with the same acceleration.

## Common mistake

**Forgetting to square the radius**, or forgetting to change km to m. With $GM$ in m³/s², $R$ must be in metres.

## Where it leads

- Back: [The law of gravity](01-the-law-of-gravity.md) · Next: [Orbital speed](03-orbital-speed.md)
- [Level 6 page](index.md) · [Gravity and orbits topic page](../index.md)
- Numbers from NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html),
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) and
  [Moon fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html).
