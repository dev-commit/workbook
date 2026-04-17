# Структура модуля

- В основе модуля лежит функция

```js
(function(exports, require, module, __dirname, __filename) {
    // Code on Node.js
})
```

### Системные переменные

- exports - объект для экспорта
- require - функция для импорта
- module
- __dirname - путь до текущей директории
- __filename - путь до текущего файла
