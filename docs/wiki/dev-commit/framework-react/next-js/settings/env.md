# ENV-переменные

::: info
https://nextjs.org/docs/app/api-reference/next-config-js/env
:::

## Конфиг next.config.js

next.config.js

```js
// Объявление
module.exports = {
	env: {
		API_URL: 'https://jsonplaceholder.typicode.com/'
	}
}
```

App.jsx

```js
// Использование
const App = () => {
	const response = await fetch(process.env.API_URL+'todos/1');
}
```

## Библиотека dotenv

npm i --save dotenv
::: info
https://github.com/motdotla/dotenv
:::
- Библиотека позволяет работать с env-переменными через .env-файл

next.config.js

```js
require('dotenv').config()

module.exports = {
	env: {
		API_URL: process.env.API_URL
	}
}
```

.env

```js
API_URL=https://jsonplaceholder.typicode.com/
```
