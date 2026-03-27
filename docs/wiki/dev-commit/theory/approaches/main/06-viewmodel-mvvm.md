# ViewModel / MVVM‑подобный слой

**MVVM (Model–View–ViewModel)** — архитектурный подход, который отделяет UI‑представление (**View**) от состояния и поведения экрана (**ViewModel**). ViewModel инкапсулирует state, side‑effects, асинхронные запросы и преобразование данных для рендера.

## Что даёт ViewModel‑слой

- **Тонкий UI**: компоненты сосредоточены на разметке и композиции.
- **Повторное использование**: одну модель поведения можно подключать в разных UI‑композициях.
- **Контроль жизненного цикла**: mount/unmount, отмена эффектов, очистка ресурсов.
- **Тестируемость**: бизнес‑поведение экрана можно тестировать без реального DOM.

## Типовые обязанности ViewModel

- Хранить observable‑состояние (loading/error/data, derived values).
- Дёргать сервисы/репозитории (через DI) и управлять отменой/ретраями.
- Держать “командные” методы (например, `submit`, `refresh`, `openDialog`).

## Когда ViewModel оправдан

- Экран сложный: много состояний, запросов, ветвлений, сайд‑эффектов.
- Нужно унифицировать поведение между несколькими приложениями/брендами.

## Риски

- “God ViewModel”: слишком крупная модель со всем на свете.
- Дублирование домена: если ViewModel начинает хранить бизнес‑правила вместо того, чтобы делегировать в доменные сервисы.

## Простой пример

ViewModel хранит состояние и методы, а “View” только отображает:

```ts
class CounterViewModel {
  count = 0;
  increment() { this.count += 1; }
  reset() { this.count = 0; }
}

const vm = new CounterViewModel();

// Условный "View":
function render() {
  console.log('count =', vm.count);
}

vm.increment();
render();
vm.reset();
render();
```

## Сравнение

### 1) “По‑простому” (логика внутри View)

```ts
let count = 0;

function onClick() {
  count += 1; // логика прямо здесь
  console.log('count =', count);
}

onClick();
onClick();
```

### 2) По подходу (ViewModel хранит состояние и методы)

```ts
class CounterVM {
  count = 0;
  inc() { this.count += 1; }
}

const vm = new CounterVM();
function onClick() {
  vm.inc();
  console.log('count =', vm.count);
}
```

