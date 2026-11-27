# Файл .prettierrc.json

- Если в проекте есть файл _.prettierrc.json_, то конфиги будут браться из него

```json
// .prettierrc.json
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

- Если используется npm, то можно установить пакет с конфигами и подключить его в _package.json_

```json
// package.json
{
  "devDependencies": {
    "prettier-config-nick": "^1.0.2"
  },
  "prettier": "prettier-config-nick"
}
```

- Если в проекте нет файла _.prettierrc.json_, то будут браться стандартные конфиги из IDE
