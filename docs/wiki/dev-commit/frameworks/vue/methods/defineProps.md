# defineProps (props)

## Варианты

### Базовое использование

- Для использования в `<template>` не нужно содавать константу "props", она нужна только в "script"

```vue
<template>
  <!-- Не нужно использовать props.name в template -->
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

const props = defineProps<Props>();

// Использовать props в script
const a = props.name;
</script>
```

### Использование `v-bind`

**Передача boolean**

```vue
<!-- Передать "true" -->
<HelloWorld isDarkTheme />

<!-- Передать "false", нужно использовать v-bind -->
<HelloWorld :isDarkTheme="false" />
```

**Передача массива**

```vue
<v-two :title="['Vue 3', 'Vue 2']" />
```

```vue
<template>
  <div>
    <div>{{ titleLeft }}</div>
    <div>{{ titleRight }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title?: string[];
}

const props = defineProps<Props>();

const titleLeft = computed(() => props.title?.[0] ?? "");
const titleRight = computed(() => props.title?.[1] ?? "");
</script>
```

### Формат props

- Название props внутри компонента: _isDarkTheme_
- Props можно указывать в двух форматах

```vue
<App :isDarkTheme="false" />
<App :is-dark-theme="false" />
```
