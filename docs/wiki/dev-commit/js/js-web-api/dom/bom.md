# Объектная модель браузера (BOM)

## 1. Navigator - информация о браузере и ОС

```js
const a = navigator.userAgent; // Название браузера
const a = navigator.platform; // ОС
const a = navigator.language; // Язык браузера
const a = navigator.oscpu; // Название операционной системы
const a = navigator.cookieEnabled; // Включены ли куки
const a = navigator.onLine; // Подключен ли пользователь к Интернету
```

## 2. Screen - данные об экране пользователя

```js
const a = screen.width; // Ширина экрана
const a = screen.height; // Высота экрана
const a = screen.availWidth; // Доступная ширина (на сколько можно раскрыть браузер не в полноэкранном режиме)
const a = screen.availHeight; // Доступная высота
const a = screen.colorDepth; // Глубина цвета
```

## 3. Location - информация о URL, возможность перезагрузить страницу

```js
location.reload(); // Перезагрузка страницы
const a = location.href; // Адрес загруженной страницы
const a = location.toString(); // URL
location.href = "page.html"; // Переходим на страницу (на этой же странице)

const a = window.location.pathname.split("/")[2];
const a = location.hash.slice(1);
```

### Конвертация URL

```js
const encoded = encodeURI("http://google.com/на-русском");
const decoded = decodeURI(encoded);

console.log(encoded); // http://google.com/%D0%BD%D0%B0-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%BC
console.log(decoded); // http://google.com/на-русском
```

### Текущий адрес страницы без .html и символа "/" в начале

```js
let currentUrl;
// Определяем строку пути относительно хоста страницы в формате "/page.html"
currentUrl = location.pathname;
// Обрезаем символ "/" в начале и символы ".html" в конце
currentUrl = currentUrl.slice(1, currentUrl.length - 5);
```

### Поиск совпадений

```js
// -1 - нет совпадений
const page = location.href.indexOf("/page/");
const page = location.pathname.indexOf("/page/");
```

## 4. History - вперед/назад по истории, позволяет без перезагрузки изменить страницу браузера

```js
window.history.back(); // Эквивалент клика по кнопке назад
window.history.forward(); // Эквивалент клика по кнопке вперед
window.history.go(-1); // Эквивалент history.back();
window.history.go(1); // Эквивалент history.forward();
const a = window.history.length; // Количество страниц в стеке истории

if (history && history.pushState) {
  // Проверка поддержки history
}
```

## 5. Frames - содержит коллекцию всех дочерних объектов фреймов на странице

```js
const a = frames;
```

## 6. Вывод сообщения пользователю

```js
alert("Привет Мир"); // Модальное окно
const age = prompt("Сколько Вам лет?", ""); // Модальное окно с вопросом и полем ввода
const answer = confirm("Вы согласны?"); // Модальное окно да/нет (вернет bool значение)
```
