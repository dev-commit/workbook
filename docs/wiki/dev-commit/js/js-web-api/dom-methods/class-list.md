# classList

## element.classList

```js
element.classList;                            // псевдо-массив классов элемента (перебор в for)
element.classList.add('active');              // добавление класса
element.classList.remove('active');           // удаление класса
element.classList.toggle('active');           // добавление / удаление класса

const a = element.classList.contains('active'); // проверяет наличие класса (true/false)
const a = element.classList.item(0);            // вернет название класса по индексу
```
