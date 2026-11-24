# v-breadcrumbs

## Props

- `:items="['Ctrl', 'Shift', 'P']"` - элементы цепочки
- `keys` - разделитель `+` вместо `➝` (для сочетаний клавиш)

---

- `text="комментарий"` - комментарий после цепочки

## Варианты

### Путь

```vue
<v-breadcrumbs :items="['Ctrl', 'Shift', 'P']" />
```

<v-breadcrumbs :items="['Ctrl', 'Shift', 'P']" />

### Сочетание клавиш

```vue
<v-breadcrumbs keys :items="['Ctrl', 'Shift', 'P']" />
```

<v-breadcrumbs keys :items="['Ctrl', 'Shift', 'P']" />

### С комментарием

```vue
<v-breadcrumbs keys :items="['Ctrl', 'Shift', 'P']" text="комментарий" />
```

<v-breadcrumbs keys :items="['Ctrl', 'Shift', 'P']" text="комментарий" />
