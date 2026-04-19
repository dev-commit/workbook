Переключение на ветку

```bash
git checkoutfeatures# переключение на ветку "features"
git checkout -bfeatures# создание новой ветки "features" и переключение на нее
git checkout -bbug/3-aorigin/bug/3-a```

```bash
# Откатить изменения в файле на момент последнего коммита
git checkoutFileName# Откатить изменения в файле на момент заданного коммита
git checkoutHashCommit```

## Опции

- -b &lt;new_branch&gt; - Create a new branch named &lt;new_branch&gt; and start it at &lt;start_point&gt;; see git-branch[1] for details

## Опция--orphan

```bash
# Создание новой ветики без родительского коммита
# При этом все файлы из рабочей директории будут на месте
git checkout --orphanfeatures# Создание новой пустой ветки
git checkout --orphanfeatures&& git reset --hard

# Создание новой ветики с определенного коммита
# При этом будет создана новая ветка без родительского коммита и в индексе Git будут находится
# все файлы из выбраного целевого коммита
git checkout --orphanfeaturesTARGET_REFERENCE```
