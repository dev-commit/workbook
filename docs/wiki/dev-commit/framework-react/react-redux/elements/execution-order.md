# Порядок выполнения

| 1. View      | `<button onClick={}>Click</button>`       |
| ------------ | ----------------------------------------- |
| 2. Dispatch  | store.dispatch(setName("Tony"))           |
| 3. Middlware | return next(action)                       |
| 4. Action    | `{ type: "NAME", payload: "Tony" }`       |
| 5. Reducer   | return { ...state, name: action.payload } |
| 6. Store     | -                                         |
| 7. View      | -                                         |
