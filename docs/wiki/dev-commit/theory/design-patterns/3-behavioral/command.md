# Command (Команда)

## Информация

::: tip Определение

- **Command** - позволяет создавать оболочку над функционалом, которая позволяет управлять, но через другой объект
- Сохранение мета-информации, н-р: список команд
- _Пример_: Redux
  :::

## Примеры

### Math Commands

```js
class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }
  // Возведение в степень 2
  square() {
    return this.num ** 2;
  }
  // Возведение в степень 3
  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(subject) {
    // Над чем будет формироваться абстрактная оболочка
    this.subject = subject;
    // Список команд, которые были вызваны
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));

console.log(x.execute("square")); // => 4
console.log(x.execute("cube")); // => 8
console.log(x.commandsExecuted); // => ["square","cube"]
```
