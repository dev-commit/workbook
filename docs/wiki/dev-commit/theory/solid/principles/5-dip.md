# 5. The Dependency Inversion Principle

## Информация

::: tip Определение

- **The Dependency Inversion Principle** - Принцип инверсии зависимостей
- Зависимость на Абстракциях. Нет зависимости на что-то конкретное
- Любые зависимости лучше всего выностить в абстракции, т.е. инкапсулировать в отдельных сущностях
- _Назначение_: устранить зависимость классов верхнего уровня от классов нижнего уровня за счёт введения интерфейсов
- Использовать все классы через Interface
- Использует Angular в своём ядре
  :::

### Принципы

1. Модули верхних уровней не должны зависеть от модулей нижних уровней
2. Модули верхних и нижних модулей должны зависеть от абстракций (инверсируем зависимости)
3. Абстракции не должны зависеть от деталей
4. Детали должны зависеть от абстракций

<v-two compare :title="['Dependency Inversion', 'Not Dependency Inversion']">
  <template #first>

- User может работать с любыми Settings, которые ему будут переданы

```js
class User {
  constructor(settings) {
    this.settings = settings;
  }
}

const user = new User(new Settings());
```

  </template>
  <template #last>

- User может работать только с Settings, которые указаны у него

```js
class User {
  constructor() {
    this.settings = new Settings();
  }
}

const user = new User();
```

  </template>
</v-two>

### Результат применения

- _Уменьшение зависимости между модулями_. Низкая связанность между модулями достигается за счет независимости классов верхнего уровня от классов нижнего уровня. Если появляются связи между двумя объектами, их нужно разделить
- _Возможность повторного использования_

## Примеры

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

- Создать новый класс, который будет являться интерфейсом для взаимодействия между сущностями
- class Database не зависит от абстракций низшего уровня, она зависит только от тех абстракций, который передали в класс
- Изменили порядок зависимостей и сделали код масштабируемым

```js
class Fetch {
  request(url) {
    return Promise.resolve("data from fetch");
  }
}
class LocalStorage {
  get() {
    const data = "data from local storage";
    return data;
  }
}
```

```js
// Оболочка для Fetch
class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet(key) {
    return this.fetch.request(key);
  }
}

// Оболочка для LocalStorage
class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}
```

```js
class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

// работает с FetchClient() если нужно
const db = new Database(new FetchClient());
// или работаем с LocalStorageClient() если нужно
const db = new Database(new LocalStorageClient());

console.log(db.getData("rand"));
```

  </template>
  <template #last>

- Изначально данные получались через class Fetch
- Потом данные необходимо брать из class LocalStorage
- При изменении места откуда берутся данные, необходимо менять class Database

```js
class Fetch {
  request(url) {
    return Promise.resolve("data from fetch");
  }
}
class LocalStorage {
  get() {
    const data = "data from local storage";
    return data;
  }
}
```

```js
class Database {
  constructor() {
    // this.fetch = new Fetch();
    this.localStorage = new LocalStorage();
  }

  getDate() {
    // return this.fetch.request('vk.com');
    return this.localStorage.get("ls key");
  }
}

const db = new Database();
console.log(db.getData());
```

  </template>
</v-two>

## Данные

```
Decoupling
  ☰ Inversion of Control
    • Dependency Injection
  ☰ Dependency Invertion
    • Inderfaces
```

## Применение в React

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

- Мы определили интерфейс функции логгера, создали несколько конкретных реализаций логгера, которые соответствуют определенному интерфейсу. Компонент UserService теперь принимает логгер через пропс, что позволяет легко менять реализацию логгера, не изменяю при этом код компонента. Благодаря чему, мы можем использовать UserService с любым логгером, который реализует интерфейс ILogger

```js
const ConsoleLogger: ILogger = {
  log: (message: string) => {
    console.log(`Console: ${message}`);
  },
};
const FileLogger: ILogger = {
  log: (message: string) => {
    // Логика записи в файл
    console.log(`File: ${message}`);
  },
};

type UserServiceProps = {
  logger: ILogger;
};
const UserService: React.FC<UserServiceProps> = ({ logger }) => {
  const createUser = (name: string) => {
    // Логика создания пользователя
    logger.log(`User ${name} created`);
  };
  return (
    <div>
      <button onClick={() => createUser('John Doe')}>Create User</button>
    </div>
  );
};
```

```js
// Пример использования
<UserService logger={ConsoleLogger} />
<UserService logger={FileLogger} />
```

  </template>
  <template #last>

- Мы имеем простой компонент с кнопкой, по нажатию на которую происходит логирование. В данном примере высокоуровневым компонентом у нас является кнопка, а низкоуровневым — функция логгер ConsoleLogger ее нажатия. Как мы видим кнопка напрямую зависит от реализации данного логгера, а согласно принципу, она должна зависеть от абстракции. Проблема в том, что если придется использовать другой способ логирования, то придуется изменять код компонента

```js
const ConsoleLogger = {
  log: (message: string) => {
    console.log(`Log: ${message}`);
  }
};

const UserService = () => {
  // Жесткая зависимость от конкретного логгера
  const createUser = (name: string) => {
    ConsoleLogger.log(`User ${name} created`);
  };
  return (
    <div>
      <button onClick={() => createUser('John Doe')}>Create User</button>
    </div>
  );
};

export default UserService;
```

  </template>
</v-two>
