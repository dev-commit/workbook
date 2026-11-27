# Общее

## 1. Клонирование ветки PR

```bash
git clone https://github.com/Account/Repo.git
git fetch origin
git checkout feature
git pull
```

## 2. Создание ветки на локальном репозитории и загрузка на удаленный репозиторий

```bash
git clone https://github.com/Account/Repo.git
git checkout -b feature
git add .
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

- На Windows (и macOS) при изменении регистра имени файла Git не видит изменения (в отличие от Linux)

```bash
# Изменить название файла для того, чтобы Git видел изменения
git mv -f OldFileNameCase newfilenamecase
```
