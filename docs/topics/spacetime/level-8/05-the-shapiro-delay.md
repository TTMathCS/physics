---
title: "The Shapiro delay"
---

# The Shapiro delay

*Space and time · level 8, lesson 5 of 6*

## A question to start

Near the 1976 conjunction, radio signals to the Viking spacecraft came back up to about a quarter of a millisecond
later than the distance allowed. Was something wrong with the clocks?

## The idea

Irwin Shapiro pointed out that light passing near the Sun should take a little longer than in flat space,
because it travels through curved space and time deep in the Sun's gravity. This is the **Shapiro delay**.

For a radio signal from Earth to Mars and back, passing the Sun at a closest distance $b$, the extra round-trip time is
about

$$\Delta t \approx \frac{4GM_\odot}{c^3}\ln\!\left(\frac{4\,r_E\,r_M}{b^2}\right),$$

where $r_E$ and $r_M$ are the distances of Earth and Mars from the Sun. The front part, $4GM_\odot/c^3$, is only about
**19.7 µs**. The logarithm makes it grow when the signal skims the Sun: up to about **250 µs**.

Analysis of 14 months of Viking ranging data confirmed the prediction to about **0.1%**. Later, radio links with the
Cassini spacecraft, passing near the Sun, tested general relativity even more closely: general relativity agreed to
about 2 parts in 100,000.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="Earth on the left and Mars on the right, with the Sun between them. A radio signal passing close to the Sun dips into a well drawn below the path, showing that it takes longer than the straight line.">
  <circle cx="25" cy="40" r="9" fill="#5aa0d8" stroke="currentColor"/><circle cx="305" cy="40" r="7" fill="#d86a3a" stroke="currentColor"/><circle cx="165" cy="40" r="14" fill="#eea66f" stroke="currentColor"/>
  <line x1="36" y1="57" x2="294" y2="57" stroke="currentColor" stroke-dasharray="4 4"/>
  <path d="M36 57 Q120 60 150 80 Q165 100 180 80 Q210 60 294 57" fill="none" stroke="#f2d13b" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="40" y="100">signal in the Sun's well:</text><text x="40" y="114">up to about 250 µs late</text><text x="210" y="100">flat-space path</text></g>
</svg>
</div>

## Worked examples

**1. The front part.** $\frac{4 \times 1.327 \times 10^{20}}{(2.998 \times 10^8)^3} = \frac{5.31 \times 10^{20}}{2.69 \times 10^{25}} \approx 1.97 \times 10^{-5}$ s.

**2. Skimming the Sun.** $r_E = 1.496 \times 10^{11}$ m, $r_M = 2.279 \times 10^{11}$ m, $b = 6.96 \times 10^8$ m.
$\frac{4 r_E r_M}{b^2} \approx 2.8 \times 10^5$, and $\ln(2.8 \times 10^5) \approx 12.6$. So
$\Delta t \approx 19.7 \times 12.6 \approx 248$ µs.

**3. Ten Sun radii out.** $b$ is 10 times bigger, so the ratio is 100 times smaller: $\ln(2{,}800) \approx 7.9$.
$\Delta t \approx 19.7 \times 7.9 \approx 156$ µs. The delay fades slowly.

## Try it

1. What causes the Shapiro delay?
2. Why is it largest near solar conjunction?
3. Convert 250 µs of round-trip delay into an apparent extra distance.
4. How precisely did the Viking ranging confirm the prediction?

??? note "Answers"
    1. The signal passes through curved space and time in the Sun's gravity, so it takes longer than in flat space.
    2. The signal then passes closest to the Sun, deepest in its gravity.
    3. $299{,}792 \times 0.000250 \div 2 \approx 37$ km.
    4. To about 0.1%.

## Common mistake

**"The signal slows down because of the Sun's gas."** The corona does delay radio a little, but that depends on the
radio frequency. Using two frequencies lets it be measured and removed. The Shapiro delay is the same at every
frequency.

## Where it leads

- Back: [The bending of light](04-the-bending-of-light.md) · Next: [A clock for Mars](06-a-clock-for-mars.md)
- [Level 8 page](index.md) · [Space and time topic page](../index.md)
- Sources: Shapiro and others, [The Viking relativity experiment](https://ntrs.nasa.gov/citations/19780027515) (up to
  about 250 µs); Reasenberg and others,
  [Viking relativity experiment: verification of signal retardation by solar gravity](https://repository.exst.jaxa.jp/dspace/handle/a-is/423294)
  (0.1%); and Bertotti, Iess and Tortora, [a test of general relativity using radio links with Cassini](https://www.nature.com/articles/nature01997)
  (Nature, 2003). Ranging in plain terms: [Ranging to Mars](../level-6/06-ranging-to-mars.md).
