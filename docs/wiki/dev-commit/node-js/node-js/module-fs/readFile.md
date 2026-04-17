# readFilewriteFile

## Чтение из файла

```js
// синхронно
const fileSync  = fs.readFileSync('text.txt', 'utf8');

// асинхронно  
const fileASync = fs.readFile('text.txt', 'utf8');       

// асинхронно
fs.readFile('text.txt', 'utf8', (err, data) => {
    console.log(data);
});
```

## Запись в файл

```js
// синхронно
fs.writeFileSync('text.txt', 'Hello \n World');

// асинхронно
fs.writeFile('text.txt', 'Hello \n World', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('Файл создан');
});
```
