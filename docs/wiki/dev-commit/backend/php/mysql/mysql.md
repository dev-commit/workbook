# Работа с MySQL

## Подключение к БД (connect.php)

```php
// Для хостинга
$host = 'localhost';
$user = 'user';
$pass = 'password';
$db   = 'database';

// Для локального хостинга
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'sample';

$link = mysqli_connect($host, $user, $pass, $db);
if (!$link) {
  exit(mysqli_connect_error());
}
mysqli_set_charset($link, 'utf8');
```

## Выборка одной записи (select)

```php
include('connect.php');

$sql = "SELECT * FROM articles WHERE ID=2";
$query = mysqli_query($link, $sql);
$row = mysqli_fetch_array($query);

echo $row['NAME'];
echo $row['DESCRIPTION'];
```

## Выборка всех записей в цикле (select)

```php
include('connect.php');

$sql = "SELECT * FROM articles ORDER BY ID";
$query = mysqli_query($link, $sql);
while ($row = mysqli_fetch_array($query)) {
  echo $row['NAME'];
  echo $row['DESCRIPTION'];
}
```

## Добавление информации в БД (insert)

```php
include('connect.php');

$name        = $_POST['NAME'];
$description = $_POST['DESCRIPTION'];

$sql = "INSERT INTO articles(NAME, DESCRIPTION) VALUES ('$name', '$description')";
$query = mysqli_query($link, $sql);
```

::: warning

- Значения из `$_POST` подставлены в SQL-запрос напрямую - это открывает SQL-инъекции. В рабочем коде используют подготовленные запросы: `mysqli_prepare()` + `mysqli_stmt_bind_param()`

:::

## Обновление информации (update)

```php
include('connect.php');

$sql = "UPDATE articles SET NAME='New name', DESCRIPTION='New description' WHERE ID=2";
$query = mysqli_query($link, $sql);
```

## Удаление информации (delete)

```php
include('connect.php');

$sql = "DELETE FROM articles WHERE ID=2";
$query = mysqli_query($link, $sql);
```

## Выставление кодировки

```sql
-- Принудительное выставление кодировки при работе с БД
-- Запросы после подключения к БД
-- Только должно идти перед всеми остальными запросами
set character_set_client='utf8';
set character_set_results='utf8';
set collation_connection='utf8_general_ci';
```
