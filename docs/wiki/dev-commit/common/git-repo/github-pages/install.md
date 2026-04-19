# Установка и настройка

npm i --save-dev gh-pages

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
