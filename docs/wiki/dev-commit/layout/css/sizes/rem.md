# Единицы измерения: em и rem

> Часто применяется для задания font-size

## `em`

::: tip em

- **em** - рассчитывается относительно родителя (берет значение font-size)
  :::

```html
<p>Текст абзаца</p>

<div class="container">
  <div class="item1">Текст для item1</div>
  <div class="item2">Текст для item2</div>
</div>
```

```css
body {
  font-size: 20px;
}
.container {
  font-size: 2em;
}
.item1 {
  font-size: 2em;
}
.item2 {
  font-size: 1em;
}
```

## `rem`

::: tip rem

- **rem** (root em) - рассчитывается относительно html (берет значение font-size). rem - берется от html
  :::

```html
<p>Текст абзаца</p>

<div class="container">
  <div class="item1">Текст для item1</div>
  <div class="item2">Текст для item2</div>
</div>
```

```css
html,
body {
  font-size: 20px;
}
.container {
  font-size: 2rem;
}
.item1 {
  font-size: 2rem;
}
.item2 {
  font-size: 1rem;
}
```
