Список веток с указанием текущей
    

## Команды

### Список веток

```bash
git branch     # список веток с указанием текущей
git branch -a  # список веток с указанием remotes/origin
```

### Создание новой ветки

```bash
git branchfeature# создание новой ветки (ответвиться от текущей)
git checkout -bfeature# создание новой ветки и переключение на нее
```

### Удаление ветки

```bash
# Удаление ветки из локального репозитория
git branch --deletefeature# удаление ветки (после мерджа)
git branch -dfeature# удаление ветки (после мерджа)
git branch -Dfeature# удаление ветки (тупиковая ветвь)
```

```bash
# Удаление ветки из удаленного репозитория
git push origin --deletefeaturegit push origin -dfeaturegit push origin :feature```

### Переименование локальной ветки

- -m происходит от слова move (или mv)
- mv используется для переименования файлов в Linux

```bash
git branch -mNewName# если находимся на ветке для переименования
git branch -mOldNameNewName# если находимся на другой ветке
```
