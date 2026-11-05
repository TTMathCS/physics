---
title: "Bernoulli's principle"
---

# Bernoulli's principle

*Air and fluids · level 6, lesson 3 of 6*

## A question to start

Hold two sheets of paper a few centimetres apart and blow between them. You might expect them to fly apart. Instead,
they move together. Why?

## The idea

As a fluid speeds up into a narrow part of a pipe, something must push it forward. That push comes from a **pressure
difference**: the pressure behind it is higher than the pressure ahead. So where the fluid goes fast, its pressure is
**lower**.

For a fluid that does not squash, flowing smoothly at one height, **Bernoulli's principle** says

$$p + \tfrac12 \rho v^2 = \text{constant along the flow}.$$

The term $\tfrac12 \rho v^2$ is the **dynamic pressure**, the kinetic energy of each cubic metre of fluid. When $v$ goes
up, $p$ comes down by the same amount.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Two sheets of paper hang side by side. Fast air blown between them, shown by arrows, has low pressure. The still air outside has higher pressure and pushes the sheets together.">
  <path d="M120 15 Q130 70 135 125" fill="none" stroke="currentColor" stroke-width="3"/><path d="M210 15 Q200 70 195 125" fill="none" stroke="currentColor" stroke-width="3"/>
  <g stroke="#5aa0d8" stroke-width="2"><line x1="165" y1="10" x2="165" y2="110"/><line x1="155" y1="20" x2="155" y2="100"/><line x1="175" y1="20" x2="175" y2="100"/></g>
  <path d="M159 110 l6 12 l6 -12 z" fill="#5aa0d8"/>
  <g stroke="#d86a3a" stroke-width="3"><line x1="70" y1="70" x2="112" y2="70"/><line x1="260" y1="70" x2="218" y2="70"/></g>
  <path d="M112 64 l10 6 l-10 6 z" fill="#d86a3a"/><path d="M218 64 l-10 6 l10 6 z" fill="#d86a3a"/>
  <g font-size="11" fill="currentColor"><text x="10" y="55">still air:</text><text x="10" y="69">higher p</text><text x="245" y="55">still air:</text><text x="245" y="69">higher p</text><text x="142" y="137">fast air: low p</text></g>
</svg>
</div>

| Pressure drop at 20 m/s, $\tfrac12\rho v^2$ | Mars | Earth |
| --- | --- | --- |
| Air density | 0.016 kg/m³ | 1.217 kg/m³ |
| Drop | 3.2 Pa | 243 Pa |

## Worked examples

**1. Earth air at 20 m/s.** $\tfrac12 \times 1.217 \times 20^2 = 243$ Pa below the still air around it.

**2. Mars air at 20 m/s.** $\tfrac12 \times 0.016 \times 400 = 3.2$ Pa. The same speed makes about 75 times less pressure
difference.

**3. Water in a narrowing pipe.** Water at 2 m/s speeds up to 8 m/s. The pressure drops by
$\tfrac12 \times 1000 \times (8^2 - 2^2) = 30{,}000$ Pa.

## Try it

1. Where a fluid moves faster, is its pressure higher or lower?
2. Find the pressure drop in Earth air moving at 10 m/s.
3. Water flows at 1 m/s at 200,000 Pa, then speeds up to 5 m/s at the same height. Find its new pressure.
4. Why do the sheets of paper move together when you blow between them?

??? note "Answers"
    1. Lower.
    2. $\tfrac12 \times 1.217 \times 100 \approx 61$ Pa.
    3. $200{,}000 - \tfrac12 \times 1000 \times (25 - 1) = 188{,}000$ Pa.
    4. The fast air between them is at lower pressure, so the still air outside pushes them together.

## Common mistake

**"Fast air pushes harder."** Fast air pushes harder on something *in its way*, head on. But its pressure sideways, the
push on the walls it flows along, is lower.

## Where it leads

- Back: [Narrow pipes, fast flow](02-narrow-pipes-fast-flow.md) · Next: [Measuring wind speed](04-measuring-wind-speed.md)
- [Level 6 page](index.md) · [Air and fluids topic page](../index.md)
- The air densities: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). Kinetic energy:
  [Energy and power](../../energy/index.md).
