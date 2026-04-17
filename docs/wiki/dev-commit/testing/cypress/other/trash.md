# Свалка

## Общее

```js
cy.contains('Create Body Part').should('have.attr', 'href', '/body-parts/create');
```

```js
cy.interceptSupplementsSearch().as('supplementsSearch');

cy.wait('@supplementsSearch').then(i => {
	assert.include(i.request.url, 'name=name');
});

Cypress.Commands.add('interceptSupplementsSearch', () => {
  return cy.intercept('GET', Cypress.env('base_url') + '/supplements*', {
    statusCode: 200,
    fixture: 'supplements/supplements_search.json',
  });
});
```

## Данные

::: info
https://docs.cypress.io/api/commands/intercept#Matching-with-RouteMatcher
:::

### Передача query-параметров

```js
cy.intercept({
  pathname: '/search',
  query: {
    q: 'some terms',
  },
})
```

::: info
https://docs.cypress.io/api/commands/intercept#Usage
:::

```js
cy.intercept('/users/**')
cy.intercept('GET', '/users*')
```
- Помогает в случаях, когда запрос уходит например на /api/organizations/search?query= , но тебе не нужно учитывать этот query=
- /users* - означает, что после * может быть всё, что угодно

## Input

```js
cy.get('select[name="sex"]')
  .should('have.value', 'male')
  .select('female')
  .should('have.value', 'female');

cy.get('input[name="first_name"]').should('have.value', 'Alex');
```

## Конструкции

```js
cy.get('selector').then($element => {
  if ($element.is(':visible')) {
    // checks
  }
});

cy.get('button')
  .should('have.id', 'new-user')
  .then(($button) => {
    // $button is yielded
  })
```

## TypeScript

- Если есть index.ts, то не нужно создавать index.d.ts
- Будет ошибка
- В cypress\support\index.ts

## Fixture

```js
// Команда
Cypress.Commands.add('interceptRecipeByTags', (sort) => {
  return cy.intercept('GET', `http://localhost:8080/api?sort_by=${sort}`, {
      statusCode: 200,
      fixture: 'recipe-by-tags.json',
    },
  );
});

// Вызов
cy.interceptRecipeByTags('snack').as('snackTags');
```

```js
Cypress.Commands.add('interceptPutRecipe', () => {
  return cy.intercept('PUT', 'http://localhost:8080/api', {
    fixture: '5-veg-omelette.json',
  });
});

cy.interceptPutRecipe()
```

```js
Cypress.Commands.add('interceptSearchRecipe', () => {
  return cy.intercept(
    {
      method: 'POST',
      url: 'http://localhost:8080/api',
    },
    { fixture: 'search.json' },
  );
});
```

```js
Cypress.Commands.add('interceptSingleRecipe', () => {
  return cy.intercept('/api/recipes/610bc14f54fb3e2bc22c4ec5*', {
    fixture: 'meal-explorer/recipe.json',
  });
});

Cypress.Commands.add('interceptDeleteRecipe', () => {
  return cy.intercept('DELETE', '/api/recipes/*');
});

Cypress.Commands.add('interceptBulkImportRecipe', () => {
  return cy.intercept('POST', '/api/recipes/bulk');
});
```

## Перехватить запрос к API и проверить значение

cypress\support\interceptors.ts

```js
Cypress.Commands.add('interceptUsersSearch', () => {
  return cy.intercept('POST', '/user_search', {
    statusCode: 200,
    fixture: 'user_search.json',
  });
});
```cypress\integration\Users\clients.spec.ts

```js
cy.interceptUsersSearch().as('userSearch');

cy.wait('@userSearch').then(interception => {
  assert.equal(interception.request.body.per_page, 50);
});
```

### Виды записей

```js
Cypress.Commands.add('intercept1', () => {
  return cy.intercept(
    {
      method: 'GET',
      url: 'https://api.dev.upbodyapp.com/api/user/',
    },
    {
      fixture: 'user.json',
    },
  );
});
```

```js
Cypress.Commands.add('intercept2', () => {
  return cy.intercept('GET', 'https://api.dev.upbodyapp.com/api/user/', {
    fixture: 'user.json',
  });
});
```

```js
Cypress.Commands.add('intercept2', () => {
  return cy.intercept('GET', 'https://api.dev.upbodyapp.com/api/user/', {
    fixture: 'user.json',
  });
});
```

## Указание query-параметров в GET

- Если будет несовпадение query-параметров (ключа или значения), то данные не перехватятся

```js
Cypress.Commands.add('interceptor', () => {
  return cy.intercept('GET', 'https://dev.com/params?role=user&active=true', {
    fixture: 'data.json',
  });
});
```
- /params?role=user&active=true
- /params?role=*&active=*
- /params?*
