# classList

## element.classList

```js
element.classList; // Псевдо-массив классов элемента (перебор в for)
element.classList.add("active"); // Добавление класса
element.classList.remove("active"); // Удаление класса
element.classList.toggle("active"); // Добавление / удаление класса

const a = element.classList.contains("active"); // Проверяет наличие класса (true/false)
const a = element.classList.item(0); // Вернет название класса по индексу
```
