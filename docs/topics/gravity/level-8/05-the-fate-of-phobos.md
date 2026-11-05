---
title: "The fate of Phobos"
---

# The fate of Phobos

*Gravity and orbits · level 8, lesson 5 of 6*

## A question to start

Our Moon is moving away from the Earth by about 3.8 cm a year, measured with lasers bounced off mirrors the Apollo
astronauts left. Phobos is doing the opposite: it is falling towards Mars, by about 1.8 m every century. Why the
difference, and how long does Phobos have?

## The idea

**Tidal bulges.** A moon raises two tidal bulges on its planet ([level 3](../level-3/06-tides.md)). The planet's rock is
not perfectly elastic, so the bulges are carried a little away from the line to the moon by the planet's spin. Which
way depends on who is faster.

- **The Moon** orbits much more slowly than the Earth spins (27.3 days against 1 day). The spin carries the bulge
  **ahead** of the Moon. Its pull drags the Moon forward, giving it energy: the Moon rises to a higher orbit, and the
  Earth's spin slows.
- **Phobos** orbits **faster** than Mars spins (7.65 h against 24.6 h), because it is inside the areostationary radius
  of 20,430 km. Phobos runs ahead of its bulge, so the bulge lags **behind** and pulls it back. Phobos loses energy and
  sinks.
- **Deimos** is just outside the areostationary radius, so it rises, but so slowly it will barely move in the life of
  the solar system.

**The rate.** The tidal torque grows very steeply as the moon gets closer: $da/dt \propto a^{-11/2}$. Write
$\dot a = -k\,a^{-11/2}$ and integrate from now ($a_0$) to a smaller $a$:

$$t = \frac{2}{13}\,\frac{a_0}{|\dot a_0|}\left[1 - \left(\frac{a}{a_0}\right)^{13/2}\right].$$

With $a_0 = 9{,}376$ km and $|\dot a_0| = 1.8$ cm per year $= 1.8\times10^{-5}$ km per year, $a_0/|\dot a_0| = 5.2 \times
10^8$ years, and the time to fall all the way is $\tfrac{2}{13} \times 5.2\times10^8 \approx 80$ million years.

**Breaking up first.** Before it reaches the surface, Phobos will cross its **Roche limit**, where Mars's tides pull
harder on its near and far sides than its own gravity holds them together. For a solid moon, $d \approx 1.26 R
(\rho_M/\rho_m)^{1/3} = 1.26 \times 3390 \times (3934/1876)^{1/3} \approx 5{,}500$ km. Phobos is weak, a rubble pile with
a thin shell, so it will likely break earlier. Studies put the end at **30 to 50 million years** from now: Phobos will
crash in pieces, or spread into a ring round Mars for a time. The long grooves across its surface may be the first
cracks of that tidal stretching.

## Worked examples

**1. Time to the solid Roche limit.** $(5500/9376)^{13/2} = 0.587^{6.5} = 0.031$, so $t \approx 80 \times (1 - 0.031) =
78$ million years, in this simple model.

**2. Why $a^{-11/2}$.** The bulge's height goes as $m/a^3$, and its pull back on the moon goes as $m \times$ (bulge)$/a^4$,
so the torque is $\propto m^2/a^6$. Torque changes the orbit's angular momentum $\propto m\sqrt{a}$, so $\dot a/\sqrt a
\propto m/a^6$, giving $\dot a \propto a^{-11/2}$.

**3. Phobos's orbit per century.** 1.8 m per century, out of 9,376 km: 2 parts in 10 billion per year. Spacecraft
tracking of Phobos since the 1970s can see it, because the moon arrives a little early each orbit, and the shift
builds up.

## Try it

1. Why does Phobos fall while the Moon rises?
2. Would Deimos fall or rise? Why?
3. Using the formula, how long would it take Phobos to fall from 9,376 km to 8,000 km?
4. If Phobos were twice as massive, how would $\dot a$ change?
5. What is the Roche limit, and why does a weak body break up outside it?

??? note "Answers"
    1. Phobos orbits faster than Mars spins, so its bulge lags behind and pulls it back; the Moon orbits slower than the
       Earth spins, so its bulge runs ahead and pulls it forward.
    2. Rise, very slowly: it is outside the areostationary orbit, so it is slower than the spin.
    3. $(8000/9376)^{6.5} = 0.853^{6.5} = 0.356$; $t = 80 \times 0.644 \approx 52$ million years.
    4. It would double ($\dot a \propto m$).
    5. The distance inside which tidal stretching beats a moon's own gravity. A weak, rubbly body has no strength to add to
       its gravity, so it comes apart sooner than a solid one.

## Common mistake

**Thinking Phobos falls because of air drag.** Phobos is 6,000 km up, far above any air. It falls because of the tide it
raises on Mars, a slow transfer of energy and angular momentum between the moon's orbit and the planet's spin.

## Where it leads

- Back: [Orbits that drift](04-orbits-that-drift.md) · Next: [Relativity and orbits](06-relativity-and-orbits.md)
- [Level 8 page](index.md) · [Gravity and orbits topic page](../index.md)
- Phobos's grooves as tidal cracks: [NASA, "Mars' Moon Phobos is Slowly Falling Apart" (2015)](https://www.nasa.gov/solar-system/mars-moon-phobos-is-slowly-falling-apart/).
