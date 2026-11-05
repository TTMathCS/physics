---
title: "Fission"
---

# Fission

*Energy and power · level 8, lesson 2 of 6*

## A question to start

NASA's Kilopower test reactor had a uranium core about the size of a paper towel roll. A system like it could give up
to 10 kW of electricity for at least 10 years. How can so little fuel give so much?

## The idea

A uranium-235 nucleus that absorbs a neutron becomes unstable and splits in two. This is **fission**. The two pieces
fly apart, and two or three new neutrons come out too. Each fission releases about 200 MeV, which is

$$200 \times 1.6\times10^{-13} \text{ J} = 3.2\times10^{-11} \text{ J}.$$

The new neutrons can split more nuclei: a **chain reaction**. In a reactor it is kept steady, so that each fission leads
on average to exactly one more. Materials that soak up neutrons, in control rods or drums, set the rate.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 150" role="img" aria-label="A neutron hits a uranium-235 nucleus, which splits into two smaller nuclei and three neutrons. Two of the neutrons go on to hit more uranium nuclei.">
  <circle cx="20" cy="75" r="5" fill="#cfc8bf" stroke="currentColor"/><line x1="27" y1="75" x2="60" y2="75" stroke="currentColor"/>
  <circle cx="85" cy="75" r="20" fill="#eea66f" stroke="currentColor"/>
  <circle cx="130" cy="20" r="12" fill="#d86a3a" opacity=".8"/><circle cx="130" cy="130" r="12" fill="#d86a3a" opacity=".8"/>
  <g stroke="#d86a3a" stroke-width="2"><line x1="100" y1="62" x2="121" y2="29"/><line x1="100" y1="88" x2="121" y2="121"/></g>
  <g stroke="currentColor"><line x1="105" y1="75" x2="200" y2="75"/><line x1="102" y1="66" x2="200" y2="30"/><line x1="102" y1="84" x2="200" y2="120"/></g>
  <g fill="#cfc8bf" stroke="currentColor"><circle cx="205" cy="75" r="5"/><circle cx="205" cy="28" r="5"/><circle cx="205" cy="122" r="5"/></g>
  <circle cx="265" cy="28" r="17" fill="#eea66f" stroke="currentColor"/><circle cx="265" cy="122" r="17" fill="#eea66f" stroke="currentColor"/>
  <g stroke="currentColor" stroke-dasharray="3 3"><line x1="210" y1="28" x2="248" y2="28"/><line x1="210" y1="122" x2="248" y2="122"/></g>
  <g font-size="11" fill="currentColor"><text x="5" y="62">neutron</text><text x="70" y="108">U-235</text><text x="148" y="16">two pieces</text>
  <text x="250" y="60">more U-235</text></g>
</svg>
</div>

Where does the energy come from? The pieces, together, have slightly less mass than the uranium and the neutron that
went in: about 0.09% less. That mass is the energy, by $E = mc^2$.

## Worked examples

**1. A kilogram of uranium-235.** It holds $\dfrac{1000}{235} \times 6.02\times10^{23} = 2.56\times10^{24}$ nuclei.
Splitting them all gives $2.56\times10^{24} \times 3.2\times10^{-11} = 8.2\times10^{13}$ J, about 23 GWh of heat.

**2. Against petrol.** Petrol gives about 46 MJ per kg. $8.2\times10^{13}/4.6\times10^7 \approx 1.8$ million times as
much.

**3. The mass lost.** $m = E/c^2 = 8.2\times10^{13}/(9\times10^{16}) = 9\times10^{-4}$ kg: under a gram from each kilogram.

**4. Kilopower's fuel.** Suppose a 10 kW unit turns a quarter of its heat into electricity. Its heat is 40 kW. Over 10
years, $40{,}000 \times 3.16\times10^8 \text{ s} = 1.3\times10^{13}$ J, which splits only about 0.15 kg of uranium-235.
The core holds more than that, because a reactor needs enough uranium to keep the chain going.

## Try it

1. What starts the fission of a uranium-235 nucleus?
2. Why can a chain reaction grow very quickly if it is not controlled?
3. Find the energy from splitting 1 g of uranium-235.
4. A reactor gives 100 kW of heat for a year ($3.16\times10^7$ s). What mass of uranium-235 does it split?

??? note "Answers"
    1. It absorbs a neutron.
    2. Each fission gives out two or three neutrons, and each can cause another fission.
    3. $8.2\times10^{10}$ J, about 23 MWh.
    4. $100{,}000 \times 3.16\times10^7 = 3.2\times10^{12}$ J; $3.2\times10^{12}/8.2\times10^{13} = 0.039$ kg, about 39 g.

## Common mistake

**"Only nuclear reactions turn mass into energy."** Any release of energy lowers the mass. Burning fuel does too, but the
change is about a million times smaller and far too small to weigh.

## Where it leads

- Back: [Radioisotope power](01-radioisotope-power.md) · Next: [A reactor for Mars](03-a-reactor-for-mars.md)
- [Level 8 page](index.md) · [Energy and power topic page](../index.md)
- Nuclei and neutrons: [Radiation](../../radiation/index.md). Mass and energy: [Space and time](../../spacetime/index.md).
  The test: NASA's
  [Kilopower results](https://www.nasa.gov/news-release/demonstration-proves-nuclear-fission-system-can-provide-space-exploration-power/).
