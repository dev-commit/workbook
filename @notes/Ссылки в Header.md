# Ссылки в Header

> docs/wiki/dev-commit/builder.ts

Навбар тем (верхнее меню на десктопе) строится из массива `NAV`: группа - подпись `text` и темы `children`. Тема - объект из `build-*.ts` (`title`, `path`, `theme`), `getNav` превращает темы в ссылки, `null` - перенос строки внутри группы.

```ts
export const NAV: IHeaderMenuNav[] = [
  {
    text: "JavaScript",
    children: getNav([
      wikiEventLoop,
      wikiCriticalRenderingPath,
      null, // Следующие темы - с новой строки
      wikiJavaScript,
      wikiObject,
    ]),
  },
];
```

- Цвет кнопки темы - поле `theme` в `build-*.ts`, стили `.link.theme-*` в `docs/.vitepress/theme/components/VPNavbar.vue`
- `docs/.vitepress/config.ts` передаёт `NAV` в `themeConfig.nav`: `null` становится флагом `newRow` у следующей темы
