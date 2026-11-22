# Math

## `round`, `ceil`, `floor` - округление

```js
// Округляет число к ближайшему целому (5 округляется вверх)
const a1 = Math.round(5.1); // => 5
const a2 = Math.round(5.5); // => 6
const a3 = Math.round(5.9); // => 6

const a2 = Math.ceil(5.1); // => 6, округляет число в большую сторону
const a3 = Math.floor(5.9); // => 5, округляет число в меньшую сторону
```

## `random` - генерация случайного дробного числа

- Генерация случайного дробного числа от 0 (включительно) до 1 (не включая). Н-р: 0.27647450465282075

```js
const a = Math.random();
```

**Варианты диапазонов**

- Значение, на которое умножается, должно быть на 1 больше нужного

```js
const a = Math.floor(Math.random() * 2); // 0 - 1
const a = Math.floor(Math.random() * 3); // 0 - 2
const a = Math.floor(Math.random() * 4); // 0 - 3
const a = Math.floor(Math.random() * 5); // 0 - 4
const a = Math.floor(Math.random() * 6); // 0 - 5
const a = Math.floor(Math.random() * 7); // 0 - 6
const a = Math.floor(Math.random() * 8); // 0 - 7
const a = Math.floor(Math.random() * 9); // 0 - 8
const a = Math.floor(Math.random() * 10); // 0 - 9

const a = Math.floor(Math.random() * 101); // 0 - 100
```

**Пример Random(min, max)**

```js
const mtRand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //return Math.random() * (max - min) + min;
};
```

## Математические методы

```js
const a1 = Math.pow(4, 2); // Степень 4 в 2
const a2 = Math.sqrt(400); // Квадратный корень числа
const a3 = Math.abs(-7); // Модуль
const a4 = Math.max(1, 2, 3, 4); // Большее число из аргументов
const a5 = Math.min(1, 2, 3, 4); // Меньшее число из аргументов
const a6 = Math.exp(2); // Возведение числа "e" в указанную степень
const a7 = Math.log(5); // Натуральный логарифм числа

const a1 = Math.PI; // Число PI
const a2 = Math.E; // Число E

const a1 = Math.sin(1); // Синус (радиан)
const a2 = Math.cos(1); // Косинус
const a3 = Math.tan(1); // Тангенс
const a4 = Math.atan(1); // Арктангенс
const a5 = Math.asin(1); // Арксинус
const a6 = Math.acos(1); // Арккосинус
```
