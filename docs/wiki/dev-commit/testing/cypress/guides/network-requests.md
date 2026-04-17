# Network Requests

::: info
https://docs.cypress.io/guides/guides/network-requests.html
:::

## Заглушка ответа

- Cypress позволяет заглушить ответ и контролировать тело, статус, заголовки или даже задержку
- Команды cy.server и cy.route работают вместе, чтобы контролировать поведение ответов в опциях команды

```js
cy.server()  // включает заглушки
cy.fixture() // загрузка фиксированного набора данных, расположенного в файле
cy.route()   // предоставляет таблицу маршрутизации, поэтому Cypress понимает, какой ответ должен идти с каким запросом
```
- Cypress автоматически указывает, когда в вашем приложении происходит запрос XHR
- Они всегда регистрируются в журнале команд (независимо от того, является ли он заглушенным)
- Cypress указывает, когда запрос начался и когда он закончен

## Использованиеcy.serverиcy.route

```js
cy.server()
cy.route({
    method: 'GET',      // Route all GET requests
    url: '/users/*',    // that have a URL that matches '/users/*'
    response: []        // and force the response to be: []
})
```

## Использованиеcy.fixture

- Файл ./cypress/fixtures/activities.json

```js
cy.server()
cy.fixture('activities.json').as('activitiesJSON')
cy.route('GET', 'activities/*', '@activitiesJSON')

// GET             - метод
// activities/*    - часть URL
// @activitiesJSON - алиас fixture
```
