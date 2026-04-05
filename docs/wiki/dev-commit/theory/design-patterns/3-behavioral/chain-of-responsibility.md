# Chain Of Responsibility (Цепочка обязанностей)

## Информация

::: tip

:::

- Chain Of Responsibility - позволяет последовательно вызывать набор операций у объекта
- Пример: библиотека jQuery

## Примеры

### Инкремент

```js
class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    // Возвращаем ссылка на текущий объект
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(10).add(1).add(9).sum); // => 70

const sum2 = new MySum(0);
console.log(sum2.add(1).add(2).add(3).sum); // => 6
```
