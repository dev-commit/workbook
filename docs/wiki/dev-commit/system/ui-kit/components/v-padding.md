# v-padding

## Props

- `padding="left"` - сторона отступа 35px: `left`, `right`, `top`, `bottom`

## Варианты

### Стороны отступа

```vue
<v-padding padding="left" />
<v-padding padding="right" />
<v-padding padding="top" />
<v-padding padding="bottom" />
```

<div style="width: 500px;">
  <v-padding padding="left" style="border: 1px solid black" />
  <v-padding padding="right" style="border: 1px solid black" />
  <v-padding padding="top" style="border: 1px solid black" />
  <v-padding padding="bottom" style="border: 1px solid black" />
</div>

### С содержимым

```vue
<v-padding padding="left">Переданные данные</v-padding>
```

<div style="width: 500px;">
  <v-padding padding="left" style="border: 1px solid black">Переданные данные</v-padding>
</div>
