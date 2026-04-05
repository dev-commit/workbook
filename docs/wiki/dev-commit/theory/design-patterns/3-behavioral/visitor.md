# Visitor (Посетитель)

## Информация

::: tip

:::

- Visitor - добавление новой функциональности к существующим классам, причем не изменяя исходный код классов
- Расширение функциональности класса не изменяя его первоначальную реализацию

## Примеры

### Auto

```js
class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return "Tesla car";
  }
}
class Bmw extends Auto {
  info() {
    return "BMW car";
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) auto.export = console.log(auto.info());
  if (auto instanceof Bmw) auto.export = console.log(auto.info());
}

const tesla = new Tesla();
const bmw = new Bmw();

const a1 = tesla.accept(exportVisitor); // => Tesla car
const a2 = bmv.accept(exportVisitor); // => BMW car
```
