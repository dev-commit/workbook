# Методы

## Без Enzyme

```js
import React from 'react'

const App = () => {
    return (<h1>Hello</h1>)
}

it('Export component is correct', () => {expect(App).toBeDefined();
})
```

## Структура

```js
it('', () => {
	const wrapper = shallow(<App propApp="Hello App" />);
	expect(wrapper.ЭлементСоСвойствами).ВалидаторJest();
});
```

## Элемент со свойствами

### 1. Поиск всех элементов (компонент или dom-элемент)

```js
.find('div')           // выборка всех "div"
```

### 2. Выбор элеметов

```js
.first()               // первый элемент
.last()                // последний элемент
.at(0)                 // первый элемент
.at(1)                 // второй элемент
```

### 3. Работа с элементами

```js
.text()                 .toBe('Hello') / .toContain('ello')  // содержит текст, заданный в jest
.html()                 .toBe('<h1>Hi</h1>')                 // содержит html, заданный в jest
.exists()               .toBeTruthy()                        // элемент существует
.length                 .toBe(1) / .toBe(0)                  // если "1" - элемент существует, если "0" - не существует
.hasClass('header')     .toBeTruthy() / .toBeFalsy()         // содежит класс "header"
.contains(<h1>Hi</h1>)  .toBeTruthy()                        // содержит html-код
.props().propChild      .toBe('Hello Child')                 // обращение к значению пропсов
.prop('target')         .toBe('_blank')                      // обращение к конкретному значению пропа
```

## Валидаторы Jest

```js
.toBe('Hello')                       // содержит текст
.toBe('<h1>Hi</h1>')     // содержит html
.toBe(1)                             // найден 1 элемент
.toBe(0)                             // найдено 0 элементов

.toContain('ello')                   // содержит часть текста

.not.toBe('_blank') // не содержит текст

.toBeTruthy()                        // истина
.toBeFalsy()                         // ложь
```

## Jest beforeEach

```js
let wrapper;beforeEach(() => {
    wrapper =shallow(<App />);
})it('test1', () => {expect(wrapper...).toBe(...);
});it('test2', () => {expect(wrapper...).toBe(...);
});
```
