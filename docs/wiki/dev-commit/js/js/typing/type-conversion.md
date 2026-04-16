# Преобразование типов

```js
String(77);
Number('77');
Boolean(77);
```

```js
77 + ''; // string
+'77';   // number
!!'77';  // boolean
```

```js
77.toString();
parseInt('77px');
parseFloat('77.2px')
```

### Пример

```js
const a = 'Hello';
const b1 = Boolean(a); // => true
const b2 = !!a; // => true
```
