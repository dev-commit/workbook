# `git checkout`

## Информация

::: danger

**`git checkout`** - переключение на ветку

:::

## Использование

```bash
git checkout features             # Переключение на ветку "features"
git checkout -b features          # Создание новой ветки "features" и переключение на нее
git checkout -b bug/3-a origin/bug/3-a
```

```bash
# Откатить изменения в файле на момент последнего коммита
git checkout FileName

# Откатить изменения в файле на момент заданного коммита
git checkout HashCommit FileName
```

## Опции

- `-b <new_branch>` - Create a new branch named `<new_branch>` and start it at `<start_point>`; see git-branch[1] for details

## Опция `--orphan`

```bash
# Создание новой ветки без родительского коммита
# При этом все файлы из рабочей директории будут на месте
git checkout --orphan features

# Создание новой пустой ветки
git checkout --orphan features && git reset --hard

# Создание новой ветки с определенного коммита
# При этом будет создана новая ветка без родительского коммита и в индексе Git будут находиться
# все файлы из выбранного целевого коммита
git checkout --orphan features TARGET_REFERENCE
```
