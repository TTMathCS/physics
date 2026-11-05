---
title: "Distance from orbits"
---

# Distance from orbits

*Space and time · level 6, lesson 1 of 6*

## A question to start

Earth is 1 au from the Sun and Mars is about 1.52 au. If, seen from the Sun, the two planets are 90° apart, how far is
it from Earth to Mars?

## The idea

Treat the two orbits as circles round the Sun. The Sun, Earth and Mars make a triangle. If the angle at the Sun is
$\theta$, the **cosine rule** gives the third side:

$$d^2 = r_E^2 + r_M^2 - 2\,r_E\,r_M\cos\theta,$$

where $r_E = 1$ au and $r_M = 1.52$ au.

- $\theta = 0°$: Mars is straight out from Earth (opposition). $d = 1.52 - 1 = 0.52$ au.
- $\theta = 180°$: Mars is behind the Sun (conjunction). $d = 1.52 + 1 = 2.52$ au.

The real orbits are slightly oval, so the true range is a bit wider: from about 54.6 to about 401 million km.

| Distance from the Sun | Mars | Earth |
| --- | --- | --- |
| Closest | 206.7 million km | 147.1 million km |
| Average | 228.0 million km | 149.6 million km |
| Farthest | 249.3 million km | 152.1 million km |

The very closest approach happens when Mars is near its closest to the Sun and Earth near its farthest:
$206.7 - 152.1 = 54.6$ million km.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="The Sun at the centre of two circles, the orbits of Earth and Mars. Lines from the Sun to each planet make an angle theta; the third side of the triangle is the Earth to Mars distance d.">
  <circle cx="110" cy="75" r="40" fill="none" stroke="#5aa0d8"/><circle cx="110" cy="75" r="61" fill="none" stroke="#d86a3a"/>
  <circle cx="110" cy="75" r="6" fill="#eea66f" stroke="currentColor"/>
  <circle cx="150" cy="75" r="4" fill="#5aa0d8" stroke="currentColor"/><circle cx="110" cy="14" r="4" fill="#d86a3a" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="110" y1="75" x2="150" y2="75"/><line x1="110" y1="75" x2="110" y2="14"/></g>
  <line x1="150" y1="75" x2="110" y2="14" stroke="#f2d13b" stroke-width="2"/>
  <path d="M124 75 A14 14 0 0 0 110 61" fill="none" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="117" y="68">θ</text><text x="134" y="42">d</text><text x="190" y="40">Mars: 1.52 au</text><text x="190" y="80">Earth: 1 au</text><text x="190" y="120">θ = 90° here</text></g>
</svg>
</div>

## Worked examples

**1. At 90°.** $\cos 90° = 0$, so $d^2 = 1 + 1.52^2 = 3.31$. $d \approx 1.82$ au, about 272 million km.

**2. At 60°.** $\cos 60° = 0.5$. $d^2 = 1 + 2.31 - 2 \times 1.52 \times 0.5 = 1.79$. $d \approx 1.34$ au, about 200 million
km.

**3. Into light time.** 1.82 au is about $1.82 \times 8.3 \approx 15$ light-minutes.

## Try it

1. What shape do the Sun, Earth and Mars make?
2. What is the distance at opposition, using circular orbits?
3. Find the distance when $\theta = 120°$. ($\cos 120° = -0.5$.)
4. Why is the real closest distance smaller than 0.52 au?

??? note "Answers"
    1. A triangle, with the Sun at one corner.
    2. $1.52 - 1 = 0.52$ au, about 78 million km.
    3. $d^2 = 1 + 2.31 + 1.52 = 4.83$, so $d \approx 2.2$ au.
    4. The orbits are slightly oval. When Mars is near its closest to the Sun and Earth near its farthest, the gap is
       only 54.6 million km.

## Common mistake

**Taking $\theta$ as the angle seen from Earth.** The cosine rule here needs the angle *at the Sun*, between the lines to
each planet.

## Where it leads

- Back: [How big Mars looks](../level-5/06-how-big-mars-looks.md) · Next: [One way and round trip](02-one-way-and-round-trip.md)
- [Level 6 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA's [planetary fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/) and
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
