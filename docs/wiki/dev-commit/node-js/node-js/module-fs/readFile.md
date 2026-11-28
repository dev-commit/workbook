# `readFile`, `writeFile`

## Чтение из файла

```js
// Синхронно
const fileSync = fs.readFileSync("text.txt", "utf8");

// Асинхронно
fs.readFile("text.txt", "utf8", (err, data) => {
  console.log(data);
});
```

## Запись в файл

```js
// Синхронно
fs.writeFileSync("text.txt", "Hello \n World");

// Асинхронно
fs.writeFile("text.txt", "Hello \n World", (err) => {
  if (err) {
    throw err;
  }
  console.log("Файл создан");
});
```
