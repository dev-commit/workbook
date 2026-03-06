# Шрифты

## Раборта со шрифтами

**Подключение шрифта**

> Популярные расширения шрифтов: eot, .ttf, .woff

```css
@font-face {
  font-family: OpenSans; /* Имя шрифта */
  src: url(../font/OpenSans.ttf); /* Путь к файлу со шрифтом */
}
```

**Применение шрифта**

```css
p {
  font-family: OpenSans; /* Семейство шрифта */
}
```

## Семейства шрифтов

| Значение     | Описание            | Пример                       |
| ------------ | ------------------- | ---------------------------- |
| `serif`      | шрифты с засечками  | Times New Roman              |
| `sans-serif` | рубленные шрифты    | Arial                        |
| `cursive`    | курсивные шрифты    | -                            |
| `fantasy`    | декоративные шрифты | SchoolBell                   |
| `monospace`  | моноширинные шрифты | Courier                      |
| Accident     | декоративный        |                              |
| Handwriting  | рукописный          |                              |
| Symbol       | символьный          | FontAwesome, Stroke, Icomoon |

## Инструменты

- https://fonts.google.com/ - Google Fonts
- Font-Face Ninja - Плагин для Google Chrome
