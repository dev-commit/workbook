# Services

src/services/user/user.ts

```js
export const get = async (id: string): Promise => {}
export const create = async (payload: any): Promise => {}
export const update = async (id: string, payload: any): Promise => {}
export const remove = async (id: string): Promise => {}
export const getList = async (params: any = {}): Promise => {}
```

src/services/user/types.ts

#### interfaces

- IUserModel
- ICreatePayload
- IUserProperties

#### Responses

- IGetResponse
- ICreateResponse
- IUpdateResponse

#### Params

- IUserFilterParams
- IUserSearchParams
