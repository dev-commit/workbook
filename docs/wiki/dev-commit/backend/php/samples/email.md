# Отправка сообщения на почту

```php{5-6}
<?php
$to = 'user@example.com, anotheruser@example.com'; // Получатель / получатели
$subject = 'Письмо с сайта';                       // Тема письма
$message = 'Текст письма';                         // Сообщение
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$my = mail($to, $subject, $message, $headers);
if ($my) {
  echo 'Письмо успешно отправлено!';
} else {
  echo 'Письмо не отправлено!';
}
?>
```
