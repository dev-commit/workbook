# Дескрипторы свойств

- **Свойства объекта** имеют: имя, значение (атрибут value), атрибуты (writable, enumerable, configurable)

```js
Object.getOwnPropertyDescriptor(obj, 'name');  // получение дескриптора свойств
Object.defineProperty(obj, prop, descriptor);  // переопределение дескриптора свойств
Object.defineProperties(obj, descriptors);     // позволяет объявить сразу несколько свойств
```

## Получение дескриптора свойств

```js
const person = {
	name: 'Tony',
	age: 20
}
const a = Object.getOwnPropertyDescriptor(person, 'name');
// {value: "Tony", writable: true, enumerable: true, configurable: true }
```

## Переопределение дескриптора свойств

```js
Object.defineProperty(obj, prop, descriptor)
	obj        // объект, в котором объявляется свойство
	prop       // имя свойства, которое нужно объявить или модифицировать
	descriptor // дескриптор - объект, который описывает поведение свойства
```

```js
// 1-объект, 2-свойство, 3-дескриптор
Object.defineProperty(person, 'name', {value: 'Jack',       // значение свойства (по умолчанию undefined)writable: false,     // значение свойства можно менять (по умолчанию false)configurable: false, // возможность удаление свойства и изменения атрибутов свойства при помощи новых вызовов defineProperty (по умолчанию false)enumerable: false,   // свойство просматривается в цикле for..in и методе Object.keys() (по умолчанию false)get(){}             // функция, которая возвращает значение свойства (по умолчанию undefined)set(){}             // функция, которая записывает значение свойства (по умолчанию undefined)
});
```

### Объект с парами свойсво:дескриптор

```js
// 1-объект, 2-объект с парами свойсво:дескриптор
Object.defineProperties(person, {
	name: {
		value: 'Jack',
		writable: false
	}, 
	age: {
		value: 25,
		writable: false
	}
});
```

### Обычное свойство

```js
// оба вызова добавляют в объект user обычное (удаляемое, изменяемое, перечисляемое) свойство
const user = {};
user.name = 'Tony';
Object.defineProperty(user, 'name', { value:'Tony', configurable:true, writable:true, enumerable:true });
```

## Геттеры и сеттеры

```js
const user = {
	firstName: "Вася",
	surname: "Петров"
}

Object.defineProperty(user, "fullName", {
	get() {
		return this.firstName + ' ' + this.surname;
	},
	set(value) {
		const split = value.split(' ');
		this.firstName = split[0];
		this.surname = split[1];
	}
});

user.fullName = "Петя Иванов";
alert(user.fullName);   // Вася Петров
alert(user.firstName ); // Петя
alert(user.surname );   // Иванов
```
