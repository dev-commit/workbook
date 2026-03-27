# Server state: ресурсы, кэш, мутации

Во фронтенде часто разделяют:

- **client state** (локальное UI‑состояние),
- **server state** (данные, источник истины которых — сервер).

Подход “server state management” инкапсулирует загрузку, кэширование и обновление серверных данных в отдельном слое, чтобы не размазывать логику по компонентам.

## Какие задачи решает server state слой

- Кэширование и дедупликация запросов.
- Фоновое обновление и актуализация данных.
- Обработка ошибок и ретраи.
- **Мутации** (изменения на сервере) и синхронизация кэша.
- Оптимистичные обновления (при необходимости).

## “Ресурс” как единица

Один из распространённых вариантов — оформить server state как **ресурсы**:

- ресурс описывает *как* получить данные (fetcher),
- хранит состояния загрузки/ошибки,
- имеет ключ (key) и правила кэша/инвалидации,
- может предоставлять методы для мутаций.

## Когда это особенно полезно

- Данные используются в разных местах UI и должны быть согласованы.
- Нужны единые правила кэша/инвалидации по домену.

## Риски

- “Слишком умный кэш”: если правила инвалидации неочевидны, появляются трудноуловимые баги устаревших данных.
- Смешивание домена и транспорта: ресурс не должен превращаться в комбайн, который знает всё про UI.

## Простой пример

Ресурс кэширует результат по ключу и умеет “сбрасывать” кэш:

```ts
type User = { id: string; name: string };

class UserResource {
  private cache = new Map<string, User>();

  async get(id: string) {
    const cached = this.cache.get(id);
    if (cached) return cached;

    const user = await fakeHttp<User>({ id, name: 'Alice' });
    this.cache.set(id, user);
    return user;
  }

  invalidate(id: string) {
    this.cache.delete(id);
  }
}

async function fakeHttp<T>(value: T): Promise<T> {
  await new Promise((r) => setTimeout(r, 50));
  return value;
}
```

## Сравнение

### 1) “По‑простому” (fetch в каждом месте)

```ts
async function renderUser(id: string) {
  const res = await fetch(`/api/users/${id}`);
  const user = await res.json();
  console.log(user.name);
}

// другой компонент снова делает тот же fetch...
```

### 2) По подходу (общий ресурс с кэшем)

```ts
class UserResource {
  private cache = new Map<string, unknown>();
  async get(id: string) {
    if (this.cache.has(id)) return this.cache.get(id);
    const user = await fetch(`/api/users/${id}`).then((r) => r.json());
    this.cache.set(id, user);
    return user;
  }
}
```

