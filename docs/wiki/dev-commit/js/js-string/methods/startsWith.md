# startsWith()

## Информация

::: info

- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith - MDN

:::

::: danger

**`str.startsWith(searchString, position)`** - метод помогает определить, начинается ли строка с символов, указанных в скобках, возвращая, соответственно, true или false

> - `searchString*` - символы, искомые в начале данной строки
> - `position` - позиция в строке, с которой начинать поиск searchString; по умолчанию 0
> - _return_ - true или false

:::

## Пример

```js
const str = "Быть или не быть, вот в чём вопрос.";

console.log(str.startsWith("Быть")); // true
console.log(str.startsWith("не быть")); // false
console.log(str.startsWith("не быть", 9)); // true
```
