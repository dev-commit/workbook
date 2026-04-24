# Примеры

## Пример

### vuex.js

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    storeCount(state) {
      return state.count;
    },
  },
  mutations: {
    changeCount(state, payload) {
      state.count = payload.count;
    },
  },
  actions: {
    changeCount({ commit }, count) {
      commit("changeCount", { count: count });
    },
  },
});
```

### App.vue

```vue
<template>
  <div id="app">
    {{ storeCount }}<button @click="changeCount(77)">ChangeState</button>
  </div>
</template>
```

```ts
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import {store} from './vuex.js'

export default {
  computed: {
    ...mapGetters([
      'storeCount'
    ])
  },
  methods: {
    ...mapActions([
      'changeCount'
    ])
  }
}
</script>
```
