# Squash Commit

## Информация

- Хорошая практика сквошить коммиты в один, чтобы на задачку был один коммит
- Вообще засквошить можно когда угодно, потом форс-пушем долить, но после того как проверен PR этого уже делать не нужно будет, все правки после ревью доливаются отдельными коммитами

## Алгоритм

```bash
# Шаг 1
git checkout develop   # Перейти в ветку develop
git fetch origin       # Подтянуть последние изменения для develop
git pull               # Взять последние изменения для develop
git checkout feature   # Перейти в ветку feature
```

```bash
# Шаг 2
# Первый вариант (первый этап делать не нужно)
# Если origin/develop ушла вперёд от точки ответвления feature, коммит отменит эти изменения develop
git reset --soft origin/develop # Берётся ветка из удаленного репозитория

# Второй вариант
git merge-base develop HEAD # Номер коммита к которому нужно откатиться
git reset HashCommit        # Откатывает всё до момента откалывания от develop
```

```bash
# Шаг 3
git add .                     # Индексация изменений
git commit -m 'Message'       # Коммит
git push origin HEAD          # push
git push --force origin HEAD  # push force (скорее всего именно force)
```
