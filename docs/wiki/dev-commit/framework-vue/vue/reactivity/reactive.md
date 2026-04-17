# reactive()

## Информация

::: tip `reactive`

- **reactive** - в отличие от `ref`, который оборачивает внутреннее значение в специальный объект, `reactive()` делает сам объект реактивным

- Ограниченные типы значений: работает только для типов объектов (_objects_, _arrays_, и типы коллекций такие как _Map_ и _Set_). Он не может удерживать примитивные типы такие как string, number или boolean.

- `reactive()` преобразует объект в глубину: вложенные объекты также оборачиваются `reactive()` при обращении к ним

  :::

## Пример

```vue
<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });
</script>

<template>
  <button @click="state.count++">
    {{ state.count }}
  </button>
</template>
```
