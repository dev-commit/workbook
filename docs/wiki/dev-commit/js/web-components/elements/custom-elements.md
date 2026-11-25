# Custom Elements

## Код

```js
class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.innerText = "Hello World";
  }
}
customElements.define("custom-element", CustomElement);
// => Hello World
```

## Информация

::: warning

document.registerElement => window.customElements.define (устаревшая конструкция)

:::

- Стандарт Custom Elements позволяет описывать для новых элементов свои свойства, методы, объявлять свой DOM, подобие конструктора и многое другое
- Использовать новый элемент в HTML можно и до его объявления через _registerElement_
- Для этого в браузере предусмотрен специальный режим «обновления» существующих элементов

### Неизвестное имя с дефисом

> Если браузер видит элемент с неизвестным именем, в котором есть дефис (такие элементы называются _«unresolved»_), то

- Он ставит такому элементу специальный CSS-псевдокласс _:unresolved_, для того, чтобы через CSS можно было показать, что он ещё «не подгрузился»
- При вызове _registerElement_ такие элементы автоматически обновятся до нужного класса

### `registerElement()`

::: danger

**`document.registerElement(имя, {prototype:прототип})`**

> - `имя` - имя нового тега, например "mega-select". Оно обязано содержать дефис "-". Спецификация требует дефис, чтобы избежать в будущем конфликтов со стандартными элементами HTML. Нельзя создать элемент timer или myTimer – будет ошибка
> - `прототип` - объект-прототип для нового элемента, он должен наследовать от HTMLElement, чтобы у элемента были стандартные свойства и методы

:::

## Регистрация элемента

<v-two :title="['Object.create', 'registerElement']">
<template #first>

```js
const element = Object.create(HTMLElement.prototype);

element.action = function (content) {
  this.innerHTML = content;
};

document.registerElement("my-element", {
  prototype: element,
});

document.querySelector("my-element").action("zzz");
```

</template>
<template #last>

```js
document.registerElement("my-element", {
  prototype: {
    __proto__: HTMLElement.prototype,
    action: function (content) {
      this.innerHTML = content;
    },
    value: 77,
  },
});

document.querySelector("my-element").action("zzz");

const a = document.querySelector("my-element").value;
```

</template>
</v-two>

```html
<my-element>Hello</my-element>
```

## Расширение встроенных элементов

```js
const element = Object.create(HTMLButtonElement.prototype);
element.action = function (content) {
  this.innerHTML = content;
};
document.registerElement("my-element", {
  prototype: element,
  extends: "button",
});
document.querySelector("button").action("zzz");
```

```html
<button is="my-element"></button>
```

## Жизненный цикл

- `createdCallback` - элемент создан
- `attachedCallback` - элемент добавлен в документ
- `detachedCallback` - элемент удалён из документа
- `attributeChangedCallback(name, prevValue, newValue)` - атрибут добавлен, изменён или удалён

```js
element.createdCallback = function () {
  //
};
```

## Примеры

::: details Элемент таймер

```js
// Прототип с методами для нового элемента
const MyTimerProto = Object.create(HTMLElement.prototype);
MyTimerProto.tick = function () {
  // Свой метод tick
  this.innerHTML++;
};

// Регистрируем новый элемент в браузере
document.registerElement("my-timer", {
  prototype: MyTimerProto,
});

// Вызовем метод tick() на элементе
setInterval(function () {
  timer.tick();
}, 1000);
```

```html
<my-timer id="timer">0</my-timer>
```

:::

::: details Элемент hello-world с таймером

```js
// Регистрация произойдёт через 2 сек
setTimeout(function () {
  document.registerElement("hello-world", {
    prototype: {
      __proto__: HTMLElement.prototype,
      sayHi: function () {
        console.log("Привет!");
      },
    },
  });
  hello.sayHi();
}, 2000);
```

```css
/* Стиль для :unresolved элемента (до регистрации) */
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

:::
