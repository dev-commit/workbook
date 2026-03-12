# Скроллбар ::-webkit-scrollbar

## Свойства

### `scrollbar-color`, `scrollbar-width`

- Синий скролл с зеленой полосой скроллбара

```css
/* Firefox */
* {
  scrollbar-color: blue green;
  scrollbar-width: thin;
}
```

```css
/* Chrome */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 2px;
}
::-webkit-scrollbar-track {
  background-color: green;
}
::-webkit-scrollbar-corner {
  background-color: yellow;
}
```

## Браузерный движки

### Firefox

::: details Полоса прокрутки (скроллбар)

```css
div {
  scrollbar-color: blue green; /* «цвет ползунка» и «цвет полосы скроллбара» */
  scrollbar-width: auto | thin | none; /* толщина: по умолчанию | тонкий вариант | нет */
}
```

:::

### Chrome

- Для Google Chrome, Яндекс.Браузер, Safari, Opera

::: details Полоса прокрутки (скроллбар)

```css
::-webkit-scrollbar {
  width: 24px; /* ширина для вертикального скролла */
  height: 8px; /* высота для горизонтального скролла */
  background-color: #143861;
}
```

:::

::: details Ползунок скроллбара

```css
::-webkit-scrollbar-thumb {
  background-color: #843465;
  border-radius: 9em;
  box-shadow: inset 1px 1px 10px #f3faf7;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #253861;
}
```

:::

::: details Стрелки

```css
::-webkit-scrollbar-button:vertical:start:decrement {
  background:
    linear-gradient(120deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(240deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(0deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
  background-color: #f6f8f4;
}

::-webkit-scrollbar-button:vertical:end:increment {
  background:
    linear-gradient(300deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(60deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(180deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
  background-color: #f6f8f4;
}

::-webkit-scrollbar-button:horizontal:start:decrement {
  background:
    linear-gradient(30deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(150deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(270deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
  background-color: #f6f8f4;
}

::-webkit-scrollbar-button:horizontal:end:increment {
  background:
    linear-gradient(210deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(330deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(90deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
  background-color: #f6f8f4;
}
```

:::

::: details Дополнительно

```css
::-webkit-resizer {
  background-color: #fff;
}
::-webkit-scrollbar-button {
  background-color: #fff;
}
::-webkit-scrollbar-track {
  background-color: #fff;
}
::-webkit-scrollbar-track-piece {
  background-color: #fff;
}
::-webkit-scrollbar-corner {
  background-color: #fff;
}
```

:::
