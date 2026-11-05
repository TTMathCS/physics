---
title: "Measuring wind speed"
---

# Measuring wind speed

*Air and fluids · level 6, lesson 4 of 6*

## A question to start

An aircraft measures its airspeed with a small tube pointing forward into the wind. How can a tube measure speed?

## The idea

Air that rushes straight into the open end of a forward-facing tube is brought to a stop. By Bernoulli's principle, its
pressure rises by the dynamic pressure. A second opening on the side feels only the ordinary pressure of the passing air.
The difference is

$$\Delta p = \tfrac12 \rho v^2 \quad\Rightarrow\quad v = \sqrt{\frac{2\,\Delta p}{\rho}}.$$

This is a **Pitot tube**. To get the speed from it, you must know the air's density.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A Pitot tube pointing into the wind. Air stops at the front opening, where the pressure is highest. A side opening feels the ordinary pressure. A gauge between them reads the difference.">
  <g stroke="#5aa0d8" stroke-width="2"><line x1="10" y1="40" x2="60" y2="40"/><line x1="10" y1="60" x2="60" y2="60"/><line x1="10" y1="80" x2="60" y2="80"/></g>
  <rect x="80" y="54" width="170" height="12" fill="#cfc8bf" stroke="currentColor"/><circle cx="80" cy="60" r="3" fill="#d86a3a"/><circle cx="160" cy="54" r="3" fill="#5aa0d8"/>
  <rect x="235" y="66" width="30" height="40" fill="none" stroke="currentColor"/><path d="M240 100 L240 84 L260 84 L260 76" fill="none" stroke="#d86a3a" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="10" y="25">wind</text><text x="60" y="100">front: air stops,</text><text x="60" y="113">high pressure</text><text x="140" y="40">side: ordinary</text><text x="270" y="92">gauge</text></g>
</svg>
</div>

| Speed for a 50 Pa reading | Mars | Earth |
| --- | --- | --- |
| Air density | 0.016 kg/m³ | 1.217 kg/m³ |
| Wind speed | 79 m/s | 9.1 m/s |

On Mars, the same pressure reading means a far faster wind, and an everyday breeze gives only a fraction of a pascal.
That is why Mars wind sensors must be very sensitive. Perseverance's weather station, MEDA, measured a 5.7 m/s wind just
before a dust devil passed over the rover.

## Worked examples

**1. Earth, 50 Pa.** $v = \sqrt{2 \times 50/1.217} = \sqrt{82.2} = 9.1$ m/s.

**2. Mars, 50 Pa.** $v = \sqrt{2 \times 50/0.016} = \sqrt{6250} = 79$ m/s.

**3. MEDA's 5.7 m/s wind.** $\Delta p = \tfrac12 \times 0.016 \times 5.7^2 = 0.26$ Pa: about 2.6 millionths of Earth's
sea-level air pressure.

## Try it

1. What does a Pitot tube measure directly?
2. A Pitot tube on Earth reads 200 Pa. Find the airspeed.
3. The same reading on Mars. Find the airspeed.
4. Why must a pilot's airspeed reading be corrected at high altitude?

??? note "Answers"
    1. The difference between the stopped-air pressure and the ordinary pressure.
    2. $\sqrt{400/1.217} = 18$ m/s.
    3. $\sqrt{400/0.016} = 158$ m/s.
    4. The air is less dense up there, so the same pressure reading means a faster speed.

## Common mistake

**Forgetting the square root.** Doubling the pressure reading does not double the speed: it multiplies it by
$\sqrt2 \approx 1.41$.

## Where it leads

- Back: [Bernoulli's principle](03-bernoulli-principle.md) · Next: [How a wing lifts](05-how-a-wing-lifts.md)
- [Level 6 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html),
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html), and MEDA's wind in the
  [sound of a Martian dust devil](https://www.nature.com/articles/s41467-022-35100-z).
