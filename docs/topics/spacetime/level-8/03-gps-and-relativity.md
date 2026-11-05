---
title: "GPS and relativity"
---

# GPS and relativity

*Space and time · level 8, lesson 3 of 6*

## A question to start

Your phone finds where you are from the signals of satellites 20,000 km up. Why would it be kilometres out within a day
if nobody had allowed for Einstein?

## The idea

A GPS receiver works out its position from the times signals take to arrive from several satellites. Light goes 30 cm in
a nanosecond, so the satellite clocks must agree to within nanoseconds.

Each satellite orbits about **20,000 km** up, at about 14,000 km/h, once every 12 hours or so. Two effects change its
clock rate, as seen from the ground:

- **Speed** (special relativity): the moving clock runs slow, by about **7 µs a day**.
- **Height** (general relativity): the clock sits higher in Earth's gravity, so it runs fast, by about **45 µs a day**.

Together the satellite clocks run fast by about **38 µs a day**. The clocks are adjusted for this. Without it, positions
would be wrong after only about 2 minutes, and errors would grow by about 10 km every day.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Earth with a GPS satellite in a high orbit. Labels give the two effects on its clock: speed makes it 7 microseconds a day slow, height makes it 45 microseconds a day fast. The total is 38 microseconds a day fast.">
  <circle cx="80" cy="70" r="30" fill="#5aa0d8" stroke="currentColor"/>
  <circle cx="80" cy="70" r="62" fill="none" stroke="currentColor" stroke-dasharray="4 4"/>
  <rect x="135" y="38" width="12" height="10" fill="#cfc8bf" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="165" y="40">speed: 7 µs a day slow</text><text x="165" y="60">height: 45 µs a day fast</text><text x="165" y="85">total: 38 µs a day fast</text><text x="165" y="115">orbit about 20,000 km up</text></g>
</svg>
</div>

## Worked examples

**1. The speed effect.** $v \approx 3{,}870$ m/s. $\frac{v^2}{2c^2} = \frac{1.50 \times 10^7}{1.80 \times 10^{17}} \approx 8.3 \times 10^{-11}$.
Times 86,400: about 7.2 µs a day slow.

**2. The height effect.** Earth's $GM = 3.986 \times 10^{14}$ m³/s². From the ground ($R = 6.371 \times 10^6$ m) to the
orbit ($r = 2.657 \times 10^7$ m from the centre):
$\frac{GM}{c^2}\left(\frac{1}{R} - \frac{1}{r}\right) \approx 4.43 \times 10^{-3} \times 1.19 \times 10^{-7} \approx 5.3 \times 10^{-10}$.
Times 86,400: about 45.7 µs a day fast.

**3. The position error.** 38 µs times the speed of light: $38 \times 10^{-6} \times 3 \times 10^8 \approx 11{,}000$ m, about
11 km in a day.

## Try it

1. Which effect makes GPS clocks run slow? Which makes them run fast?
2. Which is bigger?
3. Why do nanoseconds matter for GPS?
4. A navigation satellite clock is out by 1 µs. How big a position error could that give?

??? note "Answers"
    1. Speed makes them slow; being higher in Earth's gravity makes them fast.
    2. The height effect, about 45 µs a day against 7.
    3. Light goes 30 cm a nanosecond, so a few nanoseconds of error is a metre of position error.
    4. About $10^{-6} \times 3 \times 10^8 = 300$ m.

## Common mistake

**Using the plain $g h$ rule for 20,000 km.** Gravity weakens a lot over that height. Use $\frac{GM}{c^2}\left(\frac{1}{R} - \frac{1}{r}\right)$
instead.

## Where it leads

- Back: [Gravity slows clocks](02-gravity-slows-clocks.md) · Next: [The bending of light](04-the-bending-of-light.md)
- [Level 8 page](index.md) · [Space and time topic page](../index.md)
- Sources: Richard Pogge (Ohio State University), [Real-world relativity: the GPS navigation system](https://www.astronomy.ohio-state.edu/pogge.1/Ast162/Unit5/gps.html),
  and NASA's [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) ($GM$ and radius).
