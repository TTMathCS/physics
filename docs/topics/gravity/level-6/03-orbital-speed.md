---
title: "Orbital speed"
---

# Orbital speed

*Gravity and orbits · level 6, lesson 3 of 6*

## A question to start

A relay satellite will orbit Mars 300 km up. How fast must it go to stay in a circle, and how long will each orbit
take? Would a satellite at the same height round the Earth go faster or slower?

## The idea

Anything moving in a circle of radius $r$ at speed $v$ is accelerating towards the centre, by

$$a = \frac{v^2}{r}.$$

(The [Forces and motion](../../forces/index.md) topic derives this; a stone on a string needs the string's pull to keep
turning.) For an orbit, gravity provides the pull. Set $GM/r^2$, gravity's acceleration at distance $r$, equal to
$v^2/r$:

$$\frac{GM}{r^2} = \frac{v^2}{r} \qquad\Rightarrow\qquad v = \sqrt{\frac{GM}{r}}.$$

The satellite's own mass has cancelled again: a space station and a bolt beside it orbit together.

The period is one lap divided by the speed:

$$T = \frac{2\pi r}{v}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 200" role="img" aria-label="A satellite on a circular orbit of radius r around a planet. Its velocity arrow points along the circle; gravity's arrow points to the centre.">
  <circle cx="110" cy="100" r="40" fill="#d86a3a" opacity=".7" stroke="currentColor"/>
  <circle cx="110" cy="100" r="85" fill="none" stroke="currentColor" stroke-dasharray="4 4" opacity=".6"/>
  <circle cx="195" cy="100" r="5" fill="currentColor"/>
  <line x1="110" y1="100" x2="190" y2="100" stroke="currentColor" opacity=".5"/>
  <line x1="195" y1="96" x2="195" y2="40" stroke="#5aa0d8" stroke-width="2.5"/><path d="M189 46 l6 -12 l6 12 z" fill="#5aa0d8"/>
  <line x1="190" y1="110" x2="160" y2="110" stroke="#eea66f" stroke-width="2.5"/><path d="M165 104 l-12 6 l12 6 z" fill="#eea66f"/>
  <g font-size="12" fill="currentColor"><text x="140" y="94">r</text><text x="202" y="50">v</text><text x="130" y="128">GM/r²</text></g>
</svg>
</div>

**Low orbits**, just above the air:

| | Mars, 300 km up | Earth, 400 km up |
| --- | --- | --- |
| $r$ | 3,690 km | 6,771 km |
| $GM$ | 42,828 km³/s² | 398,600 km³/s² |
| Speed $v$ | 3.41 km/s | 7.67 km/s |
| Period $T$ | 1 h 53 min | 1 h 32 min |

To stay in low orbit round Mars takes less than half the speed of the space station. That is the speed a ship must
reach to get into orbit after leaving the surface of Mars, about 3.4 to 3.5 km/s (plus what it loses on the way up).

Farther out, $v$ shrinks as $1/\sqrt r$: four times as far, half the speed. And the path gets longer, so the period
grows even faster (lesson 4).

## Worked examples

**1. The relay satellite.** $v = \sqrt{42828 / 3689.5} = \sqrt{11.61} = 3.41$ km/s.
$T = 2\pi \times 3689.5 / 3.41 = 6{,}800$ s $= 1$ h 53 min.

**2. Phobos.** $v = \sqrt{42828 / 9376} = \sqrt{4.568} = 2.14$ km/s. $T = 2\pi \times 9376 / 2.14 = 27{,}500$ s
$= 7.6$ h. ✓ (The real figure is 7 h 39 min.)

**3. The Earth round the Sun.** $GM_\odot = 1.327 \times 10^{11}$ km³/s², $r = 1.496 \times 10^8$ km.
$v = \sqrt{887} = 29.8$ km/s. ✓

## Try it

1. Find the speed of a satellite in a circular orbit 1,000 km above Mars.
2. Find its period.
3. Find the orbital speed of Mars round the Sun ($r = 2.279 \times 10^8$ km).
4. Find the orbital speed of Deimos ($r = 23{,}463$ km).
5. A satellite moves to an orbit four times as far from the centre. What happens to its speed?

??? note "Answers"
    1. $r = 4389.5$ km. $v = \sqrt{42828/4389.5} = \sqrt{9.757} = 3.12$ km/s.
    2. $T = 2\pi \times 4389.5 / 3.12 = 8{,}840$ s, about 2 h 27 min.
    3. $\sqrt{1.327\times10^{11} / 2.279\times10^8} = \sqrt{582} = 24.1$ km/s.
    4. $\sqrt{42828/23463} = \sqrt{1.825} = 1.35$ km/s.
    5. It halves.

## Common mistake

**Using the height instead of the radius.** In $v = \sqrt{GM/r}$, $r$ is from the planet's centre: radius plus height.

## Where it leads

- Back: [g from a planet's size and mass](02-g-from-a-planet.md) · Next: [Kepler's third law](04-keplers-third-law.md)
- [Level 6 page](index.md) · [Gravity and orbits topic page](../index.md)
- Getting to that speed: [Orbit is speed](../../rockets/level-4/02-orbit-is-speed.md) in Rockets and landing.
