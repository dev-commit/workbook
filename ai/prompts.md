# Задача

## Файл

- docs/wiki/dev-commit/common/ai

## Используемые значения

- [build-file]: build-ai.js
- [path]: 'common/ide/'
- [title]: 'IDE'
- [theme]: null

## Список задач

1. В корень добавь пустой файл index.md
2. У файла в корне [build-file] измени расширение на ".ts"
3. Для всех ".html" файлов в директории измени расширение на ".md". При этом, удали весь контент из этих файлов, оставив только: h1, img. При этом h1 нужно перевести в заголовок 1 уровня на Makrdown. img нужно оставить как есть
4. Для файла [build-file] поменяй структуру

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
