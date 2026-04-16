# Console

```js
console.log('Сообщение');
console.info('Информация');
console.warn('Предупреждение');
console.error('Ошибка');
```

## console.log

- %c%s - позволяет стилизовать элементы

### Один элемент

<!-- <img src="../@img/console-styled1.png"/> -->

```js
console.log(
  '%c%s',
  'background: black; color: white; border-radius: 5px; padding: 5px; font-weight: bold',
  'Hello',
);
```

### Два элемента

<!-- <img src="../@img/console-styled2.png"/> -->

```js
console.log(
  '%c%s%c%s',
  'background: black; color: white; border-radius: 5px; padding: 5px; font-weight: bold',
  'Hello1',
  'background: pink; border-radius: 5px; padding: 5px; font-weight: bold',
  'Hello2',
);
```
