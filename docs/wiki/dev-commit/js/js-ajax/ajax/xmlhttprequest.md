# XMLHttpRequest

- XMLHttpRequest («XHR») дает возможность из JavaScript делать HTTP-запросы к серверу без перезагрузки страницы
- Ответы на запросы XMLHttpRequest кэшируются, как и обычные страницы

## Методы

		вызов open не открывает соединение. Он лишь настраивает запрос, а коммуникация инициируется методом send
	
HTTP-метод. GET / POST / TRACE / DELETE / PUT и т.д.
адрес запроса. Можно использовать не только http/https, но и другие протоколы, например ftp:// и file://. При этом есть
	ограничения безопасности, называемые «Same Origin Policy»: запрос со страницы можно отправлять только на тот же
	протокол://домен:порт
если установлено в false, то запрос производится синхронно, если true – асинхронно
логин для HTTP-авторизации, если нужны
пароль для HTTP-авторизации, если нужны

		открывает соединение и отправляет запрос на сервер
	
тело запроса

		прерывает выполнение запроса
	

		устанавливает заголовок name запроса со значением value. Отменить setRequestHeader невозможно
	
'Content-Type'
'application/json'

		возвращает значение заголовка ответа name, кроме Set-Cookie и Set-Cookie2
	
'Content-Type'

		возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2. Заголовки возвращаются в виде единой строки.
		Между заголовками стоит перевод строки в два символа "\r\n" (не зависит от ОС), значение заголовка отделено двоеточием с пробелом ": "
	
```bash
Cache-Control: max-age=31536000
Content-Length: 4260
Content-Type: image/png
Date: Sat, 08 Sep 2012 16:53:16 GMT
```

## Свойства XMLHttpRequest

- xhr.status - HTTP-код ответа: 200, 404, 403 и так далее. Может быть также равен 0, если сервер не ответил или при запросе на другой домен
- xhr.statusText - Текстовое описание статуса от сервера: OK, Not Found, Forbidden и т.д.
- xhr.responseText - Текст ответа сервера. Для json JSON.parse(xhr.responseText)
- xhr.responseXML - Если сервер вернул XML, снабдив его правильным заголовком Content-type: text/xml, то браузер создаст из него XML-документ. По нему можно будет делать запросы xhr.responseXml.querySelector("...") и другие
- xhr.timeout - Максимальная продолжительность асинхронного запроса. При превышении этого времени запрос будет оборван и сгенерировано событие ontimeout

```js
xhr.timeout = 30000; // 30 секунд (в миллисекундах)
xhr.ontimeout = function() {
	alert( 'Извините, запрос превысил максимальное время' );
}
```

## События

- onreadystatechange - можно посмотреть «текущее состояние запроса» в свойстве xhr.readyState
- onloadstart - запрос начат
- onprogress - браузер получил очередной пакет данных, можно прочитать текущие полученные данные в responseText
- onabort - запрос был отменён вызовом xhr.abort()
- onerror - произошла ошибка
- onload - запрос был успешно (без ошибок) завершён
- ontimeout - запрос был прекращён по таймауту
- onloadend - запрос был завершён (успешно или неуспешно)

## Свойство xhr.readyState для текущего состояния запроса

- Событие readystatechange происходит несколько раз в процессе отсылки и получения ответа. При этом можно посмотреть «текущее состояние запроса» в свойстве xhr.readyState
- Запрос проходит их в порядке 0 → 1 → 2 → 3 → … → 3 → 4, состояние 3 повторяется при каждом получении очередного пакета данных по сети

```bash
const unsigned short UNSENT           = 0;   # начальное состояние
const unsigned short OPENED           = 1;   # вызван open
const unsigned short HEADERS_RECEIVED = 2;   # получены заголовки
const unsigned short LOADING          = 3;   # загружается тело (получен очередной пакет данных)
const unsigned short DONE             = 4;   # запрос завершён
```

## Асинхронный

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'script.php', true);
xhr.send(); // отправляем запрос, результат придёт в обработчик onreadystatechange

// установка обработчика событий
xhr.onreadystatechange = function() {
    // if (xhr.readyState==4 && xhr.status==200) {
    // 	console.log(xhr.responseText);
    // }

    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr.status + ':' + xhr.statusText);
        return;
    } 
    
    // получить результат из this.responseText или this.responseXML
    console.log(xhr.responseText);
}
```

## Синхронный

- Возможность делать запросы на другой домен и указывать таймаут, в синхронном режиме не работают

```js
const xhr = new XMLHttpRequest();       // создаём новый объект XMLHttpRequest
xhr.open('GET', 'script.php', false); // конфигурируем его: GET-запрос на URL 'script.php'
xhr.send();                           // отсылаем запрос

// если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
	// обработать ошибку (пример вывода: 404: Not Found)
    console.log(xhr.status + ':' + xhr.statusText);
} else {
	// вывести результат (responseText -- текст ответа)
    console.log(xhr.responseText);
}
```
