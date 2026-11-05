---
title: "Planning a sol of commands"
---

# Planning a sol of commands

*Space and time · level 6, lesson 3 of 6*

## A question to start

The round trip to Mars is at most about 45 minutes. So why can a rover team usually make only one big decision a sol?

## The idea

The delay is only part of it. The other part is the rhythm of the two planets' days.

- The rover works in Mars daylight, when it has sunlight and warmth.
- Its pictures and data come home through orbiters, several times through the day and night.
- On Earth, the team studies the latest data, decides what to do, builds the commands and checks them.
- The finished plan is sent up **once, in the Mars morning**, and the rover carries it out through the sol.

So the loop is: rover works → data comes down → team plans → plan goes up. That loop takes about one sol. A rover that
needs a decision cannot wait for the next phone call; it gets the answer the next sol.

That is why each plan has to be complete and safe on its own, and why the rover's own software, such as AutoNav, makes
the small decisions in between.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A loop of four steps taking about one sol: the rover works in daylight, data comes down through orbiters, the team on Earth plans, and the plan goes up in the Mars morning.">
  <circle cx="165" cy="70" r="48" fill="none" stroke="currentColor" stroke-dasharray="4 4"/>
  <g fill="#d86a3a" stroke="currentColor"><circle cx="165" cy="22" r="6"/><circle cx="213" cy="70" r="6"/><circle cx="165" cy="118" r="6"/><circle cx="117" cy="70" r="6"/></g>
  <g font-size="11" fill="currentColor"><text x="125" y="12">rover works</text><text x="225" y="74">data comes down</text><text x="128" y="136">team plans</text><text x="5" y="74">plan goes up</text><text x="138" y="74">one sol</text></g>
</svg>
</div>

## Worked examples

**1. A real morning.** On sol 345, Perseverance woke at 02:07 Mars time for a short task, and saw sunrise at 05:16. Its
plan for the sol arrived from Earth around 11:00, and the science began soon after.

**2. Many questions, one answer.** Suppose a team would like to try three ways of drilling and choose the best. On Earth
that takes an afternoon. With one plan a sol, trying, checking and choosing takes at least three sols.

**3. Why not more uplinks?** Even with a 10-minute one-way time, a second plan the same sol would need fresh data, a new
plan and checks, all within Mars daylight.

## Try it

1. How often does a rover normally receive a new plan?
2. When in the Mars day is it sent?
3. Why does the plan have to be complete and safe on its own?
4. What makes the small decisions between plans?

??? note "Answers"
    1. Once a sol.
    2. In the Mars morning.
    3. Nobody can step in quickly if something goes wrong.
    4. The rover's own software, such as AutoNav for driving.

## Common mistake

**"The delay is the only reason rovers are slow."** The bigger reason is the one-plan-a-sol loop, set by the rover's
working day, the data relays and the time the team needs to plan safely.

## Where it leads

- Back: [One way and round trip](02-one-way-and-round-trip.md) · Next: [Relays in orbit](04-relays-in-orbit.md)
- [Level 6 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA on [a sol in the life of Perseverance](https://science.nasa.gov/blog/a-sol-in-the-life-of-a-rover/) and
  [how Perseverance drives](https://science.nasa.gov/resource/how-perseverance-drives-on-mars/).
