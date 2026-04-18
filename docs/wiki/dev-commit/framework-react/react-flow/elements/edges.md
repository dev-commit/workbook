# Edges

- id - ID линии
- source - От какого Node выходит
- target - В какой Node приходит
- label - Метка
- type - Тип линии ("step" | "...")
- animated - Анимированная пунктирная линия (true | false)
- sourceHandle - К какому именно входу коннектится (сверху, снизу, справа, слева)

```js
export const initialEdges = [
  {
    id: "edge1",
    source: "node1",
    target: "node2"
  },
  {
    id: "edge2",
    source: "node2",
    target: "node3",
    type: "step",
    label: "to the",
  },
];
```
