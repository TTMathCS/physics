---
title: "Seeing Earth from Mars"
---

# Seeing Earth from Mars

*Waves, sound and light · level 7, lesson 6 of 6*

## A question to start

On 3 October 2007, the HiRISE camera on NASA's Mars Reconnaissance Orbiter turned round and photographed the Earth and
the Moon, 142 million km away. Earth came out about 90 pixels across. What does that tell us about the camera?

## The idea

A camera's detail is set by the **angle** each pixel covers. NASA gives the scale: at 142 million km, each pixel covered
142 km. So each pixel covers an angle of

$$\theta = \frac{142 \text{ km}}{142\times10^6 \text{ km}} = 1\times10^{-6} \text{ rad},$$

one **microradian**. The same camera looking down at Mars from orbit can see much smaller things, because they are much
closer.

There is a limit to how fine any telescope can see, set by the wave nature of light. Light spreads out a little as it
passes through an opening (**diffraction**), so the smallest angle a telescope of aperture $D$ can separate is about

$$\theta_\text{min} \approx 1.22\,\frac{\lambda}{D}.$$

| Seen by HiRISE | Earth and Moon, from Mars | Mars, from orbit |
| --- | --- | --- |
| Distance | 142 million km | about 300 km |
| Size of one pixel | 142 km | about 30 cm |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="An orbiter on the left with lines fanning out at a tiny fixed angle. Close to the orbiter, the gap between the lines is 30 centimetres on Mars's surface. Far away, at Earth's distance, the same angle spans 142 kilometres.">
  <rect x="10" y="50" width="22" height="16" fill="#cfc8bf" stroke="currentColor"/>
  <g stroke="#eea66f"><line x1="32" y1="56" x2="320" y2="35"/><line x1="32" y1="60" x2="320" y2="85"/></g>
  <line x1="80" y1="52" x2="80" y2="64" stroke="#d86a3a" stroke-width="3"/><line x1="300" y1="37" x2="300" y2="83" stroke="#5aa0d8" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="60" y="85">Mars: 30 cm</text><text x="318" y="105" text-anchor="end">Earth's distance: 142 km</text><text x="110" y="25">the same angle per pixel</text></g>
</svg>
</div>

## Worked examples

**1. Earth's size in pixels.** Earth is 12,742 km across: $12{,}742/142 = 90$ pixels, as NASA reported. The Moon, 3,474
km across, is about 24 pixels.

**2. From orbit.** At 1 µrad per pixel, 30 cm per pixel means a distance of $0.30/10^{-6} = 300{,}000$ m, 300 km: about
the height the orbiter flies above Mars.

**3. Diffraction.** Suppose a telescope mirror is 0.5 m across. For green light of 550 nm:
$\theta_\text{min} = 1.22 \times 550\times10^{-9}/0.5 = 1.3\times10^{-6}$ rad. From 300 km up, that is about 0.4 m.

## Try it

1. What angle does one pixel cover, if it sees 142 km at 142 million km?
2. How many pixels across would Mars be, seen by the same camera from 142 million km?
3. Find $\theta_\text{min}$ for a 2.4 m telescope in green light of 550 nm.
4. Why can't a bigger zoom alone make a telescope see finer detail?

??? note "Answers"
    1. $10^{-6}$ rad, one microradian.
    2. $6779/142 \approx 48$ pixels.
    3. $1.22 \times 550\times10^{-9}/2.4 = 2.8\times10^{-7}$ rad.
    4. Diffraction sets a smallest angle, $1.22\lambda/D$; only a bigger aperture lowers it.

## Common mistake

**"Resolution is a length."** A telescope's resolution is an angle. How much detail that gives in metres depends on how
far away the object is.

## Where it leads

- Back: [Seeing Mars from Earth](05-seeing-mars-from-earth.md) · Next level: [Level 8: Spectra](../level-8/index.md)
- [Level 7 page](index.md) · [Waves, sound and light topic page](../index.md)
- The figures: NASA's [Earth and Moon as seen from Mars](https://science.nasa.gov/photojournal/earth-and-moon-as-seen-from-mars/)
  and the [HiRISE camera](https://www.uahirise.org/epo/about/).
