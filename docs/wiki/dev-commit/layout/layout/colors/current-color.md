# Значения для цветов currentColor и transparent

## Значения

### `currentColor`

::: tip `currentColor`

- **currentColor** - переменная для цвета
- Это ключевое слово CSS, которое подставляет текущее значение свойства color элемента (или его родителя, если у элемента color не задан)
- По сути, это переменная для цвета текста, чтобы его можно было переиспользовать в других свойствах (border, background, box-shadow и т.п.) без дублирования

:::

::: details `currentColor`

**Пример**

```html
<div class="container">
  <h2>Заголовок</h2>
  <p>Описание/p></p>
</div>
```

---

```css
.container {
  /* Задание цвета в элементе-родителе */
  color: red;
  /* Рамка красного цвета (наследует текущее значение color) */
  border: 1px solid currentColor;
}
.container h2 {
  /* Рамка красного цвета (наследует значение color родителя) */
  border: 1px solid currentColor;
}
.container p {
  /* Задание цвета в дочернем элементе */
  color: blue;
  /* Рамка синего цвета (наследует текущее значение color) */
  border: 1px solid currentColor;
}
```

**Где использовать**

- `border-color`
- `background-color`
- `box-shadow`
- `outline-color`
- SVG:` fill`,` stroke` (чаще всего используется именно в SVG)

:::

### `transparent`

::: tip `transparent`

- **transparent** - задание прозрачного цвета
- Ключевое слово CSS, которое задаёт полностью прозрачный цвет. Его можно использовать везде, где допускается цвет: color, background-color, border-color, box-shadow и т.д.
  :::

::: details `transparent`

**Пример**

Есть 2 блока:

- Для 1 блока задана рамка в 2px синего цвета
- Для 2 блока задана рамка в 2px прозрачного цвета. При наведении на 2 блок, рамка меняется на 2px красного цвета. Если не указывать “2px solid transparent”, то при наведении произойдет “дергание” интерфейса

```html
<div class="item1">Element</div>
<div class="item2">Element</div>
```

---

```css
.item1 {
  border: 2px solid blue;
}
.item2 {
  border: 2px solid transparent;
}
.item2:hover {
  border: 2px solid red;
}
```

:::
