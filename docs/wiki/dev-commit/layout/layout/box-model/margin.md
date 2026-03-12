# margin и padding

## CSS-свойства

### `margin`, `margin-inline`

::: details `margin` - внешний отступ
**Задание внешнего отступа**

```css
div {
  /* 10px со всех сторон */
  margin: 10px;
  /* 10px - сверху, 15px - справа, 20px - снизу, 25px - слева */
  margin: 10px 15px 20px 25px;
  /* 10px - сверху и снизу, 20px - справа и слева */
  margin: 10px 20px;
}
```

**Центрирование**

```css
div {
  /* Центрирование блока по горизонтали */
  margin: auto;
  /* Центрирование блока по горизонтали и задание отступа 0 сверху и снизу */
  margin: 0 auto;
}
```

:::

::: details `margin-top` `margin-bottom` `margin-left` `margin-right` - задание вешнего отступа для каждой стороны

```css
div {
  /* 10px сверху */
  margin-top: 10px;
  /* 10px снизу */
  margin-bottom: 10px;
  /* 10px слева */
  margin-left: 10px;
  /* 10px справа */
  margin-right: 10px;
}
```

:::

::: details `margin-inline` - используется вместо margin-left и margin-right
В обоих примерах будет аналогичный результат

```css
div {
  margin-left: 10px;
  margin-right: 10px;
}
```

---

```css
div {
  margin-inline: 10px;
}
```

:::

### `padding`

::: details `padding` - внутренний отступ
**Задание внутреннего отступа**

```css
div {
  /* 10px со всех сторон */
  padding: 10px;
  /* 10px - сверху, 15px - справа, 20px - снизу, 25px - слева */
  padding: 10px 15px 20px 25px;
  /* 10px - сверху и снизу, 20px - справа и слева */
  padding: 10px 20px;
}
```

:::

::: details `padding-top` `padding-bottom` `padding-left` `padding-right` - задание внутреннего отступа для каждой стороны

```css
div {
  /* 10px сверху */
  padding-top: 10px;
  /* 10px снизу */
  padding-bottom: 10px;
  /* 10px слева */
  padding-left: 10px;
  /* 10px справа */
  padding-right: 10px;
}
```

:::
