# every() / some()

    проверяет, удовлетворяют ли все/какие-нибудь элементы массива условию, заданному в передаваемой функции
    

	Функция проверки каждого элемента, принимает три аргумента:
currentValue - текущий обрабатываемый элемент массива
index - индекс текущего обрабатываемого элемента в массиве
array - массив, по которому осуществляется проход

	Необязательный параметр. Значение, используемое в качестве this при вызове функции callback
	
true если функция проверки возвращает truthy значение для каждого/хотя бы одного элемента массива. Иначе, false

- Используется для проверки массива
- Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr
- Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr

### Пример 1: Использование callback-функции

```js
const arr = [1, -1, 2, -2, 3];

// false, не все положительные
const result = arr.every(number => {
	return number > 0;
})

// true, есть хоть одно положительное
const result = arr.some(number => {
	return number > 0;
})
```

### Пример 2: Вынесение callback-функции

```js
const arr = [1, -1, 2, -2, 3];

const isPositive = number => {
	return number > 0;
}

const result = arr.every(isPositive);
const result = arr.some(isPositive);
```
