# Form Action

## Request JS

### Обработка формы

```html
<form class="form">
  <input type="text" name="name" required="" />
  <input type="text" name="message" required="" />
  <input type="submit" value="Отправить" />
</form>
```

```js
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this["name"];
  const message = this["message"];
  console.log(name.value, message.value);
});
```

### Отправка формы из HTML

```html
<form action="script.php" method="get">
  <input type="text" name="name" required="" />
  <textarea name="message"></textarea>
  <input type="submit" />
</form>
```

- http://test1.ru/script.php?name=myname&message=my+message

```php
<?php
  $name    = $_GET[name];
  $message = $_GET[message];
?>
```

## Response PHP

### Чтение данных в PHP

```php
<?php
  $content = file_get_contents("php://input"); // Чтение данных
  $decoded = json_decode($content, true);      // Если передан json
  echo $decoded[name];                         // Вывод значения "name"
?>
```

### Передача нескольких значений из PHP

```php
<?php
  $arr = array("Tony", 25);
  $json = json_encode($arr);
  echo $json

  // response.data; // ['Tony', 25]
?>
```

```php
<?php
  $arr = array("name" => "Tony", "age" => 25);
  $json = json_encode($arr);
  echo $json

  // response.data; // {name: "Tony", age: "25"}
?>
```
