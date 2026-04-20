# cypress-file-upload

## Установка и настройка

```bash
npm i --save-dev cypress cypress-file-upload
```

cypress/support/commands.ts

```js
import "cypress-file-upload";

cy.get('[name="product_image"]').attachFile("new-food-photo.jpg");
```
