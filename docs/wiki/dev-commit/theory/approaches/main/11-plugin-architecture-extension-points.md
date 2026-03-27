# Plugin‑архитектура и extension points

**Plugin architecture** — подход, где “ядро” определяет стабильные контракты расширения (**extension points**), а независимые модули подключают дополнительное поведение без правок ядра.

## Что такое extension point

Это заранее предусмотренная точка, куда можно “подключить” расширение:

- подписка на событие/хук,
- регистрация обработчика в pipeline,
- подмена реализации по DI‑токену,
- слот/placeholder для UI.

## Почему это важно

- Команды могут развивать фичи независимо.
- Упрощается мульти‑продуктовая сборка (разный набор плагинов и конфигов).
- Ядро меньше разрастается условными ветками “если включён X”.

## Дизайн extension points

- Extension point должен быть **типизирован** и документирован как публичный API.
- Нужны понятные правила приоритета/порядка (если расширений несколько).
- Должны быть определены гарантии совместимости при обновлениях.

## Риски

- “Слишком много точек”: ядро превращается в систему слабых договорённостей.
- Плохая наблюдаемость: трудно понять, какое расширение повлияло на поведение.

## Простой пример

“Ядро” хранит список расширений, а плагины добавляют обработчики:

```ts
type CheckoutCtx = { items: number; blocked?: boolean };
type CheckoutExtension = (ctx: CheckoutCtx) => void;

class CheckoutCore {
  private readonly ext: CheckoutExtension[] = [];
  register(ext: CheckoutExtension) { this.ext.push(ext); }
  run(ctx: CheckoutCtx) {
    for (const e of this.ext) e(ctx);
    return ctx.blocked ? 'blocked' : 'ok';
  }
}

const core = new CheckoutCore();
core.register((ctx) => { if (ctx.items === 0) ctx.blocked = true; }); // plugin: validation

console.log(core.run({ items: 0 })); // blocked
console.log(core.run({ items: 2 })); // ok
```

## Сравнение

### 1) “По‑простому” (условные ветки в ядре)

```ts
function checkout(items: number, enableExtraValidation: boolean) {
  if (items === 0) return 'blocked';
  if (enableExtraValidation) {
    // ядро начинает разрастаться флагами и условиями
  }
  return 'ok';
}
```

### 2) По подходу (extension points / плагины)

```ts
type Ctx = { items: number; blocked?: boolean };
type Plugin = (ctx: Ctx) => void;

const plugins: Plugin[] = [];
plugins.push((ctx) => { if (ctx.items === 0) ctx.blocked = true; });

function checkout(ctx: Ctx) {
  for (const p of plugins) p(ctx);
  return ctx.blocked ? 'blocked' : 'ok';
}
```

