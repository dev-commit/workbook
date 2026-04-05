# Adapter (Адаптер)

## Информация

::: tip Adapter

- **Adapter** - позволяет интегрировать старый интерфейс класса в новый интефейс класса, позволяя им работать совместно и не ломая приложение

:::

## Использование

### Работа с API

- Если есть старая и новая версия API, можно использовать Adapter, чтобы не переписывать код, но использовать новый функционал

## Примеры

```js
class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }
  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdapter {
  constructor() {
    // Будет использован функционал нового класса
    this.calc = new NewCalc();
  }

  // Интерфейс старого класса будет сохранен
  operations(t1, t2, operation) {
    switch (operation) {
      // Возвращаем методы из нового класса: add, sub
      case "add":
        return this.calc.add(t1, t2);
      case "sub":
        return this.calc.sub(t1, t2);
      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, "add")); // => 15

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5)); // => 15

const adapter = new CalcAdapter();
console.log(adapter.operations(25, 10, "sub")); // => 15
```
