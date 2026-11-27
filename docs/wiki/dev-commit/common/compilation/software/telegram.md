# Telegram

## Форматирование

- `__Курсив__`
- `**Жирный**`
- `~~Зачеркнутый~~`

## Telegram Bot

### 1. Создать бота

1. Открыть бота BotFather https://t.me/BotFather
2. Создать нового бота _"/newbot"_
3. Ввести имя для бота (произвольное)
4. Ввести username (должно заканчиваться на _"bot"_, н-р: "my_bot")
5. После создания бота появится _"Token to access the HTTP API"_

### 2. Получить ID пользователя

После этого нужно получить id пользователя Telegram, которому будут отправляться сообщения

1. Перейти по ссылке https://t.me/getmyid_bot и запустить бота в своем Telegram
2. В ответ бот выдаст сообщение: "Your user ID: xxxx; Current chat ID: xxxx"

### 3. Отправка сообщения в бот через сайт

```html
<button id="send">Send</button>
```

```js
const userId = "xxxx";
const token = "xxxx:xxxx";
const message = "O brave new world";

const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${message}`;

const element = document.querySelector("#send");

element.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((body) => console.log(body));
});
```

::: warning

- Токен в клиентском JS виден любому посетителю сайта, и с ним можно управлять ботом. В рабочем проекте запрос к Telegram API отправляют с сервера

:::
