# Токены

- В каждом токене есть поле "iat" (issue at) - момент, когда токен был выпущен

## Виды токенов

| Access Token                                                                                                              | Refresh Token                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| › Авторизация: Сервер присылает Access Token, который можно храниить в LocalStorage или Redux Store                       | › Авторизация: Сервер не присылает Refresh Token, а устанавливает его в Cookie с флагом httpOnly, чтобы только Сервер имел к ним доступ. Время жизни Cookie будет такое же как у Refresh Token |
| › Клиент: отправляет токен на каждый запрос на Сервер в Authorization Headers. В Headers токен будет вида: "Bearer токен" | › Клиент: отправляет токен для получения новой пары Access Token + Refresh Token                                                                                                               |
| › Использование: многоразовый                                                                                             | › Использование: одноразовый                                                                                                                                                                   |
| › Время жизни: около 10 минут                                                                                             | › Время жизни: больше чем у Access Token                                                                                                                                                       |

<!-- <img src="../@img/jwt-tokens.png" width="400px"/> -->

## Структура JWT токена

1. Header - тип токена
2. Payload - данные, которые прислали в ответ
3. Verify Signature - криптонрафическая подпись, полученная путем выполнения функции, описанной в поле Header -> "alg"

<!-- <img src="../@img/jwt-token-structure.png" width="800px"/> -->

## Установка Cookie

```js
const express = require("express");
const cookie = require("cookie");

const authRouter = express.Router();

authRouter.get("/logout", (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", "", {
      httpOnly: true,
      maxAge: 0,
    }),
  );
  res.sendStatus(200);
});
```
