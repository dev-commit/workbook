# CSS свойства: background, object-fit

## CSS свойства

::: details `object-fit`
| Значение | Описание |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `cover` | Элемент увеличивается или уменьшается, чтобы целиком заполнить заданную область с сохранением пропорций |
| `contain` | Элемент масштабируется, чтобы целиком уместиться в заданные размеры с соблюдением пропорций |

- Правило подстраивания изображения под заданные размеры

```css
img {
  object-fit: cover;
  object-fit: contain;
}
```

:::

::: details `background-image`

- Для свойства background-image можно использовать градиенты `linear-gradient()` и `conic-gradient()`

```css
div {
  /* Путь к изображению */
  background-image: url(img.png);
  /* Линейный градиент */
  background-image: linear-gradient(90deg, #fff, #fff);
}
```

:::

::: details `background-repeat`

```css
div {
  /* Повторение изображения */
  background-repeat: no-repeat;
}
```

:::

::: details `background-position`

```css
div {
  /* Позиционирование изображения (задние в px и %) */
  background-position: center center;
}
```

:::

::: details `background-size`

```css
div {
  /* Изображение полностью помещается в блок */
  background-size: contain;
  /* Изображение заполняет весь блок */
  background-size: cover;
  /* Задание в % */
  background-size: 50%;
}
```

:::

::: details `background-color`

```css
div {
  /* Цвет фона */
  background-color: #3b3b3b;
}
```

:::

::: details `background-attachment`

```css
div {
  /* Будет ли прокручиваться фоновое изображение */
  background-attachment: fixed;
}
```

:::

::: details `background-origin`

- Устанавливает область расположения фона

```css
div {
  background-origin: border-box;
}
```

:::

::: details `background-clip`

- Определяет как цвет фона или фоновое изображение будут выводиться под границами блока

```css
div {
  background-clip: border-box;
}
```

:::

### Варианты записи свойств

**Полная форма записи**

```css
div {
  background-image: url(img.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
```

**Сокращенная форма записи**

```css
div {
  background: url(img.png) no-repeat center contain;
}
```
