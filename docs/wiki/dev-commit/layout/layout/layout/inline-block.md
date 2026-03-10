# CSS inline-block

## Использование

```html
<div class="item">item-1</div>
<div class="item">item-2</div>
```

```css
.item {
  display: inline-block;
  width: 200px;
  height: 200px;
}
```

## Примеры

::: details Выравнивание элементов по вертикали (vertical-align)

```css
div {
  /* По центру */
  vertical-align: middle;
  /* По верхнему краю */
  vertical-align: top;
  /* По нижнему краю */
  vertical-align: bottom;
}
```

---

```html
<div class="item">item-1</div>
<div class="item">item-2</div>
```

---

```css
.item {
  display: inline-block;
  width: 200px;
  background-color: orange;
}
.item:first-child {
  height: 200px;
  vertical-align: middle;
}
.item:last-child {
  height: 100px;
  vertical-align: middle;
}
```

:::

::: details Выравнивание элементов по горизонтали

```html
<div class="container">
  <div class="item">item-1</div>
  <div class="item">item-2</div>
</div>
```

---

```css
.container {
  text-align: center;
}
.item {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: orange;
}
```

:::

::: details Убрать пробелы у inline-block

- Пробелы между блоками, это пробелы между словами в строке.
- Ставим font-size:0 для родителя, а для дочерних элементов возвращаем обратно

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
.container {
  font-size: 0;
}
.item {
  font-size: 16px;
}
```

:::
