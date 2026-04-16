# Приватный метод

### Простой приватный метод и свойство

```js
function User() {
    const privateProperty = 77;
	this.publicMethod = function() {
        privateMethod();
    }
    const privateMethod = function() {
        console.log('private method call' + privateProperty);
    }
}

const user = new User();
user.publicMethod(); // => 'private method call77
```

### Сохранение this в замыкании

```js
function User() {
    this.name = 'Tony';
    const self = this;
	this.publicMethod = function() {
        privateMethod();
    }
    const privateMethod = function() {
        console.log(self.name);
    }
}

const user = new User();
user.publicMethod(); // => 'Tony'
```

### Стрелочная функция

```js
function User() {
    this.name = 'Tony';
	this.publicMethod = function() {
        privateMethod();
    }
    const privateMethod = () => {
        console.log(this.name);
    }
}

const user = new User();
user.publicMethod();
```
