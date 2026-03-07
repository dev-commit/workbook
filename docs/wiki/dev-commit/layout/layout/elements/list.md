# Списки

## HTML-теги

::: details `<ul />` - маркированный список

```html
<ul>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</ul>
```

:::

::: details `<ol />` - нумерованный список

```html
<ol>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</ol>
```

:::

## CSS-свойства

### Настройка маркеров

`list-style` (составное свойство) - маркеры

::: details `list-style-type` - изменение вида маркера

```css
ul {
  list-style-type: none;
  list-style-type: circle;
  ...
}
```

:::

::: details `list-style-image` - добавление изображения вместо стандартного маркера

```css
ul {
  list-style-image: none;
  list-style-image: url("Путь к файлу");
}
```

:::

::: details `list-style-position` - задание позиции относительно текста

```css
ul {
  list-style-position: inside;
  list-style-position: outside;
}
```

:::

### Формы записи

**Полная форма записи**

```css
ul {
  list-style-type: none;
  list-style-image: url("Путь к файлу");
  list-style-position: inside;
}
```

**Сокращенная форма записи**

```css
ul {
  list-style: none url("Путь к файлу") inside;
}
```
