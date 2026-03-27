# Расширяемые пайплайны (Executor)

**Pipeline / middleware chain** — паттерн, где сложный процесс представляется как последовательность шагов (handlers), выполняемых в определённом порядке. Ключевая цель — сделать процесс **расширяемым**: чтобы сторонний модуль мог вставить свой шаг, не изменяя код “ядра”.

## Зачем нужен pipeline‑подход

- Декомпозиция многошаговых сценариев (валидация → запрос → 2FA → UI → пост‑обновления).
- Плагинность: другие команды/модули добавляют обработчики (аналитика, безопасность, капча).
- Единый механизм передачи контекста между шагами.

## Типовые элементы

- **Executor** (или pipeline) — контейнер обработчиков для процесса.
- **Handler** — шаг процесса (обычно async‑функция).
- **Context** — объект контекста выполнения (данные + служебные поля).

## Хорошие практики

- Делать обработчики маленькими и идемпотентными, где возможно.
- Явно определять контекст: какие поля ожидаются/модифицируются.
- Стандартизировать обработку ошибок и “остановки” pipeline.

## Риски

- Неочевидный порядок шагов (особенно при множестве расширений).
- Скрытые зависимости обработчиков друг от друга через контекст.

## Простой пример

Pipeline из шагов, которые последовательно меняют контекст:

```ts
type Context = { amount: number; fee?: number; total?: number };
type Step = (ctx: Context) => Promise<void> | void;

class Pipeline {
  private steps: Step[] = [];
  use(step: Step) { this.steps.push(step); }
  async run(ctx: Context) {
    for (const s of this.steps) await s(ctx);
    return ctx;
  }
}

const p = new Pipeline();
p.use((ctx) => { ctx.fee = Math.ceil(ctx.amount * 0.03); });
p.use((ctx) => { ctx.total = ctx.amount + (ctx.fee ?? 0); });

p.run({ amount: 100 }).then(console.log); // { amount: 100, fee: 3, total: 103 }
```

## Сравнение

### 1) “По‑простому” (одна большая функция)

```ts
async function checkout(amount: number) {
  const fee = Math.ceil(amount * 0.03);
  const total = amount + fee;
  // тут же можно впихнуть аналитику/валидацию/2FA...
  return { amount, fee, total };
}
```

### 2) По подходу (расширяемые шаги)

```ts
type Ctx = { amount: number; fee?: number; total?: number };
type Step = (ctx: Ctx) => void;

const steps: Step[] = [];
steps.push((c) => { c.fee = Math.ceil(c.amount * 0.03); });
steps.push((c) => { c.total = c.amount + (c.fee ?? 0); });

function run(ctx: Ctx) {
  for (const s of steps) s(ctx);
  return ctx;
}
```

