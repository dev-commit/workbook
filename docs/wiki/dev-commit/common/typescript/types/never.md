# Never

## Информация

- Если функция выбрасывает ошибку
- Если функция не завершает свое выполнение

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

```ts
function infinite(): never {
  while (true) {}
}
```
