---
title: "Windows and greenhouses"
---

# Windows and greenhouses

*Heat and matter · level 7, lesson 5 of 6*

## A question to start

Plants need light. A greenhouse on Mars would let sunlight in, but its glass would also let heat out all night. Does it
gain more than it loses?

## The idea

Glass lets **visible light** through, but absorbs most **infrared**. Sunlight comes in, warms the plants and soil, and
the infrared they give out cannot easily get back through the glass. That traps heat: the greenhouse effect of a real
greenhouse (along with stopping the warm air blowing away).

But glass is a fairly good conductor, so windows leak heat. More panes, with gaps of still gas between them, cut the
loss:

| Glazing | U-value, W/(m² K), about |
| --- | --- |
| Single pane | 5.8 |
| Double | 2.8 |
| Triple | 1.0 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A greenhouse. Sunlight arrows pass through the glass roof and reach the plants. Infrared arrows from the plants are stopped at the glass and turned back. A small arrow of heat leaks out through the glass.">
  <path d="M40 120 V60 L165 15 L290 60 V120 Z" fill="none" stroke="currentColor" stroke-width="2"/>
  <g stroke="#eea66f" stroke-width="2"><line x1="110" y1="0" x2="130" y2="95"/><line x1="200" y1="0" x2="190" y2="95"/></g>
  <g fill="none" stroke="#d86a3a" stroke-width="2"><path d="M150 100 L140 50 L150 40"/></g>
  <line x1="290" y1="90" x2="320" y2="90" stroke="#5aa0d8" stroke-width="2"/>
  <g fill="#5aa0d8" opacity=".6"><rect x="70" y="100" width="40" height="20"/><rect x="200" y="100" width="40" height="20"/></g>
  <g font-size="11" fill="currentColor"><text x="210" y="12">sunlight in</text><text x="155" y="60">infrared trapped</text><text x="262" y="136">heat leaks</text></g>
</svg>
</div>

## Worked examples

**1. Loss through triple glazing on Mars.** Inside 20 °C, outside −59 °C: $1.0 \times 79 = 79$ W per m², every hour of
the sol.

**2. Gain from the Sun.** From the energy topic, a flat surface near the equator gets about 130 W per m² on average
over a clear sol. Suppose the glass lets 70% through: about 91 W per m².

| A triple-glazed greenhouse, per m², averaged over a sol | Mars | Earth |
| --- | --- | --- |
| Sunlight let in, clear sky | about 91 W | about 230 W |
| Heat lost through the glass | about 79 W | about 5 W |
| Left over | about 12 W | about 220 W |

On Earth (using the same 70% of 325 W/m² and 15 °C outside) a greenhouse gains plenty. On Mars it barely breaks even on a
clear sol, and loses badly at night and in dust storms. Mars greenhouses would need insulated covers at night, or would
grow plants under lamps instead.

**3. With a night cover.** Suppose an insulating cover cuts the loss to 0.3 W/(m² K) for the 12 h of night: the loss
drops to about $(79 + 24)/2 \approx 52$ W per m² on average.

## Try it

1. Why does glass trap heat in a greenhouse?
2. Find the loss through 20 m² of double glazing with 79 K across it.
3. Why do more panes cut the heat loss?
4. Why might a Mars base grow food under lamps rather than in greenhouses?

??? note "Answers"
    1. It lets visible sunlight in but absorbs the infrared the plants and soil give out, and it stops warm air blowing away.
    2. $2.8 \times 20 \times 79 = 4{,}400$ W.
    3. Each gap of still gas adds thermal resistance.
    4. Weak sunlight and huge heat loss mean a greenhouse gains little; lamps in an insulated, buried room may cost less
       energy overall, and work through dust storms.

## Common mistake

**"More glass means more warmth."** Glass lets light in but also leaks heat. On Mars, with 79 K across it, large glass
areas can lose more heat than the sunlight brings.

## Where it leads

- Back: [Regolith as insulation](04-regolith-as-insulation.md) · Next: [A heating budget](06-a-heating-budget.md)
- [Level 7 page](index.md) · [Heat and matter topic page](../index.md)
- The sunlight figures: [Solar panels](../../energy/level-6/04-solar-panels.md). The greenhouse effect of a whole
  planet: [The greenhouse effect on Mars](../level-8/05-the-greenhouse-effect-on-mars.md).
