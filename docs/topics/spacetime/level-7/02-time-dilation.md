---
title: "Time dilation"
---

# Time dilation

*Space and time · level 7, lesson 2 of 6*

## A question to start

A clock is made of a pulse of light bouncing between two mirrors. What happens to its ticking when it moves past you?

## The idea

In the **light clock**, the mirrors are a distance $L$ apart. At rest, one tick, up and down, takes $2L/c$.

Now the clock moves sideways at speed $v$. From outside, the light has to go along a slanted path, which is longer. But
light still goes at $c$. So each tick takes **longer**. Pythagoras on the slanted path gives

$$t = \gamma\,t_0, \qquad \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}.$$

Here $t_0$ is the time on the moving clock, and $t$ is the time you measure. The **Lorentz factor** $\gamma$ is always at
least 1. Moving clocks run slow. This is **time dilation**, and it is true of every kind of clock, including hearts and
atoms.

| Speed | $\gamma$ |
| --- | --- |
| $0.1c$ | 1.005 |
| $0.5c$ | 1.155 |
| $0.8c$ | 1.667 |
| $0.9c$ | 2.29 |
| $0.995c$ | 10.0 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="On the left, a light clock at rest: the pulse goes straight up and down. On the right, the same clock moving sideways, shown at three moments: the pulse goes along a longer zigzag, so each tick takes longer.">
  <g stroke="currentColor" stroke-width="3"><line x1="30" y1="20" x2="70" y2="20"/><line x1="30" y1="110" x2="70" y2="110"/><line x1="190" y1="20" x2="230" y2="20"/><line x1="190" y1="110" x2="230" y2="110"/></g>
  <g stroke="currentColor" stroke-width="3" opacity=".45"><line x1="140" y1="20" x2="180" y2="20"/><line x1="140" y1="110" x2="180" y2="110"/><line x1="240" y1="20" x2="280" y2="20"/><line x1="240" y1="110" x2="280" y2="110"/></g>
  <line x1="50" y1="110" x2="50" y2="20" stroke="#f2d13b" stroke-width="2"/>
  <path d="M160 110 L210 20 L260 110" fill="none" stroke="#f2d13b" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="20" y="132">at rest</text><text x="150" y="132">moving: longer path</text><text x="210" y="14" text-anchor="middle">v →</text></g>
</svg>
</div>

## Worked examples

**1. At $0.8c$.** $v^2/c^2 = 0.64$. $\sqrt{1 - 0.64} = 0.6$. $\gamma = 1/0.6 \approx 1.667$.

**2. A moving hour.** A clock moving at $0.8c$ shows 1 hour passing. You measure $1.667$ hours, about 1 hour 40 minutes.

**3. Where Pythagoras comes in.** In time $t$ the clock moves $vt/2$ sideways while the light goes $ct/2$ along a slant
from one mirror to the other. So $(ct/2)^2 = L^2 + (vt/2)^2$. Solve for $t$: $t = \frac{2L/c}{\sqrt{1 - v^2/c^2}}$.

## Try it

1. Why does a moving light clock tick slower?
2. Find $\gamma$ at $0.6c$.
3. A clock moving at $0.6c$ shows 10 minutes. How long do you measure?
4. Is the moving clock "broken"?

??? note "Answers"
    1. Its light takes a longer path, but still at speed $c$, so each tick takes longer.
    2. $\sqrt{1 - 0.36} = 0.8$, so $\gamma = 1.25$.
    3. $1.25 \times 10 = 12.5$ minutes.
    4. No. To anyone moving with it, it ticks normally. It is time itself that is measured differently.

## Common mistake

**"Only light clocks slow down."** If a moving wristwatch kept a different time from a moving light clock beside it,
the crew could tell they were moving. Einstein's first idea says they cannot. So all clocks slow together.

## Where it leads

- Back: [Light speed is the same for all](01-light-speed-is-the-same-for-all.md) · Next: [Muons](03-muons.md)
- [Level 7 page](index.md) · [Space and time topic page](../index.md)
- The values of $\gamma$ here are worked out from the formula.
