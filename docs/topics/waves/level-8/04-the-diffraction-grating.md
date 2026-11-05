---
title: "The diffraction grating"
---

# The diffraction grating

*Waves, sound and light · level 8, lesson 4 of 6*

## A question to start

Sodium's two yellow lines are only 0.6 nm apart. A prism blurs them into one. What kind of instrument can split them?

## The idea

A **diffraction grating** is a surface ruled with thousands of fine, evenly spaced lines. Light from each gap spreads
out, and the waves add up strongly only in directions where the paths from neighbouring gaps differ by a whole number
of wavelengths:

$$d \sin\theta = n\lambda,$$

where $d$ is the spacing between lines and $n = 0, 1, 2, \dots$ is the **order**. Different wavelengths come out at
different angles, so the grating spreads light into a spectrum, much more widely than a prism.

To separate two close lines $\lambda$ and $\lambda + \Delta\lambda$, a grating needs a **resolving power**

$$\frac{\lambda}{\Delta\lambda} \le nN,$$

where $N$ is the number of lines the light falls on.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Light from the left hits a grating, a column of fine slits. On the right, a bright central line at zero order, and first-order spectra spread above and below, with violet closest to the centre and red furthest out.">
  <line x1="10" y1="70" x2="120" y2="70" stroke="currentColor" stroke-width="3"/>
  <g stroke="currentColor"><line x1="125" y1="20" x2="125" y2="120" stroke-dasharray="2 2"/></g>
  <line x1="125" y1="70" x2="310" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke-width="2"><line x1="125" y1="70" x2="300" y2="40" stroke="#8e44ad"/><line x1="125" y1="70" x2="300" y2="20" stroke="#d62728"/><line x1="125" y1="70" x2="300" y2="100" stroke="#8e44ad"/><line x1="125" y1="70" x2="300" y2="120" stroke="#d62728"/></g>
  <g font-size="10" fill="currentColor"><text x="20" y="60">light in</text><text x="110" y="135">grating</text><text x="250" y="66">n = 0</text><text x="250" y="15">n = 1</text><text x="250" y="135">n = 1</text></g>
</svg>
</div>

## Worked examples

**1. Line spacing.** 600 lines per mm: $d = 10^{-3}/600 = 1.67\times10^{-6}$ m.

**2. Hydrogen's red line.** First order: $\sin\theta = 656\times10^{-9}/1.67\times10^{-6} = 0.394$, so $\theta = 23.2°$.

**3. Sodium's pair.** $\lambda/\Delta\lambda = 589.3/0.6 \approx 980$. In first order, the light must fall on at least
about 980 lines, under 2 mm of a 600-lines-per-mm grating.

## Try it

1. Find the first-order angle of hydrogen's blue-green line, 486 nm, for the same grating.
2. What is the highest order of 656 nm light this grating can show?
3. Hydrogen's red line in a hot spark might need to be separated from a line 0.1 nm away. What resolving power is
   needed?
4. Why does a grating spread a spectrum more widely than a prism?

??? note "Answers"
    1. $\sin\theta = 486/1667 = 0.292$: $\theta = 17.0°$.
    2. $n \le d/\lambda = 1667/656 = 2.5$, so order 2.
    3. $656/0.1 \approx 6{,}600$.
    4. Its angles depend directly on $\lambda/d$, with $d$ only a few wavelengths, so small changes in wavelength give big
       changes in angle.

## Common mistake

**Using lines per mm as $d$.** $d$ is the spacing: 1 mm divided by the number of lines in it.

## Where it leads

- Back: [Absorption lines](03-absorption-lines.md) · Next: [Reading rocks with lasers](05-reading-rocks-with-lasers.md)
- [Level 8 page](index.md) · [Waves, sound and light topic page](../index.md)
