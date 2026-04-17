# Работа с MySQL

## Подключение к БД (connect.php)

```php
// Для хостинга
$host = 'localhost';
$user = 'ce00000_test';
$pass = 'dLz2noIP4';
$db   = 'ce00000_test';

// Для локального хостинга
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'sample';

$link = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($link, 'utf8');
if(!$link) {
    exit(mysqli_error($link));
}
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
$row = mysqli_fetch_array($query);
do {
    echo $row['NAME'];
    echo $row['DESCRIPTION'];
} while ($row = mysqli_fetch_array($query))
```

## Добавление информации в БД (insert)

```php
include('connect.php');

$name         = $_POST['NAME'];
$description  = $_POST['DESCRIPTION'];

$sql = "INSERT INTO articles(NAME, DESCRIPTION) VALUES ('$name', '$description')";
$query = mysqli_query($link, $sql);
```

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

```php
// принудительное выставление кодировки при работе с БД
// запросы после подключения к бд
// только должно идти перед всеми остальными запросами
set character_set_client='utf8';
set character_set_results='utf8';
set collation_connection='utf8_general_ci';
```
