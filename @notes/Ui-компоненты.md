## Создание компонента

1. `docs/.vitepress/components/v-<имя>.vue` - компонент
2. `docs/.vitepress/theme/index.ts` - регистрация компонента
3. `docs/.vitepress/types/global-components.d.ts` - тип компонента: проверка пропсов в .md (`npm run typecheck`)
4. `docs/wiki/dev-commit/system/ui-kit/components/v-<имя>.md` - страница компонента в Ui-Kit
5. `docs/wiki/dev-commit/system/ui-kit/build-ui-kit.ts` - пункт меню Ui-Kit
