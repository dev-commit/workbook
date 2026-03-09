# linear-gradient(), conic-gradient()

## Информация

> **Linear Gradient** (линейный градиент) - функция используется для задания фона в виде линейного градиента

> **Conic Gradient** (конический градиент) - функция используется для задания фона в виде конического градиента

## CSS-функции

::: details `linear-gradient()` - линейный градиент

**Значения**

- `0deg` - сверху вниз
- `90deg` - справа налево
- `180deg` - снизу вверх
- `270deg` - слева направо

```css
div {
  background-image: linear-gradient(#e66465, #9198e5);
  background-image: linear-gradient(90deg, #fff, #fff);
}
```

:::

::: details `conic-gradient()` - конический градиент

```css
.element {
  background-image: conic-gradient(#3590eb, #ee82cf);
}
```

:::

### Примерение к тексту

```css
.gradient-text {
  background: -webkit-linear-gradient(
    right bottom,
    #162454,
    #533389,
    #0a9ed8,
    #7a359f
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Примеры

<v-details title="Link Underline (CSS linear-gradient)">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/abrZQqN" />
</v-details>

<v-details title="Text Shade (CSS linear-gradient)">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/eYazQrY" />
</v-details>

<v-details title="Pie (CSS conic-gradient)">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/yLWJQvd" />
</v-details>
