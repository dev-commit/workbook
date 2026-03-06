# defineComponent, setup

## `<script setup>`

> Новый формат

```vue
<script setup lang="ts">
//
</script>
```

## `defineComponent`

> Старый формат

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
