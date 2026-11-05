---
title: "A clock for Mars"
---

# A clock for Mars

*Space and time · level 8, lesson 6 of 6*

## A question to start

Take two perfect atomic clocks, set them together, and put one on Mars. A year later, do they still agree?

## The idea

Each clock is slowed by the gravity it sits in and by how fast it moves. Compared with a clock far from everything and
at rest beside the Sun, a clock loses, each second, about

$$\frac{GM_\odot}{r\,c^2} + \frac{v^2}{2c^2} + \frac{GM}{R\,c^2},$$

from the Sun's gravity at the planet's distance $r$, the planet's speed $v$ round the Sun, and the planet's own gravity
at its surface radius $R$. Mars is farther from the Sun, slower, and smaller than Earth, so every term is smaller there.

| Clock loss each day, compared with a far-off clock | Mars | Earth |
| --- | --- | --- |
| From the Sun's gravity | about 560 µs | about 853 µs |
| From speed round the Sun | about 279 µs | about 427 µs |
| From the planet's own gravity | about 12 µs | about 60 µs |
| Total | about 851 µs | about 1,340 µs |

The difference is about **490 µs a day**: a Mars clock gains on an Earth one. NIST's careful 2025 calculation, which
also allows for the oval orbit and the pull of other bodies, gives **477 µs a day** on average, rising or falling by
up to **226 µs a day** through the Mars year.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A bar chart of daily clock loss. Earth's bar, made of the Sun's gravity, speed and Earth's own gravity, is about 1,340 microseconds. Mars's bar is about 851 microseconds. The gap is about 490 microseconds a day.">
  <g font-size="11" fill="currentColor"><text x="5" y="44">Earth</text><text x="5" y="94">Mars</text></g>
  <rect x="50" y="30" width="167" height="20" fill="#eea66f"/><rect x="217" y="30" width="83" height="20" fill="#5aa0d8"/><rect x="300" y="30" width="12" height="20" fill="#cfc8bf"/>
  <rect x="50" y="80" width="110" height="20" fill="#eea66f"/><rect x="160" y="80" width="54" height="20" fill="#d86a3a"/><rect x="214" y="80" width="2" height="20" fill="#cfc8bf"/>
  <line x1="216" y1="105" x2="312" y2="105" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="55" y="70">Sun's gravity</text><text x="220" y="70">speed</text><text x="318" y="125" text-anchor="end">gap: about 490 µs a day</text><text x="50" y="125">bars to scale</text></g>
</svg>
</div>

## Worked examples

**1. The Sun's gravity at Earth.** $\frac{1.327 \times 10^{20}}{1.496 \times 10^{11} \times 8.988 \times 10^{16}} \approx 9.87 \times 10^{-9}$.
Times 86,400: about 853 µs a day.

**2. Mars's own gravity.** $\frac{4.283 \times 10^{13}}{3.39 \times 10^6 \times 8.988 \times 10^{16}} \approx 1.41 \times 10^{-10}$.
Times 86,400: about 12 µs a day.

**3. A Mars year of drift.** A Mars year is about 687 Earth days. $477 \times 687 \approx 328{,}000$ µs: about a third of
a second. Radio light time is 300 m a microsecond, so uncorrected, that is a navigation error of about 100,000 km.

## Try it

1. Name the three things that slow a clock on a planet.
2. Which term is largest for both planets?
3. Why does the Mars clock gain on the Earth clock?
4. Why does the gain change through the Mars year?

??? note "Answers"
    1. The Sun's gravity, the planet's speed round the Sun, and the planet's own gravity.
    2. The Sun's gravity.
    3. Every term is smaller at Mars, so a Mars clock loses less time than an Earth clock.
    4. Mars's orbit is oval, so its distance from the Sun and its speed both change, and other planets pull on it too.

## Common mistake

**"A Mars clock ticks wrongly."** A clock on Mars keeps perfect local time. It is only when it is compared with Earth
time that the gain shows up. A Mars time standard would need a set rule for converting between the two.

## Where it leads

- Back: [The Shapiro delay](05-the-shapiro-delay.md) · [Level 8 page](index.md) · [Space and time topic page](../index.md)
- Sources: NIST, [What time is it on Mars?](https://www.nist.gov/news-events/news/2025/12/what-time-it-mars-nist-physicists-have-answer)
  (December 2025), and NASA's [Sun fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html) and
  [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
- The same sum in energy terms, with orbits: [Relativity and orbits](../../gravity/level-8/06-relativity-and-orbits.md).
