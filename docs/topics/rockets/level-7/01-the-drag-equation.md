---
title: "The drag equation"
---

# The drag equation

*Rockets and landing · level 7, lesson 1 of 6*

## A question to start

The drag formula $F = \tfrac12\rho v^2 C_d A$ has appeared several times already. Why $v^2$? Why $\rho$ and $A$? Can it be
worked out, rather than just remembered?

## The idea

**A rough derivation.** A body of frontal area $A$ moves at speed $v$ through still air of density $\rho$. In a time $dt$
it sweeps through a volume $Av\,dt$, containing a mass $\rho A v\,dt$ of air. Suppose the body gets that air moving at
about its own speed. Then it gives the air momentum $(\rho A v\,dt)\,v$ in time $dt$, which needs a force

$$F \sim \frac{\rho A v^2\,dt}{dt} = \rho A v^2.$$

So drag goes as density, area and speed **squared**: twice the speed means twice as much air hit per second, each bit
given twice the speed. The real flow is more complicated, so the formula is written with a convenient half and a number
for the shape, the **drag coefficient** $C_d$:

$$F_D = \tfrac12 \rho v^2 C_d A.$$

| Shape | $C_d$ (about) |
| --- | --- |
| Streamlined body | 0.04 |
| Sphere | 0.47 |
| Car | 0.25 to 0.35 |
| Person falling flat | 1.0 |
| Flat plate face-on | 1.3 |
| Entry capsule, blunt cone, at high speed | 1.6 to 1.7 |
| Disk-gap-band parachute (Mars landers) | about 0.4 to 0.6 when supersonic |

For an entry capsule a high $C_d$ is wanted: the more drag, the better.

**The ballistic coefficient.** For a body falling or entering under drag, $F = ma$ gives a deceleration
$a = \tfrac12\rho v^2 C_d A/m$. Collecting the body's own numbers:

$$\beta = \frac{m}{C_d A} \qquad\Rightarrow\qquad a = \frac{\rho v^2}{2\beta}.$$

$\beta$ (kg/m²) says how hard a body is to slow down with air. Low $\beta$ (light, wide) slows high in the air; high
$\beta$ (heavy, compact) plunges deep before slowing. It is the single most important number in Mars landing design.

## Worked examples

**1. Perseverance at entry.** Entry mass about 3,440 kg, heat shield 4.5 m across ($A = 15.9$ m²), $C_d \approx 1.65$:
$\beta = 3440/(1.65 \times 15.9) = 131$ kg/m².

**2. A deceleration.** At 40 km above Mars, where $\rho \approx 0.0005$ kg/m³, at 5,000 m/s: $a = 0.0005 \times 25\times10^6
/(2 \times 131) = 48$ m/s², about 5 g.

**3. A crewed lander.** 40 t, 10 m across, $C_d = 1.5$: $\beta = 40{,}000/(1.5 \times 78.5) = 340$ kg/m², more than twice
Perseverance's. It slows lower down, in thicker air, with less height left (lesson 5).

## Try it

1. A 2 kg sphere of radius 0.1 m: find $\beta$.
2. Find the drag on it at 30 m/s in air of density 1.225 kg/m³.
3. Show that $a = \rho v^2/(2\beta)$.
4. Which slows down higher in the air of Mars, a body with $\beta = 50$ or one with $\beta = 500$?
5. Use the rough derivation to explain why drag goes as $v^2$ and not $v$.

??? note "Answers"
    1. $A = 0.0314$ m²: $\beta = 2/(0.47 \times 0.0314) = 135$ kg/m².
    2. $0.5 \times 1.225 \times 900 \times 0.47 \times 0.0314 = 8.1$ N.
    3. $a = F/m = \tfrac12\rho v^2 C_d A/m = \rho v^2/(2\beta)$.
    4. $\beta = 50$: it decelerates strongly at lower densities, so higher up.
    5. Faster means more air hit per second (one factor of $v$) and each bit given more speed (another factor).

## Common mistake

**Treating $C_d$ as fixed.** It changes with speed, especially near the speed of sound, and with the flow (smooth or
turbulent). Engineers measure it in wind tunnels and flight tests for each part of the descent.

## Where it leads

- Next: [Thin air](02-thin-air.md).
- [Level 7 page](index.md) · [Rockets and landing topic page](../index.md)
- The first look: [Drag and speed](../level-5/06-drag-and-speed.md). Momentum flow: [Momentum](../level-5/03-momentum.md).
