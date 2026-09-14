# Документация на MDX

## Информация

::: info

- https://storybook.js.org/docs/writing-docs/autodocs - Automatic documentation and Storybook
- https://storybook.js.org/docs/writing-docs/doc-blocks - Виды блоков
- https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx - MDX (VSCode Plugin)
  :::

## Пример

> Нужно добавить файл рядос с компонентом

> Файл "UiButton.mdx"

```tsx
import {
  Meta, Title, Subtitle, Description,
  Primary, Stories,
  Canvas,
  Controls,
} from "@storybook/addon-docs/blocks";

import * as UiButtonStories from "./UiButton.stories";

{/* Привязывает эту страницу к файлу историй: без него остальные блоки не знают, о каком компоненте речь */}
<Meta of={UiButtonStories} />

{/* Заголовок страницы, берётся из meta.title файла историй */}
<Title />

{/* Короткое описание под заголовком — зачем нужен компонент */}
<Subtitle>UI-кнопка с темами оформления и поддержкой состояния disabled.</Subtitle>

## Основная история

{/* Показывает первую историю из файла как «эталонный» пример компонента */}
<Primary />

## Пример

{/* Песочница с конкретной историей: рендер компонента + исходный код */}
<Canvas of={UiButtonStories.Basic} />

## Props

{/* Таблица props с интерактивными контролами (настраивается через argTypes в историях) */}
<Controls />

## Все истории

{/* Выводит подряд все остальные истории файла, чтобы показать варианты использования */}
<Stories />
```
