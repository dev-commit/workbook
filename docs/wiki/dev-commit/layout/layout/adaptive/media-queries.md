# CSS Media queries

## Breakpoints

### Стандартные разрешения экрана

- `1200px` - Large Devices, Wide Screens
- `1024px` - Medium Devices, Desktops
- `992px` - Medium Devices, Desktops
- `768px` - Small Devices, Tablets
- `640px` - Small Devices, Tablets
- `480px` - Extra Small Devices, Phones
- `320px` - Custom, iPhone Retina

## Концепции

### Desktop First

- Если верстам: `pc` → `tablet` → `mobile` (концепция **Desktop First**)

```css
@media screen and (max-width: 1200px) {
  /* Eсли ширина экрана стала меньше 1200px, применяются свойства, написанные здесь */
}
```

### Mobile First

- Если верстам: `mobile` → `tablet` → `pc` (концепция **Mobile First**)

```css
@media screen and (min-width: 700px) {
  /* Eсли ширина экрана стала больше 700px, применяются свойства, написанные здесь */
}
```

## Варианты

### Несколько условий

```css
@media screen and (min-width: 600px) and (max-width: 980px) {
  /* Экраны от 600px до 980px */
}
```

### Версия для печата

```css
@media print and (min-width: 700px) {
  /* */
}
```

---

## Примеры

<v-details title="Desktop First">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/PovzPoO" />
</v-details>

<v-details title="Mobile First">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/rNgLOaX" />
</v-details>
