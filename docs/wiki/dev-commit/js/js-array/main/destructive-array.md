# Деструктивное присваивание массивов (ES6) - деструктуризация

## Код

```js
const languages = ["JavaScript", "Python", "Ruby"];
```

<v-two compare :title="['ES6', 'ES5']">
<template #first>

```js
const [js, py, rb] = languages;
```

</template>
<template #last>

```js
const js = languages[0];
const py = languages[1];
const rb = languages[2];
```

</template>
</v-two>

## Варианты

### Общее

```js
const scores = [3, 4, 5];
const [low, , high] = scores; // Игнорирование значения
const [low, ...rest] = scores; // Преобразование в массив оставшихся значений
const [low, mid, high = 5] = scores; // Значение по умолчанию
```

### Значение из многомерного массива

```js
const scores = [3, 4, [5, 6]];
const [low, mid, [high, higher]] = scores;
```

### Как параметр функции

```js
function computeScore([low, mid]) {
  console.log(low, mid);
}
computeScore([3, 4]);
```

### Для возврата нескольких значений из функции

```js
function getScores() {
  return [3, 4, 5];
}

const [low, mid, high] = getScores();
```

### Комбинация деструктуризации объектов и массивов

```js
const shape = {
  type: "element",
  coordinates: {
    start: [22, 77],
  },
};

const {
  coordinates: {
    start: [startX, startY],
  },
} = shape;
console.log(startX, startY); // => 22, 77
```

## Примеры

::: details Быстрый обмен значений переменных

```js
let yes = "Yes";
let no = "No";

[yes, no] = [no, yes];
```

:::
