# Изображения

## Сохранение изображения

```php
<?php
  $picture   = $_POST['picture'];   // Изображение в base64
  $file      = $_POST['file'];      // Путь без расширения
  $extension = $_POST['extension']; // Расширение
  $path      = $file . $extension;

  // Конвертирование base64 в изображение
  $picture = base64_decode($picture);
  $picture = imagecreatefromstring($picture);

  // Проверка расширения
  if ($extension == '.png') {
    imagealphablending($picture, false); // Выключение альфа сопряжения
    imagesavealpha($picture, true);      // Установка альфа флага
    header('Content-Type: image/png');   // header
    imagepng($picture, $path);           // Сохранение изображения
  } else {
    imagejpeg($picture, $path, 100);
  }

  // Освобождение памяти
  imagedestroy($picture);
?>
```
