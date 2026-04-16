# Promise Make Concurrent Request

## Простое условие

### Постановка задачи

- Написать функцию makeRequest, получающую на вход массив ссылок

### Решение 1

- В функцию приходит массив url, по каждому из которых нужно сделать запрос и получить данные.
- Из функции нужно вернуть массив объектов с даными со всех url
- Делаем параллельно запросы и в итоге мы учитываем последовательность, которая будет у нас в итоге.
- Т.е. не путаем местами приходящие элементы.
- В итоге, в result находится массив объектов, каждый объект - результат запроса на соответствующий url

```js
const makeConcurrentRequest = urls => {
    return new Promise(resolve => {
        let result = [];
        let counter = 0;

        const makeRequest = index => {
            fetch(urls[index])
                .then(res => res.json())
                .then(body => {
                    result[index] = body;

                    if (urls.length-1 === counter) {
                        resolve(result);
                    } else {
                        counter++;
                        makeRequest(counter);
                    }
                })
        }

        makeRequest(0);
    });
};

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]

makeConcurrentRequest(urls)
    .then((result) => console.log(result));
```

::: detailsРешение 2 (Promise.all)

```js
const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
		return fetch(res).then(res => res.json())
	 }))

	 return res;
};

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]

makeConcurrentRequest(urls)
    .then((result) => console.log(result));
```

:::

::: detailsРешение 3 (реализация на React)
- С каждым изменением setFilmsName будет происходить дополнительный перерендер

```js
const PersonItemFilms = ({ films }) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            await films.forEach(async item => {
                const response = await fetch(item);
                const body = await response.json();

                setFilmsName(prev => {
                    return [
                        ...prev,
                        {
                            title: body.title,
                            episode: body.episode_id
                        }
                    ]
                })
            });
        })();

        return () => {
            setFilmsName([]);
        }
    }, []);

    return (
        <>
            {filmsName
                .map(({ title, episode }) =>
                    <p key={episode}>{title} {episode}</p>
                )
            }
        </>
    )
}
```

:::

## Расширенное условие

### Постановка задачи

- Написать функцию makeRequest, получающую на вход массив ссылок и число, указывающее максимальное количество одновременных запросов.
- Oдновременно должно выполняться не более указанного числа запросов должен возвращаться массив результатов в той же последовательности, что и адреса запросов.
- Нельзя делать повторные запросы на дублирующиеся адреса (при этом результат всё равно должен присутствовать в результирующем массиве).

```js
const urls = [
	'https://jsonplaceholder.typicode.com/todos/1',
	'https://jsonplaceholder.typicode.com/todos/2',
	'https://jsonplaceholder.typicode.com/todos/3',
	'https://jsonplaceholder.typicode.com/todos/3',
	'https://jsonplaceholder.typicode.com/todos/5',
	'https://jsonplaceholder.typicode.com/todos/6',
	'https://jsonplaceholder.typicode.com/todos/7'
];
 
makeConcurrentCall(urls, 2).then(console.log);
```

::: detailsРешение 1 (urls, total)

```js
const makeConcurrentCall = (urls, total) => {
	let indexCount = total;
	const buff = [...new Set(urls)].map(url => ({
		url
	}));

	return new Promise((resolve) => {
		const makeRequest = (index) => {a
			const {
				url
			} = buff[index];
			return fetch(url).then(response => response.json()).then((data) => {
				buff.find(e => e.url === url).data = data;
				if (buff.every(response => response.data)) {
					resolve(urls.map(url => buff.find(e => e.url === url).data));
				};
				if (!buff[indexCount]) return;
				makeRequest(indexCount);
				indexCount++;
			})
		};
		for (let i = 0; i < total; i++) {
			makeRequest(i)
		}
	})
}
```

:::

::: detailsРешение 2 (urls, total)

```js
function makeConcurrentCall(urls, total) {
	let res = [];
	let countIndex = total;

	return new Promise((resolve) => {
		function request(index) {
			fetch(urls[index]).then(response => response.json()).then(response => {
				res[index] = response;
				if (res.length === urls.length) {
					resolve(res);
				}
				request(countIndex++);
			})
		}
		for (let i = 0; i < total; i++) {
			request(i);
		}
	})
}
```

:::

::: detailsРешение 3 (urls, maxCount)
- Дублирование не реализовано

```js
function makeConcurrentCall(urls, maxCount) {
	let res = [];
	let count = 0;

	return new Promise((resolve, reject) => {
		function request(index) {
			fetch(urls[index])
				.then(response => response.json())
				.then(response => {
					res[index] = response;
					count++;
					if (count === urls.length) {
						resolve(res);
					}
					request(index + maxCount);
				})
		}
		for (let i = 0; i < maxCount; i++) {
			request(i);
		}
	})
}
```

:::
