# `git branch`

## Информация

::: danger

**`git branch`** - список веток с указанием текущей

:::

## Команды

### Список веток

```bash
git branch     # Список веток с указанием текущей
git branch -a  # Список веток с указанием remotes/origin
```

### Создание новой ветки

```bash
git branch feature       # Создание новой ветки (ответвиться от текущей)
git checkout -b feature  # Создание новой ветки и переключение на нее
```

### Удаление ветки

```bash
# Удаление ветки из локального репозитория
git branch --delete feature  # Удаление ветки (после мерджа)
git branch -d feature        # Удаление ветки (после мерджа)
git branch -D feature        # Удаление ветки (тупиковая ветвь)

# Удаление ветки из удаленного репозитория
git push origin --delete feature
git push origin -d feature
git push origin :feature
```

### Переименование локальной ветки

- `-m` происходит от слова move (или mv)
- `mv` используется для переименования файлов в Linux

```bash
git branch -m NewName          # Если находимся на ветке для переименования
git branch -m OldName NewName  # Если находимся на другой ветке
```
