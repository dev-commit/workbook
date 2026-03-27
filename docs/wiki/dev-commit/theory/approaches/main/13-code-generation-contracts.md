# Codegen и генерация контрактов

**Code generation (codegen)** — подход, когда часть кода создаётся автоматически по исходникам или метаданным. В frontend‑платформах codegen часто используют, чтобы поддерживать консистентные **контракты** и уменьшать ручной “копипаст”.

## Типовой сценарий: генерация контрактов UI‑кастомизации

- Автор компонента описывает структуру (например, набор узлов UI).
- Генератор строит:
  - типы “контракта кастомизации”,
  - токены/идентификаторы,
  - обёртки/хелперы для подключения и переопределения.

## Что даёт codegen

- Снижает количество ручной рутины.
- Устраняет рассинхрон: “поменяли структуру — забыли обновить типы/токены”.
- Повышает единообразие между пакетами/модулями.

## Риски

- Скрытая сложность: если генератор работает нестабильно или неочевидно, он становится источником фрустрации.
- Долг по tooling: генератор нужно поддерживать как полноценный продукт.

## Хорошие практики

- Генерация должна быть детерминированной и быстрой (watcher/инкрементальность).
- Артефакты должны быть легко “прослеживаемыми” до источника.
- Диагностика ошибок codegen должна быть понятной (что исправить в исходнике).

## Простой пример

Небольшой “генератор” строит TypeScript‑тип из списка полей:

```ts
type Field = { name: string; type: 'string' | 'number' | 'boolean' };

function genType(name: string, fields: Field[]) {
  const body = fields.map((f) => `  ${f.name}: ${f.type};`).join('\n');
  return `export type ${name} = {\n${body}\n};\n`;
}

const code = genType('User', [
  { name: 'id', type: 'string' },
  { name: 'age', type: 'number' },
]);

console.log(code);
```

## Сравнение

### 1) “По‑простому” (держим контракты вручную)

```ts
// Вручную поддерживаем типы/интерфейсы и легко забываем обновить:
export type User = { id: string; age: number };

// Потом добавили поле 'name' в данные — и забыли обновить тип:
// export type User = { id: string; age: number; name: string };
```

### 2) По подходу (генерация из источника истины)

```ts
type Field = { name: string; type: string };

function genType(name: string, fields: Field[]) {
  const body = fields.map((f) => `  ${f.name}: ${f.type};`).join('\n');
  return `export type ${name} = {\\n${body}\\n};\\n`;
}

const schema: Field[] = [
  { name: 'id', type: 'string' },
  { name: 'age', type: 'number' },
  { name: 'name', type: 'string' },
];

const generated = genType('User', schema);
console.log(generated);
```

