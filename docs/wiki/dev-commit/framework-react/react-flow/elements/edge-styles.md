# Edge Styles

::: warning

- Код написан для React Flow v11. В v12 пакет `reactflow` переименован в `@xyflow/react`

:::

```jsx
import { ConnectionLineType } from "reactflow";

const connectionLineStyle = { stroke: "#c4c4c4" };

const edgeOptions = {
  type: "smoothstep",
  style: {
    stroke: "#2b2b2b",
  },
};

const App = () => {
  return (
    <ReactFlow
      connectionLineStyle={connectionLineStyle}
      defaultEdgeOptions={edgeOptions}
      connectionLineType={ConnectionLineType.SmoothStep}
    />
  );
};
```
