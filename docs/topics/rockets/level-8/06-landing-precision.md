---
title: "Landing precision"
---

# Landing precision

*Rockets and landing · level 8, lesson 6 of 6*

## A question to start

The rovers of 2004 were aimed at landing ellipses about 80 km long. Curiosity's, in 2012, was about 20 by 7 km.
Perseverance's, in 2021, was about 7.7 by 6.6 km. A city on Mars will need cargo landing within metres of a pad. Where
do the errors come from, and how are they shrinking?

## The idea

A landing ellipse is the area where the lander will come down with high probability (often 99%). Its size comes from
**errors that grow** from the top of the atmosphere to the ground:

1. **Where the capsule enters.** Navigation from Earth fixes the entry point to within a few kilometres, and the entry
   angle to a few hundredths of a degree.
2. **The atmosphere.** Its density on the day, and its winds, change how quickly the capsule slows and how far it flies.
   A density 10% off moves the parachute opening by kilometres.
3. **The aerodynamics.** The capsule's lift and drag are known only to a few per cent.
4. **The parachute.** It drifts with the wind for a minute or two.

**Guided entry** (Curiosity first, at Mars). The capsule's centre of mass is placed off-centre so it flies tilted, with a
little **lift**. By rolling (banking) left and right with small thrusters, it points that lift up, down or sideways to
correct its path as it goes. That shrank the ellipse to about 20 km.

**Terrain-relative navigation** (Perseverance). During the parachute descent, a camera photographs the ground and matches
it to an onboard map made from orbit, fixing the position to within about 40 m. The lander then chose, from a map of
hazards, the safest reachable spot and steered to it on its engines. That let Perseverance be sent to Jezero, a site
scattered with cliffs and boulders that earlier landers could not have risked.

**For a city:** landing next to existing buildings will need:

- beacons or markers on the ground, and lasers or radar to home in on them;
- landing pads, so that engine blast does not throw rocks at nearby buildings (the plume of a large lander can throw
  stones hundreds of metres);
- ships that hover and choose their point at the end, as Apollo 12 did in 1969, landing about 180 m from the Surveyor 3
  probe it was aiming for.

## Worked examples

**1. Ellipse areas.** Treat each ellipse as $\pi ab$ with semi-axes half the lengths: 80 by 12 km gives about 750 km²;
20 by 7, about 110 km²; 7.7 by 6.6, about 40 km². Each generation cut the area by a factor of a few.

**2. A density error.** With $a = \rho v^2/(2\beta)$, a 10% denser atmosphere gives 10% more deceleration all the way down,
so the capsule slows earlier and higher, and comes down short of the aim point.

**3. Drift under the parachute.** A 10 m/s wind for 100 s carries the lander 1 km sideways.

## Try it

1. List four sources of landing error.
2. How does banking a lifting capsule steer it?
3. What does terrain-relative navigation compare, and what does it do with the result?
4. Why does engine blast matter for landing near buildings?
5. Find the area of a landing ellipse 4 km by 2 km.

??? note "Answers"
    1. Entry position and angle, atmospheric density and winds, the capsule's aerodynamics, and parachute drift.
    2. Rolling changes the direction of its lift vector: lift up flies farther, lift down shorter, lift sideways moves the
       path sideways.
    3. Camera pictures of the ground against an onboard map; it finds its position, then picks a safe spot and steers to it.
    4. The engines can blast loose rocks and dust at high speed for hundreds of metres; pads and distance protect buildings.
    5. $\pi \times 2 \times 1 = 6.3$ km².

## Common mistake

**Thinking the ellipse is where the lander "aims".** It aims for the centre. The ellipse is the spread of where it might
end up, given the errors; mission planners need the whole ellipse to be safe.

## Where it leads

- Back: [Nuclear and electric propulsion](05-nuclear-and-electric.md) · [Level 8 page](index.md) · [Rockets and landing topic page](../index.md)
- The landing step by step: [Seven minutes](../level-4/04-seven-minutes.md). Mission facts from NASA:
  [Curiosity](https://science.nasa.gov/mission/msl-curiosity/), [Perseverance](https://science.nasa.gov/mission/mars-2020-perseverance/).
- The orbits side of mission design: [Gravity and orbits, level 8](../../gravity/level-8/index.md).
