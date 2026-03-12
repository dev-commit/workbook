# Текст

::: warning

- Проработать `white-space` и `text-overflow`
  :::

## HTML-теги

### `<h1> - <h6>`, `<br>`, `<p>`

::: details `<h1 /> - <h6 />` - заголовки

```html
<h1>Заголовок 1 уровня</h1>
<h2>Заголовок 2 уровня</h2>
<h3>Заголовок 3 уровня</h3>
<h4>Заголовок 4 уровня</h4>
<h5>Заголовок 5 уровня</h5>
<h6>Заголовок 6 уровня</h6>
```

:::

::: details `<br />` - перенос строк

```html
Здесь нужно сделать <br />
перенос строки
```

:::

::: details `<p />` - параграф

```html
<p>Первый параграф</p>
<p>Второй параграф</p>
```

:::

## CSS-свойства

### Основные: `font-*`, `text-*`

::: details `font-size` `font-style` `font-weight` - размер, начертание и насыщенность шрифта

```css
p {
  /* Размер шрифта */
  font-size: 20px;
  /* Начертание шрифта */
  font-style: italic;
  /* Насыщенность шрифта */
  font-weight: bold;
}
```

:::

::: details `text-align` - выравнивание текста в пределах элемента
| Значение | Описание |
| -------- | ---------------------------- |
| `left` | Выравнивание по левому краю |
| `right` | Выравнивание по правому краю |
| `center` | Выравнивание по центру |

```css
p {
  text-align: left;
  text-align: right;
  text-align: center;
}
```

:::

::: details `text-transform` - преобразованием текста элемента в заглавные или прописные символы
| Значение | Описание |
| ----------- | ------------------------------ |
| `uppercase` | Приведение к верхнему регистру |
| `lowercase` | Приведение к нижнему регистру |

```css
p {
  text-transform: uppercase;
  text-transform: lowercase;
}
```

:::

::: details `text-indent` - красная строка

```css
p {
  text-indent: 20px;
}
```

:::

### Оформление текста: `text-decoration`

::: details `text-decoration` (составное свойство) - определяет внешний вид декоративных линий в тексте
**Состоит из:**

- `text-decoration-line` - определяет тип оформления текста в элементе
- `text-decoration-color` - устанавливает цвет оформления, добавляемого к тексту с помощью `text-decoration-line`
- `text-decoration-style` - устанавливает стиль строк, указанных с помощью `text-decoration-line`
- `text-decoration-thickness` - устанавливает толщину штриха линии оформления, которая используется для текста в элементе

**Полная форма записи**

```css
div {
  text-decoration-line: underline;
  text-decoration-color: green;
  text-decoration-style: dashed;
  text-decoration-thickness: 5px;
}
```

**Сокращенная форма записи**

```css
div {
  text-decoration: underline green dashed 5px;
}
```

:::

::: details `text-decoration-skip-ink` - отображение линий подчеркивания

- Определяет, как будут отображаться линии надстрочного и подчеркивающего подчеркивания

  ```css
  div {
    text-decoration-skip-ink: auto;
    text-decoration-skip-ink: none;
  }
  ```

  :::

::: details `text-underline-offset` `text-underline-position` - смещение и положении линии подчеркивания текста

- `text-underline-offset` - задает расстояние смещения линии подчеркивания текста
- `text-underline-position` - определяет положение подчеркивания, которое задается с помощью значения свойства `text-decoration`

```css
div {
  text-underline-offset: 5px;
  text-underline-position: under;
}
```

:::

<v-details title="Пример с text-decoration">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/ZYzRXxB" />
</v-details>

### Отступы: `line-height`, `word-spacing`, `letter-spacing`

::: details `line-height` `word-spacing` `letter-spacing` - расстояние между строками, словами и буквами

```css
p {
  /* Расстояние между строками */
  line-height: 1.5;
  /* Расстояние между словами */
  word-spacing: 10px;
  /* Расстояние между буквами */
  letter-spacing: 4px;
}
```

:::

### Дополнительные: `text-shadow`, `white-space`, `text-overflow`, `initial-letter`

::: details `text-shadow` - тень для текста
**Значения:**

1. Смещение по горизонтали (3px)
2. Смещение по вертикали (4px)
3. Размытие (5px)
4. Цвет (#000)

```css
p {
  text-shadow: 3px 4px 5px #000;
}
```

:::

::: details `white-space` - перенос строк

```css
div {
  white-space: nowrap; /* Запрещаем перенос строк */
  white-space: pre-wrap; /* Разрешить перенос строк в pre */
}
```

:::

::: details `text-overflow` - определяет, как будет обрезаться текст, если он не помещается в отведённое пространство

```css
div {
  text-overflow: ellipsis; /* Добавляет многоточие */
  text-overflow: clip;
}
```

:::

::: details `initial-letter` - задает начальную букву
**Значения**

- `size` - сколько строк занимает символ
- `position` - с какой строки он начинается

```css
p::first-letter {
  initial-letter: 4;
  initial-letter: 4 1;
}
```

:::

### Writing Mode и размеры блока: `writing-mode`, `block-size`, `inline-size`

::: details `writing-mode` - направление текста
**Ссылки**

- https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode

**Пример**

```css
p {
  /* Стандартное */
  writing-mode: horizontal-tb;
  /* сверху-вниз, справа-налево */
  writing-mode: vertical-rl;
  /* сверху-вниз, слева-напрво */
  writing-mode: vertical-lr;
}
```

:::

::: details `block-size` и `inline-size`
**Ссылки**

- https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
- https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size

**Описание**

- `block-size` и `inline-size` - определяют горизонтальный или вертикальный размер блока элемента в зависимости от его режима записи (writing-mode). Они соответствуют свойству width или height в зависимости от значения writing-mode.

**Варианты**

1. Режим записи ориентирован вертикально

- Значение `block-size` относится к ширине элемента
- Значение `inline-size` относится к высоте элемента

2. Режим записи ориентирован горизонтально

- Значение `block-size` относится к высоте элемента
- Значение `inline-size` относится к ширине элемента
  :::

### Примеры

::: details Обрезать текст по длине блока

```css
div {
  white-space: nowrap; /* Запрет переноса строк */
  overflow: hidden; /* Обрезка всего, что не помещается в область */
  text-overflow: ellipsis; /* Добавляет многоточие */
}
```
