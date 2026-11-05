---
title: "Distance-time graphs"
---

# Distance-time graphs

*Forces and motion · level 4, lesson 3 of 6*

## A question to start

The team on Earth gets back a record of the rover's drive: how far it had gone at each moment. How can a picture of
that record show at a glance when the rover was moving fast, slowly, or not at all?

## The idea

A **distance-time graph** puts time along the bottom and distance up the side. Each point says how far the rover had
gone at that time.

- A **straight sloping line** means a steady speed.
- A **steeper** line means a **faster** speed.
- A **flat** line means the distance is not changing: the rover is **stopped**.
- The speed is the slope: how much the distance goes up, divided by how much time passes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 200" role="img" aria-label="A distance-time graph of a rover's drive. It rises steadily to 60 metres at 20 minutes, stays flat until 50 minutes while the rover stops, then rises more gently to 90 metres at 80 minutes.">
  <line x1="50" y1="170" x2="310" y2="170" stroke="currentColor"/><line x1="50" y1="170" x2="50" y2="15" stroke="currentColor"/>
  <polyline points="50,170 105,77 187,77 270,30" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g stroke="currentColor" stroke-dasharray="3 4" opacity=".5"><line x1="105" y1="77" x2="105" y2="170"/><line x1="187" y1="77" x2="187" y2="170"/><line x1="270" y1="30" x2="270" y2="170"/><line x1="50" y1="77" x2="105" y2="77"/><line x1="50" y1="30" x2="270" y2="30"/></g>
  <g font-size="11" fill="currentColor"><text x="98" y="185">20</text><text x="180" y="185">50</text><text x="263" y="185">80</text><text x="150" y="198">time, minutes</text>
  <text x="25" y="81">60</text><text x="25" y="34">90</text><text x="5" y="110">metres</text><text x="120" y="70">stopped</text></g>
</svg>
</div>

The graph shows a drive in three parts: 60 m in the first 20 minutes, a stop of 30 minutes to take pictures, then 30 m
more in 30 minutes.

## Worked examples

**1. Part one.** $60 \text{ m} \div 20 \text{ min} = 3$ m per minute, which is 0.05 m/s.

**2. Part two.** Flat: speed zero, the rover is stopped for $50 - 20 = 30$ minutes.

**3. Part three.** $(90 - 60) \text{ m} \div (80 - 50) \text{ min} = 1$ m per minute: a gentler slope, a slower speed.

**4. Average speed for the whole drive.** Total distance over total time: $90 \div 80 = 1.1$ m per minute. Lower than
either moving part, because of the stop.

## Try it

1. On a distance-time graph, what does a flat line mean?
2. Which is faster: a steep line or a gentle one?
3. A line rises from 0 m to 120 m in 40 minutes. What is the speed in m per minute?
4. A rover drives 30 m in 10 min, stops for 20 min, then drives 30 m in 10 min. What is its average speed?

??? note "Answers"
    1. The thing is not moving.
    2. The steep one.
    3. $120 \div 40 = 3$ m per minute.
    4. $60 \text{ m} \div 40 \text{ min} = 1.5$ m per minute.

## Common mistake

**Reading a distance-time graph as a map.** A line going up does not mean the rover is climbing a hill. It means its
distance from the start is growing. A flat line is not flat ground; it is a stop.

## Where it leads

- Back: [Speed and velocity](02-velocity.md) · Next: [Speeding up and slowing down](04-acceleration.md)
- [Level 4 page](index.md) · [Forces and motion topic page](../index.md)
- The same idea for falling things: [Distance fallen](../../gravity/level-5/01-distance-fallen.md).
