# `worker_threads`

```js
const { Worker } = require("worker_threads");

const worker = new Worker("./file.js", { workerData });
// worker.on('message', () => {});
// worker.on('error', () => {});
// worker.on('exit', () => {});
```
