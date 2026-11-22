# Основы

## HTML

```html
<canvas id="canvas" style="display: block; border: 2px solid black;">
  Your browser is not supported
</canvas>
```

## Выборка элемента

```js
const canvas = document.getElementById("canvas");

canvas.width = 200;
canvas.height = 200;
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
```

## Получение контекста: `getContext()`

```js
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellowgreen";
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
```
