# appendFileunlink

## Добавление в файл

```js
// синхронно
fs.appendFileSync('text.txt', '\n Hello Again!');
```

```js
// асинхронно
fs.appendFile('text.txt', '\n Hello Again!', (err, data) => {
    if (err) {
        throw err;
    }

    console.log('Файл обновлен');
});
```

## Удаление файла

```js
// синхронно
fs.unlinkSync('file.txt'); 

// асинхронно
fs.unlink('file.txt', () => {
    //
});
```
