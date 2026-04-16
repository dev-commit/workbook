# IndexedDB

::: info
https://developer.mozilla.org/ru/docs/IndexedDB/Using_IndexedDB
:::
- **IndexedDB** - это способ постоянного хранения данных внутри клиентского браузера. NOSQL хранилище на стороне клиента. Что позволяет создавать веб-приложения обращения к данным независимо от доступности сети, приложения могут работать как онлайн, так и офлайн

- Сначал вызывается dbCreate() для открытия/создания БД&lt;
- После dbInsert()

### Глобальная переменная

```js
const db = null;
```

### Создание / открытие БД и обработчки событий

```js
function dbCreate() {
	// Создание базы данных
	const request = window.indexedDB.open('dbName', 77); //create DB: name,version 

    // Обработчик create
	request.onupgradeneeded= function(event) {
	    db = event.target.result;     // => IDBDatabase {name: "dbTest", version: 1 ...}
	    //const name = db.name;         // => 'dbTest'
	    //const version = db.version;   // => '1'
	    const objectStore = db.createObjectStore('notes', { keyPath: 'title' });
	};
	request.onsuccess= function(event) {
	    db = event.target.result; 
	};
	request.onerror= function(event) {
	    console.error(event.target.error);
	    console.error(event.target.errorCode);
	};
}
```

### Добавление записи

```js
function dbInsert() {
    const note = {
        title: 'My note',
        text: 'This is my note'
    }
    const tx = db.transaction('notes', 'readwrite');
    const notes = tx.objectStore('notes');
    notes.add(note);
}
```

### Выборка всех записей

```js
function dbSelect() {
    const tx = db.transaction('notes', 'readonly');
    const notes = tx.objectStore('notes');
    const request = notes.openCursor();
    request.onsuccess= function(event) {
        const cursor = event.target.result;
        if (cursor) {
            console.log(cursor.key);        // => 'My note'
            console.log(cursor.value.text); // => 'This is my note'
            cursor.continue();
        }
    };
}
```
