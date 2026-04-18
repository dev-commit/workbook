# useStore()

### Простой вариант

```js
import useStore from "../store/store"

const App: React.FC = () => {
  const name = useStore((state) => state.name)
  const setName = useStore((state) => state.setName)
  //
}
```

### Селектор

```js
import { useShallow } from "zustand/react/shallow"
import useStore, { IStore } from "../store/store"

const selector = (state: IStore) => ({
  name: state.name,
  setName: state.setName,
})

const App: React.FC = () => {
  const { name, setName } = useStore(useShallow(selector))
  //
}
```
