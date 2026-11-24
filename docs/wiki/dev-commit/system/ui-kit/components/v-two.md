# v-two

## Props

- `:title="['Описание', 'Код']"` - заголовок
- `compare` - сравнение: заголовок левой колонки зелёный, правой - серый

---

- `fix-left` - левая колонка фиксированной ширины (200px), правая занимает оставшееся место
- `fix-right` - правая колонка фиксированной ширины (200px), левая занимает оставшееся место

---

- `text` - отступы в обеих колонках, как у блоков кода
- `text-left` - отступы только в левой колонке
- `text-right` - отступы только в правой колонке

## Структура

<v-details title="Текст">

```vue
<v-two>
  <template #first>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </template>

  <template #last>
    It has survived not only five centuries, but also the leap into electronic
  </template>
</v-two>
```

<v-two>
<template #first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template #last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>

</v-details>

<v-details title="Markdown">

> Для передачи Markdown, нужно чтобы после `<template>` и перед `</template>` была пустая строка

````vue
<v-two>
  <template #first>

  ```js
  console.log("Hello");
  ```

  </template>

  <template #last>

  - Элемент 1
  - Элемент 2

  </template>
</v-two>
````

<v-two>
<template #first>

```js
console.log("Hello");
```

</template>
<template #last>

- Элемент 1
- Элемент 2

</template>
</v-two>

</v-details>

## Варианты

<v-details title="<code>text</code>, <code>text-left</code> и <code>text-right</code>">

### Props

- Отступы внутри колонки как у блоков кода (20px сверху и снизу, 24px по бокам). Для колонок с текстом: у блоков кода свои отступы
- `text` - отступы в обеих колонках
- `text-left` / `text-right` - отступы только в левой / правой колонке, если во второй колонке код

### `text`

```vue
<v-two text>
  <template #first>

  - Элемент 1
  - Элемент 2

  </template>

  <template #last>

  Lorem Ipsum is simply dummy text of the printing and typesetting industry

  </template>
</v-two>
```

<v-two text>
<template #first>

- Элемент 1
- Элемент 2

</template>
<template #last>

Lorem Ipsum is simply dummy text of the printing and typesetting industry

</template>
</v-two>

### `text-left`

````vue
<v-two text-left>
  <template #first>

  - Элемент 1
  - Элемент 2

  </template>

  <template #last>

  ```js
  console.log("Hello");
  ```

  </template>
</v-two>
````

<v-two text-left>
<template #first>

- Элемент 1
- Элемент 2

</template>
<template #last>

```js
console.log("Hello");
```

</template>
</v-two>

</v-details>

<v-details title="<code>fix-left</code> и <code>fix-right</code>">

### Props

- `fix-left` - левая колонка фиксированной ширины (200px), правая занимает оставшееся место
- `fix-right` - правая колонка фиксированной ширины (200px), левая занимает оставшееся место

### `fix-left`

```vue
<v-two fix-left>
  ...
</v-two>
```

<v-two fix-left>
<template #first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template #last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>

### `fix-right`

```vue
<v-two fix-right>
  ...
</v-two>
```

<v-two fix-right>
<template #first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template #last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>

</v-details>

<v-details title="<code>title</code> и <code>compare</code>">

### `:title`

```vue
<v-two :title="['Vue 3', 'Vue 2']">
  ...
</v-two>
```

<v-two :title="['Vue 3', 'Vue 2']">
<template #first>

```js
console.log("Hello");
```

</template>
<template #last>

```js
console.log("Hello");
```

</template>
</v-two>

### `compare`

```vue
<v-two compare :title="['Vue 3', 'Vue 2']">
  ...
</v-two>
```

<v-two compare :title="['Vue 3', 'Vue 2']">
<template #first>

```js
console.log("Hello");
```

</template>
<template #last>

```js
console.log("Hello");
```

</template>
</v-two>

</v-details>
