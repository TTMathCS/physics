---
title: "Parallax"
---

# Parallax

*Space and time · level 5, lesson 3 of 6*

## A question to start

Hold up your thumb and look at it with one eye, then the other. It jumps against the background. How could that jump
tell you how far away something is?

## The idea

When you look at something from two places, it seems to shift against things far behind it. This shift is called
**parallax**. The nearer the object, the bigger the shift.

If you know the distance between the two places, the **baseline**, and you measure the shift angle, you can find the
distance:

$$\text{distance} \approx 57.3 \times \frac{\text{baseline}}{\text{angle in degrees}}.$$

It is the angular-size rule turned round.

In 1672, Jean Richer sailed to Cayenne in South America while Giovanni Cassini stayed in Paris. Both watched Mars at the
same time. From the tiny shift between their views, Cassini worked out the distance to Mars, and from that the distance
to the Sun: about 140 million km. The modern value is about 149.6 million km, so he was close.

For stars, astronomers use the widest baseline they have: Earth's orbit. They look at a star six months apart, from
opposite sides of the Sun.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 130" role="img" aria-label="Two observers on Earth, far apart, look at Mars. Each sees Mars in a slightly different place against the distant stars.">
  <circle cx="40" cy="65" r="30" fill="#5aa0d8" stroke="currentColor"/>
  <circle cx="40" cy="38" r="3" fill="#f2d13b"/><circle cx="40" cy="92" r="3" fill="#f2d13b"/>
  <circle cx="175" cy="65" r="6" fill="#d86a3a" stroke="currentColor"/>
  <g stroke="currentColor" stroke-dasharray="3 3"><line x1="40" y1="38" x2="310" y2="92"/><line x1="40" y1="92" x2="310" y2="38"/></g>
  <g fill="currentColor"><circle cx="312" cy="38" r="2"/><circle cx="312" cy="92" r="2"/><circle cx="300" cy="15" r="1.5"/><circle cx="318" cy="115" r="1.5"/></g>
  <g font-size="11" fill="currentColor"><text x="80" y="20">two places on Earth</text><text x="162" y="90">Mars</text><text x="250" y="125">far-off stars</text></g>
</svg>
</div>

## Worked examples

**1. Thumb.** Your eyes are about 6 cm apart. Your thumb jumps by about 6°. Distance $\approx 57.3 \times \frac{6}{6} \approx 57$ cm:
about arm's length.

**2. A made-up Mars measurement.** Suppose two observers 7,000 km apart see Mars shift by 0.007°.
Distance $\approx 57.3 \times \frac{7{,}000}{0.007} \approx 57$ million km.

**3. The nearest star.** Proxima Centauri is more than 250,000 times farther than the Sun. Seen from opposite sides
of Earth's orbit, the baseline is 2 au, so it shifts by less than $57.3 \times \frac{2}{250{,}000} \approx 0.0005°$:
under one two-thousandth of a degree.

## Try it

1. What is parallax?
2. Does a nearer object shift more or less?
3. Why do astronomers measure star parallax six months apart?
4. A tree shifts by 2° when you step 1 m sideways. About how far away is it?

??? note "Answers"
    1. The shift of something seen from two places.
    2. More.
    3. Earth is then on opposite sides of the Sun, the widest baseline they have.
    4. $57.3 \times \frac{1}{2} \approx 29$ m.

## Common mistake

**Using a tiny baseline for a far object.** If the baseline is too small, the shift is too small to measure. That is why
Richer had to sail thousands of kilometres.

## Where it leads

- Back: [Angular size](02-angular-size.md) · Next: [The astronomical unit](04-the-astronomical-unit.md)
- [Level 5 page](index.md) · [Space and time topic page](../index.md)
- Sources: Encyclopedia.com on [Jean Richer and the 1672 expedition](https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/jean-richer)
  and NASA on [Proxima Centauri](https://science.nasa.gov/missions/hubble/hubbles-new-shot-of-proxima-centauri-our-nearest-neighbor/).
