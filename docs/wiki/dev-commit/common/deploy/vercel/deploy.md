# Деплой

## 1. GitHub + Vercel Dashboard

### Алгоритм

1. Загрузить проект на GitHub / GitLab / Bitbucket
2. Авторизоваться в Vercel и перейти на _"Projects"_
3. Кнопка _"Add New"_ -> _"Project"_
4. Секция _Import Git Repository_ -> Выбрать Git provider (GitHub / GitLab / Bitbucket) -> Выбрать репозиторий -> Import
5. Страница _New Project_ -> Указать настройки -> _Deploy_
6. Запустится процесс деплоя -> Сообщение об успешном деплое -> Кнопка "Continue to Dashboard"
7. При каждом push в main ветку репозитория, будет пересобираться проект

### Настройки билда (Шаг 5)

- _Build Command_: `npm run build`
- _Output Directory_: `dist`

## 2. Vercel CLI

### Команды

В корне проекта:

```bash
npm i -g vercel
vercel login
vercel
```

Для продакшн-деплоя:

```bash
vercel --prod
```

---

## Важное для SPA-роутинга (React Router)

Если у тебя client-side routes (например, `/about`), при прямом открытии URL может быть 404 — нужно правило “всё на `index.html`”.

### Как сделать на Vercel

- Обычно Vercel сам справляется для многих шаблонов, но если нет — добавь `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Файл кладётся **в корень** проекта, рядом с `package.json`

---

## Переменные окружения

- В Vercel Project → **Settings → Environment Variables**
- После изменения env обычно нужен **Redeploy**.
