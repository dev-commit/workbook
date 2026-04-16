# Web Storage: Local Storage и Session Storage

- 1. **Локальное хранилище (localStorage)** - аналогичен постоянным кукам. Доступно для всех скриптов из домена, который первоначально добавил данные и сохраняется после закрытия браузера. Не имеют определенного времени жизни
- 2. **Сессионное хранилище (sessionStorage)** - аналогичен сессионным кукам. Сессия сохраняется по принципу одна страница-одно окно и ограничивается жизнью данного окна, то есть для каждого открытого окна создаётся новая сессия, которая прекращает своё существование при закрытии окна и не зависит от домена открывшего её. Сессия страницы остается активной все время пока окно браузера открыто и сохраняется между перезагрузками страниц. Открытие той же страницы в новом окне браузера или новой вкладке приводит к созданию новой сессии страницы, что отличается от поведения session cookies.

- Не отправляются на сервер в отличие от Cookie

## Local Storage

- Google Chrome -> F12 -> Application -> Local Storage
- localStorage это свойство глобального объекта браузера (window)

```js
// Добавление в localStorage нового ключа со значением (перезапишет существующий ключ)
localStorage.setItem('id', '77');

// Получение значения
const a = localStorage.getItem('id');

// Удаление ключа
localStorage.removeItem('id');

// Очистка всего хранилища
localStorage.clear();
```

```js
localStorage["Ключ"] = "Значение"; // Установка значения
const a = localStorage["Ключ"];    // Получение значения
delete localStorage["Ключ"];       // Удаление значения
```

### Провека наличия ключа

```js
if (localStorage.getItem('key') !== null) {...}
```

### Объекты и массивы

```js
const obj = {
	item1: 1,
	item2: [123, "two", 3.0],
	item3: "hello"
};

// Сериализация объекта и запись в хранилище по ключу "key"
localStorage.setItem("key", JSON.stringify(obj));

// Преобразование из JSON в объект
const returnObj = JSON.parse(localStorage.getItem("key"));
```

### Проверка QUOTA_EXCEEDED_ERR

```js
// Браузеры выделяют 5MB под localStorage
// При привышении исключение QUOTA_EXCEEDED_ERR
try {
	localStorage.setItem('ключ', 'значение');
} catch(e) {
	if (e == QUOTA_EXCEEDED_ERR) {
		console.log('Превышен лимит');
	}
}
```

### Событиеstorage

::: info
https://developer.mozilla.org/ru/docs/Web/API/Window/storage_event
:::
- **Событие storage** - сигнализирует, что данные в объектах localStorage или sessionStorage были изменены

```js
window.addEventListener("storage", myFunction);
```

### Пример использования

```js
export const getLocalStorage = key => {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data);
    }

    return {};
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}
```

## Session Storage

```js
sessionStorage.setItem('key', 'value');     // Сохранение данных в sessionStorage
const data = sessionStorage.getItem('key'); // Получение данных из sessionStorage
sessionStorage.removeItem('key');           // Удаление ключа
sessionStorage.clear();                     // Очистка всего хранилища
```
