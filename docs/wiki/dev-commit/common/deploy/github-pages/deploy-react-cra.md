# Деплой React + Webpack (Create React App)

## Информация

- Если для проекта используется Create React App, то обязательно нужно указывать `homepage` если проект находится не в корне (не по адресу https://account-name.github.io/). В данном случае проект находится по адресу https://account-name.github.io/project-name/
- При сборке, к каждому пути будет добавлен `project-name`. Если не указать, то в пути будет `/`, что будет искать файл в https://account-name.github.io/, а не в https://account-name.github.io/project-name/
- После build, в консоле будет сообщение: "The project was built assuming it is hosted at /project-name/. You can control this with the homepage field in your package.json"

## Файлы

> package.json

```js
{
  "homepage": "https://account-name.github.io/project-name/",
  "scripts": {
    "build": "react-scripts build",
    "gh-pages": "gh-pages -d build",
    "deploy": "npm run build && npm run gh-pages"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```
