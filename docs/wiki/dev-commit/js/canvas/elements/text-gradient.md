# Text Gradient

```js
const grad = ctx.createLinearGradient(0, 0, 150, 0);
grad.addColorStop(0, 'magenta');
grad.addColorStop(0.5, 'blue');
grad.addColorStop(1, 'red');
ctx.fillStyle = grad;

ctx.font = '22px Arial';
ctx.fillText('Hello World', 20, 35);
```

<!-- <img class="img200" src="../@img/text2.png"/> -->
