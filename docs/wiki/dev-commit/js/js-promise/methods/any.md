# Promise.any()

::: info

- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
  :::

## Информация

::: danger

**`Promise.any([iterable])`** - является противоположностью для _Promise.all()_

> - `iterable` - массив (или другой итерируемый объект) промисов
> - _return_ - как только один из Promise выполнится успешно, вернет единственный объект Promise со значением выполненного промиса. Если ни один из промисов не завершится успешно, то возвращённый объект Promise будет отклонён с одним из значений: массив содержащий причины ошибки (отклонения), или AggregateError

:::

## Примеры

```js
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
```
