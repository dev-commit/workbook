# Передача строки для ключа объекта

## Поля

```ts
interface IIcons {
  [key: string]: IconDefinition;
}

const icon: IIcons = {
  Icon1: faIcon1,
  Icon2: faIcon2,
};

icon["Icon1"];
```

## Рефы

```ts
interface ITooltipRefs {
  [key: string]: HTMLDivElement | null;
}

const tooltipRefs: ITooltipRefs = {};
```

## as keyof

```ts
export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowRight: "➡️",
  ArrowLeft: "⬅️",
};

export interface IMapArrowCodes {
  ArrowUp: string;
  ArrowDown: string;
  ArrowRight: string;
  ArrowLeft: string;
}

const currentValue: string = "ArrowUp";

MAP_ARROW_CODES[currentValue as keyof IMapArrowCodes];
```
