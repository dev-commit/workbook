# cypress-axe

Доступность
::: info

- https://github.com/avanslaars/cypress-axe
  :::

## Установка и настройка

```bash
npm i --save-dev cypress axe-core cypress-axe
```

./cypress/support/index.js

```js
import "cypress-axe";
```

## Пример

```html
<div id="root" role="main">
  <h1>Hello</h1>
  <div class="container">
    <h2>Container</h2>
  </div>
</div>
```

```js
/// <reference types="cypress" />

const A11YOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "section508"],
  },
};

describe("Starter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/index");
    // 1. inject
    cy.injectAxe();

    // 2. configure
    // cy.configureAxe({
    //     reporter: 'v2',
    //     iframes: true
    // })
  });

  it("Starter", function () {
    cy.contains("Hello");

    // 3. check all
    cy.checkA11y();
    // 4. check from element
    cy.checkA11y("div.container");
    // 5. check from element and options
    cy.checkA11y("h1", A11YOptions);
  });
});
```

<!-- <img src="../@img/cypress-axe-1.png" width="700px"/> -->

## Cypress-Axe Commands

- cy.injectAxe() - inject the axe-core library. Должен идти после загрузки страницы
- cy.checkA11y(context, options) - можно вызвать только после cy.injectAxe(). Команда может вызываться в разных местах сценария для проверки или выявления нарушений доступности
- cy.configureAxe() - используется для определения пользовательских правил или для изменения существующих проверок и правил. С его помощью можно изменить стандартную отчетность, а также языковой стандарт для выходных сообщений

### 1. checkA11y

```js
// exclude a specific button
cy.checkA11y({
  exclude: [".article-action"],
});
```

```js
cy.checkA11y(
  {
    exclude: [".article-action"],
  },
  {
    rules: {
      "empty-heading": { enabled: false },
    },
  },
);
```

```js
cy.checkA11y(".example-class", {
  runOnly: {
    type: "tag",
    values: ["wcag2a"],
  },
});
```

```js
cy.checkA11y(null, {
  includedImpacts: ["critical"],
});
```

### 2. configureAxe

```js
cy.configureAxe({
  branding: {
    brand: String,
    application: String,
  },
  reporter: "option",
  checks: [Object],
  rules: [Object],
  locale: Object,
});
```

```js
cy.configureAxe({
  reporter: "v2",
  iframes: true,
});
```

## Кастомизация вывода ошибок доступности в консоль

- Chrome Dev Tools -> Console
-
-

<!-- <img src="../@img/cypress-axe-2.png" width="750px"/> -->

./cypress/plugins/index.js

```js
/// <reference types="cypress" />

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    },
  });
};
```

### Минимальный вариант использования

./cypress/integration/starter.spec.js

```js
it("Starter", function () {
  cy.task("log", "This will be output to the terminal");
});
```

### Кастомизация вывода ошибки

```js
/// <reference types="cypress" />

// Define at the top of the spec file or just import it
function terminalLog(violations) {
  const dataLog = `
        ${violations.length} accessibility violation${violations.length === 1 ? "" : "s"}
        ${violations.length === 1 ? "was" : "were"} detected`;

  cy.task("log", dataLog);

  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  cy.task("table", violationData);
}

describe("Starter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/index");
    cy.injectAxe();
  });

  // Then in your test...
  it("Logs violations to the terminal", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("Starter", function () {
    cy.contains("Hello");
    cy.checkA11y();
  });
});
```

## Стандарты Accessibility

::: info
https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#axe-core-tags
:::

### Правила сегмента 508 и WCAG являются основными стандартами, используемыми в мире

- Раздел 508 - это стандарт доступности, установленный правительством США, чтобы гарантировать, что все сайты правительства США могут быть доступны людям с ограниченными возможностями
- Рекомендации по доступности веб-контента или WCAG характеризуют нормы открытости для людей, ассоциаций и правительств во всем мире. WCAG 2.0 был признан стандартом Международной организации по стандартизации (ISO), и многие страны приняли WCAG 2.0 в качестве своего законного стандарта открытости Интернета. (WCAG 2.1 уже доступен)

### cypress-axe или axe-core поддерживает стандарты доступности

- WCAG 2.1
- WCAG 2.0
- Section 508

### У Cypress есть собственные стандарты

- best-practices
- experimental
- cat

```js
// стандарты, которые используем:
// WCAG 2.0 Level A, WCAG 2.0 Level AA, Section-508

const A11YOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "section508"],
  },
};

it("Check", () => {
  // Test the page at initial load
  cy.checkA11y(null, A11YOptions);
});
```

- Поскольку мы передали A11YOptions методу cy.checkA11y (), он проверяет соответствие заданным стандартам. Если параметры не переданы, он будет сверяться со всеми доступными стандартами, включая: best-practices, cat and experimental

```js
// пример с заданием контейнера и списка опций
const options = {
  runOnly: {
    type: "tag",
    values: ["wcag2a"],
  },
};
cy.checkA11y(".cypress-wrapper", options);
```

## Шаблон

```js
const A11YOptions = {
  runOnly: {
    type: "tag",
    values: [
      "wcag2a",
      "wcag2aa",
      "wcag21a",
      "wcag21aa",
      "wcag***",
      "ACT",
      "section508",
      // 'best-practice',
      // 'section508.*.*',
      // 'experimental',
      // 'cat.*',
    ],
  },
};
```

```js
const A11YOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a"],
  },
};

describe("...", () => {
  before(() => {
    // cy.visitWorkflowPage('...')
    cy.injectAxe();
  });

  // it('Визуальный регресс', () => {
  //     cy.matchPageSnapshots()
  // })

  it("Проверка доступности", () => {
    cy.checkA11y(null, A11YOptions);
  });
});
```

```js
describe("", () => {
  before(() => {
    // cy.visitWorkflowPage('reissue-process/reissue')
    cy.injectAxe();
  });

  it("Проверка доступности", () => {
    cy.checkA11y('[class$="src-grid-style--grid--1fbB"]');
  });
});
```
