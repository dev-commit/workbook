# addEventListener

```js
button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
});

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
});

// => "Listener 1", "Listener 2", "Microtask 1", "Microtask 2"
// button.click();

// => "Listener 1", "Microtask 1", "Listener 2", "Microtask 2"
// Клик по кнопке
```1. Клик по кнопке
1. Первый обработчик отправляется в стек
2. Планируется микротаск
3. Выполняется console.log ('Listener 1')
4. Обработчик #1 заканчивает своё выполнение и уходит из стека
5. thВыполняется микротаск ('Microtask 1')is
6. Второй обработчик срабатывает аналогично

2. Программный клик по кнопке
1. В стек помещается весь скрипт
2. Скрипт запускает первый обработчик клика, который помещается в стек
3. Планируется микротаск
4. Выполняется console.log ('Listener 1')
5. Мы не можем выполнить микротаск, потому что стек не пуст, выполнение кода button.click(); еще не завершилось
6. Переходим ко второму обработчику клика
7. Выполняется console.log ('Listener 2')
8. Скрипт заканчивается
9. Выполняются колбэки промисов ('Microtask 1', 'Microtask 2')
