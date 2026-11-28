# Дерево из объекта

## Постановка задачи

- Сложить все _valueNode_

```js
const tree1 = {
  valueNode: 3,
  next: [
    { valueNode: 1, next: null },
    { valueNode: 3, next: null },
    { valueNode: 2, next: null },
    {
      valueNode: 2,
      next: [
        { valueNode: 1, next: null },
        { valueNode: 5, next: null },
      ],
    },
  ],
};
```

## Реализация

```js
const calcTreeSum = (tree) => {
  const queue = [tree];
  let sum = 0;

  while (queue.length > 0) {
    const first = queue[0];

    sum += first.valueNode;

    if (Array.isArray(first.next)) {
      queue.push(...first.next);
    }

    queue.shift();
  }

  return sum;
};

console.log(calcTreeSum(tree1)); // 17
```
