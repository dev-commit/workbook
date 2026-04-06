# 4. The Interface Segregation Principle

## Информация

::: tip Определение

- **The Interface Segregation Principle** - Принцип разделения интерфейса
- ClientCode НЕ должен зависеть от методов, которые они их НЕ используют. Если какой-то метод интерфейса не используется ClientCode, то изменения этого метода не должны приводить к внесению изменений в ClientCode
- Много интерфейсов, специально предназначенных для ClientCode, лучше, чем один интерфейс общего назначения
  :::

- Этот принцип не связан с изменением SuperClass и ChildClass - речь только про Interface, описывающий этот класс
- Можно создать 2 Interface: первый будет описывать все методы Class, а второй будет содержать только методы, необходимые ClientCode
- Пример: на Backend сложный класс с кучей методов. Frontend-разработчики описали Interface, который им нужен и Backend-разработчики сформировали новый Interface для Frontend, содержащий только необходимые методы. При этом, в Interface не были включены методы, которые не используются на Frontend

### Принципы

1. Класс должен содержать только необходимые методы. При необходимости происходит разделение на несколько классов
2. Если ClientCode не использует какие-то методы, они не должны нарушать его работы
3. При изменении методов интерфейса не должны меняться программные сущности, которые этот метод не используют

### Результат применения

- Снижение зависимостей между модулями
- При наследовании нет ненужной функциональности - каждый класс делает то, что от него действительно требуется
- Отсутствие проблем, связанных с реализацией больших интерфейсов (классы имплементируют только необходимые им методы)
- Декомпозиция

## Примеры

### Пример 1

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

  </template>
  <template #last>

  </template>
</v-two>

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

```js
const swimmer = {
  swim() {
    console.log(this.name + "умеет плавать");
  },
};
const flier = {
  fly() {
    console.log(this.name + "умеет летать");
  },
};
```

```js
class Dog extends Animal {}
class Eagle extends Animal {}

Object.assign(Dog.prototype, swimmer);
Object.assign(Eagle.prototype, flier);
```

```js
const dog = new Dog("Jack");
dog.swim();
// dog.fly();  // нет метода

const eagle = new Eagle("Bobby");
// eagle.swim(); // нет метода
eagle.fly();
```

---

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  swim() {
    console.log(this.name + "умеет плавать");
  }
  fly() {
    console.log(this.name + "умеет летать");
  }
}
```

```js
class Dog extends Animal {
  fly() {
    return null;
  }
}
class Eagle extends Animal {
  swim() {
    return null;
  }
}
```

```js
const dog = new Dog("Jack");
dog.swim(); // +
dog.fly(); // -

const eagle = new Eagle("Bobby");
eagle.swim(); // -
eagle.fly(); // +
```

### Пример 2

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

  </template>
  <template #last>

  </template>
</v-two>

::: warning

- Пример не проверен
  :::

```js
class OrderService {
  printCheque() {}
}

class PizzaOnlyOrderService extends OrderService {
  orderPizza(pizzaQty) {
    console.log(`Received order of ${pizzaQty} pizzas`);
  }
}
class DrinksOnlyOrderService extends OrderService {
  orderDrink(drinksQty) {
    console.log(`Received order of ${drinksQty} pizzas`);
  }
}
```

---

```js
class OrderService {
  printCheque() {}
}

class PizzaOnlyOrderService extends OrderService {
  orderPizza(pizzaQty) {
    console.log(`Received order of ${pizzaQty} pizzas`);
  }
  orderDrink(drinksQty) {
    console.log(`Can't order ${drinksQty} drinks in pizza only order.`);
  }
  orderCombo(pizzaQty, drinksQty) {
    if (drinksQty) throw Error("No combo in pizza only order");
    console.log(`Received order of ${pizzaQty} pizzas`);
  }
}
```

## Применение в React

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

  </template>
  <template #last>

  </template>
</v-two>

- В компонент UserName необходимо передавать только поле имени, а не весь объект

```js
type UserNameProps = {
  userName: string;
}
const UserName: React.FC<UserNameProps> = ({ userName }) => (
  <div>
    {userName}
  </div>
)

const UsersList: React.FC<UsersListProps> = ({ users }) => (
  <div>
    {users.map(user => <UserName key={user.id} userName={user.name} />)}
  </div>
)
```

---

- Нарушение: передавать в компонент UserName огромный объект, а использовать только одно его поле

```js
interface IUser {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  city?: string;
}

type UserNameProps = {
  user: IUser;
};
const UserName: React.FC<UserNameProps> = ({ user }) => {
  return <div>{user.name}</div>;
};

type UsersListProps = {
  users: IUser[];
};
const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserName key={user.id} user={user} />
      ))}
    </div>
  );
};
```
