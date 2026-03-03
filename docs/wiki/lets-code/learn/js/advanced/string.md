# Строки. Методы работы со строками

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Перебор строки

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js
const str = "Hello";

for (let i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Методы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### `length` `toString`

```js
const a = str.length; // Длина строки
77.toString();        // Преобразование в строку
```

### `toUpperCase` `toLowerCase`

```js
const name = name.toUpperCase(); // Верхний регистр
const name = name.toLowerCase(); // Нижний регистр
```

### `indexOf` `lastIndexOf`

- Поиск в строке совпадений с образцом

```js
const pos = str.indexOf("name"); // С начала (-1 не найдено)
const pos = str.lastIndexOf("name"); // С конца (-1 не найдено)
```

### `slice`

```js
const root = str.slice(0, 7); // Вырезать с 0 до 7 не включая
```
