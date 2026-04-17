# Общие методы

### force

- Если элемент находится под другими элементами

```js
cy.get('div').click({ force: true });
cy.get('div', { force: true }).blur();
```

### find()

::: info
https://docs.cypress.io/api/commands/find
:::
- Получить дочерние элементы DOM определенного селектора

```js
// получит все элементы <tr>
cy.get('table').find('tbody')
```

### eq

::: info
https://docs.cypress.io/api/commands/eq
:::
- Получить элемент DOM по определенному индексу в массиве элементов

```js
// Первый <tr> таблицы должен содержать "Tony"
cy.get('table tbody tr').eq(0).contains('Tony')
```

### first()

```js
// Yield first link in nav
cy.get('nav a').first()
```

### cy.go()

::: info
https://docs.cypress.io/api/commands/go
:::

```js
cy.go('back')
```

### cy.contains()

- Найти контент на странице по тексту

```js
cy.contains('button', 'Emergency Contact').click()
```

### cy.get().within

::: info
https://docs.cypress.io/api/commands/within
:::
- Охватывает все последующие команды cy внутри этого элемента. Полезно при работе с определенной группой элементов, например &lt;form&gt;

```js
cy.get('.container').within(() => {
  cy.get('.item').should('contain', 'Hello');
});
```

```js
cy.location('search').should('contain', 'query=fish');
cy.get('.chip').children('.chip__btn').click();
cy.log('Choose tag');
```
