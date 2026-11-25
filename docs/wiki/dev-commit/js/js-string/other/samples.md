# Примеры

## Перебор строки

```js
for (let i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}
```

## Длина числа

```js
const id = 100;
const a = id.toString().length;
```

## Сложение строки и чисел

```js
"Blink" + 181 + 1; // "Blink1811"
"Blink" + (181 + 1); // "Blink182"
```

## Экранирование кавычек

<!-- prettier-ignore -->
```js
"\n"; // Перенос строки
console.log("привет \n мир"); // Вывод переноса строки
"call me \"ziggy\" now"; // Экранирование кавычек
```

## Проверка на заполненное поле

```js
const login = "";
const password = "";

function isFormValid() {
  return login.length > 0 && password.length > 0;
}
```
