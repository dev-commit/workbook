# `git commit`

## Информация

::: danger

**`git commit`** - создание слепка (snapshot) директории и фиксация изменений файлов. Сохранение изменений в локальном репозитории. Берёт все данные, добавленные в индекс с помощью git add, и сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель текущей ветки на этот слепок

:::

## Использование

```bash
git commit                      # Откроется редактор для ввода сообщения коммита
git commit -a                   # Добавление всех изменений отслеживаемых файлов в индекс без использования git add
git commit -m 'Message'         # Передача сообщения коммита без запуска полноценного редактора
git commit -a -m 'Message'      # git add + git commit
git commit --amend              # Откроется редактор для правки последнего коммита
git commit --amend -m 'Message' # Перезапишется последний коммит
```

## Опции

- `-m <msg>` `--message=<msg>` - Use the given `<msg>` as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs. The -m option is mutually exclusive with -c, -C, and -F
