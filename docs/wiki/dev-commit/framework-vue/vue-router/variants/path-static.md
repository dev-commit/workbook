# Статический путь

## Ссылка

```html
<router-link to="/contact">Контакты</router-link>
```

```js
const routes = [
    { path: '/contact', component: Contact }
]
```

## Именованный маршрут

```html
<router-link :to="{name: 'contact'}">Контакты</router-link>
```

```js
const routes = [
    { path: '/contact', component: Contact, name: 'contact' }
]
```
