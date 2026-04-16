# Добавить свойство с проверкой

- Добавлять свойство только в том случае, если оно передано

### Основной пример

```js
const age = 23

const obj = {
	name: 'Tony',
	...(age && { age })
}
```

### Пример с флагом

```js
const flag = true;
const obj = {
	name: 'Tony',
	...(flag && { age: 23 })
}

console.log(obj);
```

```js
const flag = true;
const age = flag && { age: 23 }

const obj = {
	name: 'Tony',
	...age
}

// => { name: 'Tony', age: 23 }
console.log(obj);
```

### React Component

```js
const flag = true;

<App
    {...(flag && {
        title: 'Hello'
    })}
/>
```
