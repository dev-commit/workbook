## Отрисовка списков: v-for

## Информация

::: tip `v-for`

- **v-for** - используется для отрисовки списков
- Когда присутствуют вместе на одном элементе, `v-for` имеет больший приоритет, чем `v-if`. Поэтому `v-if` будет выполняться для каждой итерации цикла
- `key` с `v-for` всегда обязателен для компонентов
- Можно использовать `of` в качестве разделителя вместо in, как в синтаксисе итераторов JavaScript:
  :::

## Варианты

### Массив

```vue
<script setup lang="ts">
const items = [
  { id: 1, name: "Tony", age: 25 },
  { id: 2, name: "Tyler", age: 27 },
  { id: 3, name: "Tom", age: 20 },
];
</script>
```

::: details Простой цикл

> Result: "Tony", "Tyler", "Tom"

```vue
<template>
  <ul>
    <li v-for="item of items" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
```

:::

::: details Цикл с index текущего элемента

> Result: "0: Tony", "1: Tyler", "2: Tom"

```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index }}: {{ item.name }}
    </li>
  </ul>
</template>
```

:::

### Объект

- Можно использовать `v-for` для итерации по свойствам объекта
- Порядок итерации будет основан на результате вызова `Object.values()` для объекта

```vue
<script setup lang="ts">
const message = {
  text: "Header",
  count: 23,
};
</script>
```

::: details Итерирование свойств объекта

> Result: "Header", "23"

```vue
<template>
  <ul>
    <li v-for="value in message">{{ value }}</li>
  </ul>
</template>
```

:::

::: details Получить название свойства (второй аргумент)

> Result: "text: Header", "count: 23"

```vue
<template>
  <ul>
    <li v-for="(value, key) in message">{{ key }}: {{ value }}</li>
  </ul>
</template>
```

:::

::: details Получить index объекта (третий аргумент)

> Result: "0. text: Header", "1. count: 23"

```vue
<template>
  <ul>
    <li v-for="(value, key, index) in message">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
</template>
```

:::

### Компоненты

- При использовании `v-for` на компонентах обязательно требуется указывать `key`

```html
<my-component v-for="item in items" :key="item.id" />
```
