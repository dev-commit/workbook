# WebSocket

## Информация

::: info

- https://learn.javascript.ru/websocket
  :::

::: tip

- **Протокол WebSocket** предназначен для решения снятия ограничений обмена данными между браузером и сервером. Кросс-доменный, универсальный, безопасный. Позволяет пересылать любые данные, на любой домен, безопасно и почти без лишнего сетевого трафика. Позволяет создать постоянное соединение для отображения в реальном времени (н-р: сервис биржи и т.д.)
- WebSockets - выделяется отдельная абстракция, реализованная поверх HTTP, но фактически другой протокол: он двунаправленный, в отличие от HTTP, который ждет, что у тебя что-то зарезолвится на сервере.
  :::

- Сервер должен поддерживать протокол WebSocket
- Протокол WebSocket работает над TCP
- Создать подобный XMLHttpRequest-запрос (подделать WebSocket) невозможно: указанные выше заголовки запрещены к установке методом setRequestHeader
- Сервер может проанализировать эти заголовки и решить, разрешает ли он WebSocket с данного домена Origin

## Реализация

### Открыть соединеиние

```js
// Создание объекта WebSocket с указанием протокола ws
const socket = new WebSocket("ws://javascript.ru/ws"); // Протокол "ws" над "http"
const socket = new WebSocket("wss://javascript.ru/ws"); // Протокол "wss" над "https"
```

### Коллбэки у socket

- Один для получения данных и три при изменениях в состоянии соединения

```js
socket.onopen = function () {
  console.log("Соединение установлено.");
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log("Соединение закрыто чисто");
  } else {
    console.log("Обрыв соединения");
  }
  console.log("Код: " + event.code + " причина: " + event.reason);
};

socket.onmessage = function (event) {
  console.log("Получены данные " + event.data);
};

socket.onerror = function (error) {
  console.log("Ошибка " + error.message);
};
```

### Отправка данных

```js
socket.send("Привет"); // Строка
socket.send(form.elements[0].file); // Файл из формы
```
