# Файл package.json

## Скрипты

```bash
{
  "scripts": {
    # Вывод в консоль
    "hello": "echo \"hi\"",
    # Вызов js-скрипта
    "start": "node index.js",
    # Вызов npm-модуля http-server
    "server": "node ./node_modules/http-server/bin/http-server",
    # Вызов npm-модуля http-server (аналогично)
    "server": "http-server",
    # Watcher
    "webpack": "webpack -w"
  }
}
```

## Запуск команд

```bash
node           # Выполнение кода в консоли
node index.js  # Выполнение файла index.js
npm start      # Выполнение скрипта из package.json
npm server     # Выполнение скрипта из package.json (аналогично)
npm run server # Выполнение скрипта из package.json (аналогично)
```

## Виды зависимостей

::: tip Определения

- **devDependencies** - пакеты, которые нужны для разработки
- **dependencies** - пакеты, от которых проект зависит непосредственно (библиотеки)
  :::

- devDependencies и dependencies - устанавливаются в node_modules
- При вызове `npm install`, npm установит пакеты указанные в dependencies, но не в devDependencies
- Если сделать `npm install` внутри папки, в которой есть package.json, то установятся и те, и другие
