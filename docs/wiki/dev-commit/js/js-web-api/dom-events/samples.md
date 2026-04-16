# Обработчики событий (примеры)

```js
// полная загрузка страницы
window.onload = function() {
	//
}
```

```bash
# использование значения keyCode событий - устаревшая практика
# и может не поддерживаться в новых браузерах
```

```js
// обработка нажатия кнопки и вывод ее кода
window.onkeydown = function(event) {
	console.log(event.keyCode);
}
```

```js
// отслеживание изменения hash
window.onhashchange = function() {
    const a = location.hash.slice(1);
}
```

```js
// click на элемент
element.onclick = function() {
	//
}
```

```js
// выбрать все input и повесить обработчик focus
const items = document.querySelectorAll('.item');

for(let i=0; i<=items.length-1; i++) {
	items[i].addEventListener('focus', function() {
		this.style.border = '2px solid blue';
	})
}
```
