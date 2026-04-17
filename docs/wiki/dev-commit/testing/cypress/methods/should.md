# should

## Варианты

### Elements

```js
cy.get('div')
    .should('have.attr', 'title', 'Hello')       // атрибут title="Hello"
    .should('have.attr', 'disabled')             // атрибут "disabled"
    .should('have.not.attr', 'disabled')         // нет атрибута "disabled"
    .should('have.length', 3)                    // 3 дочерних элемента / контент длиной 3 символа 
    .should('have.css', 'color', 'rgb(0, 0, 0)') // CSS style="color: rgb(0, 0, 0)"
    .should('have.class', 'active')              // есть class "active"
    .should('have.id', 'user')                   // есть id "user"
```

```js
cy.get('div')
    .should('contain', 'Hello')   // содержит фразу (частичное соврадение)
    .should('not.contain', 'Map') // не содержит фразу (частичное соврадение)
```

```js
cy.get('div')
    .should('be.visible')     // элемент виден
    .should('not.be.visible') // элемент не виден
    .should('not.exist')      // элемент не существует
    .should('be.empty')       // элемент должен быть пустым
```

### Inputs

```js
cy.get('input')
    .should('have.value', 'Hello')     // есть атрибут value="Hello"
    .should('not.have.value', 'Hello') // нет атрибута value="Hello"

cy.get('select')
    .should('have.value', 'Hello')    // есть атрибут value="Hello"
    .should('contain', 'Hello')       // есть значение "Hello"

cy.get('checkbox')
    .should('be.disabled')

cy.get('input')
    .click()
    .should('have.focus') // аналогично 'be.focused'
    .should('be.focused') // аналогично 'have.focus'
```

### Url's

- Проверка url на вхождение 'index' (объект не должен быть строкой)

```js
cy.url().should('include', '/index/');
```

## and- Multiple Assertions

```js
cy.get('div')
    .should('be.visible')
    .and('have.class', 'active')
```

## Callback Function

::: info
https://docs.cypress.io/api/commands/should#Function
:::

```js
cy.url().should('include', 'index');
cy.location('search').should('contain', 'index');
```

```js
cy.get('p').should(($p) => {
    // should have found 3 elements
    expect($p).to.have.length(3)

    // make sure the first contains some text content
    expect($p.first()).to.contain('Hello World')
})
```
