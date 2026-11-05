---
title: "Thin air"
---

# Thin air

*Rockets and landing · level 7, lesson 2 of 6*

## A question to start

The pressure of Mars's air at the ground is less than 1% of Earth's, but its density is about 1.6% of ours. Why are the
two numbers different? And how does the air change as a lander falls through it?

## The idea

**Density from pressure.** For a gas, $\rho = \dfrac{pM}{RT}$, with $M$ the molar mass and $T$ the temperature in kelvin.

| | Mars | Earth |
| --- | --- | --- |
| Pressure at the ground (mean) | about 610 Pa | 101,325 Pa |
| Main gas | carbon dioxide (95%), $M$ = 44 g/mol | nitrogen and oxygen, $M$ = 29 g/mol |
| Mean temperature at the ground | about 210 K (−63 °C) | about 288 K (15 °C) |
| Density at the ground | about 0.015 to 0.020 kg/m³ | 1.225 kg/m³ |
| Scale height $H$ | about 11 km | about 8.5 km |
| Speed of sound near the ground | about 240 m/s | 343 m/s |

Pressure is 0.6% of Earth's, but the gas is 1.5 times heavier per molecule and about 0.73 times as warm, which together
raise the density ratio to about $0.006 \times 1.5 / 0.73 \approx 1.2\%$ for the mean, and more in cold places and in low
places. Landers often quote 0.020 kg/m³ for low, cold sites.

**With height.** In an atmosphere at a single temperature, density falls exponentially:

$$\rho(h) = \rho_0\, e^{-h/H}, \qquad H = \frac{RT}{Mg}.$$

$H$ is the **scale height**, the height over which the density falls by a factor $e$ (2.72). Mars's $H$ is larger than
Earth's because its gravity is weaker, even though its gas is heavier and colder.

| Height above Mars's datum | 0 km | 10 km | 20 km | 40 km |
| --- | --- | --- | --- | --- |
| $\rho$, model with $\rho_0 = 0.020$, $H = 11.1$ km | 0.020 | 0.0081 | 0.0033 | 0.00054 |

**It changes with the seasons.** Each winter, about a quarter of the air freezes out as carbon dioxide frost and ice on
the winter pole, and the pressure across the planet drops by up to about 25 to 30%. The Viking landers measured the
pressure rising and falling through the Mars year. Landers are designed for the air they will meet in their season and
place.

**Mach number.** $M = v/c$, the speed divided by the speed of sound. Sound is slower in Mars's cold carbon dioxide, so the
same speed is a higher Mach number there: Perseverance's parachute opened at about 420 m/s, about Mach 1.7 or more in that air.

## Worked examples

**1. Scale height.** $H = RT/(Mg) = 8.314 \times 210 / (0.044 \times 3.71) = 10{,}700$ m, close to the 11 km measured.
For Earth: $8.314 \times 288/(0.029 \times 9.81) = 8{,}400$ m.

**2. A low landing site.** Jezero crater lies about 2.6 km below Mars's datum. There, $\rho$ is about $e^{2.6/11.1} =
1.26$ times the datum value. Low sites give a parachute more air to work with, which is why landers prefer them.

**3. Mach number.** A capsule at 1,000 m/s on Mars ($c = 240$) is at Mach 4.2; on Earth ($c = 343$), Mach 2.9.

## Try it

1. Use $\rho = pM/(RT)$ to find the density of Mars air at 600 Pa and 200 K.
2. Find $\rho$ at 30 km above the datum with the model in the table.
3. Why is Mars's scale height larger than Earth's?
4. Why is the speed of sound lower on Mars?
5. Why do landing sites at low elevation help a lander?

??? note "Answers"
    1. $600 \times 0.044/(8.314 \times 200) = 0.0159$ kg/m³.
    2. $0.020 \times e^{-30/11.1} = 0.020 \times 0.067 = 0.0013$ kg/m³.
    3. Its gravity is weaker, which outweighs its heavier, colder gas: $H = RT/(Mg)$.
    4. Its gas is colder and heavier: $c = \sqrt{\gamma RT/M}$ is smaller.
    5. There is more air above the ground, so more time and drag to slow down before reaching it.

## Common mistake

**Using the pressure ratio for drag.** Drag depends on density, not pressure. The 0.6% pressure figure underestimates how
much the air of Mars can do.

## Where it leads

- Back: [The drag equation](01-the-drag-equation.md) · Next: [Parachutes and terminal speed](03-parachute-terminal-speed.md)
- [Level 7 page](index.md) · [Rockets and landing topic page](../index.md)
- Gases and pressure: the [Heat and matter](../../heat/index.md) and [Air and fluids](../../air/index.md) topics.
  Figures from NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
