# Constructor (Конструктор)

## Информация

::: tip Constructor

- **Constructor** - создание новых объектов определенного типа
  :::

## Примеры

### Class Implementation (ES6)

```js
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws = new Server("AWS German", "82.21.21.32");
console.log(aws.getUrl());
```

### Function Implementation (ES5)

```js
function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function () {
  return `https://${this.ip}:80`;
};
```
