# `git push`

## Информация

::: danger

**`git push`** - отправка изменений на удаленный git-репозиторий

:::

## Использование

```bash
git push origin HEAD                                # Запушить текущую ветку, не вводя целиком ее название
git push --force origin HEAD                        # Запушить текущую ветку и переписать историю на сервере
git push origin +feature                            # Аналогично использованию "--force"

git push origin                                     # Запушить текущую ветку на удаленный репозиторий (до Git 2.0 - все совпадающие ветки)
git push origin master                              # Аналогично предыдущему, но делается пуш ветки master

git push --set-upstream origin master               # Отправка изменений на удаленный git-репозиторий и указание upstream-ветки
git push -u origin master                           # То же самое (-u - сокращение --set-upstream)
git push -f                                         # Залить на сервер измененные коммиты
git push https://github.com/Account/Repo.git master # Указание репозитория

git push origin --delete feature                    # Удаление ветки из удаленного репозитория
```

## Опции

- `-f` `--force` - используется для перезаписи. Позволяет обновить удаленную ссылку, которая не является предком локальной ссылки

## Merge и Rebase

```bash
git pull origin master           # Работает по merge
git pull --rebase origin master  # Работает по rebase
```
