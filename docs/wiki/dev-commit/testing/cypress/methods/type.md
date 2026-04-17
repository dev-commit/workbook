# type

```js
cy.get('input')
    .clear()                       // очистить поле ввода
    .type('Hello')                 // добавить текст
    .type('Hello{enter}')          // добавить текст и нажать "enter"
    .should('have.value', 'Hello') // проверить value
    .blur()                        // убрать фокус с элемента
```
