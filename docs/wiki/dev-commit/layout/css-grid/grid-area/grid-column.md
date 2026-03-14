# Задание Grid Area через линии

## CSS-свойства

### `grid-column`, `grid-row`, `grid-row-start`, `grid-row-end`

::: details Обращение к линиям по номеру

**Задано**

```css
 _ _ _
|_|_|_|
|_|_|_|
```

```css
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 столбца (4 линии) */
  grid-template-rows: 200px 200px; /* 2 строки (3 линии) */
}
```

- Позиционирование первого дочернего элемента (объединение 2х столбцов и 2х строк)
- Объединяем столбцы от 2 линии до 4 линии
- Объединяем строки от 1 линии до 3 линии

```css
/* Полная запись */
.card:nth-child(1) {
	grid-column-start: 2;
	grid-column-end: 4; # если написать -1 будет на всю ширину
	grid-row-start: 1;
	grid-row-end: 3;
}
```

```css
/* Короткая запись */
.card:nth-child(1) {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

```css
/* Сокращенная запись */
.card:nth-child(1) {
  grid-area: 1 / 2 / 3 / 4;
}
```

**grid-area:**

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Если элемент занимает 1 столбец или строку, то линию окончания указывать не нужно

```css
div {
  grid-column: 2 / 4;
  grid-row: 1;
}
```

- `span` - количество ячеек, которые нужно захватить

```css
div {
  grid-column: 1 / span 2; /* от 1 до 3 линии (занять 2 ячейки) */
  grid-column: 1 / 3; /* от 1 до 3 линии (аналогично) */
}
```

:::

::: details Обращение к линиям по имени

(результат аналогичен)

```css
.cards {
  display: grid;
  grid-gap: 20px;
  grid-template-columns:
    [side-start] 1fr
    [main-start] 1fr 1fr
    [main-end];
  grid-template-rows:
    [main-start] 200px 200px
    [main-end];
}
.card:nth-child(1) {
  grid-column: main-start / main-end;
  grid-row: main-start / main-end;
}
```

:::

::: details Использование именованных линий, не заданных явно

```css
.test {
  z-index: 100;
  background-color: blue;
  grid-column: content-start;
  grid-row: content-start / footer-end;
}
```

- Определили область content и автоматически появились линии content-start и content-end

```css
.wrapper {
  grid-column-gap: 2em;
  grid-row-gap: 20px;
  grid-template-columns: 2fr 4fr;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
}
```

:::
