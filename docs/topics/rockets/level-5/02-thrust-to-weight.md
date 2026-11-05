---
title: "Thrust-to-weight ratio"
---

# Thrust-to-weight ratio

*Rockets and landing · level 5, lesson 2 of 6*

## A question to start

A rocket built to leave Mars has a thrust-to-weight ratio of 1.5 when it sits on its pad on Mars. Could it lift off from
Earth?

## The idea

The **thrust-to-weight ratio** (TWR) is

$$\text{TWR} = \frac{T}{mg}.$$

It tells you at a glance what the engines can do:

- TWR $> 1$: the rocket can lift off or climb.
- TWR $= 1$: it can hover.
- TWR $< 1$: it cannot leave the ground (though it can still speed up in space, where weight does not hold it back).

**Starting acceleration.** For vertical flight, $ma = T - mg$, so

$$a = g\,(\text{TWR} - 1).$$

A rocket with TWR 1.3 on Earth starts upwards at $9.81 \times 0.3 = 2.9$ m/s².

**On another planet.** TWR depends on $g$. The same rocket has

$$\text{TWR}_\text{Mars} = \text{TWR}_\text{Earth} \times \frac{g_E}{g_M} = 2.64 \times \text{TWR}_\text{Earth}.$$

So the Mars rocket in the question, at 1.5 on Mars, has $1.5/2.64 = 0.57$ on Earth: it could not lift off from home.

| A rocket with $T/m$ = 15 m/s² | Mars | Earth | Moon |
| --- | --- | --- | --- |
| TWR | 4.0 | 1.5 | 9.3 |
| Starting acceleration upwards | 11.3 m/s² | 5.2 m/s² | 13.4 m/s² |

**Why not a huge TWR?** Bigger engines are heavier, and a very high TWR crushes the crew and payload with acceleration.
Launchers on Earth usually start around 1.2 to 1.5; upper stages, already in space, often have TWR below 1. Landers
need TWR a bit above 1 so they can slow down, and must be able to throttle down to hover.

## Worked examples

**1. Saturn V.** $T = 34$ MN, $m = 2.97 \times 10^6$ kg: TWR $= 34\times10^6 / (2.97\times10^6 \times 9.81) = 1.17$;
$a = 9.81 \times 0.17 = 1.7$ m/s².

**2. The Apollo lunar module's ascent stage.** Thrust about 16 kN, mass about 4,700 kg, on the Moon: TWR
$= 16{,}000/(4{,}700 \times 1.62) = 2.1$. The same stage on Mars: $16{,}000/(4{,}700 \times 3.71) = 0.92$: it could not
have left Mars.

**3. A throttling lander.** A 1,000 kg lander on Mars must hover. It needs $T = 3{,}710$ N. If its engines can give
between 2,000 and 12,000 N, it can hover, slow down hard, or fall a little faster.

## Try it

1. A rocket on Earth has TWR 1.4. Find its starting acceleration.
2. The same rocket on Mars: find its TWR and starting acceleration.
3. A lander of 3,000 kg must be able to decelerate at 2 m/s² while descending on Mars. What thrust does it need?
4. Why do upper stages not need TWR above 1?
5. A Mars ascent rocket must lift 20 t from the surface with TWR 1.3 on Mars. What thrust does it need?

??? note "Answers"
    1. $9.81 \times 0.4 = 3.9$ m/s².
    2. TWR $= 1.4 \times 2.64 = 3.7$; $a = 3.71 \times 2.7 = 10.0$ m/s².
    3. $T = m(g + a) = 3000 \times 5.71 = 17{,}100$ N.
    4. They fire already in space, moving sideways near orbital speed; they do not have to hold themselves up against
       gravity as at lift-off.
    5. $T = 1.3 \times 20{,}000 \times 3.71 = 96{,}500$ N, about 97 kN.

## Common mistake

**Thinking TWR is a property of the engine alone.** It depends on the whole mass and on the planet's $g$. As propellant
burns, $m$ falls and TWR rises; on another planet it changes by the ratio of the $g$ values.

## Where it leads

- Back: [F = ma](01-f-equals-ma.md) · Next: [Momentum](03-momentum.md)
- [Level 5 page](index.md) · [Rockets and landing topic page](../index.md)
- The lander's last seconds: [Supersonic retropropulsion](../level-7/05-supersonic-retropropulsion.md).
