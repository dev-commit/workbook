# @const

## Информация

::: tip `@const`

- **@const** - константа. задаёт локальную константу в шаблоне. Его можно использовать везде, где есть свой блок (scope)
- Константа действует только внутри того блока, где объявлена
  :::

## Структура

**{@const} должен быть дочерним элементов внутри следующих элементов:**

### `{#if}` / `{:else if}` / `{:else}` - внутри любой ветки

```tsx
<script lang="ts">
  const isVisible = true;
</script>

<div>
  {#if isVisible}
    {@const user = 'Tony'}
    <div>Hello {user}</div>
  {/if}
</div>
```

### `{#each}`

```tsx
<script lang="ts">
  const fruits = ['orange', 'apple', 'peach'];

  const helloMessage = () => {
    return 'Hello';
  };
</script>

<div>
  {#each fruits as data, index (index)}
    {@const itemName = 'Name: ' + data}
    {@const hello = helloMessage()}
    <div>
      <span>{itemName}</span>
      <span>{hello}</span>
    </div>
  {/each}
</div>
```

### `{#await}` - внутри `{:then}` или `{:catch}` (не проверено)

```tsx
{#await promise}
  ...
{:then value}
  {@const normalized = value ?? []}
  ...
{:catch err}
  {@const message = err?.message ?? 'Error'}
  ...
{/await}
```

### `{#key}` - константа видна только внутри этого блока (не проверено)

```tsx
{#key id}
  {@const item = items.find(i => i.id === id)}
	...
{/key}
```

### `<svelte:fragment>` или `<Component>`

- (не проверено)
