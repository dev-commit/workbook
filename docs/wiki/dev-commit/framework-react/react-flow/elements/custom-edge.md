# Custom Edge

::: warning

- Код написан для React Flow v11. В v12 пакет `reactflow` переименован в `@xyflow/react`

:::

## Элементы

- `<BaseEdge>` - линия. Можно передать _markerEnd_
- `<EdgeLabelRenderer>` - кастомные элементы на линии

## Тип линии

### ConnectionLineType

- Для "step" отдельной функции нет (`getStepPath` не существует): линия step - это `getSmoothStepPath` с `borderRadius: 0` (без скругления углов)

```ts
export declare enum ConnectionLineType {
  Bezier = "default", // => getBezierPath
  Straight = "straight", // => getStraightPath
  Step = "step", // => getSmoothStepPath({ ..., borderRadius: 0 })
  SmoothStep = "smoothstep", // => getSmoothStepPath
  SimpleBezier = "simplebezier", // => getSimpleBezierPath
}
```

### Указание типа линии

```js
import {
  getBezierPath,
  getSimpleBezierPath,
  getSmoothStepPath,
  getStraightPath,
} from "reactflow";
```

## Пример

::: code-group

```tsx [CustomEdge.tsx]
import cn from "classnames";
import { BaseEdge, EdgeLabelRenderer, getStraightPath } from "reactflow";

interface ICustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  source: string;
  target: string;
  markerEnd?: string;
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
  } = props;

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  // position: absolute - чтобы кнопка встала в центр линии,
  // pointerEvents: all - чтобы по ней можно было кликнуть
  const styleCenter: React.CSSProperties = {
    position: "absolute",
    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
    pointerEvents: "all",
  };
  const onClick = () => {};

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
  );
};

export default CustomEdge;
```

```tsx [App.tsx]
import CustomEdge from "./CustomEdge";

const edgeTypes: EdgeTypes = {
  "custom-edge": CustomEdge,
};

const edgeOptions = {
  // type: 'step',
  type: "custom-edge",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 25,
    height: 25,
    color: "#FF0072",
  },
};

const App = () => {
  return <ReactFlow edgeTypes={edgeTypes} defaultEdgeOptions={edgeOptions} />;
};
```

```ts [initialState.ts]
export const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    target: "node-2",
    type: "custom-edge",
  },
];
```

:::
