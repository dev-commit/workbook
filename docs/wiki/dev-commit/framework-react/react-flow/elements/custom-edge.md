# Custom Edge

## Элементы

- **&lt;BaseEdge&gt;** - линия. Можно передать markerEnd
- **&lt;EdgeLabelRenderer&gt;** - кастомные элементов на линии

## Тип линии

### ConnectionLineType

Неизвестно что указать для "step". Нет "getStepPath"
```js
export declare enum ConnectionLineType {
  Bezier = "default",           // => getBezierPath
  Straight = "straight",        // => getStraightPath
  Step = "step",                // => 
  SmoothStep = "smoothstep",    // => getSmoothStepPath
  SimpleBezier = "simplebezier" // => getSimpleBezierPath
}
```

### Указание типа линии

```js
import {
  getBezierPath
  getSimpleBezierPath
  getSmoothStepPath
  getStraightPath
} from "reactflow"
```

## Пример

```ts
import { BaseEdge, EdgeLabelRenderer, getStraightPath } from "reactflow"

interface IEdgeLabelProps {
  id: string
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  source: string
  target: string
  markerEnd?: string
}

const CustomEdge: React.FC<ICustomEdgeProps> = (props) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    // source: nodeSource,
    // target: nodeTarget,
    markerEnd,
  } = props

  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY });

  const styleCenter = {
    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`
  }
  const onClick = () => {}

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <button
          style={styleCenter}
          className={cn("nodrag", "nopan")}
          onClick={onClick}
        />
      </EdgeLabelRenderer>
    </>
  )
}

export default CustomEdge
```

```js
import CustomEdge from "./CustomEdge"

const edgeTypes: EdgeTypes = {
  'custom-edge': CustomEdge,
}

const edgeOptions = {
  // type: 'step',
  type: 'custom-edge',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 25,
    height: 25,
    color: "#FF0072",
  },
}

const App  = () => {
  return (
    <ReactFlow
      edgeTypes={edgeTypes}
      defaultEdgeOptions={edgeOptions}
    />
  )
}
```

```js
export const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    target: "node-2",
    type: 'custom-edge',
  },
]
```
