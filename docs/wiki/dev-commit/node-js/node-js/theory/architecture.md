# Структура Node.js

- Node.js является Middleware между нашим кодом и ОС

## Общая структура

<!-- <img src="../@img/node-js-architecture.png" width="550px"/> -->

- Node.js API - Core JavaScript API + дополнения
- Node.js Bindings (Нативные биндинги) - соединяют JS-код и C/C++ код более низкого уровня

- **libuv** - приносит абстракцию над системный Демультиплексором. Т.к. в каждой система свой Демультиплексор (Linux, Windows и т.д.)
