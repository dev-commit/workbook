# Задание Grid Area через grid-area

## CSS-свойства

### `grid-template-areas`, `grid-area`

- Если нужно оставить область пустой, то используется ".”

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 200px;
  grid-template-areas:
    "header  header  menu"
    "content content .";
}

.header {
  grid-area: header;
}
.menu {
  grid-area: menu;
}
.content {
  grid-area: content;
}
```

```html
<div class="container">
  <div class="header">header</div>
  <div class="menu">menu</div>
  <div class="content">content</div>
</div>
```
