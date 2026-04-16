# Общие задачи

## Базовый пример на .then .catch .finally

```js
Promise.resolve(1)
    // Promise.resolve вернул "1"
    // => "1"
    .then(data => console.log(data))

    // then ничего не вернул
    .then(data => {
        // => "undefined"
        console.log(data);
        return 2;
    })

    // then вернул "2"
    .then(data => {
        // => "2"
        console.log(data);
        // возникновение ошибки
        throw new Error('Api Error');
        // не имеет значения что вернули
        return 1;
    })

    // skip, потому что предыдущий then бросил ошибку
    .then(data => console.log('Hello'))

    // минуя then попадаем в catch
    .catch(error => {
        // => "Api Error"
        console.log(error.message);
        return 3;
    })

    // catch вернул "3"
    .then(data => {
        console.log(data); // "3"
        return 4;
    })

    // then вернул 4, но finally пропустит его мимо себя
    .finally(data => { 
        // => "undefined"
        console.log(data);
        return 5;
    })

    // из finally вернули "5", но результат берется из предудщего then или catch
    // => "4"
    .then(data => console.log(data))
```

## Общий пример

```js
Promise.resolve("1")
    .then(
        (val) => console.log('then', val),          // => "1"
        (err) => console.log('catch', err)          // not execute
    )
    .then(
        null,                                       // skip
        (err) => console.log('catch', err)          // not execute
    )
    .catch((err) => console.log('catch', err))     // skip
    .then(() => Promise.reject(2))                 // execute
    .catch(null)                                   // skip
    .then(
        (val) => console.log('then', val),          // not execute
        null                                        // skip
    )
    .finally((val) => console.log('finally', val)) // => "undefined"
    .catch((val) => console.log('catch', val))     // => "2"
    .finally(() => Promise.reject('3'))            // execute
    .then(
        (val) => console.log('then', val),          // not execute
        (err) => console.log('catch', err)          // => "3"
    )
    .catch((val) => console.log('then', val));     // skip
```
