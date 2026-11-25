// Типы глобальных компонентов (регистрируются в theme/index.ts через app.component).
// Нужны, чтобы vue-tsc и редактор проверяли пропсы этих компонентов в .md и .vue.
// При добавлении компонента в theme/index.ts - добавить его и сюда
import type { Content } from "vitepress";
import type VDetails from "../components/v-details.vue";
import type VIframe from "../components/v-iframe.vue";
import type VPadding from "../components/v-padding.vue";
import type VTwo from "../components/v-two.vue";
import type VMarker from "../components/v-marker.vue";
import type VBreadcrumbs from "../components/v-breadcrumbs.vue";
import type VCode from "../components/v-code.vue";
import type VBadge from "../components/v-badge.vue";
import type VSandbox from "../components/v-sandbox.vue";

declare module "vue" {
  interface GlobalComponents {
    // Встроенный компонент VitePress (содержимое страницы)
    Content: typeof Content;
    VDetails: typeof VDetails;
    VIframe: typeof VIframe;
    VPadding: typeof VPadding;
    VTwo: typeof VTwo;
    VMarker: typeof VMarker;
    VBreadcrumbs: typeof VBreadcrumbs;
    VCode: typeof VCode;
    VBadge: typeof VBadge;
    VSandbox: typeof VSandbox;
  }
}

export {};
