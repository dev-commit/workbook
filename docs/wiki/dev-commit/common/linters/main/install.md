# Установка и настройка

## Информация

- Для React-приложения

## ESLint

```bash
npm i --save-dev eslint eslint-config-react-app eslint-plugin-prettier
```

::: warning

- Проблема при установке _eslint-config-react-app_
- Плагин пока не совместим с новой версией eslint 9. Нужно использовать версию 8, н-р _"eslint": "^8.57.0"_

:::

::: details Детали

- Можно установить с флагом _"--force"_

```plaintext
ERESOLVE unable to resolve dependency tree
Found: eslint@9.10.0
Could not resolve dependency:
peer eslint@"^8.0.0" from eslint-config-react-app@7.0.1
```

:::

## Prettier

```bash
npm i --save-dev prettier prettier-config-nick
```

::: warning

- _prettier-config-nick_ deprecated
- Вместо него писать конфиг в файле .prettierrc.json

:::

```js
// package.json
{
  "scripts": {
    "format": "prettier --write .",
    "lint": "eslint .",
    "lint:file": "eslint src src/components/App.jsx"
  },
  "devDependencies": {
    "eslint": "^8.49.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-plugin-prettier": "^5.0.0",

    "prettier": "^3.0.3",
    "prettier-config-nick": "^1.0.8"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ],
    "plugins": [
      "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-no-target-blank": "off"
    }
  },
  "prettier": "prettier-config-nick"
}
```
