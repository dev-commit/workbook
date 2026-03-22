# ref

```vue
<script setup lang="ts">
import { ref } from "vue";

const refData = ref(""); // Объявление ref
refData.value = "Text"; // Обращене к ref
</script>

<template>{{ refData }}</template>
```
