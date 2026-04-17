# Состояние (state)

## state

```js
const store = new Vuex.Store({
    state: {
        count: 0,
        name: null
    },
    mutations: {
        changeStore(state, payload) {
            state.count = payload.count;
            state.name = payload.name;
        }
    }
})
```

## HTML

```html
<div id="app">{{count}} {{name}}<button @click="change">Изменить состояние</button>
	<component-child></component-child>
</div>
```

## Дочерний компонент

```js
const ComponentChild = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            return this.$store.state.count; // получение доступа к объекту состояния из дочернего элемента
        }
    }
}
```

## Родительский компонент

```js
const app = new Vue({
	el: '#app',
    // указание хранилища в опции «store» обеспечивает
    // доступ к нему также и во всех дочерних компонентах через this.$store
	store,
	components: { 
        'component-child': ComponentChild 
    },
	methods: {
		change() {
			store.commit('changeStore', {count:77, name:'Tony'}); // изменение состояния
		}
	},
	computed: {
		count() { return store.state.count; }, // получение доступа к объекту состояния
		name()  { return store.state.name; }   // получение доступа к объекту состояния
	}
});
```
