---
title: "Electromagnetic induction"
---

# Electromagnetic induction

*Electricity and magnetism · level 7, lesson 4 of 6*

## A question to start

Push a magnet into a coil joined to a meter. The needle flicks one way. Pull it out, and the needle flicks the other way.
Hold it still, and nothing. Where does the current come from?

## The idea

A **changing** magnetic field through a coil makes a voltage in it. This is **electromagnetic induction**, found by
Michael Faraday in 1831.

The **magnetic flux** through a loop of area $A$, with the field $B$ straight through it, is $\Phi = BA$, in webers
(Wb). **Faraday's law** says the induced voltage (the emf) in a coil of $N$ turns is

$$\varepsilon = -N\frac{\Delta\Phi}{\Delta t}.$$

The faster the flux changes, the bigger the voltage. The minus sign is **Lenz's law**: the induced current flows so as
to **oppose** the change that made it.

A straight wire of length $L$ moving at speed $v$ across a field also has an emf: $\varepsilon = BLv$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A bar magnet being pushed into a coil connected to a meter. The meter's needle is deflected while the magnet moves.">
  <rect x="20" y="58" width="45" height="24" fill="#d86a3a" stroke="currentColor"/><rect x="65" y="58" width="45" height="24" fill="#5aa0d8" stroke="currentColor"/>
  <g font-size="12" fill="#fff" font-weight="bold"><text x="37" y="75">S</text><text x="82" y="75">N</text></g>
  <line x1="40" y1="100" x2="90" y2="100" stroke="currentColor" stroke-width="2"/><path d="M90 95 l8 5 l-8 5 z" fill="currentColor"/>
  <g fill="none" stroke="#eea66f" stroke-width="3"><path d="M130 45 L130 95 M146 45 L146 95 M162 45 L162 95 M178 45 L178 95 M194 45 L194 95"/></g>
  <path d="M194 45 L194 25 L270 25 L270 50 M270 90 L270 115 L130 115 L130 95" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="270" cy="70" r="20" fill="#cfc8bf" stroke="currentColor"/><line x1="270" y1="80" x2="282" y2="60" stroke="#d86a3a" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="25" y="125">push the magnet in</text><text x="232" y="138">the meter flicks</text></g>
</svg>
</div>

## Worked examples

**1. A coil.** 200 turns, area 0.01 m². The field falls from 0.5 T to 0 in 0.1 s: $\Delta\Phi = 0.005$ Wb, so
$\varepsilon = 200 \times 0.005/0.1 = 10$ V.

**2. Faster.** The same change in 0.01 s gives 100 V.

**3. A moving rod.** A 0.5 m rod moves at 4 m/s across a 0.3 T field: $\varepsilon = 0.3 \times 0.5 \times 4 = 0.6$ V.

## Try it

1. Why does nothing happen when the magnet is held still inside the coil?
2. A 50-turn coil of area 0.02 m² sees the field rise from 0 to 0.4 T in 0.2 s. Find the emf.
3. Find the emf across a 1.2 m wing of a model plane flying at 20 m/s through a field of $5\times10^{-5}$ T at right
   angles.
4. What does Lenz's law say about the current induced as the magnet is pushed in?

??? note "Answers"
    1. The flux is not changing, so there is no induced voltage.
    2. $\Delta\Phi = 0.008$ Wb: $\varepsilon = 50 \times 0.008/0.2 = 2$ V.
    3. $5\times10^{-5} \times 1.2 \times 20 = 1.2\times10^{-3}$ V, 1.2 mV.
    4. It flows so that the coil's own field pushes back against the incoming magnet.

## Common mistake

**"A strong magnet in a coil makes a current."** Only a **changing** flux does. A magnet sitting still, however strong,
induces nothing.

## Where it leads

- Back: [Electric motors](03-electric-motors.md) · Next: [Generators and transformers](05-generators-and-transformers.md)
- [Level 7 page](index.md) · [Electricity and magnetism topic page](../index.md)
