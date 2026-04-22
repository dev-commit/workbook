# path(), pathOr()

## Информация

::: tip path

- **path** - Получить значение по заданному пути
  :::

::: tip pathOr

- **pathOr** - Если данный ненулевой объект имеет значение по указанному пути, возвращает значение по этому пути. В противном случае возвращает предоставленное значение по умолчанию

:::

## Использование

```js
import { path, pathOr } from "ramda";

const event = {
  target: {
    value: 77,
  },
};

// js
const value = event.target.value;

// ramda
const value = path(["target", "value"], event);
```
