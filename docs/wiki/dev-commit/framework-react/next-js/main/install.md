# Установка и настройка

## Информация

- _create-next-app@latest_ - автоматическое создание базового проекта и установка зависимостей

```bash
npx create-next-app@latest
```

- У Next.js 2 версии роутера. При установке спросит, какой использовать:
  - _App Router_ (recommended)
  - _Pages Router_ (старый)

```plaintext
> npx create-next-app@latest
√ What is your project named? ... my-app
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No
```

## `package.json`

- `npm run dev` - server
- `npm run build` - build
- `npm run start` - start a Next.js production server (выдаёт ошибку)

```json
{
  "name": "project-name",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.4.13",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```
