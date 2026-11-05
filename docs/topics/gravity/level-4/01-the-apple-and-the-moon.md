---
title: "The apple and the Moon"
---

# The apple and the Moon

*Gravity and orbits · level 4, lesson 1 of 6*

## A question to start

The story says Isaac Newton saw an apple fall from a tree and wondered whether the same pull reached all the way up
to the Moon. How could anyone check something like that, with no rockets and no space probes?

## The idea

Newton already knew from level 1 that the Moon is falling: it moves sideways, and gravity bends its path into a
circle. So he could ask a sharp question: **how far does the Moon fall towards the Earth in one second**, compared with
an apple?

**The apple.** In its first second, a dropped apple falls about 4.9 m.

**The Moon.** The Moon is about 384,000 km away and goes round once in 27.3 days. If it suddenly stopped being
pulled, it would fly off in a straight line. Because it is pulled, it ends up a little closer to the Earth than that
straight line each second. Working it out from the size of the orbit and the time it takes gives about
**1.4 millimetres** per second.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 180" role="img" aria-label="The Earth on the left and part of the Moon's circular orbit. From the Moon a straight dashed line goes off sideways; the real path curves below it. The small gap between them is how far the Moon falls in a second.">
  <circle cx="40" cy="150" r="25" fill="#5aa0d8" stroke="currentColor"/>
  <path d="M40 30 A120 120 0 0 1 160 150" fill="none" stroke="currentColor" stroke-dasharray="4 4" opacity=".6"/>
  <circle cx="40" cy="30" r="8" fill="#cfc8bf" stroke="currentColor"/>
  <line x1="40" y1="30" x2="210" y2="30" stroke="currentColor" stroke-dasharray="6 3"/>
  <path d="M40 30 A120 120 0 0 1 125 65" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="125" y1="30" x2="125" y2="65" stroke="currentColor"/>
  <g font-size="11" fill="currentColor"><text x="150" y="22">straight on, if not pulled</text><text x="132" y="52">the fall</text><text x="100" y="90">real path</text></g>
</svg>
</div>

(The gap is drawn huge here; in real life it is 1.4 mm on a path 1 km long.)

Now compare them. $4.9 \text{ m} \div 1.4 \text{ mm} = 4900 \div 1.4 \approx 3600$. The Moon falls about **3600 times
less** than the apple.

And here is Newton's clue: the Moon is about **60 times** farther from the Earth's middle than the apple is (the apple
is 6,400 km from the middle, the Moon 384,000 km). And $60 \times 60 = 3600$. So the pull seemed to get weaker by the
**square** of the distance: 60 times farther, $60^2 = 3600$ times weaker.

The same rule fitted both. One pull, reaching from the orchard to the Moon. Newton published the idea in his
*Principia* in 1687, and called it **universal gravitation**: every piece of matter pulls on every other.

## Worked examples

**1. Checking the 60.** $384{,}000 \div 6{,}400 = 60$. ✓

**2. A moon twice as far out.** A moon 120 Earth radii away would be pulled $120^2 = 14{,}400$ times more weakly than
an apple. It would fall about $4.9 \text{ m} \div 14{,}400 \approx 0.34$ mm in a second.

## Try it

1. How far does a dropped apple fall in its first second?
2. About how far does the Moon "fall" towards the Earth each second?
3. How many times farther from the Earth's middle is the Moon than the apple?
4. Why does Newton's rule use $60^2$ and not just 60?
5. If gravity simply got weaker in proportion to distance (60 times farther, 60 times weaker), how far would the Moon
   fall each second? Does this match what we see?

??? note "Answers"
    1. About 4.9 m.
    2. About 1.4 mm.
    3. About 60 times.
    4. Because the measured fall is 3600 times smaller, and $60^2 = 3600$: the pull falls off with the square of the distance.
    5. $4.9 \div 60 \approx 0.08$ m, or 8 cm. That is far more than the 1.4 mm the Moon actually falls, so the simple
       rule is wrong; the square rule fits.

## Common mistake

**"Gravity stops where the air stops."** The Moon is about a thousand times higher than the top of the air, and
gravity still holds it. Gravity gets weaker with distance, but never reaches zero.

## Where it leads

- Next: [Weaker with distance](02-weaker-with-distance.md): the square rule in general.
- [Level 4 page](index.md) · [Gravity and orbits topic page](../index.md)
- The full law, with $G$: [The law of gravity](../level-6/01-the-law-of-gravity.md).
