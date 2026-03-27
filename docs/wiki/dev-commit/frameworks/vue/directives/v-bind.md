# Связывание атрибутов элементов: v-bind:

::: tip `v-bind:`

- **v-bind:** - связывает входной атрибут тега или входной параметр компонента с выражением. Значение атрибута берется из переменной

:::

## Формат записи

```vue
<!-- Полная запись -->
<p v-bind:class="activeClass">Text</p>

<!-- Сокращенная запись -->
<p :class="activeClass">Text</p>
```

## Варианты

```vue
<script setup lang="ts">
const url = "";
const imageSrc = "";
const fileName = "";
</script>

<template>
  <!-- Привязка атрибута -->
  <img :src="imageSrc" width="200px" />

  <!-- Задание href для ссылки -->
  <a :href="url" target="_blank">Ссылка</a>

  <!-- Инлайн-выражение с конкатенацией строк -->
  <img :src="'/path/' + fileName" />
</template>
```

## CSS

::: details `:class`

```vue
<script setup lang="ts">
const activeClass = "active";
const isActive = true;
</script>

<template>
  <!-- Добавление класса из константы -->
  <p :class="activeClass">Text</p>

  <!-- Если isActive, то присвоится класс "active" -->
  <p :class="{ active: isActive }">Text</p>

  <!-- Массив в аргументе: применится класс "active" и "item" -->
  <p :class="[activeClass, 'item']">Text</p>
</template>

<style scoped>
.active {
  color: blue;
}
.item {
  border: 1px solid #000;
}
</style>
```

:::

::: details `:style`

```vue
<script setup lang="ts">
const size = 25;
const isActive = true;
</script>

<template>
  <div :style="{ fontSize: size + 'px', color: 'blue' }">Hello</div>
</template>

<style scoped>
.active {
  color: blue;
}
.item {
  border: 1px solid #000;
}
</style>
```

:::
