Отправка изменений на удаленный git-репозиторий

```bash
git push origin HEAD                                # запушить текущую ветку, не вводя целиком ее название
git push --force origin HEAD                        # запушить текущую ветку и переписать историю на сервере
git push origin +feature# аналогично использованию "--force"

git push origin                                     # замерджить все ветки локального репозитория на удаленный репозиторий
git push originmaster# аналогично предыдущему, но делается пуш только ветки master

git push --set-upstream originmaster# отправка изменений на удаленный git-репозиторий
git push -u originmaster# указание ветки
git push -f                                         # залить на сервер измененные коммиты
git pushhttps://github.com/Account/Repo.gitmaster# указание репозитория

git push origin --deletefeature# удаление ветки из удаленного репозитория
```

## Опции

- -f --force используется для перезаписи. позволяет обновить удаленную ссылку, которая не является предком локальной ссылки

## Merge и Rebase

```bash
git pull originmaster# работает по merge
git pull --rebase originmaster# работает по rebase
```
