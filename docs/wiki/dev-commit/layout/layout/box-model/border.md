# border

## CSS-свойства

### `border-width`, `border-style`, `border-color`

::: details `border` (составное свойство) - рамка
**Свойства**

- `border-width` - толщина рамки
- `border-style` - стиль рамки
- `border-color` - цвет рамки

**Полная форма записи**

```css
div {
  border-width: 2px;
  border-style: solid;
  border-color: orange;
}
```

**Сокращенная форма записи**

```css
div {
  border: 2px solid orange;
}
```

**Варианты**

```css
div {
  /* Рамка 1px сплошная оранжевая */
  border: 1px solid orange;
  /* Рамка 1px сплошная прозрачная */
  border: 1px solid transparent;
}
```

:::

### `border-top`, `border-bottom`, `border-left`, `border-right`

::: details `border-top` `border-bottom` `border-left` `border-right` - задание рамки для каждой стороны

- Аналогично свойству border, состоит из: border-width, border-style, border-color

```css
div {
  /* Рамка сверху */
  border-top: 1px solid orange;
  /* Рамка снизу */
  border-bottom: 1px solid orange;
  /* Рамка слева */
  border-left: 1px solid orange;
  /* Рамка справа */
  border-right: 1px solid orange;
}
```

:::

### `border-radius`

::: details `border-radius` - радиус для рамки

> border-radius - задает скругление углов со всех 4х сторон

**1 значение**

- Радиус для всех четырёх углов - 20px

<v-two fix>
  <template #first>
  <div style="width: 100px; height: 100px; background: #6095e5; border-radius: 20px;"></div>
  </template>

<template #last>

```css
div {
  border-radius: 20px;
}
```

</template>
</v-two>

**2 значения**

- Радиус верхнего левого и нижнего правого углов - 20px
- Радиус верхнего правого и нижнего левого углов - 50px

<v-two fix>
  <template #first>
  <div style="width: 100px; height: 100px; background: #6095e5; border-radius: 20px 50px;"></div>
  </template>

<template #last>

```css
div {
  border-radius: 20px 50px;
}
```

</template>
</v-two>

**4 значения**

- По очереди устанавливает радиус для верхнего левого (20px), верхнего правого (50px), нижнего правого (70px) и нижнего левого углов (10px)

<v-two fix>
  <template #first>
  <div style="width: 100px; height: 100px; background: #6095e5; border-radius: 20px 50px 70px 10px;"></div>
  </template>

<template #last>

```css
div {
  border-radius: 20px 50px 70px 10px;
}
```

</template>
</v-two>

**Задание окружности**

Визуально блок с одинаковой width и height можно представить в виде окружности. Для экого в border-radius в качестве значения нужно указать 50%

<v-two fix>
  <template #first>
  <div style="width: 100px; height: 100px; background: #6095e5; border-radius: 50%;"></div>
  </template>

<template #last>

```css
div {
  border-radius: 50%;
}
```

</template>
</v-two>

:::
