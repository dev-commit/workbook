# Условие равенства

### Постановка задачи

```js
// Необходимо чтобы было "true"
console.log(a == true && a == false);
```

### Решение 1

```js
let c = 0;
const a = Object.create({ [Symbol.toPrimitive]: () => {
    if (c === 0) {
        c++;
        return true;
    }
    return false;
}});
```

### Решение 2

```js
let a = {
    toggler: false,
}
a.valueOf = function() {
    this.toggler = !this.toggler;
    return this.toggler
}
console.log(a == true && a == false)
```
