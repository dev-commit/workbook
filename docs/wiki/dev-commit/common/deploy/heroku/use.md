# Код

## Простой проект

> package.json

```js
{
  "name": "app-node",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

> index.js

```js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.end(`
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <h1>Home Page</h1>
    </div>
  `);
});

app.get("/about", (req, res) => {
  res.end(`
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <h1>About Page</h1>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log("Server started");
});
```

> .gitignore

```bash
/node_modules
```
