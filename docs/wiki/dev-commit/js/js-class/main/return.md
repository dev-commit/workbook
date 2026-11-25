# Правила обработки return

## Информация

- При вызове _return_ с объектом, будет возвращён объект, а не _this_
- При вызове _return_ с примитивным значением, оно будет отброшено и возвращен _this_

## 1. Возвращает объект

```js
function BigAnimal() {
  this.name = "Мышь";
  return { name: "Годзилла" }; // <-- возвратим объект
}
console.log(new BigAnimal().name); // Годзилла, получили объект вместо this
```

## 2. Возвращает примитивное значение

```js
function BigAnimal() {
  this.name = "Мышь";
  return "Годзилла"; // <-- возвратим примитив
}
console.log(new BigAnimal().name); // Мышь, получили this (а Годзилла пропала)
```

## 3. Возвращает пустое значение

```js
function SmallAnimal() {
  this.name = "Мышь";
  return; // <-- возвращает this
}

console.log(new SmallAnimal().name); // Мышь
```
