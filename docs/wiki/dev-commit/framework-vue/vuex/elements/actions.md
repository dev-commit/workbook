# Действия (actions)

- Вместо того, чтобы напрямую менять состояние, действия инициируют мутации
- Действия могут использоваться для асинхронных операций
- mapActions создает локальные псевдонимы для действий в виде методов компонента

## Диспетчеризация действий

```js
export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        changeCount(state, payload) {
            state.count = payload.count;
        }
    },
    actions: {
        changeCount(context, payload) {
            context.commit('changeCount', {count:payload.count});
        }
    }
});
```

```html
<div id="app">
	<button @click="changeCount">ChangeState</button>
</div>
```

```js
import {store} from './vuex.js'

export default {
    methods: {
        changeCount() {
            store.dispatch('changeCount', {count: 77});
        }
    }
}
```

## mapActions

```js
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([
            'changeCount'
        ])
    }
}
```

## mapActions с нагрузкой

```html
<div id="app">
    <button @click="changeCount(77)">ChangeState</button>
</div>
```

```js
store = new Vuex.Store({
    actions: {
        changeCount({ commit }, count) {
            commit('changeCount', {count:count});
        }
    }
});
```

## Вернуть значение из actions

```js
store = new Vuex.Store({
    actions: {
    	addProductId({ commit }, id) {
	        commit('addProductId', {count:id});
	        return true;
	    }
    }
});
```

```js
export default {
    methods: {
		...mapActions([
			'addProductId'
		]),
        chooseProduct(id) {
            this.addProductId(id).then(response => {
            	console.log(response);
            });
        }
    }
}
```
