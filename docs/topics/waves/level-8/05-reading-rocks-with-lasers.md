---
title: "Reading rocks with lasers"
---

# Reading rocks with lasers

*Waves, sound and light · level 8, lesson 5 of 6*

## A question to start

Perseverance's SuperCam can tell what a rock is made of without touching it. In one of its first tests, it zapped a
rock 30 times from about 3 m away. How does a laser read a rock?

## The idea

SuperCam uses light in three ways.

**1. Laser-induced breakdown spectroscopy (LIBS).** A short, intense laser pulse heats a pinhead-sized spot on the rock
so much that it turns into a **plasma**, a glowing gas of atoms and ions. As the plasma cools, each element gives out
its own **emission lines**. A spectrometer spreads the light out, and the lines show which elements are there: silicon,
iron, calcium, magnesium, sodium, hydrogen and more. The brighter a line, the more of that element.

**2. Raman spectroscopy.** A green laser excites the **chemical bonds** in the rock. The scattered light comes back
slightly shifted in wavelength, by amounts that depend on which atoms are bonded together. That shows the **minerals**,
not just the elements.

**3. Visible and infrared reflectance (VISIR).** SuperCam also looks at sunlight reflected from rocks. Minerals absorb
particular infrared bands, which show what they are made of.

The sound of each zap, picked up by SuperCam's microphone, adds one more clue: how hard the rock is.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A rover mast on the left fires a red laser pulse at a rock on the right. A small glowing plasma forms on the rock. Light from the plasma goes back to the mast and is spread into a spectrum of bright lines.">
  <rect x="20" y="30" width="40" height="22" fill="#cfc8bf" stroke="currentColor"/><line x1="40" y1="52" x2="40" y2="130" stroke="currentColor" stroke-width="3"/>
  <path d="M240 130 Q245 80 290 85 Q320 95 315 130 Z" fill="#d86a3a" opacity=".7" stroke="currentColor"/>
  <line x1="60" y1="36" x2="246" y2="92" stroke="#d62728" stroke-width="2"/>
  <circle cx="250" cy="97" r="8" fill="#eea66f"/><circle cx="250" cy="97" r="4" fill="#fff"/>
  <line x1="243" y1="102" x2="60" y2="50" stroke="#eea66f" stroke-dasharray="4 3"/>
  <rect x="70" y="95" width="120" height="22" fill="#222"/><g stroke-width="2"><line x1="90" y1="95" x2="90" y2="117" stroke="#8e44ad"/><line x1="112" y1="95" x2="112" y2="117" stroke="#2ca02c"/><line x1="140" y1="95" x2="140" y2="117" stroke="#f2d13b"/><line x1="170" y1="95" x2="170" y2="117" stroke="#d62728"/></g>
  <g font-size="10" fill="currentColor"><text x="130" y="60">laser pulse</text><text x="230" y="75">plasma</text><text x="70" y="133">element lines</text></g>
</svg>
</div>

## Worked examples

**1. A hydrogen line.** A bright line at 656.3 nm in the plasma means hydrogen, often from water locked in minerals.

**2. The energy of the light.** A plasma line at 589 nm, from sodium, has photons of $hc/\lambda = 2.1$ eV.

**3. Resolving the lines.** Sodium's two lines, 0.6 nm apart, need a resolving power of about 1,000: easy for a good
grating spectrometer.

## Try it

1. What does the laser do to the rock in LIBS?
2. Why does each element show up as its own set of lines?
3. What extra information does Raman spectroscopy give that LIBS does not?
4. How does the sound of the zaps help?

??? note "Answers"
    1. It heats a tiny spot into a glowing plasma of atoms and ions.
    2. Each element has its own energy levels, so its own photon energies and wavelengths.
    3. Which atoms are bonded together, and so which minerals the rock contains.
    4. Its loudness gives a hint of how hard the rock is.

## Common mistake

**"The laser melts away the rock."** Each pulse removes only a pinhead of material, from the surface. That also blows
off dust, so later pulses read the rock beneath.

## Where it leads

- Back: [The diffraction grating](04-the-diffraction-grating.md) · Next: [Doppler shifts of light](06-doppler-shifts-of-light.md)
- [Level 8 page](index.md) · [Waves, sound and light topic page](../index.md)
- SuperCam: NASA's [SuperCam first results](https://www.nasa.gov/centers-and-facilities/jpl/perseverance-rovers-supercam-science-instrument-delivers-first-results/).
  The sound of the zaps: [What the microphones heard](../level-4/05-what-the-microphones-heard.md).
