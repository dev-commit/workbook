# `mkdir`, `rmdir`

## Создание директории

```js
// Синхронно
fs.mkdirSync("folderName");

// Асинхронно
fs.mkdir("folderName", () => {
  //
});
```

- При использовании асинхронного метода, необходимо использовать функцию обратного вызова

```js
fs.mkdir("folderName", () => {
  fs.readFile("readme.txt", "utf8", (err, data) => {
    fs.writeFile("./folderName/writeme.txt", data, () => {});
  });
});
```

- Можно использовать обработку _error_

```js
fs.mkdir("folderName", (err) => {
  if (err) {
    throw err;
  }

  console.log("Папка создана");
});
```

## Удаление директории

### Удаление пустой директории

```js
// Синхронно
fs.rmdirSync("folderName");

// Асинхронно
fs.rmdir("folderName", () => {
  //
});
```

### Удаление непустой директории

```js
// Удаление сначала файла из папки
fs.unlink("./folderName/fileName.js", () => {
  // После этого удаление папки
  fs.rmdir("folderName", () => {
    //
  });
});
```
