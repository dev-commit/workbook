# Паттерны

## Паттерны

### Composition Root + Dependency Injection

- Все зависимости создаются централизованно в одном модуле.
- Фичи получают зависимости через DI (конструктор, контекст, провайдер).
- Прямые импорты инфраструктуры из глубины feature-модулей запрещены.

Эффект:

- управляемая инициализация;
- предсказуемые замены в тестах;
- проще мигрировать инфраструктуру.

### Repository Pattern

- Repository скрывает детали API/transport/cache.
- Снаружи доступен только контракт: query, mutation, invalidate, refresh.
- Domain-store не знает о протоколах, endpoint-ах и transport-ошибках.

Эффект:

- бизнес-логика не привязана к источнику данных;
- единая точка работы с кешем и синхронизацией.

### Store Pattern (Feature State Model)

В каждом домене есть state-модель, которая хранит:

- текущее состояние;
- derived-состояние;
- операции пользователя;
- статусы загрузки/ошибок.

Правило:

- store управляет поведением фичи;
- view только отображает и вызывает методы store/workflow.

### Workflow Pattern (Use Case Orchestration)

Workflow нужен, когда сценарий:

- затрагивает несколько repository/store;
- требует post-action invalidate/refetch;
- содержит redirect/post-submit/диалоги/уведомления;
- объединяет cross-domain побочные эффекты.

Workflow не нужен, когда операция тривиальна и просто проксирует один вызов.

### Effect Pattern (Reactive Side Effects)

- Побочные эффекты оформляются как отдельные эффекты, а не «размазываются» по UI.
- Каждый effect имеет четкий trigger, guard-условия и cleanup.
- Эффекты управляют внешними интеграциями (storage, browser APIs, notification channels, dialogs).

### Thin Route Pattern

- Route задает вход в экран и route-level guards.
- Route не содержит domain-логики.
- Route делегирует реализацию в view-модуль.

### Host/Adapter Pattern for Wiring

Для сложных store полезно иметь host-адаптер, который:

- собирает dependencies;
- создает store;
- отдает готовый экземпляр в UI.

Эффект:

- легче тестировать интеграцию;
- проще переиспользовать wiring в разных местах.
