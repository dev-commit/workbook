# Виды кавычек. Шаблонные строки. Комментарии

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Виды кавычек

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js
const str = "одинарные кавычки";
const str = "двойные кавычки";
const str = `обратные кавычки`;
```

<!------------------------------------------------------------->

#### Кавычки внутри кавычек

<!------------------------------------------------------------->

```js
const a = 'Скажи мне "Привет"'; // Двойные кавычки внутри одинарных
const b = "Скажи мне 'Привет'"; // Одинарные кавычки внутри двойных
const c = "Скажи мне 'Привет'"; // Экранирование кавычек
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Шаблонные строки

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js
const a = `
	первая строка
	вторая строка
`;
```

```js
// Интерполяция
const a = "text";
const b = `строка текста ${a} строка текста`;
```

<!------------------------------------------------------------->

#### Сравнение обычных и шаблонных строк

<!------------------------------------------------------------->
<!-- .............. START ......................... -->
<v-two>
<template #first>

```js
// Обычная строка
const user = "Jack";
const greet = "Добрый день, " + user + " " + 23;

const html =
  '<div class="container">' + '<div class="item">' + user + "</div>" + "</div>";
```

</template>
<template #last>

```js
// Шаблонная строка
const user = "Jack";
const greet = `Добрый день, ${user} 23`;

const html = `
	<div class="container">
		<div class="item">${user}</div>
	</div>
`;
```

</template>
</v-two>
<!-- ............... END .......................... -->

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Комментарии

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js
// Однострочный комментарий
/* Многострочный комментарий */
```
