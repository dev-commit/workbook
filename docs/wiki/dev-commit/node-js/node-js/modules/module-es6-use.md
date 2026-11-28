# ES6 Modules (Node.js, Browser)

## Использование в браузере

<v-sandbox needcheck url="https://codesandbox.io/s/oj2rwm9v35" codesandbox />

```html
<!-- Подключение модуля из внешнего файла -->
<script type="module" src="src/primary.js"></script>
```

### Использование ES6 модулей с JavaScript (из браузера)

- Для работы модулей, их необходимо запускать на сервере
- Указывать `type="module"` в скрипте

## Использование с Node.js

- Node.js будет рассматривать файлы `.cjs` как модули CommonJS, а файлы `.mjs` — как модули ECMAScript
- Если указан файл `.js`, то будет обработан как модульная система по умолчанию - CommonJS

### Использование ES6 модулей с Node.js

- _Вариант 1_: Изменить файлы с `.js` -> `.mjs`
- _Вариант 2_: Добавить файл package.json и прописать `{ "type": "module" }`
