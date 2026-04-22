# concurrently

::: info

- https://github.com/open-cli-tools/concurrently
  :::
- Позволяет запускать параллельно несолько скриптов
- Это может быть несколько локальных серверов, запущенных параллельно

## Установка

```bash
npm i --save-dev concurrently
```

## Файлы

> package.json

- В примере параллельно запускается толькольный сервер для Next.js и для json-server

```js
{
  "scripts": {
    "dev": "next dev",
    "mock": "json-server -w db.json -p 4200 -d 450",
    "serve": "concurrently \"npm run dev\" \"npm run mock\""
  },
  "dependencies": {
    "next": "12.0.7",
  },
  "devDependencies": {
    "concurrently": "^6.4.0",
  }
}
```
