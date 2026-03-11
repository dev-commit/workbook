# Примеры

## Выравнивание блоков по центру

::: details inline-block

```html
<div class="container">
  <div class="box"></div>
</div>
```

---

```css
.container {
  text-align: center;
}
.box {
  display: inline-block;
  vertical-align: middle;
}
```

:::

::: details fixed position

- Обязательно задание width и height

```css
.box {
  width: 400px;
  height: 700px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: orange;
}
```

:::

::: details transform

```html
<div class="container">
  <div class="box"></div>
</div>
```

- Проценты считаются относительно самого элемента

```css
.box {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  border: 2px solid blue;
  height: 500px;
}
.box {
  width: 200px;
  height: 200px;
  background: gray;
  position: relative;
}
```

:::

::: details table

```html
<div class="container">
  <div class="text">No result found</div>
</div>
```

---

```css
.container {
  display: table;
  width: 100%;
  background: orange;
}
.text {
  height: 500px;
  width: 100%;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
```

:::

## Другие примеры

::: details Треугольник на border

```css
div {
  width: 0px;
  height: 0px;
  background: pink;
  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
  border-left: 100px solid blue;
  border-right: 100px solid transparent;
}
```

:::
