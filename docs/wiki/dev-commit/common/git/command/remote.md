Работа с удаленным репозиторием

```bash
# Добавление к локальному репозиторию ссылки на удаленный репозиторий
git remote add originhttps://github.com/Account/Repo.git# список репозиториев
git remote -v
```

## Алгоритм работы remote add origin

```bash
# 1. Локальный репозиторий
git init
git add .
git commit -m 'Comment'

# 2. Добавляем ссылку на удаленный репозиторий GitHub
git remote add origin https://github.com/Account/Repo.git

# 3. Пушим изменения из локального репозиторий в удаленный
git push origin head
```
