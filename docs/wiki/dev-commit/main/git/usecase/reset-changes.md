# Отмена изменений

```bash
git checkout --file.txt# Отмена изменений файла
git reset HEADfile.txt# Отмена индексации файла
git commit --amend       # Изменение последнего коммита
```

```bash
# Все три команды вместе дают один коммит - второй коммит заменяет результат первого
git commit -m 'Message'
git add forgotten_file
git commit --amend
```

```bash
git checkout .             # восстановить все
git checkoutHashCommit# вернуть до состояния этого коммита
```

```bash
# Просмотреть, а затем удалить непроиндексированные файлы и папки:
git clean -nd
git clean -fd

# Просмотреть, а затем удалить ВСЕ непроиндексированные файлы и папки, включая игнорируемые Git-ом
git clean -ndx
git clean -fdx
```
