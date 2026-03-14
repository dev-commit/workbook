import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiUiKit from "./system/ui-kit/build-ui-kit";
import wikiMenu from "./system/menu/build-menu";
import wikiHtml from "./layout/html/build-html";
import wikiSvelte from "./frameworks/svelte/build-svelte";
import wikiNetwork from "./theory/network/build-network";
import wikiCss from "./layout/css/build-css";
import wikiVue from "./frameworks/vue/build-vue";
import wikiLayout from "./layout/layout/build-layout";
import wikiIde from "./common/ide/build-ide";
import wikiSass from "./layout/sass/build-sass";
import wikiBooks from "./system/books/build-books";
import wikiLinks from "./system/links/build-links";
import wikiSvg from "./layout/svg/build-svg";
import wikiCssFlexbox from "./layout/css-flexbox/build-css-flexbox";
import wikiCssGrid from "./layout/css-grid/build-css-grid";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Фреймворки",
    children: getNav([wikiSvelte, wikiVue]),
  },
  {
    text: "Вёрстка",
    children: getNav([
      wikiHtml,
      wikiCss,
      wikiLayout,
      wikiCssFlexbox,
      wikiCssGrid,
      wikiSvg,
      wikiSass,
    ]),
  },
  {
    text: "Теория",
    children: getNav([wikiNetwork]),
  },
  {
    text: "Общее",
    children: getNav([wikiIde]),
  },
  {
    text: "System",
    children: getNav([wikiUiKit, wikiMenu, wikiLinks, wikiBooks]),
  },
];

export const SIDEBAR = getSidebar([
  wikiUiKit,
  wikiHtml,
  wikiMenu,
  wikiSvelte,
  wikiNetwork,
  wikiCss,
  wikiVue,
  wikiLayout,
  wikiIde,
  wikiSass,
  wikiBooks,
  wikiLinks,
  wikiSvg,
  wikiCssFlexbox,
  wikiCssGrid,
]);
