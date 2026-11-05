---
title: "Gravity losses"
---

# Gravity losses

*Rockets and landing · level 8, lesson 3 of 6*

## A question to start

Orbital speed round Mars is 3.4 km/s, yet a rocket leaving the surface is given a budget of 4.1 km/s. A lander removing
its last 100 m/s may burn propellant worth 200 m/s. Where does the extra go?

## The idea

While a rocket burns, gravity pulls it the whole time. Along the flight path, the equation of motion is

$$\frac{dv}{dt} = \frac{T}{m} - \frac{D}{m} - g\sin\gamma,$$

with $\gamma$ the angle of the path above the horizon and $D$ the drag. The rocket equation gives the first term
integrated, $v_e \ln(m_0/m_1)$. The other two are **losses**:

$$\Delta v_\text{gained} = v_e \ln\frac{m_0}{m_1} - \int \frac{D}{m}\,dt - \int g \sin\gamma\,dt.$$

**Gravity loss**, the last term, is largest when the rocket burns **slowly** and **vertically**. Going straight up for $t$
seconds loses $g t$ of speed. Turning towards the horizon ($\gamma \to 0$) stops the loss, which is why rockets pitch
over early.

**Landing.** A lander falling straight down at $v$ must brake with thrust $T$. Its net deceleration is $T/m - g$, so the
burn takes $t = v/(T/m - g)$ and the engine must supply

$$\Delta v_\text{engine} = v + g t = v\left(1 + \frac{1}{\text{TWR} - 1}\right) = v\,\frac{\text{TWR}}{\text{TWR} - 1}.$$

| Thrust-to-weight on Mars | Burn time to stop from 100 m/s | Engine $\Delta v$ needed |
| --- | --- | --- |
| 1.5 | 54 s | 300 m/s |
| 2 | 27 s | 200 m/s |
| 3 | 13 s | 150 m/s |
| 5 | 6.7 s | 125 m/s |

High thrust and a late, hard burn (a "suicide burn") save propellant, but leave no margin for error. Real landers
compromise, and hovering to pick a spot costs $g = 3.71$ m/s every second.

**Typical losses**:

| Ascent | Ideal orbital speed | Gravity and drag losses | Budget |
| --- | --- | --- | --- |
| Earth to low orbit | 7.8 km/s | about 1.5 km/s (most gravity, some drag) | 9.3 to 9.5 km/s |
| Mars to low orbit | 3.4 to 3.5 km/s | about 0.5 to 0.7 km/s | 4.0 to 4.1 km/s |

(Launching eastwards gains the planet's spin: 0.46 km/s at Earth's equator, 0.24 km/s at Mars's.)

## Worked examples

**1. Hovering.** A lander hovers 20 s on Mars to choose its spot: $3.71 \times 20 = 74$ m/s of $\Delta v$ for nothing but
staying put. With $v_e = 3.7$ km/s, about 2% of its mass in propellant.

**2. The table's first row.** TWR 1.5: $T/m - g = 0.5 \times 3.71 = 1.86$ m/s²; $t = 100/1.86 = 54$ s; $\Delta v = 100 +
3.71 \times 54 = 300$ m/s.

**3. Earth's gravity loss, roughly.** A first stage burning about 160 s at an average $\sin\gamma \approx 0.7$:
$9.8 \times 0.7 \times 160 \approx 1{,}100$ m/s. The upper stage, nearly horizontal, loses a few hundred more.

## Try it

1. Show that $\Delta v_\text{engine} = v\,\text{TWR}/(\text{TWR} - 1)$ for a vertical braking burn.
2. Find the engine $\Delta v$ for stopping from 300 m/s with TWR 2.5 on Mars.
3. Why do rockets turn towards the horizon soon after launch?
4. A Mars ascent rocket has TWR 1.3 at lift-off. Is its gravity loss larger or smaller than one with TWR 2? Why?
5. Why is Mars's ascent budget so much closer to its orbital speed than Earth's?

??? note "Answers"
    1. $t = v/((\text{TWR} - 1)g)$; $\Delta v = v + gt = v(1 + 1/(\text{TWR} - 1)) = v\,\text{TWR}/(\text{TWR}-1)$.
    2. $300 \times 2.5/1.5 = 500$ m/s.
    3. To stop losing speed to gravity: the loss is $g\sin\gamma$ per second, smallest when flying near horizontal.
    4. Larger: it climbs more slowly, so it spends longer fighting gravity on the way up.
    5. Weaker gravity (smaller $g$ in the loss), a shorter burn and almost no drag.

## Common mistake

**Using the rocket equation alone for a launch or a landing.** It gives the speed change with no gravity or drag. Near a
planet, the engines must also make up the losses, which depend on how the burn is flown.

## Where it leads

- Back: [Propellant from Mars](02-propellant-from-mars.md) · Next: [Aerobraking and aerocapture](04-aerobraking-and-aerocapture.md)
- [Level 8 page](index.md) · [Rockets and landing topic page](../index.md)
- Thrust-to-weight: [Thrust-to-weight ratio](../level-5/02-thrust-to-weight.md).
