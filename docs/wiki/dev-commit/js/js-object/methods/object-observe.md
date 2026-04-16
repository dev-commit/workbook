# Object.observe()

- **Object.observe()** - позволяет асинхронно отслеживать изменения состояния JavaScript объектов во времени
- С помощью Object.observe можно реализовать двухсторонний дата-биндинг без необходимости использовать фреймворк

```js
// Модель с данными
const model = {};

// Отслеживание изменений в модели
Object.observe(model, function(changes){
    // Вызод коллбэка
    changes.forEach(function(change) {
        console.log(change.type, change.name, change.oldValue);
    });
});
```

## Двухсторонний дата-биндинг

1. Click по кнопке
2. Изменение модели
3. Слушатель понимает, что модель изменилась
4. Вызов Handler и изменение UI
