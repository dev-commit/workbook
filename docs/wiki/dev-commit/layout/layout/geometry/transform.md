# transform

## Данные

### Особенности

- Не прерывает поток (не влияют на другие элементы)
- Трансформации можно записывать несколько через пробел

## CSS-свойства

### `transform`, `translate()`, `rotate()`, `scale()`, `skew()`

::: details `transform`

```css
div {
  transform: translate(50px, 50px);
}
```

:::

### CSS-функции

::: details `translate()` - сдвиг

```css
div {
  width: 100px;
  height: 100px;
  transform: translate(50px, 50px);
}
```

**Варианты**

```css
div {
  /* Сдвигает элемент на заданное значение по горизонтали и вертикали */
  transform: translate(50px, 50px);
  /* Сдвигает элемент по горизонтали на указанное значение */
  transform: translateX(50px);
  /* Сдвигает элемент по вертикали на указанное значение */
  transform: translateY(50px);
  /* Сдвигает элемент по оси Z на указанное значение */
  transform: translateZ(50px);
}
```

- Положительное значение сдвигает вправо, отрицательное влево
- Один параметр translate(): перемещает элемент вдоль оси х
- Два параметра translate(): первое значение для оси х, второе для оси у

:::

::: details `rotate()` - поворот

**Пример**

```css
div {
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
}
```

**Варианты**

```css
div {
  /* Поворот */
  transform: rotate(15deg);
  /* Поворот по оси X */
  transform: rotateX(15deg);
  /* Поворот по оси Y */
  transform: rotateY(15deg);
  /* Поворот по оси Z */
  transform: rotateZ(15deg);
}
```

:::

::: details `scale()` - масштабирование

**Пример**

```css
div {
  width: 100px;
  height: 100px;
  transform: scale(1.5);
}
```

**Варианты**

```css
div {
  /* Масштабирует элемент по горизонтали и вертикали */
  transform: scale(1.2);
  /* Масштабирует элемент по горизонтали */
  transform: scaleX(1.2);
  /* Масштабирует элемент по вертикали */
  transform: scaleY(1.2);
  /* Масштабирует элемент по оси Z */
  transform: scaleZ(1.2);
}
```

- Один параметр scale(): изменение размеров элемента одинаково по высоте и ширине
- Два параметра scale(): первое значение изменяет размер элемента по горизонтали, второе по вертикали

**Пример: Зеркальное отражение блока**

- Для отражения изображения или другого элемента, в том числе текстового, применяется scale() с отрицательным значением

```css
div {
  /* Отражение по горизонтали */
  transform: scale(-1, 1);
  /* Отражение по вертикали */
  transform: scale(1, -1);
  /* Одновременное отражение по горизонтали и вертикали */
  transform: scale(-1, -1);
}
```

:::

::: details `skew()` - наклон (искажение)

**Пример**

```css
div {
  width: 100px;
  height: 100px;
  transform: skewX(45deg);
}
```

**Варианты**

```css
div {
  /* Наклоняет элемент на заданный угол по горизонтали и вертикали */
  transform: skew(15deg);
  /* Наклоняет элемент на заданный угол по вертикали */
  transform: skewX(15deg);
  /* Наклоняет элемент на заданный угол по горизонтали */
  transform: skewY(15deg);
}
```

- Один параметр skew(): элемент искажается по горизонтали
- Два параметра skew(): первое значение искажает элемент по горизонтали, второе по вертикали
  :::

## Варианты

### Применение нескольких трансформаций

```css
div {
  transform: translate(50px, 50px) rotate(15deg);
}
```

## Примеры

<v-details title="Image Transform Overlay (Transform)">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/rNgLqXb" />
</v-details>

<v-details title="Scale Overflow">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/RwmRqPp" />
</v-details>

---

## 3D преобразования

::: warning

- Не разобрано
  :::

>

### Свойства для 3D

- `matrix` - задает двумерную матрицу преобразований
- `matrix3d` - задает трёхмерную матрицу преобразований
- `rotate3d` - поворачивает элемент в трёхмерном пространстве
- `scale3d` - масштабирует элемент в трёхмерном пространстве
- `translate3d` - сдвигает элемент на заданное значение в трёхмерном пространстве
- `perspective` - задаёт перспективу

### Свойства трансформации

- `transform` - определяет, какая функция будет применяться (translate, rotate, scale, skew)
- `transform-origin` - позволяет изменять точку начала преобразования (работает как background-position)
- `transform-style` - для настройки 3D
