---
title: "Banked tracks"
---

# Banked tracks

*Forces and motion · level 7, lesson 4 of 6*

## A question to start

Racing tracks and fast railway curves tilt inwards on bends. Why? And if engineers on Mars built a banked curve with the
same tilt and radius as one on Earth, would it be built for the same speed?

## The idea

On a **banked** curve, the road tilts towards the inside by an angle $\theta$. The normal force $N$ from the road is
then tilted too. Its horizontal part, $N\sin\theta$, points to the centre and can supply the turn, **with no friction
needed**.

With no friction, vertically: $N\cos\theta = mg$. Horizontally: $N\sin\theta = mv^2/r$. Divide one by the other:

$$\tan\theta = \frac{v^2}{rg} \qquad\Rightarrow\qquad v_\text{design} = \sqrt{rg\tan\theta}.$$

At this **design speed**, a vehicle goes round with no sideways friction at all, even on ice. Faster, friction must
pull it in; slower, friction must hold it from sliding down.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 190" role="img" aria-label="A vehicle on a road tilted at angle theta. The normal force points up and inwards, at right angles to the road; weight points down. The normal force's horizontal part points to the centre.">
  <path d="M20 170 L300 170 L300 70 Z" fill="#cfc8bf" opacity=".6" stroke="currentColor"/>
  <g transform="rotate(-19.65 175 115)"><rect x="145" y="95" width="60" height="30" rx="6" fill="#eea66f" stroke="currentColor"/></g>
  <line x1="175" y1="112" x2="140" y2="15" stroke="#5aa0d8" stroke-width="3"/><path d="M135 22 l3 -13 l9 10 z" fill="#5aa0d8"/>
  <line x1="175" y1="112" x2="175" y2="180" stroke="#d86a3a" stroke-width="3"/><path d="M169 177 l6 12 l6 -12 z" fill="#d86a3a"/>
  <line x1="175" y1="60" x2="138" y2="60" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <g font-size="12" fill="currentColor"><text x="110" y="15">N</text><text x="182" y="185">mg</text><text x="85" y="55">N sin θ</text><text x="60" y="165">θ</text><text x="200" y="40">centre of turn to the left</text></g>
</svg>
</div>

For the same radius and bank angle, the design speed goes as $\sqrt g$. A banked bend on Mars is designed for 0.62 times
the Earth speed. To design for the same speed on Mars, the bank must be steeper: $\tan\theta$ must be 2.6 times bigger.

| A bend of radius 50 m | Mars | Earth |
| --- | --- | --- |
| Design speed with a 20° bank | 8.2 m/s, 30 km/h | 13.4 m/s, 48 km/h |
| Bank needed for 13.4 m/s | 44° | 20° |

## Worked examples

**1. Mars, 20° bank, 50 m.** $v = \sqrt{50 \times 3.71 \times 0.364} = \sqrt{67.5} = 8.2$ m/s.

**2. The bank for 13.4 m/s on Mars.** $\tan\theta = 13.4^2 / (50 \times 3.71) = 179.6/185.5 = 0.968$, so
$\theta = 44°$. That is very steep for a road; on Mars, it is easier to slow down.

**3. A cyclist leaning.** A cyclist leans into a turn for the same reason: the road's push through the tyres then
points partly inwards. The lean angle obeys the same rule, $\tan\theta = v^2/(rg)$.

## Try it

1. Derive $\tan\theta = v^2/(rg)$.
2. A track on Earth has a 30° bank and radius 100 m. What is its design speed?
3. What would the design speed be for the same track on Mars?
4. A cyclist on Mars goes round a bend of radius 10 m at 5 m/s. At what angle does she lean?

??? note "Answers"
    1. $N\cos\theta = mg$ and $N\sin\theta = mv^2/r$. Divide: $\tan\theta = v^2/(rg)$.
    2. $\sqrt{100 \times 9.81 \times 0.577} = 23.8$ m/s.
    3. $\sqrt{100 \times 3.71 \times 0.577} = 14.6$ m/s.
    4. $\tan\theta = 25 / 37.1 = 0.674$, $\theta = 34°$ from upright. (On Earth she would lean only 14°.)

## Common mistake

**Drawing friction on a banked curve at the design speed.** At exactly the design speed, no friction is needed. Draw
only the normal force and the weight.

## Where it leads

- Back: [Cornering on flat ground](03-cornering.md) · Next: [Loops and hills](05-loops-and-hills.md)
- [Level 7 page](index.md) · [Forces and motion topic page](../index.md)
- A tilted floor for a spinning room: [Spinning for gravity](06-spinning-for-gravity.md).
