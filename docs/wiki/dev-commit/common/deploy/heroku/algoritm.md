# Алгоритм

## Действия

### 1. Регистрация на Heroku

- https://heroku.com/

### 2. Скачать Heroku CLI

- https://devcenter.heroku.com/articles/heroku-cli
- <v-breadcrumbs :items="['Download and install', 'Windows']" />
- Скачать и установить

### 3. Консоль

```bash
heroku --help # Проверка корректной установки
heroku login  # Залогиниться в CLI
```

- Открывается браузер
- <v-breadcrumbs :items="['Log In', 'Logged In (Надпись)']" />

```bash
heroku create # Создать новый проект
```

В консоли появляются ссылки

> "sleepy-lake-1234" - произвольное название приложения

- https://sleepy-lake-1234.herokuapp.com/
- https://git.heroku.com/sleepy-lake-1234.git

### 4. Перейти на Heroku Dashboard

- https://dashboard.heroku.com/apps
- <v-breadcrumbs :items="['Зайти в проект', 'Deploy']" />

### 5. Создать git-репозиторий

- Создать _.gitignore_
- _sleepy-lake-1234_ - название приложения

```bash
git init
git add .
git commit -m 'Starter'
heroku git:remote -a sleepy-lake-1234
git push heroku master
```

### 6. Открыть проект

- https://sleepy-lake-1234.herokuapp.com/

```bash
heroku open # Открыть проект по ссылке
```
