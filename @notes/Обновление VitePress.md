# Обновление VitePress

Версия VitePress в `package.json` зафиксирована (`1.6.4`, без `^`): тема справочника опирается на внутренности VitePress, которые могут измениться в любой версии. Обновлять вручную: `npm install -D -E vitepress@<версия>`.

## Что зависит от внутренностей

- `docs/.vitepress/theme/components/SidebarTop.vue` - кнопка и окно поиска (`VPNavBarSearchButton`, `VPLocalSearchBox` из `vitepress/dist/client/theme-default/components`)
- `docs/.vitepress/theme/composables/nav.js` - копия `useNav`, её подставляет плагин `resolve-custom-nav-composable` в `config.ts`. Если подмена не сработает, `npm run build` остановится с ошибкой
- `docs/.vitepress/theme/components/Layout.vue` и `styles/custom.css` - CSS для классов VitePress (`.VPSidebar`, `.VPContent`, `.VPDoc`, `.VPSidebarItem`)

## Что проверить после обновления

- `npm run build` и `npm run typecheck`
- Десктоп (от 961px): левое меню с поиском, сворачивание левого и верхнего меню, навбар тем, прокрутка при переходе между страницами, переходы по якорям
- Мобильный (до 960px): шапка, «Меню», «На этой странице», меню-гамбургер на ширине 768-960px не закрывается само
