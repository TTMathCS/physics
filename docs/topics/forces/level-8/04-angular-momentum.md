---
title: "Angular momentum"
---

# Angular momentum

*Forces and motion · level 8, lesson 4 of 6*

## A question to start

A skater pulls her arms in and spins faster. A crew on Mars wants to start a big spinning room turning. The planet Mars
has been spinning for four billion years. What is the quantity that all three have, and when does it stay the same?

## The idea

The **angular momentum** of a spinning object is

$$L = I\omega.$$

The rotational second law can be written $\tau_\text{net} = \Delta L/\Delta t$. So with **no net outside torque**,
angular momentum is **conserved**: $I\omega$ stays the same.

- **The skater.** Pulling her arms in cuts $I$, so $\omega$ rises to keep $I\omega$ fixed.
- **Starting a spinning room.** A motor that turns the room pushes back on its base just as hard. If the base were free,
  it would turn the other way. On Mars the base is fixed to the ground, so the planet takes the opposite angular
  momentum; it is far too big to notice. In space, a station has to spin up with thrusters, or a counter-spinning wheel.
- **Spacecraft pointing.** Many spacecraft turn by spinning internal **reaction wheels**: spin a wheel one way and the
  craft turns the other way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A skater from above, arms out and spinning slowly, then arms in and spinning fast.">
  <circle cx="80" cy="75" r="14" fill="#eea66f" stroke="currentColor"/><line x1="20" y1="75" x2="140" y2="75" stroke="currentColor" stroke-width="5"/>
  <circle cx="250" cy="75" r="14" fill="#eea66f" stroke="currentColor"/><line x1="236" y1="75" x2="264" y2="75" stroke="currentColor" stroke-width="5"/>
  <path d="M80 25 a50 50 0 0 1 45 25" fill="none" stroke="#5aa0d8" stroke-width="2"/><path d="M120 44 l7 10 l3 -12 z" fill="#5aa0d8"/>
  <path d="M250 45 a30 30 0 0 1 27 15 M250 105 a30 30 0 0 1 -27 -15" fill="none" stroke="#5aa0d8" stroke-width="2"/>
  <g font-size="12" fill="currentColor"><text x="35" y="130">arms out: big I, slow</text><text x="200" y="130">arms in: small I, fast</text></g>
</svg>
</div>

**The spin of a planet.** For a planet, $I$ is written as $kMR^2$, with $k = 0.4$ for a ball of even density and less if
heavy matter is concentrated in the middle. NASA's fact sheets give the measured values:

| | Mars | Earth |
| --- | --- | --- |
| Moment of inertia factor $k = I/MR^2$ | 0.366 | 0.331 |
| Mass | $6.42 \times 10^{23}$ kg | $5.97 \times 10^{24}$ kg |
| Mean radius | 3,390 km | 6,371 km |
| $\omega$ | $7.09 \times 10^{-5}$ rad/s | $7.29 \times 10^{-5}$ rad/s |
| Angular momentum $L = kMR^2\omega$ | $1.9 \times 10^{32}$ kg m²/s | $5.8 \times 10^{33}$ kg m²/s |

Mars's $k$ is closer to 0.4 than Earth's: its iron-rich core holds a smaller share of its mass, so its mass is more
evenly spread.

## Worked examples

**1. The skater.** $I = 3.0$ kg m², $\omega = 4$ rad/s, arms out. Arms in, $I = 1.2$ kg m². New $\omega = 3.0 \times 4
/ 1.2 = 10$ rad/s.

**2. Mars's angular momentum.** $0.366 \times 6.42\times10^{23} \times (3.39\times10^6)^2 \times 7.09\times10^{-5} =
1.9\times10^{32}$ kg m²/s.

**3. A reaction wheel.** A 5 kg wheel with $I = 0.05$ kg m² spins up to 600 rad/s, $L = 30$ kg m²/s. A spacecraft with
$I = 1{,}500$ kg m² turns the other way at $30/1500 = 0.02$ rad/s, about 1.1° a second.

## Try it

1. When is angular momentum conserved?
2. A diver with $I = 12$ kg m² spins at 2 rad/s and tucks to $I = 4$ kg m². Find the new $\omega$.
3. What does a $k$ of 0.366 tell you about the inside of Mars, compared with a uniform ball?
4. A motor in a free-floating space station spins a room one way. What happens to the rest of the station?

??? note "Answers"
    1. When there is no net outside torque.
    2. $12 \times 2 / 4 = 6$ rad/s.
    3. It is a little less than 0.4, so the mass is somewhat concentrated towards the centre: there is a dense core.
    4. It starts turning the other way, so the total angular momentum stays zero.

## Common mistake

**"Spinning faster means energy was conserved."** For the skater, angular momentum is conserved but kinetic energy is
not: $\tfrac12 I\omega^2 = \tfrac12 L\omega$ goes up as $\omega$ does. The extra energy comes from the work of pulling
the arms in.

## Where it leads

- Back: [Turning faster: τ = Iα](03-angular-acceleration.md) · Next: [Stress and strain](05-stress-and-strain.md)
- [Level 8 page](index.md) · [Forces and motion topic page](../index.md)
- The values: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). How tides slowly change spins:
  [The fate of Phobos](../../gravity/level-8/05-the-fate-of-phobos.md).
