# Методы contains и compareDocumentPosition

## Информация

- `contains` - метод для проверки является ли один узел предком другого (вложенность элементов)
- Возвращает `true`, если `parent` содержит `child` или `parent == child`

```js
const result = parent.contains(child);
```

- `compareDocumentPosition` - метод для проверки порядка узлов
- Метод предоставляет одновременно информацию и о содержании и об относительном порядке элементов

```js
const result = nodeA.compareDocumentPosition(nodeB);
```

- Возвращаемое значение - битовая маска, биты в которой означают следующее:

| Биты   | Число | Значение                                                  |
| ------ | ----- | --------------------------------------------------------- |
| 000000 | 0     | `nodeA` и `nodeB` - один и тот же узел                    |
| 000001 | 1     | Узлы в разных документах (или один из них не в документе) |
| 000010 | 2     | `nodeB` предшествует `nodeA` (в порядке обхода документа) |
| 000100 | 4     | `nodeA` предшествует `nodeB`                              |
| 001000 | 8     | `nodeB` содержит `nodeA`                                  |
| 010000 | 16    | `nodeA` содержит `nodeB`                                  |
| 100000 | 32    | Зарезервировано для браузера                              |

- Понятие «предшествует» – означает не только «предыдущий сосед при общем родителе», но и имеет более общий смысл: "раньше встречается в порядке прямого обхода дерева документа"
- Могут быть и сочетания битов. Примеры реальных значений:

```html
<p>...</p>
<ul>
  <li>1.1</li>
</ul>

<script>
  const p = document.body.children[0];
  const ul = document.body.children[1];
  const li = ul.children[0];

  // 1. <ul> находится после <p>
  let a = ul.compareDocumentPosition(p); // 2 = 10

  // 2. <p> находится до <ul>
  let a = p.compareDocumentPosition(ul); // 4 = 100

  // 3. <ul> родитель <li>
  let a = ul.compareDocumentPosition(li); // 20 = 10100

  // 4. <ul> потомок <body>
  let a = ul.compareDocumentPosition(document.body); // 10 = 1010
</script>
```

- Проверить конкретное условие, например, `"nodeA содержит nodeB"`, можно при помощи битовых операций, в данном случае: `nodeA.compareDocumentPosition(nodeB) & 16`, например:

```html
<ul>
  <li>1</li>
</ul>

<script>
  const body = document.body;
  const li = document.body.children[0].children[0];

  if (body.compareDocumentPosition(li) & 16) {
    alert(body + " содержит " + li);
  }
</script>
```
