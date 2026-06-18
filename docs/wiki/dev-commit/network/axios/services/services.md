# Сервисы

## Директории

```bash
📂 services
  📂 name
    › types.ts
    › name.ts
```

## Создание instance

> На примере API для "users"

```ts
import * as t from "./types";
import { instance } from "../init";
const URL = "/user";
```

```ts
interface IUserModel {
  name: string;
  age: number;
}
```

## Методы

::: details get

```ts
interface IGetResponse {
  data: IUserModel;
}

export const get = async (id: string): Promise<t.IUserModel> => {
  const { data } = await instance.get<t.IGetResponse>(`${URL}/${id}`);
  return data.user;
};
```

:::

::: details list

```ts
interface IGetListResponse {
  data: IUserModel[];
}

export const getList = async (): Promise<t.IGetListResponse> => {
  const { data } = await instance.get<t.IGetListResponse>(URL);
  return data;
};
```

:::

::: details create

```ts
interface ICreatePayload {
  id: string;
}
interface ICreateResponse {
  //
}

export const create = async (
  payload: t.ICreatePayload,
): Promise<t.IUserModel> => {
  const { data } = await instance.post<t.ICreateResponse>(URL, payload);
  return data.user;
};
```

:::

::: details update

```ts
interface IUpdateResponse {
  //
}

export const update = async (
  id: string,
  payload: t.IUpdatePayload,
): Promise<t.IUserModel> => {
  const { data } = await instance.put<t.IUpdateResponse>(
    `${URL}/${id}`,
    payload,
  );
  return data.user;
};
```

:::

::: details remove

```ts
export const remove = async (id: string): Promise<void> => {
  return await instance.delete(`${URL}/${id}`);
};
```

:::

::: details search

```ts
interface ISearchParams {
  //
}
interface ISearchResponse {
  //
}

export const search = async (params: t.ISearchParams = {}): Promise => {
  const { data } = await instance.post(`${URL}/search`, params);
  return data;
};
```

:::
