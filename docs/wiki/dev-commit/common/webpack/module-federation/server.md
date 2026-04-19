# Сервер

## concurrentlywsrun

```bash
yarn install
yarn start
```

```js
{
    "name": "starter",
    "private": true,
    "scripts": {
        "start": "concurrently \"wsrun --parallel start\" \"wsrun --parallel serve\"",
        "build": "yarn workspaces run build",
        "serve": "wsrun --parallel serve"
    },
    "workspaces": [
        "packages/*"
    ],
    "devDependencies": {
        "concurrently": "^5.1.0",
        "wsrun": "^5.2.0"
    }
}
```

## lerna

```bash
yarn install
yarn serve
```

```js
{
    "name": "starter",
    "private": true,
    "scripts": {
        "start": "lerna run --parallel start",
        "build": "lerna run build",
        "serve": "lerna run --parallel serve",
        "clean": "lerna run --parallel clean"
    },
    "workspaces": [
        "packages/*"
    ],
    "devDependencies": {
        "lerna": "3.22.1"
    }
}
```

```js
{
    "version": "0.0.0",
    "npmClient": "yarn",
    "packages": [
        "packages/*"
    ],
    "useWorkspaces": true
}
```

---
- При установке через npm, нужно выполнить "npm i" в каждом дочернем модуле
- Параллельно нужно запустить скрипты "start" и "serve"

```bash
npm i          # в корневом модуле
npm i          # в каждом дочернем модуле
npm run start  # запуск приложения
npm run serve  # запуск сервера
```

```js
{
    ...
    "npmClient": "npm",
    ...
}
```
