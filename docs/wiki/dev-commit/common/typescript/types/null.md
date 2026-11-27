# null и undefined

```ts
let a: undefined = undefined;
let b: null = null;
```

- Фактически можно присваивать значения undefined и null переменным других типов, например, number. Но только если отключена опция `strictNullChecks` (входит в `strict`), иначе их нужно указывать в типе явно: `number | null`
- В этом плане null и undefined выступают как подтипы других типов и полезны преимущественно в каких-то операциях, где неизвестен результат - то ли это будет число или строка, то ли это будет null. В этом случае, чтобы избежать возможной ошибки, мы можем проверить значение на undefined или null, как в JavaScript

```ts
// strictNullChecks: false
let x: number = undefined;
console.log(x);

x = null;
console.log(x);

x = 5;
console.log(x);
```
