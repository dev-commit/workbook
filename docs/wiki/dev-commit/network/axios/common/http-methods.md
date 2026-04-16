# HTTP-методы

## GET

```js
const promise = axios.get("url");
```

```js
promise
	.then(response => {
		console.log(response.data);
	})
	.catch(error => {
		console.log(error)
	});
```

## POST

```js
const promise = axios.post(
	"url",
	{
		name: 'Tony',
		age: 23
	}
)
```

```js
promise
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error)
	});
```

## PATCH

```js
axios.patch("url", {
    name: "Tony",
	age: "23"
  });
```

## DELETE

```js
await axios
  .delete("url")
  .catch(e => {
	error(500, 'Error text');
	throw e;
  });
```
