# useSWR()

Запускается автоматически

URL для запроса
Асинхронная функция, в которой происходит запрос. Принимает URL, переданный первым аргументом в useSWR
(опционально) объект со свойствами
`{ data, error, isLoading, mutate }`

#### Return

- data - данные, возвращенные от API (или undefined, если не загружено)
- error - ошибка, выданная fetcher (или undefined)
- isLoading - статус загрузки: при совершении запроса будет true, после завершения запроса - false. Если есть текущий запрос и нет «загруженных данных». Резервные данные и предыдущие данные не считаются «загруженными данными»
- isValidating - если запрос или ревалидация загружается
- mutate(data?, options?) - функция для мутации закешированных данных

## Аргументы

::: info

- https://swr.vercel.app/ru/docs/arguments
  :::

- По умолчанию key будет передан в fetcher в качестве аргумента

```js
// Выражения эквивалентны
useSWR("/api/user", () => fetcher("/api/user"));
useSWR("/api/user", (url) => fetcher(url));
useSWR("/api/user", fetcher);
```

## Примеры

### Базовый пример

```js
interface ISampleModel {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useSample = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    async (url): Promise<ISampleModel> => {
      const res = await fetch(url)
      return await res.json()
    },
  )

  return {
    data,
    error,
    isLoading,
  }
}
```

```js
import { useSample } from "./api/sample";

const App = () => {
  const { data, error, isLoading } = useSample();

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>Hi, {data.title}</div>;
};
```

```js
console.log(data)
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
```
