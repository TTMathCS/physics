---
title: "Clocks on a trip to Mars"
---

# Clocks on a trip to Mars

*Space and time · level 7, lesson 6 of 6*

## A question to start

A crew flies to Mars and back. Their speeds are tiny next to $c$. Do their clocks still come home behind?

## The idea

For speeds much less than $c$, the Lorentz factor is very close to 1. A handy shortcut:

$$\gamma - 1 \approx \frac{v^2}{2c^2}.$$

So a clock moving at $v$ loses about $\frac{v^2}{2c^2}$ of every second. The amounts are tiny, but atomic clocks can
measure them.

Planets move too. Measured from the Sun, Earth moves faster than Mars, so from speed alone Earth's clocks run a little
slower than Mars's:

| Speed round the Sun | Mars | Earth |
| --- | --- | --- |
| Average speed | 24.1 km/s | 29.8 km/s |
| Clock loss from that speed, each day | about 279 µs | about 427 µs |

That is only part of the story. Gravity changes clock rates too, and the Sun's gravity is weaker at Mars. Level 8 adds
that part.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="Two clocks after a day: the Earth clock has lost 427 microseconds from its speed round the Sun, and the Mars clock 279 microseconds.">
  <circle cx="90" cy="55" r="35" fill="none" stroke="#5aa0d8" stroke-width="3"/><circle cx="240" cy="55" r="35" fill="none" stroke="#d86a3a" stroke-width="3"/>
  <g stroke="currentColor" stroke-width="2"><line x1="90" y1="55" x2="90" y2="27"/><line x1="240" y1="55" x2="240" y2="27"/></g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="90" y="105">Earth: 29.8 km/s</text><text x="90" y="118">loses 427 µs a day</text><text x="240" y="105">Mars: 24.1 km/s</text><text x="240" y="118">loses 279 µs a day</text></g>
</svg>
</div>

## Worked examples

**1. Earth's loss.** $v = 29{,}800$ m/s. $\frac{v^2}{2c^2} = \frac{8.88 \times 10^8}{1.80 \times 10^{17}} \approx 4.94 \times 10^{-9}$.
Times 86,400 s: about 427 µs a day.

**2. The difference.** $427 - 279 = 148$ µs a day, in Mars's favour, from speed alone.

**3. A made-up trip.** Suppose a crew's speed relative to Earth averages 20 km/s for 200 days.
$\frac{(20{,}000)^2}{2 \times (3 \times 10^8)^2} \approx 2.2 \times 10^{-9}$. Times $200 \times 86{,}400 \approx 1.73 \times 10^7$ s:
about 0.04 s. They come home about 40 milliseconds "younger", from speed alone.

## Try it

1. What is the shortcut for $\gamma - 1$ at low speed?
2. Why does Earth lose more time from speed than Mars?
3. Find the loss per day for a clock moving at 7.7 km/s, the speed of a space station in low orbit.
4. Is 40 milliseconds something the crew would notice?

??? note "Answers"
    1. $\gamma - 1 \approx \frac{v^2}{2c^2}$.
    2. It moves faster round the Sun.
    3. $\frac{(7{,}700)^2}{2 \times (3 \times 10^8)^2} \approx 3.3 \times 10^{-10}$; times 86,400: about 28 µs a day.
    4. No. Only atomic clocks could measure it.

## Common mistake

**"Relativity only matters near light speed."** It matters whenever clocks are precise enough. Atomic clocks notice
differences of a billionth of a second.

## Where it leads

- Back: [Nothing goes faster than light](05-nothing-goes-faster-than-light.md) · Next level: [Level 8: Gravity and time](../level-8/index.md)
- [Level 7 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA's [planetary fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/) (orbital speeds); the clock
  losses are worked out from it.
