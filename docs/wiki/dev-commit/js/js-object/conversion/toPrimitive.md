# Symbol.toPrimitive

- Алгоритм преведения изначально ищет символ @@toPrimitive в объектах для метода, который принимает предпочтительный тип и возвращает примитивное представление объекта, прежде чем вернуться к использованию методов объекта valueOf() и toString()

```js
const object1 = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 42;
        }
        return null;
    }
};

console.log(+object1);
// Expected output: 42
```
