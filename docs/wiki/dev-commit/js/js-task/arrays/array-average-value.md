# Получить среднюю оценку по всем обзорам

```js
const arr = [
	{title: '', score: 5, comment: 'Comment1'},
	{title: '', score: 4, comment: 'Comment2'},
	{title: '', score: 2, comment: 'Comment3'},
];

const sumScore = arr
	.map(({score}) => score)
	.reduce((sum, current) => sum + current);

const averageScore = Math.ceil(sumScore / arr.length);
```
