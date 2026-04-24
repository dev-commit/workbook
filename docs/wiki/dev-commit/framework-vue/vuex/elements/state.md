# Состояние (state)

## Код

### Store

```js{2-5}
const store = new Vuex.Store({
  state: {
    count: 0,
    name: null,
  },
  mutations: {
    changeStore(state, payload) {
      state.count = payload.count;
      state.name = payload.name;
    },
  },
});
```

### Component

```html
<div id="app">
  {{count}} {{name}}
  <button @click="change">Изменить состояние</button>
  <component-child></component-child>
</div>
```

### Дочерний компонент

```js{6}
const ComponentChild = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      // Получение доступа к объекту состояния из дочернего элемента
      return this.$store.state.count;
    },
  },
};
```

### Родительский компонент

```js{5}
const app = new Vue({
  el: "#app",
  // Указание хранилища в опции «store» обеспечивает
  // Доступ к нему также и во всех дочерних компонентах через this.$store
  store,
  components: {
    "component-child": ComponentChild,
  },
  methods: {
    change() {
      store.commit("changeStore", { count: 77, name: "Tony" }); // Изменение состояния
    },
  },
  computed: {
    count() {
      return store.state.count; // Получение доступа к объекту состояния
    },
    name() {
      return store.state.name; // Получение доступа к объекту состояния
    },
  },
});
```
