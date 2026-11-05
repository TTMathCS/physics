---
title: "How a wing lifts"
---

# How a wing lifts

*Air and fluids · level 6, lesson 5 of 6*

## A question to start

An airliner weighs hundreds of tonnes, yet its wings hold it up on nothing but air. How does a wing push up on a plane?

## The idea

A wing is shaped and tilted so that it **turns the air flowing past it downwards**. Two ways of looking at it give the
same answer:

- **Newton's third law.** The wing pushes air down, so the air pushes the wing up.
- **Pressure.** The air speeds up over the curved top of the wing, so the pressure there is lower (Bernoulli). Under
  the wing, the pressure is a little higher. The difference, over the wing's area, is the **lift**.

The tilt of the wing into the flow is its **angle of attack**. More tilt turns more air down and gives more lift, up to a
point: tilt it too far and the flow breaks away from the top, and the wing **stalls**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A wing seen from the side, tilted slightly up at the front. Air flows in from the left and leaves the wing angled downwards. Low pressure is marked above the wing and higher pressure below. A big arrow shows lift pointing up.">
  <path d="M90 80 Q130 45 250 78 Q150 88 90 80 Z" fill="#cfc8bf" stroke="currentColor" stroke-width="2"/>
  <g fill="none" stroke="#5aa0d8" stroke-width="2"><path d="M10 55 Q100 40 180 55 Q240 68 320 100"/><path d="M10 95 Q120 95 250 85 Q290 92 320 115"/></g>
  <line x1="160" y1="60" x2="160" y2="12" stroke="#d86a3a" stroke-width="4"/><path d="M152 14 l8 -12 l8 12 z" fill="#d86a3a"/>
  <g font-size="11" fill="currentColor"><text x="175" y="25">lift</text><text x="180" y="44">lower pressure</text><text x="120" y="118">higher pressure</text><text x="255" y="130">air turned down</text></g>
</svg>
</div>

How much lift a wing gives grows with the **air density**, the **wing area** and the **speed squared**. That is the bad
news for wings on Mars: with air 75 times less dense, a wing needs far more speed or far more area to hold up the same
weight.

## Worked examples

**1. Turning air down.** A wing pushes 100 kg of air down each second, giving it a downward speed of 5 m/s. The force on
the air is its change in momentum each second: $100 \times 5 = 500$ N. So the lift is 500 N.

**2. A pressure difference.** A wing of 16 m² has an average of 600 Pa less pressure on top than underneath. Lift
$= 600 \times 16 = 9{,}600$ N, enough to hold up a mass of about 980 kg on Earth.

**3. On Mars.** To give the same lift, the same wing needs the same $\tfrac12\rho v^2$. With $\rho$ 75 times smaller,
$v^2$ must be 75 times bigger, so the speed must be about $\sqrt{75} \approx 8.7$ times higher.

## Try it

1. Which way does a wing push the air?
2. Use Newton's third law to explain lift.
3. A wing turns 40 kg of air down each second to a downward speed of 6 m/s. Find the lift.
4. What happens if the angle of attack is too big?

??? note "Answers"
    1. Downwards.
    2. The wing pushes air down, so the air pushes the wing up with an equal force.
    3. $40 \times 6 = 240$ N.
    4. The flow breaks away from the top and the wing stalls, losing most of its lift.

## Common mistake

**"The air over the top must meet the air underneath at the back, so it goes faster."** There is no such rule; the air
over the top actually gets to the back first. The top air is faster because the wing's shape and tilt bend the flow, and
the lift comes from turning the air down.

## Where it leads

- Back: [Measuring wind speed](04-measuring-wind-speed.md) · Next: [Propellers and rotors](06-propellers-and-rotors.md)
- [Level 6 page](index.md) · [Air and fluids topic page](../index.md)
- The lift equation: [The lift equation](../level-7/04-the-lift-equation.md). Momentum and force:
  [Forces and motion](../../forces/index.md).
