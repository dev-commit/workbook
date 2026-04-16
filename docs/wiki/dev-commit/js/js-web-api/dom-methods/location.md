# Open / Location

## Открытие окна

```js
const newWin = window.open('', 'Новое окно', 'width=400, height=300');
newWin.document.write('Вывод информации в новом окне');
newWin.close(); // закрыть созданное окно
```

### Переход на страницу

```js
window.open();
// 1 – какую страницу загружать 
// 2 – название окна
// 3 – опции окна
```

```js
window.location.href = 'page.html'; // переходим на страницу (на этой же странице)
window.open('page.html');           // переходим на страницу (в новой вкладке)
```
