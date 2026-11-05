---
title: "Doppler shifts of light"
---

# Doppler shifts of light

*Waves, sound and light · level 8, lesson 6 of 6*

## A question to start

Engineers track a spacecraft on its way to Mars by the tiny change in the frequency of its radio signal. Astronomers find
planets round other stars by the same trick. How can a frequency measure a speed?

## The idea

Light shows the Doppler effect too. For a source moving at a speed $v$ along the line of sight, much less than $c$:

$$\frac{\Delta\lambda}{\lambda} = \frac{\Delta f}{f} \approx \frac{v}{c}.$$

- Moving **away**: wavelengths get longer, a **redshift**.
- Moving **towards** you: shorter, a **blueshift**.

Since spectral lines have exactly known wavelengths, measuring how far a line has moved gives the speed. For a radio
signal from a spacecraft, the same rule turns a frequency shift into a speed.

| Moving through space | Mars | Earth |
| --- | --- | --- |
| Average speed round the Sun | 24.08 km/s | 29.78 km/s |
| Speed of a point on the equator, from spin | 241 m/s | 465 m/s |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="Three copies of a spectrum with one dark line. In the middle, the line is at its normal place. Above, for a source moving towards us, it is shifted towards blue. Below, for a source moving away, it is shifted towards red.">
  <defs><linearGradient id="sp2" x1="0" x2="1"><stop offset="0" stop-color="#8e44ad"/><stop offset=".3" stop-color="#1f77b4"/><stop offset=".5" stop-color="#2ca02c"/><stop offset=".7" stop-color="#f2d13b"/><stop offset="1" stop-color="#d62728"/></linearGradient></defs>
  <g><rect x="60" y="10" width="250" height="25" fill="url(#sp2)"/><rect x="60" y="45" width="250" height="25" fill="url(#sp2)"/><rect x="60" y="80" width="250" height="25" fill="url(#sp2)"/></g>
  <g stroke="#111" stroke-width="3"><line x1="165" y1="10" x2="165" y2="35"/><line x1="185" y1="45" x2="185" y2="70"/><line x1="205" y1="80" x2="205" y2="105"/></g>
  <g font-size="10" fill="currentColor"><text x="5" y="27">towards</text><text x="5" y="62">still</text><text x="5" y="97">away</text></g>
</svg>
</div>

## Worked examples

**1. A spacecraft's radio.** A signal at 8.4 GHz from a craft moving away at 10 km/s: $\Delta f = 8.4\times10^9 \times
10^4/3.00\times10^8 = 280$ kHz lower.

**2. A star.** Hydrogen's 656.3 nm line from a star moving towards us at 30 km/s: $\Delta\lambda = 656.3 \times
3\times10^4/3.00\times10^8 = 0.066$ nm shorter.

**3. Mars's spin.** The equator moves at $2\pi \times 3396 \text{ km}/24.62 \text{ h} = 241$ m/s. Light from the edge of
Mars turning towards us is shifted by only $v/c = 8\times10^{-7}$ of its wavelength: tiny, but measurable.

## Try it

1. A line normally at 500.0 nm is seen at 500.1 nm. Is the source moving towards or away from us, and how fast?
2. A spacecraft's 8.4 GHz signal arrives 140 kHz high. What is its speed along the line of sight?
3. Why does the rule $\Delta\lambda/\lambda = v/c$ only work for speeds much less than $c$?
4. A planet makes its star wobble towards and away from us at 12 m/s. Find the shift of a 600 nm line.

??? note "Answers"
    1. Away (redshift), at $3.00\times10^8 \times 0.1/500 = 60$ km/s.
    2. $v = c\,\Delta f/f = 3.00\times10^8 \times 1.4\times10^5/8.4\times10^9 = 5.0$ km/s, towards us.
    3. Near the speed of light, relativity changes the formula.
    4. $600 \times 12/3.00\times10^8 = 2.4\times10^{-5}$ nm.

## Common mistake

**"Redshift means the light turns red."** The whole spectrum moves a little towards longer wavelengths. A blue line
stays blue to the eye; it is just measured slightly longer.

## Where it leads

- Back: [Reading rocks with lasers](05-reading-rocks-with-lasers.md) · [Level 8 page](index.md) ·
  [Waves, sound and light topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). The Doppler effect for sound:
  [The Doppler effect](../level-5/06-the-doppler-effect.md). Relativity: [Space and time](../../spacetime/index.md).
