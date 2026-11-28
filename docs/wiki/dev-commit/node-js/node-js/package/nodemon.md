# nodemon

## Информация

- Позволяет увидеть изменения без ручного перезапуска сервера, созданного через http.createServer(): nodemon сам перезапускает его при изменении файлов

## Установка

```bash
npm i --save-dev nodemon
```

## Использование

```json
// package.json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
}
```
