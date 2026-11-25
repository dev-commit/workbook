# charAt(), charCodeAt()

## Информация

::: tip

- **charAt()** - возвращает символ строки по индексу
- **charCodeAt()** - возвращает код символа строки по индексу (все русские буквы находятся в диапазоне от 1040 до 1103)
  :::

```js
const root = str.charAt(2);
const root = str.charCodeAt(2);
```

```js
console.log("".charAt(0)); // Пустая строка
console.log(""[0]); // undefined
```
