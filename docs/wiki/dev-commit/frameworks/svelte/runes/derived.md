# $derived

## Информация

> **$derived** - используется для реактивного вычисления

## Структура

- В примере **$derived** делает `bageColor` реактивным и будет обновляться при изменении `isStepCompleted`

```html
<script lang="js">
  const { isStepCompleted } = $props();

  const bageColor = $derived(
    isStepCompleted ? badge.completed : badge.uncompleted,
  );
</script>
```
