# Строка объектов

### Постановка задачи

```js
const obj = {
    foo: { bar: 1 },
    buzz: "string"
};
```

```js
getData('foo.bar') (obj);                // 1
getData('buzz')    (obj);                // => 'string'
getData('foo.x.y') (obj);                // => undefined
getData('foo.x')   ([]);                 // => undefined
getData('length')  ([]);                 // => 0
getData('foo.bar') ({ foo: { bar: 1 }}); // => 1
getData('foo')     ([]);                 // => undefined
```

### Решение (не доделано?)

```js
export const getData = (path) => {
    const arr = path.split(".");

    return (obj) => {
        return arr.reduce((result, current) => result?.[current], obj);
    };
};
```
