# $props

### Информация

> **$props** - пропсы

### Структура

**Объявление props в `<Component />`**

```tsx
<script lang="ts">
  type Props = {
    title: string;
    age: number;
  }

  const { title, age }: Props = $props()

  console.log(title)
</script>

<div>
  {title}
</div>

```

**Вызов компонента и передача props**

```tsx
<Component title="Hello" age={23} />
```
