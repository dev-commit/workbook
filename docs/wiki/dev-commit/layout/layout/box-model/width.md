# width и height

## CSS-свойства

### `width`, `max-width`, `min-width`, `min()`

::: details `width` - ширина

```css
div {
  /* Фиксированное значение */
  width: 500px;
  /* Ширина блока по ширине контента */
  width: fit-content;
  /* Возвращение ширины к исходному значению */
  width: auto;
}
```

:::

::: details `max-width` `min-width` - максимальная и минимальная ширина

```css
div {
  /* Максимальная ширина */
  max-width: 700px;
  /* Минимальная ширина  */
  min-width: 200px;
}
```

:::

::: details `min()` - функция для замены width и max-width
В обоих примерах будет аналогичный результат:

- При ширине экрана больше 400px, для блока применится ширина в 200px
- При ширине экрана меньше 400px, для блока применится ширина в 50%

```css
div {
  width: 50%;
  max-width: 200px;
}
```

---

```css
div {
  width: min(50%, 200px);
}
```

:::

### `height`, `max-height`, `min-height`

::: details `height` - высота

```css
div {
  /* Фиксированная высота */
  height: 500px;
  /* Возвращение высоты к исходному значению */
  width: auto;
}
```

:::

::: details `max-height` `min-height` - максимальная и минимальная высота

```css
div {
  /* Максимальная высота */
  max-height: 700px;
  /* Минимальная высота */
  min-height: 200px;
}
```

:::

## Примеры

::: details Обнуление margin и padding у body

- По умолчанию у body есть отступы

```css
body {
  margin: 0;
  padding: 0;
}
```

:::
