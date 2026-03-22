# Соглашения об именованиях (naming conventions)

## Варианты

| Формат                        | Пример                | Разделитель                    | Комментарий                                             |
| ----------------------------- | --------------------- | ------------------------------ | ------------------------------------------------------- |
| `snake_case`                  | `user_name`           | `_` (подчёркивание)            | Python, Ruby, SQL; переменные и функции                 |
| `camelCase`                   | `userName`            | смена регистра                 | JS/TS, Java; переменные и функции                       |
| `PascalCase`                  | `UserProfile`         | смена регистра                 | классы, типы, React-компоненты                          |
| `kebab-case`                  | `user-profile`        | `-` (дефис)                    | файлы, CSS-классы, URL, npm-пакеты                      |
| `dot.case`                    | `app.server.port`     | `.` (точка)                    | ключи конфигов, иерархические имена                     |
| `SCREAMING_SNAKE_CASE`        | `MAX_RETRIES`         | `_` + верхний регистр          | константы, макросы в C/C++                              |
| `flatcase`                    | `username`            | нет                            | редко для составных имён; хуже читаемость               |
| Train-Case / HTTP-Header-Case | `Content-Type`        | `-` + заглавные слова          | заголовки HTTP и похожие протоколы                      |
| Hungarian notation            | `strName`, `bIsReady` | префикс + camelCase/PascalCase | тип/роль в префиксе; в новом коде реже                  |
| leading underscore            | `_internal`           | `_` в начале имени             | соглашение о «внутреннем» поле; не отдельный case style |
