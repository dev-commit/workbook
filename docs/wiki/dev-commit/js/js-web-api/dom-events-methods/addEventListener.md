# Назначение обработчиков событий

## Приоритетность событий

- DOM-свойство перебьёт Атрибут HTML
- Выведет: DOM-свойство и addEventListener
- Выведет: Атрибут HTML и addEventListener

## 1. addEventListener и removeEventListener

- Если функцию не сохранить где-либо, а просто передать в addEventListener, то потом получить её обратно, чтобы снять обработчик, будет невозможно
- Нет метода, который позволяет считать обработчики событий, назначенные через addEventListener

   	Добавление нескольких обработчиков на одно событие одного элемента
    

    Удаление обработчика события
    
имя события, например click
ссылка на функцию-обработчик или объект, содержащий метод handleEvent

		Объект options, который определяет характеристики объекта, прослушивающего событие
		
- capture (bool) - фаза, на которой должен сработать обработчик. Указывает, что события этого типа будут отправлены зарегистрированному слушателю listener перед отправкой на EventTarget, расположенный ниже в дереве DOM
- once (bool) - указывает, что слушатель должен быть вызван не более одного раза после добавления. Если true, слушатель (обработчик) автоматически удаляется при вызове
- passive (bool) - true указывает, что слушатель никогда не вызовет preventDefault(). Если все же вызов будет произведен, браузер должен игнорировать его и генерировать консольное предупреждение. Пример Улучшение производительности прокрутки с помощью passive true
- mozSystemGroup (bool) - (не стандартизировано) указывает, что слушатель должен быть добавлен в системную группу. Доступно только в коде, запущенном в XBL или в расширении Chrome

Если равно true, useCapture указывает, что пользователь желает начать захват. После инициализации захвата все события указанного типа будут отправлены в зарегистрированный listener перед отправкой в какой-либо EventTarget под ним в дереве DOM. События, восходящие вверх по дереву, не будут вызывать слушателей, которым назначено использовать захват. Значение useCapture по умолчанию равно false
(не стандартизовано, только Gecko/Mozilla) - Если равно true, слушатель будет получать сгенерированные события, посланные со страницы (по умолчанию равно false для chrome и true для обычных веб-страниц). Этот параметр доступен только в Gecko и в основном полезен для использования в дополнениях и самом браузере
undefined

```html
<button id="element">Action</button>
```

```js
function action() {
	alert(1);
}
const element = document.querySelector('#element');
element.addEventListener('click', action);
element.removeEventListener('click', action);
```

```js
// для удаления нужно передать именно ту функцию-обработчик которая была назначена
// так removeEventListener не сработает
// в removeEventListener передана не та же функция, а другая, с одинаковым кодом
element.addEventListener('click', function() {alert('ok')});
element.removeEventListener('click', function() {alert('ok')});
```

```js
// добавление нескольких обработчков на одно событие
element.onclick = () => alert('Привет из onclick');
element.addEventListener('click', () => alert('Привет'));
element.addEventListener('click', () => alert('Привет Мир'));
```

### Передача аргументов в addEventListener

```js
const elementId = 77;
const listener = (id) => {
	console.log(id);
}
li.addEventListener('click', listener.bind(null, elementId));
```

```js
const elementId = 77;
const listener = (id) => {
	return function() {
		console.log(id);
	}
}
element.addEventListener('click', listener(elementId));
```

```js
const elementId = 77;
element.addEventListener('click', (function(id) {
	return function() {
		console.log(id);
	}
})(elementId));
```

### Обработчики некоторых событий можно назначать только через addEventListener

- transitionend
- DOMContentLoaded

```js
element.ontransitionend = function() {
	alert('DOM property'); // не сработает
};

element.addEventListener("transitionend", function() {
	alert('addEventListener'); // сработает по окончании анимации
});
```
	Когда мы устанавливаем обработчик событий на объект document, мы всегда должны использовать метод addEventListener, а не document.on&lt;событие>, т.к. в случае последнего могут возникать конфликты: новые обработчики будут перезаписывать уже существующие

## Объект-обработчик: handleEvent в addEventListener

- В addEventListener можно назначать обработчиком не только функцию, но и объект с методом handleEvent
- Если addEventListener получает объект в качестве обработчика, он вызывает object.handleEvent(event), когда происходит событие

```js
element.addEventListener('click', {
	handleEvent(event) {
		//
	}
});
```

```js
class Listener {
	handleEvent(event) {
		//
	}
}

const listener = new Listener();
element.addEventListener('click', listener);
```

## 2. Атрибут HTML

```html
<button onclick="alert('action')">Action</button>
<button onclick="alert(&quot;action&quot;)">Использование двойных кавычек</button>
<button onclick="alert(this.innerHTML)">Вывести содержимое</button>
<button onclick="action()">Action</button>
```
- При создании обработчика браузером из атрибута, он автоматически создаёт функцию с телом из значения атрибута: action(). Разметка генерирует такое свойство:

```js
button.onclick = function() {
	action(); // содержимое атрибута
};
```

## 3. DOM-свойство

- Если обработчик задан через атрибут, то браузер читает HTML-разметку, создаёт новую функцию из содержимого атрибута и записывает в свойство onclick
- Обработчик хранится именно в DOM-свойстве, а атрибут – лишь один из способов его инициализации
- Так как DOM-свойство onclick, в итоге, одно, то назначить более одного обработчика так нельзя
- DOM-свойства чувствительны к регистру, поэтому необходимо использовать elem.onclick вместо elem.ONCLICK

```html
<button id="element">Action</button>
```

```js
element.onclick = function() {
	alert(1);
}
```

```js
element.onclick = action;

function action() {
	alert(1);
}
```

```js
element.onclick = null;
```

### Особенности

```js
// при нажатии на body будут ошибки,
// атрибуты всегда строки, и функция станет строкой
document.body.setAttribute('onclick', function() { alert(1) });
```

```js
element.onclick = function() { alert(1); }
// заменит предыдущий обработчик
element.onclick = function() { alert(2); }
```
