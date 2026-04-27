# Информация

## Алгоритм обновления пакета

1. Обновился кода пакета
2. Изменить `"version"` в package.json
3. Опубликовать через `npm publish`
4. Подключить к приложению через `npm i PackageName`

## Варианты названия пакета

1. `@scope/package-name`

- @scope должен совпадать с Username на NPM

2. `package-name`

- Без @scope, нет привязки к Username
