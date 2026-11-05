---
title: "Parachutes and terminal speed"
---

# Parachutes and terminal speed

*Rockets and landing · level 7, lesson 3 of 6*

## A question to start

How big would a parachute have to be to land a 1,000 kg rover on Mars at 5 m/s, with no rockets at all? And how fast does
a 1,000 kg load come down under a parachute the size of Perseverance's?

## The idea

At terminal speed, drag balances weight:

$$\tfrac12\rho v_t^2 C_d A = mg \qquad\Rightarrow\qquad v_t = \sqrt{\frac{2mg}{\rho C_d A}} = \sqrt{\frac{2\beta g}{\rho}}.$$

**Perseverance's parachute**, 21.5 m across ($A = 363$ m²), with $C_d = 0.6$ and a 1,000 kg load in air of 0.020 kg/m³:

$$v_t = \sqrt{\frac{2 \times 1000 \times 3.71}{0.020 \times 0.6 \times 363}} = \sqrt{\frac{7420}{4.36}} = 41 \text{ m/s}.$$

That is about 150 km/h, with only 1,000 kg under the parachute. The real lander under it, with its rover, descent
stage, fuel and backshell, was much heavier, and it was still coming down at about 90 m/s (320 km/h) when it cut the
parachute loose at about 2 km up.

**Sizing for a gentle landing.** Turn the formula round:

$$A = \frac{2mg}{\rho C_d v_t^2}.$$

For 1,000 kg at 5 m/s: $A = 7420/(0.020 \times 0.6 \times 25) = 24{,}700$ m², a parachute about **180 m across**, wider than
one and a half football pitches are long. It could never be packed, carried and opened. Area grows with $1/v_t^2$: to
halve the landing speed takes four times the area.

**Not at terminal speed.** A parachute opened high up, at Mach 1.7, has far more speed than its terminal speed, and spends
its time slowing towards it while the air thickens. In Mars's thin air there is often not enough height to reach it.
Engineers fly the descent step by step on a computer, with $\rho$, $C_d$ and $g$ changing all the way.

**The opening shock.** A supersonic parachute fills in a fraction of a second. Perseverance's was built to take a load of
about 290 kN (the weight of 30 tonnes on Earth) as it snapped open.

## Worked examples

**1. On Earth instead.** The same 1,000 kg under the same parachute at sea level: $v_t = \sqrt{2 \times 1000 \times 9.81/
(1.225 \times 0.6 \times 363)} = \sqrt{73.6} = 8.6$ m/s.

**2. The ratio.** $v_{t,\text{Mars}}/v_{t,\text{Earth}} = \sqrt{(g_M/g_E)(\rho_E/\rho_M)} = \sqrt{0.378 \times 61} = 4.8$.

**3. A crew lander.** 40 t under three parachutes of 30 m each ($A = 2{,}120$ m²), $C_d = 0.6$:
$v_t = \sqrt{2 \times 40{,}000 \times 3.71/(0.020 \times 0.6 \times 2120)} = \sqrt{11{,}670} = 108$ m/s. Huge parachutes, and
still nearly 400 km/h: the engines must do the rest.

## Try it

1. Find $v_t$ for a 500 kg load under a 15 m parachute on Mars ($C_d = 0.6$, $\rho = 0.020$).
2. What parachute area lands 500 kg at 10 m/s on Mars?
3. Show that $v_t = \sqrt{2\beta g/\rho}$ with $\beta = m/(C_d A)$.
4. Use the [parachute simulator](../../../sims.md#a-parachute-in-thin-air) to find the width that brings 1,000 kg down at
   about 25 m/s on Mars.
5. Why can't Mars landers rely on parachutes alone?

??? note "Answers"
    1. $A = 177$ m²: $v_t = \sqrt{3710/(0.020 \times 0.6 \times 177)} = \sqrt{1747} = 42$ m/s.
    2. $A = 2 \times 500 \times 3.71/(0.020 \times 0.6 \times 100) = 3{,}090$ m² (about 63 m across).
    3. $2mg/(\rho C_d A) = 2(m/(C_d A))g/\rho = 2\beta g/\rho$.
    4. About 35 m wide: $A = 7420/(0.012 \times 625) = 989$ m², $D = 35.5$ m.
    5. A parachute big enough for a safe landing would be far too large and heavy to carry and open.

## Common mistake

**Assuming the lander reaches terminal speed.** In Mars's thin air, a lander often runs out of height while still faster
than its terminal speed. That is another reason the last part is done on rockets.

## Where it leads

- Back: [Thin air](02-thin-air.md) · Next: [Entry heating](04-entry-heating.md)
- [Level 7 page](index.md) · [Rockets and landing topic page](../index.md)
- The same formula for falling bodies: [Terminal velocity](../../gravity/level-5/05-terminal-velocity.md). Parachute facts:
  [NASA, Mars 2020 Perseverance](https://science.nasa.gov/mission/mars-2020-perseverance/).
