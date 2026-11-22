# Обработчики событий (примеры)

```js
// Полная загрузка страницы
window.onload = function () {
  //
};
```

- Использование значения keyCode событий - устаревшая практика и может не поддерживаться в новых браузерах

```js
// Обработка нажатия кнопки и вывод ее кода
window.onkeydown = function (event) {
  console.log(event.keyCode);
};
```

```js
// Отслеживание изменения hash
window.onhashchange = function () {
  const a = location.hash.slice(1);
};
```

```js
// click на элемент
element.onclick = function () {
  //
};
```

```js
// Выбрать все input и повесить обработчик focus
const items = document.querySelectorAll(".item");

for (let i = 0; i <= items.length - 1; i++) {
  items[i].addEventListener("focus", function () {
    this.style.border = "2px solid blue";
  });
}
```
