# v-model

::: tip `v-model`

- **v-model** - создает двустороннее связывание с элементом ввода формы или с компонентом
- Применения для элементов: `<input>`, `<select>`, `<textarea>`, компоненты

:::

## Варианты

### `input`

```vue
<script setup>
import { ref } from "vue";

const message = ref("");
</script>

<template>
  <p>{{ message }}</p>

  <!-- Ручная привязки значений и обработчиков событий -->
  <input :value="message" @input="(event) => (message = event.target.value)" />

  <!-- Использование v-model (аналогичный результат)  -->
  <input v-model="message" />
</template>
```

### `checkbox`

```vue
<script setup>
import { ref } from "vue";

const view = ref(false);
</script>

<template>
  <label>
    <input type="checkbox" v-model="view" />
    {{ view }}
  </label>
</template>
```

## Модификаторы

- `.lazy` - отслеживание события change вместо input
- `.number` - приведение корректной строки со значением к числу
- `.trim` - удаление пробелов в начале и в конце строки

```vue
<script setup>
import { ref } from "vue";

const message = ref(" Hello ");
</script>

<template>
  <p>{{ message }}</p>
  <!-- Удаление пробелов -->
  <input type="text" v-model.trim="message" />
</template>
```
