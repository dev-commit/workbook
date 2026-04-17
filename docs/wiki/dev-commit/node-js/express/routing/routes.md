# Маршрутизация

### 1. Статическая ссылка

```js
// главная
app.get('/', (req, res) => {
    res.send('This is Index');
});

// news
app.get('/news', (req, res) => {
    res.send('This is News');
});
```

### 2. Динамические параметры в URL

```js
// > "/news/starter"
app.get('/news/:name', (req, res) => {
    const params = req.params; // => { name: 'starter' }
});

// > "/news/starter/23"
app.get('/news/:name/:id', (req, res) => {
    const params = req.params; // => { name: 'starter', id: '23' }
});
```

### 3. Query параметры из URL

```js
// > "/news?id=23&city=Melbourne"
app.get('/news', (req, res) => {
    const query = req.query; // => { id: '23', city: 'Melbourne' }
});
```
