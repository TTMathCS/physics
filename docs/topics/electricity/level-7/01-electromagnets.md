---
title: "Electromagnets"
---

# Electromagnets

*Electricity and magnetism · level 7, lesson 1 of 6*

## A question to start

A scrapyard crane lifts a whole car with a magnet, then drops it at the flick of a switch. How can a magnet be switched
off?

## The idea

Every current makes a **magnetic field** around it. Around a long straight wire, the field lines are circles, and the
field at a distance $r$ is

$$B = \frac{\mu_0 I}{2\pi r}, \qquad \mu_0 = 4\pi \times 10^{-7} \text{ T m/A}.$$

Grip the wire with your right hand, thumb along the current: your fingers curl the way the field goes.

Wind the wire into a long coil, a **solenoid**, and the fields add up inside it into a strong, even field:

$$B = \mu_0 n I,$$

where $n$ is the number of turns per metre. Put an **iron core** inside and the field becomes hundreds or thousands of
times stronger. Switch off the current, and the field goes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Left: a straight wire with current going into the page, surrounded by circular field lines. Right: a coil of wire around an iron core, with the field running straight through the middle.">
  <circle cx="70" cy="70" r="8" fill="none" stroke="currentColor" stroke-width="2"/><line x1="65" y1="65" x2="75" y2="75" stroke="currentColor" stroke-width="2"/><line x1="75" y1="65" x2="65" y2="75" stroke="currentColor" stroke-width="2"/>
  <g fill="none" stroke="#5aa0d8" stroke-width="2"><circle cx="70" cy="70" r="25"/><circle cx="70" cy="70" r="45"/></g>
  <path d="M74 41 l7 4 l-7 4 z" fill="#5aa0d8"/><path d="M74 21 l7 4 l-7 4 z" fill="#5aa0d8"/>
  <rect x="170" y="58" width="120" height="24" fill="#cfc8bf" stroke="currentColor"/>
  <g fill="none" stroke="#d86a3a" stroke-width="3"><path d="M180 50 L180 90 M196 50 L196 90 M212 50 L212 90 M228 50 L228 90 M244 50 L244 90 M260 50 L260 90 M276 50 L276 90"/></g>
  <line x1="160" y1="70" x2="310" y2="70" stroke="#5aa0d8" stroke-width="2"/><path d="M310 65 l8 5 l-8 5 z" fill="#5aa0d8"/>
  <g font-size="11" fill="currentColor"><text x="20" y="135">field circles a wire</text><text x="175" y="115">coil with an iron core</text><text x="190" y="40">current in the turns</text></g>
</svg>
</div>

## Worked examples

**1. A wire.** 10 A, 1 cm away: $B = 4\pi\times10^{-7} \times 10/(2\pi \times 0.01) = 2\times10^{-4}$ T, 200 µT, about
four times Earth's field.

**2. A solenoid.** 1,000 turns per metre, 2 A: $B = 4\pi\times10^{-7} \times 1000 \times 2 = 2.5\times10^{-3}$ T,
2.5 mT.

**3. An iron core.** Suppose iron makes the field 1,000 times stronger: 2.5 T, enough to lift steel.

## Try it

1. Find the field 5 cm from a wire carrying 20 A.
2. A solenoid has 500 turns in 0.25 m and carries 3 A. Find the field inside.
3. Name two ways to make an electromagnet stronger.
4. Why is an electromagnet better than a permanent magnet for a scrapyard crane?

??? note "Answers"
    1. $2\times10^{-7} \times 20/0.05 = 8\times10^{-5}$ T, 80 µT.
    2. $n = 2000$ per m: $B = 4\pi\times10^{-7} \times 2000 \times 3 = 7.5\times10^{-3}$ T.
    3. Any two: more current, more turns per metre, an iron core.
    4. It can be switched off to drop the load.

## Common mistake

**Using the total number of turns for $n$.** $n$ is turns **per metre**: divide the turns by the coil's length.

## Where it leads

- Back: [Auroras](../level-6/06-auroras.md) · Next: [The motor effect](02-the-motor-effect.md)
- [Level 7 page](index.md) · [Electricity and magnetism topic page](../index.md)
