# Squash Commit

- Хорошая практика сквошить коммиты в один, чтобы на задачку был один коммит
- Вообще засквошить можно когда угодно, потом форс-пушем долить, но после того как проверен PR этого уже делать не нужно будет, все правки после ревью доливаются отдельными коммитами

```bash
git checkoutdevelop# перейти в ветку develop
git fetch origin       # подтянуть последние изменени для develop
git pull               # взять последние изменени для develop
git checkoutfeature# перейти в ветку feature
```

```bash
# первый вариант (первый этап делать не нужно)
git reset --soft origin/develop# берётся ветка из удаленного репозитория

# второй вариант
git merge-base dev HEAD  # номер коммита к которому нужно откатиться
git resetHashCommit# откатывает всё до момента откалывания от develop
```

```bash
git add .                     # индексация изменений
git commit -m 'Message'       # коммит
git push origin HEAD          # push
git push --force origin HEAD  # push force (скорее всего именно force)
```
