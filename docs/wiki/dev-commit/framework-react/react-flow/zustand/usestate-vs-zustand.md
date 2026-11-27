# useState vs Zustand

::: warning

- Код написан для React Flow v11. В v12 пакет `reactflow` переименован в `@xyflow/react`, компонент `ReactFlow` импортируется по имени: `import { ReactFlow } from "@xyflow/react"`

:::

<v-two :title="['useState', 'Zustand']">
<template #first>

```tsx
import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
} from "reactflow";

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
};
```

</template>
<template #last>

```tsx
import { useCallback } from "react";
import ReactFlow, { addEdge, useEdgesState, useNodesState } from "reactflow";

import { useShallow } from "zustand/react/shallow";
import useStore from "../store/store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
});

const App = () => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    setEdges,
  } = useStore(useShallow(selector));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
};
```

</template>
</v-two>
