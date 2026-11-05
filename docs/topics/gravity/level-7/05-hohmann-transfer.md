---
title: "Hohmann transfer"
---

# Hohmann transfer

*Gravity and orbits · level 7, lesson 5 of 6*

## A question to start

Why does the trip to Mars take about 7 to 9 months, and not two weeks? Mars is, at its closest, only 56 million km
away. Couldn't a ship just aim at it and go?

## The idea

A ship leaving Earth is already going round the Sun at 29.8 km/s with the Earth. It cannot "go straight to Mars": it is
in orbit round the Sun, and any path it takes will be an orbit too. The cheapest one was worked out by Walter Hohmann in
1925.

The **Hohmann transfer** is half an ellipse that just touches Earth's orbit at its near end (perihelion) and Mars's orbit
at its far end (aphelion).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 260" role="img" aria-label="The Sun in the middle, Earth's orbit as an inner circle and Mars's as an outer circle. A half-ellipse goes from Earth on the right, round the top, to Mars on the left, touching both orbits.">
  <circle cx="160" cy="130" r="70" fill="none" stroke="#5aa0d8" stroke-width="1.5"/>
  <circle cx="160" cy="130" r="107" fill="none" stroke="#d86a3a" stroke-width="1.5"/>
  <circle cx="160" cy="130" r="8" fill="#f2c14e"/>
  <path d="M230 130 A88.5 85 0 0 0 53 130" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/>
  <circle cx="230" cy="130" r="6" fill="#5aa0d8" stroke="currentColor"/><circle cx="53" cy="130" r="5.5" fill="#d86a3a" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="238" y="150">leave Earth: +2.94 km/s</text><text x="8" y="160">arrive at Mars:</text><text x="8" y="174">+2.65 km/s to match it</text><text x="120" y="30">259 days</text></g>
</svg>
</div>

**The shape.** $r_p = 1$ AU, $r_a = 1.524$ AU, so $a = (1 + 1.524)/2 = 1.262$ AU.

**The time.** Half the period: from Kepler's third law, $T = \tfrac12 \times 1.262^{1.5} = \tfrac12 \times 1.418 =
0.709$ years $=$ **259 days**.

**The speeds** (from vis-viva in lesson 4):

| Point | Planet's speed | Transfer orbit's speed | Change needed |
| --- | --- | --- | --- |
| Leaving Earth's orbit | Earth: 29.78 km/s | 32.73 km/s | +2.94 km/s |
| Arriving at Mars's orbit | Mars: 24.13 km/s | 21.48 km/s | +2.65 km/s |

These are speeds relative to the Sun. The ship leaves Earth's neighbourhood with a hyperbolic excess speed of
2.94 km/s and comes into Mars's with 2.65 km/s. Close to the planets, gravity changes how big a burn that takes:

- **Leaving a 300 km Earth orbit:** $\sqrt{10.93^2 + 2.94^2} - 7.73 = 3.59$ km/s (lesson 2).
- **Arriving at Mars:** a ship falling in from far away at 2.65 km/s hits the top of the air at about 5.6 km/s. To
  stop in a low orbit with engines would take about 2.1 km/s; landers instead use the air of Mars as a brake.

**Why not faster?** Faster paths exist: a bigger burn at Earth, an ellipse that reaches past Mars's orbit and crosses it
early. They take more fuel at both ends. Real missions usually pick something between, from about 6 to 9 months:
Perseverance took 203 days.

## Worked examples

**1. The period.** $1.262^3 = 2.010$; $\sqrt{2.010} = 1.418$ years; half is 0.709 years $\times$ 365.25 = 259 days.

**2. The departure burn from a 200 km orbit.** $v_\text{circ} = 7.79$, $v_\text{esc} = 11.01$ km/s.
$\sqrt{11.01^2 + 2.94^2} - 7.79 = 11.40 - 7.79 = 3.61$ km/s.

**3. Earth to Venus.** $a = (1 + 0.723)/2 = 0.862$ AU, $T = \tfrac12 \times 0.862^{1.5} = 0.400$ years $= 146$ days.

## Try it

1. Find the Hohmann transfer time from Earth to Jupiter (5.20 AU).
2. Find the speed change needed at Earth's orbit for that transfer (use vis-viva with $GM_\odot = 1.327\times10^{11}$ km³/s²).
3. Why can't a ship simply point at Mars and fly in a straight line?
4. Why does the ship arrive at Mars's orbit going slower than Mars?
5. A ship takes a Hohmann transfer from a low circular orbit round Mars at 3,690 km to areostationary orbit at 20,430 km.
   How long does it take?

??? note "Answers"
    1. $a = 3.10$ AU, $T = \tfrac12 \times 3.10^{1.5} = \tfrac12 \times 5.46 = 2.73$ years.
    2. $a = 4.64\times10^8$ km. $v^2 = 1.327\times10^{11} \times (2/1.496\times10^8 - 1/4.64\times10^8) = 1.327\times10^{11}
       \times 1.121\times10^{-8} = 1488$, $v = 38.6$ km/s. Change: $38.6 - 29.8 = 8.8$ km/s.
    3. It is moving with Earth at 29.8 km/s round the Sun; every path it can take is an orbit round the Sun.
    4. It slows as it climbs away from the Sun (aphelion is the slowest point), and Mars's circular speed there is higher.
    5. $a = 12{,}060$ km. $T = \pi\sqrt{a^3/GM} = \pi\sqrt{1.754\times10^{12}/42828} = \pi \times 6{,}400 = 20{,}100$ s,
       about 5.6 hours.

## Common mistake

**Using the distance between the planets.** The ship's path is half an orbit round the Sun, nearly 590 million km long,
not the 56 to 400 million km straight-line distance between the planets at any moment.

## Where it leads

- Back: [Vis-viva](04-vis-viva.md) · Next: [Launch windows](06-launch-windows.md): when to leave so Mars is there.
- [Level 7 page](index.md) · [Gravity and orbits topic page](../index.md)
- Try the [launch window simulator](../../../sims.md#launch-window). The full budget: [Delta-v budgets](../level-8/01-delta-v-budgets.md).
