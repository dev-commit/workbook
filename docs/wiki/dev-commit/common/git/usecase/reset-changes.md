# Отмена изменений

```bash
git checkout -- file.txt # Отмена изменений файла
git reset HEAD file.txt  # Отмена индексации файла
git commit --amend       # Изменение последнего коммита

# Все три команды вместе дают один коммит - второй коммит заменяет результат первого
git commit -m 'Message'
git add forgotten_file
git commit --amend

git checkout .             # Восстановить все
git checkout HashCommit    # Перейти к состоянию этого коммита (detached HEAD)

# Просмотреть, а затем удалить неотслеживаемые (untracked) файлы и папки
git clean -nd
git clean -fd

# Просмотреть, а затем удалить ВСЕ неотслеживаемые (untracked) файлы и папки, включая игнорируемые Git-ом
git clean -ndx
git clean -fdx
```
