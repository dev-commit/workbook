# Слоты/Placeholder как точки встраивания UI

**Slot (placeholder)** — паттерн “точек встраивания” в UI, когда компонент на уровне разметки оставляет место, где *может быть отрендерена* реализация из внешнего модуля или приложения.

## Идея

- Есть **контракт слота** (какие пропсы принимает встраиваемый компонент).
- Есть **дефолтная реализация** (fallback), если никто не переопределил слот.
- В приложении/плагине слот можно переопределить без изменения исходного компонента.

## Зачем это нужно

- Мульти‑бренд и мульти‑продукт: один и тот же “скелет” экрана, разные блоки внутри.
- Плагинность UI: добавлять/заменять части интерфейса без fork’ов.
- Ленивые блоки: удобно интегрировать `Suspense` для lazy‑компонентов.

## Варианты реализации

- Через DI: токен компонента → реализация; placeholder выбирает реализацию по токену.
- Через композиции/конфиги: встраиваемый компонент передаётся как часть конфигурации.

## Риски

- Слишком много слотов усложняет понимание страницы.
- Нужна строгая типизация контрактов, иначе переопределения ломаются в runtime.

## Простой пример

React‑placeholder: если реализация слота не передана, используется fallback.

```tsx
import React from 'react';

type HeaderSlot = React.ComponentType<{ title: string }>;

function Page(props: { title: string; Header?: HeaderSlot }) {
  const Header = props.Header ?? ((p: { title: string }) => <h1>{p.title}</h1>);
  return (
    <div>
      <Header title={props.title} />
      <p>Content…</p>
    </div>
  );
}

const FancyHeader: HeaderSlot = ({ title }) => <h1 style={{ color: 'hotpink' }}>{title}</h1>;
// <Page title="Hello" />
// <Page title="Hello" Header={FancyHeader} />
```

## Сравнение

### 1) “По‑простому” (жёсткая верстка без слотов)

```tsx
function Page() {
  return (
    <div>
      <h1>Default title</h1>
      <p>Content…</p>
    </div>
  );
}
```

### 2) По подходу (слот + fallback)

```tsx
type HeaderSlot = React.ComponentType<{ title: string }>;

function Page(props: { title: string; Header?: HeaderSlot }) {
  const Header = props.Header ?? ((p: { title: string }) => <h1>{p.title}</h1>);
  return (
    <div>
      <Header title={props.title} />
      <p>Content…</p>
    </div>
  );
}
```

