# json-server

::: info
https://github.com/typicode/json-server
:::
- API мок-сервер
- Открывается на указанном порту, после этого можно отправдять запросы

npm i -g json-server

## Файлы

package.json

```json
{
	"scripts": {
		"mock": "json-server -w db.json -p 4200 -d 450"
	},
}
```

```bash
› w (watch)  # Наблюдение за файлом "db.json"
› p (port)   # Открытие JSON-сервера на заданном 4200 порту
› d (delay)  # Зедежка. Для имитации работы реальных запросов
```db.json

```json
{
    "posts": [
        { "id": 1, "title": "Title1" },
        { "id": 2, "title": "Title2" },
    ],
    "users": [
        { "id": 1, "title": "User1" },
        { "id": 2, "title": "User2" },
    ]
}
```

## Запуск скрипта

1. Запуск скрипта

```bash
npm run mock
```2. Доступные URL (Resources)

```bash
http://localhost:4200/posts
http://localhost:4200/users
```3. Отправка запроса из приложения

```js
fetch('http://localhost:4200/users');
```
