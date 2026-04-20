# Информация

## Информация

::: info

- https://pages.github.com/ - GitHub Pages
- https://docs.github.com/en/pages - GitHub Pages Documentation
  :::

- Позволяет деплоить приложения (в том числе React и Next.js). Для Next.js это будет SSG деплой как для обычного статичного сайта

#### Ветка

- По умолчанию GitHub Pages настроен на ветку _gh-pages_
- Ветку можно переключить вручную:
- <v-breadcrumbs :items="['Settings', 'Pages', 'Branch']" />

#### Названия

Если название репозитория совпадает с названием акканута "account-name" - это будет корневой репозиторий

- https://github.com/account-name ➡️ https://account-name.github.io/

Если репозиторий не корневой то через "/" добавится название репозитория:

- https://github.com/project-name ➡️ https://account-name.github.io/project-name
