# Nodes

#### type

- default - edge top, bottom
- input - edge bottom
- output - edge top
- group - нет edge, нет label. как-то по-другому используется

```js
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
            label: <span style={{color: "yellowgreen" }}>Node 2</span>,
        },
    },
];
```
