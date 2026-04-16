# Примеры

## DOMParser

```js
$.ajax({
    type: "GET",
    url: "code.html",
    async: false,  
    success: function (data) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        document.querySelector('#code').appendChild(doc.querySelector('#code'));
    }          
});
$('#'+page+theme).load(`${page}.html #ct-${theme} > *`);
```

## Перехват закрытия вкладки сайта

```js
window.onbeforeunload = function() {
    return "Данные не сохранены. Точно перейти?";
};
window.onmousemove = function(e) {
    if (e.screenY < 120) {
        console.log(e.screenY);
    }
}
```
