# #each

## Информация

> **#each** - цикл

## Структура

```html
<script lang="ts">
  const dataItems = ["item1", "item2", "item3"];
</script>

<div>
  {#each dataItems as data, index (index)}
  <span>{data}</span>
  {/each}
</div>
```
