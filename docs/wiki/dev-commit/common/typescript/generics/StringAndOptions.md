# Дженерик StringAndOptions

```ts
// StringAndOptions - не встроенный тип, его нужно объявить.
// Позволяет передать любую строку и сохраняет подсказки вариантов в IDE
type StringAndOptions<T extends string> = T | (string & {});

export type BadgeProps = {
  // Некорректно (будет приводить к строке)
  iconPosition?: "left" | "right" | string;
  // Корректно
  iconPosition?: StringAndOptions<"left" | "right">;
};
```
