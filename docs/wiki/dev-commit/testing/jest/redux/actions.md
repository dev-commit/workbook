# Actions

- **Action** - объект
- Асинхронный Action Creater - функция, которая диспатчит несколько action

```js
const NEWS_GET_REQUEST = 'NEWS_GET_REQUEST';
const NEWS_GET_SUCCESS = 'NEWS_GET_SUCCESS';
const NEWS_GET_FAILURE = 'NEWS_GET_FAILURE';
```

```js
const newsRequest = () => ({
    type: NEWS_GET_REQUEST,
});

const newsSuccess = (data) => ({
    type: NEWS_GET_SUCCESS,
    payload: data,
});

const newsFailure = (errorMsg = 'Error') => ({
    type: NEWS_GET_FAILURE,
    payload: {
        errorMsg,
    },
    error: true,
});
```

```js
describe('Sync Actions', () => {
    it('newsRequest', () => {
        const expectedAction = {
            type: NEWS_GET_REQUEST,
        };

        expect(newsRequest()).toEqual(expectedAction);
    })

    it('newsSuccess', () => {
        const expectedAction = {
            type: NEWS_GET_SUCCESS,
            payload: [1, 2, 3],
        };

        expect(newsSuccess([1, 2, 3])).toEqual(expectedAction);
    })

    it('newsFailure', () => {
        const errorMessage = 'Wrong Password';
        const expectedAction = {
            type: NEWS_GET_FAILURE,
            payload: {
                errorMsg: errorMessage,
            },
            error: true,
        };

        expect(newsFailure(errorMessage)).toEqual(expectedAction);
    })
});
```

## Асинхронные action

- fetch-mock - библиотека для "мока" асинхронных запросов
- redux-mock-store
