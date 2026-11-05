---
title: "Dating Mars rocks"
---

# Dating Mars rocks

*Radiation and the atom · level 8, lesson 5 of 6*

## A question to start

In 2013, Curiosity drilled a rock it called Cumberland and baked the powder in its oven. From the argon that came out, the
team told how old the rock was: the first age ever measured on another planet. How?

## The idea

Potassium is in most rock. A tiny share of it is **potassium-40**, which decays with a half-life of **1.25 billion
years**. Most of it becomes calcium-40, but about **10.5%** becomes **argon-40**, a gas.

When rock is molten, argon escapes. Once the rock sets hard, the argon-40 made from then on is trapped. So the rock is a
clock: the more argon-40 next to the potassium-40, the older it is.

Let $R$ be the number of argon-40 atoms for each potassium-40 atom still left, and $f = 0.105$ the share of decays that
give argon. For each potassium-40 atom left, $R/f$ have decayed, so the start was $1 + R/f$ times what is left:

$$2^{t/T} = 1 + \frac{R}{f} \quad\Rightarrow\quad t = T \log_2\!\left(1 + \frac{R}{f}\right).$$

For Cumberland, the team found an age between **3.86 and 4.56 billion years**. That matched what crater counts had
suggested, which was itself a test that the method works on Mars.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Two boxes of atoms. When the rock forms, it holds potassium-40 and no argon. After about 4.2 billion years, a tenth of the potassium-40 is left, and there is about one argon-40 atom for each potassium-40 atom.">
  <g stroke="currentColor" fill="none"><rect x="20" y="20" width="120" height="90"/><rect x="190" y="20" width="120" height="90"/></g>
  <g fill="#eea66f" stroke="currentColor"><circle cx="40" cy="40" r="6"/><circle cx="60" cy="40" r="6"/><circle cx="80" cy="40" r="6"/><circle cx="100" cy="40" r="6"/><circle cx="120" cy="40" r="6"/>
  <circle cx="40" cy="65" r="6"/><circle cx="60" cy="65" r="6"/><circle cx="80" cy="65" r="6"/><circle cx="100" cy="65" r="6"/><circle cx="120" cy="65" r="6"/>
  <circle cx="240" cy="65" r="6"/></g>
  <g fill="#5aa0d8" stroke="currentColor"><circle cx="260" cy="65" r="6"/></g>
  <g fill="#cfc8bf" stroke="currentColor"><circle cx="210" cy="40" r="5"/><circle cx="228" cy="40" r="5"/><circle cx="246" cy="40" r="5"/><circle cx="264" cy="40" r="5"/><circle cx="282" cy="40" r="5"/><circle cx="210" cy="90" r="5"/><circle cx="228" cy="90" r="5"/><circle cx="246" cy="90" r="5"/></g>
  <g font-size="11" fill="currentColor"><text x="30" y="128">rock forms</text><text x="190" y="128">4.2 billion years on</text><text x="200" y="16" font-size="9">grey: calcium-40</text><text x="275" y="69" font-size="9">argon</text></g>
</svg>
</div>

Orange: potassium-40. Blue: argon-40. Grey: calcium-40. Out of 10 potassium-40 atoms, after about 4.2 billion years 1 is
left, 1 has become argon-40, and 8 have become calcium-40. (Drawn as whole atoms; the true shares are 9.7%, 9.5% and
80.8%.)

## Worked examples

**1. Cumberland's middle age.** At 4.21 billion years, the share of potassium-40 left is
$(\tfrac12)^{4.21/1.25} = (\tfrac12)^{3.37} = 0.097$. Decayed: $0.903$; argon made: $0.903 \times 0.105 = 0.095$. So
$R = 0.095 / 0.097 \approx 1$: about one argon-40 atom for each potassium-40 atom.

**2. Back to the age.** With $R = 1$: $1 + 1/0.105 = 10.5$ and $\log_2(10.5) = 3.39$, so
$t = 1.25 \times 3.39 = 4.24$ billion years.

**3. The range.** At 3.86 billion years, $R = 0.79$; at 4.56 billion, $R = 1.21$. The rover had to measure tiny amounts
of argon well enough to tell these apart.

## Try it

1. Why does the clock start when the rock sets hard?
2. What share of potassium-40 is left after 2.5 billion years?
3. Find the age of a rock with $R = 0.5$.
4. If some argon leaked out of a rock, would its age come out too old or too young?

??? note "Answers"
    1. Before then, argon escapes from the molten rock; after, it is trapped.
    2. Two half-lives: a quarter.
    3. $1.25 \times \log_2(1 + 0.5/0.105) = 1.25 \times \log_2(5.76) = 1.25 \times 2.53 \approx 3.2$ billion years.
    4. Too young: less argon looks like less time.

## Common mistake

**Forgetting the share that becomes argon.** Only about 1 in 10 potassium-40 decays makes argon. Treating every decay
as argon gives $t = T \log_2(1 + R)$, far too young.

## Where it leads

- Back: [The decay law](04-the-decay-law.md) · Next: [Exposure ages](06-exposure-ages.md)
- [Level 8 page](index.md) · [Radiation and the atom topic page](../index.md)
- Sources: NASA on [Curiosity's first age measurement on Mars](https://www.nasa.gov/news-release/nasa-rover-results-include-first-age-measurement-on-mars-and-help-for-human-exploration/),
  the USGS on [radiometric dating](https://pubs.usgs.gov/gip/geotime/radiometric.html) and on
  [potassium-40's two decays](https://pubs.usgs.gov/publication/70207829). Argon on Earth:
  [Mass number and symbols](../level-4/05-mass-number-and-symbols.md).
