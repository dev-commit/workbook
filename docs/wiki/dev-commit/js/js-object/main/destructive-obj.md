# Деструтивное присваивание объектов (ES6) - деструктуризация

```js
const person = {
	firstname: 'Tony',
	lastname: 'Stark'
};
```

#### ES6

```js
const { firstname, lastname } = person;
```

#### ES5

```js
const firstname = person.firstname;
const lastname = person.lastname;
```

## Варианты

```js
const {firstname, lastname} = person;              // имена переменных должны совпадать с именами свойст объекта
const {firstname:first, lastname:last} = person;   // изменение имен переменных
const {firstname, lastname, age=25} = person;      // значение по умолчанию (если age нет, присвоится 25)
const {address: {flat=77} = {} } = person;         // значение по умолчанию (если address нет, присвоится {})
const {['first'+'name']:first, lastname} = person; // динамическое определение имен свойст с помощью выражения в []
```

## Извлечение свойств вложенных объектов

```js
const props = {
	name: 'Tony',
    userData: {
        roles: 'admin',
        id: 77
    }
}

const { name, userData: { roles, id } } = props;

console.log(name);  // => 'Tony'
console.log(roles); // => 'admin'
console.log(id);    // => 77
```

## Функция

### Использование в качестве параметра функции

```js
const user = {
	firstname: 'Tony',
	lastname: 'Stark'
};
function post(url, {data:{firstname, lastname}, cache}) {
	console.log(firstname, lastname, cache);
}
const result = post('api/users', {data:user, cache:false});
```

### Указание значения по умолчанию

```js
function connect({
	host = 'localhost',
	port = 1234,
	user = 'guest'
}) {
	console.log(host, port, user);
}

connect({ host: 'port' });
```

### Возврат нескольких значений из функции

```js
function getUser() {
	return {
		firstname: 'Tony',
		lastname: 'Stark'
	};
}
const {firstname, lastname} = getUser();
```

## Rest-элемент

- Rest-элемент должени быть последним в списке
- На одном уровне может быть только один rest-элемент
- В rest-элемент попадут все значения, которые не были деструктурированы в выражении

```js
const users = {
	admin: 'all',
	moderator: 'write',
	guest: 'read'
}

const { admin, ...otherUsers } = users;
console.log(otherUsers); // => {moderator: "write", guest: "read"}
```
