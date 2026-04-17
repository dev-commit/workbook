# Отправка сообщения на почту

```php
<?php
    $to = 'user@example.com, anotheruser@example.com'; // получатель / получатели
    $subject = 'Письмо с сайта';                       // тема письма
    $message = 'Текст письма';                         // сообщение
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $my  = mail($to, $subject, $message, $headers);
    if ($my) {
        echo 'Письмо успешно отправлено!';
    } else {
        echo 'Письмо не отправлено!';
    }
?>
```
