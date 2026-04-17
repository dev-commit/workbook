# Linter OnSave

::: info
https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting
:::

### Настройка

### Конфигурация

.vscode/settings.jsonБыло

```json
{
  "editor.codeActionsOnSave": null
}
```

Стало

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
}
```
