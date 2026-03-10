# CSS float

## CSS-свойства

::: details `float` - добавляет обтекание элементам

| Значение | Описание                                                                                  |
| -------- | ----------------------------------------------------------------------------------------- |
| `left`   | Выравнивает элемент по левому краю, все остальные элементы обтекают его по правой стороне |
| `right`  | Выравнивает элемент по правому краю, все остальные элементы обтекают его по левой стороне |
| `none`   | Обтекание элемента не задается                                                            |

```css
div {
  float: left;
  float: right;
  float: none;
}
```

:::

::: details `clear` - отключает обтекание для элементов

| Значение | Описание                           |
| -------- | ---------------------------------- |
| `left`   | отключить обтекание слева          |
| `right`  | отключить обтекание справа         |
| `both`   | отключить обтекание справа и слева |

```css
div {
  clear: left;
  clear: right;
  clear: both;
}
```

:::

## Примеры

::: details Пример использования float и отключения обтекания (clearfix)

```html
<div class="container">
  <div class="item">item1</div>
  <div class="item">item2</div>
</div>
```

---

```css
.container {
  border: 2px solid blue;
}
.container:after {
  /* Содержимое не нужно */
  content: "";
  /* Для отключения обтекания необходим блочный элемент */
  display: block;
  /* Отключение обтекание справа и слева */
  clear: both;
}
.item {
  width: 100px;
  height: 100px;
  background: orange;
  padding: 20px;
  margin: 5px;
}
.item:first-child {
  /* Применение обтекания слева */
  float: left;
}
.item:last-child {
  /* Применение обтекания справа */
  float: right;
}
```

:::

<v-details title="Float Image">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/MWdevRE" />
</v-details>
