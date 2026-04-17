# Структура

› index.js
📂 public
    › styles.css
📂 views
    › news.ejs
    📂 blocks
        › header.ejs

## Пример

### index.js

```js
const express = require('express');
const app = express();
app.use('/public', express.static('public'));
```

```js
// Указание шаблонизатора
app.set('view engine', 'ejs');

app.get('/news', (req, res) => {
    // Берем шаблон "news.ejs" из "views"
    // Передаем объект с ключами: "value" и "arr"
    res.render('news', {value: 'Value',arr: [1, 2, 3, 4]
    });
});
```

```js
app.listen(3000);
```

### views/news.ejs

- В "blocks/header" обычный html-код

```html
<%- include('blocks/header'); %>

<%=value%>

<ul>
    <%arr.map(item => { %>
        <li><%= item %></li>
    <% }); %>
</ul>
```
