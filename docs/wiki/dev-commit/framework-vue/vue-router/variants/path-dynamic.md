# Динамический путь

## Код

```vue
<!-- Неименованный путь -->
<router-link :to="'/catalog/' + i">Подробнее</router-link>

<!-- Именованный путь -->
<router-link :to="{ name: 'product', params: { id: i } }">
  Подробнее
</router-link>
```

```js
const routes = [
  // Неименованный путь
  { path: '/catalog/:id', component: Product }
  // Именованный путь
  { path: '/catalog/:id', component: Product, name: 'product' }
]
```

```vue
<template>
  <span>{{ $route.params.id }}</span>
</template>
```

```js
export default {
  created() {
    console.log(this.$route.params.id);
  },
};
```
