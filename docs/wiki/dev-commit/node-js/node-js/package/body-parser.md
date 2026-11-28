# body-parser

## Информация

::: info

- https://github.com/expressjs/body-parser - GitHub

:::

## Установка

```bash
npm i --save body-parser
```

::: warning

- С Express 4.16 разбор тела запроса встроен в Express: `express.json()` и `express.urlencoded()`. Для форм и JSON отдельно ставить body-parser не нужно

:::

## view/about.ejs

```html
<form method="post" action="/about">
  <input type="email" name="email" placeholder="Email" />
  <input type="password" name="password" placeholder="Password" />
  <input type="checkbox" name="checkbox" />
  <button type="submit">Submit</button>
</form>
```

## index.js

```js
const express = require("express");
const bodyParser = require("body-parser");

// Принимаем данные из post-запроса
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.set("view engine", "ejs");
app.get("/about", (req, res) => {
  res.render("about");
});

// Обработка данных из формы
app.post("/about", urlencodedParser, (req, res) => {
  // Если не переданы данные из формы (без данных парсер кладёт в req.body пустой объект)
  if (!Object.keys(req.body).length) return res.sendStatus(400);
  console.log(req.body); // Все данные
  console.log(req.body.email); // Только email
  console.log(req.body.password); // Только password
  res.render("about");
});

app.listen(3000);
```
