---
title: "Relativity and orbits"
---

# Relativity and orbits

*Gravity and orbits · level 8, lesson 6 of 6*

## A question to start

Newton's law predicts the orbit of Mars superbly. So why do the navigators who steer spacecraft to Mars use Einstein's
general relativity? And would a clock on Mars keep the same time as one on Earth?

## The idea

General relativity (1915) describes gravity as the curving of space and time by mass. For weak fields and slow speeds
it agrees with Newton almost perfectly. The small differences are of size $GM/rc^2$ and $v^2/c^2$, about $10^{-8}$ in
the inner solar system. Small, but navigators measure distances to Mars to a few metres out of hundreds of millions of
km, which is $10^{-11}$, so every effect shows.

**1. Perihelion shift.** In Newton's theory, an orbit round a single point mass is a closed ellipse. Relativity makes the
ellipse turn a little each lap:

$$\Delta\omega = \frac{6\pi GM}{c^2 a (1-e^2)} \text{ per orbit.}$$

For Mercury this is 43″ per century, the famous anomaly Einstein explained. For Mars, $\Delta\omega = 6\pi \times
1.327\times10^{20} / (8.988\times10^{16} \times 2.279\times10^{11} \times 0.991) = 1.23\times10^{-7}$ rad per orbit,
which over 53.2 orbits a century is **1.35″ per century**. Planetary ephemerides include it.

**2. Shapiro delay.** Radio signals passing near the Sun take slightly longer than they would in flat space, up to about
250 µs extra on a round trip when Mars is behind the Sun. The Viking landers, ranged from Earth in 1976 and 1977,
confirmed Einstein's prediction for this delay to about 0.1%.

**3. Clocks.** A clock deeper in a gravity well, or moving faster, runs slower, by about

$$\frac{\Delta\tau}{\tau} \approx -\frac{U}{c^2} - \frac{v^2}{2c^2},$$

with $U$ the depth of the well (positive here). Earth is closer to the Sun and moves faster than Mars, and its own well is
deeper. Adding up the terms:

| Per kg, J/kg | Mars | Earth |
| --- | --- | --- |
| Sun's well at the planet, $GM_\odot/r$ | $5.82 \times 10^8$ | $8.87 \times 10^8$ |
| Orbital motion, $v^2/2$ | $2.91 \times 10^8$ | $4.43 \times 10^8$ |
| The planet's own well at the surface, $GM/R$ | $0.13 \times 10^8$ | $0.63 \times 10^8$ |
| Total, divided by $c^2$ | $0.99 \times 10^{-8}$ | $1.55 \times 10^{-8}$ |

The difference, $0.56 \times 10^{-8}$, times 86,400 s, is about **0.5 ms a day**: a clock on Mars gains about half a
millisecond a day on one on Earth. A careful 2025 study by Neil Ashby and Bijunath Patla at NIST put the average at 477
µs a day, varying by up to 226 µs a day through the Mars year, mainly because the orbit of Mars is elliptical. A future Mars navigation system, like
GPS on Earth, would need to correct for this; GPS clocks are corrected for about 38 µs a day.

## Worked examples

**1. The perihelion shift per Mars year.** $1.23\times10^{-7}$ rad $= 0.025″$. Too small to see directly, but it adds up
in centuries of tracking.

**2. A year of clock drift.** $477$ µs/day $\times$ 365 days $\approx 0.17$ s per Earth year. In a radio link where 1 µs is
300 m of light travel, uncorrected, that would mean an error growing by 140 km a day.

**3. Mercury, for comparison.** $a = 5.79\times10^{10}$ m, $e = 0.206$, 415 orbits per century:
$6\pi \times 1.327\times10^{20}/(8.988\times10^{16} \times 5.79\times10^{10} \times 0.958) = 5.02\times10^{-7}$ rad per orbit;
$\times 415 = 2.08\times10^{-4}$ rad $= 43″$ per century. ✓

## Try it

1. Why is the perihelion shift of Mars smaller than Mercury's? Give two reasons.
2. Using the table, which term contributes most to the clock difference between Earth and Mars?
3. A clock on top of Olympus Mons and one at the bottom of Hellas Planitia: which runs faster?
4. Why must a navigator include relativity even though the effects are only $10^{-8}$?

??? note "Answers"
    1. Mars is farther from the Sun (larger $a$), and it makes fewer orbits per century.
    2. The Sun's well: $8.87 - 5.82 = 3.05 \times 10^8$ J/kg, more than the motion term's $1.52 \times 10^8$.
    3. The one on Olympus Mons, higher in Mars's gravity well.
    4. Distances to Mars are measured to a few metres in hundreds of millions of km, $10^{-11}$, so a $10^{-8}$ effect is
       a thousand times bigger than the measurement error.

## Common mistake

**"Relativity only matters near the speed of light."** Its gravitational effects matter wherever measurements are
precise enough: GPS on Earth would drift by kilometres a day without them, and so would navigation at Mars.

## Where it leads

- Back: [The fate of Phobos](05-the-fate-of-phobos.md) · [Level 8 page](index.md) · [Gravity and orbits topic page](../index.md)
- Relativity in full: the [Space and time](../../spacetime/index.md) topic. The clock study:
  [NIST, "What time is it on Mars?" (December 2025)](https://www.nist.gov/news-events/news/2025/12/what-time-it-mars-nist-physicists-have-answer);
  Ashby and Patla, *The Astronomical Journal*, 2025.
- The rocket side of mission design: [Rockets and landing, level 8](../../rockets/level-8/index.md).
