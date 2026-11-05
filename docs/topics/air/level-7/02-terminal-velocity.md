---
title: "Terminal velocity"
---

# Terminal velocity

*Air and fluids · level 7, lesson 2 of 6*

## A question to start

A skydiver on Earth stops speeding up after about 12 seconds and falls at a steady speed. How fast would a skydiver fall
on Mars, where gravity is weaker but the air is much thinner?

## The idea

A falling object speeds up, so its drag grows. Eventually the drag equals the weight, the forces balance, and it stops
speeding up. This top speed is the **terminal velocity**:

$$\tfrac12 \rho v_t^2 C_D A = mg \quad\Rightarrow\quad v_t = \sqrt{\frac{2mg}{\rho C_D A}}.$$

Weaker gravity lowers $v_t$; thinner air raises it. On Mars, the thin air wins by far:

$$\frac{v_\text{Mars}}{v_\text{Earth}} = \sqrt{\frac{g_\text{Mars}}{g_\text{Earth}} \times \frac{\rho_\text{Earth}}{\rho_\text{Mars}}} = \sqrt{0.378 \times 76} \approx 5.4.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Speed against time for a falling skydiver. The curve rises and levels off at the terminal velocity. A second curve, for Mars, rises more slowly but levels off much higher.">
  <line x1="40" y1="125" x2="310" y2="125" stroke="currentColor"/><line x1="40" y1="125" x2="40" y2="10" stroke="currentColor"/>
  <path d="M40 125 Q70 103 140 103 L300 103" fill="none" stroke="#5aa0d8" stroke-width="3"/>
  <path d="M40 125 C120 95 200 30 300 22" fill="none" stroke="#d86a3a" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="150" y="98" font-size="10">Earth: levels off at 51 m/s</text><text x="195" y="72" font-size="10">Mars: heading for 270 m/s</text><text x="250" y="138">time</text><text x="45" y="15">speed</text></g>
</svg>
</div>

| An 80 kg skydiver, $C_D A = 0.5$ m² | Mars | Earth |
| --- | --- | --- |
| Gravity | 3.71 N/kg | 9.81 N/kg |
| Air density at the ground | 0.016 kg/m³ | 1.217 kg/m³ |
| Terminal velocity | 270 m/s | 51 m/s |

## Worked examples

**1. Earth.** $v_t = \sqrt{2 \times 80 \times 9.81/(1.217 \times 0.5)} = \sqrt{2580} = 51$ m/s, about 180 km/h.

**2. Mars.** $v_t = \sqrt{2 \times 80 \times 3.71/(0.016 \times 0.5)} = \sqrt{74{,}200} = 272$ m/s, nearly 1,000 km/h,
faster than the speed of sound in Mars air.

**3. A ping-pong ball** (2.7 g, 4 cm across, $C_D = 0.5$): about 8 m/s on Earth and 45 m/s on Mars.

## Try it

1. What forces balance at terminal velocity?
2. How does terminal velocity change if the area is made four times bigger?
3. A parachute gives an 80 kg skydiver $C_D A = 30$ m². Find the landing speed on Earth and on Mars.
4. Why would a person falling on Mars hit the ground harder than on Earth, even though gravity is weaker?

??? note "Answers"
    1. Weight and drag.
    2. It halves, because $v_t$ goes with $1/\sqrt{A}$.
    3. Earth: $\sqrt{1570/36.5} = 6.6$ m/s. Mars: $\sqrt{594/0.48} = 35$ m/s.
    4. The air is so thin that drag stays small until the speed is very high.

## Common mistake

**"Weaker gravity means a gentler fall."** On Mars, the thin air means drag hardly slows you, so you reach a far higher
speed before the forces balance.

## Where it leads

- Back: [The drag equation](01-the-drag-equation.md) · Next: [Landing on Mars](03-landing-on-mars.md)
- [Level 7 page](index.md) · [Air and fluids topic page](../index.md)
- The figures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). Falling under gravity:
  [Gravity and motion](../../gravity/index.md).
