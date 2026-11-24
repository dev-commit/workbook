# v-sandbox

## Props

- `url="https://…"` - ссылка на пример
- `title="Hello"` - текст ссылки (по умолчанию «Code Sample»)

---

- `codesandbox` - оформление CodeSandbox, текст ссылки по умолчанию «CodeSandbox»
- `codepen` - оформление CodePen, текст ссылки по умолчанию «CodePen»

## Варианты

### Ссылка

<v-two>
<template #first>

```vue
<v-sandbox url="#" />
<v-sandbox url="#" title="Hello" />
```

</template>
<template #last>

<v-sandbox url="#" />
<v-sandbox url="#" title="Hello" />

</template>
</v-two>

### CodeSandbox

<v-two>
<template #first>

```vue
<v-sandbox url="#" codesandbox />
```

</template>
<template #last>

<v-sandbox url="#" codesandbox />

</template>
</v-two>

### CodePen

<v-two>
<template #first>

```vue
<v-sandbox url="#" codepen />
<v-sandbox url="#" codepen title="Hello" />
```

</template>
<template #last>

<v-sandbox url="#" codepen />
<v-sandbox url="#" codepen title="Hello" />

</template>
</v-two>
