# Мультивставка: insertAdjacentHTML и DocumentFragment

## insertAdjacentHTML

- Обычные методы вставки работают с одним узлом. Но есть и способы вставлять множество узлов одновременно

- elem. insertAdjacentHTML (where, html) - вставка строки HTML в любое место документа, в том числе и между узлами
- elem. insertAdjacentElement (where, newElem) - вставка элемента newElem
- elem. insertAdjacentText (where, text) - создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem

## DocumentFragment

- **DocumentFragment** - DOM-объект, который похож на обычный DOM-узел, но им не является
- У DocumentFragment нет обычных свойств DOM-узлов, таких как innerHTML, tagName и т.п. Это не узел
- Когда DocumentFragment вставляется в DOM, то он исчезает, а вместо него вставляются его дети. Это свойство является особенностью DocumentFragment
- DocumentFragment, в отличие от insertAdjacent*, работает с коллекцией DOM-узлов

```js
const fragment = document.createDocumentFragment(); // создание
fragment.appendChild(node);                       // добавление узлов
fragment.cloneNode(true);                         // клонирование
ul.appendChild(fragment);                         // вставка
```

### Пример использования

```js
// создание элемента
const div = document.createElement('div');
div.innerText = 'element';

// создание fragment и добавление элемента
const fragment = document.createDocumentFragment();
fragment.appendChild(div);

// вывод фрагмента
document.querySelector('ul').appendChild(fragment);
```

## append/prepend, before/after, replaceWith

- node. append (...nodes) - вставляет nodes в конец node
- node. prepend (...nodes) - вставляет nodes в начало node
- node. after (...nodes) - вставляет nodes после узла node
- node. before (...nodes) - вставляет nodes перед узлом node
- node. replaceWith (...nodes) - вставляет nodes вместо node

- Методы ничего не возвращают
- Во всех методах nodes - DOM-узлы или строки, в любом сочетании и количестве. Причём строки вставляются именно как текстовые узлы, в отличие от insertAdjacentHTML

```js
// добавим элемент в конец body
const p = document.createElement('p');
document.body.append(p);

const em = document.createElement('em');
em.append('Мир!');

// вставить в параграф текстовый и обычный узлы
p.append("Привет, ", em);

// добавить элемент после тега p
p.after(document.createElement('hr'))
```
