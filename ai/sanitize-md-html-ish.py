#!/usr/bin/env python3
"""
Экранирует "похожие на HTML" теги в Markdown-тексте (вне fenced code blocks и вне inline `...`),
чтобы при markdown.html=true Vue не пытался парсить их как реальную разметку.

Правила:
- Не трогаем строки внутри ```...``` fences
- Не трогаем куски внутри inline backticks `...`
- Заменяем последовательности вида <tag ...> / </tag> на HTML-сущности &lt;...&gt;
- Не трогаем уже экранированное (&lt;...&gt;)
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


TAG_RE = re.compile(r"</?[A-Za-z][\w:-]*(?:\s[^<>]*)?>")


def _escape_tag_like_spans_in_plain_text(text: str) -> str:
    out: list[str] = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch != "<":
            out.append(ch)
            i += 1
            continue

        # уже экранировано
        if text.startswith("&lt;", i):
            out.append("&lt;")
            i += 4
            continue

        # HTML-комментарии оставляем как есть (часто там <img ...> внутри)
        if text.startswith("<!--", i):
            end = text.find("-->", i + 4)
            if end == -1:
                out.append(text[i:])
                break
            out.append(text[i : end + 3])
            i = end + 3
            continue

        m = TAG_RE.match(text, i)
        if not m:
            out.append("&lt;")
            i += 1
            continue

        span = m.group(0)
        out.append(span.replace("<", "&lt;").replace(">", "&gt;"))
        i = m.end()

    return "".join(out)


def _process_line_outside_fence(line: str) -> str:
    # Разбиваем по inline backticks, чередуя plain/code
    parts = line.split("`")
    for idx in range(0, len(parts), 2):
        parts[idx] = _escape_tag_like_spans_in_plain_text(parts[idx])
    return "`".join(parts)


def sanitize_markdown_file(path: Path) -> bool:
    raw = path.read_text(encoding="utf-8", errors="replace")
    lines = raw.splitlines(keepends=True)

    in_fence = False
    changed = False
    new_lines: list[str] = []
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith("```"):
            in_fence = not in_fence
            new_lines.append(line)
            continue

        if in_fence:
            new_lines.append(line)
            continue

        new_line = _process_line_outside_fence(line)
        if new_line != line:
            changed = True
        new_lines.append(new_line)

    if changed:
        path.write_text("".join(new_lines), encoding="utf-8")
    return changed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "roots",
        nargs="+",
        type=Path,
        help="Корневые директории, внутри которых рекурсивно обработать *.md",
    )
    args = parser.parse_args()

    total = 0
    changed = 0
    for root in args.roots:
        root = root.resolve()
        if not root.exists():
            print(f"skip missing: {root}", file=sys.stderr)
            continue
        for md in sorted(root.rglob("*.md")):
            total += 1
            if sanitize_markdown_file(md):
                changed += 1
                print(f"updated: {md}")

    print(f"done. scanned={total}, changed={changed}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
