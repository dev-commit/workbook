# Мутации (mutations)

- **Мутации** являются единственным способом изменения состояния хранилища во Vuex
- Обработчики мутаций обязаны быть синхронными. Во Vuex мутации — это синхронные транзакции

## Простые мутации

```js
const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		changeStore(state) {
			state.count++;
		}
	}
});
```

```js
const app = new Vue({
	el: '#app',
	methods: {
		change() {
			store.commit('changeStore');
		}
	}
});
```

## Мутации с нагрузкой

```js
mutations: {
    changeStore(state, payload) {
        state.count = payload.count;
        state.name = payload.name;
    }
}

methods: {
	change() {
		store.commit('changeStore', {count:77, name:'Tony'}); // изменение состояния
	}
}
```

## Объектный синтаксис

```js
store.commit({
	type: 'changeStore',
	count: 77
});
```

```js
mutations: {
	changeStore(state, payload) {
		state.count = payload.count;
	}
}
```
