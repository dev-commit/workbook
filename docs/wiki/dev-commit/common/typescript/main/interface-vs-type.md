# Отличие Interface от Type

## 1. Тип может быть примитивом

- Интерфейсы - только объекты
- Типы - объекты и примитивы

<v-two :title="['type', 'interface']">
<template #first>

```ts
// Примитив
type a = string;

// Объект
type A = {
  id: number;
};
```

</template>
<template #last>

```ts
// Только объект
interface A {
  id: number;
}
```

</template>
</v-two>

## 2. Возможности `type`

```ts
type A = { x: number } | number; // Альтернативные варианты
type A = TypeB & TypeC; // Комбинация типов
type A = TypeB; // Присвоение другого типа
```

## 3. Возможности `interface`

```ts
interface A {
  x: number;
}

// Расширение
interface B extends A {
  y: string;
}
```

```ts
interface A {
  x: number;
}

// Дополнение
interface A {
  y: number;
}
```
