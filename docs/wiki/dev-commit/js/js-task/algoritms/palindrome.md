# Палиндром

## Информация

::: tip Определение

- **Палиндром** - число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях

:::

## Реализация

### Решение 1

```js
function isPalindrome(str) {
  // Преобразуем строку в нижний регистр и удаляем всё, кроме букв и цифр
  str = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");

  // Переворачиваем строку
  let reversed = str.split("").reverse().join("");

  // Сравниваем исходную и перевернутую строки
  return str === reversed;
}
```

```js
console.log(isPalindrome("ротор")); // true
console.log(isPalindrome("ротор1")); // false
console.log(isPalindrome("дом")); // false
console.log(isPalindrome("А луна канула")); // true
```

### Решение 2

- _for_ вероятно можно заменить на _every_

```js
const isPalindrom = (str) => {
  // Для предложений нужны дополнительные действия
  const resultStr = str.toLowerCase().split(" ").join("");

  // Находим середину слова
  const length = Math.round(resultStr.length / 2);

  for (let i = 0; i < length; i++) {
    if (resultStr[i] !== resultStr[resultStr.length - i - 1]) {
      return false;
    }
  }

  return true;
};
```
