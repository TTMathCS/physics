---
title: "Spinning for gravity"
---

# Spinning for gravity

*Forces and motion · level 7, lesson 6 of 6*

## A question to start

Nobody knows yet whether people can stay healthy for years in Mars's 0.38 g. One idea: a spinning room where people
sleep or exercise, giving them their full Earth weight for part of each day. How fast would it spin, and how would
the floor have to tilt?

## The idea

In space, a spinning station's floor pushes people inwards with $m\omega^2 r$. That push is what they feel as weight, so
the station gives an "artificial gravity" of $a = \omega^2 r$.

On Mars there is real gravity too, pointing **down**, while the spin's push points **sideways**, to the axis. What a
person feels is the combination. To feel exactly Earth's $g_E$:

$$\sqrt{g_M^2 + a^2} = g_E \qquad\Rightarrow\qquad a = \sqrt{9.81^2 - 3.71^2} = 9.08 \text{ m/s}^2.$$

The floor must face along the combined pull, so it tilts like a very steep banked track, at an angle
$\tan\phi = a/g_M = 2.45$, about **68°** from level. People inside stand "upright" on the tilted floor and feel
perfectly normal, 1 g.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 210" role="img" aria-label="A spinning room on Mars seen from the side, with the spin axis upright on the left. On the right, the floor is steeply tilted with its outer edge higher, and a person stands on it almost sideways, head towards the axis. Top left, a triangle of arrows: Mars's pull of 3.71 down, the spin's outward pull of 9.08, and the felt total of 9.81 pointing outwards and down, into the floor.">
  <line x1="40" y1="10" x2="40" y2="200" stroke="currentColor" stroke-dasharray="6 4"/>
  <path d="M30 20 a12 6 0 1 0 20 0" fill="none" stroke="currentColor"/><path d="M48 16 l6 4 l-7 3 z" fill="currentColor"/>
  <line x1="40" y1="120" x2="262" y2="120" stroke="currentColor" opacity=".4"/>
  <line x1="293" y1="64" x2="247" y2="176" stroke="#d86a3a" stroke-width="6"/>
  <line x1="264" y1="119" x2="232" y2="106" stroke="#eea66f" stroke-width="10" stroke-linecap="round"/>
  <circle cx="219" cy="100" r="8" fill="#eea66f" stroke="currentColor"/>
  <line x1="90" y1="40" x2="90" y2="63" stroke="#5aa0d8" stroke-width="3"/><path d="M84 61 l6 12 l6 -12 z" fill="#5aa0d8"/>
  <line x1="90" y1="40" x2="160" y2="40" stroke="#5aa0d8" stroke-width="3"/><path d="M160 34 l12 6 l-12 6 z" fill="#5aa0d8"/>
  <line x1="90" y1="40" x2="161" y2="69" stroke="currentColor" stroke-width="3"/><path d="M157 63 l15 10 l-18 2 z" fill="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="48" y="62">3.71</text><text x="100" y="32">9.08 spin</text><text x="120" y="92">9.81 felt</text><text x="140" y="135">r</text><text x="55" y="25">axis</text><text x="240" y="195">floor, outer edge up</text></g>
</svg>
</div>

The arrows show what a person feels: Mars's pull down, and an outward pull from the spin. (Really, the floor pushes
them inwards to keep them going round; an outward pull is what that push feels like.) The floor faces the combined
pull, with its outer edge high, like the banked track in the last lesson but far steeper.

How fast? It depends on the radius. People get dizzy and sick if they turn their heads while spinning fast; studies
suggest most people adapt to about 2 to 4 turns a minute, a few to more. So a small room must spin fast, a large one
slowly:

| Room radius | Turns a minute for 9.08 m/s² | Time per turn |
| --- | --- | --- |
| 10 m | 9.1 | 6.6 s |
| 50 m | 4.1 | 14.7 s |
| 200 m | 2.0 | 29.5 s |

## Worked examples

**1. The 10 m room.** $\omega = \sqrt{a/r} = \sqrt{9.08/10} = 0.953$ rad/s. $T = 2\pi/\omega = 6.6$ s, which is
$60/6.6 = 9.1$ turns a minute.

**2. For 2 turns a minute.** $\omega = 2\pi \times 2/60 = 0.209$ rad/s. $r = a/\omega^2 = 9.08/0.0438 = 207$ m.

**3. In space instead.** With no planet's gravity, the whole $9.81$ m/s² must come from the spin, and the floor is flat
along the rim. For 2 turns a minute: $r = 9.81/0.0438 = 224$ m.

## Try it

1. Why does a spinning room on Mars need a tilted floor?
2. What sideways acceleration is needed to feel 0.8 g in total on Mars?
3. What floor tilt goes with it?
4. A spinning ring in orbit, radius 50 m, gives 3.71 m/s² (Mars gravity). How long is each turn?

??? note "Answers"
    1. Mars's gravity is down, the spin's is sideways. The felt pull is their combination, at an angle, and the floor
       must face it.
    2. $\sqrt{7.85^2 - 3.71^2} = 6.92$ m/s².
    3. $\tan\phi = 6.92/3.71 = 1.86$, $\phi = 62°$ from level.
    4. $\omega = \sqrt{3.71/50} = 0.272$ rad/s, $T = 23$ s.

## Common mistake

**Adding the accelerations as plain numbers.** $3.71 + 6.10 = 9.81$ looks neat, but the two pulls are at right angles.
They add like the sides of a right-angled triangle.

## Where it leads

- Back: [Loops and hills](05-loops-and-hills.md) · Next level: [Rotation and stress](../level-8/index.md)
- [Level 7 page](index.md) · [Forces and motion topic page](../index.md)
- Living in 0.38 g: [A world at 0.38 g](../../gravity/level-3/05-a-world-at-0-38-g.md). Starting and stopping the spin:
  [Angular momentum](../level-8/04-angular-momentum.md).
