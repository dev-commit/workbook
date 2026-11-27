# Nodes

## type

- _default_ - edge top, bottom
- _input_ - edge bottom
- _output_ - edge top
- _group_ - нет edge, нет label. Как-то по-другому используется

```jsx
export const initialNodes = [
  {
    id: "node1",
    // type: "default" | "input" | "output" | "group",
    position: { x: 100, y: 100 },
    data: { label: "Node 1" },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "node2",
    position: { x: 100, y: 100 },
    data: {
      label: <span style={{ color: "yellowgreen" }}>Node 2</span>,
    },
  },
];
```
