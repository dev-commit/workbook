# create()

./src/store/store.ts

## Один файл store.ts

```js
import { create } from "zustand"

export interface IStore {
  name: string
  setName: (name: string) => void
}

const useStore = create<IStore>((set, get) => ({
  name: "",
  setName: (name: string) => {
    set({
      name,
    })
  },
}))

export default useStore
```

## Файл для каждого элемента

- Основная директория: ./src/store
- Все функции типа createUser() хранятся в директории ./store/elements

```js
import { create } from "zustand"

import { IStoreUser, createUser } from "./elements/user"

export interface IStore extends IStoreUser {}

const useStore = create<IStore>((set, get) => {
  return {
    ...createUser(set, get),
  }
})

export default useStore
```

```js
import { TStoreGet, TStoreSet } from "../types"

export interface IStoreUser {
  name: string
  setName: (name: string) => void
}

export const createUser = (set: TStoreSet, get: TStoreGet): IStoreUser => {
  return {
    name: "",
    setName: (name: string) => {
      set({
        name,
      })
    },
  }
}
```

```js
import { IStore } from "./store"

export type TStoreGet = () => IStore
export type TStoreSet = {
  (
    partial:
      | IStore
      | Partial<IStore>
      | ((state: IStore) => IStore | Partial<IStore>),
    replace?: false,
  ): void
  (state: IStore | ((state: IStore) => IStore), replace: true): void
}
```

- Возможно, следует поправить TStoreGet
