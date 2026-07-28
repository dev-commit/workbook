# new Promise

## Информация

::: danger

**`new Promise(executor)`** - конструктор промиса

> - `executor = function(resolve, reject)` - асинхронная функция с коллбэками _resolve_ и _reject_
> - **resolve(result)** - функция вызывается при успешном выполнении промиса. Передается аргументом в .then
> - **reject(error)** - функция вызывается при неудачном выполнении промиса. Передается аргументом в .catch или вторым аргументом в .then

:::

## Примеры

### Promise

```js
// Объявление
let promise = new Promise((resolve, reject) => {
  if (...) {
    // onResolved()
    resolve('ok');
  } else {
    // onRejected()
    reject(new Error('Api error')); // аналогично с throw
    throw new Error('Api error');   // аналогично с reject
  }
});
```

```js
// Использование
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
    console.error(error.message);
  });
```

### Функция

```js
// Объявление
function asyncFunc() {
  let promise = new Promise((resolve, reject) => {
    //
  });
  return promise;
}
```

```js
// Использование
asyncFunc()
  .then(result => { ... })
  .catch(result => { ... })
```

## Внутренние свойства new Promise(executor)

- _PromiseState_ - состояние (вначале «pending»)
- _PromiseResult_ - результат (при создании значения нет)
- _PromiseFulfillReactions_ - список функций-обработчиков успешного выполнения
- _PromiseRejectReactions_ - список функций-обработчиков ошибки

**1. Функция-executor вызывает reject или resolve**

- `PromiseState` становится resolved или rejected
- все функции-обработчики из соответствующего списка перемещаются в системную очередь `PromiseJobs`

**2. Выполнение функций-обработчиков из очереди PromiseJobs**

- Функции выполняются асинхронно, один за другим, по завершении текущего кода

**3. Исключение из этого правила - если resolve возвращает другой Promise**

- Даьнейшее выполнение ожидает его результата (в очередь помещается специальная задача), и функции-обработчики выполняются уже с ним

**4. общий обработчик genericError**

- В конце срабатывает общий обработчик `genericError`, который перехватывает любые ошибки

```js
// Промис выполнится сразу же
const promise = new Promise((resolve, reject) => resolve(1));
promise.then(function f1(result) {
  alert(result); // 1
  return "f1";
});
promise.then(function f2(result) {
  alert(result); // 1
  return "f2";
});

// PromiseState - "resolved"
// PromiseResult - 1
// PromiseFulfillReactions - [f1, f2]
// PromiseRejectReactions  - [Thrower, Thrower] Thrower – стандартная внутренняя функция, которая автоматически используется, если второй обработчик (reject) не указан
```

- В примере не используется чейнинг, обработчики добавляются именно на один и тот же промис
- Все функции из списка обработчиков вызываются с результатом промиса, одна за другой
- Никакой передачи результатов между обработчиками в рамках одного промиса нет, а сам результат промиса (PromiseResult) после установки не меняется
