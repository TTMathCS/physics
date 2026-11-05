---
title: "The second law"
---

# The second law

*Heat and matter · level 8, lesson 2 of 6*

## A question to start

The first law would allow a cold cup of tea to grow hotter by taking heat from the cooler room around it: energy would
still be conserved. Yet that never happens. What rule forbids it?

## The idea

The **second law of thermodynamics** says that heat flows by itself only from hotter to colder. To move heat the other
way, as a fridge or heat pump does, you must put in work.

It can be put in numbers with **entropy**, $S$. When heat $Q$ flows into something at temperature $T$ (in kelvin), its
entropy changes by

$$\Delta S = \frac{Q}{T}.$$

The second law says that in any real process, the **total entropy never decreases**. Heat flowing from hot to cold
raises the total; the reverse would lower it, so it does not happen by itself.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="A hot block at 300 kelvin loses 1,000 joules, so its entropy falls by 3.33 joules per kelvin. A cold block at 200 kelvin gains the 1,000 joules, so its entropy rises by 5 joules per kelvin. The total rises by 1.67.">
  <rect x="30" y="30" width="80" height="50" fill="#d86a3a" opacity=".8" stroke="currentColor"/><rect x="220" y="30" width="80" height="50" fill="#5aa0d8" stroke="currentColor"/>
  <path d="M115 55 H205" stroke="currentColor" stroke-width="3"/><path d="M205 48 l12 7 l-12 7 z" fill="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="50" y="60">300 K</text><text x="240" y="60">200 K</text><text x="135" y="45">1,000 J</text>
  <text x="25" y="100">ΔS = −3.33 J/K</text><text x="215" y="100">ΔS = +5.00 J/K</text><text x="110" y="117">total: +1.67 J/K</text></g>
</svg>
</div>

## Worked examples

**1. Heat leaking from a habitat.** 1,000 J flows from rooms at 300 K into the Mars ground at 200 K:
$\Delta S = -1000/300 + 1000/200 = -3.33 + 5.00 = +1.67$ J/K. The total rises, so this happens by itself.

**2. The reverse.** 1,000 J flowing from 200 K to 300 K would give $-5.00 + 3.33 = -1.67$ J/K. Forbidden without
work.

**3. Melting ice.** 334,000 J melts 1 kg of ice at 273 K: its entropy rises by $334{,}000/273 = 1{,}220$ J/K. The
particles go from neat rows to a jumble.

## Try it

1. State the second law in words about heat.
2. 600 J flows from a 400 K block to a 300 K block. Find the total change in entropy.
3. Why can a fridge make its inside colder than the kitchen without breaking the second law?
4. Find the entropy change when 1 kg of water boils at 373 K ($L_v$ = 2,260 kJ/kg).

??? note "Answers"
    1. Heat flows by itself only from hotter to colder.
    2. $-600/400 + 600/300 = -1.5 + 2.0 = +0.5$ J/K.
    3. It uses work (electricity) to pump the heat, and dumps more heat into the kitchen than it takes from the inside,
       so the total entropy still rises.
    4. $2{,}260{,}000/373 = 6{,}060$ J/K.

## Common mistake

**"Entropy can never go down anywhere."** It can fall in one place, as in a fridge's inside, as long as it rises by at
least as much somewhere else. It is the *total* that never falls.

## Where it leads

- Back: [The first law](01-the-first-law.md) · Next: [Heat pumps](03-heat-pumps.md)
- [Level 8 page](index.md) · [Heat and matter topic page](../index.md)
- The limit it sets on engines: [Heat engines](../../energy/level-8/04-heat-engines.md).
