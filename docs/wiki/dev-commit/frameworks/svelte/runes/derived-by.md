# $derived-by

## Информация

> **$derived.by** — rune для производного состояния: значение вычисляется по функции и автоматически пересчитывается, когда меняются любые реактивные зависимости, к которым функция обращается.

## Структура

### Пример 1

```tsx
<script lang="ts">
  let count = $state(0);
  let multiplier = $state(2);

  const product = $derived.by(() => count * multiplier);
</script>

<button onclick={() => count++}>count: {count}</button>
<button onclick={() => multiplier++}>multiplier: {multiplier}</button>
<p>count × multiplier = {product}</p>
```

- **Что происходит**: product пересчитывается при каждом изменении count или multiplier, потому что внутри $derived.by к ним идёт обращение.

### Пример 2 (чуть сложнее - с условием и несколькими зависимостями)

```tsx
<script lang="ts">
  let a = $state(1);
  let b = $state(2);

  const summary = $derived.by(() => {
    if (a > b) return 'a больше';
    if (a < b) return 'b больше';
    return 'равны';
  });
</script>

<p>{summary}</p>
```

**Зачем $derived.by:** когда нужно не одно выражение, а блок кода (условия, переменные, несколько return) при этом результат должен быть реактивным — используют $derived.by. Для одного выражения достаточно $derived(expression).
