# Установка и настройка

## Информация

::: info

- https://github.com/Umayarz18/commit-better-code-with-husky-prettier-eslint-lint-staged/blob/main/package.json - Пример файла package.json

:::

- Устанавливать Husky нужно в проект с проинициализированным git-репозиторием, т.к. Husky перехватывает хуки Git

::: warning

- Страница описывает husky v8. В husky v9:
  - вместо `npx husky-init` - `npx husky init`
  - скрипт `prepare` - `"husky"` вместо `"husky install"`
  - в файлах хуков не нужны строки `#!/usr/bin/env sh` и `. "$(dirname -- "$0")/_/husky.sh"`: v9 выводит предупреждение, что с v10 они перестанут работать

:::

## 1. husky-init

```bash
npx husky-init
```

- 1 Устанавливает _husky_ (не нужно отдельно устанавливать _npm i --save-dev husky_)
- 2 Добавляет скрипт _prepare_ в _package.json_

```js
// package.json
{
    "scripts": {
        "prepare": "husky install"
    },
    "devDependencies": {
        "husky": "^8.0.0"
    }
}
```

- 3 Добавляет в проект директорию _.husky_
- Внутри директории можно создавать файлы, соответствующие хукам git
- В директории уже есть хук _pre-commit_, предназначенный для форматирования и проверки кода перед его фиксацией в репозитории

## 2. lint-staged

```bash
npm i --save-dev lint-staged
```

### 1. Добавится зависимость в package.json

```js
{
    "devDependencies": {
        "lint-staged": "^14.0.1"
    }
}
```

### 2. Изменить package.json

```json
// package.json
{
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": ["npx prettier --write", "npx eslint --fix"]
  }
}
```

### 3. Изменить файл pre-commit

- Добавить скрипт _npx lint-staged_

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

## 3. Commit

- При коммите будет запущен скрипт для eslint и prettier
- В случае обнаружения ошибок, коммит не будет применен
