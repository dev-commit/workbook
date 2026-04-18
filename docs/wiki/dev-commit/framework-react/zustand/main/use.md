# Использование

```js
import { create } from "zustand"

export interface IStore {
  name: string
  setName: (name: string) => void
  age: number
}

const useStore = create<IStore>((set, get) => ({
  name: "",
  age: 23,
  setName: (name: string) => {
    // Получили данные из другого состояния (если нужно)
    const age = get().age
    set({
      // Изменили данные текущего состояния
      name: name + age,
    })
  },
}))

export default useStore
```

```js
import useStore from "../store/store"

const App = () => {
  const name = useStore((state) => state.name)
  const setName = useStore((state) => state.setName)

  const onClick = () => {
    setName("Tony") // => "Tony23"
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={onClick}>Click</button>
    </>
  )
}

export default App
```
