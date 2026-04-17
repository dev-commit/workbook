# defineEmits (emits)

## Варианты

### Главный компонент

```vue
<template>
  <App @copy="checkCopy($event)" />
</template>

<script setup lang="ts">
const checkCopy = (data) => {
  //
};
</script>
```

### Дочерний компонент

```vue
<template>
  <!-- Вызов из template -->
  <button @click="$emit('copy', 'Hello')"></button>
</template>

<script setup lang="ts">
const emit = defineEmits(["copy"]);
// Вызов из script
emit("copy", "Hello");
</script>
```
