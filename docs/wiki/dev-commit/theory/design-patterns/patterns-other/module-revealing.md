# Открытый модуль

## Информация

::: tip

:::

- Открытый модуль - в паттерне назначаем свойствам возвращаемого объекта приватные функции, которые хотим сделать общедоступными

- «Открытый модуль» позволяет делать общедоступными скрытые сущности модуля (и снова скрывать их, если нужно), модифицируя, для каждой из них, лишь одну строку в объекте, возвращаемом после выполнения IIFE
- Возвращаемый объект не содержит определения функций. Всё, что находится справа от имён его свойств, определено в IIFE. Это способствует чистоте кода и упрощает его чтение

```js
const myRevealingModule = (function () {
  let privateVar = "Peter";
  const publicVar = "Hello World";
  function privateFunction() {
    console.log("Name: " + privateVar);
  }
  function publicSetName(name) {
    privateVar = name;
  }
  function publicGetName() {
    privateFunction();
  }
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  };
})();
```

```js
myRevealingModule.setName("Mark");
myRevealingModule.getName(); // Выводит Name: Mark
```
