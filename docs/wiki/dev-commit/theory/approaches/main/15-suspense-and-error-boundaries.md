# Suspense и ErrorBoundary

В UI‑приложениях важно стандартизировать обработку **загрузки** и **ошибок** на уровне экранов/роутов.

## Suspense

**React.Suspense** — механизм, который позволяет показывать fallback‑UI, пока часть дерева “не готова” (например, lazy‑компонент). Это удобный способ централизовать UX загрузки.

### Когда полезно

- Ленивая загрузка страниц/виджетов.
- Разделение bundles и ускорение Time‑to‑Interactive.

### Риски

- Плохой fallback приводит к “прыгающему” UI.
- Нужно следить за вложенными suspense‑границами, чтобы не получить каскадные пустые состояния.

## ErrorBoundary

**Error Boundary** перехватывает ошибки рендера в дочернем дереве и позволяет отобразить запасной UI вместо падения всей страницы.

### Когда полезно

- Изолировать падения отдельных страниц/виджетов.
- Показать “мягкую” ошибку с возможностью повторить попытку/перейти назад.

### Риски

- ErrorBoundary не заменяет корректную обработку ошибок в бизнес‑логике.
- Не все типы ошибок относятся к рендеру (нужно понимать границы ответственности).

## Простой пример

ErrorBoundary на React (классический вариант):

```tsx
import React from 'react';

class ErrorBoundary extends React.Component<{ children?: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? <div>Что-то пошло не так</div> : this.props.children; }
}

function Explodes() {
  throw new Error('boom');
}

// <ErrorBoundary><Explodes /></ErrorBoundary>
```

## Сравнение

### 1) “По‑простому” (ошибка ломает всё дерево)

```tsx
function App() {
  return <Explodes />; // ошибка → падение рендера приложения
}
```

### 2) По подходу (границы ошибок и загрузки)

```tsx
const LazyWidget = React.lazy(async () => ({ default: () => <div>Widget</div> }));

function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading…</div>}>
        <LazyWidget />
      </React.Suspense>
    </ErrorBoundary>
  );
}
```

