#!/usr/bin/env python3
"""
Конвертация wiki build-*.js (псевдо-питон) -> build-*.ts по правилам ai/prompts.md.

Что делает:
- Для набора конфигов (dir, buildFileBase, path, title, theme)
  - создаёт <dir>/index.md если нет
  - читает <dir>/<buildFileBase>.js и извлекает ARR_MODULE через exec() после нормализации
  - генерирует <dir>/<buildFileBase>.ts с topics/children (без null-сплиттеров в sidebar)
  - удаляет исходный .js build-файл
  - запускает ai/wiki-html-to-md.py для dir (конвертирует .html -> .md)

Важно:
- Статусы done/check/doit сохраняются как 3й элемент tuple в sidebar children.
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Literal


TTheme = Literal[
    "default",
    "react",
    "node",
    "js",
    "vue",
    "html",
    "primary",
    "secondary",
    "accent",
    "actual",
    "tech",
    "theory",
    None,
]


@dataclass(frozen=True)
class Config:
    full_path: Path
    build_file: str
    path: str
    title: str
    theme: TTheme


def _normalize_source(src: str) -> str:
    # Часто build-*.js выглядят как python-подобный синтаксис с "false" и т.п.
    src = src.replace("\r\n", "\n").replace("\r", "\n")
    src = re.sub(r"\bfalse\b", "False", src)
    src = re.sub(r"\btrue\b", "True", src)
    src = re.sub(r"\bnull\b", "None", src)
    # JS object keys -> python dict keys: title: 'x' -> "title": 'x'
    # Делаем замену только в контексте объектов/массивов (после { или , или на начале строки).
    src = re.sub(r'(?m)(^|\{|,)\s*([A-Za-z_][A-Za-z0-9_-]*)\s*:', r'\1 "\2":', src)
    return src


def _exec_arr_module(src: str) -> list[dict[str, Any]]:
    g: dict[str, Any] = {}

    class _Emoji:
        def __getattr__(self, name: str) -> str:
            # В build-*.js эмодзи склеиваются со строкой: emoji.star + "..."
            return f"emoji.{name} + "

    class _ThemeMenu:
        def __init__(self, items: list[str], suffix: str = "") -> None:
            self.items = items
            self.suffix = suffix

        def __add__(self, other: object) -> "_ThemeMenu":
            if isinstance(other, str):
                return _ThemeMenu(self.items, self.suffix + other)
            return self

        def __radd__(self, other: object) -> "_ThemeMenu":
            if isinstance(other, str):
                return _ThemeMenu(self.items, str(other) + self.suffix)
            return self

        def __repr__(self) -> str:
            return f"_ThemeMenu(items={self.items!r}, suffix={self.suffix!r})"

    def setTheme(_n: int, data: list[str]) -> _ThemeMenu:
        return _ThemeMenu(data)

    def getLink(root: str, key: str) -> tuple[str, str]:
        # getLink(root,'info') -> ("main/info", "__SUBTITLE__:info")
        return (f"main/{key}", f"__SUBTITLE__:{key}")

    g.update(
        {
            "emoji": _Emoji(),
            "setTheme": setTheme,
            "getLink": getLink,
        }
    )
    l: dict[str, Any] = {}
    exec(_normalize_source(src), g, l)
    arr = l.get("ARR_MODULE")
    if not isinstance(arr, list):
        raise ValueError("ARR_MODULE не найден или не список")
    # ожидаем список словарей {title, themes, ...}
    return arr


def _ts_string(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", " ")
        .strip()
    )


def _render_child_title(v: Any) -> str:
    # v может быть строкой, или ("__THEME_MENU__", ["a","b"]), или "__SUBTITLE__:info"
    if v.__class__.__name__ == "_ThemeMenu":
        items = getattr(v, "items", []) if isinstance(getattr(v, "items", []), list) else []
        items_ts = ", ".join(f'"{_ts_string(str(x))}"' for x in items)
        return f'getThemeMenu("method", [{items_ts}])'
    if isinstance(v, str) and v.startswith("__SUBTITLE__:"):
        key = v.split(":", 1)[1]
        return f'getTopicSubtitle("{_ts_string(key)}")'
    if isinstance(v, str) and v.startswith("emoji."):
        # уже в виде: emoji.star + "..."
        return v
    return f'"{_ts_string(str(v))}"'


def _render_child(
    entry: list[Any] | tuple[Any, ...],
    local_root_prefix: str,
) -> str | None:
    # entry: [path, title, ...optional flags/status]
    if not isinstance(entry, (list, tuple)) or len(entry) < 2:
        return None
    p = str(entry[0]).strip()
    t = entry[1]

    # Пустые заглушки вида ["",""] / [] в исходниках sidebar не поддерживаем → пропускаем.
    if not p or (isinstance(t, str) and not t.strip()):
        return None

    if local_root_prefix and p.startswith(local_root_prefix):
        p = p[len(local_root_prefix) :]

    status: str | None = None
    # статус может быть 4-м элементом 'done'/'check'/'doit'
    for x in entry[2:]:
        if isinstance(x, str) and x in ("done", "check", "doit"):
            status = x

    title_expr = _render_child_title(t)

    # чистим HTML-комментарии вроде <u-code-comment>__proto__</u-code-comment>
    if "u-code-comment" in title_expr:
        title_expr = re.sub(r"<[^>]+>", "", title_expr)

    if status:
        return f'["{_ts_string(p)}", {title_expr}, "{status}"],'
    return f'["{_ts_string(p)}", {title_expr}],'


def _needs_emoji(arr: list[dict[str, Any]]) -> bool:
    def _has_emoji(x: Any) -> bool:
        if isinstance(x, str) and x.startswith("emoji."):
            return True
        if isinstance(x, (list, tuple)):
            return any(_has_emoji(i) for i in x)
        if isinstance(x, dict):
            return any(_has_emoji(v) for v in x.values())
        return False

    return _has_emoji(arr)


def convert_one(cfg: Config, repo_root: Path) -> None:
    full_dir = repo_root / cfg.full_path
    full_dir.mkdir(parents=True, exist_ok=True)

    index_md = full_dir / "index.md"
    index_md.touch(exist_ok=True)

    build_js = full_dir / f"{cfg.build_file}.js"
    if not build_js.exists():
        # Уже конвертировали ранее (в рамках текущего прогона или вручную).
        return

    arr = _exec_arr_module(build_js.read_text(encoding="utf-8", errors="replace"))
    local_root_prefix = cfg.path.strip("/").split("/")[-1] + "/"

    need_emoji = _needs_emoji(arr)

    topics_blocks: list[str] = []
    for block in arr:
        title = str(block.get("title") or "").strip()
        themes = block.get("themes")
        if not title:
            continue
        children_lines: list[str] = []
        if isinstance(themes, list):
            for entry in themes:
                rendered = _render_child(entry, local_root_prefix)
                if rendered:
                    children_lines.append("      " + rendered)
        topics_blocks.append(
            "\n".join(
                [
                    "  {",
                    f'    title: "{_ts_string(title)}",',
                    "    children: [",
                    *children_lines,
                    "    ],",
                    "  },",
                ]
            )
        )

    imports = [
        'import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";',
        'import { getTopicSubtitle, getThemeMenu } from "docs/utils";',
    ]
    if need_emoji:
        imports.append('import { emoji } from "docs/constants";')
    imports.append("")
    imports.append('import { rootPath } from "../../constants";')

    theme_ts = "null" if cfg.theme is None else f'"{cfg.theme}"'

    ts = "\n".join(
        [
            *imports,
            "",
            f'const path = rootPath + "{_ts_string(cfg.path)}";',
            f'const title = "{_ts_string(cfg.title)}";',
            f"const theme: TThemeTopics = {theme_ts};",
            "",
            "const topics: ISidebarTopics[] = [",
            *topics_blocks,
            "];",
            "",
            "export default { topics, path, title, theme } satisfies IBuildTopics;",
            "",
        ]
    )

    build_ts = full_dir / f"{cfg.build_file}.ts"
    build_ts.write_text(ts, encoding="utf-8")

    build_js.unlink()

    # Конвертация HTML -> MD (удаляет .html)
    subprocess.check_call(
        [sys.executable, "ai/wiki-html-to-md.py", str(cfg.full_path)],
        cwd=str(repo_root),
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo-root", type=Path, default=Path(".").resolve())
    args = parser.parse_args()

    repo_root: Path = args.repo_root.resolve()

    configs: list[Config] = [
        Config(Path("docs/wiki/dev-commit/js/js-class"), "build-js-class", "js/js-class/", "Class", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-function"), "build-js-function", "js/js-function/", "Function", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-object"), "build-js-object", "js/js-object/", "Object", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-promise"), "build-js-promise", "js/js-promise/", "Promise", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-regexp"), "build-js-regexp", "js/js-regexp/", "RegExp", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-string"), "build-js-string", "js/js-string/", "String", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-task"), "build-js-task", "js/js-task/", "Задачи", "actual"),
        Config(Path("docs/wiki/dev-commit/js/js-web-api"), "build-js-web-api", "js/js-web-api/", "Web API", "actual"),
        Config(Path("docs/wiki/dev-commit/js/lodash"), "build-lodash", "js/lodash/", "Lodash", "actual"),
        Config(Path("docs/wiki/dev-commit/js/ramda"), "build-ramda", "js/ramda/", "Ramda", "actual"),
        Config(Path("docs/wiki/dev-commit/js/v8"), "build-v8", "js/v8/", "V8 | Rendering | Optimize", "actual"),
        Config(Path("docs/wiki/dev-commit/js/web-components"), "build-web-components", "js/web-components/", "Web Components", "actual"),
    ]

    for cfg in configs:
        convert_one(cfg, repo_root)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

