# SSG

- **SSG** - Static Site Generation
- HTML генерируется во время сборки и будет повторно использоваться при каждом запросе

## Build

### 1. Настройка next.config.js

- Что формировать сборку под SSG нужно настроить next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = nextConfig
```
- После этого при build будет создаваться директория out c файлами проекта, которые можно загрузить, н-р на GitHub Pages

### 2. Устранение ошибки с оптимизацией Image

- При использовании Image из 'next/image' при build появится ошибка

```js
import Image from 'next/image';
```
Image Optimization using the default loader is not compatible with export. Possible solutions:

- Use `next start` to run a server, which includes the Image Optimization API
- Configure `images.unoptimized = true` in `next.config.js` to disable the Image Optimization API

Read more: https://nextjs.org/docs/messages/export-image-api

#### 1 способ: Отключить оптимизацию

```js
module.exports = {
  images: {
    unoptimized: true,
  },
}
```
