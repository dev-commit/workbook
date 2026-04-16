# Размеры и прокрутка страницы

```js
let a = document.documentElement.clientWidth; // ширина минус прокрутка
let a = window.innerWidth;                    // вся ширина окна
```

### clientWidthиclientHeight

- **clientWidth/Height** - ширина/высота видимой области окна
- Если есть полоса прокрутки, возвращают именно ширину/высоту внутри неё, доступную для документа

<!-- <img src="../@img/document-client-width.png" width="450px"/> -->

```js
const a = document.body.clientWidth;             // ширина документа (если body margin:0, совпадает с innerWidth)
const a = document.body.clientHeight;            // высота документа (по контенту body)

const a = document.documentElement.clientWidth;  // ширина документа (совпадает с innerWidth)
const a = document.documentElement.clientHeight; // высота документа (совпадает с innerHeight)
```

### innerWidthиinnerHeight

- **innerWidth/Height** - хранят текущий размер окна браузера
- Если есть полоса прокрутки, игнорируют её наличие

```js
const a = window.innerWidth;  // ширина
const a = window.innerHeight; // высота
```

## Получение текущей прокрутки

- Свойства можно только читать, а менять нельзя

    текущая прокрутка сверху
    

    текущая прокрутка слева
    

## Изменение прокрутки: scrollTo, scrollBy, scrollIntoView

- Чтобы прокрутить страницу при помощи JavaScript, её DOM должен быть полностью загружен

    прокручивает страницу относительно текущих координат
    
координата
координата

    прокручивает страницу к указанным координатам относительно документа. Абсолютные координаты. Эквивалентен установке свойств scrollLeft/scrollTop. Координаты (0,0) - прокрутка в начало документа
    
координата
координата

	вызывается на элементе и прокручивает страницу так, чтобы элемент оказался вверху, если параметр top равен true, и внизу, если top равен false. Причем, если параметр top не указан, то он считается равным true
    
параметр: true (элемент вверху); false (элемент внизу)

## Примеры

### Ширина/высота страницы с учётом прокрутки

- documentElement.scrollWidth/scrollHeight работает некорректно

```js
const scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
alert( 'Высота с учетом прокрутки: ' + scrollHeight );
```
