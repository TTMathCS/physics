---
title: "Cold wires on Mars"
---

# Cold wires on Mars

*Electricity and magnetism · level 5, lesson 6 of 6*

## A question to start

A copper cable is laid across the ground at a Mars base, where nights can fall below −80 °C. Does the cold make it
carry current better or worse?

## The idea

In a metal, the free electrons are knocked about by the vibrating atoms. A **colder** metal vibrates less, so its
resistance is **lower**. Near room temperature, the change is almost a straight line:

$$R = R_{20}\,\bigl(1 + \alpha\,(T - 20)\bigr),$$

where $R_{20}$ is the resistance at 20 °C, $T$ is in °C, and $\alpha$ is the **temperature coefficient**. For copper,
$\alpha = 0.0039$ per °C.

| Copper cable at the average surface temperature | Mars | Earth |
| --- | --- | --- |
| Average temperature | −59 °C | 15 °C |
| Resistance compared with 20 °C | 0.69 | 0.98 |

So cables on Mars waste less energy as heat. But the cold is hard on other parts. Batteries hold less charge and can be
damaged if charged when very cold, so rovers carry heaters to keep their batteries and electronics warm.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="Resistance of copper against temperature, a straight line rising from left to right. Points marked for a Mars night at minus 89 degrees, the Mars average at minus 59, Earth's average at 15, and 20 degrees.">
  <line x1="30" y1="130" x2="310" y2="130" stroke="currentColor"/><line x1="30" y1="130" x2="30" y2="10" stroke="currentColor"/>
  <line x1="40" y1="75" x2="300" y2="24" stroke="#d86a3a" stroke-width="3"/>
  <g fill="#5aa0d8"><circle cx="50" cy="73" r="5"/><circle cx="110" cy="61" r="5"/></g><g fill="#d86a3a"><circle cx="258" cy="32" r="5"/><circle cx="268" cy="30" r="5"/></g>
  <g font-size="11" fill="currentColor"><text x="36" y="95">−89 °C</text><text x="96" y="82">−59 °C</text><text x="200" y="55">15 and 20 °C</text><text x="230" y="145">temperature</text><text x="35" y="15">resistance</text></g>
</svg>
</div>

## Worked examples

**1. The Mars average.** $1 + 0.0039 \times (-59 - 20) = 1 - 0.31 = 0.69$.

**2. A cold night.** At the Viking 1 site, nights fell to −89 °C: $1 + 0.0039 \times (-109) = 0.57$.

**3. A real cable.** A cable has 0.20 $\Omega$ at 20 °C. At −59 °C: $0.20 \times 0.69 = 0.14\ \Omega$. Carrying 10 A,
it wastes $10^2 \times 0.14 = 14$ W instead of 20 W.

## Try it

1. Does a copper wire have more or less resistance when it is cold?
2. Find the resistance factor for copper at −31 °C, the warmest the Viking 1 site got in the day.
3. A heater element is 20 $\Omega$ at 20 °C. Estimate its resistance at 220 °C if $\alpha = 0.0039$.
4. Why do rovers heat their batteries?

??? note "Answers"
    1. Less.
    2. $1 + 0.0039 \times (-51) = 0.80$.
    3. $20 \times (1 + 0.0039 \times 200) = 20 \times 1.78 = 36\ \Omega$.
    4. Cold batteries hold less charge and can be damaged when charged.

## Common mistake

**"Cold makes every part of a circuit better."** Metal wires improve, but batteries, some electronics, and anything
that bends, like cable insulation, can suffer in the cold.

## Where it leads

- Back: [Resistance of wires](05-resistance-of-wires.md) · Next level: [Level 6: Fields](../level-6/index.md)
- [Level 5 page](index.md) · [Electricity and magnetism topic page](../index.md)
- The temperatures: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html). Keeping a rover warm:
  [Heat and matter](../../heat/index.md).
