# Подключение через `<script>`

## Код

### Подключение

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

### index.html

```html
<div id="app">
  <router-link to="/home">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</div>

<script src="index.js"></script>
```

### index.js

```js
const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
```
