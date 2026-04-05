# Задача

## Используемые значения

- [full-path]: docs/wiki/dev-commit/theory/solid
- [build-file]: build-solid
- [path]: 'theory/solid/'
- [title]: 'SOLID'
- [theme]: null

## Список задач

1. В корень каталога из секции [full-path] добавь пустой файл `index.md`.
2. У файла в корне `[build-file]` измени расширение на `.ts`.
3. **Конвертация HTML → Markdown:** выполни раздел «Порядок действий: конвертация HTML → Markdown» (скрипт `ai/wiki-html-to-md.py`).
4. Для файла `[build-file]` поменяй структуру следуя правилам из раздела «Файл [build-file]» (и при необходимости подключи модуль в `docs/wiki/dev-commit/builder.ts`).

## Порядок действий: конвертация HTML → Markdown

1. Прочитай раздел «Правила преобразования HTML в Markdown» ниже — это эталон: как должен выглядеть результат и какие HTML-конструкции обрабатываются.
2. Открой `ai/wiki-html-to-md.py` и **сверь** реализацию с правилами (функции замены, порядок проходов, `postprocess_md` и т.д.). Нетривиальные теги вроде `v-two`, `v-details` тоже должны быть согласованы с фактическим HTML в конвертируемых файлах.
3. Если скрипт **не соответствует** правилам — **измени скрипт** под правила (правила важнее текущего кода скрипта).
4. **Запусти** скрипт из корня репозитория, передав **каталог из секции «Файл»** первым аргументом:

```bash
python3 ai/wiki-html-to-md.py <каталог-из-[full-path]>

# Либо через npm:
npm run wiki:html-to-md -- <каталог-из-[full-path]>

# Зависимости (один раз)
pip install -r ai/requirements-wiki-html-to-md.txt
```

Скрипт рекурсивно обрабатывает все `.html`, пишет рядом `.md` и **удаляет исходные `.html`**. Перед шагом 4 убедись, что потерю `.html` можно принять или есть бэкап/git.

## Правила преобразования HTML в Markdown

_Ниже — договорённости для контента wiki. После любых правок здесь выполняй сверку и правку скрипта по шагам 1–3 раздела «Порядок действий: конвертация HTML → Markdown»._

- **h1 / h2.** Если в файле есть `h1`, преобразуй в Markdown-заголовок первого уровня. Если `h1` нет, первый смысловой заголовок страницы бери из `h2` — в Markdown это тоже заголовок первого уровня (`#`).
- **`<img>`:** в `src` оставь путь вида `../@img/` + имя файла с расширением, как в исходном URL (только basename).
- **`<ul>` / `<ol>`:** списки в синтаксисе Markdown.
- **`<v-code>`:** fenced code-блок; язык подсветки — из атрибута `lang` (практически — первое слово значения, например `js` из `js border`).
- Удали блоки `<!-- TODO: ... -->` вместе с вложенным `<f-search>...</f-search>`, если есть.
- **`<u-text-define>`** → оберни текст в `**...**`.
- **`u-link-wrapper`** с **`v-link`**: список ссылок в Markdown `[текст](url)`.
- **v-two-border** перепиши на **<v-two>**

_Новые пункты правил добавляй сюда, затем снова шаги 2–3 раздела «Порядок действий: конвертация HTML → Markdown» и только потом шаг 4 (запуск)._

## Файл [build-file]

- Взять структура из раздела «Структура для файла [build-file]»
- Для строки: `const path = rootPath + "";` вместо пустрой строки "" добавить значение из [path]
- Для строки: `const title = "";` вместо пустрой строки "" добавить значение из [title]
- Для строки: `const theme: TThemeTopics = "";` вместо пустрой строки "" добавить значение из [theme]
- В массив `const topics` добавь значение массива "ARR_MODULE" из текущего файла, причем:
  - ключ "themes" нужно заменить на "children"
  - "root+" удалить
  - функцию "setTheme" заменить на "getThemeMenu", куда передать 1 аргументом "method", 2 аргументом значени 2 аргумента из setTheme
  - функцию "getLink(root, 'info')," нужно заменить на '["main/info", getTopicSubtitle("info")],'
  - остальные структуры из исходного файла нужно игнорировать

## Структура для файла [build-file]

```ts
import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

// TODO:
const path = rootPath + "";
const title = "";
const theme: TThemeTopics = "";

const topics: ISidebarTopics[] = [
  {
    title: "",
    children: [
      ["main/info", "Тема"],
      ["main/info", "Тема"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
```
