# transition

## CSS-свойства

::: details `transition` (составное свойство) - плавный анимационный переход

**Состоит из:**

- `transition-property` - какие свойства анимируются
- `transition-duration` - длина анимации
- `transition-timing-function` - как вычисляются промежуточные состояния
- `transition-delay` - время ожидания перед запуском эффекта

**Полная форма записи**

```css
div {
  transition-property: all;
  transition-duration: 0.7s;
  transition-timing-function: ease-in;
  transition-delay: 0s;
}
```

**Сокращенная форма записи**

```css
div {
  transition: all 0.7s ease-in 0s;
}
```

:::

## Примеры

<v-details title="Применение :hover и transition">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/NWVYmLe" />
</v-details>
