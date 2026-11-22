# Поверхностное сравнение объектов

## Информация

- Объекты сравниваются по ссылке: если структура объектов одинаковая, но разные ссылки, то результатом сравнения будет false
- Решение показывает сравнение объектов только первого уровня вложенности

## Результат выполнения

```js
const obj1 = {
  name: "Jack",
};
const obj2 = {
  name: "Jack",
};

const a1 = obj1 === obj2; // => false
const a2 = shallowEqual(obj1, obj2); // => true
```

## Решение

```js
const shallowEqual = (obj1, obj2) => {
  // Одна и та же ссылка (или равные примитивы)
  if (obj1 === obj2) {
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Не совпадает кол-во ключей объектов
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
```
