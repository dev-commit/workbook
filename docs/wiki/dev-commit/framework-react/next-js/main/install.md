# Установка и настройка

- create-next-app@latest - автоматической создание базового проекта и установка зависимостей

npx create-next-app@latest

	У Next.js 2 версии роутера. При установке спросит, какой использовать:
	
- App Router (recomended)
- Pages Router (старый)

```plaintext
> npx create-next-app@latest
√ What is your project named? ... my-app
√ Would you like to use TypeScript? ... No /Yes√ Would you like to use ESLint? ... No /Yes√ Would you like to use Tailwind CSS? ...No/ Yes
√ Would you like to use `src/` directory? ...No/ Yes
√ Would you like to use App Router? (recommended) ... No /Yes√ Would you like to customize the default import alias (@/*)? ...No/ Yes
```package.json
- npm run dev - server
- npm run build - build
- npm run start - start a Next.js production server (выдаёт ошибку)

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
