# Custom Elements

```js
class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.innerText = 'Hello World';
    }
}
customElements.define('custom-element', CustomElement);
// => Hello World
```document.registerElement => window.customElements.define (устаревшая конструкция)
- Стандарт Custom Elements позволяет описывать для новых элементов свои свойства, методы, объявлять свой DOM, подобие конструктора и многое другое

- Использовать новый элемент в HTML можно и до его объявления через registerElement
- Для этого в браузере предусмотрен специальный режим «обновления» существующих элементов
- Если браузер видит элемент с неизвестным именем, в котором есть дефис - (такие элементы называются «unresolved»), то

имя нового тега, например "mega-select". Оно обязано содержать дефис "-". Спецификация требует дефис, чтобы избежать в
    будущем конфликтов со стандартными элементами HTML. Нельзя создать элемент timer или myTimer – будет ошибка
объект-прототип для нового элемента, он должен наследовать от HTMLElement, чтобы у элемента были стандартные свойства и
    методы

## Регистрация элемента

#### Object.create

```js
const element =Object.create(HTMLElement.prototype);
element.action = function(content) {
    this.innerHTML = content;
};document.registerElement("my-element", {
    prototype: element
});
document.querySelector('my-element').action('zzz');
```

#### registerElement

```js
document.registerElement("my-element", {
    prototype: {
        __proto__:HTMLElement.prototype,
        action: function(content) { 
            this.innerHTML = content; 
        },
        value: 77
    }
});
document.querySelector('my-element').action('zzz');
const a = document.querySelector('my-element').value;
```

```html
<my-element>Hello</my-element>
```

## Расширение встроенных элементов

```js
const element = Object.create(HTMLButtonElement.prototype);
element.action = function(content) {
    this.innerHTML = content;
};
document.registerElement("my-element", {
    prototype: element,
    extends: 'button'
});
document.querySelector('button').action('zzz');
```

```css
<button is="my-element"></button>
```

## Жизненный цикл

```bash
createdCallback                                     # элемент создан
attachedCallback                                    # элемент добавлен в документ
detachedCallback                                    # элемент удалён из документа
attributeChangedCallback(name, prevValue, newValue) # атрибут добавлен, изменён или удалён
```

```js
element.createdCallback = function() {
    //
}
```

## Примеры

### 1. Элемент таймер

```js
// прототип с методами для нового элемента
const MyTimerProto = Object.create(HTMLElement.prototype);
MyTimerProto.tick = function() { // свой метод tick
    this.innerHTML++;
};

// регистрируем новый элемент в браузере
document.registerElement("my-timer", {
    prototype: MyTimerProto
});

// вызовем метод tick() на элементе
setInterval(function() {
    timer.tick();
}, 1000);
```

```html
<my-timer id="timer">0</my-timer>
```

### 2. Элемент hello-world с таймером

```js
// регистрация произойдёт через 2 сек
setTimeout(function() {
    document.registerElement("hello-world", {
        prototype: {
            __proto__: HTMLElement.prototype,
            sayHi: function() { alert('Привет!'); }
        }
    });
    hello.sayHi();
}, 2000);
```

```css
/* стиль для :unresolved элемента (до регистрации) */
hello-world:unresolved {
    color: blue;
}
hello-world {
    transition: color 3s;
}
```

```html
<hello-world id="hello">Hello, world!</hello-world>
```
