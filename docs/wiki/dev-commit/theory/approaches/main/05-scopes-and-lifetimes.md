# Скоупы и жизненный цикл зависимостей

В DI‑контейнерах важно управлять **временем жизни** объектов: одни должны существовать на протяжении всей работы приложения, другие — только в рамках запроса/страницы/операции. Для этого используются **scopes** (области видимости контейнера) и политики lifetime.

## Базовые lifetime‑модели

- **Singleton**: один экземпляр на всё приложение (или на контейнер верхнего уровня).
- **Scoped**: один экземпляр на “дочерний контейнер” (например, request‑scope).
- **Transient**: новый экземпляр при каждом запросе зависимости.

## Зачем нужны скоупы

- Изолировать зависимости, привязанные к запросу/сессии/переходу.
- Избежать утечек состояния между независимыми сценариями.
- Управлять очисткой ресурсов (подписки, таймеры, AbortSignal, кэши).

## Когда request‑scope критичен

- Есть “контекст” операции (URL, headers, пользователь, трейс‑ид), который нельзя хранить в singleton.
- В тестах нужно максимально приближать граф зависимостей к runtime‑поведению.

## Частые ошибки

- Неявные singletons: “случайно” живут вечно и накапливают состояние.
- Перемешивание контекстов: request‑данные оказываются в объектах глобального скоупа.

## Простой пример

Singleton‑зависимость одна на приложение, а request‑контекст создаётся заново:

```ts
class AppContainer {
  readonly logger = { log: (m: string) => console.log(m) }; // singleton
  createRequestContainer(requestId: string) {
    return { requestId, logger: this.logger };
  }
}

const app = new AppContainer();

function handleRequest(id: string) {
  const req = app.createRequestContainer(id); // scoped
  req.logger.log(`handling ${req.requestId}`);
}

handleRequest('req-1');
handleRequest('req-2');
```

## Сравнение

### 1) “По‑простому” (глобальное состояние)

```ts
// глобальный объект "на всё" — легко перепутать контексты
const state = { currentRequestId: 'unknown' };

function handleRequest(id: string) {
  state.currentRequestId = id;
  console.log('handling', state.currentRequestId);
}
```

### 2) По подходу (scoped‑контейнер на запрос)

```ts
class AppContainer {
  createRequestScope(requestId: string) {
    return { requestId };
  }
}

const app = new AppContainer();
function handleRequest(id: string) {
  const scope = app.createRequestScope(id);
  console.log('handling', scope.requestId);
}
```

