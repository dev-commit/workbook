# replace()

Ищет совпадение и заменяет

```js
const text = 'привет мир';
const pattern = /привет/;

text = text.replace(pattern, function(match) {
    return match.toUpperCase();
});
```

```js
str = str.replace(/'/g, '"');         // Поменять одинарные кавычки на двойные
str = str.replace(/«/g, '"');         // Поменять « 
str = str.replace(/»/g, '"');         // Поменять »
str = str.replace(/–/g, '-');         // Поменять "–"
str = str.replace(/\r|\n/g, '');      // Убрать перенос строки
str = str.replace(/<\/?[^>]+>/g, ''); // Удалить HTML теги из текста
```
