# Использование моков

### 1. Мокировать модуль внутри файла

```js
jest.mock('moduleName', () => { ... })
```

### 2. doMock блокирует всплытие и позволяет переопределить имплементацию

```js
jest.doMock('moduleName', () => { ... })
```

### 3. Мокировании функции

```js
const a = jest.fn().mockImplemention(() => { ... });
```

### 4. Мокирование CSS

```js
// Пакет jest-css-modules
```

### 5. Мокирование Axios

```js
import axios from 'axios';
import Users from './Users';

jest.mock('axios');

it('name', () => {
	const users = [
		{name: 'Jack'}
	];
	
	const resp = { data: users };
	
	axios.get.mockResolvedValue(resp);
	
	return Users.all()
		.then(data => expect(data).toEqual(users))
});
```
