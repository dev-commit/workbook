# Объектная модель браузера (BOM)

## 1. Navigator - информация о браузере и ОС

```js
const a = navigator.userAgent;     // название браузера
const a = navigator.platform;      // ОС
const a = navigator.language;      // язык браузера
const a = navigator.oscpu;         // название операционной системы
const a = navigator.cookieEnabled; // включены ли куки
const a = navigator.onLine;        // подключен ли пользователь к Интернету
```

## 2. Screen - данные о экране пользователя

```js
const a = screen.width;       // ширина экрана
const a = screen.height;      // высота экрана
const a = screen.availWidth;  // доступная ширина (на сколько можно раскрыть браузер не в полноэкранном режиме)
const a = screen.availHeight; // доступная высота
const a = screen.colorDepth;  // глубина цвета
```

## 3. Location - информация о URL, возможность перезагрузить страницу

```js
location.reload();           // перезагрузка страницы
const a = location.href;       // адрес загруженной страницы
const a = location.toString(); // URL
location.href = 'page.html'; // переходим на страницу (на этой же странице)
```

```js
const a = window.location.pathname.split('/')[2];
const a = location.hash.slice(1);
```

### Ковертация URL

```js
const encoded = encodeURI('http://google.com/на-русском');
const decoded = decodeURI(encoded);

console.log(encoded); // http://google.com/%D0%BD%D0%B0-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%BC
console.log(decoded); // http://google.com/на-русском
```

### Текущий адрес страницы без .html и символа "/" в начале

```js
const currentUrl;        
// определяем строку пути относительно хоста страницы в формате "/page.html"       
currentUrl = location.pathname; 
// обрезаем символ "/" в начале и символы ".html" в конце
currentUrl = currentUrl.slice(1,currentUrl.length-5);
```

### Поиск совпадений

```js
// -1 - нет совпадений
const page = location.href.indexOf('/page/');
const page = location.pathname.indexOf('/page/');
```

## 4. History - вперед/назад по истории, позвляет без перезагрузки изменить страницу браузера

```js
window.history.back();         // эквивалент клика по кнопке назад
window.history.forward();      // эквивалент клика по кнопке вперед
window.history.go(-1);         // эквивалент history.back();
window.history.go(1);          // эквивалент history.forward();
const a = window.history.length; // количество страниц в стеке истории
```

```js
if (history && history.pushState) {
    // проверка поддержки history
}
```

## 5. Frames - содержит коллекцию всех дочерних объектов фреймов на странице

```js
const a = frames;
```

## 6. Вывод сообщения пользователю

```js
alert("Привет Мир");                      // модальное окно
const age = prompt('Сколько Вам лет?', ''); // модальное окно с вопросом и полем ввода
const answer = confirm('Вы согласны?');     // модальное окно да/нет (вернет bool значение)
```
