# body-parser

npm i --save body-parser
::: info
https://github.com/expressjs/body-parser
:::

## view/about.ejs

```html
<form method="post" action="/about">
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <input type="checkbox" name="checkbox">
    <button type="submit">Submit</button>
</form>
```

## index.js

```js
const express = require('express');
const bodyParser = require('body-parser');

// принимаем данные из post-запроса
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.set('view engine', 'ejs');
app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/about', urlencodedParser, (req, res) => {   // обработка данных из формы
    if (!req.body) return res.sendStatus(400);         // если не переданы данные из формы
    console.log(req.body);                             // все данные
    console.log(req.body.email);                       // только email
    console.log(req.body.password);                    // только password
    res.render('about');
});

app.listen(3000);
```
