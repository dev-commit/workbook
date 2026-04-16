# Статические свойства и методы

- **Статические свойства и методы** принадлежат самому классу, а не объектам, созданным на его основе. Не имеет доступ к instance класса (this нельзя получить). Н-р, Math статический класс, в котором содержится набор статических методов. Не создаем instance через new, но можем пользоваться методами
- static - свойства, которые принадлежат классу, а не конкретным объектам. Можно вызвать не создавая инстанс класса
- **Статические свойства** - используются для хранения вспомогательной информации
- **Статические методы** - используются для создания вспомогательных функций. task.getDefaultColor(); нельзя вызывать напрямую

## Статические методы

```js
class Task {
	constructor(color = Task.getDefaultColor()) {
		this.color = color;
    }

	// статический метод, позволяющий получить значение цвета по умолчанию,
	// если цвет не был передан
	static getDefaultColor() {
		return 'orange';
    }
    
    // статическое свойство
    static incrementStep = 2;

    // вызов статического свойства и метода внутри класса
    complete() {
        const a1 = Task.incrementStep;     // => 42
        const a2 = Task.getDefaultColor(); // => "orange"
        console.log(a1, a2);
	}
}

// Статический метод
const a1 = Task.getDefaultColor(); // => "orange"

// Статическое свойство
const a2 = Task.incrementStep; // => "2"
Task.incrementStep = 42;
const a3 = Task.incrementStep; // => "42"

const task = new Task();
task.complete();
```

## Пример статического свойства

```js
class Task {
	constructor() {
		Task.count += 1;

		// сохранит лексический this конструктора
		this.increment = () => {
			this.count++;
		}
	}
}

Task.count = 0;          // задание статического свойства
console.log(Task.count); // обращение к статическому свойству count
```
