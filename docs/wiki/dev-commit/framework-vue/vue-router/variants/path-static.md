# Статический путь

## Ссылка

```vue
<router-link to="/contact">Контакты</router-link>
```

```js
const routes = [{ path: "/contact", component: Contact }];
```

## Именованный маршрут

```vue
<router-link :to="{ name: 'contact' }">Контакты</router-link>
```

```js
const routes = [{ path: "/contact", component: Contact, name: "contact" }];
```
