# Глубокое сравнение объектов

::: warning

- Проверить код

:::

## Информация

- _Задача_: написать функцию `deepEqual(a, b)`, которая сравнивает два значения по содержимому, включая вложенные объекты и массивы

## Реализация

```js
function deepEqual(a, b) {
  // Одинаковые примитивы или одна и та же ссылка
  if (a === b) return true;

  // Если одно из значений не объект (или null) - значения разные
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // Разное количество ключей - объекты разные
  if (keysA.length !== keysB.length) return false;

  // Каждый ключ есть в обоих объектах, и значения по нему глубоко равны
  return keysA.every(
    (key) => Object.hasOwn(b, key) && deepEqual(a[key], b[key]),
  );
}

const obj = { here: { is: "an" }, object: 2 };

deepEqual(obj, { here: { is: "an" }, object: 2 }); // true
deepEqual(obj, { here: { is: "an" }, object: 3 }); // false
deepEqual(obj, { here: 1, object: 2 }); // false
deepEqual([1, [2, 3]], [1, [2, 3]]); // true
```

- Проверка `Object.hasOwn(b, key)` нужна для случая `{ x: undefined }` и `{ y: undefined }`: количество ключей одинаковое, значения - `undefined`, но ключи разные
- Решение не различает массив и объект с теми же ключами (`[1]` и `{ 0: 1 }`) и не сравнивает содержимое `Date`, `Map`, `Set`
