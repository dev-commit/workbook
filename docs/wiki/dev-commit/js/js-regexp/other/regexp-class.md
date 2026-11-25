# Класс RegExp

## Пример

```js
const pattern = new RegExp("\\w+", "g"); // Конструктор
const pattern = /\w+/g; // Литерал
```

## Свойства, доступные для чтения

```js
pattern.global;
pattern.ignoreCase;
pattern.multiline;
pattern.lastIndex; // Позиция, с которой начнётся следующий поиск
```
