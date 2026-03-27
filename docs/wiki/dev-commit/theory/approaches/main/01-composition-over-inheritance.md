# Композиция над наследованием

**Композиция над наследованием** — подход, при котором поведение системы собирается из небольших частей (компонентов/модулей/сервисов), а не через глубокие иерархии базовых классов. Вместо “расширить класс и переопределить методы” предпочтение отдаётся “собрать нужное поведение из независимых блоков”.

## Зачем это нужно

- Снижает связанность: блоки можно менять и переиспользовать независимо.
- Упрощает развитие: добавлять новые возможности проще через подключение/комбинацию компонентов, чем через усложнение иерархий.
- Улучшает тестируемость: отдельные части легче изолировать.

## Типичные формы

- **Композиция модулей**: приложение собирается из независимых модулей (feature-пакетов), которые можно подключать/отключать.
- **Композиция UI**: внешний вид/поведение не “зашито” в компонент, а задаётся через конфигурацию/слоты.
- **Композиция поведения**: сценарии строятся как цепочки шагов (pipeline), куда можно добавлять расширения.

## Когда подходит

- Платформа/фреймворк, где нужно поддерживать много продуктов/брендов на одном ядре.
- Система с плагинами и точками расширения.

## Риски и анти‑паттерны

- “Свалка конфигов”: если компоненты слишком гибкие без чётких контрактов, конфигурация превращается в неуправляемую.
- Скрытая сложность: композиция требует дисциплины в именовании, границах модулей и контрактов расширения.

## Простой пример

Вместо наследования от “базового логгера” собираем нужное поведение из маленьких частей:

```ts
type Logger = { log: (msg: string) => void };

function withPrefix(logger: Logger, prefix: string): Logger {
  return { log: (msg) => logger.log(`[${prefix}] ${msg}`) };
}

function withTimestamp(logger: Logger): Logger {
  return { log: (msg) => logger.log(`${new Date().toISOString()} ${msg}`) };
}

const consoleLogger: Logger = { log: (msg) => console.log(msg) };

const appLogger = withTimestamp(withPrefix(consoleLogger, 'APP'));
appLogger.log('Started');
```

## Сравнение

### 1) “По‑простому” (через наследование)

```ts
class BaseLogger {
  log(msg: string) {
    console.log(msg);
  }
}

class PrefixedLogger extends BaseLogger {
  constructor(private prefix: string) { super(); }
  override log(msg: string) {
    super.log(`[${this.prefix}] ${msg}`);
  }
}

class TimestampedPrefixedLogger extends PrefixedLogger {
  override log(msg: string) {
    super.log(`${new Date().toISOString()} ${msg}`);
  }
}
```

### 2) По подходу (композиция)

```ts
type Logger = { log: (msg: string) => void };

const base: Logger = { log: (m) => console.log(m) };
const prefixed = (l: Logger, p: string): Logger => ({ log: (m) => l.log(`[${p}] ${m}`) });
const timed = (l: Logger): Logger => ({ log: (m) => l.log(`${new Date().toISOString()} ${m}`) });

const logger = timed(prefixed(base, 'APP'));
logger.log('Started');
```

