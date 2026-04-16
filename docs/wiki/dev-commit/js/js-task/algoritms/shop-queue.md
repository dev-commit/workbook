# 👿 Магазин с кассами

### Постановка задачи

- Магазин в котором N касс
- Одна очередь, люди расходятся по нескольким разным кассам (базовый случай)
- Написать функцию, которая принимает на вход массив времен и возвращет число через которое все люди будут обслужены

```js
function calculateTime(times) {}
calculateTime([10, 4, 5], 2);

// Первый человек проводит у кассы 10 минут
// Второй 4 минуты
// Третий 5 минут
// Кол-во касс: 2
```

### Решение 1 (не доделано)

```js
console.log(getTime([1, 2, 3, 4, 5]));

function getTime(times) {
    let queue = [times[0], times[1], times[2]];

    for (let i = 3; i <= times.length; i++) {
        const min = Math.min.apply(null, queue);
        const pos = queue.indexOf(min);
        queue[pos] += times[i];
    }
  
    console.log(queue);

    const max = Math.max.apply(null, queue);

    return max;
}
```

### Решение 2 (не сделано)

```js
function calculateTime(times, N) {
    let firstQueue = 0;
	let secondQueue = 0;

    for (let i = 0; i < times.length; i++) {
        if (firstQueue > secondQueue) {
            secondQueue += times[i];
        } else {
            firstQueue += times[i];
        }
    }
    
    for(...) {}
    
    return firstQueue > secondQueue ? firstQueue : secondQueue;
}

calculateTime([10, 3, 5, 7, 11, 6, 1], 2)
```
