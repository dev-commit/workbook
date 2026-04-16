# Добавление и удаление узлов

- document.createElement - создает новый элемент с указанным тегом
- document.createTextNode - создает новый текстовый узел с заданным текстом
- elem.cloneNode - клонирование узла elem
- parentElem.appendChild - добавляет elem в конец дочерних элементов parentElem
- parentElem.insertBefore - вставляет elem в коллекцию детей parentElem, перед элементом nextSibling
- parentElem.removeChild - удаляет elem из списка детей parentElemт
- parentElem.replaceChild - среди детей parentElem удаляет elem и вставляет на его место newElem
- elem.remove - удаляет элемент напрямую, не требуя ссылки на родителят

## Создание

```js
const element = document.createElement('div');
element.innerHTML = 'Go to google';
element.className = 'class-google';
```

## Вставка

```js
const wrapper = document.querySelector('#wrapper');
const element = document.createElement('div');
```

```js
wrapper.appendChild(element);                      // внутри wrapper после контента
wrapper.insertBefore(element, wrapper.firstChild); // внутри wrapper перед контентом
wrapper.parentNode.insertBefore(element, wrapper); // перед wrapper
```
- Если вы хотите переместить элемент на новое место – не нужно его удалять со старого
- Все методы вставки автоматически удаляют вставляемый элемент со старого места

## Замена

```js
wrapper.parentNode.replaceChild(element, wrapper); // заменить элемент другим элементом
```

## Удаление

```js
wrapper.parentNode.removeChild(element); // удаление нового элемента
wrapper.parentNode.removeChild(wrapper); // удаление элемента обертки
document.body.removeChild(element);      // удаление нового элемента (если родитель body)
```

## Текстовые узлы для вставки текста

```js
const div = document.createElement('div');
div.appendChild(document.createTextNode('text'));
```
