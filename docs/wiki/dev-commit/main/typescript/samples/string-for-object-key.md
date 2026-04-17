# Передача строки для ключа объекта

### Поля

```js
interface IIcons {
    [key: string]: IconDefenition;
}

const icon: IIcons = {
    Icon1: faIcon1,
    Icon2: faIcon2,
}

icon['Icon1']
```

### Рефы

```js
interface ITooltipRefs {
  [key: string]: HTMLDivElement | null
}

const tooltipRefs: ITooltipRefs = {}
```

### as keyof

```js
export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowRight: "➡️",
  ArrowLeft: "⬅️",
}

export interface IMapArrowCodes {
  ArrowUp: string
  ArrowDown: string
  ArrowRight: string
  ArrowLeft: string
}

const currentValue = MAP_ARROW_CODES.ArrowUp

MAP_ARROW_CODES[currentValue as keyof IMapArrowCodes]
```
