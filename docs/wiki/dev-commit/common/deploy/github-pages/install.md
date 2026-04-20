# Установка и настройка

## Установка

```bash
npm i --save-dev gh-pages
```

## Настройка

> package.json

```js
{
  "devDependencies": {
    "gh-pages": "^6.1.1"
  },
  "scripts": {
    "gh-pages": "gh-pages -d build",
    "deploy": "npm run build && npm run gh-pages"
  }
}
```
