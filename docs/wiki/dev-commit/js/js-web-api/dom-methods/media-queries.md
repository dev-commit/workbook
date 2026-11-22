# Media queries

## Media queries

```js
const screen = window.matchMedia("(max-width:500px)");
if (screen.matches) {
  console.log("< 500px");
} else {
  console.log("> 500px");
}

const screen = window.matchMedia("(max-width:500px)");
screen.addEventListener("change", changes); // addListener устарел
changes(screen);

function changes(screen) {
  if (screen.matches) {
    console.log("< 500px");
  } else {
    console.log("> 500px");
  }
}
```
