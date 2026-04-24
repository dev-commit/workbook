# Подключение через NPM

## Установка

```bash
npm i --save-dev vue-router
```

## Структура файлов

```
📂 public
    › index.html
📂 src
    › App.vue
    › main.js
› package.json
› vue.config.js
```

## Код

### vue.config.js

```js
module.exports = {
  runtimeCompiler: true,
};
```

### main.js

```js
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter);

const Foo = { template: "<div>foo1</div>" };
const Bar = { template: "<div>bar2</div>" };

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
```

### App.vue

```html
<template>
  <div id="app">
    <router-link to="/foo">Перейти к Foo</router-link>
    <router-link to="/bar">Перейти к Bar</router-link>
    <router-view></router-view>
  </div>
</template>
```
