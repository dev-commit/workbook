# Web Forms

::: info
https://developer.mozilla.org/ru/docs/Web/API/File/Using_files_from_web_applications
:::

## input type="text"

```js
const a = element.value;
element.value = 'new value';
```

## input type="checkbox"

```js
const a = element.checked; 
element.checked = true;
```

```html
<input type="checkbox" onchange="func();"> 
<!-- onchange - изменение состояния -->
```

## input type="radio"

```js
const radio = document.querySelectorAll('input[type="radio"]');

for(let i=0; i<=radio.length-1; i++) {
	if(radio[i].checked) {
		const value = radio[i].getAttribute('value');
		console.log(value);
	}
}
```

```js
radio.disabled = true;
```

## select

```js
const select = document.querySelector('select');

const a = select.value;
const a = select.options[select.selectedIndex].value;
const a = select.options[select.selectedIndex].text;
```
