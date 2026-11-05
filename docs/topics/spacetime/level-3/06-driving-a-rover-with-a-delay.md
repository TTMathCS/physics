---
title: "Driving a rover with a delay"
---

# Driving a rover with a delay

*Space and time · level 3, lesson 6 of 6*

## A question to start

Could you drive a rover on Mars with a joystick, like a remote-control car?

## The idea

No. Suppose the delay is 12 minutes each way. You see a rock ahead in the rover's pictures, but those pictures are
already 12 minutes old. You press "stop", and the command takes another 12 minutes to arrive. By then the rover could
have hit the rock long ago.

So rovers are driven a different way:

- **Plan ahead.** Each day, rover drivers on Earth study 3D pictures and send a whole plan for the next sol, with
  places to stop along the way.
- **Let the rover think.** Perseverance's self-driving system, AutoNav, makes 3D maps of the ground ahead, spots
  hazards, and plans its own way round them, with no help from Earth.
- **Go slowly.** Its top speed is about 0.16 km an hour, yet it can drive more than 270 m in a sol.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A rover on Mars with a planned route to a flag. It sees a rock on the route and steers round it by itself.">
  <rect x="0" y="95" width="330" height="35" fill="#d86a3a" opacity=".5"/>
  <rect x="25" y="70" width="40" height="18" fill="#cfc8bf" stroke="currentColor"/><g fill="currentColor"><circle cx="32" cy="92" r="4"/><circle cx="45" cy="92" r="4"/><circle cx="58" cy="92" r="4"/></g>
  <path d="M70 100 L300 100" stroke="currentColor" stroke-dasharray="4 4"/>
  <path d="M70 108 Q130 108 160 122 Q190 108 300 108" fill="none" stroke="#5aa0d8" stroke-width="2"/>
  <ellipse cx="165" cy="100" rx="14" ry="8" fill="#cfc8bf" stroke="currentColor"/>
  <line x1="302" y1="60" x2="302" y2="100" stroke="currentColor" stroke-width="2"/><path d="M302 60 l20 7 l-20 7 z" fill="#5aa0d8"/>
  <g font-size="11" fill="currentColor"><text x="195" y="92">planned route</text><text x="150" y="70">a rock</text><text x="200" y="125">the rover's own way round</text></g>
</svg>
</div>

## Worked examples

**1. Too late to stop.** With 12 minutes each way, you learn of a problem 12 minutes after it happens, and your reply
arrives 12 minutes after that: 24 minutes in all.

**2. How far in that time.** At 0.16 km an hour, in 24 minutes (0.4 of an hour) the rover goes
$0.16 \times 0.4 \approx 0.064$ km: about 64 m.

**3. A sol's drive.** More than 270 m in a sol is about the length of three football fields.

## Try it

1. Why can rovers not be driven with a joystick from Earth?
2. What does AutoNav do?
3. The delay is 20 minutes each way. How long between something happening and your reply arriving?
4. Why do drivers send a whole plan for the next sol?

??? note "Answers"
    1. Every picture is minutes old, and every command takes minutes to arrive.
    2. It maps the ground ahead, spots hazards and steers round them by itself.
    3. 40 minutes.
    4. The rover can follow it for the whole sol without waiting for each command.

## Common mistake

**"Rovers are slow because their motors are weak."** They go slowly on purpose, to stay safe on rough ground far from
any help.

## Where it leads

- Back: [A message to Mars](05-a-message-to-mars.md) · Next level: [Level 4: Clocks on Mars](../level-4/index.md)
- [Level 3 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA on [how Perseverance drives on Mars](https://science.nasa.gov/resource/how-perseverance-drives-on-mars/).
  Planning a long drive: [Planning a long drive](../../forces/level-4/06-planning-a-long-drive.md).
