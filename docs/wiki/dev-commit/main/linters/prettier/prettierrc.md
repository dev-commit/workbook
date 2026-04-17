# Файл .prettierrc.json

- Если в проекте есть файл .prettierrc.json, то конфиги будут браться из него

```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
}
```
- Если используется npm, то можно устновить пакет с конфигами и подключить его в package.json

```json
{
    "devDependencies": {
        "prettier-config-nick": "^1.0.2",
    },
    "prettier": "prettier-config-nick"
}
```

- Если в проекте нет файла .prettierrc.json, то будут браться стандартные конфиги из IDE
