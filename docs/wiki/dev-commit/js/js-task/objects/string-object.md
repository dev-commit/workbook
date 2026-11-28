# Строка объектов

## Информация

- _Задача_: написать функцию `getData(path)`, которая принимает путь через точку и возвращает функцию. Та достаёт из переданного объекта значение по этому пути, а если по пути чего-то нет - возвращает `undefined`

```js
const obj = {
  foo: { bar: 1 },
  buzz: "string",
};

getData("foo.bar")(obj); // 1
getData("buzz")(obj); // => 'string'
getData("foo.x.y")(obj); // => undefined
getData("foo.x")([]); // => undefined
getData("length")([]); // => 0
getData("foo.bar")({ foo: { bar: 1 } }); // => 1
getData("foo")([]); // => undefined
```

## Реализация

```js
export const getData = (path) => {
  const arr = path.split(".");

  return (obj) => {
    return arr.reduce((result, current) => result?.[current], obj);
  };
};
```

- Путь разбивается на ключи один раз - при вызове `getData(path)`, полученную функцию можно применять к разным объектам
- `reduce` проходит по ключам и на каждом шаге берёт следующее вложенное значение
- `?.` - если на каком-то шаге значение `undefined` или `null`, дальше без ошибки вернётся `undefined`
