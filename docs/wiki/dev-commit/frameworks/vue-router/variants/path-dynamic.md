# Динамический путь

```html
<router-link :to="'/catalog/'+i">Подробнее</router-link>                      <!-- неименованный путь -->
<router-link :to="{name: 'product', params: {id: i}}">Подробнее</router-link> <!-- именованный путь -->
```

```js
const routes = [
    { path: '/catalog/:id', component: Product }                  // неименованный путь
    { path: '/catalog/:id', component: Product, name: 'product' } // именованный путь
]
```

```html
<template>
	<span>{{ $route.params.id }}</span>
</template>
```

```js
export default {
    created() {
        console.log(this.$route.params.id);
    }
}
```
