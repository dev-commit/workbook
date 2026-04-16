# Объект из строки

- reduceRight и создание объекта
- Реализовать функцию, принимающую строку “a.b.c.d” и возвращающая объект со свойством объектом - a, со свойством объектом - b, со свойством объектом - с, со свойством d, равным null
- Можно передать любую строку в указанном формате х.х.х.х.х.х…, и получить объект с вложенными объектами и завершающим null

### reduceRight

```js
function parse(str) {
    let arr = str.split('.');
    let obj = arr.reduceRight(function(result, current){
        return {
            [current]: result
        }
    }, null);
    return obj;
}
parse('a.b.c.d');
```

### reduce

```js
function parse(str) {
    let arr = str.split('.').reverse();
    let obj = arr.reduce(function(result, current){
        return {
            [current]: result
        }
    }, null);
    return obj;
}
parse('a.b.c.d');
```
