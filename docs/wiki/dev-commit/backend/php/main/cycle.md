# Циклы

## Цикл for

```php
for ($i = 1; $i <= 10; $i++) {
    echo $i;
}
```

## Цикл while-do

```php
$page = 1;
while($page <= 20) {
    echo "Читаю $page страницу";
    $page++;
}
```

```php
$page = 1;
do{
    echo "Читаю $page страницу";
    $page++;
} while($page <= 20);
```

## Цикл foreach (работа с массивами)

```php
$country = array ("Russia", "Latvia", "Germany", "France");
// $item - переменная для получения доступа к элементам массива
foreach($country as $item) {
    echo "Страна: $item";
}
```

### Указание ключей самостоятельно

```php
// $key - доступ к ключу элемента
// $item - доступ к самому элементу
foreach($country as $key => $item) {
    echo "Страна, где был $key раз - $item";
}
```
