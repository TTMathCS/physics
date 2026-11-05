---
title: "Flywheels"
---

# Flywheels

*Energy and power · level 7, lesson 4 of 6*

## A question to start

A heavy wheel spun fast holds energy, and gives it back as it slows. Would a flywheel store as much on Mars as on Earth?

## The idea

A spinning wheel has **rotational kinetic energy**

$$E = \tfrac12 I\omega^2,$$

where $\omega$ is its angular speed in radians per second and $I$ its moment of inertia. For a solid disc of mass $m$
and radius $r$, $I = \tfrac12 mr^2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A disc of radius r spinning at angular speed omega, mounted on an axle inside a sealed case with the air pumped out.">
  <rect x="80" y="10" width="170" height="130" rx="12" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
  <circle cx="165" cy="75" r="50" fill="#5aa0d8" opacity=".5" stroke="currentColor"/><circle cx="165" cy="75" r="5" fill="currentColor"/>
  <line x1="165" y1="75" x2="215" y2="75" stroke="currentColor"/><path d="M140 20 A58 58 0 0 1 220 50" fill="none" stroke="#d86a3a" stroke-width="2"/>
  <path d="M220 50 l-2 -11 l-7 8 z" fill="#d86a3a"/>
  <g font-size="12" fill="currentColor"><text x="185" y="70">r</text><text x="225" y="40">ω</text><text x="258" y="80">vacuum</text><text x="258" y="95">case</text></g>
</svg>
</div>

Energy grows with $\omega^2$, so doubling the speed stores four times as much. The limit is strength: the faster the rim
moves, the harder the wheel is pulled apart, and a wheel spun too fast bursts. Real flywheels spin in a vacuum, often on
magnetic bearings, to cut friction and air drag. Even so they lose energy over hours, so they suit short jobs: smoothing
power for seconds or minutes, not storing a whole night.

Gravity is not in $\tfrac12 I\omega^2$, so the same flywheel stores the same energy on either planet. What changes is
the load on its bearings:

| A 100 kg disc, radius 0.5 m, at 6,000 rpm | Mars | Earth |
| --- | --- | --- |
| Energy stored | 0.69 kWh | 0.69 kWh |
| Weight the bearings carry | 371 N | 981 N |

## Worked examples

**1. The disc in the table.** $\omega = 6000 \times 2\pi/60 = 628$ rad/s. $I = \tfrac12 \times 100 \times 0.5^2 = 12.5$
kg m². $E = \tfrac12 \times 12.5 \times 628^2 = 2.5\times10^6$ J, which is 0.69 kWh. The rim moves at
$628 \times 0.5 = 314$ m/s.

**2. Per kilogram.** 690 Wh ÷ 100 kg $= 6.9$ Wh/kg, against about 200 for lithium-ion cells. Flywheels win on speed and
on lasting for many charges, not on energy per kilogram.

**3. Power.** Giving out the 2.5 MJ in 60 s is $2.5\times10^6/60 = 41$ kW. A flywheel can be charged and emptied fast,
over and over, without wearing out the way a battery does.

## Try it

1. A ring of mass 50 kg and radius 0.4 m has $I = mr^2$. Find its energy at 300 rad/s.
2. If a flywheel spins three times as fast, how much more energy does it hold?
3. Why do flywheels spin in a vacuum?
4. Why is a flywheel a poor way to store a whole Mars night?

??? note "Answers"
    1. $I = 50 \times 0.16 = 8$ kg m², $E = \tfrac12 \times 8 \times 300^2 = 360{,}000$ J, or 0.1 kWh.
    2. Nine times.
    3. Air drag would turn the stored energy into heat.
    4. It slowly loses energy over hours, and it stores little energy per kilogram.

## Common mistake

**Putting rpm into the formula.** $\omega$ must be in radians per second. Multiply rpm by $2\pi/60$ first.

## Where it leads

- Back: [Hydrogen](03-hydrogen.md) · Next: [Pumped storage](05-pumped-storage.md)
- [Level 7 page](index.md) · [Energy and power topic page](../index.md)
- The moment of inertia: [Moment of inertia](../../forces/level-8/02-moment-of-inertia.md).
