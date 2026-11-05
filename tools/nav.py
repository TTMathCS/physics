# Writes the topics part of the menu in mkdocs.yml from docs/topics/: each topic, its 8 levels, each level's lessons
# in file order. The titles come from each page's front matter. Run it after adding a lesson: python3 tools/nav.py
import os, re

ROOT = os.path.join(os.path.dirname(__file__), "..")
DOCS = os.path.join(ROOT, "docs")
ORDER = ["gravity", "rockets", "forces", "energy", "heat", "air", "waves", "electricity", "radiation", "spacetime"]


def title(path):
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', open(path).read(), re.M)
    return m.group(1).replace('\\"', '"') if m else os.path.basename(path)


def q(s):
    return '"' + s.replace('"', '\\"') + '"'


out = ["  # topics: start", "  - Topics:", "      - topics/index.md"]
for t in ORDER:
    d = os.path.join(DOCS, "topics", t)
    if not os.path.isdir(d):
        continue
    out.append(f"      - {q(title(os.path.join(d, 'index.md')))}:")
    out.append(f"          - topics/{t}/index.md")
    for lv in sorted(x for x in os.listdir(d) if x.startswith("level-")):
        ld = os.path.join(d, lv)
        out.append(f"          - {q(title(os.path.join(ld, 'index.md')))}:")
        out.append(f"              - topics/{t}/{lv}/index.md")
        for f in sorted(x for x in os.listdir(ld) if x.endswith(".md") and x != "index.md"):
            out.append(f"              - topics/{t}/{lv}/{f}")
out.append("  # topics: end")

p = os.path.join(ROOT, "mkdocs.yml")
s = open(p).read()
s = re.sub(r"  # topics: start\n.*?  # topics: end", "\n".join(out), s, flags=re.S)
open(p, "w").write(s)
print(sum(1 for x in out if x.strip().startswith("- topics/") and not x.endswith("index.md")), "lessons in the menu")
