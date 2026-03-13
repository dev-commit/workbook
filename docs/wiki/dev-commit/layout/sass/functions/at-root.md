# Директива @at-root

## Данные

- Изымает одно или несколько правил из родительского селектора в корневой уровень документа. Можно использовать с селекторами первого уровня вложенности
- Поднимает содержимые в ней правила в корень, отменяя цепочку от родителя

## Примеры

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
.parent {
  color: red;
  @at-root .child {
    color: green;
  }
}
```

  </template>

<template #last>

```css
.parent {
  color: red;
}
.child {
  color: green;
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
.parent {
  color: red;
  @at-root {
    .child1 {
      color: green;
    }
    .child2 {
      color: orange;
    }
  }
}
```

  </template>

<template #last>

```css
.parent {
  color: red;
}
.child1 {
  color: green;
}
.child2 {
  color: orange;
}
```

</template>
</v-two>
