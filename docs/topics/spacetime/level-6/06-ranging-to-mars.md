---
title: "Ranging to Mars"
---

# Ranging to Mars

*Space and time · level 6, lesson 6 of 6*

## A question to start

How can a clock on Earth measure the distance to a spacecraft on Mars?

## The idea

Send a radio signal to the spacecraft. It sends one straight back. Time the round trip $t$, and

$$d = \frac{c\,t}{2},$$

with $c$ the speed of light, 299,792.458 km/s. This is called **ranging**. It is the laser trick from the Moon, done
with radio.

Because $c$ is so large, a small timing error makes a big distance error. One microsecond, a millionth of a second, of
round-trip time is $299{,}792 \times 0.000001 \div 2 \approx 0.15$ km, or 150 m.

The Viking spacecraft, which reached Mars in 1976, returned radio signals sent from Earth. Ranging to them was so precise
that, near the 1976 conjunction, scientists could see the signals arrive later than plain distance allows: delayed by up
to about 250 microseconds, as Einstein's theory of gravity predicts. That story is in level 8.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 110" role="img" aria-label="A dish on Earth sends a pulse to a lander on Mars, which sends it straight back. The time for the round trip gives the distance.">
  <circle cx="25" cy="55" r="14" fill="#5aa0d8" stroke="currentColor"/><circle cx="305" cy="55" r="11" fill="#d86a3a" stroke="currentColor"/>
  <g stroke="#f2d13b" stroke-width="2"><line x1="42" y1="48" x2="290" y2="48"/><line x1="290" y1="62" x2="42" y2="62"/></g>
  <path d="M282 43 l8 5 l-8 5 z" fill="#f2d13b"/><path d="M50 57 l-8 5 l8 5 z" fill="#f2d13b"/>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="165" y="36">signal out</text><text x="165" y="82">signal back</text><text x="165" y="102">distance = c × round-trip time ÷ 2</text></g>
</svg>
</div>

## Worked examples

**1. A round trip of 20 minutes.** $t = 1{,}200$ s. $d = 299{,}792 \times 1{,}200 \div 2 \approx 180$ million km.

**2. Timing to a nanosecond.** A billionth of a second of round-trip time is $299{,}792{,}458 \times 10^{-9} \div 2 \approx 0.15$ m:
15 cm.

**3. The Viking delay as a distance.** 250 microseconds of extra round-trip time looks like
$299{,}792 \times 0.000250 \div 2 \approx 37$ km of extra distance, far too much to be a mistake.

## Try it

1. Why divide by 2 in the ranging formula?
2. A round trip takes 10 minutes. How far away is the spacecraft?
3. Round-trip timing is good to 10 nanoseconds. About how precise is the distance?
4. What did Viking ranging show near conjunction?

??? note "Answers"
    1. The time is for there and back; the distance is one way.
    2. $299{,}792 \times 600 \div 2 \approx 90$ million km.
    3. $10 \times 0.15 = 1.5$ m.
    4. Signals passing near the Sun arrived late, by up to about 250 microseconds, as general relativity predicts.

## Common mistake

**Forgetting the Sun's effect.** At this level of precision, the simple formula needs corrections: for the Sun's
corona, for Earth's air, and for gravity itself.

## Where it leads

- Back: [Solar conjunction](05-solar-conjunction.md) · Next level: [Level 7: Special relativity](../level-7/index.md)
- [Level 6 page](index.md) · [Space and time topic page](../index.md)
- Sources: Shapiro and others, [The Viking relativity experiment](https://ntrs.nasa.gov/citations/19780027515)
  (NASA Technical Reports Server). The Moon version: [Light from the Moon](../level-3/03-light-from-the-moon.md).
