---
title: "Motors on Mars"
---

# Motors on Mars

*Electricity and magnetism · level 7, lesson 6 of 6*

## A question to start

Perseverance's top speed is about 152 metres an hour. Ingenuity's rotors spun at about 2,400 turns a minute. Both were
driven by electric motors. How can motors work so slowly and so fast?

## The idea

**The rover.** Each of Perseverance's six wheels has its own motor, and the four corner wheels have steering motors too.
An electric motor runs best spinning fast, so each wheel motor drives the wheel through a **gearbox** that trades speed
for torque: the wheel turns slowly but pushes hard.

**The helicopter.** Ingenuity's two rotors spun in opposite directions, driven by electric motors. Its batteries, charged
by a solar panel, gave about 350 W on average during a flight of up to about 90 seconds.

**The thin air.** A working motor warms up and sheds heat to the air around it. Mars air is so thin that it carries
heat away far more slowly, so motors there shed more of their heat in other ways, mostly by conducting it into the parts
they are fixed to.

| Air around a motor | Mars | Earth |
| --- | --- | --- |
| Density at the surface | about 0.016 kg/m³ | 1.217 kg/m³ |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A small fast-spinning motor drives a large slow wheel through a chain of gears. The motor spins many times for each turn of the wheel.">
  <rect x="20" y="55" width="50" height="30" fill="#cfc8bf" stroke="currentColor"/>
  <circle cx="95" cy="70" r="12" fill="#eea66f" stroke="currentColor"/><circle cx="135" cy="70" r="28" fill="#eea66f" stroke="currentColor"/>
  <circle cx="230" cy="70" r="55" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="230" cy="70" r="10" fill="currentColor"/>
  <line x1="70" y1="70" x2="83" y2="70" stroke="currentColor" stroke-width="3"/><line x1="163" y1="70" x2="220" y2="70" stroke="currentColor" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="20" y="48">fast motor</text><text x="100" y="115">gears</text><text x="200" y="138">slow, strong wheel</text></g>
</svg>
</div>

## Worked examples

**1. The wheel.** The wheels are 52.5 cm across, so each turn rolls $\pi \times 0.525 = 1.65$ m. At 152 m an hour, a
wheel turns $152/1.65 = 92$ times an hour: about 1.5 turns a minute.

**2. The gearbox.** Suppose the motor spins at 5,000 turns a minute. The gears must slow it by $5000/1.5 \approx 3{,}300$
times.

**3. The rotor.** 2,400 turns a minute is 40 a second: $\omega = 40 \times 2\pi = 251$ rad/s. Suppose one rotor's motor
gives 175 W, half the total: its torque is $\tau = P/\omega = 175/251 = 0.70$ N m.

## Try it

1. How many motors does Perseverance use to drive and steer?
2. Why does a wheel motor need a gearbox?
3. How much energy did Ingenuity use in a 90-second flight at 350 W? Give it in joules and in watt-hours.
4. Why is cooling a motor harder on Mars?

??? note "Answers"
    1. Ten: six to drive, four to steer.
    2. Motors run best fast; the gears turn that into a slow, strong turn of the wheel.
    3. $350 \times 90 = 31{,}500$ J, which is $31{,}500/3600 = 8.75$ Wh.
    4. The air is about 75 times less dense, so it carries heat away far more slowly.

## Common mistake

**"Gears give extra power."** Gears trade speed for torque. Apart from a little friction, the power into the gearbox
equals the power out.

## Where it leads

- Back: [Generators and transformers](05-generators-and-transformers.md) · Next level: [Level 8: A planet's shield](../level-8/index.md)
- [Level 7 page](index.md) · [Electricity and magnetism topic page](../index.md)
- The figures: NASA's [Perseverance rover components](https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/),
  [Ingenuity page](https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/) and
  [Mastcam-Z video of the blades spinning](https://science.nasa.gov/photojournal/mastcam-z-captures-ingenuitys-blades-spinning),
  and the [NIST fluid properties](https://webbook.nist.gov/chemistry/fluid/). The rotors themselves:
  [Propellers and rotors](../../air/level-6/06-propellers-and-rotors.md).
