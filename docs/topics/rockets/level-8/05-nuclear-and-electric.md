---
title: "Nuclear and electric propulsion"
---

# Nuclear and electric propulsion

*Rockets and landing · level 8, lesson 5 of 6*

## A question to start

A chemical engine's exhaust speed is limited by the energy stored in its propellant: about 4.5 km/s at best. Nuclear
thermal engines reach about 9 km/s and ion engines 30 km/s or more. Why don't all Mars ships use them?

## The idea

**Why chemical engines are stuck.** In a chemical engine the propellant is also the energy source. The best reaction,
hydrogen with oxygen, releases about 13 MJ per kg of propellant; if all of it became exhaust kinetic energy,
$v_e = \sqrt{2 \times 13\times10^6} = 5.1$ km/s. Real engines get about 4.5. To go further, the energy must come from
somewhere else.

**Nuclear thermal.** A nuclear reactor heats hydrogen to about 2,500 to 3,000 K and expels it through a nozzle. Light
hydrogen at high temperature gives $v_e \approx 8$ to 9 km/s ($I_{sp}$ about 850 to 900 s), with high thrust. The US
NERVA programme ran test engines on the ground in the 1960s and early 1970s; none has flown. With $v_e = 8.8$ km/s, the
3.6 km/s departure from Earth orbit needs $R = e^{0.41} = 1.51$ instead of 2.65 with methane, but the reactor and its
shielding are heavy, and liquid hydrogen is bulky.

**Electric.** An electric thruster takes energy from solar panels or a reactor and uses electric fields to throw ions out
at 15 to 50 km/s. The catch is **power**. The jet's kinetic power is $\tfrac12 \dot m v_e^2 = \tfrac12 T v_e$, so with an
efficiency $\eta$:

$$T = \frac{2\eta P}{v_e}.$$

Faster exhaust means **less thrust per watt**. With 100 kW, $\eta = 0.6$ and $v_e = 30$ km/s, $T = 2 \times 0.6 \times
10^5 / 30{,}000 = 4$ N. On a 20 t ship, that is an acceleration of 0.0002 m/s²: 1 km/s takes 58 days.

| | Chemical (methane) | Nuclear thermal | Electric (ion or Hall) |
| --- | --- | --- | --- |
| $v_e$ | about 3.7 km/s | about 8 to 9 km/s | 15 to 50 km/s |
| Thrust | very high | high | tiny (newtons) |
| Energy from | the propellant | a reactor | panels or a reactor |
| Burn time for a Mars departure | minutes | tens of minutes | months |
| Flown | yes | tested on the ground only | yes (Dawn, Psyche and many satellites) |

**Choosing.** For cargo that can wait, electric propulsion saves huge amounts of propellant, with slow spirals out of
Earth orbit and into Mars orbit. For people, time matters (radiation, supplies), so high thrust is needed: chemical, or
one day nuclear thermal.

## Worked examples

**1. The chemical limit.** Hydrogen and oxygen give about 13.4 MJ/kg: $v_e \le \sqrt{2.68\times10^7} = 5.2$ km/s.

**2. Propellant for 6 km/s.** Methane ($v_e = 3.7$): $R = e^{1.62} = 5.06$. Nuclear thermal (8.8): $R = 1.98$. Ion (30):
$R = 1.22$.

**3. Thrust per kilowatt.** At $v_e = 20$ km/s and $\eta = 0.6$: $T/P = 2 \times 0.6/20{,}000 = 60$ mN per kW.

## Try it

1. Find the thrust of a 50 kW electric engine with $v_e = 25$ km/s and $\eta = 0.55$.
2. How long would that engine take to give a 10 t ship 2 km/s (ignore the mass change)?
3. Why does a higher $v_e$ give less thrust for the same power?
4. Why is hydrogen used in nuclear thermal engines?
5. Why are electric engines suited to cargo but not (yet) to crews?

??? note "Answers"
    1. $T = 2 \times 0.55 \times 50{,}000/25{,}000 = 2.2$ N.
    2. $a = 2.2 \times 10^{-4}$ m/s²; $t = 2{,}000/2.2\times10^{-4} = 9.1\times10^6$ s, about 105 days.
    3. The jet's power is $\tfrac12 T v_e$; for fixed power, $T \propto 1/v_e$.
    4. Exhaust speed grows as $\sqrt{T/M}$; hydrogen has the lowest molar mass, so it is fastest at a given temperature.
    5. Their thrust is so small that departures and arrivals take months, long for a crew's health and supplies.

## Common mistake

**Thinking higher $I_{sp}$ is always better.** For a fixed power supply, higher $I_{sp}$ means lower thrust and longer trips.
The best engine depends on the power available and the time allowed.

## Where it leads

- Back: [Aerobraking and aerocapture](04-aerobraking-and-aerocapture.md) · Next: [Landing precision](06-landing-precision.md)
- [Level 8 page](index.md) · [Rockets and landing topic page](../index.md)
- Reactors: the [Radiation and the atom](../../radiation/index.md) topic. Dawn's ion engines:
  [NASA, Dawn](https://science.nasa.gov/mission/dawn/).
