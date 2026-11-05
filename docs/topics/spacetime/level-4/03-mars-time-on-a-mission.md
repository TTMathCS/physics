---
title: "Mars time on a mission"
---

# Mars time on a mission

*Space and time · level 4, lesson 3 of 6*

## A question to start

It is noon at Mars's prime meridian. Perseverance is about a fifth of the way round the planet to the east. What time
is it there?

## The idea

On Earth, longitude 0° runs through Greenwich in England. On Mars it runs through a tiny crater called **Airy-0**,
named after George Airy, the astronomer who built the Greenwich telescope that marks Earth's line.

Mean solar time at Airy-0 is called **Airy Mean Time** (AMT). Every **15° of longitude** to the east puts you **one Mars
hour later**, because $360° \div 24 = 15°$. So the time at a landing site, its **Local Mean Solar Time**, is

$$\text{local time} = \text{AMT} + \frac{\text{east longitude}}{15°} \text{ Mars hours}.$$

| | Mars | Earth |
| --- | --- | --- |
| Line of longitude 0° | Airy-0 crater | Greenwich |
| Mean time there | Airy Mean Time | Greenwich Mean Time |
| One hour of time zone | 15° of longitude | 15° of longitude |

Missions also count **sols** from landing day. Perseverance landed on **Sol 0**, 18 February 2021. Some earlier rovers,
such as Spirit and Opportunity, called their landing day Sol 1.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 135" role="img" aria-label="Mars seen from above its north pole, with a few lines of longitude. Airy-0 is at 0 degrees. Perseverance is about 77 degrees to the east, turned the way Mars spins, and its clock is five Mars hours later.">
  <circle cx="230" cy="65" r="55" fill="#d86a3a" stroke="currentColor"/>
  <g stroke="currentColor" opacity=".45"><line x1="230" y1="10" x2="230" y2="120"/><line x1="175" y1="65" x2="285" y2="65"/><line x1="191" y1="26" x2="269" y2="104"/><line x1="269" y1="26" x2="191" y2="104"/></g>
  <line x1="230" y1="65" x2="230" y2="10" stroke="#5aa0d8" stroke-width="3"/>
  <line x1="230" y1="65" x2="176.4" y2="52.6" stroke="#f2d13b" stroke-width="3"/>
  <path d="M285 110 A70 70 0 0 0 299 60" fill="none" stroke="currentColor"/><path d="M299 58 l-4 8 l8 0 z" fill="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="238" y="8">Airy-0, 0°</text><text x="5" y="45">Perseverance,</text><text x="5" y="59">about 77° east:</text><text x="5" y="73">AMT + 5 Mars hours</text><text x="5" y="128">seen from above the north pole</text><text x="300" y="95">spin</text></g>
</svg>
</div>

## Worked examples

**1. Perseverance.** It landed at about 77.45° east. $77.45 \div 15 \approx 5.16$ Mars hours, about 5 hours 10 minutes.
At noon AMT it is about 5:10 p.m. at Perseverance.

**2. Curiosity.** It landed at about 137.44° east. $137.44 \div 15 \approx 9.16$ Mars hours. At noon AMT it is about
9:10 p.m. at Curiosity.

**3. A sol count.** On 1 January 2026, 1,778 Earth days had passed since Perseverance landed. A sol is about 1.0275
Earth days: $1{,}778 \div 1.0275 \approx 1{,}730$. Perseverance was near sol 1,730.

## Try it

1. Where is Mars's line of longitude 0°?
2. How many degrees of longitude make one Mars hour of time zone?
3. It is 8 a.m. AMT. A lander sits at 45° east. What is its local time?
4. A rover landed 1,028 Earth days ago, on its Sol 0. About what sol is it now?

??? note "Answers"
    1. At the crater Airy-0.
    2. 15°.
    3. $45 \div 15 = 3$ Mars hours later: 11 a.m.
    4. $1{,}028 \div 1.0275 \approx 1{,}000$: about sol 1,000.

## Common mistake

**Using Earth hours in the time-zone sum.** The 15° rule gives *Mars* hours. Each is about 61.6 Earth minutes.

## Where it leads

- Back: [Solar and sidereal days](02-solar-and-sidereal-days.md) · Next: [The Mars year](04-the-mars-year.md)
- [Level 4 page](index.md) · [Space and time topic page](../index.md)
- Sources: NASA GISS [Mars24 notes](https://www.giss.nasa.gov/tools/mars24/help/notes.html), which give each mission's
  landing longitude and sol count.
