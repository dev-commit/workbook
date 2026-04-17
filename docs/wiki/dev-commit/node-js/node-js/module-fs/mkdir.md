# mkdirrmdir

## Создание директории

```js
// синхронно
fs.mkdirSync('folderName');

// асинхронно
fs.mkdir('folderName');
```
- При использовании асинхронного метода, необходимо использовать функцию обратного вызова

```js
fs.mkdir('folderName', () => {
	fs.readFile('readme.txt', 'utf8', (err, data) => {
		fs.writeFile('./folderName/writeme.txt', data);
	});
});
```
- Можно использвать обработку error

```js
fs.mkdir('folderName', (err) => {
    if (err) {
        throw err;
    }

    console.log('Папка создана');
});
```

## Удаление директории

### Удаление пустой директории

```js
// синхронно
fs.rmdirSync('folderName');

// асинхронно
fs.rmdir('folderName');
```

### Удаление непустой директории

```js
// удаление сначала файла из папки
fs.unlink('./folderName/fileName.js', () => {
    // после этого удаление папки
    fs.rmdir('folderName', () => {
        //
    });
});
```
