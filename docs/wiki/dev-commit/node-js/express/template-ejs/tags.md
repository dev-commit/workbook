# Tags

### Подключение файла "header"

```html
<%- include('blocks/header'); %>
```

### Вывод переменной "value"

```html
<%= value %>
```

### Вывод массива "arr"

```html
<% arr.map(item => { %>
    <div><%= item %></div>
<% }); %>
```
