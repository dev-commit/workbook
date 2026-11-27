# Services

```ts
// src/services/user/user.ts
export const get = async (id: string): Promise<IUserModel> => {};
export const create = async (payload: any): Promise<any> => {};
export const update = async (id: string, payload: any): Promise<any> => {};
export const remove = async (id: string): Promise<void> => {};
export const getList = async (params: any = {}): Promise<any> => {};
```

## `src/services/user/types.ts`

### interfaces

- IUserModel
- ICreatePayload
- IUserProperties

### Responses

- IGetResponse
- ICreateResponse
- IUpdateResponse

### Params

- IUserFilterParams
- IUserSearchParams
