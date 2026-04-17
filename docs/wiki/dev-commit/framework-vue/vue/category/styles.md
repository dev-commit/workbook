# Стилизация

## `<style>`

::: info Документация

- https://ru.vuejs.org/api/sfc-css-features.html#scoped-css - CSS с ограниченной областью действия ы
- https://ru.vuejs.org/api/sfc-css-features.html#css-modules - CSS модули
  :::

### Параметры

- `scoped` - стили инкапсулированы внутри компонента
- `lang="scss"` - использование препроцессора scss
- `module` - компилируется как CSS модуль и объявляет результирующие CSS-классы компоненту в виде объекта под ключом _$style_

```vue
<style scoped lang="scss">
div {}
<style>
```

## `v-bind()` внутри CSS

- Фактическое значение будет скомпилировано в хэшированное пользовательское свойство CSS, поэтому CSS остаётся статичным. Пользовательское свойство будет применяться к корневому элементу компонента с помощью inline-стилей и реактивно обновляться при изменении исходного значения.

::: details Пример

```vue
<script setup>
import { ref } from "vue";
const theme = ref({
  color: "blue",
});
</script>

<template>
  <p>привет</p>
</template>

<style scoped>
p {
  color: v-bind("theme.color");
}
</style>
```

:::

## `class`

### Примеры задания нескольких классов с вычисленным значением

::: details Пример 1

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

:::

::: details Пример 2

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

:::
