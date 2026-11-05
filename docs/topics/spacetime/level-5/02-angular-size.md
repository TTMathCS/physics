---
title: "Angular size"
---

# Angular size

*Space and time · level 5, lesson 2 of 6*

## A question to start

The Sun is about 400 times wider than the Moon. So why do they look the same size in our sky?

## The idea

How big something looks depends on two things: its real width and how far away it is. For anything small in the sky,

$$\text{angle in degrees} \approx 57.3 \times \frac{\text{width}}{\text{distance}}.$$

The 57.3 is there because a full circle is 360°, and $360 \div (2\pi) \approx 57.3$.

The Sun is about 400 times wider than the Moon, and also about 400 times farther away. The two effects cancel, so they
look almost the same size.

From Mars, the Sun is farther away, so it looks smaller. And Mars's biggest moon, Phobos, is tiny but very close.

| Seen from the ground | Mars | Earth |
| --- | --- | --- |
| The Sun | about 0.35° | about 0.53° |
| The biggest moon | Phobos, about 0.2° | the Moon, about 0.52° |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="An eye with two lines spreading out. A small Moon close by and a huge Sun far away both fit exactly between the same two lines, so they look the same size.">
  <circle cx="15" cy="60" r="4" fill="currentColor"/>
  <g stroke="currentColor"><line x1="15" y1="60" x2="320" y2="10"/><line x1="15" y1="60" x2="320" y2="110"/></g>
  <circle cx="70" cy="60" r="9" fill="#cfc8bf" stroke="currentColor"/>
  <circle cx="290" cy="60" r="45" fill="#eea66f" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="55" y="95">Moon: small, near</text><text x="180" y="118">Sun: huge, far away</text></g>
</svg>
</div>

## Worked examples

**1. The Moon.** Width 3,475 km, distance 384,400 km. $57.3 \times \frac{3{,}475}{384{,}400} \approx 0.52°$.

**2. The Sun from Mars.** Width 1,391,400 km, distance 228 million km.
$57.3 \times \frac{1{,}391{,}400}{228{,}000{,}000} \approx 0.35°$.

**3. Phobos overhead.** About 22 km wide, about 5,989 km above the ground. $57.3 \times \frac{22}{5{,}989} \approx 0.21°$:
well under half the width our Moon looks from Earth.

## Try it

1. Which two things decide how big something looks?
2. Why do the Sun and the Moon look the same size from Earth?
3. Does the Sun look bigger or smaller from Mars? Why?
4. A 2 m tall person stands 1,000 m away. About how tall do they look, in degrees?

??? note "Answers"
    1. Its real width and its distance.
    2. The Sun is about 400 times wider, but also about 400 times farther away.
    3. Smaller, because Mars is farther from the Sun.
    4. $57.3 \times \frac{2}{1{,}000} \approx 0.11°$.

## Common mistake

**Using the formula for big angles.** It only works when the width is small compared with the distance. For anything
that fills a lot of the sky, it gives the wrong answer.

## Where it leads

- Back: [Angles in the sky](01-angles-in-the-sky.md) · Next: [Parallax](03-parallax.md)
- [Level 5 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA's [Sun fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html),
  [Moon fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html) and
  [Phobos page](https://science.nasa.gov/mars/moons/phobos/), and ESA on
  [Phobos's orbit](https://sci.esa.int/web/mars-express/-/31031-phobos).
