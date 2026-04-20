# cypress-mochawesome-reporter

::: info
https://github.com/LironEr/cypress-mochawesome-reporter
:::

## Включает пакеты

- mochawesome
- mochawesome-merge
- mochawesome-report-generator

## Установка и настройка

```bash
npm i --save-dev cypress cypress-mochawesome-reporter
```

cypress.json

````js
{
  "reporter": "cypress-mochawesome-reporter"
}
```cypress/support/index.js

```js
import 'cypress-mochawesome-reporter/register';
```package.json

```js
"scripts": {
	// базовый скрипт
	"cypress:report": "generate-mochawesome-report",
	// скрипт с указанием output
	"cy:report": "generate-mochawesome-report --output cypress/reports/accessibility",
	// скрипт на очистку
    "cy:report:remove": "rm -rf cypress/screenshots cypress/results cypress/reports/accessibility"
}
````

## Файлы

- Фалы отчета создаются в "./cypress/results/json"
