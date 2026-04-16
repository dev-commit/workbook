# Создание прототипа

- У каждого объекта есть прототип, от которого он наследует свойства и методы. Если объект не включает в себя запрошенное свойство, JavaScript выполнит поиск этого свойства в прототипе объекта. При этом поиск будет выполняться по цепочке прототипов до тех пор, пока не будет найдено то, что нужно. Если же поиск успехом не увенчается, будет возвращена ошибка

```js
// объект
const Human = {
	type: "Human",
	head: 1,
	legs: 2
};
// прототип
const Megahuman = Object.create(Human);
```

#### 

```js
Megahuman.type; // Human
Megahuman.head; // 1
```

#### 

```js
Megahuman.head = 2; // 2
Human.head;         // 1
```

#### 

```js
Megahuman.hands = 10; // 10
Human.hands;          // undefined
```

#### 

```js
Human.face;     // undefined
Megahuman.face; // undefined
```

#### 

```js
Human.face = "okay"; // okay
Megahuman.face;      // okay
```

#### 

```js
Megahuman.face = "awesome"; // awesome
Human.face;                 // okay
```

```js
Human.isPrototypeOf(Megahuman); // является ли объект Human прототипом для объекта Megahuman
```

## Удаление свойств

```js
// объект
const Human = {
	type: "Human",
	head: 1,
	legs: 2
};

// прототип
const Megahuman = Object.create(Human);
Megahuman.head = 2; // 2
delete Megahuman.head;
Megahuman.head;     // 1
```

## Конструктор прототипа

```js
const Person = {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    greet() {
        console.log('Hi ' + this.name);
    }
}

const person = Object.create(Person).constructor("Jack", 25);

const a = person.name;
person.greet();
```

### Изменение конструктора

```js
const WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function(name, age, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
}
WebDeveloper.develop = function() {
    console.log('In Work');
}
const developer = Object.create(WebDeveloper).constructor('Jack', 25, ['html', 'css', 'js']);

console.log(developer.skills);
developer.develop();
console.log(developer.name);
```
