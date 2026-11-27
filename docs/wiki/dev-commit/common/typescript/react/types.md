# Типы

```ts
// Для Input
const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const { value } = event.target;
};
```

## Нужно проверить

```ts
const handleClick = (event: React.SyntheticEvent): void => {
  //
};
const handleClick = (event: SyntheticEvent<EventTarget>) => {
  //
};
```

```ts
type Props = {
  tooltip: React.ReactElement;
  navTab: React.HTMLAttributes<HTMLButtonElement>;
};
```

```ts
const root: HTMLElement | null = document.querySelector(":root");
```
