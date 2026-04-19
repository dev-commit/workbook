# Linter OnSave

::: info
https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting
:::

## Настройка

<v-breadcrumbs :items="['File', 'Preferences', 'Settings', 'Поиск (найти `Code Actions On Save`)']" />

## Конфигурация

> .vscode/settings.json

<v-two :title="['Было', 'Стало']">
  <template #first>

```json
{
  "editor.codeActionsOnSave": null
}
```

  </template>
  <template #last>

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```

  </template>
</v-two>
