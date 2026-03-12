# box-shadow

## CSS-свойства

### `box-shadow`

::: details `box-shadow` - тень у блоков

**Параметры**

- `1px` - смещение по горизонтали
- `2px` - смещение по вертикали
- `3px` - размытие
- `4px` - толщина

**Пример**

```css
div {
  /* Внешняя тень */
  box-shadow: 1px 2px 3px 4px blue;
  /* Внутренняя тень */
  box-shadow: inset 1px 2px 3px 4px blue;
}
```

**Задание нескольких теней**

```css
div {
  box-shadow:
    0 0 0 5px red,
    0 0 0 10px green,
    0 0 0 15px blue;

  box-shadow:
    -5px 0 0 0 red, /* left */
    5px 0 0 0 green, /* right */
    0 -5px 0 0 orange, /* top */
    0 5px 0 0 blue; /* bottom */
}:
```

:::

## Примеры

<v-details title="Примеры теней у блоков">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/bXRGjx" />
</v-details>
