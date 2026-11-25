# Arc

## Элемент

<v-two fix-right>
<template #first>

```js
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill(); // fill
ctx.stroke(); // stroke
```

</template>
<template #last>

<img src="../@img/arc/arc1.png" style="width: 100%" />

</template>
</v-two>

### Параметры `arc()`

1. Координаты центра окружности (x)
2. Координаты центра окружности (y)
3. Радиус
4. Start Angle (справа)
5. End Angle (360deg = pi\*2)
6. Рисование по часовой (false) / против (true) часовой стрелки
