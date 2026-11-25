# Условные операторы

## Условный оператор case()

**Использование цифр в виде аргумента**

```js
const id = 3;

switch (id) {
  case 1:
    console.log(id);
    break;
  case 2:
    console.log(id);
    break;
  case 3:
    console.log(id);
    break;
  default:
    console.log("default");
}
```

**Использование строк в виде аргумента**

```js
const name = "name2";

switch (name) {
  case "name1":
    console.log(name);
    break;
  case "name2":
    console.log(name);
    break;
  case "name3":
    console.log(name);
    break;
  default:
    console.log("default");
}
```

**Комбинирование case**

```js
switch (name) {
  case "name1":
  case "name2":
  case "name3":
    return false;
}
```

## Условный оператор if()

```js
if (year < 2011) {
  console.log("Это слишком рано..");
} else if (year > 2011) {
  console.log("Это поздновато..");
} else {
  console.log("Да, точно в этом году!");
}
```
