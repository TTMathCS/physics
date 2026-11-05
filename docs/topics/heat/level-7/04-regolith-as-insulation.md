---
title: "Regolith as insulation"
---

# Regolith as insulation

*Heat and matter · level 7, lesson 4 of 6*

## A question to start

Many plans for Mars bases pile loose soil, called **regolith**, over the habitats to block harmful radiation from
space. Does a metre of soil also keep the heat in? And could its weight hold down the air pressure inside?

## The idea

The lander InSight measured Mars soil's thermal conductivity at its site: **0.039 W/(m K)**, about as low as mineral
wool. Loose, fine grains touch each other only at tiny points, and the thin gas between them carries little heat.

So a thick soil cover is a good insulator as well as a shield. A metre of it has

$$R = \frac{d}{k} = \frac{1}{0.039} = 25.6 \text{ m}^2\text{ K/W},$$

almost four times the 6.8 of 15 cm of foam.

But soil is **not** strong enough to hold the air in. Air at 70 kPa inside pushes outwards on every square metre with
70,000 N. To balance that by weight, the soil above would need

$$\rho g h = 70{,}000 \text{ Pa}.$$

| Soil to balance 70 kPa inside, density 1,500 kg/m³ assumed | Mars | Earth |
| --- | --- | --- |
| $g$ | 3.71 N/kg | 9.81 N/kg |
| Depth needed, $h = p/(\rho g)$ | about 12.6 m | about 4.8 m |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A habitat shaped like a half cylinder lying on the ground, covered in a thick mound of soil. Small arrows inside show the air pushing outwards, and a strong skin holds it in. The soil keeps the heat in and blocks radiation.">
  <path d="M30 120 Q165 -20 300 120 Z" fill="#d86a3a" opacity=".55"/>
  <path d="M80 120 Q165 20 250 120 Z" fill="#cfc8bf" stroke="currentColor" stroke-width="2"/>
  <g stroke="#5aa0d8" stroke-width="2"><line x1="165" y1="95" x2="165" y2="80"/><line x1="140" y1="100" x2="125" y2="90"/><line x1="190" y1="100" x2="205" y2="90"/></g>
  <line x1="10" y1="120" x2="320" y2="120" stroke="currentColor"/>
  <g font-size="12" fill="currentColor"><text x="130" y="113">air at 70 kPa</text><text x="230" y="40">soil cover</text><text x="20" y="137">strong skin holds the air; soil keeps heat in</text></g>
</svg>
</div>

## Worked examples

**1. Heat through a metre of soil.** With 79 K across it: $P/A = \Delta T/R = 79/25.6 = 3.1$ W per m².

**2. Heat through 15 cm of foam.** $79/6.8 = 11.6$ W per m², nearly four times as much.

**3. A typical cover.** Suppose a habitat is buried under 2 m of soil, about 3,000 kg per m². Its weight on Mars is
$3000 \times 3.71 = 11{,}000$ N per m², only about a sixth of the 70,000 N per m² pushing out. The habitat's skin must
still hold the pressure, like a balloon, with the soil resting on top.

## Try it

1. Find $R$ for 0.5 m of Mars soil.
2. Why is loose Mars soil such a poor conductor of heat?
3. How deep would 1,500 kg/m³ soil need to be on Mars to balance 50 kPa inside?
4. Why must a buried Mars habitat still have a strong, airtight skin?

??? note "Answers"
    1. $0.5/0.039 = 12.8$ m² K/W.
    2. Its grains touch only at small points, and the thin gas in the gaps carries little heat.
    3. $50{,}000/(1500 \times 3.71) = 9.0$ m.
    4. A few metres of soil weighs far less than the air pressure pushing outwards, so the skin must hold it in.

## Common mistake

**"A thick soil cover holds the pressure in."** On Mars, soil weighs only 38% of what it would on Earth. A cover thick
enough to balance the air inside would be over 12 m deep. The cover is for radiation and heat, not for pressure.

## Where it leads

- Back: [Radiation from surfaces](03-radiation-from-surfaces.md) · Next: [Windows and greenhouses](05-windows-and-greenhouses.md)
- [Level 7 page](index.md) · [Heat and matter topic page](../index.md)
- Blocking radiation: [Radiation and the atom](../../radiation/index.md). The soil figure:
  [InSight's results](https://pmc.ncbi.nlm.nih.gov/articles/PMC9734249/).
