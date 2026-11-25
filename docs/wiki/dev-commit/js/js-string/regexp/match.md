# match(), exec()

## Методы

### `match()`

::: tip

- **match()** - возвращает само совпадение
  :::

```js
// Не игнорирует флаг global
const text = "О дивный новый мир";
const pattern = /новый/;
const result = text.match(pattern); // ["новый", index: 9, input: "О дивный новый мир", groups: undefined]
```

### `exec()`

::: tip

- **exec()** - аналогичен match()
- Если не установлен флаг global, результат аналогичен методу match
- Если установлен флаг global, возвращает одно совпадение, начиная поиск с `lastIndex`. Повторный вызов возвращает следующее

  :::

```js
const text = "О дивный новый мир";
const pattern = /новый/g;
const result = pattern.exec(text);
```
