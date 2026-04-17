# Reducers

- **Reducer** - чистая функция, которая берет на вход предыдущее состояние и action и возвращает объект нового состояния
- Через toEqual можно написать ожидание объекта, который нужен

```js
const NEWS_GET_REQUEST = 'NEWS_GET_REQUEST';
const NEWS_GET_SUCCESS = 'NEWS_GET_SUCCESS';
const NEWS_GET_FAILURE = 'NEWS_GET_FAILURE';

const initialState = {
    data: null,
    isLoading: false,
    errorMsg: null,
};
```

```js
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_GET_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case NEWS_GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        }
        case NEWS_GET_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload.errorMsg,
            };
        }
        default: {
            return state;
        }
    }
};
```

```js
describe('reducer', () => {
    it('NEWS_GET_REQUEST', () => {
        const action = {
            type: NEWS_GET_REQUEST,
        }
        const state = initialState;
        
        expect(myReducer(state, action)).toEqual({
            ...state,
            data: null,
            isLoading: true,
        })
    });
    
    it('NEWS_GET_SUCCESS', () => {
        const action = {
            type: NEWS_GET_SUCCESS,
            payload: [1, 2, 3]
        };

        // состоние за 1 шаг до action
        const state = {
            data: null,
            isLoading: true,
            errorMsg: null,
        };

        expect(myReducer(state, action)).toEqual({
            ...state,
            data: action.payload,
            isLoading: false,
        })
    });

    it('NEWS_GET_FAILURE', () => {
        const action = {
            type: NEWS_GET_FAILURE,
            payload: {
                errorMsg: '500 server error',
            }
        };

        const state = {
            errorMsg: null,
            data: null,
            isLoading: true,
        };

        expect(myReducer(state, action)).toEqual({
            ...state,
            isLoading: false,
            errorMsg: action.payload.errorMsg,
        })
    });
});
```
