# Edges

- _id_ - ID линии
- _source_ - От какого Node выходит
- _target_ - В какой Node приходит
- _label_ - Метка
- _type_ - Тип линии ("step" | "...")
- _animated_ - Анимированная пунктирная линия (true | false)
- _sourceHandle_ - К какому именно выходу (Handle) коннектится (сверху, снизу, справа, слева)

```js
export const initialEdges = [
  {
    id: "edge1",
    source: "node1",
    target: "node2",
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
