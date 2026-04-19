Добавление новых файлов из Working Directory в систему контроля версий (в индекс Staging Area для последующего коммита). Индексирование файлов. Сборка слепка коммита. Получить изменения из удаленного git-репозитория в локальный репозиторий

```bash
git pull origin         # замерджить все ветки с удаленного репозитория
git pull originmaster# замержить ветку master
git pull origin HEAD    # замерджить текущую ветку
```

## Варианты pull

- git fetch - стягивает изменения, но не применят их
- git merge - применяет изменения в текущую ветку. Мёржим из origin/develop в свой локальный develop

### Через merge (по умолчанию)

```bash
git pull origin
# или
git fetch origin
git merge origin/master
```

### Через rebase

```bash
git pull --rebase origin master
# или
git fetch origin
git rebase origin/master
```
