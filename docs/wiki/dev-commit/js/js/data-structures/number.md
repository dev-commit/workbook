# Числа

## `toFixed`, `toLocaleString`

```js
num.toFixed(2); // Фиксирование кол-ва знаков после запятой
(123456789).toLocaleString("ru"); // Вывод чисел в стандарте ECMA-402 (result = "123 456 789")
```

## Преобразование в число

```js
Number(num); // Преобразование любого объекта в число
parseInt(num); // Преобразование в целое число
parseFloat(num); // Преобразование в целое/дробное число ('50.5px', вернет значение "50.5")
+"50.5"; // Преобразование в целое/дробное число
```

## NaN и Infinity

### isNaN

- isNaN преобразует к числу пустую строку, строку из пробельных символов, значения false, true, null

```js
isNaN(num); // Если в переменной не число, вернет истину
```

### isFinite

- isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity/-Infinity

```js
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
```

### Infinity

- Infinity больше любого числа
- Добавление к бесконечности не меняет её

```js
console.log(1 / 0); // Infinity
console.log(12345 / 0); // Infinity
console.log(-1 / 0); // -Infinity
const x = Infinity; // Infinity можно присвоить и в явном виде
```

### NaN

- NaN (Not-A-Number)
- Значение NaN используется для обозначения математической ошибки
- Значение NaN – единственное в своем роде, которое не равно ничему, включая себя

```js
console.log(0 / 0); // NaN
console.log(NaN + 1); // NaN
```

## Примеры

::: details Перевод в двоичную систему отсчета

```js
parseInt("11000", 2); // Переводит строку с двоичной записью числа в число
n.toString(2); // Получает для числа n запись в 2-ной системе в виде строки

const access = parseInt("11000", 2); // Получаем число из строки
console.log(access); // 24, число с таким 2-ным представлением

const access2 = access.toString(2); // Обратно двоичную строку из числа
console.log(access2); // 11000
```

:::

::: details Остаток от деления

```js
console.log(5 % 2); // 1, остаток от деления 5 на 2
console.log(8 % 3); // 2, остаток от деления 8 на 3
console.log(6 % 3); // 0, остаток от деления 6 на 3
```

:::

::: details Возведение в степень

```js
const a = 2;
console.log(a ** 2); // 4 (возведение в квадрат)
console.log(a ** 3); // 8 (возведение в степень 3)
```

:::

::: details Инкремент/декремент

- `i++` постфиксная форма
- `++i` префиксная форма

```js
let i = 1;
const a = ++i;
aleconsole.logrt(a); // 2
```

```js
let i = 1;
const a = i++;
console.log(a); // 1
```

:::
