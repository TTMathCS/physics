---
title: "Dust on the panels"
---

# Dust on the panels

*Energy and power · level 6, lesson 5 of 6*

## A question to start

The rovers Spirit and Opportunity were built to last 90 sols. Spirit lasted six years and Opportunity more than 14.
Both ran on solar panels, in a dusty place. How did the panels keep working?

## The idea

Fine Mars dust is always settling out of the air. A thin layer on a solar panel blocks some of the light, so its power
drops a little every sol. That sounds small, but over a few hundred sols it adds up. Spirit's panels normally made
about 700 Wh a sol; by the end of 2008, with dusty panels and a winter storm, they made about 89 Wh.

Two things helped the rovers:

- **Cleaning events**: gusts of wind and passing dust devils blew the dust off. Each time, the power jumped back up,
  sometimes almost to what it was at landing.
- **Careful planning**: in dusty seasons, the team used less power, and parked the rover on slopes tilted towards the
  Sun in winter.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 160" role="img" aria-label="A graph of a solar rover's power over many sols: it slowly falls as dust builds up, then jumps up at two cleaning events, then falls again.">
  <line x1="30" y1="140" x2="310" y2="140" stroke="currentColor"/><line x1="30" y1="140" x2="30" y2="15" stroke="currentColor"/>
  <polyline points="30,25 110,75 110,35 200,90 200,45 300,100" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g font-size="11" fill="currentColor"><text x="150" y="155">sols</text><text x="2" y="80">power</text><text x="70" y="22">cleaning event</text><text x="205" y="36">another</text></g>
</svg>
</div>

The lander **InSight** was less lucky. Its panels made about 5,000 Wh a sol just after landing in 2018. No cleaning
event ever cleared them properly, and by mid-2022 they were down to about 500 Wh a sol. InSight fell silent in December
2022.

For a city, the answer is simpler: people or robots can **sweep or blow the panels clean**. Some research has looked at
panels that shake or repel dust using electric charges.

## Worked examples

**1. A slow loss.** Suppose a panel loses 0.25% of its power each sol. After 200 sols, the power is $0.9975^{200} = 0.61$ of the
start, a loss of nearly 40%.

**2. InSight.** From 5,000 Wh to 500 Wh is a factor of 10: 90% of the power lost, mostly to dust.

**3. Why tilting helps.** In winter the Sun is low. Tilting the rover towards it can raise the panels' power by tens of
percent.

## Try it

1. Why does a Mars solar panel slowly lose power?
2. What is a cleaning event?
3. A panel loses 0.3% a sol. Roughly what fraction of its power is left after 100 sols?
4. Why would a city not have InSight's problem?

??? note "Answers"
    1. Dust settles on it from the air and blocks some light.
    2. A gust of wind or a dust devil that blows the dust off the panels.
    3. $0.997^{100} = 0.74$, about three-quarters.
    4. People or robots could clean the panels.

## Common mistake

**Adding the losses as a straight line.** 0.25% a sol for 200 sols is not a 50% loss. Each sol takes 0.25% of what is
left, so the losses multiply: $0.9975^{200} = 0.61$.

## Where it leads

- Back: [Solar panels](04-solar-panels.md) · Next: [Dust storms](06-dust-storms.md)
- [Level 6 page](index.md) · [Energy and power topic page](../index.md)
- The missions: NASA's [Spirit mission page](https://science.nasa.gov/mission/mer-spirit/),
  [InSight's power](https://science.nasa.gov/resource/insights-power-generation-after-landing-and-spring-2022/) and
  [InSight's last sols](https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/).
