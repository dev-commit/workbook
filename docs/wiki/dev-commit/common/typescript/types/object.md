# object

## Информация

- Тип для объектов можно задавать через _interface_ или _type_

```ts
interface IUser {
  name: string;
  age: number;
}

const user: IUser = {
  name: "Tony",
  age: 23,
};
```

## Примеры

### Перебор в цикле

```ts
const data: object = {
  query,
  status,
};

Object.keys(data).forEach((keyFilter) => {
  // Варианты убирают ошибку, но не дают тип значения: у типа object нет ключей,
  // поэтому value получает тип never (во втором варианте - тип методов Object).
  // Если не указывать data тип object, третий вариант даст тип значений data
  const value = data[keyFilter as keyof {}];
  const value = data[keyFilter as keyof Object];
  const value = data[keyFilter as keyof typeof data];
});
```
