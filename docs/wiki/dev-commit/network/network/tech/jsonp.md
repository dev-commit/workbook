# JSONP

- **JSONP** (JSON with Padding) - дополнение к базовому формату JSON. Он предоставляет способ запросить данные с сервера, находящегося в другом домене - операцию, запрещённую в типичных веб-браузерах из-за политики ограничения домена
- JSONP - способ загрузки script на лету и обработки script, который вводится на страницу. Это означает введение нового объекта javascript с сервера в клиентское приложение /script
- Стандартное применение JSONP предоставляет междоменный доступ к существующему JSON API путём оборачивания содержимого JSON в вызов функции
- Разрешить браузерным страницам обойти политику ограничения домена путём вставки элемента script
- **JSONPP** (Parameterized JSON with Padding — «параметризованный JSON с подкладкой») — развитие идеи JSONP
- Позволяет только получение данных GET методом. Отправка данных через POST недоступна

## Алгоритм работы

- 1. Инъекция элемента script
- 2. Вызов скрипта с передачей парамером callback
- 3. Сервер реализует выполнение callback с переданным им обязательным объектом. Функция обратного вызова - это только функция, которую вы уже настроили на клиенте, который script загружает вызовы в точке загрузки script для обработки данных, переданных ей

## Инъекция элемента script

- Скрипты, добавленные через JS ведут себя как async

```js
function addScript(src){
	const script = document.createElement('script');
	script.src = src;
	script.type = 'text/javascript';
	script.async = false; // чтобы гарантировать порядок
	document.head.appendChild(script);
}

// загружаться скрипты начнут сразу в порядке 1 -> 2 -> 3
// выполнятся, как только загрузятся, если установлено script.async = false
addScript('1.js');  
addScript('2.js');  
addScript('3.js');
```

## JSONP

```js
function addScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

addScript('https://www.google.com/?id=123&callback=clientFunction');

function clientFunction(arg) {
    //
}
```
