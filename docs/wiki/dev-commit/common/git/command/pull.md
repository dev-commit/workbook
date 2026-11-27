# `git pull`

## Информация

::: danger

**`git pull`** - получить изменения из удаленного git-репозитория в локальный репозиторий

:::

## Использование

```bash
git pull origin         # Скачать все ветки с "origin" и замерджить в текущую ветку ее отслеживаемую ветку
git pull origin master  # Замержить ветку master в текущую ветку
git pull origin HEAD    # Замерджить в текущую ветку ветку по умолчанию удаленного репозитория (HEAD на "origin")
```

## Варианты pull

_git pull_ состоит из:

- _git fetch_ - стягивает изменения, но не применяет их
- _git merge_ - применяет изменения в текущую ветку. Мёржим из _origin/develop_ в свой локальный _develop_

### Через merge (по умолчанию)

```bash
git pull origin
# Или
git fetch origin
git merge origin/master
```

### Через rebase

```bash
git pull --rebase origin master
# Или
git fetch origin
git rebase origin/master
```
