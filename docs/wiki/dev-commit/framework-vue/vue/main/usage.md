# Использование

## Струтура проекта

```
📂 src
├── 📂 assets
│   › icon.png
│   › main.css
├── 📂 components
│   › Header.vue
├── App.vue
└── main.js
```

## Код

::: details main.js

```ts
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).mount("#app");
```

:::

::: details App.vue

```vue
<template>
  <div id="app">
    <img src="./assets/icon.png" width="200" />
    <h1>Text App</h1>
    <h2>{{ text }}</h2>
    <Header message="Text Header" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";

const text = ref("Text in Vue");

function testMethod() {
  //
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

:::

::: details components/Header.vue

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Text in Header");

defineProps({
  message: String,
});

// defineProps({
// 	details: { type: Boolean, required: false },
// });
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
```

:::
