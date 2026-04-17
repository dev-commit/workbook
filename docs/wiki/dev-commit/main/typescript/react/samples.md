# Примеры типизации

## ...rest

- Задача типизировать пропсы:
- Есть компонент-обёртка
- Непосредственно в компоненте нужен проп "label" - остальные пропы прокидывает дальше
- Пробрасываемое количество пропов может быть любое

```js
import React from 'react';

type Props = {
    label: string
} & Parameters<typeof ComponentInput>[0];

const ComponentWrapper: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <>
            <span>{label}</span>
            <ComponentTarget {...rest} />
        </>
    );
};
```

## Расширение типа аргументов в методе

```js
// Расширили тип аргументов в методе
// В пропе onChange указываем первоначальный тип

export function App(props) {
    const handleChange = (_activeKeys: string[], nodes: RichTreeNode<{ documentType: string }>[]) => {
        //
    };

    return (
        <CheckboxGroup
            onChange={handleChange as (activeKeys: string[], nodes: RichTreeNode[]) => void}
        />
    );
}
```
