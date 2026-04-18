# useStore

### Простой вариант

```js
import useStore from "../store/store"

const App: React.FC = () => {
  const nodes = useStore((state) => state.nodes)
  const setNodes = useStore((state) => state.setNodes)
  //
}
```

### Селектор

```js
import { useShallow } from "zustand/react/shallow"
import useStore, { RFState } from "../store/store"

const selector = (state: RFState) => ({
  nodes: state.nodes,
  setNodes: state.setNodes,
})

const App: React.FC = () => {
  const { nodes, setNodes } = useStore(useShallow(selector))
  //
}
```
