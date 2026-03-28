# defineComponent(), setup

## Composition API `<script setup>`

::: tip Composition API

- **Composition API** - определяет логику компонента, используя импортированные функции API
- _Новый формат_
  :::

```vue
<script setup lang="ts">
//
</script>
```

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
