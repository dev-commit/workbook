# template и slot

## Информация

::: tip `<template>`

- **&lt;template&gt;** - обёртка для разметки без лишнего DOM-узла (в рантайме этот тег сам по себе не появляется в HTML)
- Где используется: группировка нескольких корневых элементов, v-if / v-for на группе, фрагменты в SFC (в файле .vue верхний `<template>` — это просто блок разметки компонента).
  :::

::: tip `<slot>`

- **&lt;slot&gt;** - точка вставки контента от родителя в разметку дочернего компонента (content projection / composition API в смысле «составление UI»)
- Где используется: внутри дочернего компонента объявляешь
- Смысл: сюда родитель может положить свой HTML/компоненты
  :::

## Варианты

### Именованный слот

```vue
<!-- Вызов компонента -->
<v-component>
  <template #first>Передаваемые данные</template>
</v-component>

<!-- Компонент "v-component" -->
<template>
  <div>
    <slot name="first">Hello</slot>
  </div>
</template>
```

### Default Slot

```vue
<!-- Вызов компонента -->
<v-component>Передаваемые данные</v-component>

<!-- Компонент "v-component" -->
<template>
  <div>
    <slot>Default</slot>
  </div>
</template>
```
