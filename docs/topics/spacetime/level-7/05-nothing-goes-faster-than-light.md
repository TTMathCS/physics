---
title: "Nothing goes faster than light"
---

# Nothing goes faster than light

*Space and time · level 7, lesson 5 of 6*

## A question to start

A ship moving at $0.6c$ fires a probe forward at $0.6c$. Does the probe go at $1.2c$?

## The idea

Two things stop anything with mass from reaching $c$.

**Speeds do not simply add.** If a ship moves at $u$ and fires something forward at $v$ (measured on the ship), an
outside observer sees

$$w = \frac{u + v}{1 + uv/c^2}.$$

For everyday speeds the bottom is almost exactly 1, and the speeds just add. Near $c$ the bottom grows, and $w$ always
stays below $c$.

**Energy grows without limit.** A body of mass $m$ moving with Lorentz factor $\gamma$ has kinetic energy

$$E_k = (\gamma - 1)\,mc^2.$$

As $v \to c$, $\gamma$ grows without bound, so the energy needed does too. Reaching $c$ would take infinite energy.

Light itself has no mass, and always moves at $c$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A graph of kinetic energy against speed. The curve rises slowly at first and then shoots up towards a dashed line at the speed of light, never reaching it.">
  <g stroke="currentColor"><line x1="30" y1="120" x2="310" y2="120"/><line x1="30" y1="120" x2="30" y2="10"/></g>
  <line x1="280" y1="10" x2="280" y2="120" stroke="currentColor" stroke-dasharray="4 4"/>
  <path d="M30 120 Q150 118 200 105 Q250 90 265 60 Q273 35 276 10" fill="none" stroke="#d86a3a" stroke-width="2"/>
  <g font-size="11" fill="currentColor"><text x="270" y="134">c</text><text x="120" y="134">speed</text><text x="35" y="20">energy needed</text></g>
</svg>
</div>

## Worked examples

**1. The probe.** $u = v = 0.6c$. $w = \frac{1.2c}{1 + 0.36} \approx 0.88c$. Not $1.2c$.

**2. Everyday check.** $u = v = 30$ m/s. $uv/c^2 = 900 \div (9 \times 10^{16}) = 10^{-14}$. The bottom is 1 to 14
decimal places: the speeds just add.

**3. Energy for 1 kg.** At $0.8c$, $\gamma = 1.667$: $E_k = 0.667 \times 1 \times (3 \times 10^8)^2 \approx 6 \times 10^{16}$ J.
At $0.99c$, $\gamma \approx 7.09$: about $5.5 \times 10^{17}$ J, nine times more, for less than a quarter more speed.

## Try it

1. Why can speeds not simply be added near $c$?
2. Add $0.5c$ and $0.5c$ using the rule.
3. What happens to the kinetic energy needed as $v$ gets close to $c$?
4. Add $c$ and $0.5c$ using the rule. What does it show?

??? note "Answers"
    1. The rule has a bottom line of $1 + uv/c^2$, which keeps the result below $c$.
    2. $\frac{1.0c}{1 + 0.25} = 0.8c$.
    3. It grows without limit.
    4. $\frac{1.5c}{1 + 0.5} = c$. Light stays at $c$ whatever the source does.

## Common mistake

**"If you push long enough, you get past $c$."** Each push adds less and less speed. The energy goes into ever larger
$\gamma$, not past the limit.

## Where it leads

- Back: [Length contraction](04-length-contraction.md) · Next: [Clocks on a trip to Mars](06-clocks-on-a-trip-to-mars.md)
- [Level 7 page](index.md) · [Space and time topic page](../index.md)
- Mass and energy: [Mass and energy](../../radiation/level-8/01-mass-and-energy.md).
