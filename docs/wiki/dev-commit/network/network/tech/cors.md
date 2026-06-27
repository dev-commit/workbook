# CORS

::: tip

- **Cross-origin resource sharing** (CORS «совместное использование ресурсов между разными источниками») - технология современных браузеров, которая позволяет предоставить веб-странице доступ к ресурсам другого домена
- CORS смотрит на все заголовки
  :::

## Кросс-доменные запросы

> Запрос обязательно должен быть асинхронным

1. В кросс-доменный запрос браузер автоматически добавляет заголовок Origin, содержащий домен, с которого осуществлён запрос
2. Если сервер разрешает кросс-доменный запрос с этого домена он должен добавить к ответу заголовок Access-Control-Allow-Origin, содержащий домен запроса или звёздочку \*. Только при наличии такого заголовка в ответе – браузер сочтёт запрос успешным, а иначе JavaScript получит ошибку
3. Чтобы JavaScript мог прочитать HTTP-заголовок ответа, сервер должен указать его имя в Access-Control-Expose-Headers

## Основные заголовки

**На стороне сервера**

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`

**На стороне клиента во время предварительного запроса (OPTIONS)**

- `Origin`
- `Access-Control-Request-Method`
- `Access-Control-Request-Headers`

## Примеры

::: details Простой метод GET, POST, HEAD

> Запрос с домена http://test1.ru

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://test2.ru/script.php", true);
xhr.onload = function () {
  console.log(this.responseText);
};
xhr.onerror = function () {
  console.log(this.status);
};
xhr.send();
```

> Сервер http://test2.ru

```php
<?php
  // Разрешить доступ домену http://test1.ru
  header('Access-Control-Allow-Origin: http://test1.ru');
  // Разрешить доступ любому домену
  header('Access-Control-Allow-Origin: *');
?>
```

:::

::: details Чтение JSON файла

> Файл .htaccess

```bash
<IfModule mod_rewrite.c>
  Header add Access-Control-Allow-Origin "*" Header add
  Access-Control-Allow-Headers "origin, x-requested-with, content-type" AddType
  application/json .json
</IfModule>
```

:::

::: details Передавать куки и HTTP-авторизацию

```js
xhr.withCredentials = true;
```

---

```php
<?php
  header('Access-Control-Allow-Origin: домен'); // Использование символа "*"" запрещено
  header('Access-Control-Allow-Credentials: true');
?>
```

:::
