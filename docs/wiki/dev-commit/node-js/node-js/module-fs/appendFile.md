# `appendFile`, `unlink`

## Добавление в файл

```js
// Синхронно
fs.appendFileSync("text.txt", "\n Hello Again!");

// Асинхронно
fs.appendFile("text.txt", "\n Hello Again!", (err) => {
  if (err) {
    throw err;
  }

  console.log("Файл обновлен");
});
```

## Удаление файла

```js
// Синхронно
fs.unlinkSync("file.txt");

// Асинхронно
fs.unlink("file.txt", () => {
  //
});
```
