---
title: "A reactor for Mars"
---

# A reactor for Mars

*Energy and power · level 8, lesson 3 of 6*

## A question to start

A reactor gives power day and night, at any latitude, through any dust storm. What else does it need on Mars, and where
should it go?

## The idea

In 2018 NASA tested **Kilopower** in Nevada. Its cast uranium-235 core passed heat through sodium heat pipes to Stirling
engines, which made electricity. The test ended with 28 hours at full power, and the team also tried failed engines and
failed heat pipes on purpose; it kept working. NASA says such a system could give up to 10 kW for at least 10 years, and
four of them could power an outpost.

Two things decide how a reactor sits on Mars.

**Getting rid of heat.** An engine that turns a quarter of the heat into electricity must throw away the other three
quarters. On Earth, power stations use air, rivers or the sea. Mars air is so thin that it carries away little heat, so
a Mars reactor needs **radiators** that shine the heat away as infrared. A surface at temperature $T$ radiates

$$P = \varepsilon\sigma A T^4,$$

with $\sigma = 5.67\times10^{-8}$ W m⁻² K⁻⁴ and $\varepsilon$ close to 1 for a good radiator.

| Cooling a reactor | Mars | Earth |
| --- | --- | --- |
| Air density at the surface | about 0.016 kg/m³ | 1.217 kg/m³ |
| Average surface temperature | 214 K | 288 K |
| Main way to shed heat | radiators | air, rivers and sea |

**Keeping people safe.** A working reactor gives out radiation. Spreading from the core, it falls with the
inverse square of distance, like sunlight, and soil or rock between blocks most of it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A habitat on the left. Far to the right, a reactor sits behind a mound of soil, with radiator panels standing up. A cable runs between them, about one kilometre long.">
  <rect x="15" y="80" width="60" height="30" rx="14" fill="#cfc8bf" stroke="currentColor"/>
  <path d="M215 110 Q235 70 255 110 Z" fill="#d86a3a" opacity=".7"/><rect x="262" y="88" width="18" height="22" fill="#eea66f" stroke="currentColor"/>
  <g fill="#5aa0d8" opacity=".7"><rect x="285" y="60" width="6" height="50"/><rect x="296" y="60" width="6" height="50"/><rect x="307" y="60" width="6" height="50"/></g>
  <line x1="5" y1="110" x2="325" y2="110" stroke="currentColor"/><path d="M75 105 Q170 125 262 105" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <g font-size="11" fill="currentColor"><text x="20" y="72">habitat</text><text x="130" y="132">cable, about 1 km</text><text x="200" y="65">soil mound</text>
  <text x="270" y="50">radiators</text><text x="245" y="125">reactor</text></g>
</svg>
</div>

## Worked examples

**1. The radiator.** Suppose a 10 kW unit makes 40 kW of heat, so 30 kW must go. A radiator at 400 K with
$\varepsilon = 0.9$ sheds $0.9 \times 5.67\times10^{-8} \times 400^4 = 1{,}310$ W per m² of surface. It needs
$30{,}000/1310 \approx 23$ m², a little more since the ground and sky shine some heat back.

**2. Distance.** Moving from 100 m to 1 km from the reactor is 10 times the distance, so $10^2 = 100$ times less
radiation, before counting the soil mound.

**3. Against solar.** Four 10 kW units give 40 kW day and night. From the level 6 table, solar panels would need
$40{,}000/33 \approx 1{,}200$ m², plus a store for every night and every storm.

## Try it

1. Give two reasons a reactor suits Mars better than solar panels.
2. Find the power radiated per m² by a surface at 350 K with $\varepsilon = 0.9$.
3. Moving from 200 m to 600 m from a source, by what factor does the radiation fall?
4. Why is cooling harder on Mars than on Earth, even though Mars is colder?

??? note "Answers"
    1. It works at night and through dust storms, and it does not depend on latitude or the season.
    2. $0.9 \times 5.67\times10^{-8} \times 350^4 = 766$ W.
    3. Three times the distance: 9 times less.
    4. The air is about 75 times less dense, so it carries away little heat, and there are no rivers or sea. The heat
       has to be radiated.

## Common mistake

**"Mars is cold, so cooling is easy."** The cold helps a little, but heat leaves an object mostly by passing it to air or
water. With almost no air, a Mars reactor depends on large radiators.

## Where it leads

- Back: [Fission](02-fission.md) · Next: [Heat engines](04-heat-engines.md)
- [Level 8 page](index.md) · [Energy and power topic page](../index.md)
- The inverse square law: [Sunlight at Mars](../level-6/03-sunlight-at-mars.md). Radiating heat: [Heat](../../heat/index.md).
  The test: NASA's
  [Kilopower results](https://www.nasa.gov/news-release/demonstration-proves-nuclear-fission-system-can-provide-space-exploration-power/).
  The air: NASA's [Mars fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html) and
  [Earth fact sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html).
