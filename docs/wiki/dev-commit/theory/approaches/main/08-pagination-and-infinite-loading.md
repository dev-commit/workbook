# Пагинация и infinite loading

**Пагинация** — способ получать большие списки частями. **Infinite loading** (“бесконечная лента”) — UX‑вариант пагинации, где следующая страница подгружается при прокрутке.

## Типовые модели пагинации

- **Offset/Limit**: `page`, `pageSize` (или `offset`, `limit`).
- **Cursor-based**: `cursor`/`nextCursor` (лучше при часто меняющихся данных).

## Что важно в реализации

- Стабильный **ключ запроса**: фильтры/сортировка должны входить в key, а номер страницы — быть параметром загрузки.
- Управляемая инвалидация: при мутациях понимать, какие страницы/списки нужно обновить.
- UX для состояний:
  - initial loading,
  - loading next page,
  - empty,
  - error + retry,
  - “конец списка”.

## Подводные камни

- Дубли элементов при race conditions (параллельная загрузка страниц).
- Потеря позиции и “скачки” при обновлениях списка.
- Сложность merge’а результатов (особенно при cursor‑пагинации и изменяемом сортировочном ключе).

## Простой пример

Загрузка страниц `page/pageSize` и накопление элементов:

```ts
type Item = { id: number; title: string };

async function fetchPage(page: number, pageSize: number): Promise<Item[]> {
  const start = (page - 1) * pageSize;
  return Array.from({ length: pageSize }, (_, i) => ({
    id: start + i,
    title: `Item #${start + i}`,
  }));
}

async function loadAll(pages: number) {
  const all: Item[] = [];
  for (let page = 1; page <= pages; page++) {
    const items = await fetchPage(page, 10);
    all.push(...items);
  }
  return all;
}
```

## Сравнение

### 1) “По‑простому” (грузим всё сразу)

```ts
async function fetchAll(): Promise<Item[]> {
  // потенциально огромный ответ и медленная загрузка
  const res = await fetch('/api/items');
  return res.json();
}
```

### 2) По подходу (страницы + “load next”)

```ts
let page = 1;
const pageSize = 20;
const items: Item[] = [];

async function loadNext() {
  const next = await fetchPage(page, pageSize);
  items.push(...next);
  page += 1;
}
```

