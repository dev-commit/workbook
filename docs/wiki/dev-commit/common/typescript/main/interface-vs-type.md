# Отличие Interface от Type

## 1. Тип может быть примитивом

- Интерфесы - только объекты
- Типы - объекты и примитивы

#### type

```js
// Примитив
type a: string;

// Объект
type A = {
  id: number;
}
```

#### interface

```js
// Только объект
interface A {
  id: number;
}
```

## 2. Возможностиtype

```js
type A = { x: number } | number; // альтернативные варианты
type A = TypeB & TypeC;          // комбинация типов
type A = TypeB;                  // присвоение другого типа
```

## 3. Возможностиinterface

```js
interface A { x: number }
interface B extends A { y: string } // Расширение
```

```js
interface A { x: number }
interface A { y: number } // Дополнение
```
