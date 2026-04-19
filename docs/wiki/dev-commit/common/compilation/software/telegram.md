# Telegram

## Форматирование

- __Курсив__
- **Жирный**
- ~~Зачеркнутый~~

## Telegram Bot

### 1. Создать бота

1. Открыть бота BotFather https://t.me/BotFather
2. Создать нового бота "/newbot"
3. Ввести имя для бота (произвольное)
4. Ввести username (должно заканчиаваться на "bot", н-р: "my_bot")
5. После создание бота появится "Token to access the HTTP API"

### 2. Получить ID пользователя

После этого нужно получить id пользователя Telegram, которому будут отправляться сообщения
1. Перейти по ссылке https://t.me/getmyid_bot и запустить бота в своем Telegram
2. В ответ бот выдаст сообщение: "Your user ID: xxxx; Current chat ID: xxxx"

### 3. Отправка сообщение в бот через сайт

```html
<button id="send">Send</button>
```

```js
const userId = 'xxxx';
const token = 'xxxx:xxxx';
const message = 'O brave new world';

const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${message}`;

const element = document.querySelector('#send');

element.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(body => console.log(body))	
});
```
