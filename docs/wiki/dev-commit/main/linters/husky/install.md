# Установка и настройка

::: info
https://github.com/Umayarz18/commit-better-code-with-husky-prettier-eslint-lint-staged/blob/main/package.json
:::Устанавливать Husky нужно в проект с проинициализированным git-репозиторием, т.к. Husky перехватывает хуки Git

## 1. husky-init

npx husky-init

- 1 Устанавливает husky (не нужно отдельно установливать npm i --save-dev lint-staged)
- 2 Добавляет скрипт prepare в package.json

```js
{
    "scripts": {
        "prepare": "husky install"
    },
    "devDependencies": {
        "husky": "^8.0.0"
    }
}
```
- 3 Добавляет в проект директорию .husky
- Внутри директории можно создавать файлы, соответствующие хукам git
- В директории уже есть хук pre-commit, предназначенный для форматирования и проверки кода перед его фиксацией в репозитории

## 2. lint-staged

npm i --save-dev lint-staged

#### 1. Добавится зависимость в package.json

```js
{
    "devDependencies": {
        "lint-staged": "^14.0.1",
    }
}
```

#### 2. Изменить package.json

```json
{
    "lint-staged": {
        "**/*.{js,jsx,ts,tsx}": [
            "npx prettier --write",
            "npx eslint --fix"
        ]
    }
}
```

#### 3. Изменить файл pre-commit

- Добавить скрипт npx lint-staged

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

## 3. Commit

- При коммите, будет запущен скрипт для eslint и prettier
- В случае обнаружения ошибок, коммит не будет применен
