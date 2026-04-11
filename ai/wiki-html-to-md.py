#!/usr/bin/env python3
"""
Конвертация wiki-HTML (кастомные теги VitePress/Vue) в Markdown.

Зависимости: pip install -r ai/requirements-wiki-html-to-md.txt

Пример:
  python3 ai/wiki-html-to-md.py docs/wiki/dev-commit/theory/some-topic

Правила (как в ai/prompts.md для design-patterns):
  - h1 или (если нет) первый h2 → заголовок первого уровня #
  - h3/h4 → ## / ### относительно базы
  - img: src → ../@img/<basename>
  - ul/ol → markdown-списки
  - v-code → fenced code, lang из атрибута (первое слово)
  - удаление <!-- TODO: ... --> и <f-search>...</f-search>
  - u-text-define → **текст**
  - u-link-wrapper + v-link → ::: info … ::: с URL построчно (без [text](url))
  - v-details → ::: details
  - v-two-border → v-two, затем v-two / v-two-code → два столбца с ---

После конвертации .html удаляются (используйте git / бэкап).
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag


def strip_comments(html: str) -> str:
    html = re.sub(r"<!--\s*TODO:[\s\S]*?-->", "", html, flags=re.IGNORECASE)
    html = re.sub(r"<f-search>[\s\S]*?</f-search>", "", html)
    html = re.sub(r"<!--[\s\S]*?-->", "", html)
    html = re.sub(r"<!-+>[\s\S]*?<!-+>", "", html)
    return html


def u_code_inside(s: str) -> str:
    return re.sub(r"<u-code>([\s\S]*?)</u-code>", r"\1", s)


def replace_v_code(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        lang = (m.group(1) or "text").strip().split()[0]
        body = u_code_inside(m.group(2)).strip()
        return f"\n\n```{lang}\n{body}\n```\n\n"

    return re.sub(
        r'<v-code\s+lang="([^"]*)"[^>]*>([\s\S]*?)</v-code>',
        repl,
        html,
        flags=re.IGNORECASE,
    )


def replace_v_details(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        title = m.group(1)
        body = m.group(2).strip()
        return f"\n\n::: details {title}\n\n{body}\n\n:::\n\n"

    return re.sub(
        r'<v-details\s+title="([^"]*)"[^>]*>([\s\S]*?)</v-details>',
        repl,
        html,
        flags=re.IGNORECASE,
    )


def replace_v_two_code(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        type_attr = m.group(1) or ""
        comment = m.group(2) or ""
        inner = m.group(3)
        langs = [
            p.strip().split()[0] if p.strip() else "text" for p in type_attr.split(";")
        ]
        comments = [c.strip() for c in comment.split(";")]
        slot = re.search(
            r"<template\s+v-slot:first\s*>([\s\S]*?)</template>\s*<template\s+v-slot:last\s*>([\s\S]*?)</template>",
            inner,
            re.IGNORECASE,
        )
        if not slot:
            return inner
        a, b = slot.group(1).strip(), slot.group(2).strip()
        c0 = comments[0] if len(comments) > 0 else "A"
        c1 = comments[1] if len(comments) > 1 else "B"
        l0 = langs[0] if len(langs) > 0 else "text"
        l1 = langs[1] if len(langs) > 1 else l0
        return (
            f"\n\n#### {c0}\n\n```{l0}\n{a}\n```\n\n#### {c1}\n\n```{l1}\n{b}\n```\n\n"
        )

    return re.sub(
        r'<v-two-code[^>]*type="([^"]*)"[^>]*comment="([^"]*)"[^>]*>([\s\S]*?)</v-two-code>',
        repl,
        html,
        flags=re.IGNORECASE,
    )


def replace_v_two_border(html: str) -> str:
    """v-two-border → v-two (тот же layout слотов first/last)."""

    return re.sub(
        r"<v-two-border[^>]*>([\s\S]*?)</v-two-border>",
        r"<v-two>\1</v-two>",
        html,
        flags=re.IGNORECASE,
    )


def replace_v_two(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = m.group(1)
        slot = re.search(
            r"<template\s+v-slot:first\s*>([\s\S]*?)</template>\s*<template\s+v-slot:last\s*>([\s\S]*?)</template>",
            inner,
            re.IGNORECASE,
        )
        if not slot:
            return inner
        a, b = slot.group(1).strip(), slot.group(2).strip()
        return f"\n\n{a}\n\n---\n\n{b}\n\n"

    return re.sub(r"<v-two>([\s\S]*?)</v-two>", repl, html, flags=re.IGNORECASE)


def replace_u_link_wrapper(html: str) -> str:
    """По ai/prompts.md: только URL внутри ::: info (без markdown-ссылок)."""

    def repl(m: re.Match[str]) -> str:
        block = m.group(1)
        urls = re.findall(r'<v-link[^>]*\surl="([^"]+)"', block, flags=re.IGNORECASE)
        if not urls:
            urls = re.findall(r'<v-link[^>]*url="([^"]+)"', block, flags=re.IGNORECASE)
        body = "\n".join(urls)
        return f"\n\n::: info\n{body}\n:::\n\n"

    return re.sub(
        r"<u-link-wrapper>([\s\S]*?)</u-link-wrapper>",
        repl,
        html,
        flags=re.IGNORECASE,
    )


def strip_u_message(html: str) -> str:
    html = re.sub(r"<u-message-ok>", "", html, flags=re.IGNORECASE)
    html = re.sub(r"</u-message-ok>", "", html, flags=re.IGNORECASE)
    return html


def inline_to_md(text: str) -> str:
    text = re.sub(
        r"<u-text-define>([\s\S]*?)</u-text-define>",
        r"**\1**",
        text,
        flags=re.IGNORECASE,
    )
    text = re.sub(r"<u-code-text>([\s\S]*?)</u-code-text>", r"`\1`", text, flags=re.IGNORECASE)
    text = re.sub(r"<u-code>([\s\S]*?)</u-code>", r"`\1`", text, flags=re.IGNORECASE)
    text = re.sub(r"<b>([\s\S]*?)</b>", r"**\1**", text, flags=re.IGNORECASE)
    text = re.sub(r"<strong>([\s\S]*?)</strong>", r"**\1**", text, flags=re.IGNORECASE)
    text = re.sub(r"<em>([\s\S]*?)</em>", r"*\1*", text, flags=re.IGNORECASE)
    text = re.sub(r"<i>([\s\S]*?)</i>", r"*\1*", text, flags=re.IGNORECASE)
    text = re.sub(r"<u>([^<]*)</u>", r"*\1*", text, flags=re.IGNORECASE)
    return text


def fix_imgs(soup: BeautifulSoup) -> None:
    for img in soup.find_all("img"):
        src = (img.get("src") or "").strip()
        if not src:
            continue
        name = src.split("/")[-1].split("?")[0]
        img["src"] = f"../@img/{name}"


def element_to_md(el: Tag, heading_base: int) -> str:
    name = el.name.lower()
    if name in ("h1", "h2", "h3", "h4", "h5", "h6"):
        level = int(name[1]) - heading_base + 1
        level = max(1, min(6, level))
        text = inline_to_md(el.get_text(strip=True))
        return f"\n\n{'#' * level} {text}\n\n"
    if name == "hr":
        return "\n\n---\n\n"
    if name == "p":
        t = "".join(fragment_to_md(c, heading_base) for c in el.children)
        t = t.strip()
        return f"\n\n{t}\n\n" if t else ""
    if name in ("ul", "ol"):
        return list_to_md(el, heading_base, ordered=name == "ol")
    if name == "br":
        return "\n"
    return ""


def list_to_md(el: Tag, heading_base: int, ordered: bool, depth: int = 0) -> str:
    lines: list[str] = []
    indent = "  " * depth
    idx = 1
    for li in el.find_all("li", recursive=False):
        parts: list[str] = []
        nested_lists: list[Tag] = []
        for child in li.children:
            if isinstance(child, NavigableString):
                parts.append(str(child))
            elif isinstance(child, Tag):
                if child.name.lower() in ("ul", "ol"):
                    nested_lists.append(child)
                elif child.name.lower() == "hr":
                    parts.append("\n\n---\n\n")
                else:
                    parts.append(fragment_to_md(child, heading_base))
        body = inline_to_md("".join(parts)).strip()
        body = re.sub(r"\s+", " ", body).strip()
        if ordered:
            lines.append(f"{indent}{idx}. {body}")
            idx += 1
        else:
            lines.append(f"{indent}- {body}")
        for nl in nested_lists:
            lines.append(
                list_to_md(
                    nl, heading_base, ordered=nl.name.lower() == "ol", depth=depth + 1
                ).rstrip("\n")
            )
    return "\n" + "\n".join(lines) + "\n\n"


def fragment_to_md(node: NavigableString | Tag, heading_base: int) -> str:
    if isinstance(node, NavigableString):
        return inline_to_md(str(node))
    if not isinstance(node, Tag):
        return ""
    name = node.name.lower()
    if name == "u-text-define":
        inner = "".join(fragment_to_md(c, heading_base) for c in node.children)
        return f"**{inner}**"
    if name in ("ul", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "p"):
        return element_to_md(node, heading_base)
    if name == "li":
        inner = "".join(fragment_to_md(c, heading_base) for c in node.children)
        return inline_to_md(inner)
    return "".join(fragment_to_md(c, heading_base) for c in node.children)


def soup_body_to_md(soup: BeautifulSoup) -> str:
    has_h1 = bool(soup.find("h1"))
    heading_base = 1 if has_h1 else 2
    body = soup.find("body") or soup
    chunks: list[str] = []
    for child in body.children:
        if isinstance(child, NavigableString):
            t = str(child).strip()
            if t:
                chunks.append(inline_to_md(t))
        elif isinstance(child, Tag):
            chunks.append(fragment_to_md(child, heading_base))
    text = "".join(chunks)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip() + "\n"


def postprocess_md(md: str) -> str:
    """Убирает типичные склейки после смешения HTML и markdown в одном потоке."""
    # ``` сразу перед кириллицей / звёздочкой / двоеточием (конец fence + текст)
    md = re.sub(r"\n```([А-Яа-яЁё*#:])", r"\n```\n\n\1", md)
    # проза или ** сразу перед открытием блока кода ```lang
    md = re.sub(
        r"([А-Яа-яЁёa-zA-Z0-9\)\*])\s*```(js|ts|tsx|jsx|bash|sh|html|css|scss|json|vue|md|none)\b",
        r"\1\n\n```\2",
        md,
    )
    # --- сразу перед словом (разделитель v-two и заголовок)
    md = re.sub(r"\n---([А-Яа-яЁёA-Za-z*])", r"\n---\n\n\1", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md


def convert_html_to_md(html: str) -> str:
    html = strip_comments(html)
    html = replace_v_code(html)
    html = replace_v_details(html)
    html = replace_v_two_code(html)
    html = replace_v_two_border(html)
    html = replace_v_two(html)
    html = replace_u_link_wrapper(html)
    html = strip_u_message(html)
    html = re.sub(r"<hr\s*/?>", "\n\n---\n\n", html, flags=re.IGNORECASE)
    wrapped = f"<body>{html}</body>"
    soup = BeautifulSoup(wrapped, "html.parser")
    fix_imgs(soup)
    md = soup_body_to_md(soup)
    return postprocess_md(md)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Конвертировать .html в .md в указанной директории (рекурсивно)."
    )
    parser.add_argument(
        "directory",
        type=Path,
        help="Корневая папка с .html (например docs/wiki/.../some-topic)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Только показать, какие файлы были бы обработаны",
    )
    args = parser.parse_args()
    root: Path = args.directory.resolve()
    if not root.is_dir():
        print(f"Не каталог: {root}", file=sys.stderr)
        return 1

    html_files = sorted(root.rglob("*.html"))
    if not html_files:
        print(f"Нет .html в {root}")
        return 0

    for path in html_files:
        if args.dry_run:
            print(f"would convert: {path.relative_to(root)}")
            continue
        raw = path.read_text(encoding="utf-8")
        md = convert_html_to_md(raw)
        out = path.with_suffix(".md")
        out.write_text(md, encoding="utf-8")
        path.unlink()
        print(f"{path.relative_to(root)} -> {out.name}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
