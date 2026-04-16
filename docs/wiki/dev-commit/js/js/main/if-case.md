# Условные операторы

## Условный оператор case()

```js
const id = 3;

switch (id) {
	case 1: alert(id); break;
	case 2: alert(id); break;
	case 3: alert(id); break;
	default: alert('default');
}
```

```js
const name = 'name2';

switch (name) {
	case 'name1': alert(name); break;
	case 'name2': alert(name); break;
	case 'name3': alert(name); break;
	default: alert('default');
}
```

```js
switch (name) {
	case 'name1':
	case 'name2':
	case 'name3': 
	return false;
}
```

## Условный оператор if()

```js
if (year < 2011) {
	alert('Это слишком рано..');
} else if (year > 2011) {
	alert('Это поздновато..');
} else {
	alert('Да, точно в этом году!');
}
```
