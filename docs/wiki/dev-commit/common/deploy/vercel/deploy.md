# Деплой

## Интеграция

### 1. GitHub + Vercel Dashboard

1. Загрузить проект на GitHub / GitLab / Bitbucket
2. Авторизоваться в Vercel и перейти на _"Projects"_
3. Кнопка _"Add New"_ -> _"Project"_
4. Секция _Import Git Repository_ -> Выбрать Git provider (GitHub / GitLab / Bitbucket) -> Выбрать репозиторий -> Import
5. Страница _New Project_ -> Указать настройки -> _Deploy_
6. Запустится процесс деплоя -> Сообщение об успешном деплое -> Кнопка "Continue to Dashboard"
7. При каждом push в main ветку репозитория, будет пересобираться проект

### 2. Vercel CLI

**Установка Vercel**

```bash
npm i -g vercel
sudo npm i -g vercel # Для MacOS
```

**Авторизация и деплой**

> Из корня проекта

```bash
vercel login # Открывает сайт для авторазации
vercel # Деплой (будет несколько вопросов по настройке, деплой будет с текущей ветки)
vercel --prod # Для продакшн-деплоя
```

## Настройки

### Настройки билда из Dashboard

<v-breadcrumbs :items="['Выбрать проект', 'Settings', 'Build and Deploymant']" />

- _Build Command_: `npm run build`
- _Output Directory_: `dist`

### Переменные окружения из Dashboard

<v-breadcrumbs :items="['Выбрать проект', 'Settings', 'Environment Variables']" />
- Добавить все ключи из .env
- После изменения env нужен *Redeploy*

### SPA-роутинг (React Router)

- Если в проекте client-side routes (например, `/about`), при прямом открытии URL может быть 404 — нужно правило “всё на `index.html`”.
- Обычно Vercel сам справляется для многих шаблонов, но если нет — нужно добавить`vercel.json`
- Файл кладётся в корень проекта, рядом с `package.json`

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
