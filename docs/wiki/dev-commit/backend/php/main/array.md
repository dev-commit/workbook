# Массивы

```php
$forest = array("дуб", "клен", "береза", "елка");      // объявление
$forest[] = "ель";                                     // добавление элемента
$forest[22] = "липа";                                  // добавление элемента с заданным ключем
print_r($forest);                                      // оператор вывода
$country = array ("RU" => "Russia", "LV" => "Latvia"); // объявление с заданным ключем
$a = $country["RU"];                                   // вывод элемента по ключу
count($a);                                             // количество элементов массива $a
```

## Двумерные массивы

```php
$world = array("country" => array ("RU" => "Russia", "LV" => "Latvia", "GER" => "Germany"),
               "city" => array ("RU" => "Moscow", "LV" => "Riga", "GER" => "Berlin"));
echo $world["country"]["LV"]; // обращение к элементам двумерного массива
```

## current(); next(); prev(); end();

```php
$transport = array('foot', 'bike', 'car', 'plane');
$mode = current($transport); // foot
$mode = next($transport);    // bike
$mode = next($transport);    // car
$mode = prev($transport);    // bike
$mode = end($transport);     // plane
```

```php
// преобразование строки по разделителю в массив
$arr = explode(",", $id);
foreach ($arr as $value) {
	$a = $value;
}
```
