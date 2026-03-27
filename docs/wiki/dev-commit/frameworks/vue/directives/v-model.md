# v-model

::: tip `v-model`

- **v-model** - двунаправленное связывание данных с элементами (н-р input и textarea)

:::

## Варианты

```vue
<input type="text" v-model="messText" />
<p>{{ messText }}</p>

<input type="checkbox" v-model="view" />
<label>{{ view }}</label>
```

Аналогично

```vue
<input type="text" @input="messText = $event.target.value" />
<p>{{ messText }}</p>
```

## Модификаторы

<!-- Удаление пробелов -->
<input type="text" v-model.trim="messText">
