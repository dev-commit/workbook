# Сниппеты

## Создание

<v-breadcrumbs :items="['File', 'Preferences', 'User Snippets', 'New Global Snippets file...']" />

- Ввести название

```js
{
  "testName": {
    "scope": "javascript",
    "prefix": "log",
    "body": [
      "console.log('')",
    ]
  }
}
```

## Спецсимволы

- `\t` - табуляция

## Параметры

- `scope` - ограничение для файлов (по умолчанию для всех)
- `prefix` - вызов из файла
- `body` - тело сниппета
- `description` - описание сниппета
