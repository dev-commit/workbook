# v-cloak

::: tip `v-cloak`

- **v-cloak** - скрытие нескомпилированных шаблонов до тех пор, пока экземпляр Vue не будет готов
  :::

```html
<span v-cloak>{{item.name}}</span>
```

```css
[v-cloak] {
  display: none;
}
```
