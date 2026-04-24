# Конфигурование сервера

::: info

- https://router.vuejs.org/ru/guide/essentials/history-mode.html#примеры-конфигурирования-серверов - Примеры конфигурирования серверов
  :::

## Apache (.htaccess)

```bash
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.html$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.html [L]
</IfModule>
```
