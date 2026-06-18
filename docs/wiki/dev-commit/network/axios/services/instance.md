# Создание instance

## Директории

```bash
📂 services
  › init.ts
```

## Пример

> services/init.ts

```js
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://website/api/",
  // timeout: 1000,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
});
```

## Init Function

> init.ts

```js
const init = (): AxiosInstance => {
  const accessToken = TokenStorage.get().access;

  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { common: { Authorization: accessToken } },
    paramsSerializer: params => qs.stringify(params),
  });

  // client.interceptors.response.use();

  return client;
}
```
