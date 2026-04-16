# HTML Import

```html
<link rel="import" href="file.html">
```

```js
const link = document.querySelector('link[rel="import"]');
const importedElement = link.import.querySelector('span');
```HTML Imports => ES modules (устаревшая конструкция)
- Спецификация HTML Imports описывает, как вставить один документ в другой при помощи HTML-тега &lt;link rel="import"&gt;
- HTML, загруженный через &lt;link rel="import"&gt; имеет отдельный DOM документа, но скрипты в нём выполняются в общем контексте страницы
- Файл, загруженный через &lt;link rel="import"&gt;, обрабатывается, выполняются скрипты, строится DOM документа, но не показывается, а записывается в свойство link.import

Запускать на сервере

```js
link.import;                           // доступ снаружи
document.currentScript.ownerDocument;  // доступ из внутреннего скрипта
```

index.html

```html
<h1>Main Document</h1>

<script>
	function show() {
		const element = page.import.querySelector('h1');
		document.body.appendChild(element);
	};
</script>

<link rel="import" href="page.html" id="page" onload="show()">
```

page.html

```html
<h1>Imported Document</h1>

<script>
	// доступ к импортированному документу
    const importedDocument = document.currentScript.ownerDocument; 
    importedDocument.querySelector('h1').innerHTML = 'Changed Text';
</script>
```
