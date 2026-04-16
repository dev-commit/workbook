# Async Function (ES2017)

## Объявление

#### Стрелочная

```js
const foo = async () => {
    const a = await AsyncFunction();
};
```

#### Обычная

```js
async function foo() {
    const a = await AsyncFunction();  
}
```

#### Стрелочная

```js
(async () => {
    const a = await AsyncFunction();
})();
```

#### Обычная

```js
(async function() {
    const a = await AsyncFunction();
})();
```
- Async Function - асинхронная функция (Promise + Generator)
- Асинхронная функция возвращает Promise, для получения значения используется then
- Если в асинхронной функции специально вернуть Promise, он не оборачивается в другой Promise

```js
async function getUser(id) {
    return { id:1 };   
}
getUser(1).then(user => console.log(user));
```
- await дожидается выполнения Promise, вытаскивает значение и возвращает его
- код после await выполнится только после выполнения функции
- await можно использовать только внутри асинхронной функции
- await необязательно ставить перед вызовом асинхронной фунцкии. это может быть любая функция, возвращающая Promise

```js
async function getUser(id) {
    return { id:1 };   
}
async function main() {
    let user = await getUser(1);
    console.log(user);
}
main();
```

```js
async function getUser(id) {
    let response = await fetch('url');
    let data = await response.json();
    return data;
}

async function main() {
    try {
        let user = await getUser(1);
        console.log(user);
    } catch(error) {
        console.log(error);
    }
}

main();
```

### Варианты объявления

```js
const getUser = async function(id) {
    //
}
```

```js
const getUser = async (id) => {
    //
}
```

```js
const obj = {
    getUser: async function(id) {
        //
    }
}
```

```js
const obj = {
    async getName() {
        return fetch('https://www.example.com');
    }
}
```

```js
class Obj {
    async getResource() {
        return fetch('https://www.example.com');
    }
}
```
