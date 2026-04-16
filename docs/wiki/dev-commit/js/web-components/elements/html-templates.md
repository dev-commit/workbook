# `Шаблоны <template>`

```html
<template>
    ****
</template>
```

```js
const template = document.querySelector('template');
const templateContent = document.importNode(template.content, true);
templateContent.querySelector('strong').innerText = 'Hello';
console.log(templateContent); // => **Hello**
```
- Элемент &lt;template&gt; предназначен для хранения «образца» разметки, невидимого и предназначенного для вставки куда-либо. Содержимое читается находящимся вообще «вне документа»

### Пример 1

```js
element.appendChild(template.content.cloneNode(true)); // => Hi Template
```

```html
<div id="element">Hi</div>
<template id="template">Template</template>
```

### Пример 2

```html
<div class="main">
	<div class="main-header">Main Header</div>
</div>
<template id="template">
	<div class="template-header">Template Header</div>
</template>
```

```js
const template = document.getElementById('template');
const instance = document.importNode(template.content, true);

const main = document.querySelector('.main');
const header = main.querySelector('.main-header');
if (header !== null) {
	instance.querySelector('.template-header').innerHTML = header.innerHTML;
}

main.innerHTML = '';
main.appendChild(instance);
```
