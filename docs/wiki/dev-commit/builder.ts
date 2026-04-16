import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiUiKit from "./system/ui-kit/build-ui-kit";
import wikiMenu from "./system/menu/build-menu";
import wikiHtml from "./layout/html/build-html";
import wikiSvelte from "./frameworks/svelte/build-svelte";
import wikiHttp from "./network/http/build-http";
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
import wikiAi from "./common/ai/build-ai";
import wikiDataStructures from "./theory/data-structures/build-data-structures";
import wikiMethodologyDev from "./theory/methodology-dev/build-methodology-dev";
import wikiReact from "./frameworks/react/build-react";
import wikiApproaches from "./theory/approaches/build-approaches";
import wikiArchitecture from "./theory/architecture/build-architecture";
import wikiAgile from "./theory/agile/build-agile";
import wikiProgramming from "./theory/programming/build-programming";
import wikiAlgoritms from "./theory/algoritms/build-algoritms";
import wikiDesignPatterns from "./theory/design-patterns/build-design-patterns";
import wikiSolid from "./theory/solid/build-solid";
import wikiRefactoring from "./theory/refactoring/build-refactoring";
import wikiNetwork from "./network/network/build-network";
import wikiAuth from "./network/auth/build-auth";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Теория",
    children: getNav([
      wikiAlgoritms,
      wikiDataStructures,
      wikiProgramming,
      wikiArchitecture,
      wikiApproaches,
      null,
      wikiDesignPatterns,
      wikiSolid,
      wikiRefactoring,
      null,
      wikiMethodologyDev,
      wikiAgile,
    ]),
  },
  {
    text: "Network",
    children: getNav([wikiHttp, wikiNetwork, wikiAuth]),
  },
  {
    text: "Фреймворки",
    children: getNav([wikiReact, null, wikiVue, null, wikiSvelte]),
  },
  {
    text: "Utils",
    children: getNav([wikiIde, wikiAi]),
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
    text: "System",
    children: getNav([wikiUiKit, wikiMenu, wikiLinks, wikiBooks]),
  },
];

export const SIDEBAR = getSidebar([
  wikiUiKit,
  wikiHtml,
  wikiMenu,
  wikiSvelte,
  wikiHttp,
  wikiNetwork,
  wikiAuth,
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
  wikiAi,
  wikiDataStructures,
  wikiAlgoritms,
  wikiDesignPatterns,
  wikiSolid,
  wikiMethodologyDev,
  wikiReact,
  wikiRefactoring,
  wikiArchitecture,
  wikiApproaches,
  wikiProgramming,
  wikiAgile,
]);
