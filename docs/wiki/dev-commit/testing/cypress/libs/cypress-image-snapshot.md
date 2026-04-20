# cypress-image-snapshot

Скриншоты и видео

- Скриншоты и видео
- Прогнать тесты и получить скриншоты и видео

::: info

- https://github.com/jaredpalmer/cypress-image-snapshot
  :::

## Установка и настройка

```bash
npm i --save-dev cypress cypress-image-snapshot
```

cypress.json

```js
{
    "baseUrl": "http://localhost:4242/cards.credit.reissue",
    "video": true,
    "blacklistHosts": "www.google-analytics.com",
    "projectId": "vo3e1i"
}
```

- Для последней версии Cypress, ключ blacklistHosts нужно переименовать в blockHosts

````bash
npx cypress open
    npx cypress run
```./cypress/snapshots./cypress/videos

### Доступные браузеры в cypress@5.5.0

- Chrome 86
- Firefox 82
- Edge 86
- Electron 85
````
