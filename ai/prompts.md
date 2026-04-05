# Задача

## Файл

- docs/wiki/dev-commit/theory/design-patterns

## Используемые значения

- [build-file]: build-design-patterns.js
- [path]: 'theory/design-patterns/'
- [title]: 'Паттерны проектирования'
- [theme]: null

## Список задач

1. В корень добавь пустой файл index.md
2. У файла в корне [build-file] измени расширение на ".ts"
3. Для всех ".html" файлов в директории измени расширение на ".md". При этом, замени преобразуй контент в файле из html в md следуя правилам из раздела "Правила преобразования HTML в Markdown"
4. Для файла [build-file] поменяй структуру следуя правилам из раздела "Файл [build-file]"

## Правила преобразования HTML в Markdown

- h1. Если в файле есть h1, то преобразуй его в Markdown. Если h1 нет, то вместо него возьми h2 - в Markdown это тоже должен быть заголовок первого уровня
- для "<img>" нужно скорректировать путь для src="../@img/" + название файла с расшинеем, которое было изначально
- "<ul>" замени на список в Markdown
- "<v-code>" замени на блок кода, при этом подставь значение из "lang" для подстветки синтаксима языка
- блок "TODO: <f-search>"" удали
- вместо "<u-text-define>" используй "\*\*"
- вместо "u-link-wrapper" с "v-link" используй список ссылок

## Файл [build-file]

- Взять структура из раздела "Структура для файла [build-file]"
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
