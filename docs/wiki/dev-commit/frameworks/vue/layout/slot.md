# &lt;slot&gt;

## Варианты

### Именованный слот

```html
<!-- Вызов компонента -->
<v-component>
  <template #first>Передаваемые данные</template>
</v-component>

<!-- Компонент -->
<template>
  <div>
    <slot name="first">Hello</slot>
  </div>
</template>
```

### Default Slot

```html
<!-- Вызов компонента -->
<v-component>Передаваемые данные</v-component>

<!-- Компонент -->
<template>
  <div>
    <slot>Default</slot>
  </div>
</template>
```
