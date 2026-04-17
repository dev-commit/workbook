# Установка

::: info
https://docs.cypress.io/guides/getting-started/installing-cypress.html
:::
npm i --save-dev cypress

## package.json

```js
{
	"scripts": {
		"cypress:open": "cypress open", // запуск тестов
		"cypress:run": "cypress run"    // record screenshots, videos and failures
	},
	"devDependencies": {
		"cypress": "^"
	}
}
```

## Запуск

```bash
npm runcypress:open```

```js
npx cypressopen// запуск тестов
npx cypressrun// record screenshots, videos and failures
```
