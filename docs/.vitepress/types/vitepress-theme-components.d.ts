// Заглушка для внутренних компонентов темы VitePress
// (импорт вида "vitepress/dist/client/theme-default/components/VPContent.vue").
// Подключается через paths в tsconfig.json: vue-tsc не проверяет их исходники,
// у которых нет типов. Пропсы этих компонентов не проверяются (принимается любой проп).
import type { DefineComponent } from "vue";

declare const component: DefineComponent<Record<string, any>>;
export default component;
