# Promise.allSettled()

        В отличие от Promise.all, он ждёт выполнения всех промисов, при этом неважно, завершились они успешно или с ошибкой.
        Используют, когда нужно запустить несколько промисов параллельно и дождаться их выполнения
    
массив (или другой итерируемый объект) промисов
Новый Promise, который будет выполнен, когда будут выполнены все переданные Promise. Полученный промис содержит массив результатов выполнения всех переданных промисов, сохраняя порядок оригинального массива, но не порядок выполнения.
```js
const promises = [
    new Promise(resolve => resolve(1)),
    new Promise((resolve, reject) => reject('error')),
    new Promise(resolve => resolve(3))
]

Promise.allSettled(promises)
    .then(([response1, response2, response3]) => {
        console.log(response1); // { status: 'fulfilled', value: 3 }
        console.log(response2); // { status: 'rejected', reason: 'error' }
        console.log(response3); // { status: 'fulfilled', value: 1 }
})
```
