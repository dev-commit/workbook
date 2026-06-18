# Обработка ошибок

## Через Promise

```js
export const getList = async () => {
  const promise = instance.get("url");

  promise
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
```

## Async Function. Try / Catch

```js
export const getList = async () => {
  try {
    const { data } = await instance.get("url");
    return data;
  } catch (error) {
    // @ts-ignore
    return error.message;
  }
};
```

## Async Function. Функция-обертка

```js
export const getList = async () => {
  const { data } = await instance.get("url");
  return data;
};

export const catchApiErrors = async (responseFunction) => {
  try {
    return await responseFunction();
  } catch (error) {
    // @ts-ignore
    return error;
  }
};

const getData = async () => {
  const data = await catchApiErrors(getList);
  console.log(data);
};
```
