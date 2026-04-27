# Команды

## Основные

- `npm init` - Инициализация проекта и создание package.json (если еще нет проекта)
- `npm login` - Вход в аккаунт. Откроется браузер для авторизации
- `npm whoami` - Проверить текущий логин (не обязательно). Покажет название аккаунта
- `npm publish` - Публикация проекта. Откроется браузер для авторизации
- `npm unpublish <package-name> --force` - Удаление пакета (доступно в течении 72 часов)

## Deprecated

- `npm deprecate <package-name> "Deprecated: use <new-package> instead"` - Пометить пакет deprecated
- `npm deprecate <package-name> ""` - Убрать deprecated у пакета
- `npm view <package-name> deprecated` - Проверить deprecated пакета
