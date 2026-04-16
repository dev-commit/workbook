# Media queries

## Media queries

```js
const screen = window.matchMedia('(max-width:500px)');
if (screen.matches) {
	console.log('< 500px');
} else {
	console.log('> 500px');
}
```

```js
const screen = window.matchMedia('(max-width:500px)');
screen.addListener(changes);
changes(screen);

function changes(screen) {
	if (screen.matches) {
		console.log('< 500px');
	} else {
		console.log('> 500px');
	}
}
```
