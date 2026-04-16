# Палиндром

- **Палиндром** - число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях

## Решение 1

```js
function isPalindrome(str) {
	// Преобразуем строку в нижний регистр и удаляем все пробелы
	str = str.toLowerCase().replace(/[\W_]/g, '');

	// Переворачиваем строку
	let reversed = str.split('').reverse().join('');

	// Сравниваем исходную и перевернутую строки
	return str === reversed;
}
```

```js
console.log(isPalindrom('ротор'));         // true
console.log(isPalindrom('ротор1'));        // false
console.log(isPalindrom('дом'));           // false
console.log(isPalindrom('А луна канула')); // true
```

## Решение 2

- for вероятно можно заменить на every

```js
const isPalindrom = str => {
	// Для предложений нужны дополнительные действия
	const resultStr = str.toLowerCase().split(' ').join('');

	// Находим середину слова
	const length = Math.round(resultStr.length / 2);

	for (let i = 0; i < length; i++) {
		if (resultStr[i] !== resultStr[resultStr.length - i - 1]) {
			return false;
		}
	}

	return true;
}
```
