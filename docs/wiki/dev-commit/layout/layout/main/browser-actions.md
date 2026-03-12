# События браузера

### CSS-свойства

### `scroll-behavior`, `overflow-anchor`, `overscroll-behavior`, `scroll-snap`, `will-change`

::: details `scroll-behavior` - поведение скролла

**Информация**

| Значение | Описание                                        |
| -------- | ----------------------------------------------- |
| `auto`   | Мгновенный переход (по-умолчанию)               |
| `smooth` | Плавная прокрутка к элементу (применять к html) |

**Пример**

- Плавная прокрутка к секции

```html
<a href="#second">Link</a>
<section id="first">First</section>
<section id="second">Second</section>
```

```css
html {
  scroll-behavior: smooth;
}
section {
  border: 1px solid #000;
  height: 100vh;
}
```

:::

::: details `overflow-anchor`

- Может применяться на BODY и на другие элементы

```css
body {
  overflow-anchor: auto | none;
}
```

:::

::: details `overscroll-behavior` - использование цепочек прокрутки

- Обычное поведение: Если вы находитесь внутри элемента, который имеет собственную прокрутку, и вы прокрутили его до нижней части, то следующий родительский элемент начинает прокручиваться в этом направлении
- Overscroll Behavior позволяет предотвратить прокрутку до полной загрузки и рендеринга DOM-дерева

```css
.container {
  overscroll-behavior: none;
}
```

:::

::: details `scroll-snap` - контроль поведения скролла

```css
div {
  scroll-snap-type: ...;
  scroll-padding: ...;
  scroll-snap-align: ...;
}
.container {
  scroll-snap-type: y mandatory;
}
.child {
  scroll-snap-align: start;
}
```

:::

::: details `will-change`

**Ссылки**

- https://developer.mozilla.org/en-US/docs/Web/CSS/will-change

**Данные**

- Уведомление браузера о том, что элемент изменит своё состояние
- Не надо ставить на каждый элемент
- Ставить ДО изменения и убирать ПОСЛЕ

```css
div {
  will-change: scroll-position;
  will-change: transform;
}
```

:::
