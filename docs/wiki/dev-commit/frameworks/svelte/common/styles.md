# CSS-стили

### Подключение файла с CSS-модулями styles.module.css

```html
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

### Указание стилей в файле .svelte

```html
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

### Подключение файла styles.css с глобальными стилями

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

### Инлайновые стили в style

```tsx
<script lang="ts">
  const { img } = $props();
</script>

<div style="background-image: url({img});"></div>
```
