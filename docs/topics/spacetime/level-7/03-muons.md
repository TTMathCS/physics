---
title: "Muons"
---

# Muons

*Space and time · level 7, lesson 3 of 6*

## A question to start

Muons are made about 15 km up, and they decay in about 2.2 millionths of a second. Even at the speed of light, that is
only 660 m. So how do so many reach the ground?

## The idea

When cosmic rays hit the top of the atmosphere, they make showers of particles. Many of them are **muons**, heavy
cousins of the electron. At rest, a muon lives on average **2.2 µs** before it decays.

Most muons are made at around **15 km** up. Even moving at nearly $c$, a muon covers only about 660 m in 2.2 µs. Without
relativity, almost none would get down to sea level. Yet about **1 muon per square centimetre per minute** arrives.

The answer is time dilation. Muons move so fast that, from the ground, their clocks run many times slower. Their
lifetime, as we measure it, stretches to tens of microseconds: enough to cross the atmosphere.

In 1977, at CERN, muons were kept going round a ring at $\gamma = 29.33$. Their measured lifetime was **64.4 µs**,
29.33 times their lifetime at rest, just as relativity predicts.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A muon made 15 kilometres up falls toward the ground. Without time dilation it would decay after about 660 metres, high in the air. With time dilation it reaches the ground.">
  <rect x="0" y="130" width="330" height="20" fill="#5aa0d8" opacity=".4"/>
  <g fill="#d86a3a" stroke="currentColor"><circle cx="80" cy="15" r="5"/><circle cx="230" cy="15" r="5"/></g>
  <line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" stroke-width="2"/><text x="86" y="45" font-size="16" fill="currentColor">×</text>
  <line x1="230" y1="20" x2="230" y2="128" stroke="currentColor" stroke-width="2"/><path d="M225 120 l5 10 l5 -10 z" fill="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="10" y="70">no time dilation:</text><text x="10" y="84">decays after 660 m</text><text x="245" y="70">with it:</text><text x="245" y="84">reaches</text><text x="245" y="98">the ground</text><text x="130" y="15">15 km up</text><text x="130" y="145">sea level</text></g>
</svg>
</div>

## Worked examples

**1. The trip time.** 15 km at nearly $c$: $15{,}000 \div 300{,}000{,}000 = 50$ µs. That is about 23 lifetimes at rest.
The fraction left would be about $e^{-23}$: roughly one in ten billion.

**2. With $\gamma = 10$.** The lifetime we measure is $10 \times 2.2 = 22$ µs. Now 50 µs is only about 2.3 lifetimes, and
$e^{-2.3} \approx 0.1$: about one in ten survives.

**3. The CERN check.** $29.33 \times 2.2 \approx 64.5$ µs, close to the measured 64.4 µs.

## Try it

1. What is a muon's lifetime at rest?
2. How far would a muon go in that time at nearly $c$?
3. Why do muons reach the ground?
4. A muon has $\gamma = 20$. How long does it live, as measured from the ground?

??? note "Answers"
    1. About 2.2 µs.
    2. About 660 m.
    3. Time dilation: their clocks run slow as seen from the ground, so they live long enough to cross the air.
    4. $20 \times 2.2 = 44$ µs.

## Common mistake

**"The muons are just faster than light."** They move at just under $c$. What changes is how long they live, as seen
from the ground.

## Where it leads

- Back: [Time dilation](02-time-dilation.md) · Next: [Length contraction](04-length-contraction.md)
- [Level 7 page](index.md) · [Space and time topic page](../index.md)
- Sources: Berkeley Lab's [cosmic ray muons page](https://cosmic.lbl.gov/SKliewer/Cosmic_Rays/Muons.htm) (height, flux)
  and Bailey and others, [the CERN muon storage ring result](https://www.nature.com/articles/268301a0) (Nature, 1977).
- Where cosmic rays come from: [Cosmic rays](../../radiation/level-5/05-cosmic-rays.md).
