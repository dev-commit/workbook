# Пункты меню

## Информация

- Пункты левого меню задаются в `build-*.ts` темы, в массиве `topics`: `["путь", "текст", "статус"]`
- Текст пункта - строка: обычный текст, эмодзи из `emoji` (`docs/constants.ts`) или HTML из `getThemeMenu()` / `getTopicSubtitle()` (`docs/utils.ts`)
- Стили пунктов - `docs/.vitepress/theme/styles/menu.css`, маркер статуса - `docs/.vitepress/utils/sidebar.ts`
- Превью ниже строится теми же функциями, что и левое меню

## getThemeMenu()

- `getThemeMenu(вид, ["текст", …])` - текст в рамке. Каждый элемент массива - отдельная рамка

| Код                                                                              | Пункт меню                                                                                                                  |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `getThemeMenu("method", ["useState"])`                                           | <span class="menu-preview" v-html="item(getThemeMenu('method', ['useState']))" />                                           |
| `getThemeMenu("accent", ["accent"])`                                             | <span class="menu-preview" v-html="item(getThemeMenu('accent', ['accent']))" />                                             |
| `getThemeMenu("packages", ["packages"])`                                         | <span class="menu-preview" v-html="item(getThemeMenu('packages', ['packages']))" />                                         |
| `getThemeMenu("unactive", ["unactive"])`                                         | <span class="menu-preview" v-html="item(getThemeMenu('unactive', ['unactive']))" />                                         |
| `getThemeMenu("outline", ["outline"])`                                           | <span class="menu-preview" v-html="item(getThemeMenu('outline', ['outline']))" />                                           |
| `getThemeMenu("error", ["error"])`                                               | <span class="menu-preview" v-html="item(getThemeMenu('error', ['error']))" />                                               |
| `getThemeMenu("method", ["null", "undefined"])`                                  | <span class="menu-preview" v-html="item(getThemeMenu('method', ['null', 'undefined']))" />                                  |
| `getThemeMenu("method", ["any"]) + " vs " + getThemeMenu("method", ["unknown"])` | <span class="menu-preview" v-html="item(getThemeMenu('method', ['any']) + ' vs ' + getThemeMenu('method', ['unknown']))" /> |

## getTopicSubtitle()

- `getTopicSubtitle(вид)` - подзаголовок с эмодзи для типовых страниц темы

| Код                            | Пункт меню                                                                |
| ------------------------------ | ------------------------------------------------------------------------- |
| `getTopicSubtitle("info")`     | <span class="menu-preview" v-html="item(getTopicSubtitle('info'))" />     |
| `getTopicSubtitle("install")`  | <span class="menu-preview" v-html="item(getTopicSubtitle('install'))" />  |
| `getTopicSubtitle("use")`      | <span class="menu-preview" v-html="item(getTopicSubtitle('use'))" />      |
| `getTopicSubtitle("variants")` | <span class="menu-preview" v-html="item(getTopicSubtitle('variants'))" /> |

## Emoji

- `emoji.…` - эмодзи с пробелом перед текстом пункта

| Код                        | Пункт меню                                                            |
| -------------------------- | --------------------------------------------------------------------- |
| `emoji.fire + "Текст"`     | <span class="menu-preview" v-html="item(emoji.fire + 'Текст')" />     |
| `emoji.star + "Текст"`     | <span class="menu-preview" v-html="item(emoji.star + 'Текст')" />     |
| `emoji.theory + "Текст"`   | <span class="menu-preview" v-html="item(emoji.theory + 'Текст')" />   |
| `emoji.settings + "Текст"` | <span class="menu-preview" v-html="item(emoji.settings + 'Текст')" /> |
| `emoji.code + "Текст"`     | <span class="menu-preview" v-html="item(emoji.code + 'Текст')" />     |
| `emoji.libs + "Текст"`     | <span class="menu-preview" v-html="item(emoji.libs + 'Текст')" />     |
| `emoji.items + "Текст"`    | <span class="menu-preview" v-html="item(emoji.items + 'Текст')" />    |

## Статус темы

- Третий элемент пункта - статус темы, он красит маркер «•»

| Код                                            | Пункт меню                                                                  |
| ---------------------------------------------- | --------------------------------------------------------------------------- |
| `["dir/file", "Без статуса"]`                  | <span class="menu-preview" v-html="item('Без статуса')" />                  |
| `["dir/file", "Тема проработана", "done"]`     | <span class="menu-preview" v-html="item('Тема проработана', 'done')" />     |
| `["dir/file", "Тема НЕ проработана", "check"]` | <span class="menu-preview" v-html="item('Тема НЕ проработана', 'check')" /> |
| `["dir/file", "doit", "doit"]`                 | <span class="menu-preview" v-html="item('doit', 'doit')" />                 |

## Разделы и подзаголовки

- Группа с `children: null` - заголовок раздела без пунктов. Выглядит как обычный заголовок группы
- Группа с `child: true` - подзаголовок: группа внутри раздела. Шрифт как у заголовка, без фона, другой цвет текста (`.sidebar-subtitle` в `custom.css`)

```ts
const topics: ISidebarTopics[] = [
  {
    title: "Полифилы",
    children: null,
  },
  {
    title: "Массивы",
    child: true,
    children: [["polyphiles/map", getThemeMenu("method", ["map"])]],
  },
  {
    title: "Асинхронность",
    child: true,
    children: [
      ["polyphiles/promise-all", getThemeMenu("method", ["Promise.all"])],
    ],
  },
];
```

<div class="menu-preview-sidebar">
  <p class="menu-preview-group">Полифилы</p>
  <p class="menu-preview-group"><span class="sidebar-subtitle">Массивы</span></p>
  <p class="menu-preview" v-html="item(getThemeMenu('method', ['map']))" />
  <p class="menu-preview-group"><span class="sidebar-subtitle">Асинхронность</span></p>
  <p class="menu-preview" v-html="item(getThemeMenu('method', ['Promise.all']))" />
</div>

## Шаблон build-\*.ts

```ts
import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "docs/wiki/constants";

const path = rootPath + "system/ui-kit/";
const title = "Ui-Kit";
const theme: TThemeTopics = "node"; // null

const topics: ISidebarTopics[] = [
  {
    title: "Проработанные и не проработанные темы",
    children: [
      ["dir/file", "Тема проработана", "done"],
      ["dir/file", "Тема НЕ проработана", "check"],
    ],
  },
  {
    title: "Меню",
    children: [
      // Emoji
      ["dir/file", getTopicSubtitle("info")],
      ["dir/file", emoji.items + "Emoji"],
      // Код
      ["dir/file", getThemeMenu("method", ["method"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
```

<script setup lang="ts">
import { getThemeMenu, getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";
import { getMarker } from "docs/.vitepress/utils/sidebar";
import type { TSidebarTopicsItemStatus } from "docs/types";

// Пункт как в левом меню: маркер «•» (цвет - по статусу) и текст
const item = (text: string, status?: TSidebarTopicsItemStatus) =>
  `${getMarker(status)} ${text}`;
</script>
