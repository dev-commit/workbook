# Типизация на TypeScript

## `PropType`

> В Vue 3 с TypeScript для типизации props необходимо использовать PropType. Нельзя использовать типы напрямую из TypeScript

```vue
<script setup lang="ts">
import { PropType } from "vue";

interface Method {
  name: string;
}

defineProps({
  data: {
    type: Object as PropType<Method | null>,
    required: true,
    // default: null,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
```

### Варианты для type

- `Object as PropType<Method | null>`
- `[Number, null] as PropType<number | null>`
- `[String, null] as PropType<string | null>`
- `Array as PropType<string[]>`

## `withDefaults` и `defineProps<Props>()`

```vue
<script setup lang="ts">
interface Props {
  grow?: boolean;
}

// Для задание дефолтных значений
withDefaults(defineProps<Props>(), {
  grow: false,
});

// Если не нужно задавать дефолтные значения
defineProps<Props>();
</script>
```
