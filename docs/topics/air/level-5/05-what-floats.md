---
title: "What floats"
---

# What floats

*Air and fluids · level 5, lesson 5 of 6*

## A question to start

An iceberg floats with about nine tenths of it hidden under the sea. A cork floats with most of it above the water. What
decides how deep something floats?

## The idea

**Density** is mass per volume: $\rho = m/V$. A solid object fully under water feels an upthrust $\rho_\text{fluid} V g$
and a weight $\rho_\text{object} V g$. So:

- if $\rho_\text{object} < \rho_\text{fluid}$, it **floats**;
- if $\rho_\text{object} > \rho_\text{fluid}$, it **sinks**.

A floating object sinks until the fluid it displaces weighs as much as it does. That gives the **share under the
surface**:

$$\frac{V_\text{under}}{V} = \frac{\rho_\text{object}}{\rho_\text{fluid}}.$$

The $g$ cancels out, so this share is the same on Mars as on Earth.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="Three blocks floating in water. Cork floats high, with about a quarter under. Wood floats with about 60 percent under. Ice floats with about 92 percent under.">
  <rect x="10" y="50" width="310" height="85" fill="#5aa0d8" opacity=".45"/>
  <line x1="10" y1="50" x2="320" y2="50" stroke="currentColor"/>
  <g stroke="currentColor"><rect x="40" y="35" width="50" height="20" fill="#eea66f"/><rect x="140" y="38" width="50" height="30" fill="#d86a3a" opacity=".8"/><rect x="240" y="47" width="50" height="40" fill="#cfc8bf"/></g>
  <g font-size="11" fill="currentColor"><text x="30" y="25">cork: 24% under</text><text x="130" y="25">wood: 60%</text><text x="235" y="25">ice: 92%</text></g>
</svg>
</div>

| Density | kg/m³ | In fresh water (1,000 kg/m³) |
| --- | --- | --- |
| Cork | about 240 | floats, 24% under |
| Pine wood | about 600 | floats, 60% under |
| Ice | 917 | floats, 92% under |
| Granite | about 2,700 | sinks |
| Steel | about 7,800 | sinks |

## Worked examples

**1. Ice.** $917/1000 = 0.917$: 92% under, 8% above. In seawater (1,025 kg/m³): $917/1025 = 0.895$, about 89% under.

**2. A steel ship.** Its average density, steel plus all the air inside, is less than water's. Load it, and its average
density rises, so it sits lower.

**3. On Mars.** A pine log in a Mars base pool floats with 60% under, the same as on Earth.

## Try it

1. A block has mass 3 kg and volume 0.004 m³. Find its density. Does it float in water?
2. What share of that block is under the surface?
3. Why does ice float with the same share under on Mars as on Earth?
4. A hollow steel ball has mass 2 kg and volume 0.003 m³. Does it float?

??? note "Answers"
    1. $3/0.004 = 750$ kg/m³. Yes.
    2. $750/1000 = 75\%$.
    3. The share is $\rho_\text{ice}/\rho_\text{water}$; gravity cancels out.
    4. Its average density is $2/0.003 \approx 667$ kg/m³, less than water's, so yes.

## Common mistake

**"Things float higher where gravity is weaker."** The weight and the upthrust both scale with $g$, so the share under
water does not change.

## Where it leads

- Back: [Archimedes' principle](04-archimedes-principle.md) · Next: [Balloons on Mars](06-balloons-on-mars.md)
- [Level 5 page](index.md) · [Air and fluids topic page](../index.md)
- Floating at the same depth on Mars, the simple version: [Floating on Mars](../level-2/06-floating-on-mars.md).
