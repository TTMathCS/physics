---
title: "One way and round trip"
---

# One way and round trip

*Space and time · level 6, lesson 2 of 6*

## A question to start

A rover team sends "take a picture" when Mars is 15 light-minutes away. How soon can they see the picture?

## The idea

Mission teams use two delays:

- **One-way light time**: how long a signal takes to go from Earth to Mars, or back.
- **Round-trip light time**: there and back, twice as long.

$$t_\text{one way} = \frac{d}{c}, \qquad t_\text{round trip} = \frac{2d}{c}.$$

The one-way time tells you how old the news is. A picture arriving now shows Mars as it was one light time ago. The
round trip tells you how long any question takes to answer: you cannot see the effect of a command sooner than one round
trip, plus the time the rover spends doing it.

Across the range of Earth to Mars distances:

- closest, 54.6 million km: about **3.0 min** one way, **6.1 min** round trip;
- farthest, 401 million km: about **22.3 min** one way, **44.6 min** round trip.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="A timeline. A command leaves Earth, arrives at Mars one light time later, the rover takes a picture, and the picture arrives back at Earth another light time later.">
  <g stroke="currentColor"><line x1="20" y1="35" x2="320" y2="35"/><line x1="20" y1="95" x2="320" y2="95"/></g>
  <g stroke="#f2d13b" stroke-width="2"><line x1="40" y1="35" x2="140" y2="95"/><line x1="180" y1="95" x2="280" y2="35"/></g>
  <rect x="140" y="88" width="40" height="14" fill="#d86a3a" opacity=".6"/>
  <g font-size="11" fill="currentColor"><text x="2" y="25">Earth</text><text x="2" y="118">Mars</text><text x="30" y="50">send</text><text x="125" y="118">take picture</text><text x="232" y="25">picture arrives</text><text x="60" y="75">one way</text><text x="230" y="75">one way</text></g>
</svg>
</div>

## Worked examples

**1. The picture.** 15 minutes there, say 5 minutes to take it, 15 minutes back: at least 35 minutes.

**2. From distance.** Mars is 300 million km away. $300{,}000{,}000 \div 300{,}000 = 1{,}000$ s one way, about 16.7 minutes.
Round trip: about 33 minutes.

**3. How old is the news?** A weather report from Mars arrives when the one-way time is 10 minutes. It describes the
weather 10 minutes ago, before any change since.

## Try it

1. What is the difference between one-way and round-trip light time?
2. Which one tells you how old a picture is?
3. Mars is 120 million km away. Find both delays.
4. A command reaches the rover, which spends 20 minutes on it. The one-way time is 8 minutes. When does the team see the
   result, counting from sending?

??? note "Answers"
    1. Round trip is there and back: twice the one-way time.
    2. One-way.
    3. One way $120{,}000{,}000 \div 300{,}000 = 400$ s, about 6.7 min. Round trip about 13.3 min.
    4. $8 + 20 + 8 = 36$ minutes.

## Common mistake

**Forgetting the way back.** The command needs one light time to arrive, and the reply needs another one to come home.

## Where it leads

- Back: [Distance from orbits](01-distance-from-orbits.md) · Next: [Planning a sol of commands](03-planning-a-sol-of-commands.md)
- [Level 6 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) (distances) and
  NIST's [speed of light](https://physics.nist.gov/cgi-bin/cuu/Value?c).
