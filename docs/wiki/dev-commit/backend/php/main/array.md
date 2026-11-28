# Массивы

```php
$forest = array("дуб", "клен", "береза", "елка");     // Объявление
$forest[] = "ель";                                    // Добавление элемента
$forest[22] = "липа";                                 // Добавление элемента с заданным ключом
print_r($forest);                                     // Оператор вывода
$country = array("RU" => "Russia", "LV" => "Latvia"); // Объявление с заданным ключом
$a = $country["RU"];                                  // Получение элемента по ключу
count($forest);                                       // Количество элементов массива $forest
```

## Двумерные массивы

```php
$world = array(
  "country" => array("RU" => "Russia", "LV" => "Latvia", "GER" => "Germany"),
  "city" => array("RU" => "Moscow", "LV" => "Riga", "GER" => "Berlin"),
);
echo $world["country"]["LV"]; // Обращение к элементам двумерного массива
```

## `current()` `next()` `prev()` `end()`

```php
$transport = array('foot', 'bike', 'car', 'plane');
$mode = current($transport); // foot
$mode = next($transport);    // bike
$mode = next($transport);    // car
$mode = prev($transport);    // bike
$mode = end($transport);     // plane
```

```php
// Преобразование строки по разделителю в массив
$arr = explode(",", $id);
foreach ($arr as $value) {
  $a = $value;
}
```
