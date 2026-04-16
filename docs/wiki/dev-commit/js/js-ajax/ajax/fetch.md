# Fetch API

::: info
https://github.com/github/fetch
https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
:::

    интерфейс для получения ресурсов (в том числе по сети)
    

    URL для отправки запроса
    

    дополнительные параметры: метод, заголовки и так далее
    
promise

## Свойства options

- method - метод запроса
- headers - заголовки
- body - тело запроса: FormData, Blob, строка и т.д.
- mode - одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос
- credentials - одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом
- cache - одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кэшировать запрос
- redirect - можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки

## Объект response (ответ)

```js
const a = response.headers.get('Content-Type');
const a = response.status; 

const a = response.arrayBuffer();
const a = response.blob();
const a = response.formData();
const a = response.json();
const a = response.text();
```

## Промисы и async

#### promise

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(body => console.log(body))
```

#### async

```js
const getResource = async (url) => {
    const res = await fetch(url);
    return await res.json();
}
getResource('https://jsonplaceholder.typicode.com/todos/1')
    .then(body => console.log(body))
```

## Обработка ошибок

- Fetch отклоняет (reject) Promise только если произошла ошибка сети (сервер недоступен)
- Чтобы проверить код результата, можно использовать result.status
- result.ok содержит true, если result.status содержит один из OK-статусов (200-209)

```js
fetch('https://jsonplaceholder.typicode.com/todos/неверный-адрес/')
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    })
    .then(body => console.log(body))
    .catch(error => console.log(error.message))
```

## Варианты использования

- При вызове fetch возвращает промис, который, когда получен ответ, выполняет коллбэки с объектом Response или с ошибкой, если запрос не удался
- В примере мы можем в первом .then проанализировать ответ и, если он нас устроит – вернуть промис с нужным форматом
- Следующий .then уже будет содержать полный ответ сервера

### Вариант #1. Без передачи значений

```js
fetch('script.php')
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        document.body.innerHTML = body;
    })
    .catch(function(error) {
        console.log(error);
    });
```

### Вариант #2. Передача одного значения

```js
fetch('script.php', {
	method: 'POST',
	body: 'hello'
})
```

```php
// script.php
<?php
    $content = file_get_contents("php://input");
    echo $content;
?>
```

### Вариант #3. Передача JSON

```js
fetch('script.php', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		name: 'Tony',
		login: 'Admin'
	})
})
```

```php
// script.php
<?php
    $content = file_get_contents("php://input");
    $decoded = json_decode($content, true);
    echo $decoded[name];
?>
```

## Примеры

```js
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(() => console.log('some error...'));
```

```js
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => {
        const data = res.json();
        console.log(data); // => Promise {<pending>}
        return data;
    })
    .then(data => {
        console.log(data); // => Массив данных
    })
```
