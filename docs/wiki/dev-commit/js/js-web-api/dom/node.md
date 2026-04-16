# Узлы

- Разные DOM-узлы являются обычными JS объектами различных классов с различными свойствами
- Классы DOM образуют иерархию. Основной объект в ней: Node, от которого наследуют остальные

<!-- <img src="../@img/node.png" width="500px"/> -->

### Проверка класса

```js
alert( document.body ); // [object HTMLBodyElement]

alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement );     // true
alert( document.body instanceof Element );         // true
alert( document.body instanceof Node );            // true
```

## Свойства: tagName, nodeName, nodeType

- element.nodeType - тип узла (узел элемента 1 или текстовый узел 3). Доступен только на чтение
- element.tagName - название HTML-тега в верхнем регистре. Есть только у элементов Element. Если текстовый узел - будет undefined
- element.nodeName - название узла (узел элемента или тексовый узел). Определено для любых узлов Node. Для элементов оно равно tagName, а для не-элементов обычно содержит строку с типом узла

### 1. nodeType - тип узла

1. Document - точка входа в DOM
2. Element Node (узел-элемент) - HTML-теги. Одни узлы вложены в другие, образуя дочерние узлы, за счет которых образована структра дерева
3. Text Node (текстовый узел) #text - текст внутри элементов. Текстовый узел содержит исключительно строку текста и не может иметь потомков, то есть он всегда на самом нижнем уровне. Пробелы и переводы строки – это тоже текст, полноправные символы, которые учитываются в DOM
4. Comment Node (комментарий) #comment - комментарий

```js
const a = element.nodeType;
```

```js
ELEMENT_NODE                = 1;
ATTRIBUTE_NODE              = 2;
TEXT_NODE                   = 3;
CDATA_SECTION_NODE          = 4;
ENTITY_REFERENCE_NODE       = 5;
ENTITY_NODE                 = 6;
PROCESSING_INSTRUCTION_NODE = 7;
COMMENT_NODE                = 8;
DOCUMENT_NODE               = 9;
DOCUMENT_TYPE_NODE          = 10;
DOCUMENT_FRAGMENT_NODE      = 11;
NOTATION_NODE               = 12;
```

### 2. nodeName и tagName

```js
alert( document.body.nodeName ); // BODY
alert( document.body.tagName );  // BODY
```

- У браузера есть два режима обработки документа: HTML и XML-режим. Обычно используется режим HTML
- XML-режим включается, когда браузер получает XML-документ через XMLHttpRequest (технология AJAX) или при наличии заголовка Content-Type: application/xml+xhtml
- В XML-режиме сохраняется регистр и nodeName может выдать «body» или даже «bOdY» – в точности как указано в документе. XML-режим используют очень редко
