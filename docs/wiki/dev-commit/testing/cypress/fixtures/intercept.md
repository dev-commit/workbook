# intercept

    Перехват и подмена сетевых запросов
    
объект
объект
::: details cy.intercept()

```js
cy.intercept(
	{
        method?: S
        url?: S
        path?: S
        pathname?: S
        query?: DictMatcher<S>
        auth?: { username: S, password: S }
        headers?: DictMatcher<S>
        hostname?: S
        https?: boolean
        middleware?: boolean
        port?: NumberMatcher
        times?: number
    },
	{
        fixture?: Fixture
        body?: Body
        headers?: { [key: string]: string }
        statusCode?: number // default 200
        forceNetworkError?: boolean
        throttleKbps?: number
        delay?: number
    }
)
```

:::
- Посмотреть описание аргументов можно по пути
- node_modules\cypress\types\net-stubbing.ts

## Использование

./cypress/fixtures/data.json

```js
{
    "name": "Tony",
    "age": 25
}
```./cypress/support/utils.ts

```js
Cypress.Commands.add('interceptData', () => {
    return cy.intercept('GET', 'http://localhost:8080/api', {
        statusCode: 200,
        fixture: 'data.json',
    });
});
```./cypress/integration/test.spec.ts

```js
describe('user create page', () => {
    beforeEach(() => {
        cy.interceptData().as('data');
    });

    it('check create button', () => {
        //
    });
});
```
