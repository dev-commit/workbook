# 4. The Interface Segregation Principle

## Информация

::: tip Определение

- **The Interface Segregation Principle** - Принцип разделения интерфейса
- _ClientCode_ НЕ должен зависеть от методов, которые они их НЕ используют. Если какой-то метод интерфейса не используется _ClientCode_, то изменения этого метода не должны приводить к внесению изменений в _ClientCode_
- Много интерфейсов, специально предназначенных для _ClientCode_, лучше, чем один интерфейс общего назначения
  :::

- Этот принцип не связан с изменением _SuperClass_ и _ChildClass_ - речь только про Interface, описывающий этот класс
- Можно создать 2 Interface: первый будет описывать все методы Class, а второй будет содержать только методы, необходимые _ClientCode_
- _Пример_: на Backend сложный класс с кучей методов. Frontend-разработчики описали Interface, который им нужен и Backend-разработчики сформировали новый Interface для Frontend, содержащий только необходимые методы. При этом, в Interface не были включены методы, которые не используются на Frontend

### Принципы

1. Класс должен содержать только необходимые методы. При необходимости происходит разделение на несколько классов
2. Если _ClientCode_ не использует какие-то методы, они не должны нарушать его работы
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

  </template>
  <template #last>

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

  </template>
</v-two>

### Пример 2

::: warning

- Пример не проверен
  :::

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

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

  </template>
  <template #last>

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

  </template>
</v-two>

## Применение в React

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

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

  </template>
  <template #last>

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

  </template>
</v-two>
