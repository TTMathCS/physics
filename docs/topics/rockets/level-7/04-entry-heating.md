---
title: "Entry heating"
---

# Entry heating

*Rockets and landing · level 7, lesson 4 of 6*

## A question to start

A capsule entering Mars at 5.5 km/s carries 15 MJ of kinetic energy per kilogram, enough to boil away about six
kilograms of water for each kilogram of capsule. Almost all of it must go somewhere in four minutes. Why doesn't the
capsule melt?

## The idea

**Where the energy goes.** Ahead of a blunt capsule, a **bow shock** stands off from its surface. The air passing through
it is compressed and heated to thousands of kelvin, and then flows round the capsule and away. Most of the energy ends up
in the air, heated and pushed aside. Only a small part flows into the capsule, through the thin **boundary layer** of hot
gas touching its surface.

**Blunt is better.** H. Julian Allen showed in the early 1950s that a **blunt** body keeps the shock standing off far from
its surface, so less heat reaches it, while a sharp nose would be heated fiercely at its tip. Every capsule since has been
blunt.

**How much heating.** A simple estimate for the heat flow per square metre at the nose (the Sutton–Graves formula):

$$q \approx k \sqrt{\frac{\rho}{r_n}}\; v^3,$$

with $r_n$ the nose radius and $k \approx 1.9\times10^{-4}$ in SI units for Mars's carbon dioxide ($1.7\times10^{-4}$ for
Earth's air). Two lessons are in it:

- Heating goes as $v^3$: twice the speed, eight times the heating. That is why coming home to Earth from Mars, at 11 to
  12 km/s, is far harder on a heat shield than landing on Mars at 5 to 6 km/s.
- A larger nose radius $r_n$ means less heating: blunt again.

**Getting rid of the heat.** A hot surface radiates: at 1,300 °C (1,573 K), $\sigma T^4 = 5.67\times10^{-8} \times 1573^4
= 3.5\times10^5$ W/m², or 35 W per cm². Ablative shields also absorb heat by charring and vaporising; the gases they
release thicken the boundary layer and block more heat. Perseverance's shield used **PICA**, a carbon fibre soaked in
resin, light and very good at this.

## Worked examples

**1. A heating estimate.** At $\rho = 4\times10^{-4}$ kg/m³ (about 40 km up), $v = 5{,}300$ m/s, $r_n = 1.1$ m:
$q = 1.9\times10^{-4} \times \sqrt{4\times10^{-4}/1.1} \times 5300^3 = 1.9\times10^{-4} \times 0.019 \times 1.49\times10^{11}
= 5.3\times10^5$ W/m², about 53 W/cm². Real peaks are higher, because the flow turns turbulent over parts of a large shield.

**2. Earth return.** The same capsule at 11 km/s: heating up by $(11/5.3)^3 = 8.9$ times at the same density.

**3. The energy.** $\tfrac12 v^2 = \tfrac12 \times 5500^2 = 15.1$ MJ/kg at Mars; at 11 km/s, 60.5 MJ/kg, four times as much.

## Try it

1. How much does the heating change if the entry speed rises from 5.5 to 6.0 km/s?
2. Why do capsules have a large nose radius?
3. Find the heat a surface at 2,000 K radiates per cm².
4. Why does most of the entry energy not go into the capsule?
5. Why is an Earth return from Mars harder on a heat shield than a Mars landing?

??? note "Answers"
    1. $(6.0/5.5)^3 = 1.30$: 30% more.
    2. Heating goes as $1/\sqrt{r_n}$; a blunt nose also holds the shock further off.
    3. $5.67\times10^{-8} \times 1.6\times10^{13} = 9.1\times10^5$ W/m², about 91 W/cm².
    4. It goes into heating and moving the air that passes through the shock, which flows away.
    5. The speed is about twice as high, so heating is about eight times as great, and the energy four times.

## Common mistake

**"Friction heats the capsule."** The heating comes mostly from compressing the air in the shock. The air touching the
surface does rub, but the main effect is that the compressed, hot gas transfers heat to the shield.

## Where it leads

- Back: [Parachutes and terminal speed](03-parachute-terminal-speed.md) · Next: [Supersonic retropropulsion](05-supersonic-retropropulsion.md)
- [Level 7 page](index.md) · [Rockets and landing topic page](../index.md)
- The simple version: [Heat shields](../level-3/06-heat-shields.md). Radiating heat: the [Heat and matter](../../heat/index.md)
  topic.
