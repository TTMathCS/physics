---
title: "Building under 0.38 g"
---

# Building under 0.38 g

*Forces and motion · level 8, lesson 6 of 6*

## A question to start

A habitat on Mars is buried under 3 m of soil to shield it from radiation. That is a lot of soil to hold up. Is the
roof's main job to stop the soil crushing it, or something else?

## The idea

On Earth, buildings mainly hold **weight** up. On Mars, a habitat must also hold **air** in. People need a pressure of
tens of kilopascals inside (the space station keeps about 101 kPa, a sea-level atmosphere; some designs for Mars use
less, around 50 to 70 kPa). Outside, Mars's air presses with only about 0.6 kPa. The difference pushes outwards on every
square metre of wall, floor and roof.

Compare the two loads on one square metre of roof, taking an inside pressure of 70 kPa:

| On 1 m² of roof | Mars | Earth (the same building) |
| --- | --- | --- |
| Soil above, 3 m at about 1,500 kg/m³ | 16.7 kN down | 44.1 kN down |
| Air inside, pushing out | 69.4 kN up | none (the same air outside) |
| Net load | **52.7 kN up** | 44.1 kN down |

On Mars, the inside air pushes up **about four times as hard** as the soil pushes down. A buried habitat is not
being crushed; it is trying to burst. Its structure works mostly in **tension**, like a balloon or a pressure tank, and
it must be anchored down so it does not lift out of its hole.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 190" role="img" aria-label="A habitat buried under soil. Small arrows from inside push out on all walls; on the roof the outward push is bigger than the soil's weight pushing down.">
  <rect x="10" y="20" width="310" height="60" fill="#d86a3a" opacity=".35"/>
  <path d="M60 170 V100 Q165 60 270 100 V170 Z" fill="#cfc8bf" stroke="currentColor" stroke-width="3"/>
  <g stroke="#5aa0d8" stroke-width="2.5"><line x1="165" y1="120" x2="165" y2="85"/><line x1="110" y1="125" x2="95" y2="95"/><line x1="220" y1="125" x2="235" y2="95"/><line x1="90" y1="145" x2="68" y2="145"/><line x1="240" y1="145" x2="262" y2="145"/></g>
  <g fill="#5aa0d8"><path d="M159 88 l6 -12 l6 12 z"/><path d="M90 100 l1 -13 l10 7 z"/><path d="M229 94 l11 -7 l1 13 z"/><path d="M70 139 l-12 6 l12 6 z"/><path d="M260 139 l12 6 l-12 6 z"/></g>
  <line x1="165" y1="30" x2="165" y2="55" stroke="#d86a3a" stroke-width="3"/><path d="M159 52 l6 12 l6 -12 z" fill="#d86a3a"/>
  <g font-size="12" fill="currentColor"><text x="175" y="45">soil: 16.7 kN/m²</text><text x="120" y="140">air: 69.4 kN/m²</text><text x="20" y="185">a buried habitat on Mars</text></g>
</svg>
</div>

For a cylinder of radius $r$ and wall thickness $t$, the pressure difference $P$ makes a **hoop stress** in the wall

$$\sigma = \frac{P r}{t}.$$

That is what sizes the walls, not gravity.

## Worked examples

**1. The roof load.** Soil: $3 \times 1500 \times 3.71 = 16{,}700$ N/m². Air: $70{,}000 - 600 = 69{,}400$ N/m². Net
$52{,}700$ N/m² upwards.

**2. A wall.** An aluminium cylinder with $r = 4$ m, $P = 69.4$ kPa, and an allowed stress of 90 MPa (yield 275 MPa,
safety factor about 3): $t = Pr/\sigma = 69{,}400 \times 4 / 90\times10^6 = 3.1$ mm. The real wall would be thicker, for
dents, fatigue, leaks and impacts.

**3. How much soil to balance the air?** Depth $d$ with $1500 \times 3.71 \times d = 69{,}400$: $d = 12.5$ m. Only under
about 12 m of soil would the roof feel no net push.

## Try it

1. Why does a habitat on Mars push out, when the same building on Earth is pushed down?
2. Find the hoop stress in a steel cylinder of radius 3 m and wall 6 mm, with 70 kPa inside and almost nothing outside.
3. With 2 m of soil instead of 3, what is the net upward load per square metre?
4. Why would building at half Earth's pressure inside make the structure lighter?

??? note "Answers"
    1. Mars's air is so thin that the inside pressure is almost unopposed, and the soil above weighs only 0.38 as much.
    2. $70{,}000 \times 3 / 0.006 = 35$ MPa.
    3. $69{,}400 - 2 \times 1500 \times 3.71 = 58{,}300$ N/m², upward.
    4. The hoop stress is proportional to $P$: half the pressure, half the wall thickness for the same stress.

## Common mistake

**Thinking of a Mars habitat as a house.** A house on Earth stands up against gravity. A pressurised habitat on Mars is
first a pressure vessel; gravity is the smaller load.

## Where it leads

- Back: [Stress and strain](05-stress-and-strain.md) · [Level 8 page](index.md) · [Forces and motion topic page](../index.md)
- Pressure and gases: [Heat and matter](../../heat/index.md) and [Air and fluids](../../air/index.md). The thin air
  of Mars: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html).
- Why the soil is there: [Radiation and the atom](../../radiation/index.md).
