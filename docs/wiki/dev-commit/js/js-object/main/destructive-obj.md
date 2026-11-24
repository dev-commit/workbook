# Деструктивное присваивание объектов (ES6) - деструктуризация

## Информация

```js
const person = {
  firstname: "Tony",
  lastname: "Stark",
};
```

<v-two :title="['ES6', 'ES5']">
<template #first>

```js
const { firstname, lastname } = person;
```

</template>
<template #last>

```js
const firstname = person.firstname;
const lastname = person.lastname;
```

</template>
</v-two>

## Варианты

```js
// Имена переменных должны совпадать с именами свойств объекта
const { firstname, lastname } = person;

// Изменение имен переменных
const { firstname: first, lastname: last } = person;

// Значение по умолчанию (если age нет, присвоится 25)
const { firstname, lastname, age = 25 } = person;

// Значение по умолчанию (если address нет, присвоится {})
const { address: { flat = 77 } = {} } = person;

// Динамическое определение имен свойств с помощью выражения в []
const { ["first" + "name"]: first, lastname } = person;
```

## Извлечение свойств вложенных объектов

```js
const props = {
  name: "Tony",
  userData: {
    roles: "admin",
    id: 77,
  },
};

const {
  name,
  userData: { roles, id },
} = props;

console.log(name); // => 'Tony'
console.log(roles); // => 'admin'
console.log(id); // => 77
```

## Функция

::: details Использование в качестве параметра функции

```js
const user = {
  firstname: "Tony",
  lastname: "Stark",
};
function post(url, { data: { firstname, lastname }, cache }) {
  console.log(firstname, lastname, cache);
}
const result = post("api/users", { data: user, cache: false });
```

:::

::: details Указание значения по умолчанию

```js
function connect({ host = "localhost", port = 1234, user = "guest" }) {
  console.log(host, port, user);
}

connect({ host: "port" });
```

:::

::: details Возврат нескольких значений из функции

```js
function getUser() {
  return {
    firstname: "Tony",
    lastname: "Stark",
  };
}
const { firstname, lastname } = getUser();
```

:::

## Rest-элемент

- Rest-элемент должен быть последним в списке
- На одном уровне может быть только один rest-элемент
- В rest-элемент попадут все значения, которые не были деструктурированы в выражении

```js
const users = {
  admin: "all",
  moderator: "write",
  guest: "read",
};

const { admin, ...otherUsers } = users;
console.log(otherUsers); // => {moderator: "write", guest: "read"}
```
