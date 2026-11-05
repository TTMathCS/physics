# Physics

Physics for getting to Mars and living there: https://physics.akadian.ca/ (part of Mars – your new home,
www.akadian.ca). Built with MkDocs Material in the same look as math.akadian.ca (TTMathCS/math); GitHub Pages publishes
it on every push to `main` (`.github/workflows/pages.yml`), so a push here is a publish.

## Layout

```
mkdocs.yml                 the site; the topics part of the menu is written by tools/nav.py
docs/index.md              the first page: first lessons, the three levels, the topics
docs/start.md              six first lessons for beginners
docs/level-check.md        four questions that suggest a level (javascripts/levelcheck.js)
docs/sims.md               the simulators (javascripts/sims.js, stylesheets/sims.css)
docs/topics/<topic>/       one folder per topic: index.md, then level-1/ to level-8/
docs/images/               the banner and the background pictures, with their sources in images/README.md
overrides/home.html        the banner on the first page
tools/nav.py               writes the topics menu from the folders
tools/hero/                the banner's original picture and the prompt it was made from
```

## Topics

Ten topics, each a ladder of 8 levels (rough ages 5-6 up to 17 and beyond). Gravity and orbits and Rockets and landing
are written in full, six lessons a level; the other eight have their topic page with the ladder.

## Writing a lesson

Copy a lesson of the same level. Every lesson has the same parts:

1. front matter `title:`, a `#` title, and the italic line `*Topic · level N, lesson k of m*`;
2. `## A question to start`, `## The idea` (pictures as inline SVG inside `<div class="pattern-row" markdown="0">`),
   `## Worked examples`, `## Try it` with the answers in `??? note "Answers"`, `## Common mistake`, `## Where it leads`;
3. Mars numbers next to Earth's in a table (a Mars column and an Earth column), facts linked to their source.

Name it `NN-short-name.md` in its level folder, add it to the level's `index.md` table and the topic's `index.md`, then

```
python3 tools/nav.py
mkdocs build --strict
```

The strict build stops on any broken link or anchor.

## Numbers used everywhere

Mars: $g$ = 3.71 m/s², mean radius 3,389.5 km, $GM$ = 42,828 km³/s², escape speed 5.03 km/s, air at the ground about
0.020 kg/m³, sidereal day 24.62 h, sol 24 h 39 min, year 687 days. Earth: $g$ = 9.81 m/s², radius 6,371 km,
$GM$ = 398,600 km³/s², air 1.225 kg/m³. From NASA's fact sheets (https://nssdc.gsfc.nasa.gov/planetary/factsheet/).

## The banner

`docs/images/physics-hero.webp` is made from `tools/hero/physics-hero.png`, which Codex (OpenAI) made on 4 Nov 2026 from
`tools/hero/codex-prompt.md`. It is labelled AI-created on the page.
