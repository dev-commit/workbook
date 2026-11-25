# Примеры

## Общее

```js
const regexp = /[a-zA-Z]/g;
const str = "Привет. You have 23 likes";

console.log(regexp.test(str));
```

## Шаблоны

```bash
(\b\w+)@(\w+\.\w+\b) # Поиск email
```
