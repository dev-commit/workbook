# mochawesome

Сформировать HTML-отчет для тестов на Cypress

## Установка и настройка

npm i --save-dev cypress mochawesome mochawesome-merge mochawesome-report-generator

## package.json

```js
"scripts": {
    "cy:report": "mochawesome-merge cypress/reports/integration/*.json > cypress/reports/mochareports/report.json && marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports"
}
```

### Варианты скриптов

```js
// Разбитие по двум скриптам
"scripts": {
    "cy:report-generate": "mochawesome-merge cypress/reports/integration/*.json > cypress/reports/mochareports/report.json",
    "cy:report-merge": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/integration"
}
```

```js
// Один большой скрипт из проекта
"scrips": {
    "cy:report": "mochawesome-merge reports/integration/*.json > reports/integration/mochawesome.json && marge reports/integration/mochawesome.json -f report -o reports/integration"
}
```

## cypress.json

```js
{
    "baseUrl": "http://localhost:4242/cards.credit.reissue",
    "video": true,
    "blacklistHosts": "www.google-analytics.com",
    "projectId": "vo3e1i",
    "reporter": "mochawesome",
    "reporterOptions": {
        "reportDir": "cypress/reports/integration",
        "overwrite": false,
        "html": true,
        "json": true
    }
}
```
- Для последней версии Cypress, ключ blacklistHosts нужно переименовать в blockHosts

## Последовательность

- npx cypress run
- Создать директорию ./cypress/reports/mochareports если ее нет
- npm run cy:report

## Библиотеки

### 1. mochawesome

- 
- Mochawesome - настраиваемый репортер для использования со средой тестирования Javascript, mocha. Работает вместе с mochawesome-report-generator для создания автономного отчета HTML / CSS для визуализации ваших тестовых прогонов

### 2. mochawesome-report-generator

- 
- Marge (mochawesome-report-generator) является аналогом mochawesome, настраиваемого репортера для использования со средой тестирования Javascript, mocha. Мардж берет выходные данные JSON от mochawesome и генерирует полноценный отчет HTML / CSS, который помогает визуализировать ваши наборы тестов

### 3. mochawesome-merge

- 
- Объедините несколько отчетов Mochawesome JSON

## Дополнительные библиотеки (не устанавливал)

npm i --save-dev mocha cypress-multi-reporters
