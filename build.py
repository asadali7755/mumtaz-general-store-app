"""Build index.html from the design sources in src/.

Usage:  python build.py

src/app.dc.html    customer + shopkeeper app (template + logic)
src/pitch.dc.html  "Why this app" screen
src/shell.html     page wrapper and the small runtime that renders the templates
src/images.json    maps Claude Design asset ids to files in images/
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"


def parts(path):
    s = path.read_text(encoding="utf-8")
    tpl = re.search(r"<x-dc>(.*)</x-dc>", s, re.S).group(1)
    tpl = re.sub(r"<helmet>.*?</helmet>", "", tpl, flags=re.S)
    js = re.search(r"data-dc-script[^>]*>(.*?)</script>", s, re.S).group(1)
    return tpl.strip(), js.strip()


def main():
    app_tpl, app_js = parts(SRC / "app.dc.html")
    pitch_tpl, pitch_js = parts(SRC / "pitch.dc.html")
    html = (SRC / "shell.html").read_text(encoding="utf-8")
    html = (html.replace("%%MAIN_TPL%%", app_tpl).replace("%%PITCH_TPL%%", pitch_tpl)
                .replace("%%MAIN_JS%%", app_js).replace("%%PITCH_JS%%", pitch_js))
    images = json.loads((SRC / "images.json").read_text(encoding="utf-8"))
    for blob_id, name in images.items():
        html = html.replace("/_blob/" + blob_id, "images/" + name + ".webp")
    if "/_blob/" in html:
        raise SystemExit("An image id in src/ is missing from src/images.json")
    (ROOT / "index.html").write_text(html, encoding="utf-8")
    print("index.html built")


if __name__ == "__main__":
    main()
