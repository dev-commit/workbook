# Использование

::: info
https://reactflow.dev/learn/layouting/layouting#dagre
https://reactflow.dev/examples/layout/dagre
:::

#### Базовый пример без Dagre

```js
import { useCallback } from "react"
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
} from "reactflow"
import "reactflow/dist/style.css"

import { initialNodes, initialEdges } from "./initialState"

const style = { width: "600px", height: "600px", border: "1px solid" }

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  )

  return (
    <div style={style}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  )
}

export default App
```

#### Использование Dagre

```js
import { useCallback } from "react"
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
  Panel,
} from "reactflow"
import "reactflow/dist/style.css"

// import { initialNodes, initialEdges } from "./initialState"
import { dagreNodes, dagreEdges, getDagreLayoutedElements } from "./dagreState"

const style = { width: "600px", height: "600px", border: "1px solid" }

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(dagreNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(dagreEdges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  )
  const onDagreLayout = useCallback(
    (direction: string) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getDagreLayoutedElements(nodes, edges, direction)

      setNodes([...layoutedNodes])
      setEdges([...layoutedEdges])
    },
    [nodes, edges, setNodes, setEdges],
  )
return (
    <div style={style}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Panel position="top-right">
          <button onClick={() => onDagreLayout("TB")}>Vertical layout</button>
          <button onClick={() => onDagreLayout("LR")}>Horizontal layout</button>
        </Panel>
</ReactFlow>
    </div>
  )
}

export default App
```

## Общие файлы

```js
import { Node, Edge } from "reactflow"

const edgeType = "straight"

export const initialNodes: Node[] = [
  {
    id: "node-1",
    type: "input",
    data: { label: "Start" },
    position: { x: 100, y: 100 },
  },
  {
    id: "node-2",
    data: { label: "Middle" },
    position: { x: 150, y: 200 },
  },
  {
    id: "node-3",
    type: "output",
    data: { label: "End" },
    position: { x: 200, y: 300 },
  },
]

export const initialEdges: Edge[] = [
  { id: "edge-1", source: "node-1", target: "node-2", type: edgeType },
  { id: "edge-2", source: "node-2", target: "node-3", type: edgeType },
]
```

```js
import { Node, Edge, Position } from "reactflow"
import Dagre from "@dagrejs/dagre"

import { initialNodes, initialEdges } from "./initialState"

const dagreGraph = new Dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 172
const nodeHeight = 36

export const getDagreLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = "TB",
) => {
  const isHorizontal = direction === "LR"
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  Dagre.layout(dagreGraph)

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? Position.Left : Position.Top
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2 + 20,
      y: nodeWithPosition.y - nodeHeight / 2 + 20,
    }

    return node
  })

  return { nodes, edges }
}

const { nodes: dagreNodes, edges: dagreEdges } = getDagreLayoutedElements(
  initialNodes,
  initialEdges,
)

export { dagreNodes, dagreEdges }
```
