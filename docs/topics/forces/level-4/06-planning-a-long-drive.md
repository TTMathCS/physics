---
title: "Planning a long drive"
---

# Planning a long drive

*Forces and motion · level 4, lesson 6 of 6*

## A question to start

The team wants their rover to reach a hill 4 km away. The rover's top speed is 152 m an hour. Will it get there in a
day? In a week? How would you plan it?

## The idea

A rover never drives all day at top speed. A plan has to use the **average speed** over whole sols, counting every
stop:

$$\text{average speed} = \frac{\text{total distance}}{\text{total time, stops included}}.$$

On a typical driving sol, a rover might:

- wait for the morning's commands from Earth and warm up;
- drive for about 2 hours, stopping every few metres to look ahead;
- spend the afternoon taking pictures and sending them home;
- sleep through the cold night to save power.

| | Mars: rover | Earth: a person walking |
| --- | --- | --- |
| Top speed | 152 m an hour | about 5 km an hour |
| Length of a day | 24 h 39 min (a sol) | 24 h |
| Typical distance in a driving day | 100 to 200 m | 20 to 30 km on a long hike |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="A bar for one sol divided into parts: night asleep, morning warm-up, two hours of driving, afternoon science, and night again.">
  <rect x="20" y="40" width="70" height="30" fill="#555" stroke="currentColor"/>
  <rect x="90" y="40" width="40" height="30" fill="#cfc8bf" stroke="currentColor"/>
  <rect x="130" y="40" width="30" height="30" fill="#eea66f" stroke="currentColor"/>
  <rect x="160" y="40" width="80" height="30" fill="#5aa0d8" stroke="currentColor"/>
  <rect x="240" y="40" width="70" height="30" fill="#555" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="30" y="90">asleep</text><text x="88" y="30">warm up</text><text x="132" y="90">drive</text><text x="170" y="30">pictures, science</text><text x="250" y="90">asleep</text><text x="120" y="112">one sol: 24 h 39 min</text></g>
</svg>
</div>

Many sols are not driving sols at all: the rover stops for days to drill a rock or study a place. So the long-run
average is lower still.

## Worked examples

**1. Pure driving.** 4 km at 152 m an hour is $4000 \div 152 = 26$ hours of driving, more than a whole sol of
non-stop driving.

**2. Two hours a sol.** At 152 m an hour for 2 hours: 304 m a sol at best. $4000 \div 304 = 13$ sols, if nothing
went wrong.

**3. With stops to look.** Stopping often to check the path cuts the rate to about 150 m a sol: $4000 \div 150 = 27$
sols. Add one science sol for every two driving sols, and it becomes about 40 sols, nearly six weeks.

## Try it

1. Why is a rover's average speed much lower than its top speed?
2. A rover drives 120 m a sol. How many driving sols for 3 km?
3. If it also stops one sol in every three for science, about how many sols does the 3 km take altogether?
4. A sol is 24 h 39 min. Is 40 sols more or less than 40 Earth days?

??? note "Answers"
    1. Most of the time it is stopped: night, warming up, looking ahead, doing science.
    2. $3000 \div 120 = 25$ sols.
    3. 25 driving sols are two-thirds of the total, so about $25 \times 3 \div 2 \approx 38$ sols.
    4. More: $40 \times 39$ min is about 26 hours extra, so 40 sols is about 41 Earth days.

## Common mistake

**Using the top speed for a long trip.** For any long journey, on Mars or on Earth, the stops matter more than the top
speed. A plan must use the average over whole days.

## Where it leads

- Back: [Turning needs a force](05-turning-needs-a-force.md) · Next level: [Newton's laws](../level-5/index.md)
- [Level 4 page](index.md) · [Forces and motion topic page](../index.md)
- The sol and Mars time: [Space and time](../../spacetime/index.md). Why rovers are slow:
  [Why rovers drive slowly](../level-2/06-why-rovers-drive-slowly.md).
