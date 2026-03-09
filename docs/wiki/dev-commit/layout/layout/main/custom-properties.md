# Custom Properties

> **CSS Custom Properties** - переменные в CSS позволяют вынести повторяющиеся значения

## Основные операции

#### 1. Объявление переменных и основные операции

::: details Объявление переменных

```css
:root {
  --color: green;
}
body {
  background-color: var(--color);
}
```

:::

::: details Привязка переменных

```css
:root {
  --color1: var(--color2);
  --color2: yellowgreen;
}
body {
  background-color: var(--color1);
}
```

:::

::: details Резервное значение (локальный fallback)

```css
:root {
  --color: green;
}
body {
  background-color: var(--color, blue);
}
```

:::

::: details Проверка поддержки переменных

```css
@supports ((--a: 0)) {
  /* Стили с поддержкой переменных */
}
@supports (not (--a: 0)) {
  /* Стили без поддержки переменных */
}
```

:::

#### 2. Переопределение переменных

::: details Переопределение переменных на `hover`

```css
body {
  --color: yellowgreen;
}
button {
  color: var(--color);
}
button:hover {
  --color: skyblue;
}
```

:::

::: details Переопределение переменных в `@media`

```css
:root {
  --color: blue;
}
body {
  background-color: var(--color);
}
@media (max-width: 700px) {
  :root {
    --color: yellowgreen;
  }
}
```

:::

#### 3. Переменные в calc()

::: details Использование переменных в `calc()`

```css
:root {
  --a: 2;
  --b: 10px;
}
body {
  /* font-size: 20px; */
  font-size: calc(var(--a) * var(--b));
}
```

:::

::: details Преобразование числа в px

- Для преобразования числа в px, к примеру, достаточно умножить число на 1px в calc

```css
:root {
  --a: 5;
  --b: 20;
}
div {
  /* font-size: 25px; */
  font-size: calc((var(--a) + var(--b)) * 1px);
}
```

:::

#### 4. Цветовые функции

::: details Использование с `rgba()`

```css
:root {
  --color-blue: #42c8f5;
  --color-blue--rgb: 66, 200, 245;
}
body {
  color: var(--color-blue);
  background-color: rgba(var(--color-blue--rgb), 0.7);
}
```

:::

::: details Использование с `hsla()`

- Внутри body происходит переопределение переменной —hue

```css
:root {
  --hue: 285;
  --saturation: 100%;
  --lightness: 60%;
  --opacity: 0.7;
}
body {
  --hue: 400;

  background-color: hsla(
    var(--hue),
    var(--saturation),
    var(--lightness),
    var(--opacity)
  );
}
```

:::

#### 5. Переменные в SVG

::: details Применение в SVG

- SVG должна быть инлайново встроена на страницу

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="50" fill="var(--color)" />
</svg>
```

---

```css
:root {
  --color: yellowgreen;
}
```

:::

## API CSS Style Declaration

::: details Использование переменных в JavaScript

```css
:root {
  --color: #ffeead;
  --anotherColor: orange;
}
```

---

```jsx
const root = document.querySelector(":root");

const rootStyles = getComputedStyle(root);
const color = rootStyles.getPropertyValue("--color"); // => '#ffeead'

root.style.setProperty("--color", "#88d8b0");
root.style.setProperty("--color", "var(--anotherColor, blue)");
root.style.removeProperty("--color");
```

:::

## Информация

::: details Использование `:root` в CSS-переменных

- Кроме HTML есть ещё XML и SVG
- `:root` - это корень любого типа документа
  :::

::: details Органичения

- Нельзя одномоментно сбрасывать значения всех переменных --: initial

:::

::: details Нельзя использовать

**1. В именах обычных CSS-свойств**

```css
div {
  var(--side): 10px;
}
```

**2. В подстановке URL**

```css
div {
  background-image: url(var(--image));
}
```

**3. В значениях медиа-запросов**

```css
@media screen and (min-width: var(--desktop)) {
  /**/
}
```

:::

## Примеры

<v-details title="Задание цветовой темы на сайте">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/NWvOaaz" />
</v-details>
