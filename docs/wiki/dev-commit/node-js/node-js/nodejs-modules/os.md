# os

- **os** - информация о текущей опрационной системе

```js
const os = require('os');
```

```js
const a = os.platform(); // Название OC
const a = os.arch();     // Архитектура процессора (н-р: x64)
const a = os.cpus();     // Инормация по процессорам
const a = os.freemem();  // Свободная память
const a = os.totalmem(); // Всего памяти
const a = os.homedir();  // Домашняя директория
const a = os.uptime();   // Сколько времени включена система
```
