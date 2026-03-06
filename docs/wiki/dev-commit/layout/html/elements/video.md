# Видео и аудио

## HTML-теги

::: details `<video />`

```html
<video
  src="video/video.mp4"
  controls="controls"
  poster="poster.jpg"
  width="100%"
  height="100%"
></video>
```

:::

::: details `<audio />`

```html
<audio src="audio/audio.mp3" controls></audio>
```

:::

## Встраивание видео с YouTube через `<iframe />`

### Атрибуты тега `<iframe />`

- `width` - ширина блока с видео
- `height` - высота блока с видео
- `src` - ссылка на ресурс видео
- `title` - заголовок видео
- `frameborder` - рамка для iframe
- `allow` - разрешения использовать accelerometer, autoplay и т.д.
- `referrerpolicy` - указывает реферальные данные, которые необходимо отправлять при загрузке внешнего документа во фрейме
- `allowfullscreen` - разрешен полноэкранный режим

::: details Код для встраивания

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/BTMjD7_evjE"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```

:::

::: details Query Parameters

- `autoplay=1` - включения autoplay (не работает без “mute=1”)
- `mute=1` - выключить звук
- `controls=0` - убрать элементы управления
  :::

::: details Добавление Query Parameters к URL
**Структура URL**

```html
<iframe src="https://www.youtube.com/embed/BTMjD7_evjE"></iframe>
```

Базовый URL формата: https://www.youtube.com/embed/someId состоит из:

- `https` - протокол передачи данных
- `www` - поддомен для сайта
- `youtube.com` - домен
- `embed` - указывает, что видео будет встраиваться
- `someId` - ID видео (в примере это “BTMjD7_evjE”)

**Добавление Query Parameters**

- Первый из Query Parameters добавляется после “ID видео” через символ `?`

```html
<iframe src="https://www.youtube.com/embed/BTMjD7_evjE?autoplay=1"></iframe>
```

- Следующий параметр добавляется через символ амперсанд `&`, который еще может выглядеть в виде HTML-кода `&amp;`

```html
<iframe
  src="https://www.youtube.com/embed/BTMjD7_evjE?autoplay=1&mute=1"
></iframe>
```

- Последующие параметры добавляются через символ амперсанд `&`

:::

## Примеры

::: details Background Video

- Применение `object-fit`
- Применение `filter`

<v-iframe height="550" src="https://codepen.io/LetsCode-Dev/embed/BaezdMo" />
:::

::: details YouTube Video
<v-iframe height="550" src="https://codepen.io/LetsCode-Dev/embed/PoveXLe" />
:::
