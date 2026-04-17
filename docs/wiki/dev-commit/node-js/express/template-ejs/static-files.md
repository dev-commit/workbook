# Статичные файлы

- Нужно явно указать ссылку на статичные файлы: css, img, doc и т.д., иначе эти файлы не будут загружаться
- Статичные файлы размещаются в директории public

› index.js
📂 public
    › styles.css
📂 views
    › about.ejs

### 1. Регистрация в index.js

```js
const express = require('express');
const app = express();

app.use('/public', express.static('public'));
```

### 2. Задание стилей

```css
h1 {
    color: yellowgreen;
}
```

### 3. Добавление стилей на страницу

```js
<link rel="stylesheet" href="/public/styles.css">

<h1>About</h1>
```
