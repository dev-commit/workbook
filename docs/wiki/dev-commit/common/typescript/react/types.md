# Типы

```js
// Для Input
const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
};
```

## Нужно проверить

```js
const handleClick = (event: React.SyntheticEvent): void => {
    //
}
const handleClick = (event: SyntheticEvent<EventTarget>) => {
    //
}
```

```js
type Props = {
    tooltip: React.ReactElement;
    navTab: React.HTMLAttributes<HTMLButtonElement>;
}
```

```js
const root: HTMLElement | null = document.querySelector(':root');
```
