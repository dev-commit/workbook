# Алгоритм

### 1. Регистрация на Heroku

::: info

:::

### 2. Скачать Heroku CLI

- 
- Download and install -> Windows
- Скачать и установить

### 3. Консоль

```bash
heroku --help # проверка корректной установки
heroku login  # залогиниться в CLI
```
- Открывается браузер -> Log In -> Logged In (Надпись)

```bash
heroku create # создать новый проект
```
- В консоли появляются ссылки
- 
- 

### 4. Перейти на Heroku Dashboard

- 
- Зайти в проект -> Deploy

### 5. Создать git-репозиторий

- Создать .gitignore
- sleepy-lake-01897 - название приложения

```bash
git init
git add .
git commit -m 'starter'
heroku git:remote -a sleepy-lake-01897
git push heroku master
```

### 6. Открыть проект

- 

```bash
heroku open # открыть проект по ссылке
```
