# Жизненный цикл компонента

## `onMounted()`

```vue
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  //
});
</script>
```

## `onUpdated()`

```vue
<script setup lang="ts">
import { ref, onUpdated } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

onUpdated(() => {
  console.log(count.value);
});
</script>

<template>
  <button @click="increment">Increment</button>
</template>
```
