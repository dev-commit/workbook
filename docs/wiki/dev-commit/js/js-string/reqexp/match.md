# match(), exec()

## match()

Возвращает само совпадение

```js
// Не игнорирует флаг global
const text = "О дивный новый мир";
const pattern = /новый/;
const result = text.match(pattern); // ["новый", index: 9, input: "О дивный новый мир", groups: undefined]
```

## exec()

Аналогичен match()

- Если не установлен флаг global, результат аналогичен методу match
- Если установлен флаг global, получаем 1 первый match

```js
const text = "О дивный новый мир";
const pattern = /новый/g;
const result = pattern.exec(text);
```
