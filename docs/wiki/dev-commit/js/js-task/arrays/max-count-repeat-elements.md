# Количество повторяющихся элементов

Ответ от ChatGPT

## Задание

- Есть массив с числами
- Нужно найти число, которое повторяется максимальное количество раз

```js
const arr = [1, 2, 4, 1, 2, 2, 4]
```

## Решение от ChatGPT

```js
const arr = [1, 2, 4, 1, 2, 2, 4];

const mostFrequent = arr => {
  const counts = {};

  // Подсчитываем количество повторений
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Находим число с максимальным количеством повторений
  let maxNum = null;
  let maxCount = 0;

  for (const [num, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      maxNum = Number(num);
    }
  }

  return maxNum;
};

console.log(mostFrequent(arr)); // 👉 2
```

#### Объяснение

1. Создаётся объект counts, где ключ — число, значение — сколько раз оно встретилось
2. После прохода по массиву ищем ключ с максимальным значением
3. Возвращаем это число
