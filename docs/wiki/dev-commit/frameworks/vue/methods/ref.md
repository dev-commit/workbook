# ref

```vue
<script setup lang="ts">
import { ref } from "vue";

const refDate = ref(""); // Объявление ref
refDate.value = "Text"; // Обращене к ref
</script>

<template>{{ refDate }}</template>
```
