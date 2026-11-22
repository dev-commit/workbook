# IndexedDB

## Информация

::: info

- https://developer.mozilla.org/ru/docs/IndexedDB/Using_IndexedDB - [MDN] Использование IndexedDB

:::

::: tip Определение

- **IndexedDB** - это способ постоянного хранения данных внутри клиентского браузера. NOSQL хранилище на стороне клиента. Что позволяет создавать веб-приложения обращения к данным независимо от доступности сети, приложения могут работать как онлайн, так и офлайн

:::

- Сначала вызывается dbCreate() для открытия/создания БД
- После dbInsert()

## Глобальная переменная

```js
let db = null;
```

## Создание / открытие БД и обработчики событий

```js
function dbCreate() {
  // Создание базы данных
  const request = window.indexedDB.open("dbName", 77); // Create DB: name, version

  // Обработчик create
  request.onupgradeneeded = function (event) {
    db = event.target.result; // => IDBDatabase {name: "dbName", version: 77 ...}
    // const name = db.name; // => 'dbName'
    // const version = db.version; // => 77
    const objectStore = db.createObjectStore("notes", { keyPath: "title" });
  };
  request.onsuccess = function (event) {
    db = event.target.result;
  };
  request.onerror = function (event) {
    console.error(event.target.error);
    console.error(event.target.errorCode);
  };
}
```

## Добавление записи

```js
function dbInsert() {
  const note = {
    title: "My note",
    text: "This is my note",
  };
  const tx = db.transaction("notes", "readwrite");
  const notes = tx.objectStore("notes");
  notes.add(note);
}
```

## Выборка всех записей

```js
function dbSelect() {
  const tx = db.transaction("notes", "readonly");
  const notes = tx.objectStore("notes");
  const request = notes.openCursor();
  request.onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      console.log(cursor.key); // => 'My note'
      console.log(cursor.value.text); // => 'This is my note'
      cursor.continue();
    }
  };
}
```
