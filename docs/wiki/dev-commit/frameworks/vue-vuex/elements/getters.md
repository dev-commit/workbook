# Геттеры (getters)

## Установка геттера в Vuex.Store

```js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        storeCount(state) {
            return state.count
        }
    }
})
```

## Чтение геттера

```js
<template>
    <div class="container">Корзина покупок{{ count }}</div>
</template>
```

```js
<script>
export default {
    computed: {
        count() {
            return this.$store.getters.storeCount
        }
    }
}
</script>
```

## Чтение геттера (mapGetters)

```html
<template>
    <div class="container">Корзина покупок{{ storeCount }}</div>
</template>
```

```js
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
    	// смешиваем результат mapGetters с внешним объектом computed
        ...mapGetters([
            'storeCount'
        ])
    }
}
</script>
```

```js
// указание другого имени
export default {
    computed: {
        ...mapGetters({
            count: 'storeCount'
        })
    }
}
```
