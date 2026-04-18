# `<Handle />`

```js
<Handle
  type="target" // "source" | "target"
  position={Position.Top}
  isConnectable={isConnectable}
  id={id + "-top"}
  style={{ left: 50, background: "blue" }}/>;
```

## Пример

<!-- <img src="../@img/handle-sample.png" width="400px"/> -->

```js
import { NodeAction } from "./NodeAction"
import { initialNodes, initialEdges } from "./initialState.tsx"

const customNodes = {
  action: NodeAction,
}

const App = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={customNodes}
      />
  )
}
```

```js
export const initialNodes = [
  {
    id: "node1",
    type: "action",
    position: { x: 250, y: 100 },
    data: { label: "Action Top" },
  },
  {
    id: "node2",
    type: "action",
    position: { x: 250, y: 200 },
    data: { label: "Action Center" },
  },
  {
    id: "node3",
    type: "action",
    position: { x: 250, y: 300 },
    data: { label: "Action Bottom" },
  },
  {
    id: "node4",
    type: "action",
    position: { x: 50, y: 200 },
    data: { label: "Action Left" },
  },
  {
    id: "node5",
    type: "action",
    position: { x: 450, y: 200 },
    data: { label: "Action Right" },
  },
]

export const initialEdges = [
  {
    id: "edge1",
    source: "node1",
    target: "node2",
    sourceHandle: "node1-bottom",
    targetHandle: "node2-top",
  },
  {
    id: "edge2",
    source: "node2",
    target: "node3",
    sourceHandle: "node2-bottom",
    targetHandle: "node3-top",
  },
  {
    id: "edge3",
    source: "node4",
    target: "node2",
    sourceHandle: "node4-right",
    targetHandle: "node2-left",
  },
  {
    id: "edge4",
    source: "node2",
    target: "node5",
    sourceHandle: "node2-right",
    targetHandle: "node5-left",
  },
]
```

```js
import { Handle, Position } from "reactflow";

enum NodeHandlersPositionPrefix {
  Top = "-top",
  Bottom = "-bottom",
  Left = "-left",
  Right = "-right",
}

const NodeAction = (props) => {
  const { data, isConnectable, id } = props;

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        id={id + NodeHandlersPositionPrefix.Top}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        id={id + NodeHandlersPositionPrefix.Bottom}
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        id={id + NodeHandlersPositionPrefix.Left}
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        id={id + NodeHandlersPositionPrefix.Right}
      />

      {data.label}
    </div>
  );
};

export { NodeAction };
```
