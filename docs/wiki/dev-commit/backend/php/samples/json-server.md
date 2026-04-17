# JSON Server

```php
<?php
    header('Access-Control-Allow-Origin: *');
    
    $id = $_GET['id'];
    $json = file_get_contents('react.json');
    $arr = json_decode($json);
    
    foreach ($arr as $item) {
        if ($item->id == $id) {
            echo json_encode($item);
        }
    }
?>
```
