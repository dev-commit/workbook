# Функция псевдокласс :is()

::: info

- https://css-tricks.com/is-is-useful/
- https://developer.mozilla.org/ru/docs/Web/CSS/:is
  :::

## Пример

```css
.item:hover,
.item:focus {
  /*  */
}
.item:is(:hover, :focus) {
  /*  */
}
```
