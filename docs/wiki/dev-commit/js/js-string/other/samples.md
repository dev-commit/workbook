# Примеры

### Перебор строки

```js
for (let i=0; i <= str.length-1; i++) {
	console.log(str[i]);
}
```

### Длина числа

```js
const id = 100;
const a = id.toString().length;
```

### Сложение строки и чисел

```js
"Blink" + 181 + 1;   // "Blink1811"
"Blink" + (181 + 1); // "Blink182"
```

### Экранирование кавычек

```js
'\n'                     // перенос строки
alert('привет \n мир');  // вывод переноса строки
"call me \"ziggy\" now"; // экранирование кавычек
```

### Проверка на заполненное поле

```js
const login = '';
const password = '';

isFormValid() {
	return login.length > 0 && password.length > 0;
}
```
