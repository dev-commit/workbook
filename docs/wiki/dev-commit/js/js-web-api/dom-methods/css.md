# CSS

- style - это объект, в котором записывают CSS-свойства. Чтение и изменение его свойств – это работа с компонентами атрибута style
- style.cssText - строка стилей для чтения или записи. Аналог полного атрибута style
- getComputedStyle метод позволяют получить реальное, применённое сейчас к элементу свойство стиля с учётом CSS-каскада и браузерных стилей по умолчанию. getComputedStyle возвращает окончательное, непосредственно применённое к элементу (как правило)

## element.style

    доступ к css. Может прочитать только инлайновый css из атрибута style
  
объект, который дает доступ к стилю элемента на чтение и
    запись

```js
element.style.width='100px'; // width element.style.fontSize = '20px'; //
  font-size element.style.backgroundColor = '#fff'; // background-color
  element.style.zIndex = '1'; // z-index element.style.borderLeftWidth = '5px';
  // border-left-width element.style.cssFloat = 'left'; // float
  element.style.MozBorderRadius = '5px'; // -moz-border-radius
  element.style.WebkitBorderRadius = '5px'; // -webkit-border-radius
```

### Сброс стиля

```js
// сброс поставленного стиля - свойства style стиль будет взят из CSS
  element.style.width = ''; element.style.display = "none"; // скрыть
  element.style.display = ""; // показать
```

### Стиль в формате браузера

```js
// стиль в style находится в формате браузера, а не в том, в котором его
  присвоили document.body.style.margin = '20px'; let a =
  document.body.style.marginTop; // 20px! document.body.style.color = '#abc';
  let a = document.body.style.color; // rgb(170, 187, 204)
```

    задание стиля в виде строки. Браузер разбирает строку style.cssText и
    применяет известные ему свойства. Неизвестные, большинство браузеров
    проигнорируют. При установке style.cssText все предыдущие свойства style
    удаляются
  

## Вычисленное (computed) и окончательное (resolved) значения

1. Вычисленное (computed) значение – это то, которое получено после применения всех правил CSS и CSS-наследования. Например, width: auto или font-size: 125%
2. Окончательное (resolved) значение – непосредственно применяемое к элементу. При этом все размеры приводятся к пикселям, например width: 212px или font-size: 16px. В некоторых браузерах пиксели могут быть дробными. getComputedStyle возвращает окончальное значение

## getComputedStyle

    получить текущее (окончательное) используемое значение CSS-свойства
  

    элемент, значения для которого нужно получить
  

    указывается, если нужен стиль псевдо-элемента, например "::before". Пустая
    строка или отсутствие аргумента означают сам элемент

```html
<style> body { margin: 10px, color: #fff; } </style> <body>
  <script> const computedStyle =
  getComputedStyle(document.body); let a =
  computedStyle.marginTop; // отступ в пикселях let a = computedStyle.color; //
  цвет </script> </body>
```
- 1. getComputedStyle требует полное свойство
- Например: paddingLeft, marginTop, borderLeftWidth. При обращении к сокращенному: padding, margin, border - правильный результат не гарантируется
- Допустим свойства paddingLeft/paddingTop взяты из разных классов CSS. Браузер не обязан объединять их в одно свойство padding. Иногда, в простейших случаях, когда свойство задано сразу целиком, getComputedStyle сработает для сокращённого свойства, но не во всех браузерах
- 2. Нет доступа к стилю посещенных ссылок
- getComputedStyle не дает доступ к этой информации, чтобы произвольная страница не могла определить, посещал ли пользователь ту или иную ссылку
- Кроме того, большинство браузеров запрещают применять к :visited CSS-стили, которые могут изменить геометрию элемента, чтобы даже окольным путем нельзя было это понять. В целях безопасности

## Пример

```js
button.addEventListener('click', () => { box.style.transform =
  'translateX(1000px)'; box.style.transition = 'transform 1s ease-in-out';
  getComputedStyle(box).transform; // +++ box.style.transform =
  'translateX(500px)'; })
```
