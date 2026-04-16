# Выборка элементов страницы

Все узлы, включая текстовые и комментарии

<!-- <img src="../@img/dom-links1.png" width="400px"/> -->

---

Только узлы-элементы

<!-- <img src="../@img/dom-links2.png" width="400px"/> -->

## Корневые элементы

```js
document.documentElement; // элемент HTML
document.body;            // элемент BODY
document.head;            // элемент HEAD
```

## Родственные элементы

- Дочерние элементы (дети) - элементы, которые лежат непосредственно внутри данного
- Потомки - все элементы, которые лежат внутри данного, вместе с их детьми, детьми их детей и так далее. То есть, всё поддерево DOM

### Все узлы, включая текстовые и комментарии / Только узлы-элементы

```js
elem.parentNode;      elem.parentElement;          // родитель 
elem.childNodes;      elem.children;               // дочерние элементы
elem.firstChild;      elem.firstElementChild;      // первый ребенок
elem.lastChild;       elem.lastElementChild;       // последний ребенок
elem.nextSibling;     elem.nextElementSibling;     // следующий сосед (брат)
elem.previousSibling; elem.previousElementSibling; // предыдущий сосед (брат)
```

```js
// всегда
elem.parentNode == elem.parentElement
// кроме исключения
document.documentElement.parentNode;    // document
document.documentElement.parentElement; // null
```

```js
let a = document.childNodes;                       // дети с DOCTYPE и комментариями
let a = document.children;                         // дети
let a = document.children[0].children[1].children; // все элементы из BODY
let a = document.body.childNodes[0];               // первый элемент
```

## Поиск элементов DOM (6 основных методов)

<!-- <img src="../@img/element-get.jpg" width="450px"/> -->

```js
let a = document.getElementById('item');      // по id
// браузер поддерживает у себя внутреннее соответствие id -> элемент, поэтому нужный элемент возвращается сразу

let a = document.getElementsByTagName('img'); // по названию тега (все элементы)
let a = document.getElementsByTagName('*');                    // получить все элементы документа
let a = elem.getElementsByTagName('*');                        // получить всех потомков элемента elem:

let a = document.getElementsByName('item');   // по атрибуту name

let a = document.getElementsByClassName('item');    // по названию класса
let a = document.getElementsByClassName('item')[0]; // первый элемент

let a = document.querySelector('.nav.bar'); // возвращает только первый элемент внутри документа

let a = document.querySelectorAll('.nav'); // возвращает список элементов в пределах документа
let a = elem.querySelectorAll(css)[0];                      // сначала ищутся все элементы, а потом берётся первый
let a = document.querySelectorAll(':hover');                // вернёт список, в порядке вложенности, из текущих элементов под курсором мыши
```
- getElementsBy*(...) и т.д. вызывают не обычные массивы, а живые коллекции. При изменении документа - изменяется и результат запроса
- Результат запросов getElementsBy* - это не массив, а специальный объект, имеющий тип NodeList или HTMLCollection. Он похож на массив, так как имеет нумерованные элементы и длину, но внутри это не готовая коллекция, а «живой поисковой запрос»
- Поиск выполняется только при обращении к элементам коллекции или к её длине
- elem.querySelector(query), elem.querySelectorAll(query) - браузер перебирает все подэлементы внутри элемента elem(или по всему документу, если вызов в контексте документа) и проверяет каждый элемент на соответствие запросу query
- Вызов querySelector прекращает перебор после первого же найденного элемента, а querySelectorAll собирает найденные элементы в «псевдомассив»: внутреннюю структуру данных, по сути аналогичную массиву JavaScript

## Поиск и проверки

### elem.matches(css)

    ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Бывает полезным, когда мы перебираем элементы (в массиве или по обычным навигационным ссылкам) и пытаемся отфильтровать их
    

    css селектор
    
true либо false

```html
<div id="links">
	<a href="item.zip">item.zip</a>
	<a href="item.doc">item.doc</a>
	<a href="element.doc">element.doc</a>
</div>
```

```js
let elems = document.querySelectorAll('#links a');
for (let i = 0; i < elems.length; i++) {
    if (elems[i].matches('a[href$="zip"]')) {
        console.log(elems[i].href);
    }
}
// => file:///C:/Users/serge/Desktop/js/item.zip
```

### elem.closest(css)

    ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css. Сам элемент тоже включается в поиск. 
    Метод бежит от текущего элемента вверх по цепочке родителей и проверяет, подходит ли элемент под указанный CSS-селектор. Если подходит – останавливается и возвращает его
    

    css селектор

```html
<ul>
	<li class="chapter">Глава I
		<ul>
			<li class="subchapter">Глава <span class="num">1.1</span></li>
			<li class="subchapter">Глава <span class="num">1.2</span></li>
		</ul>
	</li>
</ul>
```

```js
const numberSpan = document.querySelector('.num');

// ближайший элемент сверху подходящий под селектор li
alert(numberSpan.closest('li').className) // subchapter

// ближайший элемент сверху подходящий под селектор .chapter
alert(numberSpan.closest('.chapter').tagName) // LI

// ближайший элемент сверху, подходящий под селектор span
// это сам numberSpan, так как поиск включает в себя сам элемент
alert(numberSpan.closest('span') === numberSpan) // true
```

### XPath

- **XPath** - способ поиска, который обычно используется в XML
- Так как XPath сложнее и длиннее CSS, то используют его очень редко

```js
// запрос для поиска элементов H2, содержащих текст "XPath"
const result = document.evaluate(
    "//h2[contains(., 'XPath')]", 
    document.documentElement, 
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
    null
);

for (let i = 0; i < result.snapshotLength; i++) {
    alert( result.snapshotItem(i).outerHTML );
}
```

## Формы

```js
let a = document.forms[0];                       // первая форма на странице
let a = document.myform;                         // форма с name=myform (если name уникальный)
let a = document.forms[0].elements[0];           // первый элемент в форме
let a = document.forms[0].element;               // элемент в форме с name=element
let a = document.forms['nameForm']['nameField']; // поле формы
```

## Изображения

```js
let a = document.images.logo;    // img с name=logo
let a = document.images['logo']; // img с name=logo
let a = document.logo;           // img с name=logo (если name уникальный)
```

## Таблицы

```js
table.rows;               // коллекция строк TR таблицы
table.caption/tHead/tFoot // ссылки на элементы таблицы CAPTION, THEAD, TFOOT
table.tBodies             // коллекция элементов таблицы TBODY, по спецификации их может быть несколько
```

```js
tbody.rows // коллекция строк TR секции
```

```js
tr.cells           // коллекция ячеек TD/TH
tr.sectionRowIndex // номер строки в текущей секции THEAD/TBODY
tr.rowIndex        // номер строки в таблице
```

```js
td.cellIndex // номер ячейки в строке
```
