---
title: "Photons and energy levels"
---

# Photons and energy levels

*Waves, sound and light · level 8, lesson 1 of 6*

## A question to start

Heat a little salt in a flame and it glows a bright yellow-orange. Not a mix of colours: one very particular yellow.
Why does each element glow with its own colours?

## The idea

Light comes in tiny packets of energy called **photons**. A photon of frequency $f$ carries energy

$$E = hf = \frac{hc}{\lambda},$$

where $h = 6.63\times10^{-34}$ J s is **Planck's constant**. Atomic energies are small, so we often use the
**electronvolt**: $1 \text{ eV} = 1.60\times10^{-19}$ J.

The electrons in an atom can only have certain energies: **energy levels**. When an electron drops from a higher level
to a lower one, the atom gives out one photon carrying exactly the difference:

$$hf = E_\text{upper} - E_\text{lower}.$$

Each element has its own set of levels, so it gives out its own set of wavelengths. For hydrogen, the levels are

$$E_n = -\frac{13.6 \text{ eV}}{n^2}, \quad n = 1, 2, 3, \dots$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Energy levels of hydrogen drawn as horizontal lines, n equals 1 at the bottom, then 2, 3 and 4 getting closer together near the top. An arrow from level 3 down to level 2 gives out a red photon.">
  <g stroke="currentColor" stroke-width="2"><line x1="60" y1="135" x2="220" y2="135"/><line x1="60" y1="60" x2="220" y2="60"/><line x1="60" y1="33" x2="220" y2="33"/><line x1="60" y1="21" x2="220" y2="21"/><line x1="60" y1="10" x2="220" y2="10" stroke-dasharray="3 3"/></g>
  <line x1="140" y1="33" x2="140" y2="56" stroke="#d86a3a" stroke-width="3"/><path d="M134 54 l6 8 l6 -8 z" fill="#d86a3a"/>
  <path d="M150 46 q6 -6 12 0 t12 0 t12 0" fill="none" stroke="#d62728" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="225" y="139">n = 1: −13.6 eV</text><text x="225" y="64">n = 2: −3.4 eV</text><text x="225" y="37">n = 3: −1.51 eV</text><text x="225" y="25">n = 4</text><text x="192" y="50">656 nm</text></g>
</svg>
</div>

## Worked examples

**1. A red photon.** $\lambda = 656$ nm: $E = 6.63\times10^{-34} \times 3.00\times10^8/656\times10^{-9} = 3.03\times10^{-19}$
J $= 1.89$ eV.

**2. Hydrogen, 3 to 2.** $E_3 - E_2 = -1.51 - (-3.40) = 1.89$ eV, the same: this jump gives the red line at 656 nm.

**3. Sodium's yellow.** At 589 nm, $E = 2.11$ eV. Every sodium atom gives out the same yellow, so a street lamp full of
sodium glows yellow.

## Try it

1. Find the energy, in eV, of a photon of violet light at 400 nm.
2. What wavelength does a photon of 2.55 eV have?
3. Find the energy hydrogen gives out when an electron drops from $n = 4$ to $n = 2$.
4. Why does each element give out only certain wavelengths?

??? note "Answers"
    1. $hc/\lambda = 4.97\times10^{-19}$ J $= 3.1$ eV.
    2. $\lambda = hc/E = 1.99\times10^{-25}/(2.55 \times 1.60\times10^{-19}) = 487$ nm.
    3. $-0.85 - (-3.40) = 2.55$ eV.
    4. Its electrons can only have certain energy levels, so only certain jumps, and photon energies, are possible.

## Common mistake

**"A brighter light has more energetic photons."** Brightness is the **number** of photons. The energy of each one is
set by its frequency alone.

## Where it leads

- Back: [Seeing Earth from Mars](../level-7/06-seeing-earth-from-mars.md) · Next: [Emission lines](02-emission-lines.md)
- [Level 8 page](index.md) · [Waves, sound and light topic page](../index.md)
- Inside the atom: [Radiation and the atom](../../radiation/index.md).
