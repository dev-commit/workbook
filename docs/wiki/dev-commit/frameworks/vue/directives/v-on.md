# Обработка событий: v-on

## Информация

::: tip v-on

- **v-on** - подписка на события DOM и выполнения JavaScript-кода по их наступлении
  :::

## Темы

::: info

- https://ru.vuejs.org/guide/essentials/event-handling.html#event-modifiers - Модификаторы событий
- https://ru.vuejs.org/guide/essentials/event-handling.html#key-modifiers - Модификаторы клавиш
- https://ru.vuejs.org/guide/essentials/event-handling.html#mouse-button-modifiers - Модификаторы кнопок мыши
  :::

## Варианты

::: details Простой пример

- `v-on:click` - полная запись
- `@click` - сокращенная запись

```vue
<template>
  <button v-on:click="foo">Click</button>
  <button @click="foo">Click</button>
</template>
```

---

```vue
<script setup lang="ts">
const foo = () => {
  console.log("foo");
};
</script>
```

:::

::: details Передача аргументов и `$event`

- Метод обработчика автоматически получает аргументом нативное событие DOM, которое его вызвало
- Иногда может потребоваться получить доступ к оригинальному событию DOM в инлайн-обработчике. Его можно явно передать в метод с помощью специальной переменной `$event` или воспользоваться стрелочной функцией
- `event` - нативное событие DOM

```vue
<template>
  <!-- Вызов функции без передачи аргументов -->
  <button @click="foo">Click</button>

  <!-- Передача аргумента в функцию -->
  <button @click="fooArg('Hello')">Click</button>

  <!-- Передеча аргумента и события -->
  <button @click="fooArgEvent('Hello', $event)">Click</button>
  <button @click="(event) => fooArgEvent('Hello', event)">Click</button>
</template>
```

---

```vue
<script setup lang="ts">
const foo = (event) => {
  // => <button>Click</button>
  console.log("foo", event.target);
};
const fooArg = (text) => {
  console.log(text); // => "Hello"
};
const fooArgEvent = (text, event) => {
  console.log(text); // => "Hello"
  console.log(event.target); // => <button>Click</button>
};
</script>
```

:::

::: details Отмена обычного поведения: `prevent`

```vue
<template>
  <!-- Обычный обработчик события -->
  <a href="https://ya.ru/" target="_blank" @click="submit1">Click</a>

  <!-- Использование "prevent" -->
  <a href="https://ya.ru/" target="_blank" @click.prevent="submit2">Click</a>
</template>
```

---

```vue
<script setup lang="ts">
const submit1 = (event) => {
  event.preventDefault();
  console.log("prevent");
};
const submit2 = () => {
  console.log("prevent");
};
</script>
```

:::
