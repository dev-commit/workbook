# Прочие задачи

## Promise и setTimeout

```js
function delay(value) {
    return new Promise(function(resolve, reject){
       setTimeout(function(){
            resolve(100);
        }, value);
    });
}

delay(1000)
    .then(value => console.log(value)); // => "100"
```
