---
title: "Relays in orbit"
---

# Relays in orbit

*Space and time · level 6, lesson 4 of 6*

## A question to start

Perseverance has a radio that can talk straight to Earth. So why does almost all its data go up to a spacecraft in
orbit first?

## The idea

Sending data across hundreds of millions of kilometres needs a big antenna and a lot of power. A rover has neither to
spare. And as Mars turns, the rover's side faces away from Earth for about 12 hours each sol.

So rovers talk to **orbiters** passing a few hundred kilometres overhead, at up to **2 million bits a second**. The
orbiters have bigger radios, more solar power and more time in view of Earth, so they pass the data on to the giant
dishes of NASA's Deep Space Network.

The **Mars Relay Network** is four orbiters: NASA's Mars Odyssey and Mars Reconnaissance Orbiter, and ESA's Mars Express
and Trace Gas Orbiter. The Trace Gas Orbiter, on average, carries the most relay data each day. Every picture taken on
the surface of Mars since 2004 has come home this way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A rover on Mars sends data up to an orbiter passing overhead. The orbiter sends it on to a large dish antenna on Earth.">
  <path d="M10 120 A80 80 0 0 1 150 120" fill="#d86a3a" stroke="currentColor"/>
  <rect x="72" y="36" width="12" height="9" fill="#cfc8bf" stroke="currentColor"/>
  <g stroke="#5aa0d8"><line x1="72" y1="40" x2="60" y2="40"/><line x1="84" y1="40" x2="96" y2="40"/></g>
  <rect x="68" y="70" width="14" height="8" fill="#cfc8bf" stroke="currentColor"/>
  <g stroke="#f2d13b" stroke-width="2"><line x1="75" y1="70" x2="78" y2="48"/><line x1="90" y1="38" x2="275" y2="70"/></g>
  <path d="M270 105 Q285 80 305 75 L300 95 Z" fill="#cfc8bf" stroke="currentColor"/><line x1="292" y1="98" x2="292" y2="120" stroke="currentColor" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="100" y="25">orbiter</text><text x="20" y="100">rover</text><text x="240" y="125">dish on Earth</text><text x="150" y="40">millions of km</text></g>
</svg>
</div>

## Worked examples

**1. One pass.** An orbiter is in view for 10 minutes at 2 million bits a second. $600 \times 2{,}000{,}000 = 1.2$ billion
bits, which is 150 million bytes, or about 150 MB.

**2. The extra delay is tiny.** An orbiter 400 km up adds $400 \div 300{,}000 \approx 0.0013$ s to the trip. The real wait
is for the orbiter to come overhead.

**3. Why not straight to Earth?** The rover's side of Mars faces away from Earth for about 12 hours a sol, and a direct
link needs far more power for each bit.

## Try it

1. Give two reasons rovers send data through orbiters.
2. How fast can a rover send data to an orbiter?
3. Which orbiter carries the most relay data on average?
4. An orbiter pass lasts 8 minutes at 2 million bits a second. How many MB is that? (8 bits = 1 byte.)

??? note "Answers"
    1. Any two of: the rover has little power and a small antenna; it cannot see Earth for about half of each sol;
       orbiters have bigger radios and more contact with Earth.
    2. Up to 2 million bits a second.
    3. ESA's Trace Gas Orbiter.
    4. $480 \times 2{,}000{,}000 = 960$ million bits, which is 120 MB.

## Common mistake

**"Relays make the delay longer."** They add only a fraction of a second of travel. What they change is *when* data can
be sent: only while an orbiter is overhead.

## Where it leads

- Back: [Planning a sol of commands](03-planning-a-sol-of-commands.md) · Next: [Solar conjunction](05-solar-conjunction.md)
- [Level 6 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA's [Mars Relay Network page](https://science.nasa.gov/mars/mars-relay-network/).
