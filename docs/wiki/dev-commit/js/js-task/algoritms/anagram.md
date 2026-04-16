# Анаграмма

- **Анаграмма** - перестановка букв или звуков определённого слова, что в результате даёт другое слово или словосочетание

### Постановка задачи

```js
const input = [
   "вертикаль", "кильватер", "апельсин", "спаниель", "австралопитек",
   "ватерполистка", "кластер", "сталкер", "стрелка"
];

// Результат:
[
   ["вертикаль", "кильватер"],
   ["апельсин", "спаниель"],
   ["австралопитек", "ватерполистка"],
   ["кластер", "сталкер", "стрелка"]
]
```

### Простое решение

- Сложность: O(N в квадрате)

```js
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('bla', 'broom'));     // false

const sortWordASC = word => word
    .split('')
    .sort()
    .join('');

const anagram = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    }

    return sortWordASC(word1.toLowerCase()) === sortWordASC(word2.toLowerCase());
};
```

### Решение 2

```js
const findAnagramms = (arr) => Object.values(
	arr.reduce((a, b) => {
		let key = b.split('').sort().join('');
		a[key] = [...a[key] || '', b];
		return a
	}, {})
)
```

### Решение 3

- Хэшом может выступать объект, его ключи
- Есть цикл, в котором формируется hash (сплит в массив, сортировка, собрать) - отсортированная строка
- Если отсортированная строка есть в объекте, то создаем новый массив
- Если она не существует, тогда пушим под готовый ключ
- Таким образом формируется приведенная в задании структура
- Вывод объекта в массиве

```js
(function findAnagram(arr) {
    const output = {},
        i = 0,
        length = arr.length,
        hash;

    for (i = 0; i < length; i++) {
        hash = arr[i].split('').sort().join('');

        if (!output[hash]) {
            output[hash] = [];
        }
        output[hash].push(arr[i]);
    }

    arr = [];

    for (key in output) {
        if (obj[key].length > 1) {
            arr.push(output[key]);
        }
    }

    return arr;
})(input);
```
