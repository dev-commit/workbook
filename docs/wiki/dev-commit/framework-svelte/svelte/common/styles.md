# CSS-стили

## Подключение файла с CSS-модулями styles.module.css

```tsx
<script lang="ts">
  import styles from "./styles.module.css";
</script>

<div class="{styles.wrapper}">Hello</div>
```

```css
.wrapper {
  border: 1px solid black;
}
```

## Указание стилей в файле .svelte

```tsx
<script lang="ts">
  // Code
</script>

<div class="wrapper">Hello</div>

<style>
  .wrapper {
    border: 1px solid black;
  }
</style>
```

## Подключение файла styles.css с глобальными стилями

```tsx
<script lang="ts">
  import './styles.css';
</script>

<div class='wrapper'>Hello</div>
```

```css
.wrapper {
  border: 1px solid black;
}
```

## Инлайновые стили в style

```tsx
<script lang="ts">
  const { img } = $props();
</script>

<div style="background-image: url({img});"></div>
```

## Зависимость класса от props

```tsx
<script lang="ts">
  interface Props {
    collapsed?: boolean;
  }

  const { collapsed = false }: Props = $props();
</script>

<div class="container" class:collapsed>
  Content
<div>

<style>
  .container {
    background-color: red;
  }
  .container.collapsed {
    background-color: blue;
  }
</style>
```
