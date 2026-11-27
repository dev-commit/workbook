# Interface

## Информация

- Тип для объектов или классов, в котором указывается, какие поля должны присутствовать у этих объектов

## Использование

```ts
interface Rect {
  readonly id: string; // Только для чтения
  color?: string; // Необязательный параметр
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc", // Можно не задавать
};
```

```ts
// Приведение объекта к типу
const rect = {} as Rect; // Новая запись
const rect = <Rect>{}; // Старая запись
```
