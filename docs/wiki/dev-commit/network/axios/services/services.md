# Сервисы

Используется AXIOS

## Создание instance

## Services

- На примере API для "users"

📂 services
  📂 name
    › types.ts
    › name.ts

```js
import * as t from './types'
import { instance } from "../init"
const URL = '/user'
```

```js
interface IUserModel {
  name: string
  age: number
}
```

### get

```js
interface IGetResponse {
  data: IUserModel
}

export const get = async (id: string): Promise<t.IUserModel> => {
  const { data } = await instance.get<t.IGetResponse>(`${URL}/${id}`)
  return data.user
};
```

### list

```js
interface IGetListResponse {
  data: IUserModel[]
}

export const getList = async (): Promise<t.IGetListResponse> => {
  const { data } = await instance.get<t.IGetListResponse>(URL)
  return data
};
```

### create

```js
interface ICreatePayload {
    id: string
}
interface ICreateResponse {
    //
}

export const create = async (payload: t.ICreatePayload): Promise<t.IUserModel> => {
  const { data } = await instance.post<t.ICreateResponse>(URL, payload);
  return data.user;
}
```

### update

```js
interface IUpdateResponse {
  //
}

export const update = async (
  id: string,
  payload: t.IUpdatePayload,
): Promise<t.IUserModel> => {
  const { data } = await instance.put<t.IUpdateResponse>(`${URL}/${id}`, payload)
  return data.user;
}
```

### remove

```js
export const remove = async (id: string): Promise<void> => {
  return await instance.delete(`${URL}/${id}`);
}
```

### search

```js
interface ISearchParams {
  //
}
interface ISearchResponse {
  //
}

export const search = async (params: t.ISearchParams = {}): Promise => {
  const { data } = await instance.post(`${URL}/search`, params)
  return data
};
```
