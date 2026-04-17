# Файлы и директории

## Создание директории если ее нет

```php
<?php
    $dir = '../uploads/';
    if( ! is_dir( $dir ) ) mkdir( $dir, 0777 );
?>
```

## Удаление директории с файлами и поддиректориями

```php
<?php
    $dir = '../uploads/';
    if( is_dir( $dir ) ) {
        if ($objs = glob($dir."/*")) {
            foreach($objs as $obj) {
                is_dir($obj) ? removeDirectory($obj) : unlink($obj);
            }
        }
        rmdir($dir);
    }
?>
```

## Сохранение файла .txt на сервере

```php
<?php
    $file_path = '../uploads/1.txt';
    $file_content = 'Содержимое файла';
    $file = fopen($file_path, 'w');
    fwrite($file, $file_content);
    fclose($file);
?>
```

## Проверка существования файла

```php
<?php
    $file = '../uploads/1.jpg';
    if (file_exists($file)) {
        echo "существует";
    } else {
        echo "не существует";
    }
?>
```

## Удаление файла если он есть

```php
<?php
    $file = '../uploads/1.jpg';
    if ( file_exists($file) ) {
        unlink($file);
    }
?>
```

## Перебор строк файла

```php
<?php
    $lines = file('file.txt');

    foreach ($lines as $line_num => $line) {
        echo $line;
    }
?>
```
