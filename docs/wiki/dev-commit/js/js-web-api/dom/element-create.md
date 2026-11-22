# Добавление и удаление узлов

## Информация

### Создание узлов

::: danger

**`document.createElement(tag)`** - создает новый элемент с указанным тегом

> - `tag` - тег для узла

:::

::: danger

**`document.createTextNode(text)`** - создает новый текстовый узел с заданным текстом

> - `text` - текст для узла

:::

::: danger

**`elem.cloneNode(bool)`** - клонирование узла elem

> - `bool` - _true_ - создаст «глубокую» копию элемента вместе с атрибутами, включая подэлементы; _false_ - копия будет создана без дочерних элементов

:::

### Вставка и удаление узлов

::: danger

**`parentElem.appendChild(elem)`** - добавляет elem в конец дочерних элементов parentElem

> - `elem` - добавляемый элемент, созданный через createElement
> - _return_ - вставленный узел `elem`

:::

::: danger

**`parentElem.insertBefore(elem, nextSibling)`** - вставляет elem в коллекцию детей parentElem, перед элементом nextSibling

> - `elem` - добавляемый элемент, созданный через createElement
> - `nextSibling` - элемент, перед которым производится вставка. Если null - сработает как appendChild
> - _return_ - вставленный узел `elem`

:::

::: danger

**`parentElem.removeChild(elem)`** - удаляет elem из списка детей parentElem

> - `elem` - элемент для удаления
> - _return_ - удаленный узел `elem`

:::

::: danger

**`parentElem.replaceChild(newElem, elem)`** - среди детей parentElem удаляет elem и вставляет на его место newElem

> - `newElem` - элемент для замены
> - `elem` - элемент для удаления
> - _return_ - удаленный узел `elem`

:::

::: danger

**`elem.remove()`** - удаляет элемент напрямую, не требуя ссылки на родителя

:::

## Создание

```js
const element = document.createElement("div");
element.innerHTML = "Go to google";
element.className = "class-google";
```

## Вставка

```js
const wrapper = document.querySelector("#wrapper");
const element = document.createElement("div");

wrapper.appendChild(element); // Внутри wrapper после контента
wrapper.insertBefore(element, wrapper.firstChild); // Внутри wrapper перед контентом
wrapper.parentNode.insertBefore(element, wrapper); // Перед wrapper
```

- Если вы хотите переместить элемент на новое место – не нужно его удалять со старого
- Все методы вставки автоматически удаляют вставляемый элемент со старого места

## Замена

```js
wrapper.parentNode.replaceChild(element, wrapper); // Заменить элемент другим элементом
```

## Удаление

```js
wrapper.parentNode.removeChild(element); // Удаление нового элемента
wrapper.parentNode.removeChild(wrapper); // Удаление элемента обертки
document.body.removeChild(element); // Удаление нового элемента (если родитель body)
```

## Текстовые узлы для вставки текста

```js
const div = document.createElement("div");
div.appendChild(document.createTextNode("text"));
```
