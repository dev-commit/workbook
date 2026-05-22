# useSWRMutation()

## Информация

::: info

- https://swr.vercel.app/ru/docs/mutation.ru#useswrmutation
- https://swr.vercel.app/ru/blog/swr-v2.ru#useswrmutation
  :::

::: danger

**`useSWRMutation (url, fetcher, options)`** - Хук для удаленных мутационных запросов (например, POST, PUT, DELETE). Удаленные мутации запускаются только вручную, а не автоматически, как useSWR

> - `key` - URL для запроса
> - `fetcher(key, { arg })` - Асинхронная функция, в которой происходит запрос. принимает URL, переданный первым аргументом в useSWRMutation
> - `options` - (опционально) объект со свойствами

> - _return_ - <span v-pre>{ data, error, isMutating, trigger, reset }</span>

:::

**Возвращаемый объект**

- `data` - данные, возвращенные от API (или undefined, если не загружено)
- `error` - ошибка, выданная fetcher (или undefined)
- `isMutating` - если есть текущая удаленная мутация
- `trigger(arg, options)` - функция для запуска удаленной мутаци (выполнение запроса к API)
- `reset()` - функция для сброса состояния (data, error, isMutating)

## Данные

- **Основное назначение**: выполнение запросов, которые изменяют данные на сервере (например, создание или обновление записи)
- **Использование**: используется для выполнения операций, таких как отправка данных на сервер, с последующим обновлением кеша
- **Контекст использования**: идеально подходит для отправки данных через POST/PUT/DELETE запрос

## Варианты

### Базовый пример

::: code-group

```ts [api/sample.ts]
interface ISampleModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useSampleMutation = () => {
  const { data, error, isMutating, trigger, reset } = useSWRMutation(
    "https://jsonplaceholder.typicode.com/todos/1",
    // В "url" передается первый аргумент из useSWRMutation
    async (url): Promise<ISampleModel> => {
      const res = await fetch(url);
      return await res.json();
    },
  );

  return {
    data,
    error,
    isMutating,
    trigger,
    reset,
  };
};
```

```tsx [App.tsx]
import { useSampleMutation } from "./api/sample";

const App: React.FC = () => {
  const { trigger, isMutating, error } = useSampleMutation();

  const onClick = async () => {
    const data = await trigger();
    console.log(data);
  };

  console.log("error", error);

  return (
    <button disabled={isMutating} onClick={onClick}>
      Click
    </button>
  );
};

console.log(data);
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
```

:::

### Обработка ошибок

::: code-group

```tsx [App.tsx - Errr из Хука]
import { useSampleMutation } from "./api/sample";

const App: React.FC = () => {
  const { trigger, error } = useSampleMutation();

  const onClick = async () => {
    const data = await trigger();
    console.log(data);
  };

  // error?.message
  // error?.status
  // error?.response?.data?.detail

  return <button onClick={onClick}>Click</button>;
};
```

```tsx [App.tsx - Try / Catch]
import { useSampleMutation } from "./api/sample";

const App: React.FC = () => {
  const { trigger } = useSampleMutation();

  const onClick = async () => {
    try {
      const data = await trigger();
      console.log(data);
    } catch (e) {
      // Обработка ошибки
      console.log(e);
    }
  };

  return <button onClick={onClick}>Click</button>;
};
```

:::

### Использование `isMutating` из Хука

::: code-group

```tsx [App.tsx - Error из Хука]
import { useSampleMutation } from "./api/sample";

const App: React.FC = () => {
  const { trigger, isMutating } = useSampleMutation();

  const onClick = async () => {
    const data = await trigger();
    console.log(data);
  };

  return (
    <button disabled={isMutating} onClick={onClick}>
      Click
    </button>
  );
};
```

:::

### Передача аргументов в `trigger()`

::: code-group

```ts [api/sample.ts]
export interface IUserModel {
  id: number;
  name: string;
}

interface IFetcherArg {
  arg: {
    username: string;
  };
}

export const useSampleMutation = () => {
  const { data, error, isMutating, trigger, reset } = useSWRMutation(
    URL,
    // "_" - URL пробрасывается напрямую в fetcher
    async (_, { arg }: IFetcherArg): Promise<IUserModel> => {
      const { username } = arg;
      const { data } = await fetch(URL + `/${username}`);
      return data;
    },
  );

  return {
    data,
    error,
    isMutating,
    trigger,
    reset,
  };
};
```

```tsx [App.tsx]
import { useSampleMutation } from "./api/sample";

const App: React.FC = () => {
  const { trigger } = useSampleMutation();

  const onClick = async () => {
    const data = await trigger({ username: "Tony" });
    console.log(data);
  };

  return <button onClick={onClick}>Click</button>;
};
```

:::
