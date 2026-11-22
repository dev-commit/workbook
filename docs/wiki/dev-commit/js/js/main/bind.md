# bind(), call(), apply() - явное указание контекста вызова

## Информация

```js
function func(a, b) {
  console.log(this.name, a, b);
}
const person = { name: "Tony" };

func.call(person, "Hello", "World"); // call
func.apply(person, ["Hello", "World"]); // apply
func.bind(person)("Hello2", "World2"); // bind без аргументов
func.bind(person, "HelloZ", "WorldZ")(); // bind с аргументами

// this указывает на person
// => "Tony" "Hello" "World"
```

## Методы

::: danger

**`fun.call(thisArg, arg1, arg2, ...)`** - вызывает функцию с указанным значением this и аргументами

> - `thisArg` - значение this, предоставляемое для вызова функции fun
> - `arg1, arg2, ...` - аргументы, с которыми функция fun должна быть вызвана

:::

::: danger

**`fun.apply(thisArg, [argsArray])`** - вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива

> - `thisArg` - значение this, предоставляемое для вызова функции fun
> - `[argsArray]` - массивоподобный объект, определяющий аргументы, с которыми функция fun должна быть вызвана

:::

::: danger

**`fun.bind(thisArg, arg1, arg2, ...)`** - создаёт новую функцию, которая при вызове устанавливает предоставленное значение в качестве контекста выполнения _this_. Возвращает «обёртку», которая передаст вызов в исходную функцию, с привязанным контекстом. На функции, возвращенной методом _bind_, нельзя использовать _bind_ еще раз

> - `thisArg` - значение, передаваемое в качестве this в целевую функцию при вызове привязанной функции. Значение игнорируется, если привязанная функция конструируется с помощью оператора new
> - `arg1, arg2, ...` - аргументы целевой функции, передаваемые _перед_ аргументами привязанной функции при вызове целевой функции
> - _return_ - новая функция, которая передаст вызов в исходную функцию, с привязанным контекстом

:::

- Вы можете присваивать различные объекты _this_ при вызове существующей функции. _this_ ссылается на текущий объект, вызвавший объект. С помощью _call_ вы можете написать метод один раз, а затем наследовать его в других объектах, без необходимости переписывать метод для каждого нового объекта

## Примеры

::: details Потеря контекста

```js
const user = {
  userName: "Tony",
  userGreet() {
    console.log("Hi " + this.userName);
  },
};
const newUser = user.userGreet;
newUser(); // => "Hi undefined"

// Привязка call
newUser.call(user); // => "Hi Tony"

// Привязка bind
const func = newUser.bind(user);
func(); // => "Hi Tony"
```

:::

::: details Привязать всё

```js
for (let prop in user) {
  if (typeof user[prop] == "function") {
    user[prop] = user[prop].bind(user);
  }
}
```

:::

::: details Вызов функции

```js
function showFullName() {
  alert(this.firstName + " " + this.lastName);
}
const user = {
  firstName: "Василий",
  lastName: "Петров",
};
showFullName.call(user); // => "Василий Петров" (функция вызовется с this=user)
```

:::

::: details Максимальный элемент массива

```js
const arr = [1, 2, 3, 77, 4];
const max = Math.max.apply(null, arr); // 77 (контекстом будет null)
const max = Math.max.apply(Math, arr); // 77 (контекстом будет объект Math) - аналогично
// В данном случае в качестве контекста можно передавать что угодно,
// поскольку в своей внутренней реализации метод Math.max не использует this
```

:::

::: details call/apply передают this «как есть»

```js
function f() {
  alert(this); // null
}
f.call(null);
```

:::
