# Структура

- Собственные тесты должны находиться в cypress/integration
- Ссылка на тестовый сайт https://example.cypress.io/

```html
<h1>Hello</h1>
<button onclick="alert('Hello')">Кнопка</button>
<input type="text" />
```

```js
/// <reference types="cypress" />

describe('Starter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/index'); // открыть url для теста
        cy.pause();                              // остановить выполнение и продолжить вручную
    });

    it('Starter', () => {
        cy.contains('Hello');// на странице содержится 'Hello'
        cy.get('h1').contains('Hello');      // в h1 содержится 'Hello'
        cy.get('button').click();            // вызов события
        cy.url().should('include', 'index'); // проверка url на вхождение 'index' (объект не должен быть строкой)
        cy.checkTitle('Hello');// вызов собственного метода из './cypress/support/commands.js'
    });

    it('Without Cypress', () => {
		expect(2).to.equal(2);
	});
});
```

```js
// Реализация своего метода

Cypress.Commands.add('checkTitle', (message) => {
    cy.visit('http://localhost:8081/index');
    cy.contains(message);
})
```

```js
cy.children()
cy.and('be.visible')
```
