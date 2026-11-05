---
title: "Areostationary orbit"
---

# Areostationary orbit

*Gravity and orbits · level 6, lesson 5 of 6*

## A question to start

A city on Mars wants a radio satellite that is always in the same place in its sky, so a dish can point at it and
never move. Is there an orbit that does that? How high is it?

## The idea

A satellite stays over one spot if it goes round in exactly the time the planet takes to spin once, in the same
direction, above the equator. Round the Earth this is the **geostationary** orbit, used by TV and weather satellites.
Round Mars (Ares in Greek) it is the **areostationary** orbit.

Mars spins once, relative to the stars, in 24.6229 hours: $T = 88{,}643$ s. (That is the sidereal day, a little shorter
than the 24 h 39 min sol, which is measured from Sun to Sun.) From Kepler's third law,

$$r = \left(\frac{GM\,T^2}{4\pi^2}\right)^{1/3} = \left(\frac{4.2828\times10^{13} \times 88643^2}{39.48}\right)^{1/3}.$$

$88643^2 = 7.858 \times 10^9$, times $4.2828\times10^{13}$ is $3.365 \times 10^{23}$, divided by 39.48 is
$8.524 \times 10^{21}$, and the cube root is $2.043 \times 10^7$ m:

$$r \approx 20{,}430 \text{ km}, \qquad \text{height} = 20{,}430 - 3{,}390 \approx 17{,}040 \text{ km}.$$

| | Mars (areostationary) | Earth (geostationary) |
| --- | --- | --- |
| Spin period (sidereal) | 24.62 h | 23.93 h |
| Radius of the orbit | 20,430 km | 42,164 km |
| Height above the equator | 17,040 km | 35,786 km |
| Orbital speed | 1.45 km/s | 3.07 km/s |

**What it is for.** Today, rovers send most of their data through orbiters passing low overhead, which are in view for
only a few minutes at a time. A few areostationary relays could give a city on Mars a constant link to Earth. From that
height a satellite sees Mars up to about 80° of latitude.

**Phobos and Deimos again.** Phobos (9,376 km) is well inside this orbit, so it laps the planet's spin and rises in the
west. Deimos (23,463 km) is just outside, so it falls slowly behind the spin and creeps across the sky from the east.

## Worked examples

**1. The speed.** $v = 2\pi r / T = 2\pi \times 20430 / 88643 = 1.45$ km/s. Check: $\sqrt{GM/r} = \sqrt{42828/20430} =
1.45$ km/s. ✓

**2. Radio delay.** A signal from the city to the satellite and back travels about $2 \times 17{,}040$ km, taking
$34{,}080 / 300{,}000 = 0.11$ s, small next to the minutes it takes to reach Earth.

## Try it

1. Why must an areostationary satellite be above the equator?
2. Why do we use the sidereal day (24.62 h) and not the sol (24.66 h)?
3. Find the radius of a "stationary" orbit for a planet with $GM = 10^{14}$ m³/s² and a 10-hour spin.
4. Use the radius of the areostationary orbit to work out how far up it you would see Mars's horizon: the latitude
   where the satellite is on the horizon is $\arccos(R/r)$.

??? note "Answers"
    1. An orbit always circles the planet's centre. Only an equatorial orbit can stay over one spot; any tilted orbit
       swings north and south of the equator.
    2. The orbit has to keep pace with the planet's turning relative to space; the sol also includes Mars's motion round
       the Sun.
    3. $T = 36{,}000$ s. $r = (10^{14} \times 1.296\times10^9 / 39.48)^{1/3} = (3.283\times10^{21})^{1/3} = 1.49 \times 10^7$ m,
       about 14,900 km.
    4. $\arccos(3390/20430) = \arccos(0.166) = 80.4°$.

## Common mistake

**Using the sol.** The 24 h 39 min sol is the time from noon to noon, which includes a little extra turning to catch
up with the Sun as Mars moves along its orbit. The satellite needs the true spin, 24 h 37 min.

## Where it leads

- Back: [Kepler's third law](04-keplers-third-law.md) · Next: [Weighing planets](06-weighing-planets.md)
- [Level 6 page](index.md) · [Gravity and orbits topic page](../index.md)
- Radio across space: [Space and time](../../spacetime/index.md). Numbers from NASA's
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
