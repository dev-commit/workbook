# Общее

## 1. Клонирование ветки PR

```bash
git clonehttps://github.com/Account/Repo.gitgit fetch origin
git checkoutfeaturegit pull
```

## 2. Создание ветки на локальном репозитории и загрузка на удаленный репозиторий

```bash
git clonehttps://github.com/Account/Repo.gitgit checkout -bfeaturegit add .
git commit -m 'Message'
git push origin HEAD
```

## 3. Добавление на удаленный репозиторий

```bash
git add .
git commit -m 'Message'
git push origin HEAD
```

## 4. Изменение регистра

- На Windows при изменении регистра файла, Git не видит изменения (в отличие от Linux)

```bash
# Изменить название файла для того, чтобы Git видел изменения
git mv -fOldFileNameCasenewfilenamecase```
