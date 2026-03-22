# v-text, v-html

## Интерполяция

> Отображение текстового содержимого

```vue
<script setup lang="ts">
import { ref } from "vue";

const refText = ref("Ref Text");
const constText = "Const Text";
</script>

<template>
  {{ constText }}
  {{ refText }}
</template>
```

## `v-text`, `v-html`

```vue
<script setup lang="ts">
const text = "Text";
const html = "<b>HTML Code</b>";
</script>

<template>
  <div v-text="text"></div>
  <div v-html="html"></div>
</template>
```
