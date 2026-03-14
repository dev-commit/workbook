# CSS Blend Modes

## Информация

::: details Режимы наложения

| Режим         | Описание          |
| ------------- | ----------------- |
| `normal`      | Обычный           |
| `multiply`    | Умножение         |
| `screen`      | Осветление        |
| `overlay`     | Перекрытие        |
| `darken`      | Замена тёмным     |
| `lighten`     | Замена светлым    |
| `color-dodge` | Осветление основы |
| `color-burn`  | Затемнение основы |
| `hard-light`  | Направленный свет |
| `soft-light`  | Рассеянный свет   |
| `difference`  | Разница           |
| `exclusion`   | Исключение        |
| `hue`         | Тон               |
| `saturation`  | Насыщенность      |
| `color`       | Цвет              |
| `luminosity`  | Яркость           |

:::

## CSS-свойства

### `background-blend-mode`

::: info

- https://webref.ru/css/background-blend-mode - background-blend-mode
- https://codepen.io/yoksel/pen/kGAsK - background-blend-mode playground (CodePen)
  :::

::: details `background-blend-mode` - управляет режимами наложения слоев фона, заданного в CSS

- Слои: backround-color, background-image (несколько), linear-gradient

```css
div {
  background-color: blue;
  background-image: url(...);
  background-blend-mode: multiply;
}
```

:::

### `mix-blend-mode`

::: info

- https://webref.ru/css/mix-blend-mode - mix-blend-mode
  :::

::: details `mix-blend-mode` - определяет режим наложения исходного цвета на фоновый цвет или фоновое изображение

```css
h1 {
  background-color: black;
  color: white;
  mix-blend-mode: multiply;
}
```

:::

## Пример

<v-iframe height="500" src="https://codepen.io/LetsCode-Dev/embed/EagNqvN" />
