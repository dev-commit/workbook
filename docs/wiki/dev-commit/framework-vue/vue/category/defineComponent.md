# defineComponent(), setup

## Composition API `<script setup>`

::: tip Composition API

- **Composition API** - определяет логику компонента, используя импортированные функции API
- _Новый формат_

  :::

### Использование

```vue
<script setup lang="ts">
//
</script>
```

### Верхнеуровневый await

- `await` верхнего уровня может быть использован внутри `<script setup>`. Полученный код будет скомпилирован как `async setup()`

```vue
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json());
</script>
```

### Использование вместе с обычной секцией `<script>`

- Можно использовать вместе с с обычной секцией `<script>`

```vue
<script>
// Обычный <script>, выполняется в области видимости модуля (только один раз)
</script>

<script setup>
// Выполняется в области видимости setup() (для каждого экземпляра)
</script>
```

---

## Options API `defineComponent`

::: tip Options API

- **Options API** - логика компонентов определяется с помощью объекта опций, таких как data, methods и mounted. Свойства, определённые в опциях, доступны через this внутри функций и указывают на экземпляр компонента
- _Старый формат_
  :::

```vue
<script lang="ts">
import { defineComponent } from "vue";
import AppComponent from "./AppComponent.vue";

export default defineComponent({
  name: "ComponentName",

  components: {
    AppComponent,
  },

  props: {
    data: {
      type: String,
      required: true,
    },
  },

  emits: ["submit", "clear"],

  setup(props, context) {
    const handleSubmit = () => {
      const a = props.data;
      context.emit("submit");
    };

    return {
      handleSubmit,
    };
  },
});
</script>
```
