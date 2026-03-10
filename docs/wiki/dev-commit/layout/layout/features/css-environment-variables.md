# CSS Environment Variables

## Пример

```jsx
env("VARIABLE_NME", FALLBACK_VALUE);
```

- Доступен в IOS11

```html
<meta name="viewport" viewport-fit="cover" />
```

```css
div {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

## Variable Name

- Задаются user-agent браузера
- Для свойств задания длинны (margin, padding и т.д.)

**Значения**

- `safe-area-inset-top`
- `safe-area-inset-bottom`
- `safe-area-inset-right`
- `safe-area-inset-left`
