# CSS Shapes

::: info

- https://webformyself.com/vvedenie-v-css-shapes/ - Введение в CSS Shapes
- https://codepen.io/leimapapa/full/VwVoxKw - Presentation on Codepen
  :::

## Информация

::: tip CSS Shapes

- **CSS Shapes** - позволяют определять геометрические фигуры, вокруг которых может обтекать текст. hape работают только для `float` элементов у которых определена ширина и высота
  :::

**Расширения браузеров для корректировки фигур**

- Firefox имеет встроенный редактор для фигур
- [CSS Shapes Editor для Chrome](https://chrome.google.com/webstore/detail/css-shapes-editor/nenndldnbcncjmeacmnondmkkfedmgmp?hl=en-US)

## Спецификации

1. **CSS Shapes Level 1** - поддерживается

- `shape-outside` - определяет фигуру, вокруг которой может обтекать текст

2. **CSS Shapes Level 2** - не поддерживается

- `shape-inside` - связано с текстом, содержащимся внутри фигуры

## CSS-свойства для CSS Shapes Level 1

### `shape-outside`, `shape-margin`, `shape-image-threshold`

::: details `shape-outside` - задание фигуры

```css
div {
  shape-outside: circle();
  shape-outside: ellipse();
  shape-outside: inset();
  shape-outside: polygon();
  shape-outside: url();
  shape-outside: linear-gradient();
}
```

:::

::: details `shape-margin` - margin от shape до контента

```css
div {
  shape-margin: 10px;
}
```

:::

::: details `shape-image-threshold` - определяется пороговое значение альфа

- Определяется пороговое значение альфа - канала фигуры, или какой процент изображения может быть прозрачным. Альфа канал для обрезки по изображению

```css
div {
  shape-image-threshold: 0.7;
}
```

:::

## Фигуры для `shape-outside`

### `circle()`, `ellipse()`, `inset()`, `polygon()`, `url()`, `linear-gradient()`

::: details `circle()` - окружность

> **Описание**
>
> ```css
> div {
>   shape-outside: circle(r at x y);
> }
> ```
>
> - `r` - радиус (по умолчанию 50%)
> - `at` - задание позиции
> - `x` - позиция по горизонтали (по умолчанию 50%)
> - `y` - позиция по вертикали (по умолчанию 50%)

```css
div {
  /* circle() аналогично circle(50%) */
  shape-outside: circle();
  /* circle(50%) аналогично circle() */
  shape-outside: circle(50%);
  /* Кастомные значения */
  shape-outside: circle(50% at 50% 50%);
}
```

:::

::: details `ellipse()` - эллипс

> **Описание**
>
> ```css
> div {
>   shape-outside: ellipse(rx ry at x y);
> }
> ```
>
> - `rx` - радиус по оси "x" (по умолчанию 50%)
> - `ry` - радиус по оси "y" (по умолчанию 50%)
> - `at` - задание позиции
> - `x` - позиция по горизонтали (по умолчанию 50%)
> - `y` - позиция по вертикали (по умолчанию 50%)

```css
div {
  shape-outside: ellipse();
  shape-outside: ellipse(50% 50% at 50% 50%);
}
```

:::

::: details `inset()` - прямоугольник внутри Shape

> **Описание**
>
> ```css
> div {
>   shape-outside: inset(top right bottom left round 10px);
> }
> ```
>
> - `top` - отступ сверху
> - `right` - отступ справа
> - `bottom` - отступ снизу
> - `left` - отступ слева
> - `round` - border-radius
> - `10px` - закругление

```css
div {
  shape-outside: inset(10px 10px 10px 10px);
  /* Задает одинаковые отступы по 10px со всех сторон */
  shape-outside: inset(10px);
}
```

:::

::: details `polygon()` - полигон

> **Описание**
>
> ```css
> div {
>   shape-outside: polygon(p1, p2, p3...);
> }
> ```
>
> - `p1` - xi yi-координаты

- Может принимать массив точек x и y для создания любой сложной фигуры. Каждый элемент в массиве представляет `xi` `yi` и будет записан как `polygon(x1 y1, x2 y2, x3 y3)` и т.д.
- Наименьшее количество наборов точек, которые мы можем применить к многоугольнику, составляет три, что дает треугольник

```css
div {
  shape-outside: polygon(0 0, 100px 200px, 0 200px);
}
```

:::

::: details `url()` - изображение

- Текст формируется по границе **SVG/PNG** изображения. Текст учитывает, какие области являются прозрачными, а какие непрозрачными, и соответствующим образом выравнивается
- Используемое изображение должно быть CORS совместимым

```css
div {
  shape-outside: url(image.png);
}
```

:::

::: details `linear-gradient()` - градиент

- Градиенты - это также изображения, и точно так же, как с изображением, текст будет обтекать прозрачную часть

```css
div {
  shape-outside: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 150px,
    red 150px
  );
}
```

- В примере задан градиент, в котором цвет и прозрачность соотносятся, как `50% / 50%`, и установить для `shape-image-threshold - .5`
- Т.е. все пиксели, которые более чем на 50% непрозрачны следует рассматривать как часть изображения

```css
div {
  shape-image-threshold: 0.5;
  shape-outside: linear-gradient(to bottom right, #2bf0a5, transparent);
  background-image: linear-gradient(to bottom right, #2bf0a5, transparent);
}
```

:::

## Демонстрация

<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/YzbWRNZ" />

## Прочее

::: warning

- Не разобрано
  :::

::: details Keyword values (reference-box)

```css
.item {
  shape-outside: none;
  shape-outside: margin-box;
  shape-outside: content-box;
  shape-outside: border-box;
  shape-outside: padding-box;
}
```

:::

::: details Global values

```css
.item {
  shape-outside: initial;
  shape-outside: inherit;
  shape-outside: unset;
}
```

:::

::: details `closest-side` и `fartest-side`

- `closest-side` - расстояние до ближайшей строны (circle, ellipse)
- `fartest-side` - расстояние до дальней стороны (circle, ellipse)
  :::
