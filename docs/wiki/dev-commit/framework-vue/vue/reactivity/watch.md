# watch()

::: warning

- Разобрать тему
  :::

## Информация

::: info

- https://ru.vuejs.org/api/reactivity-core.html#watch
  :::

::: tip `watch`

- **watch** - наблюдает за одним или несколькими реактивными источниками данных и вызывает функцию обратного вызова при их изменении
  :::

```vue
<script setup lang="ts">
import { ref, watch } from 'vue’

const data = ref(0)

watch(data, () => {
  //
})
</script>
```
