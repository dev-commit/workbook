# Стилизация

## `class`

### Задание нескольких классов с вычисленным значением

#### Пример 1

```vue
<template>
  <span :class="['badge', theme]"></span>
</template>

<script setup lang="ts">
interface Props {
  theme: "blue" | "red";
}

defineProps<Props>();
</script>

<style scoped>
.badge {
}
.blue {
}
.red {
}
</style>
```

#### Пример 2

```vue
<template>
  <div :class="['badge', isDarkTheme ? 'theme-dark' : 'theme-light']"></div>
</template>

<script setup lang="ts">
interface Props {
  isDarkTheme: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.badge {
}
.theme-dark {
}
.theme-light {
}
</style>
```
