# 👿 Retrier

### Постановка задачи

- Есть Retrier, который должен делать запрос по URL
- В случает неудачи, должен выполнить запрос указанное кол-во раз
- Если не было результата после попыток, выбросить исключение

### #1

```js
function retrier(url, n) {
	if (n > 0) {
		return fetch(url)
			.then(data => {
				if (data.statusCode >= 200 && data.statusCode < 300) {
					return data;
				} else {
					return retrier(url, n-1);
				}
			})
			.catch(err => {
				return retrier(url, n-1);
			})
	} else {
		throw Error('Error');
	}
}
```

### #2

```js
function retrier(url: string, times: number) {
    let count = 0;

    if (count === number) {
        return;
    }

    return new Promise(function(resolve, reject) {
        function request(url) {
            fetch(url).then(data, error => {
                if (data) {
                    resolve(data);
                }
                if (error) {
                    count++;
                    request(url);
                    reject(error);
                }
            })
        }
    })

    for (let i = 0; i < times; i++) {
        request(url);
    }
}
```

### #3

```js
retrier(url, retryCount): Promise

function retrier(url, retryCount) {
    let count = 1;
    return new Promise((resolve, reject) => {
        send(url);
        function send(url) {
        fetch(url)
       .then(response = > resolve(response))
       .catch(err => {
           if(count <= retryCount){
            count++
            send(url);
           } else {
               reject(err)
           }
       })
    }
    });
}
```

### #4

```js
const retrier = (url, retryCount) => fetch(url)
    .then(
        res => {
            if (res.ok) {
                return res;
            }
            if (retryCount) {
                return retrier(url, retryCount - 1);
            }
            throw res.error;
        },
        res => {
            if (retryCount) {
                return retrier(url, retryCount - 1);
            }
            throw res.error;
        }
    );

retrier('https://some.api', 5) // url
    .then(res) => console.log('Успешно');
    .catch(err) => console.log('Ошибка');
```

### #5

```js
function retrier(url, retryCount): Promise {
    if (typeof retryCount === 'number' && retryCount > 0) {
        return fetch(url)
            .catch(err => {
                if (retryCount === 1) {
                    return Promise.reject(err);
                }
                return retrier(url, retryCount - 1);
            })
    } else {
        return Promise.reject('Failed');
    }
}

retrier('https://ya.ru', 123).then(data => ...);
```
