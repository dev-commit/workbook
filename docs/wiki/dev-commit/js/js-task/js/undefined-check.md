# Проверка на "undefined"

```js
var a;

if (a === undefined) {
  console.log("Undefined");
} else {
  console.log("Not undefined");
}

if (typeof a == "undefined") {
  console.log("Undefined");
} else {
  console.log("Not undefined");
}

if (!!a) {
  console.log("Not undefined");
} else {
  console.log("Undefined");
}
```

- `!!` - приводит значение к логическому типу: _true_, если значение истинно. _false_ вернется не только для _undefined_, но и для `0`, `""`, `null`, `NaN`
- `!!!` - то же, что `!`: _true_, если значение ложно (в т.ч. _undefined_)
- При этом если переменная является _undefined_, то `!!` всегда вернет _false_
